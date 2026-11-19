import { describe, expect, it } from 'vitest';
import {
  ERA_NPC_POOLS, eraNpcPool, eraProfessorFor, characterEra, characterFitsEra,
  filterCharactersByEra, inferCharacterEra, ERA_SPOILER_NOTE,
} from './hogwartsEras';

const char = (name: string, era?: string, description = '') => ({ name, era, description });

describe('时代 NPC 池', () => {
  it('亲时代池是劫盗者那一代，不含子时代人物', () => {
    const names = ERA_NPC_POOLS.marauders.map(n => n.name).join(',');
    expect(names).toContain('詹姆·波特');
    expect(names).toContain('小天狼星·布莱克');
    expect(names).not.toContain('哈利');
    expect(names).not.toContain('赫敏');
    expect(names).not.toContain('德拉科');
  });

  it('子时代池是三人组那一代，不含劫盗者或新生代', () => {
    const names = ERA_NPC_POOLS.trio.map(n => n.name).join(',');
    expect(names).toContain('赫敏');
    expect(names).not.toContain('詹姆·波特');
    expect(names).not.toContain('阿不思·波特');
  });

  it('新生代池只含下一代', () => {
    const names = ERA_NPC_POOLS.nextgen.map(n => n.name).join(',');
    expect(names).toContain('阿不思·波特');
    expect(names).toContain('斯科皮');
    expect(names).not.toContain('赫敏');
  });

  it("'auto' 回落到子时代池，未知时代同样回落", () => {
    expect(eraNpcPool('auto')).toBe(ERA_NPC_POOLS.trio);
    expect(eraNpcPool('unknown')).toBe(ERA_NPC_POOLS.trio);
    expect(eraNpcPool('marauders')).toBe(ERA_NPC_POOLS.marauders);
  });

  it('每个时代都有隔离提示文案', () => {
    for (const era of ['marauders', 'trio', 'postwar', 'nextgen'] as const) {
      expect(ERA_SPOILER_NOTE[era].length).toBeGreaterThan(10);
    }
  });
});

describe('角色时代判定', () => {
  it('名字推断：哈利/赫敏归子时代', () => {
    expect(inferCharacterEra('哈利·波特')).toBe('trio');
    expect(inferCharacterEra('赫敏·格兰杰')).toBe('trio');
    expect(characterEra(char('哈利·波特'))).toBe('trio');
  });

  it('名字推断：劫盗者归亲时代', () => {
    expect(characterEra(char('詹姆·波特'))).toBe('marauders');
    expect(characterEra(char('莉莉·伊万斯'))).toBe('marauders');
  });

  it('名字推断：新生代归 nextgen', () => {
    expect(characterEra(char('阿不思·波特'))).toBe('nextgen');
    expect(characterEra(char('斯科皮·马尔福'))).toBe('nextgen');
  });

  it('跨时代教师不锁定任何单一代', () => {
    expect(characterEra(char('阿不思·邓布利多'))).toBe('any');
    expect(characterEra(char('米勒娃·麦格'))).toBe('any');
    expect(characterEra(char('西弗勒斯·斯内普教授'))).toBe('any');
  });

  it('显式标记优先于名字推断', () => {
    expect(characterEra(char('哈利·波特', 'nextgen'))).toBe('nextgen');
  });

  it('陌生角色默认不限时代', () => {
    expect(characterEra(char('卡西乌斯·莫尔顿'))).toBe('any');
  });
});

describe('时代隔离过滤', () => {
  it('亲时代下子时代角色被挡掉，跨时代人物留下', () => {
    expect(characterFitsEra(char('哈利·波特'), 'marauders')).toBe(false);
    expect(characterFitsEra(char('赫敏·格兰杰'), 'marauders')).toBe(false);
    expect(characterFitsEra(char('邓布利多'), 'marauders')).toBe(true);
    expect(characterFitsEra(char('詹姆·波特'), 'marauders')).toBe(true);
  });

  it('子时代下劫盗者被挡掉', () => {
    expect(characterFitsEra(char('詹姆·波特'), 'trio')).toBe(false);
    expect(characterFitsEra(char('莉莉·伊万斯'), 'trio')).toBe(false);
    expect(characterFitsEra(char('罗恩·韦斯莱'), 'trio')).toBe(true);
  });

  it("'auto' 不过滤任何人", () => {
    expect(characterFitsEra(char('哈利·波特'), 'auto')).toBe(true);
    expect(characterFitsEra(char('詹姆·波特'), 'auto')).toBe(true);
  });

  it('filterCharactersByEra 保持顺序并剔除越界者', () => {
    const list = [char('哈利·波特'), char('邓布利多'), char('詹姆·波特'), char('卡西乌斯·莫尔顿', undefined)];
    const picked = filterCharactersByEra(list, 'marauders').map(c => c.name);
    expect(picked).toEqual(['邓布利多', '詹姆·波特', '卡西乌斯·莫尔顿']);
  });
});

describe('按时代取教授', () => {
  it('亲时代魔药课是斯拉格霍恩，不是斯内普', () => {
    expect(eraProfessorFor('魔药课', 'marauders').name).toContain('斯拉格霍恩');
    expect(eraProfessorFor('魔药课', 'trio').name).toContain('斯内普');
  });

  it('新生代草药课是纳威', () => {
    expect(eraProfessorFor('草药课', 'nextgen').name).toContain('隆巴顿');
    expect(eraProfessorFor('草药课', 'trio').name).toContain('斯普劳特');
  });

  it("'auto' 与子时代一致", () => {
    expect(eraProfessorFor('变形术课', 'auto')).toEqual(eraProfessorFor('变形术课', 'trio'));
  });

  it('未知课程回落到级长', () => {
    expect(eraProfessorFor('不存在的课', 'trio').name).toBe('级长');
  });
});
