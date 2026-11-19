import React, { useState, useCallback } from 'react';
import { useOS } from '../context/OSContext';
import { hogwartsGenerate } from '../utils/hogwartsGenerate';
import {
  HOUSE_META, HOUSE_IDS, defaultCampusState, loadCampusState, saveCampusState,
  awardHousePoints, nextCampusPeriod, bumpCampusAttributes,
} from '../utils/hogwarts';
import type { HouseId, CampusState, CharacterProfile } from '../types';

const LOCATIONS = ['大礼堂', '魔咒课教室', '图书馆', '魁地奇球场', '公共休息室', '禁林边缘', '变形课教室', '魔药课地窖'];
const ACTIVITIES: Record<string, string[]> = {
  morning: ['魔咒课', '变形术课', '魔药课', '草药课', '魔法史课'],
  afternoon: ['魁地奇训练', '图书馆自习', '决斗俱乐部', '占卜课', '保护神奇生物课'],
  evening: ['公共休息室闲聊', '学院聚餐', '夜间探险', '写论文', '天文课观星'],
};
const PERIOD_LABEL = { morning: '🌅 上午', afternoon: '☀️ 下午', evening: '🌙 晚上' };

const CampusApp: React.FC = () => {
  const { closeApp, characters, apiConfig, userProfile, addToast } = useOS();
  const [state, setState] = useState<CampusState>(() => {
    const loaded = loadCampusState();
    if (loaded) return loaded;
    return defaultCampusState('gryffindor', characters.map(c => ({ charId: c.id, name: c.name, houseId: (c as any).houseId })));
  });
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  const persist = useCallback((next: CampusState) => { saveCampusState(next); setState(next); }, []);

  const advance = (nextState?: Partial<CampusState>) => {
    const { day, period } = nextCampusPeriod(state.day, state.period);
    const activityList = ACTIVITIES[period];
    const activity = activityList[Math.floor(Math.random() * activityList.length)];
    const location = nextState?.location || (period === 'evening' ? '公共休息室' : LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]);
    const next: CampusState = {
      ...state, ...nextState,
      day, period, activity, location,
      log: [
        {
          id: `ev-${Date.now()}`,
          day,
          period,
          text: nextState?.activity ? String(nextState.activity) : `第 ${day} 天 · ${PERIOD_LABEL[period]}，${location}：${activity}`,
          at: Date.now(),
        },
        ...state.log,
      ].slice(0, 100),
    };
    persist(next);
  };

  const handleAct = async () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput('');
    setBusy(true);
    try {
      const char: CharacterProfile | undefined = characters[0];
      const instruction = `你在模拟霍格沃茨魔法学校的校园生活。当前是第 ${state.day} 天 ${PERIOD_LABEL[state.period]}，地点：${state.location}，活动：${state.activity}。
用户的输入是一个校园行动/发言。请用简短生动的第二人称叙述（80-150字）描述接下来发生的事，并给出一行「结果：」总结（含学院加分建议 +N 或 -N）。
学院：${HOUSE_META[state.houseId].cn}。保持奇幻温暖的校园氛围，符合哈利波特世界观。`;
      const result = await hogwartsGenerate({
        feature: 'campus', globalApi: apiConfig as any, char, userProfile: userProfile as any,
        instructions: instruction, userInput: text,
      });
      const match = result.match(/([+-]\d+)/);
      if (match) awardHousePoints(state.houseId, parseInt(match[1], 10), `校园事件：${text.slice(0, 20)}`);
      advance({ activity: result });
      addToast('校园剧情已推进', 'success');
    } catch (e: any) {
      addToast(e?.message || '生成失败，请检查 API 配置', 'error');
    } finally {
      setBusy(false);
    }
  };

  const attrs = state.attributes;
  const selectedChar = characters[0];

  return (
    <div className="h-full w-full bg-gradient-to-b from-indigo-950 via-[#1a1a2e] to-slate-900 flex flex-col font-light overflow-hidden text-amber-50">
      <div className="bg-black/30 backdrop-blur-md border-b border-amber-200/20 shrink-0 sticky top-0 z-10" style={{ paddingTop: 'var(--safe-top)' }}>
        <div className="flex items-center px-4 py-3 gap-2">
          <button onClick={closeApp} className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h1 className="text-xl font-medium text-amber-100 tracking-wide flex-1">霍格沃茨 · 校园</h1>
          <span className="text-xs text-amber-300/70">Day {state.day}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-32">
        {/* 状态卡 */}
        <div className="rounded-2xl p-4 bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-300/30 backdrop-blur">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🏰</span>
            <div>
              <div className="font-semibold text-amber-100">{PERIOD_LABEL[state.period]} · {state.location}</div>
              <div className="text-xs text-amber-200/60">当前活动：{state.activity}</div>
            </div>
          </div>
          <select value={state.houseId} onChange={e => persist({ ...state, houseId: e.target.value as HouseId })}
            className="w-full px-3 py-2 rounded-xl bg-black/30 border border-amber-300/30 text-amber-100 text-sm focus:outline-none">
            {HOUSE_IDS.map(id => <option key={id} value={id} className="bg-slate-800">{HOUSE_META[id].cn}</option>)}
          </select>
        </div>

        {/* 属性 */}
        <div className="mt-4 grid grid-cols-5 gap-2">
          {Object.entries(attrs).map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-2 text-center">
              <div className="text-xs text-amber-200/60 capitalize">{k.slice(0, 4)}</div>
              <div className="text-lg font-bold text-amber-100">{v}</div>
            </div>
          ))}
        </div>

        {/* 事件日志 */}
        <div className="mt-5">
          <h2 className="text-sm font-semibold text-amber-200/80 mb-3">📜 校园日志</h2>
          <div className="space-y-2">
            {state.log.length === 0 && (
              <p className="text-sm text-amber-100/40">新的一天开始了。在下方输入你想做的事，开启霍格沃茨之旅。</p>
            )}
            {state.log.map(ev => (
              <div key={ev.id} className="rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-amber-300/60 mb-1">Day {ev.day} · {ev.period}</div>
                <div className="text-sm text-amber-50/90 whitespace-pre-wrap leading-relaxed">{ev.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 输入区 */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/95 to-transparent border-t border-amber-200/10">
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') handleAct(); }}
            placeholder="输入行动，如：去图书馆复习黑魔法防御术…"
            className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-amber-200/20 text-amber-50 placeholder:text-amber-200/30 focus:outline-none focus:border-amber-300/50 text-sm" />
          <button onClick={handleAct} disabled={busy}
            className="px-4 py-3 rounded-2xl bg-amber-500 text-[#1a1a2e] font-semibold disabled:opacity-50 active:scale-95 transition-transform">
            {busy ? '…' : '推进'}
          </button>
        </div>
        <button onClick={() => advance()} className="mt-2 w-full text-center text-xs text-amber-300/60 py-1">
          ⏭ 跳过本时段，直接进入下一节课
        </button>
      </div>
    </div>
  );
};

export default CampusApp;
