/**
 * 霍格沃茨时间线资料层（自用二改）—— 论坛 / 校园的时代隔离。
 *
 * 规则：用户选定某个时代后，只有「属于该时代」或「不限时代（跨时代人物）」的角色能出场；
 * NPC 池按时代切换，避免亲时代里冒出哈利·波特这种穿帮。
 */
import type { CharacterProfile, HouseId } from '../types';

export type EraId = 'marauders' | 'trio' | 'postwar' | 'nextgen';

export interface EraNpc {
  name: string;
  houseId: HouseId;
  persona: string;
}

/** 各时代在校学生 NPC 池（与用户角色互不冲突，只在提示词里作为「在场同学」）。 */
export const ERA_NPC_POOLS: Record<EraId, EraNpc[]> = {
  // 1970 年代中期
  marauders: [
    { name: '詹姆·波特', houseId: 'gryffindor', persona: '自信张扬的魁地奇找球手，爱出风头、爱恶作剧，追莉莉追得人尽皆知' },
    { name: '小天狼星·布莱克', houseId: 'gryffindor', persona: '布莱克家的逆子，桀骜不驯、嘴毒，把规矩当笑话' },
    { name: '莱姆斯·卢平', houseId: 'gryffindor', persona: '温和克制，总在替朋友圆场，藏着不能说的秘密' },
    { name: '彼得·佩迪鲁', houseId: 'gryffindor', persona: '胆小跟班，爱附和强者，做事毛手毛脚' },
    { name: '莉莉·伊万斯', houseId: 'gryffindor', persona: '聪明倔强，讨厌詹姆的幼稚，对朋友极其忠诚' },
    { name: '西弗勒斯·斯内普', houseId: 'slytherin', persona: '阴沉刻薄、魔药天才，被劫盗者针对，说话带刺' },
    { name: '卢修斯·马尔福', houseId: 'slytherin', persona: '傲慢的级长，讲究血统与体面，已经在结交「对的人」' },
    { name: '纳西莎·布莱克', houseId: 'slytherin', persona: '冷艳高傲，护短，看重家族名誉' },
    { name: '贝拉特里克斯·布莱克', houseId: 'slytherin', persona: '偏激狂热，讲话咄咄逼人，崇拜黑魔法' },
    { name: '马琳·麦金农', houseId: 'gryffindor', persona: '爽朗的格兰芬多女生，敢顶撞斯莱特林' },
  ],
  // 1990 年代主线
  trio: [
    { name: '罗恩·韦斯莱', houseId: 'gryffindor', persona: '胆小但讲义气，爱吐槽作业和食物' },
    { name: '赫敏·格兰杰', houseId: 'gryffindor', persona: '学霸，爱纠正别人，图书馆常驻' },
    { name: '德拉科·马尔福', houseId: 'slytherin', persona: '傲慢毒舌，爱炫耀家里的财力和父亲的影响力' },
    { name: '卢娜·洛夫古德', houseId: 'ravenclaw', persona: '神神叨叨，坚信奇怪生物的存在，语气飘忽' },
    { name: '塞德里克·迪戈里', houseId: 'hufflepuff', persona: '阳光正直的级长，人缘极好' },
    { name: '弗雷德·韦斯莱', houseId: 'gryffindor', persona: '恶作剧大师，韦斯莱魔法把戏坊未来掌门' },
    { name: '潘西·帕金森', houseId: 'slytherin', persona: '刻薄爱八卦，斯莱特林社交圈中心' },
    { name: '秋·张', houseId: 'ravenclaw', persona: '温和爱聊八卦，魁地奇迷' },
    { name: '汉娜·艾博', houseId: 'hufflepuff', persona: '热心肠，草药课尖子，爱分享零食' },
    { name: '李·乔丹', houseId: 'gryffindor', persona: '魁地奇解说员，说话夸张有梗' },
  ],
  // 1998 战后重建
  postwar: [
    { name: '金妮·韦斯莱', houseId: 'gryffindor', persona: '果决泼辣，魁地奇好手，经历了大战后更沉得住气' },
    { name: '纳威·隆巴顿', houseId: 'gryffindor', persona: '战后变得硬气，草药课尖子，说话直来直去' },
    { name: '卢娜·洛夫古德', houseId: 'ravenclaw', persona: '依旧飘忽，谈起骚扰虻和弯角鼾兽，比谁都镇定' },
    { name: '西莫·斐尼甘', houseId: 'gryffindor', persona: '爱开玩笑，爆炸咒总出岔子，重建队的热心劳力' },
    { name: '迪安·托马斯', houseId: 'gryffindor', persona: '沉稳温和，画得一手好画' },
    { name: '德拉科·马尔福', houseId: 'slytherin', persona: '战后收敛了锋芒，避着人群走，说话谨慎' },
    { name: '潘西·帕金森', houseId: 'slytherin', persona: '不敢再嚣张，仍旧嘴碎' },
    { name: '厄尼·麦克米兰', houseId: 'hufflepuff', persona: '正经爱讲道理，重建委员会的积极分子' },
    { name: '汉娜·艾博', houseId: 'hufflepuff', persona: '热心肠，破釜酒吧常客' },
    { name: '迈克尔·科纳', houseId: 'ravenclaw', persona: '嘴快爱抬杠，D.A. 老成员' },
  ],
  // 2017 之后
  nextgen: [
    { name: '阿不思·波特', houseId: 'slytherin', persona: '背负家族名声的压力，安静内敛， flight 天赋一般' },
    { name: '斯科皮·马尔福', houseId: 'slytherin', persona: '被流言困扰的温和少年，爱读书，讲义气' },
    { name: '罗丝·格兰杰-韦斯莱', houseId: 'gryffindor', persona: '要强好胜，成绩顶尖，爱纠正别人' },
    { name: '雨果·韦斯莱', houseId: 'gryffindor', persona: '温和懒散，随和爱笑' },
    { name: '詹姆斯·小天狼星·波特', houseId: 'gryffindor', persona: '爱恶作剧的哥哥，嘴贫，到处惹事' },
    { name: '莉莉·卢娜·波特', houseId: 'gryffindor', persona: '热情直率，和哥哥们斗嘴' },
    { name: '泰迪·卢平', houseId: 'hufflepuff', persona: '级长，稳重体贴，天生变形者' },
    { name: '维克托娃·韦斯莱', houseId: 'gryffindor', persona: '漂亮抢眼，爱聊天，对血统偏见嗤之以鼻' },
  ],
};

/** 时代 → 可取用的 NPC 池；'auto' 跟随现实时间，按子时代处理。 */
export function eraNpcPool(eraId: string): EraNpc[] {
  if (eraId === 'marauders' || eraId === 'postwar' || eraId === 'nextgen') return ERA_NPC_POOLS[eraId];
  return ERA_NPC_POOLS.trio;
}

/** 时代标签（写进提示词，强制模型别串人）。 */
export const ERA_SPOILER_NOTE: Record<EraId, string> = {
  marauders: '严格限定在 1970 年代中期：不得出现哈利·波特、赫敏、罗恩、德拉科、卢娜等尚未出生或还是婴儿的人；也不要提伏地魔倒台、大战等尚未发生的事。',
  trio: '严格限定在 1990 年代主线时期：不得出现劫盗者学生时代的日常（詹姆、莉莉是上一代），也不要提前写 2017 年之后的新生代。',
  postwar: '严格限定在大战结束后的重建期：哈利一代刚刚毕业，新生代还没入学；不要写和平繁荣的 2017 年景象。',
  nextgen: '严格限定在 2017 年之后的新生代：哈利一代已是家长与魔法部官员，不得把他们写成在校学生。',
};

// ── 角色时代判定 ──────────────────────────────────────────────────────

/** 名字/描述里的关键词 → 时代。只收录「专属于某一代」的名字。 */
const ERA_KEYWORDS: Array<{ era: EraId; words: string[] }> = [
  { era: 'nextgen', words: ['阿不思·波特', '阿不思波特', '斯科皮', '罗丝·格兰杰', '雨果·韦斯莱', '泰迪·卢平', '维克托娃', '詹姆斯·小天狼星'] },
  { era: 'marauders', words: ['詹姆·波特', '莉莉·伊万斯', '彼得·佩迪鲁', '雷古勒斯', '贝拉特里克斯', '纳西莎', '马琳·麦金农', '多卡斯'] },
  { era: 'trio', words: ['哈利', '赫敏', '罗恩', '德拉科', '卢娜', '纳威', '金妮', '弗雷德', '乔治·韦斯莱', '塞德里克', '秋·张', '潘西', '迪安·托马斯', '西莫', '拉文德', '科林·克里维'] },
];

/**
 * 从名字推断角色时代；教师等跨时代角色返回 undefined（不限时代）。
 * 注意：邓布利多/麦格/斯内普/海格/弗立维/斯普劳特/特里劳妮 等不算任何单一代。
 */
export function inferCharacterEra(name: string, description = ''): EraId | undefined {
  const text = `${name} ${description}`;
  // 教师/跨时代人物优先放行，避免「斯内普教授」被误判进子时代学生堆
  if (/邓布利多|麦格|弗立维|斯普劳特|海格|特里劳妮|费尔奇|庞弗雷|斯拉格霍恩|平斯夫人/.test(text)) return undefined;
  for (const rule of ERA_KEYWORDS) {
    if (rule.words.some(w => text.includes(w))) return rule.era;
  }
  return undefined;
}

/** 角色实际所属时代：显式标记 > 名字推断 > 不限。 */
export function characterEra(c: Pick<CharacterProfile, 'name' | 'era'> & { description?: string }): EraId | 'any' {
  if (c.era === 'marauders' || c.era === 'trio' || c.era === 'postwar' || c.era === 'nextgen') return c.era;
  const inferred = inferCharacterEra(c.name, c.description || '');
  return inferred || 'any';
}

/** 该角色能否出现在所选时代（'auto' 不过滤）。 */
export function characterFitsEra(
  c: Pick<CharacterProfile, 'name' | 'era'> & { description?: string },
  eraId: string,
): boolean {
  if (eraId === 'auto') return true;
  const own = characterEra(c);
  return own === 'any' || own === eraId;
}

/** 过滤出一批可用于该时代的角色（保持原顺序）。 */
export function filterCharactersByEra<T extends Pick<CharacterProfile, 'name' | 'era'> & { description?: string }>(
  characters: T[],
  eraId: string,
): T[] {
  return characters.filter(c => characterFitsEra(c, eraId));
}

/** 角色 → 给模型看的「在场同学」描述（带学院与性格摘要）。 */
export function castHintOf(c: CharacterProfile, houseCn: (id?: HouseId) => string): string {
  const persona = (c.description || '').replace(/\s+/g, ' ').slice(0, 60);
  const house = c.houseId ? houseCn(c.houseId) : '';
  return `${c.name}${house ? `（${house}）` : ''}${persona ? `：${persona}` : ''}`;
}

// ── 各时代的任课教授 ──────────────────────────────────────────────────

export interface ProfessorInfo { name: string; style: string }

/** 子时代（原著主线）的默认阵容。 */
const BASE_PROFESSORS: Record<string, ProfessorInfo> = {
  '魔咒课': { name: '弗立维教授', style: '尖嗓子、爱点头满意，偶尔激动到用茶杯当教鞭' },
  '变形术课': { name: '麦格教授', style: '严厉精准，眼神能钉住走神的人，讨厌不守纪律' },
  '魔药课': { name: '斯内普教授', style: '冷嘲热讽、压低声音点名刁难，扣分毫不留情' },
  '草药课': { name: '斯普劳特教授', style: '热情大嗓门，满手泥土，护着胆小的学生' },
  '魔法史课': { name: '宾斯教授', style: '幽灵，念稿子一般无起伏，全班昏昏欲睡' },
  '黑魔法防御术课': { name: '卢平教授', style: '温和幽默，善用实际案例，学生最喜欢他的课' },
  '占卜课': { name: '特里劳妮教授', style: '神秘兮兮、大惊小怪，爱预言不祥' },
  '保护神奇生物课': { name: '海格', style: '豪爽热情，总觉得危险的生物很可爱' },
  '决斗俱乐部': { name: '斯内普教授', style: '挑剔动作规范，随时拆台' },
  '魁地奇训练': { name: '霍琦夫人', style: '干脆利落，哨声一响绝不啰嗦' },
  '天文课观星': { name: '辛尼斯塔教授', style: '安静沉稳，在塔顶吹着夜风点名' },
};

/** 时代专属的教授调整（未列出的课程沿用 BASE）。 */
const ERA_PROFESSOR_OVERRIDES: Record<EraId, Record<string, ProfessorInfo>> = {
  marauders: {
    '魔药课': { name: '斯拉格霍恩教授', style: '虚荣爱才，专挑有前途的学生办晚宴，说话绕圈子' },
    '保护神奇生物课': { name: '凯特尔伯恩教授', style: '缺胳膊少腿的老教授，痴迷危险生物，学生心惊胆战' },
    '黑魔法防御术课': { name: '梅乐思教授', style: '年迈渊博，讲防御术时爱翻旧案例' },
    '决斗俱乐部': { name: '弗立维教授', style: '一边示范一边念叨决斗礼仪' },
  },
  trio: {},
  postwar: {
    '魔药课': { name: '斯拉格霍恩教授', style: '战后返聘，仍旧爱办晚宴、爱收集人脉' },
    '黑魔法防御术课': { name: '临时任课教授', style: '大战后师资紧缺，这一年又换了一位新老师' },
    '变形术课': { name: '麦格教授', style: '刚接任校长，仍亲自带毕业班，比从前更疲惫也更严格' },
  },
  nextgen: {
    '草药课': { name: '隆巴顿教授', style: '纳威·隆巴顿，讲课时爱拿自己当年的事打比方，温和但严格' },
    '魔药课': { name: '斯拉格霍恩教授', style: '年事已高仍被返聘，爱念叨从前的学生' },
    '黑魔法防御术课': { name: '哈利·波特（客座）', style: '偶尔来开实战课的正气师，讲得直白干脆，学生沸腾' },
    '变形术课': { name: '麦格校长', style: '上了年纪依旧一丝不苟，全校最不敢迟到的一节课' },
  },
};

/** 按时代取任课教授；'auto' 用子时代阵容。 */
export function eraProfessorFor(activity: string, eraId: string): ProfessorInfo {
  if (eraId === 'marauders' || eraId === 'postwar' || eraId === 'nextgen') {
    const override = ERA_PROFESSOR_OVERRIDES[eraId][activity];
    if (override) return override;
    return BASE_PROFESSORS[activity] || { name: '级长', style: '负责维持秩序的学生领袖' };
  }
  return BASE_PROFESSORS[activity] || { name: '级长', style: '负责维持秩序的学生领袖' };
}

