/**
 * 霍格沃茨后台任务层 —— 让 AI 请求不随页面切换而中断。
 *
 * 问题根源：小手机切 App 时 PhoneShell 用 key={activeApp} 把整棵组件卸载。
 * 组件里发起的请求即使在网络层没断，回来的结果也只会 setState 到已卸载的组件上，
 * 等于白跑一趟；下次进页面还是空。
 *
 * 做法：把「发请求 + 落库」整体搬到模块作用域执行（模块不会因为组件卸载而销毁），
 * 组件只订阅任务状态。任务完成时结果已经写进 localStorage，
 * 所以切页面、锁屏、去别的 App 逛一圈回来，数据都在。
 */

import { useEffect, useState } from 'react';

export type HogwartsTaskKind = 'forum' | 'campus' | 'extras' | 'recreation';

export interface HogwartsTaskInfo {
  id: string;
  kind: HogwartsTaskKind;
  /** 任务名（用于页面上的「进行中」提示） */
  label: string;
  status: 'running' | 'done' | 'error';
  /** 进度文案，例如「已送达 3/6」 */
  detail: string;
  startedAt: number;
  finishedAt?: number;
  error?: string;
}

export interface HogwartsTaskNotice {
  id: string;
  text: string;
  type: 'success' | 'error';
}

/** 已完成任务保留多久（超时自动清理，避免无限堆积）。 */
const KEEP_MS = 3 * 60 * 1000;
const MAX_TASKS = 12;

const tasks = new Map<string, HogwartsTaskInfo>();
const listeners = new Set<() => void>();
const notices: HogwartsTaskNotice[] = [];

function prune() {
  const now = Date.now();
  const done = [...tasks.values()]
    .filter(t => t.status !== 'running')
    .sort((a, b) => (a.finishedAt || 0) - (b.finishedAt || 0));
  for (const t of done) {
    if (now - (t.finishedAt || 0) > KEEP_MS) tasks.delete(t.id);
  }
  const all = [...tasks.values()].sort((a, b) => a.startedAt - b.startedAt);
  while (all.length > MAX_TASKS) {
    const victim = all.find(t => t.status !== 'running');
    if (!victim) break;
    tasks.delete(victim.id);
    all.splice(all.indexOf(victim), 1);
  }
}

function emit() {
  for (const l of [...listeners]) {
    try { l(); } catch { /* 订阅方异常不影响任务本身 */ }
  }
}

export function subscribeHogwartsTask(cb: () => void): () => void {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

export function getHogwartsTasks(): HogwartsTaskInfo[] {
  return [...tasks.values()].sort((a, b) => b.startedAt - a.startedAt);
}

/** 某个模块当前有没有任务在跑（进入页面时判断要不要再起一份）。 */
export function isHogwartsTaskRunning(kind: HogwartsTaskKind): boolean {
  return [...tasks.values()].some(t => t.kind === kind && t.status === 'running');
}

/** 取一条「后台完成」全局提示（由 PhoneShell 消费成 toast）。 */
export function takeHogwartsNotice(): HogwartsTaskNotice | undefined {
  return notices.shift();
}

export interface HogwartsTaskCtx {
  /** 更新进度文案（会触发订阅方重渲染）。 */
  report: (detail: string) => void;
}

export interface RunHogwartsTaskOptions<T> {
  kind: HogwartsTaskKind;
  label: string;
  /** 完成后的全局提示文案；返回 undefined 则不提示。 */
  notice?: (result: T) => string | undefined;
  run: (ctx: HogwartsTaskCtx) => Promise<T>;
}

/**
 * 启动一个后台任务：立刻返回 Promise，但真正的执行与落库都在模块作用域，
 * 组件卸载不会打断它。成功后返回值；失败返回 undefined（错误已走全局提示）。
 */
export async function runHogwartsTask<T>(opts: RunHogwartsTaskOptions<T>): Promise<T | undefined> {
  const id = `${opts.kind}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  const info: HogwartsTaskInfo = {
    id, kind: opts.kind, label: opts.label,
    status: 'running', detail: '正在唤醒猫头鹰…',
    startedAt: Date.now(),
  };
  tasks.set(id, info);
  prune();
  emit();

  try {
    const result = await opts.run({
      report: (detail: string) => { info.detail = detail; emit(); },
    });
    info.status = 'done';
    info.detail = '已完成';
    info.finishedAt = Date.now();
    const text = opts.notice?.(result);
    if (text) notices.push({ id, text, type: 'success' });
    emit();
    return result;
  } catch (e: any) {
    const msg = e?.message || '生成失败，请检查 API 配置';
    info.status = 'error';
    info.error = msg;
    info.detail = msg;
    info.finishedAt = Date.now();
    notices.push({ id, text: msg, type: 'error' });
    emit();
    return undefined;
  }
}

// ── React 订阅 ────────────────────────────────────────────────────────

/** 订阅全部任务的状态快照。 */
export function useHogwartsTasks(): HogwartsTaskInfo[] {
  const [snap, setSnap] = useState<HogwartsTaskInfo[]>(() => getHogwartsTasks());
  useEffect(() => {
    setSnap(getHogwartsTasks());
    return subscribeHogwartsTask(() => setSnap(getHogwartsTasks()));
  }, []);
  return snap;
}

/**
 * 只关心某一模块的任务：running 用于显示「生成中」，
 * lastFinished 的 finishedAt 变化时页面该去 localStorage 重新读数据。
 */
export function useHogwartsTaskKind(kind: HogwartsTaskKind) {
  const all = useHogwartsTasks();
  const mine = all.filter(t => t.kind === kind);
  const running = mine.find(t => t.status === 'running');
  const lastFinished = mine
    .filter(t => t.status !== 'running')
    .sort((a, b) => (b.finishedAt || 0) - (a.finishedAt || 0))[0];
  return {
    running,
    lastFinished,
    busy: Boolean(running),
    /** 任何任务状态变化都会变的时间戳，方便挂 useEffect */
    stamp: running ? running.startedAt + (running.detail?.length || 0) : (lastFinished?.finishedAt || 0),
  };
}
