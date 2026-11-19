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
import { resolveFeatureAiConfig } from './hogwarts';

type GlobalApi = { baseUrl: string; apiKey: string; model: string };

export interface HogwartsGenerateOptions {
  feature: 'novel' | 'forum' | 'campus';
  globalApi: GlobalApi;
  char?: CharacterProfile;
  userProfile: { name: string; [key: string]: any };
  instructions: string;
  userInput: string;
  temperature?: number;
  maxTokens?: number;
}

/** 返回模型文本；失败时抛错，由调用方决定兜底。 */
export async function hogwartsGenerate(opts: HogwartsGenerateOptions): Promise<string> {
  const cfg = resolveFeatureAiConfig(opts.feature, opts.globalApi);
  const baseUrl = (cfg.baseUrl || opts.globalApi.baseUrl).replace(/\/+$/, '');
  if (!baseUrl || !cfg.apiKey) throw new Error('请先在设置里填写 API 地址与密钥');

  const messages = opts.char
    ? await ContextBuilder.buildCharacterRequest(
        { char: opts.char, user: opts.userProfile as any },
        [
          { role: 'system', content: opts.instructions },
          { role: 'user', content: opts.userInput },
        ] as any,
      )
    : ([
        { role: 'system', content: opts.instructions },
        { role: 'user', content: opts.userInput },
      ] as any[]);

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({
      model: cfg.model || opts.globalApi.model,
      messages,
      temperature: cfg.temperature ?? opts.temperature ?? 0.85,
      max_tokens: cfg.maxTokens ?? opts.maxTokens ?? 2000,
    }),
    __sullyMeta: {
      appId: `hogwarts-${opts.feature}`,
      appName: '霍格沃茨',
      purpose: '霍格沃茨主题生成',
    },
  } as RequestInit);

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`生成失败 (${response.status})：${detail.slice(0, 120)}`);
  }
  const data = await safeResponseJson(response);
  const content = data.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) throw new Error('模型未返回有效内容');
  return content.trim();
}
