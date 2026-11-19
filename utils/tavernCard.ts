/**
 * SillyTavern（酒馆）角色卡解析器 —— 自用二改。
 *
 * 支持格式：
 *  - PNG（tEXt 块 chara / ccv3，base64(JSON)）—— TavernAI V1/V2/V3
 *  - 纯 JSON 卡（V1 裸字段 / V2 spec 包装）
 *  - .charx（zip，内含 card.json + 图片）
 *
 * 输出统一的 TavernCardData，由 Character.tsx 映射到 SullyOS 的 CharacterProfile。
 */
import JSZip from 'jszip';

export interface TavernLoreEntry {
  keys?: string[];
  key?: string[];
  secondary_keys?: string[];
  keysecondary?: string[];
  content: string;
  comment?: string;
  name?: string;
  constant?: boolean;
  selective?: boolean;
  insertion_order?: number;
  order?: number;
  position?: string | number;
  enabled?: boolean;
  disable?: boolean;
  probability?: number;
  useProbability?: boolean;
  depth?: number;
  scan_depth?: number;
  case_sensitive?: boolean;
  match_whole_words?: boolean;
  [key: string]: any;
}

export interface TavernCardData {
  spec?: string;
  name: string;
  description: string;
  personality: string;
  scenario: string;
  first_mes: string;
  mes_example: string;
  system_prompt?: string;
  post_history_instructions?: string;
  alternate_greetings?: string[];
  tags?: string[];
  creator?: string;
  creator_notes?: string;
  character_version?: string;
  character_book?: { entries: TavernLoreEntry[] } | null;
  /** 角色头像（data URL）；从 PNG 卡图像或 charx 里提取。 */
  avatar?: string;
}

const utf8 = new TextDecoder('utf-8');

function isPng(bytes: Uint8Array): boolean {
  return bytes.length >= 8 && [137, 80, 78, 71, 13, 10, 26, 10].every((b, i) => bytes[i] === b);
}

/** 解析 PNG 的 tEXt / zTXt / iTXt 块中的 base64 JSON（chara / ccv3）。 */
async function parsePngCard(bytes: Uint8Array): Promise<TavernCardData> {
  if (!isPng(bytes)) throw new Error('不是有效的 PNG 图片');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let chara: string | null = null;
  let ccv3: string | null = null;

  for (let start = 8; start + 12 <= bytes.length;) {
    const length = view.getUint32(start);
    const end = start + 12 + length;
    if (end > bytes.length) break;
    const type = String.fromCharCode(...bytes.subarray(start + 4, start + 8));
    if (type === 'IEND') break;
    if (type === 'tEXt' || type === 'zTXt' || type === 'iTXt') {
      const data = bytes.subarray(start + 8, start + 8 + length);
      // tEXt: keyword \0 text
      const nul = data.indexOf(0);
      if (nul > 0) {
        const keyword = utf8.decode(data.subarray(0, nul));
        if (keyword === 'chara' || keyword === 'ccv3') {
          let text = '';
          if (type === 'tEXt') {
            text = utf8.decode(data.subarray(nul + 1));
          } else if (type === 'zTXt') {
            // zTXt: keyword \0 compressionMethod(1) zlibData
            try {
              text = utf8.decode(await8(
                new Blob([data.subarray(nul + 2)]).stream().pipeThrough(new DecompressionStream('deflate')),
              ));
            } catch { /* ignore */ }
          } else {
            // iTXt: keyword \0 compressionFlag(1) compressionMethod(1) languageTag \0 translatedKeyword \0 text
            const flag = data[nul + 1];
            let q = nul + 2;
            while (q < data.length && data[q] !== 0) q++; // languageTag
            q++;
            while (q < data.length && data[q] !== 0) q++; // translatedKeyword
            q++;
            const payload = data.subarray(q);
            try {
              text = flag === 1
                ? utf8.decode(await8(new Blob([payload]).stream().pipeThrough(new DecompressionStream('deflate'))))
                : utf8.decode(payload);
            } catch { /* ignore */ }
          }
          if (keyword === 'chara') chara = text;
          if (keyword === 'ccv3') ccv3 = text;
        }
      }
    }
    start = end;
  }

  const raw = ccv3 || chara;
  if (!raw) throw new Error('PNG 中没有找到酒馆角色卡数据（chara/ccv3）');
  // 常见是 base64(JSON)，也可能是裸 JSON
  let json: any;
  try {
    json = JSON.parse(raw);
  } catch {
    try {
      // atob() 返回的是 Latin-1 字符串（每字符一个字节），直接 JSON.parse 会让
      // base64 里的 UTF-8 中文乱码。必须先把字节还原再按 UTF-8 解码。
      const bin = atob(raw.replace(/\s+/g, '').replace(/^data:[^,]*,/i, ''));
      const utf8Bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) utf8Bytes[i] = bin.charCodeAt(i);
      json = JSON.parse(utf8.decode(utf8Bytes));
    } catch {
      throw new Error('角色卡数据无法解析（base64/JSON 均失败）');
    }
  }
  const data = normalizeTavernJson(json);
  // 用 PNG 本体作为头像。不依赖 FileReader（node 测试环境/部分 WebView 无此 API）。
  try {
    data.avatar = bytesToDataUrl(bytes, 'image/png');
  } catch { /* 头像转换失败不应阻断整张卡导入 */ }
  return data;
}

/** 浏览器/node 通用的 bytes → data URL（不依赖 FileReader）。 */
function bytesToDataUrl(bytes: Uint8Array, mime: string): string {
  const parts: string[] = [];
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    let s = '';
    for (let j = i; j < Math.min(i + CHUNK, bytes.length); j++) s += String.fromCharCode(bytes[j]);
    parts.push(s);
  }
  return `data:${mime};base64,${btoa(parts.join(''))}`;
}

// DecompressionStream 需要 await Response；封装成同步可用的数组读取
function await8(stream: ReadableStream<Uint8Array>): Promise<ArrayBuffer> {
  return new Response(stream).arrayBuffer();
}

function normalizeTavernJson(json: any): TavernCardData {
  if (!json || typeof json !== 'object') throw new Error('角色卡内容不是有效对象');
  // V2/V3: 数据在 data 下
  const d = json.data && typeof json.data === 'object' ? json.data : json;
  const spec = typeof json.spec === 'string' ? json.spec : undefined;
  const name = String(d.name || '未命名角色');
  const description = String(d.description || '');
  if (!description && !d.personality && !d.scenario) {
    throw new Error('角色卡缺少基本人设字段');
  }
  // 老版酒馆卡的 character_book.entries 可能是以数字为键的对象而非数组
  const rawBook = d.character_book ?? json.character_book;
  let book: { entries: TavernLoreEntry[] } | null = null;
  if (rawBook && typeof rawBook === 'object') {
    const entries = Array.isArray(rawBook.entries)
      ? rawBook.entries
      : rawBook.entries && typeof rawBook.entries === 'object'
        ? Object.keys(rawBook.entries).sort((a, b) => Number(a) - Number(b)).map(k => rawBook.entries[k])
        : [];
    if (entries.length) book = { ...rawBook, entries };
  }
  return {
    spec,
    name,
    description,
    personality: String(d.personality || ''),
    scenario: String(d.scenario || ''),
    first_mes: String(d.first_mes || ''),
    mes_example: String(d.mes_example || ''),
    system_prompt: typeof d.system_prompt === 'string' ? d.system_prompt : undefined,
    post_history_instructions: typeof d.post_history_instructions === 'string' ? d.post_history_instructions : undefined,
    alternate_greetings: Array.isArray(d.alternate_greetings) ? d.alternate_greetings.map(String) : [],
    tags: Array.isArray(d.tags) ? d.tags.map(String) : [],
    creator: typeof d.creator === 'string' ? d.creator : undefined,
    creator_notes: typeof d.creator_notes === 'string' ? d.creator_notes : undefined,
    character_version: typeof d.character_version === 'string' ? d.character_version : undefined,
    character_book: book,
  };
}

async function parseCharx(buffer: ArrayBuffer): Promise<TavernCardData> {
  const zip = await JSZip.loadAsync(buffer);
  const cardFile = zip.file(/card\.json$/i)[0] || zip.file(/^[^/]*\.json$/i)[0];
  if (!cardFile) throw new Error('charx 包中没有 card.json');
  const text = await cardFile.async('string');
  const data = normalizeTavernJson(JSON.parse(text));
  // 找图片作为头像
  const imgFile = zip.file(/\.(png|jpg|jpeg|webp)$/i)[0];
  if (imgFile) {
    const base64 = await imgFile.async('base64');
    const mime = /\.jpe?g$/i.test(imgFile.name) ? 'image/jpeg' : /webp$/i.test(imgFile.name) ? 'image/webp' : 'image/png';
    data.avatar = `data:${mime};base64,${base64}`;
  }
  return data;
}

/** 主入口：根据文件内容自动识别格式并解析。 */
export async function parseTavernCard(file: File): Promise<TavernCardData> {
  const name = file.name.toLowerCase();
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (name.endsWith('.charx')) {
    return parseCharx(buffer);
  }
  if (isPng(bytes)) {
    return await parsePngCard(bytes);
  }
  // JSON
  const text = utf8.decode(bytes);
  try {
    const parsed = JSON.parse(text);
    // SullyOS 自有角色卡同样带 name + description，若被当成酒馆卡吞掉，
    // memories / mountedWorldbooks / API 设置等自有字段会全部丢失。
    if (parsed && parsed.type === 'sully_character_card') {
      throw new Error('这是 SullyOS 自有角色卡，应走原导入流程');
    }
    return normalizeTavernJson(parsed);
  } catch {
    throw new Error('无法识别的角色卡格式（支持酒馆 PNG / JSON / charx）');
  }
}

/** 判断一个文件是否可能是酒馆卡（用于在导入入口分流）。 */
export function looksLikeTavernCard(file: File): boolean {
  const n = file.name.toLowerCase();
  return n.endsWith('.charx') || n.endsWith('.png') || n.endsWith('.json') || n.endsWith('.webp');
}

/** 酒馆 position 字段 → SullyOS 数字位置。 */
function mapPosition(pos: string | number | undefined): number {
  if (typeof pos === 'number') return Math.max(0, Math.min(6, pos));
  switch (String(pos || '').toLowerCase()) {
    case 'before_char': return 0;
    case 'after_char': return 1;
    case 'authors_note_top': return 2;
    case 'authors_note_bottom': return 3;
    case 'at_depth': return 4;
    case 'before_examples': return 5;
    case 'after_examples': return 6;
    default: return 1;
  }
}

/** 把酒馆 character_book.entries 转成 SullyOS 的 MountedWorldbook 数组。 */
export function tavernLoreToWorldbooks(card: TavernCardData, now = Date.now()): Array<Record<string, any>> {
  const entries = card.character_book?.entries || [];
  return entries
    .filter(e => e && typeof e.content === 'string' && e.content.trim())
    .map((e, i) => {
      const primary = (e.keys || e.key || []).map(String);
      const secondary = (e.secondary_keys || e.keysecondary || []).map(String);
      const constant = e.constant === true || primary.length === 0;
      return {
        id: `wb-tavern-${now}-${i}-${Math.random().toString(36).slice(2, 7)}`,
        title: String(e.comment || e.name || `条目 ${i + 1}`),
        content: String(e.content),
        category: `${card.name || '导入角色'} 的世界书`,
        key: primary,
        keysecondary: secondary,
        constant,
        selective: e.selective === true || secondary.length > 0,
        selectiveLogic: 0,
        order: Number.isFinite(Number(e.insertion_order ?? e.order)) ? Number(e.insertion_order ?? e.order) : 100,
        position: mapPosition(e.position),
        disable: e.enabled === false || e.disable === true,
        probability: Number.isFinite(Number(e.probability)) ? Number(e.probability) : 100,
        useProbability: e.useProbability === true,
        depth: Math.max(0, Math.floor(Number(e.depth ?? 4)) || 4),
        role: 0,
        scanDepth: e.scan_depth == null ? null : Math.max(0, Math.floor(Number(e.scan_depth))),
        caseSensitive: e.case_sensitive == null ? null : e.case_sensitive === true,
        matchWholeWords: e.match_whole_words == null ? null : e.match_whole_words === true,
        createdAt: now,
        updatedAt: now,
      };
    });
}

/** 把酒馆卡的人设字段拼成 SullyOS 的 systemPrompt / description。 */
export function tavernCardToProfilePatch(card: TavernCardData): {
  name: string;
  description: string;
  systemPrompt: string;
  worldview: string;
  firstMes: string;
  alternateGreetings: string[];
  exampleDialogues: string;
  avatar?: string;
  tavernMeta: { creator?: string; creatorNotes?: string; tags?: string[]; characterVersion?: string; spec?: string };
} {
  const systemParts: string[] = [];
  if (card.personality) systemParts.push(`【性格】\n${card.personality}`);
  if (card.system_prompt) systemParts.push(card.system_prompt);
  if (card.post_history_instructions) systemParts.push(`【后置指令】\n${card.post_history_instructions}`);
  return {
    name: card.name,
    description: card.description,
    systemPrompt: systemParts.join('\n\n'),
    worldview: card.scenario,
    firstMes: card.first_mes,
    alternateGreetings: card.alternate_greetings || [],
    exampleDialogues: card.mes_example,
    avatar: card.avatar,
    tavernMeta: {
      creator: card.creator,
      creatorNotes: card.creator_notes,
      tags: card.tags,
      characterVersion: card.character_version,
      spec: card.spec,
    },
  };
}
