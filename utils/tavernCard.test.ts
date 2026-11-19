import { describe, expect, it } from 'vitest';
import JSZip from 'jszip';
import { parseTavernCard, tavernCardToProfilePatch, tavernLoreToWorldbooks } from './tavernCard';

/* ---------- 测试辅助：构造真实 PNG 二进制（合法 CRC32 + tEXt 块） ---------- */

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(data: Uint8Array): number {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < data.length; i++) c = CRC_TABLE[(c ^ data[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  for (let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
  out.set(data, 8);
  view.setUint32(8 + data.length, crc32(out.subarray(4, 8 + data.length)));
  return out;
}

/** 生成 1x1 PNG，可附带多个 tEXt 关键字。 */
function makePng(textChunks: Array<{ keyword: string; text: string }>): Uint8Array {
  const sig = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = new Uint8Array(13);
  const v = new DataView(ihdr.buffer);
  v.setUint32(0, 1); v.setUint32(4, 1);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  const parts: Uint8Array[] = [sig, pngChunk('IHDR', ihdr)];
  for (const c of textChunks) {
    const kw = new TextEncoder().encode(c.keyword);
    const tx = new TextEncoder().encode(c.text);
    const data = new Uint8Array(kw.length + 1 + tx.length);
    data.set(kw, 0);
    data[kw.length] = 0;
    data.set(tx, kw.length + 1);
    parts.push(pngChunk('tEXt', data));
  }
  parts.push(pngChunk('IEND', new Uint8Array(0)));
  const out = new Uint8Array(parts.reduce((s, p) => s + p.length, 0));
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

function mockFile(name: string, bytes: Uint8Array): File {
  return {
    name,
    arrayBuffer: async () => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
  } as unknown as File;
}

const b64 = (s: string) => Buffer.from(s, 'utf8').toString('base64');

const V2_CARD = {
  spec: 'chara_card_v2',
  spec_version: '2.0',
  data: {
    name: '赫敏·格兰杰',
    description: '聪明的女巫',
    personality: '勤奋、好奇',
    scenario: '霍格沃茨图书馆',
    first_mes: '你在找什么书？',
    mes_example: '<START>示例对话',
    system_prompt: '你是一个角色扮演助手',
    post_history_instructions: '保持角色语气',
    alternate_greetings: ['另一个开场'],
    character_book: {
      entries: [
        { keys: ['魔法', '咒语'], content: '魔法是世界核心', comment: '魔法设定', position: 'before_char' },
      ],
    },
  },
};

const V3_CARD = {
  spec: 'chara_card_v3',
  spec_version: '3.0',
  data: {
    name: 'V3 斯内普',
    description: '阴沉的魔药课教授',
    personality: '严厉、刻薄',
    scenario: '魔药课教室',
    first_mes: '把坩埚拿出来。',
    mes_example: '',
    character_book: null,
  },
};

/* ---------- 真实文件解析测试 ---------- */

describe('parseTavernCard · 真实 PNG 二进制', () => {
  it('解析 tEXt chara(base64) 的 V2 卡：字段 + 头像 + 内嵌世界书', async () => {
    const png = makePng([{ keyword: 'chara', text: b64(JSON.stringify(V2_CARD)) }]);
    const card = await parseTavernCard(mockFile('hermione.png', png));

    expect(card.spec).toBe('chara_card_v2');
    expect(card.name).toBe('赫敏·格兰杰');
    expect(card.description).toBe('聪明的女巫');
    expect(card.personality).toBe('勤奋、好奇');
    expect(card.first_mes).toBe('你在找什么书？');
    expect(card.character_book?.entries).toHaveLength(1);
    // 头像来自 PNG 本体，且不能依赖 FileReader
    expect(card.avatar).toMatch(/^data:image\/png;base64,/);

    const patch = tavernCardToProfilePatch(card);
    expect(patch.systemPrompt).toContain('勤奋、好奇');
    expect(patch.worldview).toBe('霍格沃茨图书馆');

    const books = tavernLoreToWorldbooks(card) as any[];
    expect(books).toHaveLength(1);
    expect(books[0].key).toEqual(['魔法', '咒语']);
    // 关键回归：世界书必须有稳定 id，才能与 mountedWorldbooks 对上
    expect(books[0].id).toMatch(/^wb-tavern-/);
  });

  it('V3 ccv3 优先于 chara，且支持块内裸 JSON', async () => {
    const png = makePng([
      { keyword: 'chara', text: b64(JSON.stringify(V2_CARD)) },
      { keyword: 'ccv3', text: JSON.stringify(V3_CARD) },
    ]);
    const card = await parseTavernCard(mockFile('snape.png', png));
    expect(card.spec).toBe('chara_card_v3');
    expect(card.name).toBe('V3 斯内普');
    expect(card.first_mes).toBe('把坩埚拿出来。');
  });

  it('base64 中夹换行与 data-URI 前缀也能解析', async () => {
    const wrapped = ('data:application/json;base64,' + b64(JSON.stringify(V2_CARD))).replace(/(.{60})/g, '$1\n');
    const png = makePng([{ keyword: 'chara', text: wrapped }]);
    const card = await parseTavernCard(mockFile('wrapped.png', png));
    expect(card.name).toBe('赫敏·格兰杰');
  });

  it('普通 PNG（无 chara/ccv3）明确报错，便于导入入口回落', async () => {
    const png = makePng([{ keyword: 'Author', text: 'someone' }]);
    await expect(parseTavernCard(mockFile('plain.png', png)))
      .rejects.toThrow(/chara\/ccv3/);
  });
});

describe('parseTavernCard · JSON / charx', () => {
  it('解析纯 JSON 卡（V2 spec 包装）', async () => {
    const file = mockFile('card.json', new TextEncoder().encode(JSON.stringify(V2_CARD)));
    const card = await parseTavernCard(file);
    expect(card.name).toBe('赫敏·格兰杰');
    expect(card.character_book?.entries).toHaveLength(1);
    expect(card.avatar).toBeUndefined();
  });

  it('拒绝 SullyOS 自有卡，避免误判导致 memories/挂载世界书丢失', async () => {
    const own = {
      type: 'sully_character_card',
      name: '自有角色', description: '人设', systemPrompt: '...',
      memories: [{ id: 'm1' }], mountedWorldbooks: [{ id: 'wb1' }],
    };
    const file = mockFile('own.json', new TextEncoder().encode(JSON.stringify(own)));
    await expect(parseTavernCard(file)).rejects.toThrow();
  });

  it('解析 V1 裸字段 JSON 卡', async () => {
    const v1 = { name: '哈利', description: '救世主', personality: '勇敢', scenario: '霍格沃茨', first_mes: '你好', mes_example: '' };
    const file = mockFile('v1.json', new TextEncoder().encode(JSON.stringify(v1)));
    const card = await parseTavernCard(file);
    expect(card.name).toBe('哈利');
    expect(card.spec).toBeUndefined();
  });

  it('解析老版 character_book.entries 为数字键对象', async () => {
    const legacy = {
      name: '老卡', description: '测试对象形式 entries',
      character_book: { entries: {
        '0': { keys: ['猫头鹰'], content: '信使', position: 'after_char' },
        '1': { keys: ['扫帚'], content: '飞行工具', position: 1 },
      } },
    };
    const file = mockFile('legacy.json', new TextEncoder().encode(JSON.stringify(legacy)));
    const card = await parseTavernCard(file);
    expect(card.character_book?.entries).toHaveLength(2);
    expect(tavernLoreToWorldbooks(card)).toHaveLength(2);
  });

  it('解析 .charx（zip 内 card.json + 图片头像）', async () => {
    const zip = new JSZip();
    zip.file('card.json', JSON.stringify(V2_CARD));
    zip.file('portrait.png', makePng([]));
    const buf = await zip.generateAsync({ type: 'arraybuffer' });
    const card = await parseTavernCard(mockFile('hermione.charx', new Uint8Array(buf)));
    expect(card.name).toBe('赫敏·格兰杰');
    expect(card.avatar).toMatch(/^data:image\/png;base64,/);
  });
});
