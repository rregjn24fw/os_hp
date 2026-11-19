/**
 * 娱乐室（自用二改）：参考芝麻版二改的玩法形态，做哈利波特等效实现。
 *  - 决斗俱乐部（≈辩论对战）：选角色为对手，AI 扮演双方轮流出招，胜者学院加分。
 *  - 时间胶囊：写给未来自己的信，到指定日期才能开启。
 *  - 禁林悬案（≈剧本杀）：AI 生成案件/嫌疑人/线索，自由提问后指认揭晓。
 * 状态存 localStorage（hogwarts_rec_*），AI 复用 hogwartsGenerate（campus 配置）。
 */
import React, { useState } from 'react';
import { useOS } from '../context/OSContext';
import { hogwartsGenerate } from '../utils/hogwartsGenerate';
import { HOUSE_META, awardHousePoints, houseOfCharacter } from '../utils/hogwarts';
import type { HouseId } from '../types';

// ---------------------------------------------------------------------------
// 持久化
// ---------------------------------------------------------------------------

interface DuelState {
  opponentId: string; opponentName: string;
  playerHp: number; oppHp: number;
  round: number;
  log: Array<{ who: 'me' | 'opp' | 'sys'; text: string }>;
  finished: '' | 'me' | 'opp';
}
interface Capsule { id: string; title: string; content: string; createdAt: number; unlockAt: number }
interface MysteryState {
  title: string; scene: string;
  suspects: string[]; clues: string[]; truth: string;
  asked: number; solved: '' | 'right' | 'wrong';
  qa: Array<{ q: string; a: string }>;
}

const read = <T,>(key: string, fallback: T): T => {
  try { const raw = localStorage.getItem(key); return raw ? { ...fallback, ...JSON.parse(raw) } as T : fallback; } catch { return fallback; }
};
const write = (key: string, v: unknown) => { try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* ignore */ } };
const KEY_DUEL = 'hogwarts_rec_duel';
const KEY_CAPSULES = 'hogwarts_rec_capsules';
const KEY_MYSTERY = 'hogwarts_rec_mystery';

const loadCapsules = (): Capsule[] => { try { return JSON.parse(localStorage.getItem(KEY_CAPSULES) || '[]'); } catch { return []; } };
const saveCapsules = (c: Capsule[]) => write(KEY_CAPSULES, c);
const loadMystery = (): MysteryState | null => { try { const r = localStorage.getItem(KEY_MYSTERY); return r ? JSON.parse(r) as MysteryState : null; } catch { return null; } };
const saveMystery = (m: MysteryState | null) => { if (m) write(KEY_MYSTERY, m); else localStorage.removeItem(KEY_MYSTERY); };

const MAX_DUEL_HP = 100;
const MAX_ASKS = 5;

// ---------------------------------------------------------------------------
// 组件
// ---------------------------------------------------------------------------

type Tab = 'duel' | 'capsule' | 'mystery';

const RecreationApp: React.FC = () => {
  const { closeApp, characters, apiConfig, userProfile, addToast } = useOS();
  const [tab, setTab] = useState<Tab>('duel');

  return (
    <div className="h-full w-full bg-gradient-to-b from-violet-50 to-indigo-50 flex flex-col font-light overflow-hidden">
      <div className="bg-[#1f1338]/90 backdrop-blur-md border-b border-amber-200/20 shrink-0 sticky top-0 z-10" style={{ paddingTop: 'var(--safe-top)' }}>
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => closeApp()} className="text-amber-200/80 hover:text-amber-100 text-xl leading-none w-6">‹</button>
          <div className="flex-1">
            <div className="text-amber-50 font-semibold text-base">🎲 娱乐室</div>
            <div className="text-amber-200/60 text-[10px]">决斗 · 时间胶囊 · 禁林悬案</div>
          </div>
        </div>
        <div className="flex gap-1.5 px-4 pb-2">
          {([['duel', '⚔️ 决斗俱乐部'], ['capsule', '⏳ 时间胶囊'], ['mystery', '🕯 禁林悬案']] as Array<[Tab, string]>).map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={`shrink-0 text-[11px] px-2.5 py-1 rounded-full font-medium ${tab === id ? 'bg-amber-400 text-[#1f1338]' : 'bg-white/10 text-amber-200/70'}`}>{label}</button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === 'duel' && <DuelTab characters={characters as any[]} apiConfig={apiConfig as any} userProfile={userProfile as any} addToast={addToast} />}
        {tab === 'capsule' && <CapsuleTab addToast={addToast} />}
        {tab === 'mystery' && <MysteryTab characters={characters as any[]} apiConfig={apiConfig as any} userProfile={userProfile as any} addToast={addToast} />}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 决斗俱乐部
// ---------------------------------------------------------------------------

const DuelTab: React.FC<{ characters: any[]; apiConfig: any; userProfile: any; addToast: (m: string, t?: string) => void }> = ({ characters, apiConfig, userProfile, addToast }) => {
  const [duel, setDuel] = useState<DuelState | null>(() => read<DuelState | null>(KEY_DUEL, null as any));
  const [spell, setSpell] = useState('');
  const [busy, setBusy] = useState(false);

  const start = (char: any) => {
    const next: DuelState = {
      opponentId: char.id, opponentName: char.name,
      playerHp: MAX_DUEL_HP, oppHp: MAX_DUEL_HP, round: 1, log: [
        { who: 'sys', text: `${char.name} 抬起魔杖："决斗开始，愿你发挥出真正的实力。"` },
      ], finished: '',
    };
    write(KEY_DUEL, next); setDuel(next);
  };

  const cast = async () => {
    if (!duel || busy || duel.finished) return;
    const move = spell.trim() || '除你武器';
    setBusy(true); setSpell('');
    try {
      const opponent = characters.find(c => c.id === duel.opponentId);
      const result = await hogwartsGenerate({
        feature: 'campus', globalApi: apiConfig,
        char: opponent, userProfile,
        instructions: `你在模拟霍格沃茨决斗俱乐部的一场对决。对手（用户）本轮出招："${move}"。你扮演对手 ${duel.opponentName}。
严格输出 JSON：{"oppMove":"对手这轮的咒语或动作","oppPower":0-30 的数字,"playerPower":0-30 的数字,"narration":"一两句生动描写本轮交锋的结果"}
规则：oppPower 表示对手这轮的威力，playerPower 表示用户招式的实际威力（可以受对手防御影响而减弱）。双方 HP 各 100。`,
        userInput: `当前比分——我 HP:${duel.playerHp} / 对手 HP:${duel.oppHp}，第 ${duel.round} 轮。我出招：${move}`,
        maxTokens: 500, temperature: 0.9,
      });
      const m = result.match(/\{[\s\S]*\}/);
      const parsed = m ? JSON.parse(m[0]) : { oppMove: '防御', oppPower: 10, playerPower: 10, narration: result };
      const oppP = Math.max(0, Math.min(30, Number(parsed.oppPower) || 10));
      const meP = Math.max(0, Math.min(30, Number(parsed.playerPower) || 10));
      const next: DuelState = {
        ...duel,
        playerHp: Math.max(0, duel.playerHp - oppP),
        oppHp: Math.max(0, duel.oppHp - meP),
        round: duel.round + 1,
        log: [
          ...duel.log,
          { who: 'me', text: `你使出「${move}」（威力 ${meP}）` },
          { who: 'opp', text: `${duel.opponentName}：「${String(parsed.oppMove).slice(0, 30)}」（威力 ${oppP}）` },
          { who: 'sys', text: String(parsed.narration || '').slice(0, 160) },
        ],
      };
      if (next.oppHp <= 0 && next.playerHp <= 0) { next.finished = 'me'; next.log.push({ who: 'sys', text: '双方同时倒下——平局！' }); }
      else if (next.oppHp <= 0) {
        next.finished = 'me';
        const houseId = houseOfCharacter(next.opponentId);
        if (houseId) awardHousePoints(houseId, -5, '决斗失利');
        next.log.push({ who: 'sys', text: `🏆 ${next.opponentName} 被击飞出局，你赢了！（对方学院 -5 分）` });
        const myHouse = (userProfile as any).houseId;
        if (myHouse) awardHousePoints(myHouse, 10, '决斗俱乐部获胜');
      }
      else if (next.playerHp <= 0) {
        next.finished = 'opp';
        const houseId = houseOfCharacter(next.opponentId);
        if (houseId) awardHousePoints(houseId, 10, '决斗俱乐部获胜');
        next.log.push({ who: 'sys', text: `💫 你被缴械倒地。${next.opponentName} 获胜（对方学院 +10 分）` });
      }
      write(KEY_DUEL, next); setDuel(next);
    } catch (e: any) {
      addToast(e?.message || '决斗生成失败', 'error');
    } finally { setBusy(false); }
  };

  if (!duel) {
    return (
      <div className="p-4 space-y-2">
        <p className="text-xs text-slate-500 mb-3">选择一位角色作为对手，展开一场友好的魔法对决。胜者所属学院 +10 分，败方 -5 分。</p>
        {characters.length === 0 && <div className="text-center text-slate-400 text-sm pt-10">先去「角色」里创建/导入角色</div>}
        {characters.map(c => (
          <button key={c.id} onClick={() => start(c)} className="w-full bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm text-left active:scale-[0.99]">
            {(c as any).avatar ? <img src={(c as any).avatar} className="w-9 h-9 rounded-full object-cover" /> : <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-500 flex items-center justify-center font-bold">{(c.name || '?')[0]}</div>}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-700">{c.name}</div>
              <div className="text-[10px] text-slate-400">{houseOfCharacter(c.id) ? HOUSE_META[houseOfCharacter(c.id)!].cn : '无学院'} · {(c.description || '').slice(0, 30)}</div>
            </div>
            <span className="text-xs text-violet-500 font-bold">挑战 →</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      <div className="flex gap-3">
        <HpBar label="我" hp={duel.playerHp} max={MAX_DUEL_HP} color="bg-amber-400" />
        <HpBar label={duel.opponentName} hp={duel.oppHp} max={MAX_DUEL_HP} color="bg-violet-400" />
      </div>
      <div className="bg-white rounded-2xl p-3 space-y-1.5 max-h-72 overflow-y-auto shadow-sm">
        {duel.log.map((l, i) => (
          <div key={i} className={`text-xs whitespace-pre-wrap ${l.who === 'sys' ? 'text-slate-400 italic text-center' : l.who === 'me' ? 'text-amber-700' : 'text-violet-700'}`}>{l.text}</div>
        ))}
      </div>
      {duel.finished ? (
        <button onClick={() => { localStorage.removeItem(KEY_DUEL); setDuel(null); }} className="w-full bg-violet-500 text-white text-sm font-bold py-2.5 rounded-full">再来一场</button>
      ) : (
        <div className="flex gap-2">
          <input value={spell} onChange={e => setSpell(e.target.value)} onKeyDown={e => e.key === 'Enter' && cast()} placeholder="输入咒语，如：除你武器" disabled={busy}
            className="flex-1 bg-white rounded-full px-4 py-2 text-sm outline-none border border-slate-200" />
          <button onClick={cast} disabled={busy} className="bg-violet-500 disabled:opacity-50 text-white text-xs font-bold px-4 rounded-full">{busy ? '…' : '出招'}</button>
        </div>
      )}
    </div>
  );
};

const HpBar: React.FC<{ label: string; hp: number; max: number; color: string }> = ({ label, hp, max, color }) => (
  <div className="flex-1 bg-white rounded-xl p-2 shadow-sm">
    <div className="flex justify-between text-[10px] text-slate-500 mb-1"><span className="truncate max-w-[80px]">{label}</span><span>{hp}</span></div>
    <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${color} transition-all`} style={{ width: `${Math.max(0, hp / max * 100)}%` }} /></div>
  </div>
);

// ---------------------------------------------------------------------------
// 时间胶囊
// ---------------------------------------------------------------------------

const CapsuleTab: React.FC<{ addToast: (m: string, t?: string) => void }> = ({ addToast }) => {
  const [capsules, setCapsules] = useState<Capsule[]>(() => loadCapsules());
  const [composing, setComposing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [days, setDays] = useState('7');
  const [opened, setOpened] = useState<Capsule | null>(null);
  const [, forceTick] = useState(0);

  const seal = () => {
    if (!title.trim() || !content.trim()) { addToast('请填写标题和内容', 'error'); return; }
    const d = Math.max(0, Math.floor(Number(days) || 7));
    const next: Capsule[] = [{
      id: `cap-${Date.now()}`, title: title.trim(), content: content.trim(),
      createdAt: Date.now(), unlockAt: Date.now() + d * 86400000,
    }, ...capsules];
    saveCapsules(next); setCapsules(next);
    setTitle(''); setContent(''); setComposing(false);
    addToast(`已封存，${d === 0 ? '可立即开启' : `${d} 天后可开启`}`, 'success');
  };

  return (
    <div className="p-4 space-y-3">
      <p className="text-xs text-slate-500">把此刻的心情封进胶囊，写给自己。没到开启时间，谁也打不开。</p>
      <button onClick={() => setComposing(true)} className="w-full bg-violet-500 text-white text-sm font-bold py-2.5 rounded-full">封存一枚新胶囊</button>
      {composing && (
        <div className="bg-white rounded-2xl p-4 space-y-2 shadow-sm">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="胶囊标题" className="w-full bg-slate-50 rounded-xl px-3 py-2 text-sm outline-none" />
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="亲爱的未来的我……" className="w-full h-28 bg-slate-50 rounded-xl px-3 py-2 text-sm resize-none outline-none" />
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">封存</span>
            <input value={days} onChange={e => setDays(e.target.value)} className="w-16 bg-slate-50 rounded-lg px-2 py-1.5 text-sm text-center outline-none" />
            <span className="text-xs text-slate-500">天后开启</span>
            <div className="flex-1" />
            <button onClick={seal} className="bg-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">封存</button>
            <button onClick={() => setComposing(false)} className="text-xs text-slate-400 px-2">取消</button>
          </div>
        </div>
      )}
      {capsules.map(c => {
        const unlockable = Date.now() >= c.unlockAt;
        const remain = Math.ceil((c.unlockAt - Date.now()) / 86400000);
        return (
          <div key={c.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-sm font-bold text-slate-700">{unlockable ? '📮' : '🔒'} {c.title}</div>
            <div className="text-[10px] text-slate-400 mb-2">封存于 {new Date(c.createdAt).toLocaleString()}</div>
            {unlockable ? (
              <button onClick={() => setOpened(c)} className="text-xs bg-violet-100 text-violet-600 px-3 py-1.5 rounded-full font-bold">开启胶囊 →</button>
            ) : (
              <div className="text-xs text-slate-400">还需 {remain} 天才能开启（到时回来看看）</div>
            )}
          </div>
        );
      })}
      {opened && (
        <div className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center p-6" onClick={() => setOpened(null)}>
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl p-6 max-w-sm w-full space-y-3 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="text-lg font-bold text-slate-800">📮 {opened.title}</div>
            <div className="text-[10px] text-slate-400">写于 {new Date(opened.createdAt).toLocaleDateString()}</div>
            <div className="text-sm text-slate-600 whitespace-pre-wrap">{opened.content}</div>
            <button onClick={() => setOpened(null)} className="w-full bg-violet-500 text-white text-sm font-bold py-2 rounded-full">收好</button>
          </div>
        </div>
      )}
      <button onClick={() => forceTick(n => n + 1)} className="hidden">tick</button>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 禁林悬案
// ---------------------------------------------------------------------------

const MysteryTab: React.FC<{ characters: any[]; apiConfig: any; userProfile: any; addToast: (m: string, t?: string) => void }> = ({ characters, apiConfig, userProfile, addToast }) => {
  const [mystery, setMystery] = useState<MysteryState | null>(() => loadMystery());
  const [question, setQuestion] = useState('');
  const [busy, setBusy] = useState(false);
  const [guess, setGuess] = useState('');

  const generate = async () => {
    setBusy(true);
    try {
      const npcNames = characters.slice(0, 3).map(c => c.name).filter(Boolean);
      const result = await hogwartsGenerate({
        feature: 'campus', globalApi: apiConfig, userProfile,
        instructions: `你在设计一个哈利波特世界的短篇悬案（场景在禁林/城堡）。${npcNames.length ? `嫌疑人可以直接采用这些角色名：${npcNames.join('、')}，或新造 NPC。` : '自行设计 3 个嫌疑人。'}
严格输出 JSON：{"title":"案件名","scene":"案发场景描述，100字内","suspects":["嫌疑人A","嫌疑人B","嫌疑人C"],"clues":["线索1","线索2","线索3","线索4"],"truth":"完整真相，200字内，指明凶手与动机"}
线索要公平：真相能从线索中推理出来。`,
        userInput: '生成一个适合一次游玩的悬案', maxTokens: 900, temperature: 0.95,
      });
      const m = result.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(m![0]);
      const next: MysteryState = {
        title: String(parsed.title || '禁林悬案'),
        scene: String(parsed.scene || ''),
        suspects: (parsed.suspects || []).slice(0, 4).map(String),
        clues: (parsed.clues || []).slice(0, 6).map(String),
        truth: String(parsed.truth || ''),
        asked: 0, solved: '', qa: [],
      };
      saveMystery(next); setMystery(next);
    } catch (e: any) {
      addToast(e?.message || '案件生成失败', 'error');
    } finally { setBusy(false); }
  };

  const ask = async () => {
    if (!mystery || busy || !question.trim() || mystery.asked >= MAX_ASKS) return;
    const q = question.trim(); setBusy(true); setQuestion('');
    try {
      const answer = await hogwartsGenerate({
        feature: 'campus', globalApi: apiConfig, userProfile,
        instructions: `你在主持一场哈利波特世界的推理问答。案件真相（只有你知道，不能直接透露）：${mystery.truth}
玩家提问：「${q}」。请以主持人身份回答：可以确认/否认线索相关的事实、描述嫌疑人反应，但不要直接说出凶手是谁或复述真相。不超过 80 字。`,
        userInput: q, maxTokens: 300, temperature: 0.8,
      });
      const next: MysteryState = { ...mystery, asked: mystery.asked + 1, qa: [...mystery.qa, { q, a: answer.slice(0, 200) }] };
      saveMystery(next); setMystery(next);
    } catch (e: any) {
      addToast(e?.message || '问答失败', 'error');
    } finally { setBusy(false); }
  };

  const accuse = async () => {
    if (!mystery || !guess) return;
    const correct = guess === mystery.truth.split(/[，。,!！?？]/)[0]?.includes(guess) || mystery.truth.includes(guess);
    const next: MysteryState = { ...mystery, solved: correct ? 'right' : 'wrong' };
    saveMystery(next); setMystery(next);
    if (correct) {
      const myHouse = (userProfile as any).houseId;
      if (myHouse) awardHousePoints(myHouse, 15, '破获禁林悬案');
      addToast('真相大白！你的学院 +15 分', 'success');
    }
  };

  if (!mystery) {
    return (
      <div className="p-4 space-y-3">
        <p className="text-xs text-slate-500">AI 将生成一桩发生在霍格沃茨的悬案。你有 {MAX_ASKS} 次提问机会调查线索，然后指认真相。破案 +15 学院分。</p>
        <button onClick={generate} disabled={busy} className="w-full bg-violet-500 disabled:opacity-50 text-white text-sm font-bold py-2.5 rounded-full">{busy ? '正在布置案发现场…' : '生成一桩新悬案'}</button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="text-sm font-bold text-slate-800 mb-1">🕯 {mystery.title}</div>
        <div className="text-xs text-slate-500 whitespace-pre-wrap">{mystery.scene}</div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="text-xs font-bold text-slate-600 mb-1.5">🧩 已知线索</div>
        <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
          {mystery.clues.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
        <div className="text-xs font-bold text-slate-600 mt-3 mb-1.5">👀 嫌疑人</div>
        <div className="flex flex-wrap gap-1.5">
          {mystery.suspects.map((s, i) => <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{s}</span>)}
        </div>
      </div>
      {mystery.qa.length > 0 && (
        <div className="bg-white rounded-2xl p-4 space-y-2 shadow-sm max-h-60 overflow-y-auto">
          {mystery.qa.map((qa, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-xs text-amber-700">❓ {qa.q}</div>
              <div className="text-xs text-slate-500 pl-3 border-l-2 border-slate-100">{qa.a}</div>
            </div>
          ))}
        </div>
      )}
      {mystery.solved ? (
        <div className={`rounded-2xl p-4 ${mystery.solved === 'right' ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          <div className="text-xs font-bold mb-1">{mystery.solved === 'right' ? '🎉 破案成功！' : '😤 指认错误'}</div>
          <div className="text-xs text-slate-600 whitespace-pre-wrap">{mystery.truth}</div>
          <button onClick={() => { saveMystery(null); setMystery(null); setGuess(''); }} className="mt-3 w-full bg-violet-500 text-white text-xs font-bold py-2 rounded-full">结案，再来一桩</button>
        </div>
      ) : (
        <>
          <div className="flex gap-2">
            <input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === 'Enter' && ask()} disabled={busy || mystery.asked >= MAX_ASKS}
              placeholder={`向主持人提问（剩 ${MAX_ASKS - mystery.asked} 次）`} className="flex-1 bg-white rounded-full px-4 py-2 text-sm outline-none border border-slate-200" />
            <button onClick={ask} disabled={busy || mystery.asked >= MAX_ASKS} className="bg-violet-500 disabled:opacity-50 text-white text-xs font-bold px-4 rounded-full">{busy ? '…' : '提问'}</button>
          </div>
          {mystery.asked >= MAX_ASKS && (
            <div className="bg-white rounded-2xl p-4 space-y-2 shadow-sm">
              <div className="text-xs font-bold text-slate-600">指认真相（输入凶手/结论关键词）</div>
              <div className="flex gap-2">
                <input value={guess} onChange={e => setGuess(e.target.value)} placeholder="我认为是……" className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm outline-none" />
                <button onClick={accuse} disabled={!guess.trim()} className="bg-amber-500 disabled:opacity-40 text-white text-xs font-bold px-4 rounded-full">指认</button>
              </div>
              <button onClick={() => { const n = { ...mystery, solved: 'wrong' }; saveMystery(n); setMystery(n); }} className="text-[10px] text-slate-400 underline">直接揭晓真相</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecreationApp;
