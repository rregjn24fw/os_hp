import React, { useState, useEffect } from 'react';
import { useOS } from '../../context/OSContext';
import { loadFeatureAiSettings, saveFeatureAiSettings } from '../../utils/hogwarts';
import type { FeatureAiSettings, FeatureAiConfig } from '../../types';

const FEATURES: Array<{ key: keyof FeatureAiSettings; label: string; desc: string }> = [
  { key: 'novel', label: '📖 同人文', desc: '小说续写 / 同人生成' },
  { key: 'forum', label: '🦉 猫头鹰论坛', desc: '角色自动发帖' },
  { key: 'campus', label: '🏰 霍格沃茨校园', desc: '校园回合演绎' },
  { key: 'extras', label: '✨ 彼豆故事集', desc: '番外短篇生成 / 导出' },
];

const HogwartsAiSettingsPanel: React.FC = () => {
  const { apiConfig } = useOS();
  const [settings, setSettings] = useState<FeatureAiSettings>(() => loadFeatureAiSettings());
  const [open, setOpen] = useState(false);

  useEffect(() => { setSettings(loadFeatureAiSettings()); }, []);

  const update = (feature: keyof FeatureAiSettings, patch: Partial<FeatureAiConfig>) => {
    const next = { ...settings, [feature]: { ...settings[feature], ...patch } };
    setSettings(next);
    saveFeatureAiSettings(next);
  };

  return (
    <section className="bg-[#fffefe] rounded-3xl p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] border border-amber-200/70">
      <button type="button" onClick={() => setOpen(v => !v)} className="flex items-center justify-between gap-2 w-full text-left">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-slate-600 tracking-wider">🪄 霍格沃茨 AI 配置</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3 h-3 text-slate-300 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed bg-amber-50/60 rounded-xl p-3">
            为同人文 / 论坛 / 校园分别设置专用模型。<strong>留空即自动跟随</strong>你在「API 配置」里填好的第三方接口（{apiConfig.model || '未设置模型'}）。
          </p>
          {FEATURES.map(f => {
            const cfg = settings[f.key] || {};
            return (
              <div key={f.key} className="rounded-2xl border border-slate-200 p-3 space-y-2">
                <div>
                  <div className="text-sm font-semibold text-slate-700">{f.label}</div>
                  <div className="text-[10px] text-slate-400">{f.desc}</div>
                </div>
                <input value={cfg.model || ''} onChange={e => update(f.key, { model: e.target.value })}
                  placeholder={`模型名（留空跟随：${apiConfig.model || '全局'}）`}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-amber-400" />
                <div className="flex gap-2">
                  <input value={cfg.baseUrl || ''} onChange={e => update(f.key, { baseUrl: e.target.value })}
                    placeholder="Base URL（留空跟随全局）"
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-amber-400" />
                  <input value={cfg.temperature ?? ''} onChange={e => update(f.key, { temperature: e.target.value === '' ? undefined : Number(e.target.value) })}
                    placeholder="温度" inputMode="decimal"
                    className="w-16 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-amber-400 text-center" />
                </div>
              </div>
            );
          })}
          <button onClick={() => { saveFeatureAiSettings({ novel: {}, forum: {}, campus: {}, extras: {} }); setSettings({ novel: {}, forum: {}, campus: {}, extras: {} }); }}
            className="w-full py-2 rounded-xl bg-slate-100 text-slate-500 text-xs active:scale-95 transition-transform">
            全部重置为跟随全局
          </button>
        </div>
      )}
    </section>
  );
};

export default HogwartsAiSettingsPanel;
