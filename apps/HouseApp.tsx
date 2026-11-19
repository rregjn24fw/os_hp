import React, { useState, useCallback } from 'react';
import { useOS } from '../context/OSContext';
import type { HouseId } from '../types';
import {
  HOUSE_META, HOUSE_IDS, loadHouseState, saveHouseState, awardHousePoints,
} from '../utils/hogwarts';

type Tab = 'board' | 'rooms';

const HouseApp: React.FC = () => {
  const { closeApp, characters, updateCharacter, addToast } = useOS();
  const [state, setState] = useState(() => loadHouseState());
  const [tab, setTab] = useState<Tab>('board');
  const [selected, setSelected] = useState<HouseId>('gryffindor');
  const [pointsInput, setPointsInput] = useState('10');
  const [reason, setReason] = useState('');

  const refresh = useCallback(() => setState(loadHouseState()), []);

  const handleAward = async (delta: number) => {
    if (!delta || Number.isNaN(delta)) return;
    const next = awardHousePoints(selected, delta, reason.trim() || (delta > 0 ? '学院加分' : '学院扣分'));
    setState(next);
    setReason('');
    addToast(`${HOUSE_META[selected].cn} ${delta > 0 ? '+' : ''}${delta} 分`, 'success');
  };

  const handleAssign = async (charId: string, houseId: HouseId | undefined) => {
    // 从所有学院中移除该角色，再加入目标学院
    const next = loadHouseState();
    next.houses = next.houses.map(h => ({
      ...h,
      characterIds: h.characterIds.filter(id => id !== charId)
        .concat(h.id === houseId ? [charId] : []),
    }));
    saveHouseState(next);
    setState(next);
    await updateCharacter(charId, { houseId } as any);
    addToast(houseId ? `已归属 ${HOUSE_META[houseId].cn}` : '已取消学院归属', 'success');
  };

  const selectedHouse = state.houses.find(h => h.id === selected) || state.houses[0];
  const sorted = [...state.houses].sort((a, b) => b.points - a.points);

  return (
    <div className="h-full w-full bg-gradient-to-b from-amber-50 to-stone-100 flex flex-col font-light overflow-hidden">
      <div className="bg-[#1a1a2e]/85 backdrop-blur-md border-b border-amber-200/30 shrink-0 sticky top-0 z-10" style={{ paddingTop: 'var(--safe-top)' }}>
        <div className="flex items-center px-4 py-3 gap-2">
          <button onClick={closeApp} className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h1 className="text-xl font-medium text-amber-100 tracking-wide flex-1">霍格沃茨 · 学院</h1>
          <span className="text-xs text-amber-300/70">🏆 学院杯</span>
        </div>
        <div className="flex px-4 pb-2 gap-2">
          {(['board', 'rooms'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${tab === t ? 'bg-amber-300 text-[#1a1a2e] font-medium' : 'text-amber-200/80 hover:bg-white/10'}`}>
              {t === 'board' ? '积分榜' : '公共休息室'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-8">
        {tab === 'board' ? (
          <>
            {/* 积分榜 */}
            <div className="space-y-3">
              {sorted.map((house, idx) => (
                <button key={house.id} onClick={() => setSelected(house.id)}
                  className={`w-full rounded-2xl p-4 text-left shadow-sm border-2 transition-all active:scale-[0.99] ${selected === house.id ? 'border-amber-400 shadow-lg' : 'border-transparent'}`}
                  style={{ background: HOUSE_META[house.id].gradient }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{idx === 0 ? '👑' : HOUSE_META[house.id].animal === '蛇' ? '🐍' : HOUSE_META[house.id].animal === '鹰' ? '🦅' : HOUSE_META[house.id].animal === '獾' ? '🦡' : '🦁'}</span>
                    <div className="flex-1 text-white">
                      <div className="font-semibold text-lg">{house.name}</div>
                      <div className="text-xs text-white/75">{house.cn} · {house.characterIds.length} 名成员</div>
                    </div>
                    <div className="text-right text-white">
                      <div className="text-3xl font-bold tabular-nums">{house.points}</div>
                      <div className="text-xs text-white/75">分</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* 加减分操作 */}
            <div className="mt-5 rounded-2xl bg-white/80 backdrop-blur p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-stone-700 mb-3">
                为「{HOUSE_META[selected].cn}」加分 / 扣分
              </h2>
              <div className="flex gap-2 mb-3">
                <input value={pointsInput} onChange={e => setPointsInput(e.target.value)}
                  inputMode="numeric" placeholder="分值"
                  className="w-20 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-center focus:outline-none focus:border-amber-400" />
                <input value={reason} onChange={e => setReason(e.target.value)}
                  placeholder="理由（如：课堂表现出色）"
                  className="flex-1 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 focus:outline-none focus:border-amber-400 text-sm" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleAward(Math.abs(parseInt(pointsInput, 10) || 0))}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium active:scale-95 transition-transform">
                  + 加分
                </button>
                <button onClick={() => handleAward(-Math.abs(parseInt(pointsInput, 10) || 0))}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white text-sm font-medium active:scale-95 transition-transform">
                  − 扣分
                </button>
              </div>
            </div>

            {/* 积分记录 */}
            {state.history.length > 0 && (
              <div className="mt-5 rounded-2xl bg-white/80 backdrop-blur p-4 shadow-sm">
                <h2 className="text-sm font-semibold text-stone-700 mb-3">最近变动</h2>
                <div className="space-y-2">
                  {state.history.slice(0, 10).map(h => (
                    <div key={h.id} className="flex items-center gap-2 text-sm border-b border-stone-100 pb-2 last:border-0">
                      <span className="px-2 py-0.5 rounded text-xs text-white" style={{ background: HOUSE_META[h.houseId].color }}>
                        {HOUSE_META[h.houseId].cn}
                      </span>
                      <span className={`font-semibold ${h.delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {h.delta > 0 ? '+' : ''}{h.delta}
                      </span>
                      <span className="text-stone-500 flex-1 truncate">{h.reason}</span>
                      <span className="text-stone-400 text-xs">{new Date(h.at).toLocaleDateString('zh-CN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* 公共休息室 */}
            <div className="rounded-2xl p-5 text-white shadow-md mb-5" style={{ background: HOUSE_META[selectedHouse.id].gradient }}>
              <div className="text-3xl mb-2">{selectedHouse.animal === '蛇' ? '🐍' : selectedHouse.animal === '鹰' ? '🦅' : selectedHouse.animal === '獾' ? '🦡' : '🦁'}</div>
              <h2 className="text-xl font-semibold">{selectedHouse.cn}公共休息室</h2>
              <p className="text-sm text-white/80 mt-1">{selectedHouse.commonRoom || '在城堡深处，属于你的学院专属空间。'}</p>
            </div>

            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
              {HOUSE_IDS.map(id => (
                <button key={id} onClick={() => setSelected(id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-sm ${selected === id ? 'text-white font-medium' : 'bg-white/70 text-stone-600'}`}
                  style={selected === id ? { background: HOUSE_META[id].color } : {}}>
                  {HOUSE_META[id].cn}
                </button>
              ))}
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">成员归属</h3>
              {characters.length === 0 ? (
                <p className="text-sm text-stone-400">还没有角色。先在「神经链接」创建角色吧。</p>
              ) : (
                <div className="space-y-2">
                  {characters.map(c => {
                    const current = state.houses.find(h => h.characterIds.includes(c.id))?.id;
                    return (
                      <div key={c.id} className="flex items-center gap-3 py-2 border-b border-stone-100 last:border-0">
                        <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover bg-stone-200" />
                        <span className="flex-1 text-sm text-stone-700 truncate">{c.name}</span>
                        <select value={current || ''} onChange={e => handleAssign(c.id, (e.target.value || undefined) as HouseId | undefined)}
                          className="px-2 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs focus:outline-none">
                          <option value="">未分配</option>
                          {HOUSE_IDS.map(id => <option key={id} value={id}>{HOUSE_META[id].cn}</option>)}
                        </select>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HouseApp;
