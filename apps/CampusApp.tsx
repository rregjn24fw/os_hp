/**
 * 霍格沃茨校园 —— 沉浸式群像演绎（酒馆聊天式）。
 * 真的上课：教授讲课提问、NPC 同学吐槽传纸条，用户自由发言/行动，AI 实时推进剧情。
 */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useOS } from '../context/OSContext';
import { hogwartsGenerate } from '../utils/hogwartsGenerate';
import {
  HOUSE_META, HOUSE_IDS, defaultCampusState, loadCampusState, saveCampusState,
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

/** 按课程/活动定教授（讲课时在场的权威人物）。 */
function professorFor(activity: string): { name: string; style: string } {
  const map: Record<string, { name: string; style: string }> = {
    '魔咒课': { name: '弗立维教授', style: '尖嗓子、爱点头满意，偶尔激动到用茶杯当教鞭' },
    '变形术课': { name: '麦格教授', style: '严厉精准，眼神能钉住走神的人，讨厌不守纪律' },
    '魔药课': { name: '斯内普教授', style: '冷嘲热讽、压低声音点名刁难，扣分毫不留情' },
    '草药课': { name: '斯普劳特教授', style: '热情大嗓门，满手泥土，护着胆小的学生' },
    '魔法史课': { name: '宾斯教授', style: '幽灵，念稿子一般无起伏，全班昏昏欲睡' },
    '黑魔法防御术课': { name: '卢平教授', style: '温和幽默，善用实际案例，学生最喜欢他的课' },
    '占卜课': { name: '特里劳妮教授', style: '神秘兮兮、大惊小怪，爱预言不祥' },
    '保护神奇生物课': { name: '海格', style: '豪爽热情，总觉得危险的生物很可爱' },
    '决斗俱乐部': { name: '斯内普教授', style: '挑剔动作规范，随时拆台' },
    '魁地奇训练': { name: '霍琦夫人', style: '干脆利落，哨声一响绝不啰嗦' },
    '天文课观星': { name: '辛尼斯塔教授', style: '安静沉稳，在塔顶吹着夜风点名' },
  };
  if (map[activity]) return map[activity];
  return { name: '级长', style: '负责维持秩序的学生领袖' };
}

type CampusMessage = NonNullable<CampusState['messages']>[number];

const QUICK_ACTIONS = ['认真听讲做笔记', '举手回答问题', '和同桌咬耳朵吐槽', '偷偷打瞌睡', '故意捣乱引全班大笑', '向教授提一个问题'];

const CampusApp: React.FC = () => {
  const { closeApp, characters, apiConfig, userProfile, addToast } = useOS();
  const [state, setState] = useState<CampusState>(() => {
    const loaded = loadCampusState();
    if (loaded) return loaded;
    return defaultCampusState('gryffindor', characters.map(c => ({ charId: c.id, name: c.name, houseId: (c as any).houseId })));
  });
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const logsRef = useRef<HTMLDivElement>(null);

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

  /** 让 AI 推进一段群像剧情：教授 + NPC 同学 + 旁白。 */
  const generateScene = useCallback(async (userAction: string | null, kind: 'class' | 'advance') => {
    const prof = professorFor(state.activity);
    const recent = (state.messages || []).slice(-10).map(m => `${m.speaker}（${m.role}）：${m.text}`).join('\n');
    const hasUserLine = kind === 'class';
    const instruction = `你在运营一个「霍格沃茨沉浸式校园群像演绎」，风格参考酒馆角色扮演：真人感、群像、鲜活。
当前场景：第 ${state.day} 天 ${PERIOD_LABEL[state.period]} · ${state.location} · ${state.activity}
在场权威人物：${prof.name}（${prof.style}）
用户学院：${HOUSE_META[state.houseId].cn}

### 在场同学池（从中随机挑 2-3 位出场，必须符合各自性格）
罗恩·韦斯莱（格兰芬多，胆小讲义气爱吐槽）、赫敏·格兰杰（格兰芬多学霸爱纠正人）、德拉科·马尔福（斯莱特林傲慢毒舌）、卢娜·洛夫古德（拉文克劳神神叨叨）、塞德里克·迪戈里（赫奇帕奇阳光正直）、弗雷德·韦斯莱（格兰芬多恶作剧大师）、潘西·帕金森（斯莱特林刻薄爱八卦）、秋·张（拉文克劳温和）、汉娜·艾博（赫奇帕奇热心）、李·乔丹（格兰芬多解说员爱夸张）

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
  {"role":"npc","speaker":"罗恩·韦斯莱","houseId":"gryffindor","text":"（小声）…"}
]
\`\`\`
角色 role 只能是 narration / professor / npc。`;
    const result = await hogwartsGenerate({
      feature: 'campus', globalApi: apiConfig as any,
      char: characters[0], userProfile: userProfile as any,
      instructions: instruction,
      userInput: hasUserLine ? (userAction || '（继续课堂）') : `（推进时间线：第 ${state.day} 天 ${state.period} → 下一时段）`,
      temperature: 0.95,
      maxTokens: 1200,
    });
    return parseSceneMessages(result);
  }, [apiConfig, characters, state.day, state.period, state.activity, state.location, state.houseId, state.messages, userProfile]);

  const advancePeriod = useCallback(() => {
    const { day, period } = nextCampusPeriod(state.day, state.period);
    const activityList = ACTIVITIES[period];
    const activity = activityList[Math.floor(Math.random() * activityList.length)];
    const location = period === 'evening' && activity === '公共休息室闲聊' ? '公共休息室' : LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    return { day, period, activity, location };
  }, [state.day, state.period]);

  const handleAdvance = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const nextPeriod = advancePeriod();
      const msgs = await generateScene(null, 'advance');
      const stamped = msgs.map((m, i) => ({ ...m, id: `ev-${Date.now()}-${i}`, at: Date.now() }));
      const attrBonus = Math.floor(Math.random() * 3) + 1;
      appendMessages(stamped, { ...nextPeriod, attributes: { ...state.attributes, knowledge: state.attributes.knowledge + attrBonus } });
      awardHousePoints(state.houseId, attrBonus, `按时到课：${nextPeriod.activity}`);
    } catch (e: any) {
      addToast(e?.message || '生成失败，请检查 API 配置', 'error');
    } finally { setBusy(false); }
  };

  const handleAct = async (actionText?: string) => {
    const text = (actionText ?? input).trim();
    if (!text || busy) return;
    setInput('');
    setBusy(true);
    appendMessages([{ id: `u-${Date.now()}`, role: 'user', speaker: userProfile.name || '我', text, at: Date.now() }]);
    try {
      const msgs = await generateScene(text, 'class');
      const stamped = msgs.map((m, i) => ({ ...m, id: `ev-${Date.now()}-${i}`, at: Date.now() }));
      appendMessages(stamped);
      // 简单评价：教授台词里出现加分/扣分关键词时记学院分
      const profText = stamped.filter(m => m.role === 'professor').map(m => m.text).join(' ');
      if (/加\d+分|[+\uFF0B]\d+\s*分|十分出色|格兰芬多.*加分/.test(profText)) awardHousePoints(state.houseId, 5, '课堂表现出色');
      else if (/扣\d+分|[-\uFF0D]\d+\s*分|格兰芬多.*扣分/.test(profText)) awardHousePoints(state.houseId, -3, '课堂表现不佳');
    } catch (e: any) {
      addToast(e?.message || '生成失败，请检查 API 配置', 'error');
    } finally { setBusy(false); }
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
  const prof = professorFor(state.activity);

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
    </div>
  );
};

export default CampusApp;
