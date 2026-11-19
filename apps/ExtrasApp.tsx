/**
 * 彼豆故事集（番外生成器）——基于霍格沃茨角色生成番外短篇。
 * 支持导出干净可读的 TXT 与 EPUB（fflate 打包，正文为纯文学散文，无 markdown/代码痕迹）。
 */
import React, { useState, useRef } from 'react';
import { useOS } from '../context/OSContext';
import { hogwartsGenerate } from '../utils/hogwartsGenerate';
import {
  loadExtrasStories, saveExtrasStories, parseExtrasGeneration, sanitizeProse,
  loadStylePreset, saveStylePreset, clearStylePreset, type ExtrasStory,
} from '../utils/hogwarts';
import { parseSillyTavernPreset } from '../utils/sillyTavernPreset';
import { HOUSE_META } from '../utils/hogwarts';
import type { HouseId } from '../types';

const LENGTH_OPTIONS = [
  { id: 'short', label: '短篇 · 1章', chapters: 1 },
  { id: 'medium', label: '中篇 · 3章', chapters: 3 },
  { id: 'long', label: '长篇 · 5章', chapters: 5 },
];

function buildContinuePrompt(story: ExtrasStory, eraHint?: string): string {
  const prev = story.chapters
    .map((c, i) => `第${i + 1}章 ${c.title || ''}\n${c.content}`)
    .join('\n\n');
  return `你是一位文笔出色的奇幻小说作者，正在为霍格沃茨魔法世界的一篇番外短篇续写下一章。

### 主角
${story.charName}（保持角色原有人设、语气与魔力特长）

${eraHint ? `### 时代背景\n${eraHint}\n` : ''}
### 已有正文
${prev}

### 续写要求
1. 顺着已有情节自然续写第 ${story.chapters.length + 1} 章，衔接上一章结尾，剧情继续推进，不要重复已有内容。
2. 本章正文约 900 字，有场景、有对话、有推进。
3. ${PROSE_RULES}
4. 严格输出 JSON，不要输出任何其他内容：
\`\`\`json
{
  "title": "新章标题",
  "content": "新章正文"
}
\`\`\``;
}

const PROSE_RULES = [
  '正文必须是纯文学散文，不得包含任何 markdown 标记（#、*、-、`）、HTML、代码、表格、表情符号或括号注解。',
  '不要出现"作为AI""以下是""好的"等元话语，直接输出故事。',
  '对话用中文引号「」或""，段落之间用空行分隔。',
].join('\n');

function buildExtrasPrompt(opts: {
  charName: string; topic: string; chapterCount: number; wordsPer: number; eraHint?: string;
}): string {
  return `你是一位文笔出色的奇幻小说作者，正在为霍格沃茨魔法世界撰写一篇番外短篇。

### 主角
${opts.charName}（保持角色原有人设、语气与魔力特长）

${opts.eraHint ? `### 时代背景\n${opts.eraHint}\n` : ''}
### 主题
${opts.topic ? opts.topic : '围绕该角色在霍格沃茨的一段轶事自由发挥，可以温馨、幽默或带一点悬疑'}

### 要求
1. 全文共 ${opts.chapterCount} 章，每章正文约 ${opts.wordsPer} 字，情节完整、有起承转合。
2. ${PROSE_RULES}
3. 严格输出 JSON，不要输出任何其他内容：
\`\`\`json
{
  "title": "番外总标题",
  "chapters": [
    { "title": "第一章的标题", "content": "第一章正文" },
    { "title": "第二章的标题", "content": "第二章正文" }
  ]
}
\`\`\``;
}

// ── 导出工具 ──────────────────────────────────────────────────────────

function download(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

const safeName = (s: string) => (s || '番外').replace(/[\\/:*?"<>|]/g, '_').slice(0, 40);

function exportTxt(story: ExtrasStory): void {
  const lines: string[] = [];
  lines.push(`《${story.title}》`);
  lines.push(`作者：${story.charName}`);
  lines.push(`生成于 ${new Date(story.createdAt).toLocaleDateString('zh-CN')}`);
  lines.push('');
  story.chapters.forEach((ch, i) => {
    if (story.chapters.length > 1 || ch.title) lines.push(`　　${ch.title || `第${i + 1}章`}`);
    lines.push('');
    lines.push(ch.content);
    lines.push('');
    if (i < story.chapters.length - 1) lines.push('──────────────');
    lines.push('');
  });
  lines.push('—— 全文完 ——');
  download(new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/plain;charset=utf-8' }), `${safeName(story.title)}.txt`);
}

const xmlEscape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 章节正文 → XHTML 段落（每个空行分隔段一个 <p>）。 */
function chapterXhtml(content: string): string {
  return content
    .split(/\n+/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => `    <p>${xmlEscape(p)}</p>`)
    .join('\n');
}

function exportEpub(story: ExtrasStory): void {
  // 延迟引入 fflate（vendor-fflate 已在构建中单独分包）
  import('fflate').then(({ zipSync, strToU8 }) => {
    const files: Record<string, any> = {};
    files['mimetype'] = [strToU8('application/epub+zip'), { level: 0 }];
    files['META-INF/container.xml'] = strToU8(`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

    const chapterFiles = story.chapters.map((ch, i) => ({
      id: `ch${i + 1}`,
      href: `ch${i + 1}.xhtml`,
      title: ch.title || `第${i + 1}章`,
      xhtml: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
  <head>
    <title>${xmlEscape(ch.title || `第${i + 1}章`)}</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  <body>
    <h2>${xmlEscape(ch.title || `第${i + 1}章`)}</h2>
${chapterXhtml(ch.content)}
  </body>
</html>`,
    }));

    files['OEBPS/style.css'] = strToU8(`body { font-family: serif; line-height: 1.8; margin: 1em; }
h1, h2 { text-align: center; font-weight: bold; }
p { text-indent: 2em; margin: 0.4em 0; }`);

    const dcDate = new Date(story.createdAt).toISOString().slice(0, 19) + 'Z';
    files['OEBPS/content.opf'] = strToU8(`<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="zh-CN">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">urn:uuid:hogwarts-extras-${story.id}</dc:identifier>
    <dc:title>${xmlEscape(story.title)}</dc:title>
    <dc:creator>${xmlEscape(story.charName)}</dc:creator>
    <dc:language>zh-CN</dc:language>
    <dc:date>${dcDate}</dc:date>
    <meta property="dcterms:modified">${dcDate}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="css" href="style.css" media-type="text/css"/>
${chapterFiles.map(c => `    <item id="${c.id}" href="${c.href}" media-type="application/xhtml+xml"/>`).join('\n')}
  </manifest>
  <spine toc="ncx">
    <itemref idref="nav"/>
${chapterFiles.map(c => `    <itemref idref="${c.id}"/>`).join('\n')}
  </spine>
</package>`);

    files['OEBPS/nav.xhtml'] = strToU8(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
  <head><title>${xmlEscape(story.title)}</title><meta charset="utf-8"/></head>
  <body>
    <nav epub:type="toc" id="toc">
      <h1>${xmlEscape(story.title)}</h1>
      <ol>
${chapterFiles.map(c => `        <li><a href="${c.href}">${xmlEscape(c.title)}</a></li>`).join('\n')}
      </ol>
    </nav>
  </body>
</html>`);

    files['OEBPS/toc.ncx'] = strToU8(`<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:uuid:hogwarts-extras-${story.id}"/>
  </head>
  <docTitle><text>${xmlEscape(story.title)}</text></docTitle>
  <navMap>
${chapterFiles.map((c, i) => `    <navPoint id="np${i + 1}" playOrder="${i + 1}">
      <navLabel><text>${xmlEscape(c.title)}</text></navLabel>
      <content src="${c.href}"/>
    </navPoint>`).join('\n')}
  </navMap>
</ncx>`);

    chapterFiles.forEach(c => { files[`OEBPS/${c.href}`] = strToU8(c.xhtml); });

    const u8 = zipSync(files);
    download(new Blob([u8 as any], { type: 'application/epub+zip' }), `${safeName(story.title)}.epub`);
  }).catch(() => { /* fflate 加载失败静默 */ });
}

// ── 页面 ─────────────────────────────────────────────────────────────

const ExtrasApp: React.FC = () => {
  const { closeApp, characters, apiConfig, userProfile, addToast } = useOS();
  const [stories, setStories] = useState<ExtrasStory[]>(() => loadExtrasStories());
  const [view, setView] = useState<'list' | 'create' | 'read'>('list');
  const [charId, setCharId] = useState('');
  const [topic, setTopic] = useState('');
  const [lengthId, setLengthId] = useState('short');
  const [wordsPer, setWordsPer] = useState(900);
  const [busy, setBusy] = useState(false);
  const [reading, setReading] = useState<ExtrasStory | null>(null);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [stylePreset, setStylePreset] = useState(() => loadStylePreset());
  const styleInputRef = useRef<HTMLInputElement>(null);
  const genRef = useRef(0);

  const selectedChar = characters.find(c => c.id === charId);
  const persist = (s: ExtrasStory[]) => { saveExtrasStories(s); setStories(s); };

  /** 导入酒馆预设为全局文风：解析启用的 system 指令 + 采样温度。 */
  const handleImportStyle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseSillyTavernPreset(text, file.name);
      const prompts = parsed.document?.prompts || [];
      const generation = parsed.document?.generation;
      const prompt = prompts
        .filter(p => p.enabled && !p.marker && p.content.trim() && p.role === 'system')
        .map(p => p.content.trim())
        .join('\n\n');
      if (!prompt.trim()) throw new Error('预设里没有可用的文风指令（全部是槽位或已禁用）');
      const preset = { name: parsed.document?.name || file.name.replace(/\.json$/i, ''), prompt, temperature: generation?.temperature, importedAt: Date.now() };
      saveStylePreset(preset);
      setStylePreset(preset);
      addToast(`文风预设「${preset.name}」已启用，对所有霍格沃茨生成生效`, 'success');
    } catch (err: any) {
      addToast(err?.message || '预设导入失败', 'error');
    } finally {
      e.target.value = '';
    }
  };

  const handleClearStyle = () => {
    clearStylePreset();
    setStylePreset(null);
    addToast('已清除文风预设，恢复默认文风', 'success');
  };

  const handleGenerate = async () => {
    if (busy) return;
    if (!selectedChar) { addToast('请先选择一位角色', 'error'); return; }
    setBusy(true);
    const gen = ++genRef.current;
    try {
      const len = LENGTH_OPTIONS.find(l => l.id === lengthId) || LENGTH_OPTIONS[0];
      const words = Math.min(Math.max(Math.round(wordsPer) || 900, 300), 4000);
      const house = (selectedChar as any).houseId as HouseId | undefined;
      const eraHint = house ? `角色属于${HOUSE_META[house].cn}学院` : '';
      const raw = await hogwartsGenerate({
        feature: 'extras', globalApi: apiConfig as any,
        char: selectedChar,
        userProfile: userProfile as any,
        instructions: buildExtrasPrompt({
          charName: selectedChar.name,
          topic: topic.trim(),
          chapterCount: len.chapters,
          wordsPer: words,
          eraHint,
        }),
        userInput: `请以 ${selectedChar.name} 为主角，写一篇${len.chapters}章的番外${topic.trim() ? `，主题：${topic.trim()}` : ''}，每章约${words}字。`,
        maxTokens: Math.max(2000, Math.ceil(words * 1.8) * len.chapters),
      });
      if (gen !== genRef.current) return;
      const parsed = parseExtrasGeneration(raw, selectedChar.name);
      const story: ExtrasStory = {
        id: `extra-${Date.now()}`,
        title: parsed.title,
        charId: selectedChar.id,
        charName: selectedChar.name,
        topic: topic.trim() || undefined,
        chapters: parsed.chapters.map(c => ({ title: c.title, content: sanitizeProse(c.content) })),
        createdAt: Date.now(),
      };
      persist([story, ...loadExtrasStories()]);
      setReading(story);
      setChapterIdx(0);
      setView('read');
      addToast(`《${story.title}》已收录进故事集`, 'success');
    } catch (e: any) {
      addToast(e?.message || '生成失败', 'error');
    } finally {
      if (gen === genRef.current) setBusy(false);
    }
  };

  const handleDelete = (id: string) => {
    persist(loadExtrasStories().filter(s => s.id !== id));
    if (reading?.id === id) { setReading(null); setView('list'); }
  };

  /** 续写下一章：以已有全部章节为上下文，生成后追加进同一篇并自动存档。 */
  const handleContinue = async () => {
    if (!reading || busy) return;
    setBusy(true);
    const gen = ++genRef.current;
    try {
      const house = (characters.find(c => c.id === reading.charId) as any)?.houseId as HouseId | undefined;
      const eraHint = house ? `角色属于${HOUSE_META[house].cn}学院` : '';
      const raw = await hogwartsGenerate({
        feature: 'extras', globalApi: apiConfig as any,
        char: characters.find(c => c.id === reading.charId),
        userProfile: userProfile as any,
        instructions: buildContinuePrompt(reading, eraHint),
        userInput: `请为《${reading.title}》续写第 ${reading.chapters.length + 1} 章。`,
        maxTokens: 2500,
      });
      if (gen !== genRef.current) return;
      const parsed = parseExtrasGeneration(raw, reading.charName);
      const chapter = {
        title: parsed.chapters[0]?.title || `第${reading.chapters.length + 1}章`,
        content: sanitizeProse(parsed.chapters[0]?.content || ''),
      };
      if (!chapter.content) throw new Error('模型未返回有效正文');
      const updated: ExtrasStory = { ...reading, chapters: [...reading.chapters, chapter] };
      // 自动存档：同步进本地故事集
      persist(loadExtrasStories().map(s => s.id === updated.id ? updated : s));
      setReading(updated);
      setChapterIdx(updated.chapters.length - 1);
      addToast(`第${updated.chapters.length}章已续写并存档`, 'success');
    } catch (e: any) {
      addToast(e?.message || '续写失败', 'error');
    } finally {
      if (gen === genRef.current) setBusy(false);
    }
  };

  const openStory = (s: ExtrasStory) => { setReading(s); setChapterIdx(0); setView('read'); };

  const renderTitleBar = (title: string, onBack: () => void) => (
    <div className="bg-[#0e1a40]/85 backdrop-blur-md border-b border-amber-200/20 shrink-0 sticky top-0 z-10" style={{ paddingTop: 'var(--safe-top)' }}>
      <div className="flex items-center px-4 py-3 gap-2">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="text-xl font-medium text-amber-100 tracking-wide flex-1">📖 {title}</h1>
        {view === 'read' && reading && (
          <div className="flex gap-1.5">
            <button onClick={() => exportTxt(reading)} className="px-2.5 py-1.5 rounded-full bg-amber-300/90 text-[#0e1a40] text-xs font-medium">TXT</button>
            <button onClick={() => exportEpub(reading)} className="px-2.5 py-1.5 rounded-full bg-amber-300/90 text-[#0e1a40] text-xs font-medium">EPUB</button>
          </div>
        )}
      </div>
    </div>
  );

  if (view === 'create') {
    return (
      <div className="h-full w-full flex flex-col overflow-hidden font-light" style={{ background: 'linear-gradient(175deg,#101d17 0%,#0a130f 100%)' }}>
        {renderTitleBar('彼豆故事集', () => setView('list'))}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-10">
          <div className="text-[11px] text-amber-200/60">选一位角色当主角，故事会用 TA 的人设和语气来写。</div>
          <div className="max-h-64 overflow-y-auto space-y-1.5">
            {characters.length === 0 && <div className="text-stone-500 text-sm py-4 text-center">还没有角色——先去「猫头鹰邮局」导入或创建角色。</div>}
            {characters.map(c => {
              const house = (c as any).houseId as HouseId | undefined;
              return (
                <button key={c.id} onClick={() => setCharId(c.id)}
                  className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-transform active:scale-[0.99] border ${charId === c.id ? 'border-amber-300/60 bg-amber-400/10' : 'border-amber-200/15 bg-white/5'}`}>
                  {c.avatar ? <img src={c.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                    : <div className="w-8 h-8 rounded-full bg-white/10 text-amber-100 flex items-center justify-center text-xs font-bold">{c.name[0]}</div>}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-amber-50 truncate">{c.name}</div>
                    {house && <div className="text-[10px]" style={{ color: HOUSE_META[house].color }}>{HOUSE_META[house].cn}</div>}
                  </div>
                </button>
              );
            })}
          </div>
          <textarea value={topic} onChange={e => setTopic(e.target.value)} rows={3}
            placeholder="番外主题（可选）：比如「魁地奇决赛前夜」「第一次去霍格莫德」「和幽灵的一场赌局」"
            className="w-full rounded-xl px-3 py-2.5 text-sm bg-white/5 border border-amber-200/20 text-amber-50 placeholder:text-amber-200/30 focus:outline-none resize-none" />
          <div>
            <div className="text-[11px] text-amber-200/60 mb-1.5">篇幅</div>
            <div className="flex gap-1.5">
              {LENGTH_OPTIONS.map(l => (
                <button key={l.id} onClick={() => setLengthId(l.id)}
                  className={`px-3 py-1.5 rounded-full text-xs border ${lengthId === l.id ? 'bg-amber-400 text-[#0a130f] border-amber-400 font-medium' : 'bg-white/5 text-amber-200/70 border-amber-200/15'}`}>
                  {l.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[11px] text-amber-200/60 shrink-0">每章字数</span>
              <input type="number" min={300} max={4000} step={100} value={wordsPer}
                onChange={e => setWordsPer(Number(e.target.value) || 900)}
                className="w-24 px-2.5 py-1.5 rounded-lg text-sm bg-white/5 border border-amber-200/20 text-amber-50 focus:outline-none" />
              <span className="text-[10px] text-amber-200/40">300 - 4000，默认 900</span>
            </div>
          </div>

          {/* 全局文风预设（酒馆预设导入） */}
          <div className="rounded-xl border border-amber-200/20 bg-white/5 px-3 py-2.5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-amber-200/60 flex-1">🖋 文风预设（全局）</span>
              {stylePreset && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 max-w-[10rem] truncate">{stylePreset.name}</span>}
            </div>
            {stylePreset && <div className="text-[10px] text-amber-200/40 line-clamp-2">{stylePreset.prompt.slice(0, 120)}…</div>}
            <div className="flex gap-1.5">
              <button onClick={() => styleInputRef.current?.click()}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-amber-200/20 text-amber-200 text-[10px]">
                导入酒馆预设 (.json)
              </button>
              {stylePreset && (
                <button onClick={handleClearStyle} className="px-2.5 py-1 rounded-lg text-red-300/70 text-[10px]">清除</button>
              )}
            </div>
            <div className="text-[10px] text-amber-200/30">导入后，预设里的 system 指令与采样温度会注入番外、论坛、校园的所有生成。</div>
            <input type="file" ref={styleInputRef} accept=".json,application/json" onChange={handleImportStyle} className="hidden" />
          </div>

          <button onClick={handleGenerate} disabled={busy}
            className="w-full py-3 rounded-xl bg-amber-400 text-[#0a130f] font-bold text-sm active:scale-95 transition-transform disabled:opacity-50">
            {busy ? '正在执笔……' : '✨ 开始写番外'}
          </button>
        </div>
      </div>
    );
  }

  if (view === 'read' && reading) {
    const ch = reading.chapters[Math.min(chapterIdx, reading.chapters.length - 1)];
    return (
      <div className="h-full w-full flex flex-col overflow-hidden font-light" style={{ background: 'linear-gradient(175deg,#101d17 0%,#0a130f 100%)' }}>
        {renderTitleBar(reading.title, () => setView('list'))}
        <div className="flex-1 overflow-y-auto px-5 py-4 pb-10">
          <div className="text-center text-amber-200/50 text-[11px] mb-3">
            {reading.charName} · {reading.chapters.length} 章 · {reading.chapters.reduce((n, c) => n + c.content.length, 0)} 字 · 自动存档
          </div>
          {reading.chapters.length > 1 && (
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-2">
              {reading.chapters.map((c, i) => (
                <button key={i} onClick={() => setChapterIdx(i)}
                  className={`shrink-0 px-3 py-1 rounded-full text-xs border ${i === chapterIdx ? 'bg-amber-400 text-[#0a130f] border-amber-400 font-medium' : 'bg-white/5 text-amber-200/70 border-amber-200/15'}`}>
                  {c.title || `第${i + 1}章`}
                </button>
              ))}
            </div>
          )}
          <div className="rounded-2xl border border-amber-200/20 p-4" style={{ background: 'rgba(20,32,26,0.85)' }}>
            <h2 className="text-amber-100 font-semibold text-center mb-3">{ch?.title || `第${chapterIdx + 1}章`}</h2>
            <div className="text-[15px] leading-loose text-amber-50/90 whitespace-pre-wrap">{ch?.content}</div>
          </div>
          {reading.chapters.length > 1 && chapterIdx < reading.chapters.length - 1 && (
            <button onClick={() => setChapterIdx(i => i + 1)}
              className="w-full mt-3 py-2.5 rounded-xl border border-amber-300/40 text-amber-200 text-sm active:scale-95 transition-transform">
              下一章 ▶
            </button>
          )}
          <button onClick={handleContinue} disabled={busy}
            className="w-full mt-2 py-3 rounded-xl bg-amber-400 text-[#0a130f] font-bold text-sm active:scale-95 transition-transform disabled:opacity-50">
            {busy ? '正在续写……' : '✍ 续写下一章'}
          </button>
        </div>
      </div>
    );
  }

  // 列表
  return (
    <div className="h-full w-full flex flex-col overflow-hidden font-light" style={{ background: 'linear-gradient(175deg,#101d17 0%,#0a130f 100%)' }}>
      {renderTitleBar('彼豆故事集', () => closeApp())}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-10">
        {stories.length === 0 ? (
          <div className="text-center py-16 text-stone-500">
            <div className="text-5xl mb-3">📖</div>
            <p className="text-sm text-amber-200/60">故事集还是空的。</p>
            <p className="text-xs text-amber-200/40 mt-1">选一位角色，让 TA 的故事再往后讲一段。</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {stories.map(s => (
              <div key={s.id} className="rounded-2xl border border-amber-200/15 p-3.5 flex items-center gap-3" style={{ background: 'rgba(20,32,26,0.8)' }}>
                <button onClick={() => openStory(s)} className="flex-1 min-w-0 text-left active:scale-[0.99] transition-transform">
                  <div className="text-sm text-amber-50 truncate">《{s.title}》</div>
                  <div className="text-[11px] text-amber-200/50 mt-0.5">
                    {s.charName} · {s.chapters.length} 章 · {new Date(s.createdAt).toLocaleDateString('zh-CN')}
                  </div>
                </button>
                <button onClick={() => exportTxt(s)} className="shrink-0 px-2 py-1 rounded-lg bg-white/5 border border-amber-200/15 text-amber-200 text-[10px]">TXT</button>
                <button onClick={() => exportEpub(s)} className="shrink-0 px-2 py-1 rounded-lg bg-white/5 border border-amber-200/15 text-amber-200 text-[10px]">EPUB</button>
                <button onClick={() => handleDelete(s.id)} className="shrink-0 px-2 py-1 rounded-lg text-red-300/70 text-[10px]">删除</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={() => setView('create')}
        className="absolute bottom-5 right-5 w-14 h-14 rounded-full bg-amber-500 text-white text-3xl shadow-lg active:scale-90 transition-transform flex items-center justify-center">
        ✎
      </button>
    </div>
  );
};

export default ExtrasApp;
