/**
 * SillyTavern（酒馆）预设导入器 —— 自用二改。
 *
 * 把酒馆导出的 preset JSON 转成 SullyOS 的 StoryTheaterPreset，
 * 这样酒馆的 temperature/top_p/prompts 布局能在剧情剧场里直接用。
 *
 * 酒馆 preset 典型结构：
 * {
 *   "name": "Default", "temperature": 0.7, "top_p": 0.9,
 *   "top_k": 40, "repetition_penalty": 1.05, "presence_penalty": 0,
 *   "frequency_penalty": 0, "max_tokens": 2000,
 *   "prompts": [
 *     { "identifier": "main", "role": 0, "content": "...", "enabled": true },
 *     { "identifier": "charJailbreak", "role": 0, "content": "...", "enabled": true },
 *     ...
 *   ]
 * }
 * role: 0=system, 1=user, 2=assistant
 */
import type {
  StoryTheaterPreset, StoryTheaterPresetPrompt, StoryTheaterPresetDocument,
} from '../types';

const clamp = (v: unknown, min: number, max: number, fallback: number): number => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
};

/** 根据酒馆 prompt 的 identifier 推断 SullyOS marker。 */
function inferMarker(identifier: string): StoryTheaterPresetPrompt['marker'] | undefined {
  const id = identifier.toLowerCase();
  if (/world.?info|world.?book|lorebook|worldbefore/.test(id)) return 'world_before';
  if (/worldafter/.test(id)) return 'world_after';
  if (/char|persona|character/.test(id)) return 'characters';
  if (/scenario|situation|plot|setting/.test(id)) return 'scenario';
  if (/example|dialogue.?example|mes.?example/.test(id)) return 'examples';
  if (/hist|chat|memory/.test(id)) return 'history';
  if (/user|persona.?user/.test(id)) return 'user';
  return undefined;
}

function mapRole(role: unknown): 'system' | 'user' | 'assistant' {
  if (role === 1 || role === 'user') return 'user';
  if (role === 2 || role === 'assistant' || role === 'model') return 'assistant';
  return 'system';
}

export function isSillyTavernPreset(json: any): boolean {
  if (!json || typeof json !== 'object') return false;
  // 有 prompts 数组、且有酒馆典型采样字段或 identifier 字段
  const hasPrompts = Array.isArray(json.prompts);
  const hasStFields = json.temperature != null || json.top_p != null || json.repetition_penalty != null;
  const hasIdentifiers = hasPrompts && json.prompts.some((p: any) => p && typeof p.identifier === 'string');
  return hasPrompts && (hasStFields || hasIdentifiers);
}

export function parseSillyTavernPreset(
  rawText: string,
  sourceFileName = 'tavern-preset.json',
  now = Date.now(),
): StoryTheaterPreset {
  const json = JSON.parse(rawText);
  if (!isSillyTavernPreset(json)) {
    throw new Error('不是受支持的酒馆预设文件（需要含 prompts 与采样参数的 JSON）');
  }

  const generation = {
    temperature: clamp(json.temperature, 0, 2, 0.9),
    topP: clamp(json.top_p, 0, 1, 1),
    frequencyPenalty: clamp(json.frequency_penalty, -2, 2, 0),
    presencePenalty: clamp(json.presence_penalty, -2, 2, 0),
    // 酒馆 max_tokens 可能很小，兜底到剧场可用的下限
    maxTokens: clamp(json.max_tokens, 256, 32000, 8000),
  };

  const prompts: StoryTheaterPresetPrompt[] = (json.prompts as any[])
    .filter(p => p && typeof p === 'object')
    .map((p, i) => {
      const identifier = String(p.identifier || p.name || `prompt_${i}`);
      const marker = inferMarker(identifier);
      return {
        id: `stp-${now}-${i}-${Math.random().toString(36).slice(2, 7)}`,
        name: identifier,
        enabled: p.enabled !== false,
        role: mapRole(p.role),
        content: typeof p.content === 'string' ? p.content : '',
        ...(marker ? { marker } : {}),
      } as StoryTheaterPresetPrompt;
    })
    // marker 槽位（世界书 / 角色 / 历史等）通常 content 为空，靠占位符工作，必须保留；
    // 无 marker 的空条目才是无意义噪音，过滤掉。
    .filter(p => !!p.marker || !!p.content.trim());

  // 若没有识别出任何 marker，补一组默认的槽位占位，保证剧场装配仍能工作
  if (!prompts.some(p => p.marker)) {
    prompts.push(
      { id: `stp-${now}-wb`, name: '世界书', enabled: true, role: 'system', content: '', marker: 'world_after' },
      { id: `stp-${now}-ch`, name: '角色资料', enabled: true, role: 'system', content: '', marker: 'characters' },
      { id: `stp-${now}-hist`, name: '聊天历史', enabled: true, role: 'system', content: '', marker: 'history' },
    );
  }

  const name = String(json.name || json.preset_name || sourceFileName.replace(/\.json$/i, '') || '酒馆预设').slice(0, 60);
  const document: StoryTheaterPresetDocument = {
    schema: 'sullyos.story-preset',
    version: 1,
    name,
    description: '从 SillyTavern 预设导入（自用二改）',
    generation,
    prompts,
  };

  return {
    id: `stpreset-${now}-${Math.random().toString(36).slice(2, 9)}`,
    name,
    sourceFileName,
    format: 'sullyos-story-preset',
    document,
    createdAt: now,
    updatedAt: now,
  };
}
