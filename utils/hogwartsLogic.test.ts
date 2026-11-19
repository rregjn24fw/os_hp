import { describe, expect, it, beforeEach, vi } from 'vitest';
import {
  HOUSE_IDS, defaultHouseState, awardHousePoints, houseOfCharacter,
  defaultShopState, purchaseShopItem, giftOwnedItem, earnShopGold, SHOP_ITEMS,
  nextCampusPeriod, bumpCampusAttributes, CAMPUS_ATTR_MAX,
  saveFeatureAiSettings, resolveFeatureAiConfig,
} from './hogwarts';
import { hogwartsGenerate } from './hogwartsGenerate';
import type { ShopState, ShopItem } from '../types';

const item = (over: Partial<ShopItem> = {}): ShopItem => ({
  id: 'test-item', name: '测试商品', description: '', category: 'merch', price: 30, ...over,
});

beforeEach(() => {
  localStorage.clear();
});

describe('学院积分系统', () => {
  it('默认状态包含四个学院且积分为 0', () => {
    const state = defaultHouseState();
    expect(state.houses.map(h => h.id).sort()).toEqual([...HOUSE_IDS].sort());
    expect(state.houses.every(h => h.points === 0)).toBe(true);
  });

  it('加分只影响目标学院，且写入历史（最近在前）', () => {
    const state = awardHousePoints('gryffindor', 10, '回答正确');
    const g = state.houses.find(h => h.id === 'gryffindor')!;
    const s = state.houses.find(h => h.id === 'slytherin')!;
    expect(g.points).toBe(10);
    expect(s.points).toBe(0);
    expect(state.history[0]).toMatchObject({ houseId: 'gryffindor', delta: 10, reason: '回答正确' });
  });

  it('支持扣分（负 delta），历史保留原因', () => {
    awardHousePoints('ravenclaw', 5, '基线');
    const state = awardHousePoints('ravenclaw', -3, '违反校规');
    expect(state.houses.find(h => h.id === 'ravenclaw')!.points).toBe(2);
    expect(state.history[0].delta).toBe(-3);
  });

  it('历史最多保留 200 条', () => {
    let state = defaultHouseState();
    for (let i = 0; i < 210; i++) state = awardHousePoints('hufflepuff', 1, `第${i}次`);
    expect(state.history.length).toBe(200);
    expect(state.history[0].reason).toContain('209');
  });

  it('awardHousePoints 持久化，houseOfCharacter 能找到角色归属', () => {
    awardHousePoints('slytherin', 1, '初始化');
    // 把角色挂到斯莱特林
    const raw = JSON.parse(localStorage.getItem('hogwarts_house_state')!);
    raw.houses.find((h: any) => h.id === 'slytherin').characterIds.push('char-1');
    localStorage.setItem('hogwarts_house_state', JSON.stringify(raw));
    expect(houseOfCharacter('char-1')).toBe('slytherin');
    expect(houseOfCharacter('nobody')).toBeUndefined();
  });
});

describe('对角巷商店', () => {
  const base: ShopState = { gold: 100, owned: [], history: [], updatedAt: 0 };

  it('金币不足返回 null，不产生任何变化', () => {
    const poor: ShopState = { ...base, gold: 10 };
    expect(purchaseShopItem(poor, item({ price: 30 }))).toBeNull();
  });

  it('购买成功：扣款、入背包、写历史', () => {
    const next = purchaseShopItem(base, item({ id: 'wand', name: '魔杖', price: 30 }))!;
    expect(next.gold).toBe(70);
    expect(next.owned).toHaveLength(1);
    expect(next.owned[0]).toMatchObject({ itemId: 'wand', name: '魔杖', quantity: 1 });
    expect(next.history[0]).toMatchObject({ itemId: 'wand', cost: 30 });
  });

  it('重复购买同一商品累加数量，不新增背包条目', () => {
    const first = purchaseShopItem(base, item({ id: 'potion', price: 30 }))!;
    const second = purchaseShopItem(first, item({ id: 'potion', price: 30 }))!;
    expect(second.owned).toHaveLength(1);
    expect(second.owned[0].quantity).toBe(2);
    expect(second.gold).toBe(40);
  });

  it('购买历史最多 100 条且最近在前', () => {
    let state = base;
    for (let i = 0; i < 110; i++) state = purchaseShopItem({ ...state, gold: 99999 }, item({ id: `i-${i}`, price: 1 }))!;
    expect(state.history.length).toBe(100);
    expect(state.history[0].itemId).toBe('i-109');
  });

  it('送礼：标记 giftedToCharId；已送出的不再改写', () => {
    const owned = purchaseShopItem(base, item({ id: 'owl', price: 10 }))!;
    const gifted = giftOwnedItem(owned, 'owl', 'char-9');
    expect(gifted.owned[0].giftedToCharId).toBe('char-9');
    const again = giftOwnedItem(gifted, 'owl', 'char-8');
    expect(again.owned[0].giftedToCharId).toBe('char-9');
  });

  it('魔法练习赚金币', () => {
    expect(earnShopGold(base, 50).gold).toBe(150);
    expect(earnShopGold(base).gold).toBe(150); // 默认 50
  });

  it('预置商品清单完整且价格合法', () => {
    expect(SHOP_ITEMS.length).toBeGreaterThanOrEqual(10);
    expect(SHOP_ITEMS.every(i => i.price > 0 && i.name && i.id)).toBe(true);
    expect(new Set(SHOP_ITEMS.map(i => i.id)).size).toBe(SHOP_ITEMS.length);
  });
});

describe('校园时段推进', () => {
  it('morning → afternoon → evening → 次日 morning', () => {
    expect(nextCampusPeriod(1, 'morning')).toEqual({ day: 1, period: 'afternoon' });
    expect(nextCampusPeriod(1, 'afternoon')).toEqual({ day: 1, period: 'evening' });
    expect(nextCampusPeriod(1, 'evening')).toEqual({ day: 2, period: 'morning' });
  });

  it('非法时段兜底推进到次日', () => {
    expect(nextCampusPeriod(3, 'weird' as any)).toEqual({ day: 4, period: 'morning' });
  });

  it('属性增减封顶在 [0, 100]', () => {
    const attrs = { knowledge: 95, courage: 5, loyalty: 50, wisdom: 50, ambition: 50 };
    const next = bumpCampusAttributes(attrs, { knowledge: 20, courage: -20 });
    expect(next.knowledge).toBe(CAMPUS_ATTR_MAX);
    expect(next.courage).toBe(0);
    expect(next.loyalty).toBe(50);
  });

  it('非法增量（NaN）被忽略', () => {
    const attrs = { knowledge: 10, courage: 10, loyalty: 10, wisdom: 10, ambition: 10 };
    const next = bumpCampusAttributes(attrs, { knowledge: NaN, courage: undefined as any });
    expect(next).toEqual(attrs);
  });
});

describe('独立 AI 配置回落', () => {
  const globalApi = { baseUrl: 'https://global.example.com/v1', apiKey: 'global-key', model: 'global-model' };

  it('功能级配置留空 → 全部回落全局', () => {
    saveFeatureAiSettings({ novel: {}, forum: {}, campus: {} });
    const cfg = resolveFeatureAiConfig('forum', globalApi);
    expect(cfg).toMatchObject({ baseUrl: globalApi.baseUrl, apiKey: globalApi.apiKey, model: globalApi.model });
  });

  it('功能级覆盖优先于全局', () => {
    saveFeatureAiSettings({ novel: { model: 'novel-model', temperature: 0.5 }, forum: {}, campus: {} });
    const cfg = resolveFeatureAiConfig('novel', globalApi);
    expect(cfg.model).toBe('novel-model');
    expect(cfg.baseUrl).toBe(globalApi.baseUrl);
    expect(cfg.temperature).toBe(0.5);
  });

  it('配置经 localStorage 持久化', () => {
    saveFeatureAiSettings({ novel: {}, forum: { model: 'f-model' }, campus: {} });
    expect(resolveFeatureAiConfig('forum', globalApi).model).toBe('f-model');
    expect(localStorage.getItem('hogwarts_ai_settings')).toBeTruthy();
  });
});

describe('hogwartsGenerate（mock fetch）', () => {
  const globalApi = { baseUrl: 'https://api.example.com/v1', apiKey: 'key-1', model: 'gpt-x' };

  function okResponse(content: string) {
    return new Response(JSON.stringify({ choices: [{ message: { content } }] }), { status: 200 });
  }

  it('无功能级配置 → 使用全局参数，URL 去尾部斜杠', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse('生成结果'));
    vi.stubGlobal('fetch', fetchMock);
    const out = await hogwartsGenerate({
      feature: 'forum', globalApi, userProfile: { name: '测试' },
      instructions: '你是论坛主持人', userInput: '发个帖',
    });
    expect(out).toBe('生成结果');
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.example.com/v1/chat/completions');
    expect(init.headers.Authorization).toBe('Bearer key-1');
    const body = JSON.parse(init.body);
    expect(body.model).toBe('gpt-x');
    expect(body.messages).toEqual([
      { role: 'system', content: '你是论坛主持人' },
      { role: 'user', content: '发个帖' },
    ]);
    expect(init.__sullyMeta.appId).toBe('hogwarts-forum');
    vi.unstubAllGlobals();
  });

  it('功能级配置覆盖 model/temperature/maxTokens', async () => {
    saveFeatureAiSettings({ novel: { model: 'novel-m', temperature: 0.3, maxTokens: 500 }, forum: {}, campus: {} });
    const fetchMock = vi.fn().mockResolvedValue(okResponse('ok'));
    vi.stubGlobal('fetch', fetchMock);
    await hogwartsGenerate({
      feature: 'novel', globalApi, userProfile: { name: '测试' },
      instructions: 'i', userInput: 'u',
    });
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.model).toBe('novel-m');
    expect(body.temperature).toBe(0.3);
    expect(body.max_tokens).toBe(500);
    vi.unstubAllGlobals();
  });

  it('缺少 baseUrl/apiKey 时明确报错', async () => {
    await expect(hogwartsGenerate({
      feature: 'campus', globalApi: { baseUrl: '', apiKey: '', model: 'm' },
      userProfile: { name: '测试' }, instructions: 'i', userInput: 'u',
    })).rejects.toThrow(/API 地址与密钥/);
  });

  it('HTTP 非 2xx → 带状态码报错', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('quota exceeded', { status: 429 })));
    await expect(hogwartsGenerate({
      feature: 'forum', globalApi, userProfile: { name: '测试' },
      instructions: 'i', userInput: 'u',
    })).rejects.toThrow(/429/);
    vi.unstubAllGlobals();
  });

  it('模型返回空内容 → 报错', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(okResponse('   ')));
    await expect(hogwartsGenerate({
      feature: 'forum', globalApi, userProfile: { name: '测试' },
      instructions: 'i', userInput: 'u',
    })).rejects.toThrow(/未返回有效内容/);
    vi.unstubAllGlobals();
  });
});
