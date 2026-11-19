import { describe, expect, it } from 'vitest';
import { isSillyTavernPreset, parseSillyTavernPreset } from './sillyTavernPreset';
import { parseStandardWorldbook } from './worldbook';
import { tavernCardToProfilePatch, tavernLoreToWorldbooks } from './tavernCard';
import type { TavernCardData } from './tavernCard';

describe('sillyTavernPreset', () => {
    it('detects a SillyTavern preset', () => {
        expect(isSillyTavernPreset({
            name: 'Test', temperature: 0.7, top_p: 0.9,
            prompts: [{ identifier: 'main', role: 0, content: 'hello', enabled: true }],
        })).toBe(true);
    });

    it('rejects non-preset JSON', () => {
        expect(isSillyTavernPreset({ foo: 'bar' })).toBe(false);
        expect(isSillyTavernPreset({ messages: [] })).toBe(false);
    });

    it('maps generation params and prompts with markers', () => {
        const result = parseSillyTavernPreset(JSON.stringify({
            name: '魔法预设',
            temperature: 0.75, top_p: 0.88, frequency_penalty: 0.3,
            presence_penalty: -0.2, max_tokens: 4096, top_k: 40,
            prompts: [
                { identifier: 'main', role: 0, content: '你是哈利波特世界里的导师', enabled: true },
                { identifier: 'charJailbreak', role: 0, content: '角色设定', enabled: true },
                { identifier: 'worldInfoBefore', role: 0, content: '', enabled: true },
                { identifier: 'chatHistory', role: 1, content: '', enabled: false },
            ],
        }), 'preset.json');
        expect(result.document.generation.temperature).toBeCloseTo(0.75);
        expect(result.document.generation.topP).toBeCloseTo(0.88);
        expect(result.document.generation.frequencyPenalty).toBeCloseTo(0.3);
        expect(result.document.generation.maxTokens).toBe(4096);
        const markers = result.document.prompts.map(p => p.marker).filter(Boolean);
        expect(markers).toContain('characters');
        expect(markers).toContain('world_before');
        expect(markers).toContain('history');
        const history = result.document.prompts.find(p => p.marker === 'history');
        expect(history?.enabled).toBe(false);
    });

    it('adds fallback slot prompts when no marker is recognized', () => {
        const result = parseSillyTavernPreset(JSON.stringify({
            temperature: 0.8,
            prompts: [{ identifier: 'main', role: 0, content: 'rule', enabled: true }],
        }));
        expect(result.document.prompts.some(p => p.marker === 'characters')).toBe(true);
    });

    it('clamps out-of-range values', () => {
        const result = parseSillyTavernPreset(JSON.stringify({
            temperature: 99, top_p: -5, max_tokens: 1,
            prompts: [{ identifier: 'main', role: 0, content: 'x' }],
        }));
        expect(result.document.generation.temperature).toBe(2);
        expect(result.document.generation.topP).toBe(0);
        expect(result.document.generation.maxTokens).toBe(256);
    });
});

describe('tavern character card mapping', () => {
    const card: TavernCardData = {
        spec: 'chara_card_v2',
        name: '赫敏',
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
                { keys: ['魔法', '咒语'], content: '魔法是世界的核心', comment: '魔法设定', position: 'before_char' },
                { secondary_keys: ['禁林'], content: '禁林很危险', enabled: false, position: 'at_depth', depth: 3 },
            ],
        },
    };

    it('maps profile fields', () => {
        const patch = tavernCardToProfilePatch(card);
        expect(patch.name).toBe('赫敏');
        expect(patch.description).toBe('聪明的女巫');
        expect(patch.systemPrompt).toContain('勤奋、好奇');
        expect(patch.systemPrompt).toContain('保持角色语气');
        expect(patch.worldview).toBe('霍格沃茨图书馆');
        expect(patch.firstMes).toBe('你在找什么书？');
        expect(patch.alternateGreetings).toEqual(['另一个开场']);
        expect(patch.exampleDialogues).toContain('示例对话');
    });

    it('maps character_book to worldbooks', () => {
        const books = tavernLoreToWorldbooks(card) as any[];
        expect(books).toHaveLength(2);
        expect(books[0].key).toEqual(['魔法', '咒语']);
        expect(books[0].position).toBe(0);
        // 有主关键词 → 关键词触发（非常驻），符合酒馆语义
        expect(books[0].constant).toBe(false);
        expect(books[1].keysecondary).toEqual(['禁林']);
        expect(books[1].disable).toBe(true);
        expect(books[1].position).toBe(4);
        expect(books[1].depth).toBe(3);
    });
});

describe('worldbook lorebook aliases', () => {
    it('maps SillyTavern keys/enabled/position aliases', () => {
        const raw = JSON.stringify({
            entries: {
                '0': { keys: ['霍格沃茨'], content: '魔法学校', position: 'before_char', enabled: true },
                '1': { secondary_keys: ['伏地魔'], content: '黑魔王', position: 'at_depth', enabled: false, depth: 2 },
            },
        });
        const books = parseStandardWorldbook(raw, '测试') as any[];
        expect(books).toHaveLength(2);
        expect(books[0].key).toEqual(['霍格沃茨']);
        expect(books[0].position).toBe(0);
        expect(books[1].keysecondary).toEqual(['伏地魔']);
        expect(books[1].position).toBe(4);
        expect(books[1].disable).toBe(true);
        expect(books[1].depth).toBe(2);
    });
});
