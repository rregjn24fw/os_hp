const l=`
.collab-ui-root{--collab-bg:#f4f6fa;--collab-panel:rgba(255,255,255,.84);--collab-panel-solid:#fff;--collab-ink:#1e293b;--collab-muted:#94a3b8;--collab-line:rgba(148,163,184,.28);--collab-accent:#6366f1;--collab-user:#6366f1;--collab-user-ink:#fff;background-color:var(--collab-bg)!important;color:var(--collab-ink)}
.collab-safe-header{height:calc(4rem + var(--safe-top,0px))!important;padding-top:var(--safe-top,0px)}
.collab-brand-mark,.collab-brand-label,.collab-assistant-mark,.collab-empty-brand,.collab-empty-companion{display:none}
.collab-mode-brand,.collab-mode-brand-title{display:none}
.collab-ui-gpt{--collab-bg:#fff;--collab-panel:#fff;--collab-panel-solid:#fff;--collab-ink:#0d0d0d;--collab-muted:#676767;--collab-line:#dedede;--collab-accent:#000;--collab-user:#f4f4f4;--collab-user-ink:#0d0d0d}
.collab-ui-claude{--collab-bg:#f7f6f2;--collab-panel:#f7f6f2;--collab-panel-solid:#fff;--collab-ink:#292522;--collab-muted:#756f69;--collab-line:#ddd8ce;--collab-accent:#d97757;--collab-user:#eee9df;--collab-user-ink:#292522}
.collab-ui-gemini{--collab-bg:#fff;--collab-panel:rgba(255,255,255,.96);--collab-panel-solid:#fff;--collab-ink:#1f1f1f;--collab-muted:#5f6368;--collab-line:#dfe3eb;--collab-accent:#315ed1;--collab-user:#eef3ff;--collab-user-ink:#1f1f1f;background-image:radial-gradient(circle at 50% 32%,rgba(89,121,232,.08),transparent 27%)!important}
.collab-ui-kimi{--collab-bg:#f6f8fc;--collab-panel:rgba(255,255,255,.96);--collab-panel-solid:#fff;--collab-ink:#202331;--collab-muted:#7b8193;--collab-line:#e7eaf1;--collab-accent:#2864ff;--collab-user:#e9efff;--collab-user-ink:#172453}
.collab-ui-deepseek{--collab-bg:#f5f7fb;--collab-panel:rgba(255,255,255,.96);--collab-panel-solid:#fff;--collab-ink:#202739;--collab-muted:#778099;--collab-line:#e3e8f2;--collab-accent:#4d6bfe;--collab-user:#e8edff;--collab-user-ink:#20367d}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-header,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-composer,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-settings-panel{background:var(--collab-panel)!important;border-color:var(--collab-line)!important;color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-entry-chooser{background:var(--collab-bg);color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-entry-chooser h2,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-entry-chooser button span{color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-entry-chooser p,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-entry-chooser button span+span{color:var(--collab-muted)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-thinking{background:color-mix(in srgb,var(--collab-accent) 5%,var(--collab-panel-solid));border-color:var(--collab-line);color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-header{height:calc(56px + var(--safe-top,0px))!important;box-shadow:none!important;padding-inline:8px;padding-top:var(--safe-top,0px)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-header button{color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-header-identity{justify-content:flex-start!important;gap:9px!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-header-avatar{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-brand-mark{display:grid;width:27px;height:27px;flex:none;place-items:center;border-radius:9px;background:var(--collab-accent);color:#fff;font-size:14px;font-weight:700}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-brand-label{display:inline;font-size:14px;font-weight:650;color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-session-title{font-size:14px;font-weight:650;color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-session-title:before{content:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-session-dot{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-header-meta{font-size:9px;color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-thread{padding-top:22px;background:var(--collab-bg)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-picker{background:var(--collab-bg);color:var(--collab-ink);padding-top:44px}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-hero{gap:13px}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-avatar{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-brand{display:grid;width:48px;height:48px;flex:none;place-items:center;border-radius:15px;background:var(--collab-accent);color:#fff;font-size:23px;font-weight:700}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-kicker{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-brand-title{display:inline;color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-role-title{display:block;margin-top:2px;color:var(--collab-ink);font-size:24px;font-weight:650}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-subtitle{color:var(--collab-muted)!important;font-size:12px}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-explanation{border-color:color-mix(in srgb,var(--collab-accent) 35%,transparent);color:var(--collab-ink)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-explanation p,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-explanation dt{color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-explanation dd{color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-options{border-color:var(--collab-line);margin-top:42px}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-option{border-color:var(--collab-line)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-option-title{color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-option-description{color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-mode-footnote{color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-row{width:min(100%,760px);max-width:100%;min-width:0;margin-inline:auto;align-items:flex-start;padding:10px 18px;gap:12px;box-sizing:border-box}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-avatar{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-assistant-mark{display:grid;width:25px;height:25px;flex:none;place-items:center;margin-top:2px;border-radius:8px;background:var(--collab-accent);color:#fff;font-size:13px;font-weight:700}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-row-user{justify-content:flex-start;flex-direction:row-reverse}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-stack{min-width:0;max-width:85%}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-bubble{box-shadow:none!important;border:0!important;font-size:15px;line-height:1.75}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-bubble-assistant{background:transparent!important;color:var(--collab-ink)!important;padding:1px 0!important;border-radius:0!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-bubble-user{background:var(--collab-user)!important;color:var(--collab-user-ink)!important;padding:10px 16px!important;border-radius:20px!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-time{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-message-system{background:color-mix(in srgb,var(--collab-ink) 6%,transparent)!important;color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-empty-avatar{display:none}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-empty-brand{display:grid;width:48px;height:48px;place-items:center;border-radius:15px;background:var(--collab-accent);color:#fff;font-size:24px;font-weight:700;box-shadow:0 8px 26px color-mix(in srgb,var(--collab-accent) 22%,transparent)}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-empty-state h2{color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-empty-state p{color:var(--collab-muted)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-empty-starter{border-color:var(--collab-line)!important;background:var(--collab-panel-solid)!important;color:var(--collab-ink)!important;box-shadow:none!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-ui-composer{border-top:0!important;padding-top:8px}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-composer-tools,.collab-ui-root:where(:not(.collab-ui-sully)) .collab-composer-field{width:min(100%,760px);margin-inline:auto}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-composer-field{background:var(--collab-panel-solid)!important;border-color:var(--collab-line)!important;box-shadow:0 5px 22px rgba(20,28,45,.08)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-composer-field textarea{color:var(--collab-ink)!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-primary-action{background:var(--collab-accent)!important;color:#fff!important}
.collab-ui-root:where(:not(.collab-ui-sully)) .collab-accent-chip{background:color-mix(in srgb,var(--collab-accent) 11%,var(--collab-panel-solid))!important;color:var(--collab-accent)!important}
.collab-ui-gpt .collab-brand-mark,.collab-ui-gpt .collab-empty-brand{background:#000;border-radius:50%}
.collab-ui-gpt .collab-mode-brand{background:#000;border-radius:50%}
.collab-ui-gpt .collab-mode-option-icon{background:#f4f4f4!important;color:#111!important;border-radius:50%!important}
.collab-ui-gpt .collab-assistant-mark{background:#000;border-radius:50%}
.collab-ui-gpt .collab-composer-field{border-radius:24px!important;box-shadow:0 2px 10px rgba(0,0,0,.08)!important}
.collab-ui-claude .collab-brand-mark,.collab-ui-claude .collab-empty-brand,.collab-ui-claude .collab-assistant-mark{background:transparent;color:#c75f3c;font-size:20px}
.collab-ui-claude .collab-mode-brand{background:transparent;color:#c75f3c;font-size:29px}
.collab-ui-claude .collab-mode-brand-title,.collab-ui-claude .collab-mode-explanation>p{font-family:Georgia,'Times New Roman',serif}
.collab-ui-claude .collab-mode-option-icon{background:#eee9df!important;color:#b95e41!important;border-radius:14px!important}
.collab-ui-claude .collab-empty-state h2{font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:25px}
.collab-ui-claude .collab-message-bubble-assistant{font-family:Georgia,'Times New Roman',serif;font-size:15.5px}
.collab-ui-claude .collab-composer-field{border-radius:16px!important;box-shadow:0 3px 14px rgba(74,61,49,.07)!important}
.collab-ui-gemini .collab-brand-mark,.collab-ui-gemini .collab-empty-brand,.collab-ui-gemini .collab-assistant-mark{background:linear-gradient(135deg,#3f7ee8,#9c59d1)}
.collab-ui-gemini .collab-mode-brand{background:linear-gradient(135deg,#3f7ee8,#9c59d1)}
.collab-ui-gemini .collab-mode-avatar{display:block;width:31px;height:31px;border-radius:11px;margin-left:-22px;margin-top:38px;z-index:1;border:3px solid #fff}
.collab-ui-gemini .collab-mode-option-icon{background:#eef3ff!important;color:#4975df!important}
.collab-ui-gemini .collab-header-avatar{display:block;width:25px;height:25px;border-radius:9px;order:2}
.collab-ui-gemini .collab-message-avatar-assistant{display:block;width:27px;height:27px;border-radius:9px;order:-1}
.collab-ui-gemini .collab-message-row-assistant .collab-assistant-mark{display:none}
.collab-ui-gemini .collab-empty-companion{display:block;position:absolute;width:32px;height:32px;border-radius:11px;right:-8px;bottom:-7px;border:3px solid #fff;object-fit:cover}
.collab-ui-gemini .collab-empty-brand-wrap{position:relative}
.collab-ui-gemini .collab-empty-state h2{background:linear-gradient(90deg,#3576df,#8f55c8);-webkit-background-clip:text;background-clip:text;color:transparent!important}
.collab-ui-kimi .collab-brand-mark,.collab-ui-kimi .collab-empty-brand,.collab-ui-kimi .collab-assistant-mark{background:#111936;color:#fff;border-radius:11px}
.collab-ui-kimi .collab-mode-brand{background:#111936;border-radius:14px}
.collab-ui-kimi .collab-mode-option{margin:8px 0;padding:18px 15px!important;border:1px solid var(--collab-line)!important;border-radius:17px;background:#fff}
.collab-ui-kimi .collab-mode-options{border:0!important}
.collab-ui-kimi .collab-mode-option-icon{background:#eef2ff!important;color:#2864ff!important}
.collab-ui-kimi .collab-message-row-assistant{margin-top:2px;margin-bottom:2px}
.collab-ui-kimi .collab-message-bubble-assistant{background:#fff!important;border:1px solid var(--collab-line)!important;border-radius:16px!important;padding:13px 15px!important}
.collab-ui-kimi .collab-composer-field{border-radius:18px!important;border-color:#dfe4ee!important}
.collab-ui-deepseek .collab-brand-mark,.collab-ui-deepseek .collab-empty-brand,.collab-ui-deepseek .collab-assistant-mark{background:#4d6bfe;border-radius:10px}
.collab-ui-deepseek .collab-mode-brand{background:#4d6bfe;border-radius:12px}
.collab-ui-deepseek .collab-mode-option{margin:7px 0;padding:18px 14px!important;border:1px solid var(--collab-line)!important;border-radius:14px;background:#fff}
.collab-ui-deepseek .collab-mode-options{border:0!important}
.collab-ui-deepseek .collab-mode-option-icon{background:#edf1ff!important;color:#4d6bfe!important}
.collab-ui-deepseek .collab-message-bubble-assistant{background:#fff!important;border:1px solid var(--collab-line)!important;border-radius:14px!important;padding:13px 15px!important}
.collab-ui-deepseek .collab-composer-field{border-radius:14px!important}
.collab-brand-mark,.collab-brand-label,.collab-assistant-mark,.collab-empty-brand,.collab-mode-brand,.collab-mode-brand-title,.collab-empty-companion{display:none!important}
.collab-ui-root.collab-avatar-none .collab-message-avatar,.collab-ui-root.collab-avatar-none .collab-header-avatar,.collab-ui-root.collab-avatar-none .collab-mode-avatar,.collab-ui-root.collab-avatar-none .collab-empty-avatar{display:none!important}
.collab-ui-root.collab-avatar-user .collab-message-avatar-assistant,.collab-ui-root.collab-avatar-user .collab-header-avatar,.collab-ui-root.collab-avatar-user .collab-mode-avatar,.collab-ui-root.collab-avatar-user .collab-empty-avatar{display:none!important}
.collab-ui-root.collab-avatar-character .collab-message-avatar-user{display:none!important}
.collab-ui-root.collab-avatar-both .collab-message-avatar,.collab-ui-root.collab-avatar-user .collab-message-avatar-user,.collab-ui-root.collab-avatar-character .collab-message-avatar-assistant,.collab-ui-root.collab-avatar-character .collab-header-avatar,.collab-ui-root.collab-avatar-character .collab-mode-avatar,.collab-ui-root.collab-avatar-character .collab-empty-avatar,.collab-ui-root.collab-avatar-both .collab-header-avatar,.collab-ui-root.collab-avatar-both .collab-mode-avatar,.collab-ui-root.collab-avatar-both .collab-empty-avatar{display:block!important}
.collab-avatar-style-circle .collab-message-avatar,.collab-avatar-style-circle .collab-header-avatar,.collab-avatar-style-circle .collab-mode-avatar,.collab-avatar-style-circle .collab-empty-avatar{border-radius:999px!important}
.collab-avatar-style-rounded .collab-message-avatar,.collab-avatar-style-rounded .collab-header-avatar{border-radius:9px!important}
.collab-avatar-style-rounded .collab-mode-avatar,.collab-avatar-style-rounded .collab-empty-avatar{border-radius:18px!important}
.collab-avatar-style-portrait .collab-message-avatar{width:38px!important;height:48px!important;border-radius:12px!important}
.collab-avatar-style-portrait .collab-header-avatar{width:29px!important;height:36px!important;border-radius:9px!important}
.collab-avatar-style-portrait .collab-mode-avatar{width:54px!important;height:68px!important;border-radius:16px!important}
.collab-avatar-style-portrait .collab-empty-avatar{width:68px!important;height:86px!important;border-radius:20px!important}
.collab-message-row{width:100%;max-width:100%;min-width:0;box-sizing:border-box}
.collab-message-stack{min-width:0}
.collab-message-bubble{min-width:0;max-width:100%;box-sizing:border-box;overflow-wrap:anywhere}
`,o=".collab-ui-root:where(.collab-ui-charcoal){--collab-bg: #171c1b;--collab-panel: #1c2320;--collab-panel-solid: #232b28;--collab-ink: #e5ece7;--collab-muted: #a0b0a6;--collab-line: #39483f;--collab-accent: #9fc8b1;--collab-user: #304b3d;--collab-user-ink: #edf5ef;--collab-accent-ink: #172a1f}.collab-ui-root:where(.collab-ui-warm-night){--collab-bg: #221f1d;--collab-panel: #282420;--collab-panel-solid: #302b27;--collab-ink: #eee6df;--collab-muted: #b9aaa0;--collab-line: #4c4139;--collab-accent: #dcb38f;--collab-user: #4d3c2f;--collab-user-ink: #f6e9dd;--collab-accent-ink: #302216}.collab-ui-root:where(.collab-ui-midnight){--collab-bg: #171c2b;--collab-panel: #1d2436;--collab-panel-solid: #242d42;--collab-ink: #e5e9f5;--collab-muted: #a7b2cc;--collab-line: #3b4763;--collab-accent: #b5b9e9;--collab-user: #353f67;--collab-user-ink: #eff0ff;--collab-accent-ink: #222646}.collab-ui-root:where(.collab-ui-dark){color-scheme:dark}.collab-ui-root:where(.collab-ui-dark) :is(.bg-white:not(.collab-switch-thumb),.bg-white\\/65,.bg-white\\/70,.bg-white\\/72,.bg-white\\/78,.bg-white\\/80,.bg-white\\/82,.bg-white\\/85,.bg-white\\/90,.bg-white\\/92,.bg-white\\/96,.bg-\\[\\#f4f6fa\\],.bg-\\[\\#f7f8fb\\],.bg-\\[\\#f8f9fc\\],.focus-within\\:bg-white:focus-within,.hover\\:bg-white\\/55:hover,.active\\:bg-white:active,.active\\:bg-white\\/80:active){background-color:var(--collab-panel-solid)!important}.collab-ui-root:where(.collab-ui-dark) .collab-switch-thumb{background-color:var(--collab-ink)!important}.collab-ui-root:where(.collab-ui-dark) :is(.bg-slate-50,.bg-slate-50\\/80,.bg-slate-100,.bg-slate-200,.bg-slate-900\\/6,.bg-white\\/5,.bg-white\\/8,.bg-white\\/10,.active\\:bg-slate-50:active,.active\\:bg-slate-100:active,.active\\:bg-slate-100\\/80:active,.active\\:bg-slate-200:active,.active\\:bg-slate-200\\/70:active,.disabled\\:bg-slate-200:disabled){background-color:color-mix(in srgb,var(--collab-ink) 7%,var(--collab-panel-solid))!important}.collab-ui-root:where(.collab-ui-dark) :is(.text-slate-950,.text-slate-900,.text-slate-800,.text-slate-700,.text-slate-600,.hover\\:text-slate-700:hover,.active\\:text-slate-700:active){color:var(--collab-ink)!important}.collab-ui-root:where(.collab-ui-dark) :is(.text-slate-500,.text-slate-400,.text-slate-400\\/80,.text-slate-300,.disabled\\:text-slate-400:disabled){color:var(--collab-muted)!important}.collab-ui-root:where(.collab-ui-dark) :is(.border-slate-100,.border-slate-200,.border-slate-200\\/60,.border-slate-200\\/65,.border-slate-200\\/70,.border-slate-200\\/80,.border-slate-200\\/90,.border-slate-800,.border-slate-900,.border-white\\/10,.border-white\\/60,.border-white\\/65,.border-white\\/70,.border-white\\/80,.border-black\\/5,.border-black\\/8,.border-indigo-200,.focus\\:border-slate-400:focus){border-color:var(--collab-line)!important}.collab-ui-root:where(.collab-ui-dark) :is(.bg-indigo-50,.bg-indigo-50\\/90,.bg-indigo-100,.bg-violet-50,.bg-sky-50,.bg-sky-100){background-color:color-mix(in srgb,var(--collab-accent) 14%,var(--collab-panel-solid))!important}.collab-ui-root:where(.collab-ui-dark) :is(.text-indigo-500,.text-indigo-600,.text-indigo-700,.text-violet-500,.text-sky-500,.text-sky-600){color:var(--collab-accent)!important}.collab-ui-root:where(.collab-ui-dark) :is(.bg-rose-50,.bg-rose-50\\/80,.bg-rose-100,.bg-amber-50,.bg-amber-50\\/80,.bg-emerald-50,.active\\:bg-rose-50:active){background-color:var(--collab-panel-solid)!important}.collab-ui-root:where(.collab-ui-dark) :is(.text-rose-200,.text-rose-400,.text-rose-500,.text-rose-600,.text-rose-700,.hover\\:text-rose-600:hover){color:#f5a5ae!important}.collab-ui-root:where(.collab-ui-dark) :is(.text-amber-600,.text-amber-800){color:#e8c18f!important}.collab-ui-root:where(.collab-ui-dark) .text-emerald-700{color:#9fcfb5!important}.collab-ui-root:where(.collab-ui-dark) :is(.bg-slate-900,.bg-indigo-500,.bg-indigo-600){background-color:var(--collab-accent)!important;color:var(--collab-accent-ink)!important}.collab-ui-root:where(.collab-ui-dark) :where(.collab-ui-composer) .collab-primary-action{background:var(--collab-accent)!important;color:var(--collab-accent-ink)!important}.collab-ui-root:where(.collab-ui-dark) :is(.collab-brand-mark,.collab-assistant-mark,.collab-empty-brand,.collab-mode-brand){color:var(--collab-accent-ink)!important}.collab-ui-root:where(.collab-ui-dark) :is(.collab-action-dialog,.collab-settings-panel,.collab-file-library){background:var(--collab-panel)!important}.collab-ui-root:where(.collab-ui-dark) :is(input,textarea,select){color:var(--collab-ink)!important;caret-color:var(--collab-accent);color-scheme:dark}.collab-ui-root:where(.collab-ui-dark) select option{background-color:var(--collab-panel-solid);color:var(--collab-ink)}.collab-ui-root:where(.collab-ui-dark) :is(input,textarea)::placeholder{color:var(--collab-muted);opacity:.8}.collab-ui-root:where(.collab-ui-dark) :is(button,input,textarea,select):focus-visible{outline:2px solid var(--collab-accent);outline-offset:2px}.collab-ui-root:where(.collab-ui-dark) .collab-voice-track{background:var(--collab-line)}.collab-ui-root .collab-css-editor{-moz-tab-size:2;tab-size:2}.collab-ui-root:where(.collab-ui-dark) button.collab-theme-selected{border-color:var(--collab-accent)!important;box-shadow:0 0 0 1px var(--collab-accent)}";export{l as C,o as c};
