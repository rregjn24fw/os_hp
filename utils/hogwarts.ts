/**
 * 霍格沃茨主题（自用二改）共享数据与工具。
 *
 * 这些新功能（学院分 / 商店 / 校园 / 论坛）都是 local-first 的小数据，
 * 统一用 localStorage 持久化，避免改动 IndexedDB schema 版本（迁移风险高）。
 * 键名加 hogwarts_ 前缀，便于备份/清理。
 */
import type {
  HouseId,
  HouseRecord,
  HouseState,
  ShopItem,
  ShopState,
  CampusState,
  FeatureAiConfig,
  FeatureAiSettings,
} from '../types';

const KEY = {
  house: 'hogwarts_house_state',
  shop: 'hogwarts_shop_state',
  campus: 'hogwarts_campus_state',
  forum: 'hogwarts_forum_state',
  ai: 'hogwarts_ai_settings',
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) } as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('[hogwarts] 持久化失败', e);
  }
}

// ---------------------------------------------------------------------------
// 学院
// ---------------------------------------------------------------------------

export const HOUSE_META: Record<HouseId, { name: string; cn: string; animal: string; color: string; gradient: string }> = {
  gryffindor: { name: 'Gryffindor', cn: '格兰芬多', animal: '狮子', color: '#740001', gradient: 'linear-gradient(135deg,#740001,#ae0001)' },
  slytherin: { name: 'Slytherin', cn: '斯莱特林', animal: '蛇', color: '#1a472a', gradient: 'linear-gradient(135deg,#1a472a,#2a623d)' },
  ravenclaw: { name: 'Ravenclaw', cn: '拉文克劳', animal: '鹰', color: '#0e1a40', gradient: 'linear-gradient(135deg,#0e1a40,#222f5b)' },
  hufflepuff: { name: 'Hufflepuff', cn: '赫奇帕奇', animal: '獾', color: '#ecb939', gradient: 'linear-gradient(135deg,#ecb939,#f0c75e)' },
};

export const HOUSE_IDS: HouseId[] = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];

export function defaultHouseState(): HouseState {
  const houses: HouseRecord[] = HOUSE_IDS.map(id => ({
    id,
    name: HOUSE_META[id].cn,
    points: 0,
    characterIds: [],
    commonRoom: '',
    color: HOUSE_META[id].color,
    animal: HOUSE_META[id].animal,
  }));
  return { houses, history: [], updatedAt: Date.now() };
}

export function loadHouseState(): HouseState {
  const state = read<HouseState>(KEY.house, defaultHouseState());
  // 兼容旧数据缺学院的情况
  if (!state.houses || state.houses.length === 0) state.houses = defaultHouseState().houses;
  return state;
}

export function saveHouseState(state: HouseState): void {
  write(KEY.house, { ...state, updatedAt: Date.now() });
}

export function awardHousePoints(houseId: HouseId, delta: number, reason: string): HouseState {
  const state = loadHouseState();
  state.houses = state.houses.map(h => h.id === houseId ? { ...h, points: h.points + delta } : h);
  state.history = [
    { id: `hp-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, houseId, delta, reason, at: Date.now() },
    ...state.history,
  ].slice(0, 200);
  saveHouseState(state);
  return state;
}

/** 找出某个角色归属的学院。 */
export function houseOfCharacter(charId: string): HouseId | undefined {
  return loadHouseState().houses.find(h => h.characterIds.includes(charId))?.id;
}

// ---------------------------------------------------------------------------
// 商店（纯逻辑，便于测试与组件复用）
// ---------------------------------------------------------------------------

/** 购买一件商品：金币不足返回 null（由调用方提示），否则返回新状态。 */
export function purchaseShopItem(state: ShopState, item: ShopItem, now = Date.now()): ShopState | null {
  if (state.gold < item.price) return null;
  const existing = state.owned.find(o => o.itemId === item.id);
  const owned = existing
    ? state.owned.map(o => o.itemId === item.id ? { ...o, quantity: o.quantity + 1 } : o)
    : [...state.owned, { itemId: item.id, name: item.name, boughtAt: now, quantity: 1 }];
  return {
    ...state,
    gold: state.gold - item.price,
    owned,
    history: [{ id: `buy-${now}`, itemId: item.id, name: item.name, cost: item.price, at: now }, ...state.history].slice(0, 100),
  };
}

/** 把背包里一件未送出的礼物标记给角色；已送出则原样返回。 */
export function giftOwnedItem(state: ShopState, itemId: string, charId: string): ShopState {
  return { ...state, owned: state.owned.map(o => o.itemId === itemId && !o.giftedToCharId ? { ...o, giftedToCharId: charId } : o) };
}

/** 魔法练习等途径赚取金币。 */
export function earnShopGold(state: ShopState, amount = 50): ShopState {
  return { ...state, gold: state.gold + amount };
}

export function defaultShopState(): ShopState {
  return { gold: 100, owned: [], history: [], updatedAt: Date.now() };
}

export function loadShopState(): ShopState {
  return read<ShopState>(KEY.shop, defaultShopState());
}

export function saveShopState(state: ShopState): void {
  write(KEY.shop, { ...state, updatedAt: Date.now() });
}

/** 预置商品清单（对角巷）——每件商品挂到具体店铺。 */
export const SHOP_ITEMS: ShopItem[] = [
  // 奥利凡德魔杖店
  { id: 'wand-holly', name: '冬青木魔杖', description: '凤凰羽毛杖芯，霍格沃茨常备款。', category: 'wand', shop: 'ollivanders', price: 30, icon: '🪄', effect: '握紧魔杖时，施咒的信心略微提升。' },
  { id: 'wand-elder', name: '接骨木魔杖', description: '传说中的老魔杖，需谨慎使用。', category: 'wand', shop: 'ollivanders', price: 120, icon: '🪄', effect: '古老的魔力在你指尖低语。' },
  { id: 'wand-vine', name: '葡萄藤木魔杖', description: '适合心地宽厚的人，会主动帮主人努力。', category: 'wand', shop: 'ollivanders', price: 45, icon: '🪄', effect: '杖尖轻轻颤动，像在和你打招呼。' },
  // 魁地奇精品店
  { id: 'broom-nimbus', name: '光轮2000', description: '经典飞天扫帚，魁地奇训练首选。', category: 'broom', shop: 'quality', price: 80, icon: '🧹', effect: '骑上它，风从耳畔掠过。' },
  { id: 'broom-firebolt', name: '火弩箭', description: '世界上速度最快的扫帚，追击金色飞贼利器。', category: 'broom', shop: 'quality', price: 180, icon: '🔥', effect: '速度感让心跳加速。' },
  { id: 'snitch', name: '金色飞贼', description: '会飞的小球，抓住它就能结束比赛。', category: 'broom', shop: 'quality', price: 45, icon: '🏆', effect: '掌心的金色飞贼轻轻振翅。' },
  // 神奇动物园
  { id: 'owl-snowy', name: '雪枭', description: '可靠的信使，会自己找到收件人。', category: 'owl', shop: 'menagerie', price: 60, icon: '🦉', effect: '夜色里，猫头鹰拍打着翅膀送来消息。' },
  { id: 'owl-eagle', name: '雕鸮', description: '威风凛凛的大型猫头鹰，送信从不迷路。', category: 'owl', shop: 'menagerie', price: 55, icon: '🦉' },
  { id: 'pet-toad', name: '蟾蜍', description: '霍格沃茨准许饲养的经典宠物。', category: 'owl', shop: 'menagerie', price: 10, icon: '🐸' },
  // 斯拉格·霍恩药店
  { id: 'potion-luck', name: '福灵剂', description: '一小瓶能带来好运的金色药水。', category: 'potion', shop: 'slughorn', price: 90, icon: '🧪', effect: '今天的幸运值似乎偏高。' },
  { id: 'potion-polyjuice', name: '复方汤剂', description: '喝下后可变化为他人模样，限时24小时。', category: 'potion', shop: 'slughorn', price: 110, icon: '🧪', effect: '你的模样开始模糊不清。' },
  { id: 'potion-sleep', name: '起草药水', description: '让人昏睡的温和药剂，考试前慎用。', category: 'potion', shop: 'slughorn', price: 40, icon: '🧪' },
  // 丽痕书店
  { id: 'book-spells', name: '《标准咒语》课本', description: '必备魔法教材。', category: 'book', shop: 'flourish', price: 25, icon: '📖', effect: '书页间藏着无数咒语的秘密。' },
  { id: 'book-map', name: '活点地图', description: '标出城堡里每个人的位置。', category: 'book', shop: 'flourish', price: 75, icon: '🗺️', effect: '"我庄严宣誓我不干好事。"' },
  { id: 'book-monsters', name: '《诗翁彼豆故事集》', description: '巫师世界的古老童话。', category: 'book', shop: 'flourish', price: 30, icon: '📕' },
  // 莫夫人长袍专卖店（merch）
  { id: 'merch-scarf', name: '学院围巾', description: '四色可选，冬季保暖又彰显归属。', category: 'merch', shop: 'malkin', price: 35, icon: '🧣' },
  { id: 'merch-badge', name: '学院徽章', description: '别在长袍上的小小荣誉。', category: 'merch', shop: 'malkin', price: 15, icon: '🏅' },
  { id: 'merch-robes', name: '定制礼服袍', description: '舞会季节的抢手货。', category: 'merch', shop: 'malkin', price: 95, icon: '👗' },
  // 蜂蜜公爵（糖果）
  { id: 'candy-frog', name: '巧克力蛙', description: '会跳的巧克力，附赠巫师画片。', category: 'candy', shop: 'honeydukes', price: 8, icon: '🐸' },
  { id: 'candy-beans', name: '比比多味豆', description: '每一颗都是冒险——可能是草莓，也可能是耳屎。', category: 'candy', shop: 'honeydukes', price: 10, icon: '🍬' },
  { id: 'candy-butterbeer', name: '黄油啤酒', description: '甜丝丝的暖意，霍格莫德标配。', category: 'candy', shop: 'honeydukes', price: 12, icon: '🍺', effect: '暖暖的奶油泡沫，心情松弛下来。' },
  // 韦斯莱笑话商店（恶作剧）
  { id: 'joke-ear', name: '伸缩耳', description: '门缝里伸出去，隔壁的话听得一清二楚。', category: 'joke', shop: 'weasleys', price: 20, icon: '👂', effect: '你听见了一些不该听见的八卦。' },
  { id: 'joke-hat', name: '神奇魔法哈哈帽', description: '戴上就摘不下来，笑果满分。', category: 'joke', shop: 'weasleys', price: 25, icon: '🎩' },
  { id: 'joke-slug', name: '速食鼻子咬鼻涕虫', description: '韦斯莱把戏坊畅销冠军。', category: 'joke', shop: 'weasleys', price: 15, icon: '🤢' },
  // 博金·博克（黑魔法，慎入）
  { id: 'dark-musicbox', name: '被诅咒的八音盒', description: '听到的人会陷入昏睡……店主人很好，别问。', category: 'dark', shop: 'borgin', price: 65, icon: '🎵' },
  { id: 'dark-hand', name: '手之荣耀', description: '放在窗台上的枯手，会给它的主人带来财运。', category: 'dark', shop: 'borgin', price: 150, icon: '🖐️' },
  { id: 'dark-necklace', name: '蛋白石项链', description: '碰过它的人都死了——标价牌上这么写着。', category: 'dark', shop: 'borgin', price: 130, icon: '📿' },
];

// ---------------------------------------------------------------------------
// 对角巷地图 + 布告栏每日委托
// ---------------------------------------------------------------------------

export interface DiagonShop {
  id: string; name: string; desc: string; emoji: string;
  /** 在地图上的位置（百分比）。 */
  x: number; y: number;
}

/** 对角巷地图的店铺节点（对标参考版布局）。 */
export const DIAGON_SHOPS: DiagonShop[] = [
  { id: 'ollivanders', name: '奥利凡德魔杖店', desc: '自公元前382年起，制作精良魔杖', emoji: '🪄', x: 50, y: 7 },
  { id: 'potage', name: '帕特奇坩埚店', desc: '各种尺寸的坩埚与器皿', emoji: '⚗️', x: 16, y: 22 },
  { id: 'honeydukes', name: '蜂蜜公爵（对角巷分店）', desc: '霍格莫德的糖果在这里也有', emoji: '🍬', x: 84, y: 22 },
  { id: 'weasleys', name: '韦斯莱笑话商店', desc: '把戏坊正品，恶作剧者天堂', emoji: '🎩', x: 14, y: 44 },
  { id: 'leaky', name: '破釜酒吧', desc: '通往麻瓜世界的大门，来杯黄油啤酒？', emoji: '🍺', x: 50, y: 42 },
  { id: 'slughorn', name: '斯拉格·霍恩药店', desc: '稀有药材与瓶装药水', emoji: '🧪', x: 85, y: 44 },
  { id: 'borgin', name: '博金·博克', desc: '黑魔法商店——胆小的巫师请绕行', emoji: '🕯️', x: 12, y: 66 },
  { id: 'menagerie', name: '神奇动物园', desc: '猫头鹰、蟾蜍、蓝绿相间的耗子', emoji: '🦉', x: 87, y: 66 },
  { id: 'flourish', name: '丽痕书店', desc: '教科书与古旧魔法典籍', emoji: '📚', x: 22, y: 86 },
  { id: 'malkin', name: '摩金夫人长袍专卖店', desc: '定制长袍与学院周边', emoji: '👗', x: 58, y: 88 },
  { id: 'quality', name: '魁地奇精品店', desc: '扫帚、护具与比赛周边', emoji: '🧹', x: 84, y: 90 },
];

export interface DailyCommission {
  /** 稳定 id（带日期前缀，用于防止重复领取）。 */
  id: string;
  text: string;
  gold: number;
}

const COMMISSION_POOL: Array<{ text: string; gold: number }> = [
  { text: '帮弗雷德测试新 joke 产品「速食鼻子咬鼻涕虫」（后果自负）', gold: 30 },
  { text: '给海格送一罐岩皮饼（注意：那也是食物）', gold: 25 },
  { text: '替斯普劳特教授给曼德拉草浇水（记得戴耳罩）', gold: 28 },
  { text: '去丽痕书店帮赫敏排队买《魔法史》增补版', gold: 22 },
  { text: '帮麦格教授批改变形术作业（字要工整）', gold: 35 },
  { text: '在破釜酒吧听汤姆讲一个完整的古故事', gold: 20 },
  { text: '给猫头鹰棚屋送一整箱猫头鹰坚果', gold: 24 },
  { text: '替卢娜在黑湖边找失踪的萝卜耳环', gold: 26 },
  { text: '帮斯内普教授（或者斯拉格·霍恩）整理药材柜', gold: 32 },
  { text: '在禁林边缘采集月长草样本（别走进去）', gold: 38 },
  { text: '帮家养小精灵把污渍擦亮一晚上', gold: 18 },
  { text: '去蜂蜜公爵试吃新品并写一份诚恳的评价', gold: 15 },
];

/** 按日期确定性选出当日 3 条布告栏委托（只发金加隆，不计学院分）。 */
export function dailyCommissions(now = new Date()): DailyCommission[] {
  const dayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  let seedNum = 0;
  for (const ch of dayKey) seedNum = (seedNum * 31 + ch.charCodeAt(0)) >>> 0;
  const picks: DailyCommission[] = [];
  const used = new Set<number>();
  let i = 0;
  while (picks.length < 3 && i < 50) {
    seedNum = (seedNum * 1103515245 + 12345) >>> 0;
    const idx = seedNum % COMMISSION_POOL.length;
    if (!used.has(idx)) {
      used.add(idx);
      picks.push({ id: `comm-${dayKey}-${idx}`, text: COMMISSION_POOL[idx].text, gold: COMMISSION_POOL[idx].gold });
    }
    i++;
  }
  return picks;
}

/** 领取委托：同一天同一委托只能领一次。成功返回新状态，已领过返回 null。 */
export function claimCommission(state: ShopState, commission: DailyCommission, now = Date.now()): ShopState | null {
  const claimed = state.claimedCommissions || [];
  if (claimed.includes(commission.id)) return null;
  return { ...state, gold: state.gold + commission.gold, claimedCommissions: [...claimed, commission.id], updatedAt: now };
}

// ---------------------------------------------------------------------------
// 校园
// ---------------------------------------------------------------------------

export function defaultCampusState(houseId: HouseId = 'gryffindor', charList: Array<{ charId: string; name: string; houseId?: HouseId }> = []): CampusState {
  return {
    day: 1,
    period: 'morning',
    houseId,
    location: '大礼堂',
    activity: '开学宴会',
    attributes: { knowledge: 10, courage: 10, loyalty: 10, wisdom: 10, ambition: 10 },
    log: [],
    characters: charList.map(c => ({ ...c, mood: '平静' })),
    updatedAt: Date.now(),
  };
}

export function loadCampusState(): CampusState | null {
  try {
    const raw = localStorage.getItem(KEY.campus);
    return raw ? JSON.parse(raw) as CampusState : null;
  } catch {
    return null;
  }
}

export function saveCampusState(state: CampusState): void {
  write(KEY.campus, { ...state, updatedAt: Date.now() });
}

export type CampusPeriod = 'morning' | 'afternoon' | 'evening';
const CAMPUS_PERIODS: CampusPeriod[] = ['morning', 'afternoon', 'evening'];

/** 时段推进：morning → afternoon → evening → 次日 morning。 */
export function nextCampusPeriod(day: number, period: CampusPeriod): { day: number; period: CampusPeriod } {
  const idx = CAMPUS_PERIODS.indexOf(period);
  if (idx === CAMPUS_PERIODS.length - 1 || idx === -1) return { day: day + 1, period: 'morning' };
  return { day, period: CAMPUS_PERIODS[idx + 1] };
}

/** 属性上限（五维属性封顶，防止溢出显示）。 */
export const CAMPUS_ATTR_MAX = 100;

/** 属性增减并封顶在 [0, CAMPUS_ATTR_MAX]。 */
export function bumpCampusAttributes(
  attrs: CampusState['attributes'],
  deltas: Partial<CampusState['attributes']>,
): CampusState['attributes'] {
  const next = { ...attrs };
  for (const key of Object.keys(deltas) as Array<keyof typeof next>) {
    const d = deltas[key];
    if (!Number.isFinite(d)) continue;
    next[key] = Math.max(0, Math.min(CAMPUS_ATTR_MAX, next[key] + (d as number)));
  }
  return next;
}

// ---------------------------------------------------------------------------
// 论坛（猫头鹰邮报）
// ---------------------------------------------------------------------------

export interface ForumBoard { id: string; name: string; house?: HouseId }

export const FORUM_BOARDS: ForumBoard[] = [
  { id: 'all', name: '🏰 全部' },
  { id: 'great-hall', name: '🍽 大礼堂' },
  { id: 'library', name: '📚 图书馆' },
  { id: 'gryffindor', name: '🦁 格兰芬多塔楼', house: 'gryffindor' },
  { id: 'slytherin', name: '🐍 斯莱特林地窖', house: 'slytherin' },
  { id: 'ravenclaw', name: '🦅 拉文克劳塔', house: 'ravenclaw' },
  { id: 'hufflepuff', name: '🦡 赫奇帕奇厨房', house: 'hufflepuff' },
];

const FORUM_KEY = 'hogwarts_forum_posts';

export function loadForumPosts(): Array<Record<string, any>> {
  try { return JSON.parse(localStorage.getItem(FORUM_KEY) || '[]'); } catch { return []; }
}

export function saveForumPosts(posts: Array<Record<string, any>>): void {
  try { localStorage.setItem(FORUM_KEY, JSON.stringify(posts)); } catch { /* ignore */ }
}

/** 按版块过滤帖子（'all' 返回全部）。 */
export function filterForumPosts<T extends { board?: string }>(posts: T[], boardId: string): T[] {
  if (boardId === 'all') return posts;
  return posts.filter(p => p.board === boardId);
}

/** 构造一条帖子（用户发帖 / 角色发帖共用）。 */
export function createForumPost(opts: {
  authorName: string; authorAvatar?: string;
  title: string; content: string;
  board: ForumBoard; authorType: 'user' | 'character';
  authorCharId?: string; likes?: number;
}, now = Date.now()): Record<string, any> {
  return {
    id: `post-${now}`,
    authorName: opts.authorName,
    authorAvatar: opts.authorAvatar || '',
    title: opts.title,
    content: opts.content,
    images: [], isCollected: false, isLiked: false, comments: [],
    likes: opts.likes ?? 0,
    timestamp: now, tags: [],
    authorType: opts.authorType,
    ...(opts.authorCharId ? { authorCharId: opts.authorCharId } : {}),
    board: opts.board.id,
    houseId: opts.board.house,
  };
}

/**
 * 解析模型的发帖输出：提取首个 JSON 对象（{title, content}）；
 * 没有合法 JSON 时把整段文本当作正文，标题用「今日校园」。
 */
export function parseForumGeneration(raw: string, now = Date.now()): { title: string; content: string } {
  const match = raw.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      const parsed = JSON.parse(match[0]);
      return {
        title: String(parsed.title || '今日校园').slice(0, 40),
        content: String(parsed.content || raw).slice(0, 800),
      };
    } catch { /* 落到文本兜底 */ }
  }
  return { title: '今日校园', content: raw.slice(0, 800) };
}

/** 点赞切换：已赞则取消。返回新数组（不可变）。 */
export function toggleForumLike<T extends { id: string; likes: number; isLiked: boolean }>(posts: T[], id: string): T[] {
  return posts.map(p => p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.likes + (p.isLiked ? -1 : 1) } : p);
}

// ---------------------------------------------------------------------------
// 论坛「当前时代」语境：按真实时间生成场景提示，让 NPC / 角色发帖贴合当下
// ---------------------------------------------------------------------------

export interface ForumTimeContext {
  period: 'dawn' | 'morning' | 'noon' | 'afternoon' | 'evening' | 'night';
  periodLabel: string;
  seasonLabel: string;
  weekend: boolean;
  sceneHint: string;
}

/** 依据真实时刻推导霍格沃茨作息语境（深夜禁言区、周末、季节氛围）。 */
export function forumTimeContext(now = new Date()): ForumTimeContext {
  const h = now.getHours();
  const month = now.getMonth() + 1;
  let period: ForumTimeContext['period'];
  let periodLabel: string;
  let sceneHint: string;
  if (h >= 5 && h < 8) { period = 'dawn'; periodLabel = '清晨'; sceneHint = '天刚亮，猫头鹰送完晨间的信件，早起的学生在黑湖边散步，礼堂刚飘出烤面包的香气。'; }
  else if (h >= 8 && h < 11) { period = 'morning'; periodLabel = '上午'; sceneHint = '上午的课刚刚开始或刚下课，学生们抱着课本在走廊里赶路，或聚在礼堂吃早餐闲聊。'; }
  else if (h >= 11 && h < 13) { period = 'noon'; periodLabel = '午间'; sceneHint = '午休时间，大礼堂人声鼎沸，有人在讨论刚才魔药课的意外，图书馆里也有人赶作业。'; }
  else if (h >= 13 && h < 17) { period = 'afternoon'; periodLabel = '下午'; sceneHint = '下午的课上到一半，飞行课/保护神奇生物课正在户外进行，有人在院子里晒太阳写作业。'; }
  else if (h >= 17 && h < 21) { period = 'evening'; periodLabel = '傍晚'; sceneHint = '晚饭后的自由时间，公共休息室里炉火正旺，有人在打牌、下巫师棋，或计划周末去霍格莫德。'; }
  else { period = 'night'; periodLabel = '深夜'; sceneHint = '宵禁时间，走廊里只剩巡夜的级长和费尔奇，有人偷偷在被子底下点着魔杖看书，或刚从厨房摸到夜宵。'; }
  let seasonLabel = '秋天';
  if (month <= 2 || month === 12) seasonLabel = '冬天';
  else if (month >= 3 && month <= 5) seasonLabel = '春天';
  else if (month >= 6 && month <= 8) seasonLabel = '夏天';
  const day = now.getDay();
  return { period, periodLabel, seasonLabel, weekend: day === 0 || day === 6, sceneHint };
}

/** 把时代语境拼进发帖指令（ForumApp / 测试共用）。 */
export function forumEraInstruction(ctx: ForumTimeContext, charHint?: string): string {
  return [
    `现在是${ctx.seasonLabel}学期${ctx.periodLabel}（${ctx.weekend ? '周末' : '工作日'}），霍格沃茨的当下氛围：${ctx.sceneHint}`,
    '帖子内容必须贴合这个时刻正在发生的事。',
    ...(charHint ? [charHint] : []),
  ].join('\n');
}

/** 学院随机学生 NPC 池（与用户角色互不冲突，前缀避免撞 ID）。 */
export const FORUM_NPC_POOL: Array<{ name: string; houseId: HouseId; persona: string }> = [
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
];

const FORUM_LAST_AUTO_KEY = 'hogwarts_forum_last_auto';
const FORUM_AUTO_INTERVAL_MS = 30 * 60 * 1000;

/** 是否该自动补帖：首启无帖 / 距上次自动生成超过 30 分钟。 */
export function shouldAutoGenerateForumPosts(postCount: number, now = Date.now()): boolean {
  if (postCount < 3) return true;
  try { return now - Number(localStorage.getItem(FORUM_LAST_AUTO_KEY) || 0) > FORUM_AUTO_INTERVAL_MS; } catch { return true; }
}

export function markForumAutoGenerated(now = Date.now()): void {
  try { localStorage.setItem(FORUM_LAST_AUTO_KEY, String(now)); } catch { /* ignore */ }
}

// ---------------------------------------------------------------------------
// 独立 AI 配置（默认跟随全局）
// ---------------------------------------------------------------------------

export function loadFeatureAiSettings(): FeatureAiSettings {
  return read<FeatureAiSettings>(KEY.ai, { novel: {}, forum: {}, campus: {} });
}

export function saveFeatureAiSettings(settings: FeatureAiSettings): void {
  write(KEY.ai, settings);
}

/** 合并功能级配置与全局配置：功能级留空的字段回落到全局 apiConfig。 */
export function resolveFeatureAiConfig(
  feature: keyof FeatureAiSettings,
  global: { baseUrl: string; apiKey: string; model: string },
): FeatureAiConfig {
  const local = loadFeatureAiSettings()[feature] || {};
  return {
    baseUrl: local.baseUrl || global.baseUrl,
    apiKey: local.apiKey || global.apiKey,
    model: local.model || global.model,
    temperature: local.temperature,
    maxTokens: local.maxTokens,
  };
}
