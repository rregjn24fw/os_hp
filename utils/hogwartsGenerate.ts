/**
 * 霍格沃茨新功能的统一 LLM 生成入口（自用二改）。
 *
 * 与项目其它 App 一致：走 ContextBuilder.buildCharacterRequest 组装人设 + 世界书 +
 * 用户档案，再 POST 到 OpenAI 格式接口。差别在于支持功能级独立 AI 配置，
 * 留空时回落到全局 apiConfig。
 */
import { ContextBuilder } from './context';
import { safeResponseJson } from './safeApi';
import type { CharacterProfile } from '../types';
import { resolveFeatureAiConfig, loadStylePreset } from './hogwarts';

type GlobalApi = { baseUrl: string; apiKey: string; model: string };

/** 内部标记：这个错误值得原地重试一次（渠道抖动），而不是直接抛给用户。 */
interface RetryableError extends Error { retryable?: boolean }

export interface HogwartsGenerateOptions {
  feature: 'novel' | 'forum' | 'campus' | 'extras';
  globalApi: GlobalApi;
  char?: CharacterProfile;
  userProfile: { name: string; [key: string]: any };
  instructions: string;
  userInput: string;
  temperature?: number;
  maxTokens?: number;
  /** 单次请求超时（毫秒），默认 200 秒。超时会抛错，由任务层变成可见提示。 */
  timeoutMs?: number;
}

/** 返回模型文本；失败时抛错，由调用方决定兜底。 */
export async function hogwartsGenerate(opts: HogwartsGenerateOptions): Promise<string> {
  const cfg = resolveFeatureAiConfig(opts.feature, opts.globalApi);
  const baseUrl = (cfg.baseUrl || opts.globalApi.baseUrl).replace(/\/+$/, '');
  if (!baseUrl || !cfg.apiKey) throw new Error('请先在设置里填写 API 地址与密钥');

  // 全局酒馆文风预设：启用时注入所有霍格沃茨生成（番外/论坛/校园），文风与温度随之生效。
  const style = loadStylePreset();
  const systemContent = style?.prompt
    ? `【全局文风预设 · ${style.name}（以下指令必须遵守）】\n${style.prompt}\n\n【本功能指令】\n${opts.instructions}`
    : opts.instructions;

  const messages = opts.char
    ? await ContextBuilder.buildCharacterRequest(
        { char: opts.char, user: opts.userProfile as any },
        [
          { role: 'system', content: systemContent },
          { role: 'user', content: opts.userInput },
        ] as any,
      )
    : ([
        { role: 'system', content: systemContent },
        { role: 'user', content: opts.userInput },
      ] as any[]);

  // 请求超时：不挂 signal 的话，渠道一旦卡住请求会永远悬着——页面上只剩
  // 「正在续写…」，用户分不清是慢还是失败，数据也永远落不了库。超时抛错，
  // 由任务层转成可见的错误提示（并写进系统日志），至少知道该重试。
  const timeoutMs = opts.timeoutMs ?? 200_000;

  const attempt = async (): Promise<string> => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      try { controller.abort(new DOMException(`生成超时（${Math.round(timeoutMs / 1000)} 秒没有响应）`, 'TimeoutError')); } catch { /* 老浏览器不支持 reason */ }
    }, timeoutMs);
    try {
      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cfg.apiKey}`,
        },
        body: JSON.stringify({
          model: cfg.model || opts.globalApi.model,
          messages,
          // 温度优先级：调用方显式指定 > 酒馆预设 > 功能级配置 > 默认
          temperature: opts.temperature ?? style?.temperature ?? cfg.temperature ?? 0.85,
          max_tokens: cfg.maxTokens ?? opts.maxTokens ?? 2000,
        }),
        signal: controller.signal,
        __sullyMeta: {
          appId: `hogwarts-${opts.feature}`,
          appName: '霍格沃茨',
          purpose: '霍格沃茨主题生成',
        },
      } as RequestInit);

      if (!response.ok) {
        const detail = await response.text().catch(() => '');
        const failure: RetryableError = new Error(`生成失败 (${response.status})：${detail.slice(0, 120)}`);
        // 5xx / 429 是渠道侧抖动，值得再来一次；4xx 是配置或参数问题，重试只会再错一遍。
        failure.retryable = response.status >= 500 || response.status === 429;
        throw failure;
      }
      const data = await safeResponseJson(response);
      const content = data.choices?.[0]?.message?.content;
      if (typeof content !== 'string' || !content.trim()) {
        throw new Error('模型未返回有效内容（多半是被 max_tokens 截断，或渠道只回了思考过程），可以重试或把字数调小');
      }
      return content.trim();
    } catch (e: any) {
      if (controller.signal.aborted) {
        // 超时不重试：渠道已经卡住，再来一次多半还是卡 200 秒。
        throw new Error(`生成超时（${Math.round(timeoutMs / 1000)} 秒没有响应），换个时间或换个渠道再试`);
      }
      // fetch 在网络层失败会抛 TypeError（Failed to fetch），这类抖动重试一次常常就好了。
      if (e?.name === 'TypeError') {
        const failure: RetryableError = new Error(`网络请求失败：${e.message || 'Failed to fetch'}`);
        failure.retryable = true;
        throw failure;
      }
      throw e;
    } finally {
      clearTimeout(timer);
    }
  };

  try {
    return await attempt();
  } catch (e: any) {
    if (!e?.retryable) throw e;
    await new Promise(resolve => setTimeout(resolve, 1500));
    return await attempt();
  }
}
