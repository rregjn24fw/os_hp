/**
 * 霍格沃茨生成入口的健壮性测试（自用二改）。
 *
 * 这三个行为是有「切页面也能生成」这条需求直接带出来的：
 *  - 请求必须带超时，否则渠道卡住时后台任务永远悬着、页面只剩「正在生成…」；
 *  - 瞬时故障（5xx / 429 / 网络抖动）自动重试一次，用户没在盯着的时候别白跑；
 *  - 4xx 是配置问题，不能重试，得原样把错误抛出去让人看到。
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { hogwartsGenerate } from './hogwartsGenerate';

const globalApi = { baseUrl: 'https://api.example.com/v1', apiKey: 'sk-test', model: 'gpt-test' };

const okReply = (content: string) => new Response(
  JSON.stringify({ choices: [{ message: { content } }] }),
  { status: 200, headers: { 'Content-Type': 'application/json' } },
);

const errorReply = (status: number, body = 'boom') => new Response(body, { status });

function baseArgs(overrides: Partial<Parameters<typeof hogwartsGenerate>[0]> = {}) {
  return {
    feature: 'extras' as const,
    globalApi,
    userProfile: { name: '测试巫师' },
    instructions: '写点东西',
    userInput: '开始',
    ...overrides,
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('hogwartsGenerate', () => {
  it('正常返回模型正文', async () => {
    const fetchSpy = vi.fn(async () => okReply('  他推开门。  '));
    vi.stubGlobal('fetch', fetchSpy);

    await expect(hogwartsGenerate(baseArgs())).resolves.toBe('他推开门。');
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it('4xx 原样抛错，不重试', async () => {
    const fetchSpy = vi.fn(async () => errorReply(401, 'invalid key'));
    vi.stubGlobal('fetch', fetchSpy);

    await expect(hogwartsGenerate(baseArgs())).rejects.toThrow(/401/);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it('5xx 自动重试一次并最终成功', async () => {
    const fetchSpy = vi.fn()
      .mockImplementationOnce(async () => errorReply(502))
      .mockImplementationOnce(async () => okReply('重试后的正文'));
    vi.stubGlobal('fetch', fetchSpy);

    await expect(hogwartsGenerate(baseArgs())).resolves.toBe('重试后的正文');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('网络抖动（fetch TypeError）重试一次，仍失败才抛错', async () => {
    const fetchSpy = vi.fn(async () => { throw new TypeError('Failed to fetch'); });
    vi.stubGlobal('fetch', fetchSpy);

    await expect(hogwartsGenerate(baseArgs())).rejects.toThrow(/网络请求失败/);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('超时会中断请求并给出可读原因（而不是永远悬着）', async () => {
    const fetchSpy = vi.fn((_url: string, init: any) => new Promise((_resolve, reject) => {
      init.signal.addEventListener('abort', () => reject(init.signal.reason || new Error('aborted')));
    }));
    vi.stubGlobal('fetch', fetchSpy);

    await expect(hogwartsGenerate(baseArgs({ timeoutMs: 40 }))).rejects.toThrow(/生成超时/);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it('空正文给出可操作的原因', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => okReply('   ')));
    await expect(hogwartsGenerate(baseArgs())).rejects.toThrow(/未返回有效内容/);
  });
});
