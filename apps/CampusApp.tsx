/**
 * 霍格沃茨校园 —— 沉浸式群像演绎（酒馆聊天式）。
 * 真的上课：教授讲课提问、NPC 同学吐槽传纸条，用户自由发言/行动，AI 实时推进剧情。
 */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useOS } from '../context/OSContext';
import { hogwartsGenerate } from '../utils/hogwartsGenerate';
import { runHogwartsTask, useHogwartsTaskKind } from '../utils/hogwartsTasks';
import {
  eraNpcPool, eraProfessorFor, filterCharactersByEra, castHintOf, ERA_SPOILER_NOTE,
} from '../utils/hogwartsEras';
import {
  HOUSE_META, HOUSE_IDS, FORUM_ERAS, defaultCampusState, loadCampusState, saveCampusState,
  awardHousePoints, nextCampusPeriod, parseSceneMessages,
} from '../utils/hogwarts';
import type { HouseId, CampusState, CharacterProfile } from '../types';

const LOCATIONS = ['魔咒课教室', '变形术课教室', '魔药课地窖', '草药课温室', '魔法史教室', '占卜课塔楼', '保护神奇生物课场地', '大礼堂', '图书馆', '公共休息室', '魁地奇球场'];
const ACTIVITIES: Record<string, string[]> = {
  morning: ['魔咒课', '变形术课', '魔药课', '草药课', '魔法史课', '黑魔法防御术课'],
  afternoon: ['魔药课', '保护神奇生物课', '占卜课', '魁地奇训练', '决斗俱乐部', '草药课'],
  evening: ['公共休息室闲聊', '学院聚餐', '天文课观星', '图书馆自习', '走廊夜游'],
};
const PERIOD_LABEL = { morning: '🌅 上午', afternoon: '☀️ 下午', evening: '🌙 晚上' };

/** 按课程/活动定教授（讲课时在场的权威人物）；时代不同，教授阵容不同。 */
function professorFor(activity: string, era: string = 'auto'): { name: string; style: string } {
  return eraProfessorFor(activity, era);
}

/** 校园时间线的持久化（与论坛时代独立，避免互相污染）。 */
const CAMPUS_ERA_KEY = 'hogwarts_campus_era';
const CAMPUS_CAST_KEY = 'hogwarts_campus_cast';

function loadCampusEra(): string {
  try { return localStorage.getItem(CAMPUS_ERA_KEY) || 'auto'; } catch { return 'auto'; }
}
function saveCampusEra(id: string) {
  try { localStorage.setItem(CAMPUS_ERA_KEY, id); } catch { /* 忽略 */ }
}
/** 玩家指定的出场角色 id 列表；空数组表示「让 TA 按时代自动挑」。 */
function loadCampusCast(): string[] {
  try {
    const raw = localStorage.getItem(CAMPUS_CAST_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.map(String) : [];
  } catch { return []; }
}
function saveCampusCast(ids: string[]) {
  try { localStorage.setItem(CAMPUS_CAST_KEY, JSON.stringify(ids)); } catch { /* 忽略 */ }
}

type CampusMessage = NonNullable<CampusState['messages']>[number];

const QUICK_ACTIONS = ['认真听讲做笔记', '举手回答问题', '和同桌咬耳朵吐槽', '偷偷打瞌睡', '故意捣乱引全班大笑', '向教授提一个问题'];

interface CampusDeps {
  apiConfig: any;
  characters: CharacterProfile[];
  userProfile: any;
}

/** 从一个存档快照拼出这一轮群像演绎的指令（含时代隔离与玩家指定出场角色）。 */
function buildSceneInstruction(
  state: CampusState,
  kind: 'class' | 'advance',
  userAction: string | null,
  era: string,
  cast: CharacterProfile[],
): string {
  const prof = professorFor(state.activity, era);

  // 玩家点名的角色（按时代过滤过）+ 该时代的 NPC 池，其余路人由模型自行生成
  const castLines = cast
    .map(c => castHintOf(c, id => (id ? HOUSE_META[id].cn : '')))
    .filter(Boolean);
  const eraPool = eraNpcPool(era).map(n => `${n.name}（${HOUSE_META[n.houseId].cn}，${n.persona}）`);
  const roaster = [...castLines, ...eraPool].join('、');
  const spoiler = era === 'auto' ? '' : `\n### 时代铁律\n${ERA_SPOILER_NOTE[era as keyof typeof ERA_SPOILER_NOTE] || ''}`;

  return `你在运营一个「霍格沃茨沉浸式校园群像演绎」，风格参考酒馆角色扮演：真人感、群像、鲜活。
当前场景：第 ${state.day} 天 ${PERIOD_LABEL[state.period]} · ${state.location} · ${state.activity}
在场权威人物：${prof.name}（${prof.style}）
用户学院：${HOUSE_META[state.houseId].cn}${spoiler}

### 在场同学池（从中挑 2-3 位出场，必须符合各自性格）
${roaster}

### 出场规矩
1. 优先让上面「在场同学池」里的角色说话；需要撑场面时可以加 1-2 个没列出的同班路人（自己起名字，只做背景反应，不要抢戏）。
2. ${castLines.length > 0 ? '玩家点名要出场的角色必须至少有一位开口。' : '没有点名的角色时，从池子里随机挑选，别总是同几个人。'}
3. 角色台词要符合各自的人设；不要凭空冒出不属于这个世界或不属于这个时间线的人。

### 本轮要求
${kind === 'advance'
  ? '用户跳过/推进时段。先用 1-2 条旁白描写时间流逝和场景切换（下一节课或课间），再安排教授开场和 2-3 位同学的鲜活吐槽（传纸条、偷偷抱怨作业多、抢座位之类）——要像真的在学校。'
  : `用户刚做了一个行动或说了一句话：「${userAction}」。\n1. 用 1 条旁白描写这个动作的即时后果（周围人的目光、声响、细节）。\n2. 教授做出反应（点名、评价、扣分/加分）。\n3. 至少 2 位在场同学用符合性格的口吻吐槽或起哄（可以带（小声）（传纸条）（憋笑）这类动作括注）。\n4. 结尾留一个钩子，让用户想继续。`}
台词要短而真实，像真人说话，不要书面腔。剧情走向遵循哈利波特世界观。

严格输出 JSON 数组（3-5 条消息），不要输出其他内容：
\`\`\`json
[
  {"role":"narration","speaker":"GM","text":"旁白描写"},
  {"role":"professor","speaker":"${prof.name}","text":"教授的话"},
  {"role":"npc","speaker":"${cast[0]?.name || eraNpcPool(era)[0].name}","houseId":"gryffindor","text":"（小声）…"}
]
\`\`\`
角色 role 只能是 narration / professor / npc。`;
}

/**
 * 跑一轮群像演绎并落库。
 * 整个函数在模块作用域执行：请求期间切走页面（组件卸载）也不会中断，
 * 完成时直接写 localStorage，回到校园页读到的就是新的对话。
 */
async function runCampusScene(
  deps: CampusDeps,
  opts: { kind: 'class' | 'advance'; action?: string; era: string; cast: CharacterProfile[] },
): Promise<{ count: number }> {
  const before = loadCampusState() || defaultCampusState(
    'gryffindor',
    deps.characters.map(c => ({ charId: c.id, name: c.name, houseId: (c as any).houseId })),
  );
  const action = opts.action ?? null;
  const instruction = buildSceneInstruction(before, opts.kind, action, opts.era, opts.cast);

  const result = await hogwartsGenerate({
    feature: 'campus', globalApi: deps.apiConfig,
    char: deps.characters[0], userProfile: deps.userProfile,
    instructions: instruction,
    userInput: opts.kind === 'class'
      ? (action || '（继续课堂）')
      : `（推进时间线：第 ${before.day} 天 ${before.period} → 下一时段）`,
    temperature: 0.95,
    maxTokens: 1200,
  });

  const msgs: CampusMessage[] = parseSceneMessages(result).map((m, i) => ({
    ...m, id: `ev-${Date.now()}-${i}`, at: Date.now(),
  }));

  // 重新读一次最新存档再合并，避免覆盖期间（比如用户又发了一句）写入的内容
  const latest = loadCampusState() || before;
  const advance = opts.kind === 'advance'
    ? (() => {
        const { day, period } = nextCampusPeriod(latest.day, latest.period);
        const list = ACTIVITIES[period];
        const activity = list[Math.floor(Math.random() * list.length)];
        const location = period === 'evening' && activity === '公共休息室闲聊' ? '公共休息室' : LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
        return { day, period, activity, location };
      })()
    : null;
  const attrBonus = advance ? Math.floor(Math.random() * 3) + 1 : 0;

  const next: CampusState = {
    ...latest,
    ...(advance ? { day: advance.day, period: advance.period, activity: advance.activity, location: advance.location } : {}),
    attributes: advance
      ? { ...latest.attributes, knowledge: latest.attributes.knowledge + attrBonus }
      : latest.attributes,
    messages: [...(latest.messages || []), ...msgs].slice(-200),
  };
  saveCampusState(next);

  if (advance) awardHousePoints(latest.houseId, attrBonus, `按时到课：${advance.activity}`);

  // 简单评价：教授台词里出现加分/扣分关键词时记学院分
  const profText = msgs.filter(m => m.role === 'professor').map(m => m.text).join(' ');
  if (/加\d+分|[+\uFF0B]\d+\s*分|十分出色|格兰芬多.*加分/.test(profText)) awardHousePoints(latest.houseId, 5, '课堂表现出色');
  else if (/扣\d+分|[-\uFF0D]\d+\s*分|格兰芬多.*扣分/.test(profText)) awardHousePoints(latest.houseId, -3, '课堂表现不佳');

  return { count: msgs.length };
}

const CampusApp: React.FC = () => {
  const { closeApp, characters, apiConfig, userProfile, addToast } = useOS();
  const [state, setState] = useState<CampusState>(() => {
    const loaded = loadCampusState();
    if (loaded) return loaded;
    return defaultCampusState('gryffindor', characters.map(c => ({ charId: c.id, name: c.name, houseId: (c as any).houseId })));
  });
  const [input, setInput] = useState('');
  const logsRef = useRef<HTMLDivElement>(null);
  // 演绎任务跑在模块作用域：切页面、锁屏都不会中断，回来时对话已经在存档里
  const { running, lastFinished, busy } = useHogwartsTaskKind('campus');
  // 时间线 + 玩家点名的出场角色（其余 NPC 由 AI 按时代自动生成）
  const [era, setEra] = useState(() => loadCampusEra());
  const [castIds, setCastIds] = useState<string[]>(() => loadCampusCast());
  const [pickingCast, setPickingCast] = useState(false);

  const eraChars = filterCharactersByEra(characters, era);
  const cast = castIds.length > 0
    ? eraChars.filter(c => castIds.includes(c.id))
    : eraChars.slice(0, 3);

  const toggleCast = (id: string) => {
    const next = castIds.includes(id) ? castIds.filter(x => x !== id) : [...castIds, id];
    setCastIds(next);
    saveCampusCast(next);
  };

  const persist = useCallback((next: CampusState) => { saveCampusState(next); setState(next); }, []);

  const appendMessages = useCallback((msgs: CampusMessage[], extra?: Partial<CampusState>) => {
    setState(prev => {
      const next: CampusState = { ...prev, ...extra, messages: [...(prev.messages || []), ...msgs].slice(-200) };
      saveCampusState(next);
      return next;
    });
  }, []);

  useEffect(() => {
    logsRef.current?.scrollTo({ top: logsRef.current.scrollHeight, behavior: 'smooth' });
  }, [state.messages?.length, busy]);

  // 后台演绎完成（可能是在别的页面完成的）→ 把最新存档读回界面
  useEffect(() => {
    const latest = loadCampusState();
    if (latest) setState(latest);
  }, [lastFinished?.id]);

  const handleAdvance = () => {
    if (busy) return;
    void runHogwartsTask({
      kind: 'campus',
      label: '霍格沃茨校园 · 推进时段',
      notice: () => '🎬 新的课堂场景已存档',
      run: () => runCampusScene({ apiConfig, characters, userProfile }, { kind: 'advance', era, cast }),
    });
  };

  const handleAct = (actionText?: string) => {
    const text = (actionText ?? input).trim();
    if (!text || busy) return;
    setInput('');
    appendMessages([{ id: `u-${Date.now()}`, role: 'user', speaker: userProfile.name || '我', text, at: Date.now() }]);
    void runHogwartsTask({
      kind: 'campus',
      label: '霍格沃茨校园 · 演绎',
      run: () => runCampusScene({ apiConfig, characters, userProfile }, { kind: 'class', action: text, era, cast }),
    });
  };

  const renderBubble = (m: CampusMessage) => {
    if (m.role === 'narration') {
      return (
        <div key={m.id} className="flex justify-center my-2">
          <div className="max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-relaxed text-center"
            style={{ color: '#c9b98a', background: 'rgba(212,175,55,0.06)', border: '1px dashed rgba(212,175,55,0.25)' }}>
            {m.text}
          </div>
        </div>
      );
    }
    const isUser = m.role === 'user';
    const houseColor = m.houseId ? HOUSE_META[m.houseId].color : (m.role === 'professor' ? '#7c5cbf' : '#64748b');
    return (
      <div key={m.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2.5`}>
        <div className={`max-w-[82%] ${isUser ? 'text-right' : ''}`}>
          <div className={`text-[10px] mb-1 flex items-center gap-1.5 ${isUser ? 'justify-end' : ''}`}>
            <span className="w-4 h-4 rounded-full inline-block" style={{ background: houseColor }} />
            <span style={{ color: houseColor }}>{m.speaker}</span>
            {m.role === 'professor' && <span className="px-1 rounded bg-purple-400/20 text-purple-300 text-[9px]">教授</span>}
          </div>
          <div className="rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed text-left"
            style={{
              background: isUser ? 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.15))' : 'rgba(255,255,255,0.07)',
              border: `1px solid ${isUser ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.12)'}`,
              color: '#f0e8d8',
            }}>
            {m.text}
          </div>
        </div>
      </div>
    );
  };

  const attrs = state.attributes;
  const messages = state.messages || [];
  const prof = professorFor(state.activity, era);

  return (
    <div className="h-full w-full bg-gradient-to-b from-indigo-950 via-[#1a1a2e] to-slate-900 flex flex-col font-light overflow-hidden text-amber-50">
      {/* 顶栏 */}
      <div className="bg-black/30 backdrop-blur-md border-b border-amber-200/20 shrink-0 sticky top-0 z-10" style={{ paddingTop: 'var(--safe-top)' }}>
        <div className="flex items-center px-4 py-3 gap-2">
          <button onClick={closeApp} className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-medium text-amber-100 tracking-wide">🏰 霍格沃茨校园</h1>
            <div className="text-[11px] text-amber-200/60 truncate">Day {state.day} · {PERIOD_LABEL[state.period]} · {state.activity} @ {state.location}</div>
          </div>
          <select value={era} onChange={e => { setEra(e.target.value); saveCampusEra(e.target.value); }}
            className="px-2 py-1 rounded-full bg-black/30 border border-amber-300/30 text-amber-100 text-xs focus:outline-none max-w-[7.5rem]"
            title="选择时间线时代">
            {FORUM_ERAS.map(e => <option key={e.id} value={e.id} className="bg-slate-800">{e.label}</option>)}
          </select>
          <select value={state.houseId} onChange={e => persist({ ...state, houseId: e.target.value as HouseId })}
            className="px-2 py-1 rounded-full bg-black/30 border border-amber-300/30 text-amber-100 text-xs focus:outline-none">
            {HOUSE_IDS.map(id => <option key={id} value={id} className="bg-slate-800">{HOUSE_META[id].cn}</option>)}
          </select>
        </div>
        {/* 属性条 */}
        <div className="flex gap-1.5 px-4 pb-2">
          {Object.entries(attrs).map(([k, v]) => (
            <div key={k} className="flex-1 rounded-lg bg-white/5 border border-white/10 py-1 text-center">
              <span className="text-[9px] text-amber-200/50">{({ knowledge: '学识', courage: '胆识', loyalty: '忠勇', wisdom: '智慧', ambition: '野心' } as Record<string, string>)[k] || k}</span>
              <span className="ml-1 text-xs font-bold text-amber-100">{v}</span>
            </div>
          ))}
        </div>
        {/* 出场角色（玩家点名，其余 NPC 按时代自动生成） */}
        <div className="flex items-center gap-1.5 px-4 pb-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] text-amber-200/50 shrink-0">出场：</span>
          {cast.length === 0 && <span className="shrink-0 text-[10px] text-amber-200/40">暂无角色，AI 按时代自动生成同学</span>}
          {cast.map(c => (
            <span key={c.id} className="shrink-0 px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-300/30 text-[10px] text-amber-100">
              {c.name}
            </span>
          ))}
          <button onClick={() => setPickingCast(true)}
            className="shrink-0 px-2 py-0.5 rounded-full bg-white/5 border border-amber-200/20 text-[10px] text-amber-200/80">
            ⚙ 选角色
          </button>
        </div>
      </div>

      {/* 消息流 */}
      <div ref={logsRef} className="flex-1 overflow-y-auto px-4 py-4 pb-6">
        {messages.length === 0 && (
          <div className="text-center py-12 text-amber-100/40">
            <div className="text-5xl mb-3">🏰</div>
            <p className="text-sm">{prof.name} 正在讲台上等你——</p>
            <p className="text-xs mt-1 text-amber-100/30">输入你想做的事，或点下面的快捷行动开始上课。</p>
          </div>
        )}
        {messages.map(renderBubble)}
        {busy && (
          <div className="flex justify-center my-2">
            <div className="text-xs text-amber-200/50 flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full animate-spin" style={{ border: '2px solid rgba(212,175,55,0.3)', borderTopColor: '#d4af37' }} />
              场景正在演绎……
            </div>
          </div>
        )}
      </div>

      {/* 输入区 */}
      <div className="shrink-0 px-3 pb-3 pt-2 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/95 to-transparent border-t border-amber-200/10">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-2">
          {QUICK_ACTIONS.map(a => (
            <button key={a} onClick={() => handleAct(a)} disabled={busy}
              className="shrink-0 px-2.5 py-1 rounded-full text-[11px] bg-white/5 border border-amber-200/20 text-amber-200/80 active:scale-95 transition-transform disabled:opacity-40">
              {a}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') handleAct(); }}
            placeholder="自由行动：说话、动作都行，像在酒馆里演…"
            className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-amber-200/20 text-amber-50 placeholder:text-amber-200/30 focus:outline-none focus:border-amber-300/50 text-sm" />
          <button onClick={() => handleAct()} disabled={busy}
            className="px-4 py-3 rounded-2xl bg-amber-500 text-[#1a1a2e] font-semibold disabled:opacity-50 active:scale-95 transition-transform">
            {busy ? '…' : '演绎'}
          </button>
        </div>
        <button onClick={handleAdvance} disabled={busy} className="mt-1.5 w-full text-center text-xs text-amber-300/60 py-1 disabled:opacity-40">
          ⏭ 下课，进入下一时段
        </button>
      </div>

      {pickingCast && (
        <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(0,0,0,0.65)' }}
          onClick={() => setPickingCast(false)}>
          <div className="rounded-t-2xl border-t border-amber-300/30 p-4 max-h-[72%] overflow-y-auto"
            style={{ background: '#141a2e' }} onClick={e => e.stopPropagation()}>
            <div className="flex items-center mb-1.5">
              <h3 className="text-sm text-amber-100 flex-1">选择出场角色</h3>
              <button onClick={() => setPickingCast(false)} className="text-xs text-amber-300 px-2 py-1">完成</button>
            </div>
            <p className="text-[10px] text-amber-200/50 mb-2.5">
              只显示符合「{FORUM_ERAS.find(e => e.id === era)?.label || '当前时间线'}」的角色；没点名的同学由 AI 按时代自动生成。
            </p>
            {eraChars.length === 0 && (
              <div className="text-xs text-amber-200/40 py-8 text-center leading-relaxed">
                这个时间线下没有可用角色。<br />去「猫头鹰邮局」导入该时代的卡，或换个时代。
              </div>
            )}
            <div className="grid grid-cols-2 gap-1.5">
              {eraChars.map(c => {
                const on = castIds.includes(c.id);
                return (
                  <button key={c.id} onClick={() => toggleCast(c.id)}
                    className={`flex items-center gap-2 rounded-xl px-2.5 py-2 border text-left active:scale-[0.98] transition-transform ${on ? 'border-amber-300/60 bg-amber-400/15' : 'border-white/10 bg-white/5'}`}>
                    {c.avatar
                      ? <img src={c.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                      : <span className="w-6 h-6 rounded-full bg-white/10 text-[10px] flex items-center justify-center text-amber-100">{c.name[0]}</span>}
                    <span className="text-xs text-amber-50 truncate flex-1">{c.name}</span>
                    {on && <span className="text-amber-300 text-[10px]">✓</span>}
                  </button>
                );
              })}
            </div>
            <button onClick={() => { setCastIds([]); saveCampusCast([]); }}
              className="mt-3 w-full py-2 rounded-xl border border-white/15 text-xs text-amber-200/70">
              清空，交给 AI 自动挑
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusApp;
