import { describe, expect, it } from 'vitest';
import {
  FORUM_ERAS, forumEraInstruction, forumTimeContext,
  parseExtrasGeneration, sanitizeProse, parseSceneMessages,
} from './hogwarts';

describe('forum era override', () => {
  const ctx = forumTimeContext(new Date('2026-11-19T10:00:00'));

  it('auto era keeps real-time context', () => {
    const text = forumEraInstruction(ctx, '你是张三。');
    expect(text).toContain('上午');
    expect(text).toContain('张三');
  });

  it('fixed era replaces real-time context', () => {
    const text = forumEraInstruction(ctx, undefined, 'marauders');
    expect(text).toContain('劫盗者');
    expect(text).not.toContain('上午');
  });

  it('has selectable eras', () => {
    expect(FORUM_ERAS.map(e => e.id)).toEqual(expect.arrayContaining(['auto', 'marauders', 'trio', 'postwar', 'nextgen']));
  });
});

describe('parseExtrasGeneration', () => {
  it('parses chapter JSON', () => {
    const raw = JSON.stringify({
      title: '魔杖的私语',
      chapters: [
        { title: '第一章', content: '夜色下的禁林边缘……' },
        { title: '第二章', content: '第二天清晨……' },
      ],
    });
    const parsed = parseExtrasGeneration(raw, '哈利');
    expect(parsed.title).toBe('魔杖的私语');
    expect(parsed.chapters).toHaveLength(2);
    expect(parsed.chapters[0].content).toContain('禁林');
  });

  it('falls back to single chapter on plain text', () => {
    const parsed = parseExtrasGeneration('这不是JSON，就是一段故事。', '赫敏');
    expect(parsed.chapters).toHaveLength(1);
    expect(parsed.title).toContain('赫敏');
  });
});

describe('sanitizeProse', () => {
  it('strips markdown and code blocks', () => {
    const dirty = '## 标题\n**加粗**和*斜体*以及`代码`\n```js\nvar x = 1;\n```\n- 列表项\n\n\n\n普通段落。';
    const clean = sanitizeProse(dirty);
    expect(clean).not.toContain('#');
    expect(clean).not.toContain('**');
    expect(clean).not.toContain('var x');
    expect(clean).toContain('普通段落');
  });
});

describe('parseSceneMessages (campus)', () => {
  it('parses group scene JSON array', () => {
    const raw = JSON.stringify([
      { role: 'narration', speaker: 'GM', text: '教室里安静下来。' },
      { role: 'professor', speaker: '弗立维教授', text: '谁来示范漂浮咒？' },
      { role: 'npc', speaker: '罗恩·韦斯莱', houseId: 'gryffindor', text: '（小声）别看我。' },
    ]);
    const msgs = parseSceneMessages(raw);
    expect(msgs).toHaveLength(3);
    expect(msgs[1].role).toBe('professor');
    expect(msgs[2].houseId).toBe('gryffindor');
  });

  it('falls back to narration for plain text', () => {
    const msgs = parseSceneMessages('一段没有 JSON 的文本。');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].role).toBe('narration');
  });
});
