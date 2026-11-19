const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/build/BeautyPosterDialog-p7seGW0L.js","assets/build/vendor-react-BoKvikiE.js","assets/build/main-Dg_N1Qcn.js","assets/build/useLocalBackHandler-5SZnNJaa.js","assets/build/vendor-capacitor-DtNwoD35.js","assets/build/vendor-blob-store-t5gmMSH4.js","assets/build/friendFeed-DvSImPmy.js","assets/build/vendor-C7jFqhk5.js","assets/build/userLocation-BLEUzU7P.js","assets/build/cssImageAssets-j-rBW-tu.js","assets/build/spaceAssets-j5Ox2Tgc.js","assets/build/main-BIgKc_dU.css","assets/build/WhiteboxSoundEditor-DZk4T06E.js","assets/build/shareCardCanvas-CXm1iW36.js","assets/build/WhiteboxSoundEditor-C2wgHVIE.css","assets/build/BeautyCatalog-4xp9_WYp.js","assets/build/decorationLibrary-Cy1NYp5n.js","assets/build/exportGuard-B8a0gE6F.js","assets/build/BubbleMaker-rY-Qwd8q.js","assets/build/bubbleAppearance-DX8a3DJ-.js"])))=>i.map(i=>d[i]);
import{_ as Ja}from"./vendor-capacitor-DtNwoD35.js";import{ck as o,cj as Ha,au as t}from"./vendor-react-BoKvikiE.js";import{C as ue}from"./spaceAssets-j5Ox2Tgc.js";import{e0 as Ma,da as rn,dU as $a,cp as qe,D as St,b$ as Ke,dZ as Cr,cQ as he,b7 as fe,g as vr,d as Wa,d$ as Ye,d0 as Je,cM as nn,m as wr,w as kr,cs as on}from"./useLocalBackHandler-5SZnNJaa.js";import{portableCssImages as jr,localizeCssImages as sn}from"./cssImageAssets-j-rBW-tu.js";import{nz as ln,nN as cn,nr as re,lR as dn,kw as pn,b5 as ne,ml as Ya,qD as ae,po as oe,pP as se,pV as Sr,qm as Nt,ac as ie,nf as le,iD as je,fL as un,mt as Se,oA as Ee,ql as hn,lH as Er,kY as qa,mp as Ar,dM as ta,mq as fn,oi as be,ge as Ae,oR as Ze,E as Nr,k as me,mm as Ne,p as Te,bP as Yt,qE as Be,a_ as Br,ce as zr,qF as bn,mb as ze,eL as mn,qc as xn,q7 as gn,kP as yn,ki as Qe,l_ as Qa,fM as Ta,z as Cn,y as vn,F as wn,iL as Xe,gZ as kn,mo as jn,iF as Sn,aq as En,am as An,p2 as Nn,jz as Bn,lY as zn,gJ as Mn,mv as _n,oQ as Pn,ob as Dn,n3 as Rn,pa as xe,qB as On,eX as Ln,eW as Tn}from"./main-Dg_N1Qcn.js";import{b as Fn}from"./vendor-blob-store-t5gmMSH4.js";import{e as Mr,d as ge,b as la,w as In,a as Pa,W as Hn,i as $n,s as Gn}from"./WhiteboxSoundEditor-DZk4T06E.js";import{remixOrigin as Ea,originLabel as _r,canEditDecoration as ia,readDecorationOrigin as Gt,combineDecorationOrigins as Pr,deleteLibraryDecoration as Dr,saveLibraryDecoration as _a,readLibraryDecorations as ye,saveLibraryDecorationBatch as Vn,writeDecorationOrigin as Fa,replaceReceivedDecoration as Un,importedOrigin as Wn}from"./decorationLibrary-Cy1NYp5n.js";import{c as tr}from"./exportGuard-B8a0gE6F.js";const Va=a=>!!a&&typeof a=="object"&&!Array.isArray(a),Kt=a=>oe(a).replace(/\/\*[\s\S]*?\*\//g,"").trim(),ar=a=>!(a!=null&&a.src)||a.src==="none"?{src:"none"}:{src:a.src,volume:a.volume??.6},er=a=>a&&{user:{borderRadius:20,opacity:1,...a.user},ai:{borderRadius:20,opacity:1,...a.ai},customCss:Kt(a.customCss||"")},Ua=(a,r)=>({...a,preset:(a==null?void 0:a.preset)||r,name:void 0,customCss:Kt((a==null?void 0:a.customCss)||"")}),rr=a=>({styleId:a.styleId,customCss:Kt(a.customCss||""),...a.styleId==="custom"?{customColors:{bg:"#1f2937",accent:"#fbbf24",text:"#f1f5f9",...a.customColors}}:{}});function qn(a,r,n,s,l,c){const k=new Map,j=b=>(k.has(b)||k.set(b,(async()=>{if(b.startsWith("blobref:"))return rn(b);if(b.startsWith("blob:")||/^\/(?!\/)[^\s"\'<> {}]+$/.test(b)){const m=await fetch(b);if(!m.ok)throw Error("Local asset unavailable");return Fn(await m.blob())}return b.includes("url(")&&b.includes("blobref:")?jr(b):b})()),k.get(b)),x=async b=>{if(typeof b=="string")return j(b);if(Array.isArray(b))return Promise.all(b.map(x));if(Va(b)){const m={};for(const d of Object.keys(b).sort())b[d]!==void 0&&(m[d]=await x(b[d]));return m}return b},A=async(b,m)=>b===m||JSON.stringify(await x(b))===JSON.stringify(await x(m)),C=ln(a,r),R={layout:{...ne,...dn({...C,...r?pn(C,r.chatFineTune):{}})},bubbles:er(n),background:{image:((r==null?void 0:r.chatBackground)??a.chatBackground)||null,style:C.chatBackgroundStyle||"plain"},sound:ar(re(r==null?void 0:r.chromeCustomCss,r==null?void 0:r.chatSound,C.chatChromeCustomCss,a.chatSound)),css:[C.chatChromeCustomCss,r==null?void 0:r.chromeCustomCss].filter(Boolean).join(`
`),psyche:rr(cn(a,r)),date:Ua(r==null?void 0:r.dateAppearance,"none"),story:Ua(a.storyAppearance,"none"),...c?{collaboration:Ma(c)}:{},schedule:Ua(a.scheduleCardAppearance,"original"),journal:Ua(a.journalAppearance,"original")},S=new WeakMap,g=async b=>{var d,v,h,W;if(!Va(b))return"";const m=[];if(b.format==="sullyos-chat-decoration"&&Va(b.parts))for(const[I,H]of Object.entries(b.parts)){if(!(I in R))continue;let w=H,T=R[I];if(I==="collaboration"&&(w=Ma(H),w={...w,customCss:Kt(w.customCss)},T={...T,customCss:Kt(T.customCss)}),I==="layout"&&(w={...ne,...H}),I==="bubbles"&&(w=er(H)),I==="sound"&&(w=ar(H)),I==="psyche"&&(w=rr(H)),["date","story","schedule","journal"].includes(I)&&(w=Ua(H,I==="date"||I==="story"?"none":"original")),I==="bubbles"){const L=await A(w,T);if(!!!((d=w==null?void 0:w.user)!=null&&d.avatarDecoration||(v=w==null?void 0:w.ai)!=null&&v.avatarDecoration)){m.push(L);continue}let q=L;if(!q){for(const $ of["user","ai"])if((h=w==null?void 0:w[$])!=null&&h.avatarDecoration&&((W=T==null?void 0:T[$])!=null&&W.avatarDecoration)&&await A(w[$].avatarDecoration,T[$].avatarDecoration)){q=!0;break}}m.push(L,q);continue}if(I==="css"){const L=String(H||""),z=[...L.matchAll(/\/\* sully-composer:(avatar|background) \*\/\n?([\s\S]*?)\/\* end-sully-composer:\1 \*\//g)],q=F=>F.replace(ae("avatar"),"").replace(ae("background"),""),$=!!(b.parts.layout||Object.keys(b.parts).filter(F=>F!=="css").length>1);if(z.length){const F=Kt(q(L)),N=Kt(q(String(T)));(F||$)&&m.push(await A(F,N));const tt=Ya(String(T)),at=Ya(L);if(z.some(M=>M[1]==="avatar")){const M=(X,y)=>A(se(Kt(X),"both").trim(),se(Kt(y),"both").trim());if($||at.user&&at.ai){const X=at.shared??at.user??"",y=at.shared??at.ai??"",V=tt.shared??tt.user??"",Ct=tt.shared??tt.ai??"";m.push(X?!!V&&await M(X,V):!V),m.push(y?!!Ct&&await M(y,Ct):!Ct)}else{const X=at.shared||at.user||at.ai||"",y=[tt.shared,tt.user,tt.ai].filter(Ct=>!!Ct);let V=!1;for(const Ct of y)if(await M(X,Ct)){V=!0;break}m.push(V)}}for(const M of z)if(M[1]==="background"){const X=[...String(T).matchAll(ae("background"))].map(y=>y[1]).join(`
`);m.push(await A(Kt(M[2]),Kt(X)))}continue}w=Kt(L),T=Kt(T)}m.push(await A(w,T))}else if(Va(b.theme)){const I={...b.theme},H={};delete I.launcherWidgetImage;for(const w of Object.keys(I))H[w]=a[w];m.push(await A(I,H)),b.customIcons&&m.push(await A(b.customIcons,s))}return m.length&&m.every(Boolean)?"使用中":m.some(Boolean)?"部分使用中":""};return b=>Va(b)?(S.has(b)||S.set(b,g(b).catch(()=>"")),S.get(b)):Promise.resolve("")}const nr={library:"打开装扮收藏",maker:"打开装扮制作器",import:"导入装扮完成",apply:"应用装扮完成",save:"保存装扮完成",share:"分享装扮",submit:"提交美化审核",update:"更新本机装扮完成"},or={chat:"聊天装扮",appearance:"桌面主题",whitebox:"白框",bubbles:"气泡",avatar:"头像框",background:"聊天背景",psyche:"心象",sound:"提示音",collaboration:"协同工作",schedule:"日程表",journal:"交换日记",outfit:"搭配",file:"文件",image:"图片",css:"CSS",code:"分享码",new:"首次投稿",revision:"更新投稿"};function _t(a,r){!Object.prototype.hasOwnProperty.call(nr,a)||typeof r!="string"||!Object.prototype.hasOwnProperty.call(or,r)||Sr(nr[a],{分类:or[r]})}const Kn="sullyos-chat-decoration",Yn=1,Jn="星轨 · 深空",Zn={layout:{chatAvatarMode:"grouped",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarVisibility:"both",chatAvatarPlacement:"beside",chatAvatarAlign:"top",chatBubbleStyle:"modern",chatMessageSpacing:"spacious",chatShowTimestamp:"always",chatHeaderStyle:"default",chatInputStyle:"rounded",chatChromeStyle:"soft",chatHeaderAlign:"left",chatHeaderDensity:"default",chatStatusStyle:"subtle",chatSendButtonStyle:"circle",chatModuleAlign:"center",chatHideHeaderBuffs:!1},bubbles:{id:"acid-orbit",name:"酸性星轨",type:"custom",user:{textColor:"#25223f",backgroundColor:"#d4c8f6",borderRadius:21,opacity:1,tailMode:"none",voiceBarBg:"#292b41",voiceBarActiveBg:"#47405f",voiceBarBtnColor:"#c4b0ff",voiceBarWaveColor:"#e2d6ff",voiceBarTextColor:"#f4efff"},ai:{textColor:"#f1edff",backgroundColor:"#292b40",borderRadius:21,opacity:1,tailMode:"none",voiceBarBg:"#292b41",voiceBarActiveBg:"#47405f",voiceBarBtnColor:"#c4b0ff",voiceBarWaveColor:"#e2d6ff",voiceBarTextColor:"#f4efff"}},background:{image:null,style:"plain"},psyche:{styleId:"stellar"},css:`/* ACID ORBIT / 酸性星轨 — SullyOS 完整聊天装扮
   银白细框 · 液态冷紫 · 深空。所有素材均为本地 CSS，无外链。
   导入 JSON 获得配套气泡与布局；CSS 也可独立粘贴至白框编辑器。 */
.sully-chat-root {
  --acid-ink: #10121f;
  --acid-text: #f0edff;
  --acid-muted: #bcb6d9;
  --acid-line: rgba(231,224,255,.43);
  --acid-violet: #c2b0ff;
  color: #f0edff !important;
  background-color: #10121f !important;
  background-image:
    radial-gradient(ellipse at 0% 82%, #8578d752, transparent 43%),
    radial-gradient(ellipse at 105% 12%, #787fd64a, transparent 39%),
    radial-gradient(circle at 32% 18%, #f4edff99 0 .7px, transparent 1px),
    radial-gradient(circle at 78% 61%, #c7bdff99 0 .6px, transparent 1px),
    radial-gradient(circle at 48% 79%, #f7edff66 0 .5px, transparent 1px),
    linear-gradient(155deg, #11131f, #171829 62%, #23253c) !important;
  background-size: auto, auto, 113px 157px, 163px 211px, 79px 131px, auto !important;
  font-family: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
.sully-chat-header {
  padding-bottom: 27px !important;
  background: linear-gradient(115deg, #171927ed, #292b43e8) !important;
  color: #f0edff !important;
  border-bottom: 1px solid #e6deff4f !important;
  box-shadow: 0 8px 28px #00000026, inset 0 -1px #ffffff0a !important;
  overflow: visible !important;
}
.sully-chat-header::after {
  content: "ACID ORBIT  /  PRIVATE FREQUENCY";
  position: absolute; left: 18px; bottom: 7px; color: #c9c1e6;
  font: 8px/1.5 ui-monospace, monospace; letter-spacing: .22em;
  pointer-events: none;
}
.sully-chat-name { color: #f5f1ff !important; letter-spacing: .06em; }
.sully-chat-status, .sully-chat-token { color: #c3badf !important; }
.sully-chat-token { background: #d3c2ff16 !important; border: 1px solid #d3c2ff33 !important; }
.sully-chat-back, .sully-chat-trigger {
  color: #f3edff !important; background: #dbceff12 !important;
  border: 1px solid #d8cbff40 !important; border-radius: 50% !important;
}
.sully-chat-avatar, .sully-chat-message-avatar-img {
  border: 1px solid #efe9ffc9 !important;
  box-shadow: 0 0 0 3px #c6b3ff12, 0 0 15px #bba2ff2b !important;
}
.sully-chat-avatar-wrap { overflow: visible !important; }
.sully-chat-avatar-wrap::after {
  content: "✧"; position: absolute; right: -5px; bottom: -8px;
  color: #f3edff; font-size: 23px; line-height: 1;
  text-shadow: 0 0 9px #bba2ff; pointer-events: none;
}
.sully-chat-buffs button {
  color: #ded4ff !important; background: #b69ae915 !important;
  border: 1px solid #cbbcf536 !important; box-shadow: none !important;
}
.sully-chat-message { color: #c4bddb; }
.sully-chat-message-content { min-width: 0; }
.sully-chat-message-sender { color: #c9c1e4 !important; letter-spacing: .05em; }
.sully-bubble-ai, .sully-bubble-user {
  position: relative; border: 1px solid #e4dbff6b !important;
  padding: 12px 16px !important; font-size: 14px; line-height: 1.8;
  overflow-wrap: anywhere; word-break: normal;
  box-shadow: inset 0 1px 0 #ffffff2e, inset 0 -5px 15px #a79add10, 0 5px 20px #00000020 !important;
}
.sully-bubble-ai {
  color: #f1edff !important;
  background: linear-gradient(135deg, #383b53e8, #202332eb 70%, #3e3b58df) !important;
  border-radius: 5px 21px 21px 21px !important;
}
.sully-bubble-user {
  color: #25223f !important;
  background: linear-gradient(120deg, #eee7ff, #bfb3e9 68%, #d8cefa) !important;
  border-color: #f9f5ffd9 !important;
  border-radius: 21px 5px 21px 21px !important;
  box-shadow: inset 0 1px 4px #ffffffa8, 0 0 19px #b69aff26 !important;
}
.sully-bubble-ai::before, .sully-bubble-user::before { content: none !important; }
.sully-bubble-group-last::after {
  content: "✦"; position: absolute; bottom: -8px; right: 9px;
  color: #fff5ff; font: 16px/1 serif; text-shadow: 0 0 8px #a98bff;
  pointer-events: none;
}
.sully-emoji-msg { object-fit: contain; }
.sully-chat-system, .sully-chat-interaction {
  color: #cfc5ea !important; background: #171828b8 !important;
  border: 1px solid #d6c8ff2b !important; border-radius: 12px !important;
}
/* 语音：播放、等待、字幕共用同一套银紫材质。 */
.sully-voice-bar {
  color: #f4efff !important;
  background: linear-gradient(110deg, #34344f, #202236) !important;
  border: 1px solid #ddd2ff8a !important; border-radius: 22px !important;
  box-shadow: inset 0 0 14px #d5c7ff19, 0 0 12px #b9a1ff13 !important;
  min-height: 43px;
}
.sully-voice-bar-button {
  color: #fff !important; background: linear-gradient(140deg, #b4a0f3, #7764bc) !important;
  border: 1px solid #eadfff99; box-shadow: 0 0 11px #b69cf54d !important;
}
.sully-voice-bar-wave-segment { background: #e2d6ff !important; }
.sully-voice-bar-toggle { color: #eee4ff !important; background: #eee4ff1f !important; }
.sully-voice-bar-transcript {
  color: #e4daff !important; background: #1b1c31 !important;
  border: 1px solid #c9b6ff40; border-radius: 12px !important; overflow-wrap: anywhere;
}
/* 转账：状态保留原文字，另以边线区分。 */
.sully-chat-transfer-card, .sully-chat-transfer-receipt {
  color: #f3edff !important;
  background: radial-gradient(ellipse at 105% 105%, #c4aaff65, transparent 60%), linear-gradient(135deg, #57517b, #30364f 55%, #51486d) !important;
  border: 1px solid #e2d5ffb8 !important; border-radius: 22px 6px 22px 6px !important;
  box-shadow: inset 0 0 18px #dfceff21, 0 0 18px #bca3ff24 !important;
  max-width: 100%; overflow-wrap: anywhere;
}
.sully-chat-transfer-card { padding: 18px !important; }
.sully-chat-transfer-header { padding-bottom: 10px; border-bottom: 1px solid #ecdeff30; }
.sully-chat-transfer-brand { color: #f1eaff !important; letter-spacing: .1em; font-size: 11px !important; }
.sully-chat-transfer-icon {
  color: #faf5ff !important; background: #d6c6ff24 !important;
  border: 1px solid #e5d4ff7a; box-shadow: 0 0 15px #baa0ff35;
}
.sully-chat-transfer-watermark { color: #e5d8ff !important; opacity: .14 !important; transform: rotate(-16deg); }
.sully-chat-transfer-amount { color: #fbf6ff !important; font-variant-numeric: tabular-nums; letter-spacing: .02em !important; }
.sully-chat-transfer-card .sully-chat-transfer-amount { font-size: 29px !important; font-weight: 500 !important; margin: 13px 0 9px !important; }
.sully-chat-transfer-note {
  color: #e1d5f5 !important; white-space: normal !important;
  overflow: visible !important; overflow-wrap: anywhere; font-size: 12px !important;
}
.sully-chat-transfer-recipient { color: #dbd0ef !important; }
.sully-chat-transfer-status { color: #fff2ff !important; background: #e2d4ff20 !important; border-radius: 5px !important; }
.sully-chat-transfer-card[data-status="accepted"], .sully-chat-transfer-receipt[data-status="accepted"] { border-color: #bce5df !important; }
.sully-chat-transfer-card[data-status="returned"], .sully-chat-transfer-receipt[data-status="returned"] { border-color: #b5b3c6 !important; background: linear-gradient(135deg, #454458, #292c3e) !important; }
.sully-chat-transfer-overlay { background: #0a0b19bf !important; }
.sully-chat-transfer-dialog { background: #232438 !important; color: #f0eaff !important; border: 1px solid #d3c4ff91; }
.sully-chat-transfer-dialog div, .sully-chat-transfer-dialog span { background: transparent !important; color: inherit !important; }
.sully-chat-transfer-dialog button { background: #3c3b55 !important; color: #f3edff !important; border: 1px solid #d6c7ff70; min-height: 44px; }
.sully-chat-transfer-dialog .sully-chat-transfer-accept { background: linear-gradient(120deg, #d9c7ff, #ac9bdd) !important; color: #231e39 !important; }
/* 心象：保留原有折叠/展开，不覆盖其交互结构。 */
.sully-psyche-card {
  background: linear-gradient(125deg, #24253cf5, #171c2bf5) !important;
  color: #e9e1ff !important; border: 1px solid #d2c4ff6b !important;
  border-radius: 4px 20px 4px 20px !important;
  box-shadow: inset 3px 0 #c6afff80, 0 0 20px #a89ade14 !important;
}
.sully-psyche-title, .sully-psyche-subtitle { color: #d5c3ff !important; letter-spacing: .16em !important; }
.sully-psyche-preview, .sully-psyche-body { color: #ddd4f1 !important; line-height: 1.9 !important; overflow-wrap: anywhere; }
/* 用户要求全套 card：所有已开放种类统一外壳。HTML 沙盒内容保持自身样式。 */
.sully-chat-card[data-card-kind] {
  --sully-card-background: linear-gradient(135deg, #32344beF, #1d2235f5);
  --sully-card-color: #ece5ff;
  --sully-card-border: 1px solid #ddd0ff80;
  --sully-card-radius: 18px 5px 18px 5px;
  --sully-card-shadow: inset 0 1px 0 #fff2, 0 6px 22px #0002;
}
.sully-chat-card[data-card-kind] .sully-chat-card-surface { overflow: visible; }
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(div,section,article,header,footer,button,a,p,span,h2,h3,h4,h5,small,strong,b,label,li,blockquote,details,summary,pre) {
  background-color: transparent !important; background-image: none !important;
  color: #e6dff6 !important; border-color: #d1c0f43b !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-qr-surface {
  background-color: #ffffff !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-meter-fill {
  background-color: #c9b1bd !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(h2,h3,h4,h5,strong,b) { color: #fff4ff !important; }
.sully-chat-card[data-card-kind] .sully-chat-card-content button {
  border-radius: 9px !important;
}
.sully-chat-card[data-card-kind="transfer"] { --sully-card-background: transparent; --sully-card-border: 0; --sully-card-shadow: none; }
.sully-chat-card[data-card-kind="transfer"] .sully-chat-card-surface { overflow: visible; }
.sully-chat-card[data-card-kind="music_card"] { --sully-card-background: linear-gradient(125deg, #514567, #23263f 70%); }
.sully-chat-card[data-card-kind="score_card"] { --sully-card-background: linear-gradient(120deg, #34344a, #49405d); }
.sully-chat-card[data-card-kind="world_card"], .sully-chat-card[data-card-kind="vr_card"] { --sully-card-background: radial-gradient(ellipse at top right, #71729270, transparent), #202737; }
.sully-collaboration-file { color: #f2ebff !important; background: transparent !important; border-color: #d2c3ff70 !important; border-radius: 16px !important; }
.sully-collaboration-file-icon { color: #d9c6ff !important; }
.sully-collaboration-file-name { color: #f6efff !important; overflow-wrap: anywhere; }
.sully-collaboration-file-detail, .sully-collaboration-file-meta { color: #bdb3d6 !important; }
.sully-collaboration-file-action { color: #f3eaff !important; border: 1px solid #c9b2ff66; border-radius: 9px; }
.sully-schedule-change { color: #e7dcff !important; background: #2c2b42 !important; border: 1px solid #d5c2ff6b !important; }
/* 输入区保留应用的 safe-bottom，不固定高度、不盖住功能面板。 */
.sully-chat-inputbar { color: #e9e2ff !important; background: linear-gradient(0deg, #25273bf5, #171b2df5) !important; border-top: 1px solid #ded2ff45 !important; }
.sully-chat-composer { gap: 8px !important; }
.sully-chat-input-wrap {
  background: #d5c6ff0e !important; border: 1px solid #e2d5ff75 !important;
  border-radius: 25px !important; box-shadow: inset 0 0 14px #bbafff12 !important;
}
.sully-chat-textarea { color: #f0e9ff !important; background: transparent !important; font-size: 16px !important; caret-color: #dccbff; }
.sully-chat-textarea::placeholder { color: #afa6c9 !important; }
.sully-chat-actions-button { color: #ede4ff !important; background: #b6a2eb14 !important; border: 1px solid #d3c2ff73 !important; border-radius: 50% !important; }
.sully-chat-send-button {
  color: #fffaff !important; background: linear-gradient(135deg, #c0b0f0, #7866b8) !important;
  border: 1px solid #e1d6ffbf !important; box-shadow: inset 0 0 9px #fff4, 0 0 17px #aa8eff52 !important;
}
.sully-chat-panel, .sully-chat-emoji-suggestions, .sully-chat-auto-reply { background: #242638 !important; color: #e7def7 !important; border-color: #c1addc4d !important; }
.sully-chat-panel button:not(:where(.sully-chat-page-dot, .sully-chat-bubble-danger)) { color: #e7def7 !important; background: #d3c3ff12 !important; border-color: #d3c3ff40 !important; }
.sully-chat-panel button div:not(.sully-chat-badge-dot), .sully-chat-panel button span:not(.sully-chat-swatch-dot):not(.sully-chat-badge-dot) { color: inherit !important; background-color: transparent !important; }
.sully-chat-panel .sully-chat-bubble-search { color: #e7def7 !important; background: #191b2b !important; border-color: #d3c3ff40 !important; }
.sully-chat-panel .sully-chat-bubble-search::placeholder { color: #9c92b8 !important; }
.sully-chat-panel .sully-chat-bubble-pill { background: #d3c3ff12 !important; border-color: #d3c3ff40 !important; color: #e7def7 !important; }
.sully-chat-panel .sully-chat-bubble-pill button:not(:where(.sully-chat-bubble-danger)) { color: inherit !important; background: transparent !important; border-color: transparent !important; }
.sully-chat-panel .sully-chat-bubble-pill[data-active="true"], .sully-chat-panel .sully-chat-bubble-chip[data-active="true"] { background: #6d5aa8 !important; border-color: #cbb8ff !important; color: #ffffff !important; }
.sully-chat-panel .sully-chat-bubble-danger { background: #dc2626 !important; color: #ffffff !important; border-color: #f87171 !important; }
.sully-chat-panel .sully-chat-page-dot { background: #d3c3ff40 !important; border: 0 !important; padding: 0 !important; }
.sully-chat-panel .sully-chat-page-dot[data-active="true"] { background: #dccbff !important; }
.sully-chat-root :is(button,a,textarea):focus-visible { outline: 2px solid #e4d1ff !important; outline-offset: 3px; }
.sully-chat-send-button, .sully-chat-actions-button, .sully-chat-transfer-card { transition: transform .18s ease, box-shadow .18s ease !important; }
@media (hover:hover) {
  .sully-chat-send-button:hover, .sully-chat-actions-button:hover { transform: translateY(-2px); }
  .sully-chat-transfer-card:hover { transform: translateY(-2px); box-shadow: inset 0 0 18px #dfceff21, 0 0 24px #bca3ff45 !important; }
}
@media (prefers-reduced-motion:reduce) {
  .sully-chat-root :is(button,a), .sully-chat-transfer-card, .sully-voice-bar-wave-segment { animation: none !important; transition: none !important; }
}

/* SECOND CONTACT — 非对称轨道通讯舱。 */
.sully-chat-root {
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='430' height='860' viewBox='0 0 430 860'%3E%3Cg fill='none' stroke='%23c9b7fc' stroke-opacity='.22'%3E%3Cellipse cx='378' cy='358' rx='103' ry='346' transform='rotate(32 378 358)'/%3E%3Cellipse cx='378' cy='358' rx='113' ry='358' transform='rotate(32 378 358)'/%3E%3Cpath d='M16 0V860M414 0V860M0 718H430' stroke-dasharray='2 9'/%3E%3C/g%3E%3Cg fill='%23e7d6ff' fill-opacity='.5'%3E%3Cpath d='M337 87l3 16 15 3-15 3-3 16-3-16-15-3 15-3zM47 641l2 11 11 2-11 2-2 11-2-11-11-2 11-2z'/%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(ellipse at 104% 52%, #b6a1f340, transparent 48%),
    radial-gradient(ellipse at -5% 89%, #76679a4d, transparent 42%),
    linear-gradient(148deg, #0d0e17, #202031 75%, #171822) !important;
  background-size: 100% auto, auto, auto, auto !important;
}
.sully-chat-header {
  position: relative !important; isolation: isolate;
  padding-top: calc(var(--safe-top, 0px) + 86px) !important;
  padding-bottom: 24px !important;
  background: linear-gradient(165deg, #c7b8e51a, #0d0e19d9 72%) !important;
  border-bottom: 1px solid #ddd3ec9c !important;
  border-radius: 0 0 34px 0 !important;
}
.sully-chat-header::before {
  content: "Acid Orbit"; position: absolute; left: 19px;
  top: calc(var(--safe-top, 0px) + 8px); right: 12px; height: 69px;
  color: #e5ddf1; font: italic 55px/.98 Georgia, "Times New Roman", serif;
  letter-spacing: -4px; padding: 3px 0 10px;
  border-bottom: 1px solid #d5c4ee42;
  text-shadow: 1px 1px #17131f, -1px -1px #fff8, 0 0 28px #b497ff40;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='116' height='72' viewBox='0 0 116 72'%3E%3Cg fill='none' stroke='%23dfd5f6'%3E%3Cellipse cx='61' cy='36' rx='52' ry='15' transform='rotate(-32 61 36)'/%3E%3Cellipse cx='61' cy='36' rx='25' ry='30' transform='rotate(28 61 36)'/%3E%3C/g%3E%3Cpath fill='%23f7edff' d='M61 9l4 22 20 5-20 4-4 24-4-24-20-4 20-5z'/%3E%3C/svg%3E") right center/100px 64px no-repeat;
  pointer-events: none;
}
.sully-chat-header::after { content: "◈  PRIVATE LINK     /     ACID ORBIT"; left: 20px; font-size: 7px; letter-spacing: .26em; }
.sully-chat-name { font-size: 18px !important; letter-spacing: .15em; }
.sully-chat-back, .sully-chat-trigger { border-radius: 3px 12px 3px 12px !important; }
.sully-chat-buffs button { border-radius: 2px !important; }
/* 与气泡实际顶边严格对齐，覆盖布局微调中的 top:-.5rem。 */
.sully-chat-root .sully-chat-message-ai > .sully-chat-message-avatar-slot,
.sully-chat-root .sully-chat-message-user > .sully-chat-message-avatar-slot {
  top: 0 !important; bottom: auto !important; transform: none !important;
}
.sully-chat-avatar-wrap::before {
  content: ""; position: absolute; inset: -4px;
  border: 1px solid #cbb9e67d; border-radius: 4px 13px 4px 13px;
  transform: rotate(-9deg); pointer-events: none;
}
.sully-chat-avatar-wrap::after { content: "+"; bottom: -5px; right: -6px; font: 16px/1 monospace; }
.sully-chat-message-avatar-img { border-radius: 3px 10px 3px 10px !important; }
.sully-chat-message-content { overflow: visible; }
.sully-bubble-ai, .sully-bubble-user { padding: 13px 16px !important; border-width: 1px !important; }
.sully-bubble-ai {
  border-radius: 0 22px 3px 16px !important;
  border-color: #ded3f79e !important;
  background: linear-gradient(113deg, #b7a6d02b, #222332e8 37%, #393343df) !important;
  box-shadow: inset 3px 0 #e1d5f73d, inset 0 1px #fff3, 5px 5px 0 #b19ad410 !important;
}
.sully-bubble-user {
  border-radius: 22px 0 16px 3px !important;
  background: linear-gradient(112deg, #f0e8f7, #bfacd9 60%, #e9ddf5 100%) !important;
  box-shadow: inset -3px 0 #fff8, 4px 4px 0 #c7afe520 !important;
}
.sully-bubble-group-last::after {
  content: "✳"; right: -7px; bottom: -10px; font-size: 23px;
  color: #e8d9ff; text-shadow: 1px 1px #5c4777, 0 0 11px #af8ae3;
}
.sully-voice-bar { border-radius: 2px 20px 2px 20px !important; box-shadow: 3px 3px 0 #c4a8e62b !important; }
.sully-chat-message:not(:has(.sully-bubble-ai, .sully-bubble-user)) .sully-voice-bar-shell { margin-top: 0 !important; }
.sully-voice-bar-wave-segment { min-height: 3px; }
/* 银紫票券：信息在左，切割轨道和微型印字留在右侧。 */
.sully-chat-transfer-card {
  border-radius: 2px 26px 2px 26px !important;
  padding: 17px 18px 15px !important;
  background:
    repeating-linear-gradient(90deg, #ddd0f529 0 1px, transparent 1px 4px) right 15px bottom 15px/32px 20px no-repeat,
    radial-gradient(ellipse at 106% 9%, #efdeff70, transparent 52%),
    linear-gradient(122deg, #73647e, #343240 53%, #9985ad) !important;
  border-color: #f3e1ffba !important;
  box-shadow: inset 0 1px #fff8, 5px 5px 0 #100f19, 6px 6px 0 #d1bcea70 !important;
}
.sully-chat-transfer-card::before {
  content: ""; position: absolute; width: 150px; height: 60px;
  right: -45px; top: 25px; transform: rotate(-50deg);
  border: 1px solid #f1dcff66; border-radius: 50%;
  box-shadow: 0 0 0 7px #d6baec12, 0 0 0 8px #ebd2ff36; pointer-events: none;
}
.sully-chat-transfer-card::after {
  content: "ORBIT / TRANSFER"; display: block; margin-top: 14px; padding-top: 8px;
  border-top: 1px dashed #ecd9fc77; color: #e5d5f0;
  font: 7px/1.4 ui-monospace, monospace; letter-spacing: .18em; pointer-events: none;
}
.sully-chat-transfer-card .sully-chat-transfer-amount { font: 36px/1.2 Georgia,serif !important; letter-spacing: -1px !important; }
.sully-chat-transfer-header { border-bottom-style: dashed; }
.sully-chat-transfer-icon { border-radius: 2px 9px 2px 9px !important; }
.sully-chat-transfer-watermark { opacity: .09 !important; }
.sully-chat-transfer-status { padding: 2px 7px !important; border: 1px solid #ede0ff66; border-radius: 0 !important; }
.sully-chat-transfer-receipt { border-radius: 2px 14px 2px 14px !important; border-left-width: 3px !important; }
.sully-psyche-card { border-radius: 0 25px 0 15px !important; border-left: 3px double #e2c7ff !important; }
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-radius: 2px 23px 2px 14px;
  --sully-card-border: 1px solid #dac4eb96;
  --sully-card-shadow: 4px 4px 0 #100f19, 5px 5px 0 #baa2d03d;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface { border-top: 3px double #dcc9eb99; }
.sully-chat-inputbar { border-radius: 24px 0 0 0; border-top: 1px solid #dfc9f394 !important; background: linear-gradient(105deg,#383040f5,#151622fa) !important; }
.sully-chat-input-wrap { border-radius: 2px 18px 2px 18px !important; border-bottom: 3px double #d9c6ef99 !important; }
.sully-chat-actions-button, .sully-chat-send-button { border-radius: 3px 13px 3px 13px !important; }
.sully-chat-send-button { background: linear-gradient(135deg,#ece1fa,#ad92ce 55%,#635279) !important; box-shadow: 3px 3px 0 #a58cbd36 !important; }
/* 日程修改回执：明确覆盖默认浅色主题的每个文字层。 */
.sully-schedule-change {
  color: #f3edff !important; background: #252335 !important;
  border: 1px solid #d6c2ef !important; border-radius: 2px 20px 2px 16px !important;
  box-shadow: 0 10px 30px #08071180, inset 3px 0 #c4a9e6 !important;
  padding: 13px !important;
}
.sully-schedule-change-kicker { color: #f3edff !important; font-size: 12px !important; }
.sully-schedule-change-count { color: #d1c5e0 !important; font-size: 11px !important; }
.sully-schedule-change-mark { color: #241d32 !important; background: #d8c2f2 !important; border-radius: 2px 8px 2px 8px !important; }
.sully-schedule-change-row {
  background: #363145 !important; border: 1px solid #b89ecb40;
  border-radius: 3px 10px 3px 10px !important;
  grid-template-columns: 42px minmax(0,1fr) 14px minmax(0,1.15fr) !important;
  padding: 8px 7px !important;
}
.sully-schedule-change-time { color: #e2cafa !important; font-size: 11px !important; font-variant-numeric: tabular-nums; }
.sully-schedule-change-before { color: #c5b9d3 !important; text-decoration-color: #b4a2c7 !important; }
.sully-schedule-change-arrow { color: #dec4fa !important; }
.sully-schedule-change-after { color: #fff4ff !important; font-weight: 700 !important; }
.sully-schedule-change-before, .sully-schedule-change-after {
  font-size: 12px !important; line-height: 1.65 !important;
  white-space: normal !important; overflow-wrap: anywhere; overflow: visible !important;
}
.sully-schedule-change-shine { display: none !important; }

/* 参考图版：无英文顶栏，圆润玻璃与蓝紫星云。 */
.sully-chat-root {
  background-color: #111522 !important;
  background-image:
    radial-gradient(ellipse at 64% 38%, #d1b6d16b, transparent 23%),
    radial-gradient(ellipse at 72% 26%, #8295f075, transparent 29%),
    radial-gradient(ellipse at 50% 64%, #758cdc63, transparent 28%),
    radial-gradient(ellipse at 12% 108%, #b5c0ff96, transparent 38%),
    radial-gradient(ellipse at 108% 88%, #cbb4dc96, transparent 29%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='290'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23aab8e9' opacity='.16' filter='url(%23n)' d='M0 0h240v290H0z'/%3E%3Cg fill='%23e9e4ff'%3E%3Ccircle cx='19' cy='36' r='.65'/%3E%3Ccircle cx='137' cy='84' r='.55'/%3E%3Ccircle cx='204' cy='237' r='.9'/%3E%3Ccircle cx='92' cy='179' r='.7'/%3E%3Ccircle cx='38' cy='252' r='.45'/%3E%3Cpath opacity='.65' d='M193 39l1 6 6 1-6 1-1 6-1-6-6-1 6-1z'/%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(145deg,#10131e,#181d30 68%,#222d48) !important;
  background-size: auto,auto,auto,auto,auto,240px 290px,auto !important;
}
.sully-chat-header {
  padding-top: calc(var(--safe-top, 0px) + 17px) !important;
  padding-bottom: 17px !important;
  background: linear-gradient(120deg,#151929e8,#393e678c) !important;
  border: 1px solid #c8beff80 !important; border-top: 0 !important;
  border-radius: 0 0 25px 25px !important;
  box-shadow: inset 0 -1px 1px #e3d8ff73,0 4px 16px #a58bfc1c !important;
}
.sully-chat-header::before, .sully-chat-header::after { content: none !important; }
.sully-chat-name { color:#f4edff !important; font-size:20px !important; letter-spacing:.025em !important; }
.sully-chat-name::after { content:" ✦"; color:#e4d5ff; text-shadow:0 0 10px #c2a8ff; pointer-events:none; }
.sully-chat-avatar { width:48px !important; height:48px !important; border-radius:50% !important; border:1px solid #e0d4ffbd !important; box-shadow:0 0 16px #c9b1ff36 !important; }
.sully-chat-back, .sully-chat-trigger {
  border-radius:50% !important; background:#a8a4da12 !important;
  border:1px solid #c7baff55 !important; box-shadow:inset 0 1px #fff1 !important;
  min-width:36px; min-height:36px;
}
.sully-chat-buffs button { border-radius:12px !important; background:#bcb0ef0f !important; border:1px solid #c0b3ed36 !important; }
.sully-chat-avatar-wrap::before { content:none !important; }
.sully-chat-avatar-wrap::after { content:none !important; }
.sully-chat-message-avatar-img { border-radius:50% !important; border:1px solid #dcd1ffb3 !important; box-shadow:0 0 11px #bba8f636 !important; }
.sully-bubble-ai,.sully-bubble-user {
  padding:12px 15px !important; border-radius:20px !important;
  border:1px solid #e2dbff99 !important;
  box-shadow:inset 0 1px 5px #f1eaff30,0 0 14px #b7a5e920 !important;
}
.sully-bubble-ai { background:linear-gradient(135deg,#252b3dda,#4b507aa8) !important; color:#f3efff !important; border-top-left-radius:5px !important; }
.sully-bubble-user { background:linear-gradient(125deg,#eee6ffed,#b6ade2eb) !important; color:#282641 !important; border-top-right-radius:5px !important; box-shadow:inset 0 1px 6px #fff8,0 0 16px #c4adff4d !important; }
.sully-bubble-group-last::after { content:"✦"; right:-5px; bottom:-7px; color:#fff3ff; font:21px/1 serif; text-shadow:0 0 8px #dac1ff; }
.sully-voice-bar { border-radius:26px !important; background:linear-gradient(120deg,#2e3451df,#7a79b291) !important; border:1px solid #ded4ffae !important; box-shadow:inset 0 0 12px #dad0ff29,0 0 12px #a998ff24 !important; }
.sully-voice-bar-button { width:32px !important;height:32px !important; border-radius:50% !important; background:linear-gradient(140deg,#9e99e8,#6352a5) !important; }
.sully-chat-transfer-card { border-radius:22px !important; background:linear-gradient(130deg,#434b77df,#9e94c399) !important; box-shadow:inset 0 0 18px #dacfff33,0 0 14px #b49afa2e !important; }
.sully-chat-transfer-card::before,.sully-chat-transfer-card::after { content:none !important; }
.sully-chat-transfer-header { border-bottom-style:solid; }
.sully-chat-transfer-card .sully-chat-transfer-amount { font:500 29px/1.3 system-ui,sans-serif !important; letter-spacing:0 !important; }
.sully-chat-transfer-icon { border-radius:50% !important; }
.sully-chat-transfer-receipt,.sully-psyche-card { border-radius:18px !important; border-left-width:1px !important; }
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-background:linear-gradient(125deg,#303850df,#646b9896);
  --sully-card-radius:22px; --sully-card-border:1px solid #d5cbffaa;
  --sully-card-shadow:inset 0 0 16px #dfd4ff26,0 0 14px #baacf024;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface { border-top:1px solid #d5cbffaa !important; }
.sully-chat-inputbar {
  background:linear-gradient(120deg,#1e263bdc,#666ca98c) !important;
  border:1px solid #cfc6ff85 !important;
  border-radius:30px 30px 0 0 !important;
  box-shadow:inset 0 1px 1px #ffffff24,0 -3px 20px #c4b7ff16 !important;
}
.sully-chat-composer { padding:10px !important; gap:8px !important; align-items:flex-end !important; }
.sully-chat-input-wrap { border:1px solid #c6beed75 !important; border-radius:26px !important; background:#b0b8ef0b !important; box-shadow:inset 0 0 12px #a5b2e916 !important; }
.sully-chat-textarea { padding:10px 12px !important; line-height:24px !important; }
.sully-chat-input-wrap button { color:#c9c4ec !important; }
.sully-chat-actions-button,.sully-chat-send-button { border-radius:50% !important; width:44px !important;height:44px !important; min-width:44px;min-height:44px; }
.sully-chat-actions-button { background:#24294088 !important; border:1px solid #cfc3ff8a !important; }
.sully-chat-send-button { background:linear-gradient(135deg,#b6b0f5,#7975c6) !important; border:1px solid #efe5ffd4 !important; box-shadow:inset 0 0 9px #fff5,0 0 18px #bba3ff60 !important; }

/* 居中肖像顶栏：角色成为视觉中心，两侧保留真实操作。 */
.sully-chat-header {
  padding-top:calc(var(--safe-top,0px) + 15px) !important;
  padding-bottom:15px !important;
  border-radius:0 0 34px 34px !important;
  background:radial-gradient(ellipse at 50% 12%,#b1a2f530,transparent 64%),linear-gradient(115deg,#171c30e8,#292e4ae0) !important;
}
.sully-chat-header .sully-chat-avatar {
  width:44px !important;height:44px !important;
  border:2px solid #e7dcffbd !important;
  box-shadow:0 0 0 4px #c1b0f317,0 0 0 5px #cfc2ff40,0 0 22px #b29cf64a !important;
  margin-bottom:5px;
}
.sully-chat-header .sully-chat-name {
  font-size:18px !important;line-height:1.5 !important;
  letter-spacing:.12em !important; max-width:100%; overflow-wrap:anywhere;
}
.sully-chat-header .sully-chat-name::before { content:"✧ ";font-size:12px;color:#c9b9f1; }
.sully-chat-header .sully-chat-name::after { content:" ✧";font-size:12px;color:#c9b9f1; }
.sully-chat-header .sully-chat-status { font-size:10px !important;line-height:1.6 !important; }
.sully-chat-header .sully-chat-back,.sully-chat-header .sully-chat-trigger {
  top:12px !important;bottom:auto !important;
  width:38px;height:38px;min-width:38px;min-height:38px;
  border-color:#c6b9ef45 !important;background:#ccc1f20a !important;
}
.sully-chat-header .sully-chat-token { font-size:8px !important;padding:2px 5px !important;border-radius:9px !important; }
.sully-chat-header .sully-chat-buffs { margin-top:3px; }
.sully-chat-header .sully-chat-buffs button { padding:4px 7px !important; }
.sully-chat-header::after {
  content:"◇" !important;position:absolute;left:50%;right:auto;top:auto;bottom:-8px;
  transform:translateX(-50%);color:#e4d4ff;font:14px/1 serif;
  text-shadow:0 0 8px #c1a6ff;pointer-events:none;
}

/* 横向角色名片：右侧整幅肖像、左侧信息与逐行情绪。 */
.sully-chat-header {
  isolation:isolate; min-height:166px !important;
  padding:calc(var(--safe-top,0px) + 20px) 39% 20px 58px !important;
  border-radius:0 0 23px 23px !important;
  background:linear-gradient(100deg,#171b2ff5 0%,#303653eb 52%,#8e85bda8 100%) !important;
  box-shadow:inset 0 -1px #e0d3ff66,0 5px 22px #090d2226 !important;
}
.sully-chat-header::before,.sully-chat-header::after { content:none !important; }
.sully-chat-header .sully-chat-avatar {
  position:absolute !important; top:var(--safe-top,0px) !important;right:0 !important;
  width:46% !important;height:calc(100% - var(--safe-top,0px)) !important;
  object-fit:cover !important;object-position:50% 35% !important;
  border:0 !important;border-radius:0 0 23px 0 !important;
  margin:0 !important;box-shadow:none !important;opacity:.83;z-index:-1;
  mask-image:linear-gradient(90deg,transparent,#000 42%);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 42%);
}
.sully-chat-header .sully-chat-info { position:relative;z-index:1;width:100%; }
.sully-chat-header .sully-chat-name {
  text-align:left !important;font-size:20px !important;letter-spacing:.06em !important;
  line-height:1.4 !important;margin:0 0 5px !important;
  text-shadow:0 1px 8px #11182a8c;
}
.sully-chat-header .sully-chat-name::before,.sully-chat-header .sully-chat-name::after { content:none !important; }
.sully-chat-header .sully-chat-status { justify-content:flex-start !important;gap:7px !important; }
.sully-chat-header .sully-chat-back {
  position:absolute !important;left:12px !important;right:auto !important;
  top:calc(var(--safe-top,0px) + 18px) !important;bottom:auto !important;
  margin:0 !important;border:0 !important;background:transparent !important;box-shadow:none !important;
  width:38px;height:38px;z-index:2;
}
.sully-chat-header .sully-chat-trigger {
  position:absolute !important;right:13px !important;left:auto !important;
  top:auto !important;bottom:13px !important;margin:0 !important;
  background:#242b4799 !important;border:1px solid #e0d1ff70 !important;z-index:2;
}
.sully-chat-header .sully-chat-buffs { margin-top:10px !important; }
.sully-chat-header .sully-chat-buffs > div:not([aria-hidden]) {
  display:flex !important;flex-direction:column !important;align-items:stretch !important;
  gap:0 !important;white-space:normal !important;overflow:visible !important;padding:0 !important;
}
.sully-chat-header .sully-chat-buffs button {
  display:block !important;width:100% !important;max-width:100% !important;
  text-align:left !important;white-space:normal !important;overflow-wrap:anywhere;
  padding:7px 0 !important;font-size:10px !important;line-height:1.35 !important;
  font-weight:500 !important;letter-spacing:.03em;
  color:#e4ddf7 !important;background:transparent !important;
  border:0 !important;border-top:1px solid #d8c9ff33 !important;border-radius:0 !important;
  box-shadow:none !important;
}

/* 紧凑角色状态栏：两侧留空，肖像仅占右端一小片。 */
.sully-chat-header {
  width:calc(100% - 28px) !important;max-width:380px !important;
  margin:calc(var(--safe-top,0px) + 9px) auto 6px !important;
  min-height:0 !important;padding:10px 92px 10px 40px !important;
  border:1px solid #c9bcf877 !important;border-radius:8px 20px 8px 14px !important;
  background:linear-gradient(105deg,#171e32ed,#303959e6 65%,#8277b195) !important;
}
.sully-chat-header .sully-chat-avatar {
  top:0 !important;right:0 !important;width:108px !important;height:100% !important;
  border-radius:0 19px 7px 0 !important;object-position:50% 38% !important;
  opacity:.7;mask-image:linear-gradient(90deg,transparent,#000 54%);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 54%);
}
.sully-chat-header .sully-chat-name {
  font-size:15px !important;line-height:1.25 !important;margin:0 0 3px !important;
  letter-spacing:.04em !important;
}
.sully-chat-header .sully-chat-status { font-size:9px !important;line-height:1.2 !important;gap:5px !important; }
.sully-chat-header .sully-chat-back {
  top:8px !important;left:4px !important;width:32px !important;height:32px !important;
  min-width:32px !important;min-height:32px !important;padding:6px !important;
}
.sully-chat-header .sully-chat-trigger {
  right:7px !important;bottom:7px !important;width:28px !important;height:28px !important;
  min-width:28px !important;min-height:28px !important;padding:5px !important;
  border-radius:5px 10px 5px 10px !important;
}
.sully-chat-header .sully-chat-buffs { margin-top:4px !important; }
.sully-chat-header .sully-chat-buffs > div:not([aria-hidden]) { flex-direction:row !important;flex-wrap:wrap !important;gap:3px 8px !important; }
.sully-chat-header .sully-chat-buffs button {
  width:auto !important;max-width:100% !important;padding:2px 0 2px 5px !important;
  font-size:8px !important;line-height:1.2 !important;border-top:0 !important;
  border-left:2px solid #c3b0fa80 !important;
}
.sully-chat-header::after {
  content:"" !important;position:absolute;left:40px;right:92px;bottom:-1px;top:auto;
  width:auto;height:2px;transform:none;background:linear-gradient(90deg,#cfbfff,transparent);
  border:0;box-shadow:0 0 6px #bd9eff55;pointer-events:none;
}
/* ACID GOTHIC LACE */
/* Scallop2 adaptation. Scallop2 — CC0 / Public Domain. Source: https://freesvg.org/scallop2 ; supplied SVG preserved in scallop2-source.svg. */
.sully-chat-inputbar {
  margin-top:20px !important;border-radius:0 !important;
  border-top:1px solid #cbb7ec80 !important;
  background:linear-gradient(120deg,#191728f5,#35334ded) !important;
}
.sully-chat-inputbar::before {
  content:"" !important;position:absolute;left:0;right:0;top:-20px;height:20px;
  background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22601.40625%22%20height%3D%2265.03125%22%20viewBox%3D%22128.6875%20738.03125%20601.40625%2065.03125%22%3E%3C!--%20Scallop2%20%E2%80%94%20CC0%20%2F%20Public%20Domain.%20Source%3A%20https%3A%2F%2Ffreesvg.org%2Fscallop2%20%3B%20supplied%20SVG%20preserved%20in%20scallop2-source.svg.%20--%3E%3Cpath%20fill%3D%22%231c2036%22%20d%3D%22m%20128.6875%2C803.0625%200%2C-85.03125%20601.40625%2C0%200%2C85.03125%20c%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52982%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06662%2C-3.59607%20-4.125%2C-5.625%20-1.05838%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70902%2C6.709%20-16.52305%2C8.42343%20-24.8125%2C5.125%20-3.52976%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28942%2C3.29843%20-18.10361%2C1.584%20-24.8125%2C-5.125%20-1.7038%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70906%2C6.709%20-16.52303%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66937%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.65774%2C-5.74516%20-21.1875%2C-13.9375%20-8.28947%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70901%2C6.709%20-16.52308%2C8.42343%20-24.8125%2C5.125%20-3.52981%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28941%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09788%2C-3.59607%20-4.15625%2C-5.625%20-1.05832%2C2.02865%20-2.42142%2C3.92144%20-4.125%2C5.625%20-6.70907%2C6.709%20-16.52302%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48689%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28947%2C3.29843%20-18.13481%2C1.584%20-24.84375%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52981%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20z%20m%200%2C-13.78125%20c%205.11121%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%20z%20m%20100.25%2C0%20c%205.1112%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.28125%2C12.5762%20-9.28125%2C17.6875%200%2C5.11133%204.16992%2C9.25%209.28125%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%200%2C-26.9375%20c%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20M%20158.375%2C776.96875%20c%202.36848%2C0%204.75526%2C-0.91162%206.5625%2C-2.71875%203.61425%2C-3.6142%203.61425%2C-9.44825%200%2C-13.0625%20-3.6143%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35444%2C15.41699%205.96875%2C19.03125%201.80718%2C1.80712%204.16271%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36861%2C0%204.72407%2C-0.91163%206.53125%2C-2.71875%203.61418%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44826%2C2.35451%20-19.0625%2C5.96875%20-3.61431%2C3.61425%20-3.61431%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36843%2C0%204.72406%2C-0.91162%206.53125%2C-2.71875%203.6143%2C-3.6142%203.6143%2C-9.44825%200%2C-13.0625%20-3.61425%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.3232%2C15.41699%205.9375%2C19.03125%201.80719%2C1.80712%204.1939%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.72401%2C-0.91163%206.53125%2C-2.71875%203.61413%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.41694%2C2.35451%20-19.03125%2C5.96875%20-3.61424%2C3.61425%20-3.61424%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.16283%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35451%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36855%2C0%204.75532%2C-0.91163%206.5625%2C-2.71875%203.61419%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44825%2C2.35451%20-19.0625%2C5.96875%20-3.6143%2C3.61425%20-3.6143%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.16277%2C2.71875%206.53125%2C2.71875%20z%20m%2059.40625%2C0%20c%202.36842%2C0%204.72407%2C-0.91162%206.53125%2C-2.71875%203.61431%2C-3.6142%203.61431%2C-9.44825%200%2C-13.0625%20-3.61424%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.32319%2C15.41699%205.9375%2C19.03125%201.80718%2C1.80712%204.19389%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.724%2C-0.91163%206.53125%2C-2.71875%203.61412%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.4482%2C2.35451%20-19.0625%2C5.96875%20-3.61425%2C3.61425%20-3.61425%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36845%2C0%204.72405%2C-0.91162%206.53125%2C-2.71875%203.61428%2C-3.6142%203.61428%2C-9.44825%200%2C-13.0625%20-3.61427%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.35447%2C15.41699%205.96875%2C19.03125%201.8072%2C1.80712%204.16267%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36859%2C0%204.7553%2C-0.91163%206.5625%2C-2.71875%203.61414%2C-3.61426%205.9375%2C-19.03125%205.9375%2C-19.03125%200%2C0%20-15.41697%2C2.35451%20-19.03125%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.1628%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35445%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36859%2C0%204.72405%2C-0.91163%206.53125%2C-2.71875%203.61414%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44822%2C2.35451%20-19.0625%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.19405%2C2.71875%206.5625%2C2.71875%20z%22%2F%3E%3C%2Fsvg%3E") center bottom/185px 20px repeat-x;
  pointer-events:none;transform:scaleY(-1);filter:drop-shadow(0 1px 0 #b4a0d48c);
}
.sully-chat-input-wrap {border-color:#bda5db80 !important;background:#c1b0e00b !important;}
.sully-chat-header {
  width:100% !important;max-width:none !important;
  margin:0 !important;
  margin-bottom:24px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 10px) !important;
  border:0 !important;border-bottom:1px solid #c9bcf877 !important;
  border-radius:0 !important;overflow:visible !important;
  box-shadow:inset 0 -1px #e0d3ff33 !important;
}
.sully-chat-header .sully-chat-avatar {
  top:10px !important;right:44px !important;width:68px !important;height:58px !important;
  border-radius:8px !important;opacity:1 !important;z-index:0;
  mask-image:none !important;-webkit-mask-image:none !important;
  clip-path:polygon(14% 0,100% 0,86% 100%,0 100%);
  object-position:50% 30% !important;
}
.sully-chat-header {padding-right:122px !important;background:linear-gradient(105deg,#171e32f5,#333950ec 65%,#79729fbd) !important;}
.sully-chat-header::before {
  content:"" !important;position:absolute;top:8px;right:43px;left:auto;
  width:66px;height:62px;padding:0;border:1px solid #d9c5ff9c;border-radius:8px;
  transform:skewX(-9deg);background:#d3c2ff12;box-shadow:0 0 12px #c9b0ff24;
  pointer-events:none;
}
.sully-chat-header .sully-chat-trigger {
  top:25px !important;bottom:auto !important;right:7px !important;
  border-radius:8px !important;background:#cbb5ff12 !important;
}
.sully-chat-header .sully-chat-back {top:calc(var(--chrome-top,var(--safe-top,0px)) + 8px) !important;}
.sully-chat-header::after {
  content:"" !important;position:absolute;
  left:0 !important;right:0 !important;top:auto !important;bottom:-20px !important;
  width:auto !important;height:20px !important;
  transform:none !important;border:0 !important;box-shadow:none !important;
  background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22601.40625%22%20height%3D%2265.03125%22%20viewBox%3D%22128.6875%20738.03125%20601.40625%2065.03125%22%3E%3C!--%20Scallop2%20%E2%80%94%20CC0%20%2F%20Public%20Domain.%20Source%3A%20https%3A%2F%2Ffreesvg.org%2Fscallop2%20%3B%20supplied%20SVG%20preserved%20in%20scallop2-source.svg.%20--%3E%3Cpath%20fill%3D%22%231c2036%22%20d%3D%22m%20128.6875%2C803.0625%200%2C-85.03125%20601.40625%2C0%200%2C85.03125%20c%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52982%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06662%2C-3.59607%20-4.125%2C-5.625%20-1.05838%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70902%2C6.709%20-16.52305%2C8.42343%20-24.8125%2C5.125%20-3.52976%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28942%2C3.29843%20-18.10361%2C1.584%20-24.8125%2C-5.125%20-1.7038%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70906%2C6.709%20-16.52303%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66937%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.65774%2C-5.74516%20-21.1875%2C-13.9375%20-8.28947%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70901%2C6.709%20-16.52308%2C8.42343%20-24.8125%2C5.125%20-3.52981%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28941%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09788%2C-3.59607%20-4.15625%2C-5.625%20-1.05832%2C2.02865%20-2.42142%2C3.92144%20-4.125%2C5.625%20-6.70907%2C6.709%20-16.52302%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48689%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28947%2C3.29843%20-18.13481%2C1.584%20-24.84375%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52981%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20z%20m%200%2C-13.78125%20c%205.11121%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%20z%20m%20100.25%2C0%20c%205.1112%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.28125%2C12.5762%20-9.28125%2C17.6875%200%2C5.11133%204.16992%2C9.25%209.28125%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%200%2C-26.9375%20c%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20M%20158.375%2C776.96875%20c%202.36848%2C0%204.75526%2C-0.91162%206.5625%2C-2.71875%203.61425%2C-3.6142%203.61425%2C-9.44825%200%2C-13.0625%20-3.6143%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35444%2C15.41699%205.96875%2C19.03125%201.80718%2C1.80712%204.16271%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36861%2C0%204.72407%2C-0.91163%206.53125%2C-2.71875%203.61418%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44826%2C2.35451%20-19.0625%2C5.96875%20-3.61431%2C3.61425%20-3.61431%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36843%2C0%204.72406%2C-0.91162%206.53125%2C-2.71875%203.6143%2C-3.6142%203.6143%2C-9.44825%200%2C-13.0625%20-3.61425%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.3232%2C15.41699%205.9375%2C19.03125%201.80719%2C1.80712%204.1939%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.72401%2C-0.91163%206.53125%2C-2.71875%203.61413%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.41694%2C2.35451%20-19.03125%2C5.96875%20-3.61424%2C3.61425%20-3.61424%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.16283%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35451%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36855%2C0%204.75532%2C-0.91163%206.5625%2C-2.71875%203.61419%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44825%2C2.35451%20-19.0625%2C5.96875%20-3.6143%2C3.61425%20-3.6143%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.16277%2C2.71875%206.53125%2C2.71875%20z%20m%2059.40625%2C0%20c%202.36842%2C0%204.72407%2C-0.91162%206.53125%2C-2.71875%203.61431%2C-3.6142%203.61431%2C-9.44825%200%2C-13.0625%20-3.61424%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.32319%2C15.41699%205.9375%2C19.03125%201.80718%2C1.80712%204.19389%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.724%2C-0.91163%206.53125%2C-2.71875%203.61412%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.4482%2C2.35451%20-19.0625%2C5.96875%20-3.61425%2C3.61425%20-3.61425%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36845%2C0%204.72405%2C-0.91162%206.53125%2C-2.71875%203.61428%2C-3.6142%203.61428%2C-9.44825%200%2C-13.0625%20-3.61427%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.35447%2C15.41699%205.96875%2C19.03125%201.8072%2C1.80712%204.16267%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36859%2C0%204.7553%2C-0.91163%206.5625%2C-2.71875%203.61414%2C-3.61426%205.9375%2C-19.03125%205.9375%2C-19.03125%200%2C0%20-15.41697%2C2.35451%20-19.03125%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.1628%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35445%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36859%2C0%204.72405%2C-0.91163%206.53125%2C-2.71875%203.61414%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44822%2C2.35451%20-19.0625%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.19405%2C2.71875%206.5625%2C2.71875%20z%22%2F%3E%3C%2Fsvg%3E") center bottom/185px 20px repeat-x !important;
  pointer-events:none;filter:drop-shadow(0 1px 0 #b4a0d48c);
}
.sully-chat-send-button {
  position:relative;border-radius:12px !important;
  background:linear-gradient(145deg,#e7dcfc,#b7a5d9) !important;
  border:1px solid #f2e8ffcc !important;color:#30283f !important;
  box-shadow:inset 0 1px #fff9,0 3px 8px #0f0d292e !important;
}
.sully-chat-send-button[aria-label="发送文字"] svg {visibility:hidden;}
.sully-chat-send-button[aria-label="发送文字"]::before {
  content:"";position:absolute;inset:10px;pointer-events:none;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d9cbed' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18L18 6M7 6h11v11'/%3E%3C/svg%3E") center/24px 24px no-repeat;
}

/* Compact celestial chrome: flush panel, arched portrait, silver edge light. */
.sully-chat-header {
  padding:12px 116px 12px 40px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  background:linear-gradient(110deg,#171b30,#1c2036 70%,#34324d) !important;
  border-top:1px solid #b9abd34d !important;
  border-bottom:1px solid #b9abd363 !important;
  box-shadow:inset 0 1px 0 #e4d9ff0d !important;
}
.sully-chat-header .sully-chat-avatar {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 9px) !important;right:43px !important;
  width:54px !important;height:60px !important;
  border-radius:50% 50% 44% 44% !important;clip-path:none !important;
  border:1px solid #c8b5df9c !important;
  box-shadow:0 0 10px #cbb3ed1f !important;object-position:50% 35% !important;
}
.sully-chat-header::before {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 5px) !important;right:39px !important;
  width:62px !important;height:68px !important;box-sizing:border-box;
  border:1px solid #b8a2d363 !important;border-radius:50% 50% 44% 44% !important;
  transform:none !important;background:none !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-trigger {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 26px) !important;
  border-radius:50% !important;background:transparent !important;
  border:1px solid #b8a2d34d !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-back {border:0 !important;background:none !important;box-shadow:none !important;}
.sully-chat-header .sully-chat-name {font-size:16px !important;letter-spacing:.08em !important;}
.sully-chat-inputbar {background:#1c2036 !important;border-top-color:#b9abd363 !important;}
.sully-chat-transfer-card {
  width:218px !important;max-width:100% !important;padding:12px !important;
  border-radius:16px !important;background:linear-gradient(125deg,#252a44,#39344f) !important;
  border:1px solid #bda5da80 !important;box-shadow:inset 0 1px #e8d7ff17,0 0 8px #c5a5ed17 !important;
}
.sully-chat-transfer-header {padding-bottom:6px !important;margin-bottom:6px !important;gap:8px !important;}
.sully-chat-transfer-card .sully-chat-transfer-icon {padding:4px !important;width:28px !important;height:28px !important;}
.sully-chat-transfer-card .sully-chat-transfer-amount {font-size:24px !important;line-height:1.2 !important;margin:8px 0 6px !important;}
.sully-chat-transfer-note {font-size:11px !important;padding:0 !important;margin:0 0 7px !important;}

/* Integrated character portrait: compact edge-to-edge nameplate. */
.sully-chat-header {
  padding:12px 112px 11px 42px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  background:#1c2036 !important;border-top:0 !important;
  border-bottom:1px solid #bca8dd4d !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-avatar {
  top:0 !important;bottom:0 !important;right:0 !important;
  width:38% !important;height:100% !important;
  border:0 !important;border-radius:0 !important;box-shadow:none !important;
  object-fit:cover !important;object-position:50% 38% !important;
  opacity:.58 !important;clip-path:none !important;
  mask-image:linear-gradient(90deg,transparent 0%,#000 65%,#000 100%) !important;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 65%,#000 100%) !important;
}
.sully-chat-header::before {
  content:"✦" !important;top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  right:111px !important;width:14px !important;height:14px !important;
  border:0 !important;border-radius:0 !important;transform:none !important;
  color:#d5c3edb3;font:14px/1 serif;background:none !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-name {
  font-family:"Noto Serif SC","Songti SC","SimSun",serif !important;
  font-size:18px !important;font-weight:600 !important;letter-spacing:.1em !important;
  line-height:1.3 !important;margin-bottom:3px !important;
}
.sully-chat-header .sully-chat-status {color:#c0b6d4 !important;gap:7px !important;}
.sully-chat-header .sully-chat-back {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 13px) !important;left:6px !important;
  color:#d4c6e6 !important;
}
.sully-chat-header .sully-chat-trigger {
  top:calc(50% + var(--chrome-top,var(--safe-top,0px)) / 2) !important;right:8px !important;bottom:auto !important;
  transform:translateY(-50%) !important;width:36px !important;height:36px !important;
  display:flex !important;align-items:center !important;justify-content:center !important;padding:8px !important;
  background:#1c2036c9 !important;border:1px solid #c3aed866 !important;
  border-radius:50% !important;z-index:2;
}
.sully-chat-header .sully-chat-buffs {margin-top:6px !important;}
.sully-chat-header .sully-chat-buffs button {font-size:9px !important;line-height:1.4 !important;}

/* Preserve component geometry: the theme edge must not add an outer box. */
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-border:0 solid transparent;
  --sully-card-shadow:inset 0 0 0 1px #d5cbff80,inset 0 0 16px #dfd4ff26,0 0 10px #baacf01a;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface {
  border:0 !important;padding:0 !important;
}

/* Unframed send glyph and one-line character identity / token count. */
.sully-chat-send-button {
  border:0 !important;background:transparent !important;box-shadow:none !important;
  border-radius:0 !important;color:#d9cbed !important;
}
.sully-chat-send-button:hover {box-shadow:none !important;}
.sully-chat-header .sully-chat-buffs button {
  color:#d3c5e7 !important;
  filter:grayscale(1) sepia(.3) hue-rotate(205deg) saturate(.7);
}
.sully-chat-header .sully-chat-info {
  display:grid !important;grid-template-columns:minmax(0,max-content) auto;justify-content:start;
  align-items:center !important;column-gap:10px;row-gap:0;
}
.sully-chat-header .sully-chat-info > .sully-chat-name {
  grid-column:1;grid-row:1;margin:0 !important;
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.sully-chat-header .sully-chat-info > .sully-chat-status {
  grid-column:2;grid-row:1;gap:4px !important;justify-self:start;
}
.sully-chat-header .sully-chat-status > .sully-chat-online-status {display:none !important;}
.sully-chat-header .sully-chat-token {
  border:0 !important;border-left:1px solid #b7a3cc66 !important;
  border-radius:0 !important;background:none !important;box-shadow:none !important;
  padding:0 0 0 9px !important;font-size:11px !important;line-height:17px !important;
  letter-spacing:.04em;color:#bbaece !important;font-variant-numeric:tabular-nums;
}
.sully-chat-header .sully-chat-info > :not(.sully-chat-name):not(.sully-chat-status) {
  grid-column:1/-1;
}
.sully-chat-header .sully-chat-buffs {margin-top:5px !important;}

/* Compact collaboration attachment and bare utility icons. */
.sully-chat-card[data-card-kind="collaboration_file"] {--sully-card-radius:14px;}
.sully-chat-actions-button,
.sully-chat-header .sully-chat-trigger {
  background:transparent !important;border:0 !important;box-shadow:none !important;
}
.sully-chat-actions-button:hover,
.sully-chat-header .sully-chat-trigger:hover {background:transparent !important;box-shadow:none !important;}
.sully-collaboration-file {
  width:236px !important;max-width:100% !important;
  border-radius:14px !important;box-shadow:none !important;
}
.sully-collaboration-file > span:first-child {padding:10px !important;gap:8px !important;}
.sully-collaboration-file-icon {width:30px !important;height:36px !important;border-radius:8px !important;}
.sully-collaboration-file-icon > svg {width:20px !important;height:20px !important;}
.sully-collaboration-file-name {font-size:12px !important;line-height:1.35 !important;font-weight:500 !important;}
.sully-collaboration-file-detail {font-size:10px !important;margin-top:4px !important;}
.sully-collaboration-file-action {width:24px !important;height:28px !important;border:0 !important;background:none !important;}
.sully-collaboration-file > span:last-child {padding:5px 10px !important;font-size:9px !important;letter-spacing:.04em !important;}
.sully-psyche-status {color:#fff !important;opacity:1 !important;}
.sully-chat-header .sully-chat-selection-cancel,.sully-chat-header .sully-chat-selection-count {color:#f0edff !important;}
.sully-chat-header .sully-chat-extra-action {color:#f0edff !important;background:#dbceff14 !important;border-color:#d8cbff40 !important;}
.sully-chat-switch-item {background:#303249 !important;border-color:transparent !important;box-shadow:none !important;}
.sully-chat-switch-item[data-active="true"] {background:#3b3c56 !important;border-color:#bca8dd66 !important;}
.sully-chat-switch-name {color:#eee5f7 !important;}
.sully-chat-switch-title,.sully-chat-switch-description {color:#b9adc9 !important;}
/* Keep the original icon tile / caption layout, with no rectangular button slab. */
.sully-chat-panel [role="group"] > button {background:transparent !important;border:0 !important;box-shadow:none !important;}
.sully-chat-panel [role="group"] > button > div:first-child {
  background:#d3c3ff12 !important;border-color:#d3c3ff26 !important;box-shadow:none !important;
}
/* HTML and custom-art event cards own their presentation; do not frame them with the theme shell. */
.sully-chat-card:is([data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"]) .sully-chat-card-surface {
  background:transparent !important;border:0 !important;box-shadow:none !important;overflow:visible !important;
}
`},Qn={format:Kn,version:Yn,name:Jn,parts:Zn},Xn="sullyos-chat-decoration",to=1,ao="星轨 · 雾紫",eo={layout:{chatAvatarMode:"grouped",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarVisibility:"both",chatAvatarPlacement:"beside",chatAvatarAlign:"top",chatBubbleStyle:"modern",chatMessageSpacing:"spacious",chatShowTimestamp:"always",chatHeaderStyle:"default",chatInputStyle:"rounded",chatChromeStyle:"soft",chatHeaderAlign:"left",chatHeaderDensity:"default",chatStatusStyle:"subtle",chatSendButtonStyle:"circle",chatModuleAlign:"center",chatHideHeaderBuffs:!1},bubbles:{id:"acid-orbit-lavender",name:"雾紫星轨",type:"custom",user:{textColor:"#493958",backgroundColor:"#dcc9f0",borderRadius:21,opacity:1,tailMode:"none",voiceBarBg:"#eee5f7",voiceBarActiveBg:"#ded0ee",voiceBarBtnColor:"#c4b0ff",voiceBarWaveColor:"#9478af",voiceBarTextColor:"#584367"},ai:{textColor:"#493958",backgroundColor:"#f5effa",borderRadius:21,opacity:1,tailMode:"none",voiceBarBg:"#eee5f7",voiceBarActiveBg:"#ded0ee",voiceBarBtnColor:"#c4b0ff",voiceBarWaveColor:"#9478af",voiceBarTextColor:"#584367"}},background:{image:null,style:"plain"},psyche:{styleId:"stellar"},css:`/* ACID ORBIT / 酸性星轨 — SullyOS 完整聊天装扮
   银白细框 · 液态冷紫 · 深空。所有素材均为本地 CSS，无外链。
   导入 JSON 获得配套气泡与布局；CSS 也可独立粘贴至白框编辑器。 */
.sully-chat-root {
  --acid-ink: #10121f;
  --acid-text: #f0edff;
  --acid-muted: #bcb6d9;
  --acid-line: rgba(231,224,255,.43);
  --acid-violet: #c2b0ff;
  color: #f0edff !important;
  background-color: #10121f !important;
  background-image:
    radial-gradient(ellipse at 0% 82%, #8578d752, transparent 43%),
    radial-gradient(ellipse at 105% 12%, #787fd64a, transparent 39%),
    radial-gradient(circle at 32% 18%, #f4edff99 0 .7px, transparent 1px),
    radial-gradient(circle at 78% 61%, #c7bdff99 0 .6px, transparent 1px),
    radial-gradient(circle at 48% 79%, #f7edff66 0 .5px, transparent 1px),
    linear-gradient(155deg, #11131f, #171829 62%, #23253c) !important;
  background-size: auto, auto, 113px 157px, 163px 211px, 79px 131px, auto !important;
  font-family: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
.sully-chat-header {
  padding-bottom: 27px !important;
  background: linear-gradient(115deg, #171927ed, #292b43e8) !important;
  color: #f0edff !important;
  border-bottom: 1px solid #e6deff4f !important;
  box-shadow: 0 8px 28px #00000026, inset 0 -1px #ffffff0a !important;
  overflow: visible !important;
}
.sully-chat-header::after {
  content: "ACID ORBIT  /  PRIVATE FREQUENCY";
  position: absolute; left: 18px; bottom: 7px; color: #c9c1e6;
  font: 8px/1.5 ui-monospace, monospace; letter-spacing: .22em;
  pointer-events: none;
}
.sully-chat-name { color: #f5f1ff !important; letter-spacing: .06em; }
.sully-chat-status, .sully-chat-token { color: #c3badf !important; }
.sully-chat-token { background: #d3c2ff16 !important; border: 1px solid #d3c2ff33 !important; }
.sully-chat-back, .sully-chat-trigger {
  color: #f3edff !important; background: #dbceff12 !important;
  border: 1px solid #d8cbff40 !important; border-radius: 50% !important;
}
.sully-chat-avatar, .sully-chat-message-avatar-img {
  border: 1px solid #efe9ffc9 !important;
  box-shadow: 0 0 0 3px #c6b3ff12, 0 0 15px #bba2ff2b !important;
}
.sully-chat-avatar-wrap { overflow: visible !important; }
.sully-chat-avatar-wrap::after {
  content: "✧"; position: absolute; right: -5px; bottom: -8px;
  color: #f3edff; font-size: 23px; line-height: 1;
  text-shadow: 0 0 9px #bba2ff; pointer-events: none;
}
.sully-chat-buffs button {
  color: #ded4ff !important; background: #b69ae915 !important;
  border: 1px solid #cbbcf536 !important; box-shadow: none !important;
}
.sully-chat-message { color: #c4bddb; }
.sully-chat-message-content { min-width: 0; }
.sully-chat-message-sender { color: #c9c1e4 !important; letter-spacing: .05em; }
.sully-bubble-ai, .sully-bubble-user {
  position: relative; border: 1px solid #e4dbff6b !important;
  padding: 12px 16px !important; font-size: 14px; line-height: 1.8;
  overflow-wrap: anywhere; word-break: normal;
  box-shadow: inset 0 1px 0 #ffffff2e, inset 0 -5px 15px #a79add10, 0 5px 20px #00000020 !important;
}
.sully-bubble-ai {
  color: #f1edff !important;
  background: linear-gradient(135deg, #383b53e8, #202332eb 70%, #3e3b58df) !important;
  border-radius: 5px 21px 21px 21px !important;
}
.sully-bubble-user {
  color: #25223f !important;
  background: linear-gradient(120deg, #eee7ff, #bfb3e9 68%, #d8cefa) !important;
  border-color: #f9f5ffd9 !important;
  border-radius: 21px 5px 21px 21px !important;
  box-shadow: inset 0 1px 4px #ffffffa8, 0 0 19px #b69aff26 !important;
}
.sully-bubble-ai::before, .sully-bubble-user::before { content: none !important; }
.sully-bubble-group-last::after {
  content: "✦"; position: absolute; bottom: -8px; right: 9px;
  color: #fff5ff; font: 16px/1 serif; text-shadow: 0 0 8px #a98bff;
  pointer-events: none;
}
.sully-emoji-msg { object-fit: contain; }
.sully-chat-system, .sully-chat-interaction {
  color: #cfc5ea !important; background: #171828b8 !important;
  border: 1px solid #d6c8ff2b !important; border-radius: 12px !important;
}
/* 语音：播放、等待、字幕共用同一套银紫材质。 */
.sully-voice-bar {
  color: #f4efff !important;
  background: linear-gradient(110deg, #34344f, #202236) !important;
  border: 1px solid #ddd2ff8a !important; border-radius: 22px !important;
  box-shadow: inset 0 0 14px #d5c7ff19, 0 0 12px #b9a1ff13 !important;
  min-height: 43px;
}
.sully-voice-bar-button {
  color: #fff !important; background: linear-gradient(140deg, #b4a0f3, #7764bc) !important;
  border: 1px solid #eadfff99; box-shadow: 0 0 11px #b69cf54d !important;
}
.sully-voice-bar-wave-segment { background: #e2d6ff !important; }
.sully-voice-bar-toggle { color: #eee4ff !important; background: #eee4ff1f !important; }
.sully-voice-bar-transcript {
  color: #e4daff !important; background: #1b1c31 !important;
  border: 1px solid #c9b6ff40; border-radius: 12px !important; overflow-wrap: anywhere;
}
/* 转账：状态保留原文字，另以边线区分。 */
.sully-chat-transfer-card, .sully-chat-transfer-receipt {
  color: #f3edff !important;
  background: radial-gradient(ellipse at 105% 105%, #c4aaff65, transparent 60%), linear-gradient(135deg, #57517b, #30364f 55%, #51486d) !important;
  border: 1px solid #e2d5ffb8 !important; border-radius: 22px 6px 22px 6px !important;
  box-shadow: inset 0 0 18px #dfceff21, 0 0 18px #bca3ff24 !important;
  max-width: 100%; overflow-wrap: anywhere;
}
.sully-chat-transfer-card { padding: 18px !important; }
.sully-chat-transfer-header { padding-bottom: 10px; border-bottom: 1px solid #ecdeff30; }
.sully-chat-transfer-brand { color: #f1eaff !important; letter-spacing: .1em; font-size: 11px !important; }
.sully-chat-transfer-icon {
  color: #faf5ff !important; background: #d6c6ff24 !important;
  border: 1px solid #e5d4ff7a; box-shadow: 0 0 15px #baa0ff35;
}
.sully-chat-transfer-watermark { color: #e5d8ff !important; opacity: .14 !important; transform: rotate(-16deg); }
.sully-chat-transfer-amount { color: #fbf6ff !important; font-variant-numeric: tabular-nums; letter-spacing: .02em !important; }
.sully-chat-transfer-card .sully-chat-transfer-amount { font-size: 29px !important; font-weight: 500 !important; margin: 13px 0 9px !important; }
.sully-chat-transfer-note {
  color: #e1d5f5 !important; white-space: normal !important;
  overflow: visible !important; overflow-wrap: anywhere; font-size: 12px !important;
}
.sully-chat-transfer-recipient { color: #dbd0ef !important; }
.sully-chat-transfer-status { color: #fff2ff !important; background: #e2d4ff20 !important; border-radius: 5px !important; }
.sully-chat-transfer-card[data-status="accepted"], .sully-chat-transfer-receipt[data-status="accepted"] { border-color: #bce5df !important; }
.sully-chat-transfer-card[data-status="returned"], .sully-chat-transfer-receipt[data-status="returned"] { border-color: #b5b3c6 !important; background: linear-gradient(135deg, #454458, #292c3e) !important; }
.sully-chat-transfer-overlay { background: #0a0b19bf !important; }
.sully-chat-transfer-dialog { background: #232438 !important; color: #f0eaff !important; border: 1px solid #d3c4ff91; }
.sully-chat-transfer-dialog div, .sully-chat-transfer-dialog span { background: transparent !important; color: inherit !important; }
.sully-chat-transfer-dialog button { background: #3c3b55 !important; color: #f3edff !important; border: 1px solid #d6c7ff70; min-height: 44px; }
.sully-chat-transfer-dialog .sully-chat-transfer-accept { background: linear-gradient(120deg, #d9c7ff, #ac9bdd) !important; color: #231e39 !important; }
/* 心象：保留原有折叠/展开，不覆盖其交互结构。 */
.sully-psyche-card {
  background: linear-gradient(125deg, #24253cf5, #171c2bf5) !important;
  color: #e9e1ff !important; border: 1px solid #d2c4ff6b !important;
  border-radius: 4px 20px 4px 20px !important;
  box-shadow: inset 3px 0 #c6afff80, 0 0 20px #a89ade14 !important;
}
.sully-psyche-title, .sully-psyche-subtitle { color: #d5c3ff !important; letter-spacing: .16em !important; }
.sully-psyche-preview, .sully-psyche-body { color: #ddd4f1 !important; line-height: 1.9 !important; overflow-wrap: anywhere; }
/* 用户要求全套 card：所有已开放种类统一外壳。HTML 沙盒内容保持自身样式。 */
.sully-chat-card[data-card-kind] {
  --sully-card-background: linear-gradient(135deg, #32344beF, #1d2235f5);
  --sully-card-color: #ece5ff;
  --sully-card-border: 1px solid #ddd0ff80;
  --sully-card-radius: 18px 5px 18px 5px;
  --sully-card-shadow: inset 0 1px 0 #fff2, 0 6px 22px #0002;
}
.sully-chat-card[data-card-kind] .sully-chat-card-surface { overflow: visible; }
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(div,section,article,header,footer,button,a,p,span,h2,h3,h4,h5,small,strong,b,label,li,blockquote,details,summary,pre) {
  background-color: transparent !important; background-image: none !important;
  color: #e6dff6 !important; border-color: #d1c0f43b !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-qr-surface {
  background-color: #ffffff !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-meter-fill {
  background-color: #c9b1bd !important;
}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(h2,h3,h4,h5,strong,b) { color: #fff4ff !important; }
.sully-chat-card[data-card-kind] .sully-chat-card-content button {
  border-radius: 9px !important;
}
.sully-chat-card[data-card-kind="transfer"] { --sully-card-background: transparent; --sully-card-border: 0; --sully-card-shadow: none; }
.sully-chat-card[data-card-kind="transfer"] .sully-chat-card-surface { overflow: visible; }
.sully-chat-card[data-card-kind="music_card"] { --sully-card-background: linear-gradient(125deg, #514567, #23263f 70%); }
.sully-chat-card[data-card-kind="score_card"] { --sully-card-background: linear-gradient(120deg, #34344a, #49405d); }
.sully-chat-card[data-card-kind="world_card"], .sully-chat-card[data-card-kind="vr_card"] { --sully-card-background: radial-gradient(ellipse at top right, #71729270, transparent), #202737; }
.sully-collaboration-file { color: #f2ebff !important; background: transparent !important; border-color: #d2c3ff70 !important; border-radius: 16px !important; }
.sully-collaboration-file-icon { color: #d9c6ff !important; }
.sully-collaboration-file-name { color: #f6efff !important; overflow-wrap: anywhere; }
.sully-collaboration-file-detail, .sully-collaboration-file-meta { color: #bdb3d6 !important; }
.sully-collaboration-file-action { color: #f3eaff !important; border: 1px solid #c9b2ff66; border-radius: 9px; }
.sully-schedule-change { color: #e7dcff !important; background: #2c2b42 !important; border: 1px solid #d5c2ff6b !important; }
/* 输入区保留应用的 safe-bottom，不固定高度、不盖住功能面板。 */
.sully-chat-inputbar { color: #e9e2ff !important; background: linear-gradient(0deg, #25273bf5, #171b2df5) !important; border-top: 1px solid #ded2ff45 !important; }
.sully-chat-composer { gap: 8px !important; }
.sully-chat-input-wrap {
  background: #d5c6ff0e !important; border: 1px solid #e2d5ff75 !important;
  border-radius: 25px !important; box-shadow: inset 0 0 14px #bbafff12 !important;
}
.sully-chat-textarea { color: #f0e9ff !important; background: transparent !important; font-size: 16px !important; caret-color: #dccbff; }
.sully-chat-textarea::placeholder { color: #afa6c9 !important; }
.sully-chat-actions-button { color: #ede4ff !important; background: #b6a2eb14 !important; border: 1px solid #d3c2ff73 !important; border-radius: 50% !important; }
.sully-chat-send-button {
  color: #fffaff !important; background: linear-gradient(135deg, #c0b0f0, #7866b8) !important;
  border: 1px solid #e1d6ffbf !important; box-shadow: inset 0 0 9px #fff4, 0 0 17px #aa8eff52 !important;
}
.sully-chat-panel, .sully-chat-emoji-suggestions, .sully-chat-auto-reply { background: #242638 !important; color: #e7def7 !important; border-color: #c1addc4d !important; }
.sully-chat-panel button:not(:where(.sully-chat-page-dot, .sully-chat-bubble-danger)) { color: #e7def7 !important; background: #d3c3ff12 !important; border-color: #d3c3ff40 !important; }
.sully-chat-panel button div:not(.sully-chat-badge-dot), .sully-chat-panel button span:not(.sully-chat-swatch-dot):not(.sully-chat-badge-dot) { color: inherit !important; background-color: transparent !important; }
.sully-chat-panel .sully-chat-bubble-search { color: #e7def7 !important; background: #191b2b !important; border-color: #d3c3ff40 !important; }
.sully-chat-panel .sully-chat-bubble-search::placeholder { color: #9c92b8 !important; }
.sully-chat-panel .sully-chat-bubble-pill { background: #d3c3ff12 !important; border-color: #d3c3ff40 !important; color: #e7def7 !important; }
.sully-chat-panel .sully-chat-bubble-pill button:not(:where(.sully-chat-bubble-danger)) { color: inherit !important; background: transparent !important; border-color: transparent !important; }
.sully-chat-panel .sully-chat-bubble-pill[data-active="true"], .sully-chat-panel .sully-chat-bubble-chip[data-active="true"] { background: #6d5aa8 !important; border-color: #cbb8ff !important; color: #ffffff !important; }
.sully-chat-panel .sully-chat-bubble-danger { background: #dc2626 !important; color: #ffffff !important; border-color: #f87171 !important; }
.sully-chat-panel .sully-chat-page-dot { background: #d3c3ff40 !important; border: 0 !important; padding: 0 !important; }
.sully-chat-panel .sully-chat-page-dot[data-active="true"] { background: #dccbff !important; }
.sully-chat-root :is(button,a,textarea):focus-visible { outline: 2px solid #e4d1ff !important; outline-offset: 3px; }
.sully-chat-send-button, .sully-chat-actions-button, .sully-chat-transfer-card { transition: transform .18s ease, box-shadow .18s ease !important; }
@media (hover:hover) {
  .sully-chat-send-button:hover, .sully-chat-actions-button:hover { transform: translateY(-2px); }
  .sully-chat-transfer-card:hover { transform: translateY(-2px); box-shadow: inset 0 0 18px #dfceff21, 0 0 24px #bca3ff45 !important; }
}
@media (prefers-reduced-motion:reduce) {
  .sully-chat-root :is(button,a), .sully-chat-transfer-card, .sully-voice-bar-wave-segment { animation: none !important; transition: none !important; }
}

/* SECOND CONTACT — 非对称轨道通讯舱。 */
.sully-chat-root {
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='430' height='860' viewBox='0 0 430 860'%3E%3Cg fill='none' stroke='%23c9b7fc' stroke-opacity='.22'%3E%3Cellipse cx='378' cy='358' rx='103' ry='346' transform='rotate(32 378 358)'/%3E%3Cellipse cx='378' cy='358' rx='113' ry='358' transform='rotate(32 378 358)'/%3E%3Cpath d='M16 0V860M414 0V860M0 718H430' stroke-dasharray='2 9'/%3E%3C/g%3E%3Cg fill='%23e7d6ff' fill-opacity='.5'%3E%3Cpath d='M337 87l3 16 15 3-15 3-3 16-3-16-15-3 15-3zM47 641l2 11 11 2-11 2-2 11-2-11-11-2 11-2z'/%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(ellipse at 104% 52%, #b6a1f340, transparent 48%),
    radial-gradient(ellipse at -5% 89%, #76679a4d, transparent 42%),
    linear-gradient(148deg, #0d0e17, #202031 75%, #171822) !important;
  background-size: 100% auto, auto, auto, auto !important;
}
.sully-chat-header {
  position: relative !important; isolation: isolate;
  padding-top: calc(var(--safe-top, 0px) + 86px) !important;
  padding-bottom: 24px !important;
  background: linear-gradient(165deg, #c7b8e51a, #0d0e19d9 72%) !important;
  border-bottom: 1px solid #ddd3ec9c !important;
  border-radius: 0 0 34px 0 !important;
}
.sully-chat-header::before {
  content: "Acid Orbit"; position: absolute; left: 19px;
  top: calc(var(--safe-top, 0px) + 8px); right: 12px; height: 69px;
  color: #e5ddf1; font: italic 55px/.98 Georgia, "Times New Roman", serif;
  letter-spacing: -4px; padding: 3px 0 10px;
  border-bottom: 1px solid #d5c4ee42;
  text-shadow: 1px 1px #17131f, -1px -1px #fff8, 0 0 28px #b497ff40;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='116' height='72' viewBox='0 0 116 72'%3E%3Cg fill='none' stroke='%23dfd5f6'%3E%3Cellipse cx='61' cy='36' rx='52' ry='15' transform='rotate(-32 61 36)'/%3E%3Cellipse cx='61' cy='36' rx='25' ry='30' transform='rotate(28 61 36)'/%3E%3C/g%3E%3Cpath fill='%23f7edff' d='M61 9l4 22 20 5-20 4-4 24-4-24-20-4 20-5z'/%3E%3C/svg%3E") right center/100px 64px no-repeat;
  pointer-events: none;
}
.sully-chat-header::after { content: "◈  PRIVATE LINK     /     ACID ORBIT"; left: 20px; font-size: 7px; letter-spacing: .26em; }
.sully-chat-name { font-size: 18px !important; letter-spacing: .15em; }
.sully-chat-back, .sully-chat-trigger { border-radius: 3px 12px 3px 12px !important; }
.sully-chat-buffs button { border-radius: 2px !important; }
/* 与气泡实际顶边严格对齐，覆盖布局微调中的 top:-.5rem。 */
.sully-chat-root .sully-chat-message-ai > .sully-chat-message-avatar-slot,
.sully-chat-root .sully-chat-message-user > .sully-chat-message-avatar-slot {
  top: 0 !important; bottom: auto !important; transform: none !important;
}
.sully-chat-avatar-wrap::before {
  content: ""; position: absolute; inset: -4px;
  border: 1px solid #cbb9e67d; border-radius: 4px 13px 4px 13px;
  transform: rotate(-9deg); pointer-events: none;
}
.sully-chat-avatar-wrap::after { content: "+"; bottom: -5px; right: -6px; font: 16px/1 monospace; }
.sully-chat-message-avatar-img { border-radius: 3px 10px 3px 10px !important; }
.sully-chat-message-content { overflow: visible; }
.sully-bubble-ai, .sully-bubble-user { padding: 13px 16px !important; border-width: 1px !important; }
.sully-bubble-ai {
  border-radius: 0 22px 3px 16px !important;
  border-color: #ded3f79e !important;
  background: linear-gradient(113deg, #b7a6d02b, #222332e8 37%, #393343df) !important;
  box-shadow: inset 3px 0 #e1d5f73d, inset 0 1px #fff3, 5px 5px 0 #b19ad410 !important;
}
.sully-bubble-user {
  border-radius: 22px 0 16px 3px !important;
  background: linear-gradient(112deg, #f0e8f7, #bfacd9 60%, #e9ddf5 100%) !important;
  box-shadow: inset -3px 0 #fff8, 4px 4px 0 #c7afe520 !important;
}
.sully-bubble-group-last::after {
  content: "✳"; right: -7px; bottom: -10px; font-size: 23px;
  color: #e8d9ff; text-shadow: 1px 1px #5c4777, 0 0 11px #af8ae3;
}
.sully-voice-bar { border-radius: 2px 20px 2px 20px !important; box-shadow: 3px 3px 0 #c4a8e62b !important; }
.sully-chat-message:not(:has(.sully-bubble-ai, .sully-bubble-user)) .sully-voice-bar-shell { margin-top: 0 !important; }
.sully-voice-bar-wave-segment { min-height: 3px; }
/* 银紫票券：信息在左，切割轨道和微型印字留在右侧。 */
.sully-chat-transfer-card {
  border-radius: 2px 26px 2px 26px !important;
  padding: 17px 18px 15px !important;
  background:
    repeating-linear-gradient(90deg, #ddd0f529 0 1px, transparent 1px 4px) right 15px bottom 15px/32px 20px no-repeat,
    radial-gradient(ellipse at 106% 9%, #efdeff70, transparent 52%),
    linear-gradient(122deg, #73647e, #343240 53%, #9985ad) !important;
  border-color: #f3e1ffba !important;
  box-shadow: inset 0 1px #fff8, 5px 5px 0 #100f19, 6px 6px 0 #d1bcea70 !important;
}
.sully-chat-transfer-card::before {
  content: ""; position: absolute; width: 150px; height: 60px;
  right: -45px; top: 25px; transform: rotate(-50deg);
  border: 1px solid #f1dcff66; border-radius: 50%;
  box-shadow: 0 0 0 7px #d6baec12, 0 0 0 8px #ebd2ff36; pointer-events: none;
}
.sully-chat-transfer-card::after {
  content: "ORBIT / TRANSFER"; display: block; margin-top: 14px; padding-top: 8px;
  border-top: 1px dashed #ecd9fc77; color: #e5d5f0;
  font: 7px/1.4 ui-monospace, monospace; letter-spacing: .18em; pointer-events: none;
}
.sully-chat-transfer-card .sully-chat-transfer-amount { font: 36px/1.2 Georgia,serif !important; letter-spacing: -1px !important; }
.sully-chat-transfer-header { border-bottom-style: dashed; }
.sully-chat-transfer-icon { border-radius: 2px 9px 2px 9px !important; }
.sully-chat-transfer-watermark { opacity: .09 !important; }
.sully-chat-transfer-status { padding: 2px 7px !important; border: 1px solid #ede0ff66; border-radius: 0 !important; }
.sully-chat-transfer-receipt { border-radius: 2px 14px 2px 14px !important; border-left-width: 3px !important; }
.sully-psyche-card { border-radius: 0 25px 0 15px !important; border-left: 3px double #e2c7ff !important; }
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-radius: 2px 23px 2px 14px;
  --sully-card-border: 1px solid #dac4eb96;
  --sully-card-shadow: 4px 4px 0 #100f19, 5px 5px 0 #baa2d03d;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface { border-top: 3px double #dcc9eb99; }
.sully-chat-inputbar { border-radius: 24px 0 0 0; border-top: 1px solid #dfc9f394 !important; background: linear-gradient(105deg,#383040f5,#151622fa) !important; }
.sully-chat-input-wrap { border-radius: 2px 18px 2px 18px !important; border-bottom: 3px double #d9c6ef99 !important; }
.sully-chat-actions-button, .sully-chat-send-button { border-radius: 3px 13px 3px 13px !important; }
.sully-chat-send-button { background: linear-gradient(135deg,#ece1fa,#ad92ce 55%,#635279) !important; box-shadow: 3px 3px 0 #a58cbd36 !important; }
/* 日程修改回执：明确覆盖默认浅色主题的每个文字层。 */
.sully-schedule-change {
  color: #f3edff !important; background: #252335 !important;
  border: 1px solid #d6c2ef !important; border-radius: 2px 20px 2px 16px !important;
  box-shadow: 0 10px 30px #08071180, inset 3px 0 #c4a9e6 !important;
  padding: 13px !important;
}
.sully-schedule-change-kicker { color: #f3edff !important; font-size: 12px !important; }
.sully-schedule-change-count { color: #d1c5e0 !important; font-size: 11px !important; }
.sully-schedule-change-mark { color: #241d32 !important; background: #d8c2f2 !important; border-radius: 2px 8px 2px 8px !important; }
.sully-schedule-change-row {
  background: #363145 !important; border: 1px solid #b89ecb40;
  border-radius: 3px 10px 3px 10px !important;
  grid-template-columns: 42px minmax(0,1fr) 14px minmax(0,1.15fr) !important;
  padding: 8px 7px !important;
}
.sully-schedule-change-time { color: #e2cafa !important; font-size: 11px !important; font-variant-numeric: tabular-nums; }
.sully-schedule-change-before { color: #c5b9d3 !important; text-decoration-color: #b4a2c7 !important; }
.sully-schedule-change-arrow { color: #dec4fa !important; }
.sully-schedule-change-after { color: #fff4ff !important; font-weight: 700 !important; }
.sully-schedule-change-before, .sully-schedule-change-after {
  font-size: 12px !important; line-height: 1.65 !important;
  white-space: normal !important; overflow-wrap: anywhere; overflow: visible !important;
}
.sully-schedule-change-shine { display: none !important; }

/* 参考图版：无英文顶栏，圆润玻璃与蓝紫星云。 */
.sully-chat-root {
  background-color: #111522 !important;
  background-image:
    radial-gradient(ellipse at 64% 38%, #d1b6d16b, transparent 23%),
    radial-gradient(ellipse at 72% 26%, #8295f075, transparent 29%),
    radial-gradient(ellipse at 50% 64%, #758cdc63, transparent 28%),
    radial-gradient(ellipse at 12% 108%, #b5c0ff96, transparent 38%),
    radial-gradient(ellipse at 108% 88%, #cbb4dc96, transparent 29%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='290'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23aab8e9' opacity='.16' filter='url(%23n)' d='M0 0h240v290H0z'/%3E%3Cg fill='%23e9e4ff'%3E%3Ccircle cx='19' cy='36' r='.65'/%3E%3Ccircle cx='137' cy='84' r='.55'/%3E%3Ccircle cx='204' cy='237' r='.9'/%3E%3Ccircle cx='92' cy='179' r='.7'/%3E%3Ccircle cx='38' cy='252' r='.45'/%3E%3Cpath opacity='.65' d='M193 39l1 6 6 1-6 1-1 6-1-6-6-1 6-1z'/%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(145deg,#10131e,#181d30 68%,#222d48) !important;
  background-size: auto,auto,auto,auto,auto,240px 290px,auto !important;
}
.sully-chat-header {
  padding-top: calc(var(--safe-top, 0px) + 17px) !important;
  padding-bottom: 17px !important;
  background: linear-gradient(120deg,#151929e8,#393e678c) !important;
  border: 1px solid #c8beff80 !important; border-top: 0 !important;
  border-radius: 0 0 25px 25px !important;
  box-shadow: inset 0 -1px 1px #e3d8ff73,0 4px 16px #a58bfc1c !important;
}
.sully-chat-header::before, .sully-chat-header::after { content: none !important; }
.sully-chat-name { color:#f4edff !important; font-size:20px !important; letter-spacing:.025em !important; }
.sully-chat-name::after { content:" ✦"; color:#e4d5ff; text-shadow:0 0 10px #c2a8ff; pointer-events:none; }
.sully-chat-avatar { width:48px !important; height:48px !important; border-radius:50% !important; border:1px solid #e0d4ffbd !important; box-shadow:0 0 16px #c9b1ff36 !important; }
.sully-chat-back, .sully-chat-trigger {
  border-radius:50% !important; background:#a8a4da12 !important;
  border:1px solid #c7baff55 !important; box-shadow:inset 0 1px #fff1 !important;
  min-width:36px; min-height:36px;
}
.sully-chat-buffs button { border-radius:12px !important; background:#bcb0ef0f !important; border:1px solid #c0b3ed36 !important; }
.sully-chat-avatar-wrap::before { content:none !important; }
.sully-chat-avatar-wrap::after { content:none !important; }
.sully-chat-message-avatar-img { border-radius:50% !important; border:1px solid #dcd1ffb3 !important; box-shadow:0 0 11px #bba8f636 !important; }
.sully-bubble-ai,.sully-bubble-user {
  padding:12px 15px !important; border-radius:20px !important;
  border:1px solid #e2dbff99 !important;
  box-shadow:inset 0 1px 5px #f1eaff30,0 0 14px #b7a5e920 !important;
}
.sully-bubble-ai { background:linear-gradient(135deg,#252b3dda,#4b507aa8) !important; color:#f3efff !important; border-top-left-radius:5px !important; }
.sully-bubble-user { background:linear-gradient(125deg,#eee6ffed,#b6ade2eb) !important; color:#282641 !important; border-top-right-radius:5px !important; box-shadow:inset 0 1px 6px #fff8,0 0 16px #c4adff4d !important; }
.sully-bubble-group-last::after { content:"✦"; right:-5px; bottom:-7px; color:#fff3ff; font:21px/1 serif; text-shadow:0 0 8px #dac1ff; }
.sully-voice-bar { border-radius:26px !important; background:linear-gradient(120deg,#2e3451df,#7a79b291) !important; border:1px solid #ded4ffae !important; box-shadow:inset 0 0 12px #dad0ff29,0 0 12px #a998ff24 !important; }
.sully-voice-bar-button { width:32px !important;height:32px !important; border-radius:50% !important; background:linear-gradient(140deg,#9e99e8,#6352a5) !important; }
.sully-chat-transfer-card { border-radius:22px !important; background:linear-gradient(130deg,#434b77df,#9e94c399) !important; box-shadow:inset 0 0 18px #dacfff33,0 0 14px #b49afa2e !important; }
.sully-chat-transfer-card::before,.sully-chat-transfer-card::after { content:none !important; }
.sully-chat-transfer-header { border-bottom-style:solid; }
.sully-chat-transfer-card .sully-chat-transfer-amount { font:500 29px/1.3 system-ui,sans-serif !important; letter-spacing:0 !important; }
.sully-chat-transfer-icon { border-radius:50% !important; }
.sully-chat-transfer-receipt,.sully-psyche-card { border-radius:18px !important; border-left-width:1px !important; }
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-background:linear-gradient(125deg,#303850df,#646b9896);
  --sully-card-radius:22px; --sully-card-border:1px solid #d5cbffaa;
  --sully-card-shadow:inset 0 0 16px #dfd4ff26,0 0 14px #baacf024;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface { border-top:1px solid #d5cbffaa !important; }
.sully-chat-inputbar {
  background:linear-gradient(120deg,#1e263bdc,#666ca98c) !important;
  border:1px solid #cfc6ff85 !important;
  border-radius:30px 30px 0 0 !important;
  box-shadow:inset 0 1px 1px #ffffff24,0 -3px 20px #c4b7ff16 !important;
}
.sully-chat-composer { padding:10px !important; gap:8px !important; align-items:flex-end !important; }
.sully-chat-input-wrap { border:1px solid #c6beed75 !important; border-radius:26px !important; background:#b0b8ef0b !important; box-shadow:inset 0 0 12px #a5b2e916 !important; }
.sully-chat-textarea { padding:10px 12px !important; line-height:24px !important; }
.sully-chat-input-wrap button { color:#c9c4ec !important; }
.sully-chat-actions-button,.sully-chat-send-button { border-radius:50% !important; width:44px !important;height:44px !important; min-width:44px;min-height:44px; }
.sully-chat-actions-button { background:#24294088 !important; border:1px solid #cfc3ff8a !important; }
.sully-chat-send-button { background:linear-gradient(135deg,#b6b0f5,#7975c6) !important; border:1px solid #efe5ffd4 !important; box-shadow:inset 0 0 9px #fff5,0 0 18px #bba3ff60 !important; }

/* 居中肖像顶栏：角色成为视觉中心，两侧保留真实操作。 */
.sully-chat-header {
  padding-top:calc(var(--safe-top,0px) + 15px) !important;
  padding-bottom:15px !important;
  border-radius:0 0 34px 34px !important;
  background:radial-gradient(ellipse at 50% 12%,#b1a2f530,transparent 64%),linear-gradient(115deg,#171c30e8,#292e4ae0) !important;
}
.sully-chat-header .sully-chat-avatar {
  width:44px !important;height:44px !important;
  border:2px solid #e7dcffbd !important;
  box-shadow:0 0 0 4px #c1b0f317,0 0 0 5px #cfc2ff40,0 0 22px #b29cf64a !important;
  margin-bottom:5px;
}
.sully-chat-header .sully-chat-name {
  font-size:18px !important;line-height:1.5 !important;
  letter-spacing:.12em !important; max-width:100%; overflow-wrap:anywhere;
}
.sully-chat-header .sully-chat-name::before { content:"✧ ";font-size:12px;color:#c9b9f1; }
.sully-chat-header .sully-chat-name::after { content:" ✧";font-size:12px;color:#c9b9f1; }
.sully-chat-header .sully-chat-status { font-size:10px !important;line-height:1.6 !important; }
.sully-chat-header .sully-chat-back,.sully-chat-header .sully-chat-trigger {
  top:12px !important;bottom:auto !important;
  width:38px;height:38px;min-width:38px;min-height:38px;
  border-color:#c6b9ef45 !important;background:#ccc1f20a !important;
}
.sully-chat-header .sully-chat-token { font-size:8px !important;padding:2px 5px !important;border-radius:9px !important; }
.sully-chat-header .sully-chat-buffs { margin-top:3px; }
.sully-chat-header .sully-chat-buffs button { padding:4px 7px !important; }
.sully-chat-header::after {
  content:"◇" !important;position:absolute;left:50%;right:auto;top:auto;bottom:-8px;
  transform:translateX(-50%);color:#e4d4ff;font:14px/1 serif;
  text-shadow:0 0 8px #c1a6ff;pointer-events:none;
}

/* 横向角色名片：右侧整幅肖像、左侧信息与逐行情绪。 */
.sully-chat-header {
  isolation:isolate; min-height:166px !important;
  padding:calc(var(--safe-top,0px) + 20px) 39% 20px 58px !important;
  border-radius:0 0 23px 23px !important;
  background:linear-gradient(100deg,#171b2ff5 0%,#303653eb 52%,#8e85bda8 100%) !important;
  box-shadow:inset 0 -1px #e0d3ff66,0 5px 22px #090d2226 !important;
}
.sully-chat-header::before,.sully-chat-header::after { content:none !important; }
.sully-chat-header .sully-chat-avatar {
  position:absolute !important; top:var(--safe-top,0px) !important;right:0 !important;
  width:46% !important;height:calc(100% - var(--safe-top,0px)) !important;
  object-fit:cover !important;object-position:50% 35% !important;
  border:0 !important;border-radius:0 0 23px 0 !important;
  margin:0 !important;box-shadow:none !important;opacity:.83;z-index:-1;
  mask-image:linear-gradient(90deg,transparent,#000 42%);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 42%);
}
.sully-chat-header .sully-chat-info { position:relative;z-index:1;width:100%; }
.sully-chat-header .sully-chat-name {
  text-align:left !important;font-size:20px !important;letter-spacing:.06em !important;
  line-height:1.4 !important;margin:0 0 5px !important;
  text-shadow:0 1px 8px #11182a8c;
}
.sully-chat-header .sully-chat-name::before,.sully-chat-header .sully-chat-name::after { content:none !important; }
.sully-chat-header .sully-chat-status { justify-content:flex-start !important;gap:7px !important; }
.sully-chat-header .sully-chat-back {
  position:absolute !important;left:12px !important;right:auto !important;
  top:calc(var(--safe-top,0px) + 18px) !important;bottom:auto !important;
  margin:0 !important;border:0 !important;background:transparent !important;box-shadow:none !important;
  width:38px;height:38px;z-index:2;
}
.sully-chat-header .sully-chat-trigger {
  position:absolute !important;right:13px !important;left:auto !important;
  top:auto !important;bottom:13px !important;margin:0 !important;
  background:#242b4799 !important;border:1px solid #e0d1ff70 !important;z-index:2;
}
.sully-chat-header .sully-chat-buffs { margin-top:10px !important; }
.sully-chat-header .sully-chat-buffs > div:not([aria-hidden]) {
  display:flex !important;flex-direction:column !important;align-items:stretch !important;
  gap:0 !important;white-space:normal !important;overflow:visible !important;padding:0 !important;
}
.sully-chat-header .sully-chat-buffs button {
  display:block !important;width:100% !important;max-width:100% !important;
  text-align:left !important;white-space:normal !important;overflow-wrap:anywhere;
  padding:7px 0 !important;font-size:10px !important;line-height:1.35 !important;
  font-weight:500 !important;letter-spacing:.03em;
  color:#e4ddf7 !important;background:transparent !important;
  border:0 !important;border-top:1px solid #d8c9ff33 !important;border-radius:0 !important;
  box-shadow:none !important;
}

/* 紧凑角色状态栏：两侧留空，肖像仅占右端一小片。 */
.sully-chat-header {
  width:calc(100% - 28px) !important;max-width:380px !important;
  margin:calc(var(--safe-top,0px) + 9px) auto 6px !important;
  min-height:0 !important;padding:10px 92px 10px 40px !important;
  border:1px solid #c9bcf877 !important;border-radius:8px 20px 8px 14px !important;
  background:linear-gradient(105deg,#171e32ed,#303959e6 65%,#8277b195) !important;
}
.sully-chat-header .sully-chat-avatar {
  top:0 !important;right:0 !important;width:108px !important;height:100% !important;
  border-radius:0 19px 7px 0 !important;object-position:50% 38% !important;
  opacity:.7;mask-image:linear-gradient(90deg,transparent,#000 54%);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 54%);
}
.sully-chat-header .sully-chat-name {
  font-size:15px !important;line-height:1.25 !important;margin:0 0 3px !important;
  letter-spacing:.04em !important;
}
.sully-chat-header .sully-chat-status { font-size:9px !important;line-height:1.2 !important;gap:5px !important; }
.sully-chat-header .sully-chat-back {
  top:8px !important;left:4px !important;width:32px !important;height:32px !important;
  min-width:32px !important;min-height:32px !important;padding:6px !important;
}
.sully-chat-header .sully-chat-trigger {
  right:7px !important;bottom:7px !important;width:28px !important;height:28px !important;
  min-width:28px !important;min-height:28px !important;padding:5px !important;
  border-radius:5px 10px 5px 10px !important;
}
.sully-chat-header .sully-chat-buffs { margin-top:4px !important; }
.sully-chat-header .sully-chat-buffs > div:not([aria-hidden]) { flex-direction:row !important;flex-wrap:wrap !important;gap:3px 8px !important; }
.sully-chat-header .sully-chat-buffs button {
  width:auto !important;max-width:100% !important;padding:2px 0 2px 5px !important;
  font-size:8px !important;line-height:1.2 !important;border-top:0 !important;
  border-left:2px solid #c3b0fa80 !important;
}
.sully-chat-header::after {
  content:"" !important;position:absolute;left:40px;right:92px;bottom:-1px;top:auto;
  width:auto;height:2px;transform:none;background:linear-gradient(90deg,#cfbfff,transparent);
  border:0;box-shadow:0 0 6px #bd9eff55;pointer-events:none;
}
/* ACID GOTHIC LACE */
/* Scallop2 adaptation. Scallop2 — CC0 / Public Domain. Source: https://freesvg.org/scallop2 ; supplied SVG preserved in scallop2-source.svg. */
.sully-chat-inputbar {
  margin-top:20px !important;border-radius:0 !important;
  border-top:1px solid #cbb7ec80 !important;
  background:linear-gradient(120deg,#191728f5,#35334ded) !important;
}
.sully-chat-inputbar::before {
  content:"" !important;position:absolute;left:0;right:0;top:-20px;height:20px;
  background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22601.40625%22%20height%3D%2265.03125%22%20viewBox%3D%22128.6875%20738.03125%20601.40625%2065.03125%22%3E%3C!--%20Scallop2%20%E2%80%94%20CC0%20%2F%20Public%20Domain.%20Source%3A%20https%3A%2F%2Ffreesvg.org%2Fscallop2%20%3B%20supplied%20SVG%20preserved%20in%20scallop2-source.svg.%20--%3E%3Cpath%20fill%3D%22%23e9e0f2%22%20d%3D%22m%20128.6875%2C803.0625%200%2C-85.03125%20601.40625%2C0%200%2C85.03125%20c%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52982%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06662%2C-3.59607%20-4.125%2C-5.625%20-1.05838%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70902%2C6.709%20-16.52305%2C8.42343%20-24.8125%2C5.125%20-3.52976%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28942%2C3.29843%20-18.10361%2C1.584%20-24.8125%2C-5.125%20-1.7038%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70906%2C6.709%20-16.52303%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66937%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.65774%2C-5.74516%20-21.1875%2C-13.9375%20-8.28947%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70901%2C6.709%20-16.52308%2C8.42343%20-24.8125%2C5.125%20-3.52981%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28941%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09788%2C-3.59607%20-4.15625%2C-5.625%20-1.05832%2C2.02865%20-2.42142%2C3.92144%20-4.125%2C5.625%20-6.70907%2C6.709%20-16.52302%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48689%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28947%2C3.29843%20-18.13481%2C1.584%20-24.84375%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52981%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20z%20m%200%2C-13.78125%20c%205.11121%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%20z%20m%20100.25%2C0%20c%205.1112%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.28125%2C12.5762%20-9.28125%2C17.6875%200%2C5.11133%204.16992%2C9.25%209.28125%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%200%2C-26.9375%20c%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20M%20158.375%2C776.96875%20c%202.36848%2C0%204.75526%2C-0.91162%206.5625%2C-2.71875%203.61425%2C-3.6142%203.61425%2C-9.44825%200%2C-13.0625%20-3.6143%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35444%2C15.41699%205.96875%2C19.03125%201.80718%2C1.80712%204.16271%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36861%2C0%204.72407%2C-0.91163%206.53125%2C-2.71875%203.61418%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44826%2C2.35451%20-19.0625%2C5.96875%20-3.61431%2C3.61425%20-3.61431%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36843%2C0%204.72406%2C-0.91162%206.53125%2C-2.71875%203.6143%2C-3.6142%203.6143%2C-9.44825%200%2C-13.0625%20-3.61425%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.3232%2C15.41699%205.9375%2C19.03125%201.80719%2C1.80712%204.1939%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.72401%2C-0.91163%206.53125%2C-2.71875%203.61413%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.41694%2C2.35451%20-19.03125%2C5.96875%20-3.61424%2C3.61425%20-3.61424%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.16283%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35451%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36855%2C0%204.75532%2C-0.91163%206.5625%2C-2.71875%203.61419%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44825%2C2.35451%20-19.0625%2C5.96875%20-3.6143%2C3.61425%20-3.6143%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.16277%2C2.71875%206.53125%2C2.71875%20z%20m%2059.40625%2C0%20c%202.36842%2C0%204.72407%2C-0.91162%206.53125%2C-2.71875%203.61431%2C-3.6142%203.61431%2C-9.44825%200%2C-13.0625%20-3.61424%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.32319%2C15.41699%205.9375%2C19.03125%201.80718%2C1.80712%204.19389%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.724%2C-0.91163%206.53125%2C-2.71875%203.61412%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.4482%2C2.35451%20-19.0625%2C5.96875%20-3.61425%2C3.61425%20-3.61425%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36845%2C0%204.72405%2C-0.91162%206.53125%2C-2.71875%203.61428%2C-3.6142%203.61428%2C-9.44825%200%2C-13.0625%20-3.61427%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.35447%2C15.41699%205.96875%2C19.03125%201.8072%2C1.80712%204.16267%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36859%2C0%204.7553%2C-0.91163%206.5625%2C-2.71875%203.61414%2C-3.61426%205.9375%2C-19.03125%205.9375%2C-19.03125%200%2C0%20-15.41697%2C2.35451%20-19.03125%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.1628%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35445%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36859%2C0%204.72405%2C-0.91163%206.53125%2C-2.71875%203.61414%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44822%2C2.35451%20-19.0625%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.19405%2C2.71875%206.5625%2C2.71875%20z%22%2F%3E%3C%2Fsvg%3E") center bottom/185px 20px repeat-x;
  pointer-events:none;transform:scaleY(-1);filter:drop-shadow(0 1px 0 #b4a0d48c);
}
.sully-chat-input-wrap {border-color:#bda5db80 !important;background:#c1b0e00b !important;}
.sully-chat-header {
  width:100% !important;max-width:none !important;
  margin:0 !important;
  margin-bottom:24px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 10px) !important;
  border:0 !important;border-bottom:1px solid #c9bcf877 !important;
  border-radius:0 !important;overflow:visible !important;
  box-shadow:inset 0 -1px #e0d3ff33 !important;
}
.sully-chat-header .sully-chat-avatar {
  top:10px !important;right:44px !important;width:68px !important;height:58px !important;
  border-radius:8px !important;opacity:1 !important;z-index:0;
  mask-image:none !important;-webkit-mask-image:none !important;
  clip-path:polygon(14% 0,100% 0,86% 100%,0 100%);
  object-position:50% 30% !important;
}
.sully-chat-header {padding-right:122px !important;background:linear-gradient(105deg,#171e32f5,#333950ec 65%,#79729fbd) !important;}
.sully-chat-header::before {
  content:"" !important;position:absolute;top:8px;right:43px;left:auto;
  width:66px;height:62px;padding:0;border:1px solid #d9c5ff9c;border-radius:8px;
  transform:skewX(-9deg);background:#d3c2ff12;box-shadow:0 0 12px #c9b0ff24;
  pointer-events:none;
}
.sully-chat-header .sully-chat-trigger {
  top:25px !important;bottom:auto !important;right:7px !important;
  border-radius:8px !important;background:#cbb5ff12 !important;
}
.sully-chat-header .sully-chat-back {top:calc(var(--chrome-top,var(--safe-top,0px)) + 8px) !important;}
.sully-chat-header::after {
  content:"" !important;position:absolute;
  left:0 !important;right:0 !important;top:auto !important;bottom:-20px !important;
  width:auto !important;height:20px !important;
  transform:none !important;border:0 !important;box-shadow:none !important;
  background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22601.40625%22%20height%3D%2265.03125%22%20viewBox%3D%22128.6875%20738.03125%20601.40625%2065.03125%22%3E%3C!--%20Scallop2%20%E2%80%94%20CC0%20%2F%20Public%20Domain.%20Source%3A%20https%3A%2F%2Ffreesvg.org%2Fscallop2%20%3B%20supplied%20SVG%20preserved%20in%20scallop2-source.svg.%20--%3E%3Cpath%20fill%3D%22%23e9e0f2%22%20d%3D%22m%20128.6875%2C803.0625%200%2C-85.03125%20601.40625%2C0%200%2C85.03125%20c%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52982%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48684%2C0%20-17.62648%2C-5.74516%20-21.15625%2C-13.9375%20-8.28945%2C3.29843%20-18.1036%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06662%2C-3.59607%20-4.125%2C-5.625%20-1.05838%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70902%2C6.709%20-16.52305%2C8.42343%20-24.8125%2C5.125%20-3.52976%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28942%2C3.29843%20-18.10361%2C1.584%20-24.8125%2C-5.125%20-1.7038%2C-1.70377%20-3.09787%2C-3.59607%20-4.15625%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70906%2C6.709%20-16.52303%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66937%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.65774%2C-5.74516%20-21.1875%2C-13.9375%20-8.28947%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.45246%2C3.92123%20-4.15625%2C5.625%20-6.70901%2C6.709%20-16.52308%2C8.42343%20-24.8125%2C5.125%20-3.52981%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48682%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28941%2C3.29843%20-18.10362%2C1.584%20-24.8125%2C-5.125%20-1.70379%2C-1.70377%20-3.09788%2C-3.59607%20-4.15625%2C-5.625%20-1.05832%2C2.02865%20-2.42142%2C3.92144%20-4.125%2C5.625%20-6.70907%2C6.709%20-16.52302%2C8.42343%20-24.8125%2C5.125%20-3.52975%2C8.19234%20-11.66943%2C13.9375%20-21.15625%2C13.9375%20-9.48689%2C0%20-17.6265%2C-5.74516%20-21.15625%2C-13.9375%20-8.28947%2C3.29843%20-18.13481%2C1.584%20-24.84375%2C-5.125%20-1.70379%2C-1.70377%20-3.06663%2C-3.59607%20-4.125%2C-5.625%20-1.05837%2C2.02893%20-2.42121%2C3.92123%20-4.125%2C5.625%20-6.70901%2C6.709%20-16.55434%2C8.42343%20-24.84375%2C5.125%20-3.52981%2C8.19234%20-11.66942%2C13.9375%20-21.15625%2C13.9375%20z%20m%200%2C-13.78125%20c%205.11121%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%20z%20m%20100.25%2C0%20c%205.1112%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%20c%205.11127%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.28125%2C12.5762%20-9.28125%2C17.6875%200%2C5.11133%204.16992%2C9.25%209.28125%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.25%2C-4.13867%209.25%2C-9.25%200%2C-5.1113%20-9.25%2C-17.6875%20-9.25%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13861%2C9.25%209.25%2C9.25%20z%20m%20100.21875%2C0%20c%205.11124%2C0%209.28125%2C-4.13867%209.28125%2C-9.25%200%2C-5.1113%20-9.28125%2C-17.6875%20-9.28125%2C-17.6875%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20m%20100.25%2C0%200%2C-26.9375%20c%200%2C0%20-9.25%2C12.5762%20-9.25%2C17.6875%200%2C5.11133%204.13863%2C9.25%209.25%2C9.25%20z%20M%20158.375%2C776.96875%20c%202.36848%2C0%204.75526%2C-0.91162%206.5625%2C-2.71875%203.61425%2C-3.6142%203.61425%2C-9.44825%200%2C-13.0625%20-3.6143%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35444%2C15.41699%205.96875%2C19.03125%201.80718%2C1.80712%204.16271%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36861%2C0%204.72407%2C-0.91163%206.53125%2C-2.71875%203.61418%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44826%2C2.35451%20-19.0625%2C5.96875%20-3.61431%2C3.61425%20-3.61431%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36843%2C0%204.72406%2C-0.91162%206.53125%2C-2.71875%203.6143%2C-3.6142%203.6143%2C-9.44825%200%2C-13.0625%20-3.61425%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.3232%2C15.41699%205.9375%2C19.03125%201.80719%2C1.80712%204.1939%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.72401%2C-0.91163%206.53125%2C-2.71875%203.61413%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.41694%2C2.35451%20-19.03125%2C5.96875%20-3.61424%2C3.61425%20-3.61424%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.16283%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35451%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36855%2C0%204.75532%2C-0.91163%206.5625%2C-2.71875%203.61419%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44825%2C2.35451%20-19.0625%2C5.96875%20-3.6143%2C3.61425%20-3.6143%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.16277%2C2.71875%206.53125%2C2.71875%20z%20m%2059.40625%2C0%20c%202.36842%2C0%204.72407%2C-0.91162%206.53125%2C-2.71875%203.61431%2C-3.6142%203.61431%2C-9.44825%200%2C-13.0625%20-3.61424%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.32319%2C15.41699%205.9375%2C19.03125%201.80718%2C1.80712%204.19389%2C2.71875%206.5625%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36861%2C0%204.724%2C-0.91163%206.53125%2C-2.71875%203.61412%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.4482%2C2.35451%20-19.0625%2C5.96875%20-3.61425%2C3.61425%20-3.61425%2C9.4483%200%2C13.0625%201.80706%2C1.80713%204.19408%2C2.71875%206.5625%2C2.71875%20z%20m%2059.375%2C0%20c%202.36845%2C0%204.72405%2C-0.91162%206.53125%2C-2.71875%203.61428%2C-3.6142%203.61428%2C-9.44825%200%2C-13.0625%20-3.61427%2C-3.61424%20-19.03125%2C-5.96875%20-19.03125%2C-5.96875%200%2C0%202.35447%2C15.41699%205.96875%2C19.03125%201.8072%2C1.80712%204.16267%2C2.71875%206.53125%2C2.71875%20z%20m%2040.84375%2C0%20c%202.36859%2C0%204.7553%2C-0.91163%206.5625%2C-2.71875%203.61414%2C-3.61426%205.9375%2C-19.03125%205.9375%2C-19.03125%200%2C0%20-15.41697%2C2.35451%20-19.03125%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.1628%2C2.71875%206.53125%2C2.71875%20z%20m%2059.375%2C0%20c%202.36848%2C0%204.75525%2C-0.91162%206.5625%2C-2.71875%203.61424%2C-3.6142%203.61424%2C-9.44825%200%2C-13.0625%20-3.61431%2C-3.61424%20-19.0625%2C-5.96875%20-19.0625%2C-5.96875%200%2C0%202.35445%2C15.41699%205.96875%2C19.03125%201.80719%2C1.80712%204.1627%2C2.71875%206.53125%2C2.71875%20z%20m%2040.875%2C0%20c%202.36859%2C0%204.72405%2C-0.91163%206.53125%2C-2.71875%203.61414%2C-3.61426%205.96875%2C-19.03125%205.96875%2C-19.03125%200%2C0%20-15.44822%2C2.35451%20-19.0625%2C5.96875%20-3.61427%2C3.61425%20-3.61427%2C9.4483%200%2C13.0625%201.80707%2C1.80713%204.19405%2C2.71875%206.5625%2C2.71875%20z%22%2F%3E%3C%2Fsvg%3E") center bottom/185px 20px repeat-x !important;
  pointer-events:none;filter:drop-shadow(0 1px 0 #b4a0d48c);
}
.sully-chat-send-button {
  position:relative;border-radius:12px !important;
  background:linear-gradient(145deg,#e7dcfc,#b7a5d9) !important;
  border:1px solid #f2e8ffcc !important;color:#30283f !important;
  box-shadow:inset 0 1px #fff9,0 3px 8px #0f0d292e !important;
}
.sully-chat-send-button[aria-label="发送文字"] svg {visibility:hidden;}
.sully-chat-send-button[aria-label="发送文字"]::before {
  content:"";position:absolute;inset:10px;pointer-events:none;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23765b8d' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 18L18 6M7 6h11v11'/%3E%3C/svg%3E") center/24px 24px no-repeat;
}

/* Compact celestial chrome: flush panel, arched portrait, silver edge light. */
.sully-chat-header {
  padding:12px 116px 12px 40px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  background:linear-gradient(110deg,#171b30,#1c2036 70%,#34324d) !important;
  border-top:1px solid #b9abd34d !important;
  border-bottom:1px solid #b9abd363 !important;
  box-shadow:inset 0 1px 0 #e4d9ff0d !important;
}
.sully-chat-header .sully-chat-avatar {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 9px) !important;right:43px !important;
  width:54px !important;height:60px !important;
  border-radius:50% 50% 44% 44% !important;clip-path:none !important;
  border:1px solid #c8b5df9c !important;
  box-shadow:0 0 10px #cbb3ed1f !important;object-position:50% 35% !important;
}
.sully-chat-header::before {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 5px) !important;right:39px !important;
  width:62px !important;height:68px !important;box-sizing:border-box;
  border:1px solid #b8a2d363 !important;border-radius:50% 50% 44% 44% !important;
  transform:none !important;background:none !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-trigger {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 26px) !important;
  border-radius:50% !important;background:transparent !important;
  border:1px solid #b8a2d34d !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-back {border:0 !important;background:none !important;box-shadow:none !important;}
.sully-chat-header .sully-chat-name {font-size:16px !important;letter-spacing:.08em !important;}
.sully-chat-inputbar {background:#1c2036 !important;border-top-color:#b9abd363 !important;}
.sully-chat-transfer-card {
  width:218px !important;max-width:100% !important;padding:12px !important;
  border-radius:16px !important;background:linear-gradient(125deg,#252a44,#39344f) !important;
  border:1px solid #bda5da80 !important;box-shadow:inset 0 1px #e8d7ff17,0 0 8px #c5a5ed17 !important;
}
.sully-chat-transfer-header {padding-bottom:6px !important;margin-bottom:6px !important;gap:8px !important;}
.sully-chat-transfer-card .sully-chat-transfer-icon {padding:4px !important;width:28px !important;height:28px !important;}
.sully-chat-transfer-card .sully-chat-transfer-amount {font-size:24px !important;line-height:1.2 !important;margin:8px 0 6px !important;}
.sully-chat-transfer-note {font-size:11px !important;padding:0 !important;margin:0 0 7px !important;}

/* Integrated character portrait: compact edge-to-edge nameplate. */
.sully-chat-header {
  padding:12px 112px 11px 42px !important;
  padding-top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  background:#1c2036 !important;border-top:0 !important;
  border-bottom:1px solid #bca8dd4d !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-avatar {
  top:0 !important;bottom:0 !important;right:0 !important;
  width:38% !important;height:100% !important;
  border:0 !important;border-radius:0 !important;box-shadow:none !important;
  object-fit:cover !important;object-position:50% 38% !important;
  opacity:.58 !important;clip-path:none !important;
  mask-image:linear-gradient(90deg,transparent 0%,#000 65%,#000 100%) !important;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 65%,#000 100%) !important;
}
.sully-chat-header::before {
  content:"✦" !important;top:calc(var(--chrome-top,var(--safe-top,0px)) + 12px) !important;
  right:111px !important;width:14px !important;height:14px !important;
  border:0 !important;border-radius:0 !important;transform:none !important;
  color:#d5c3edb3;font:14px/1 serif;background:none !important;box-shadow:none !important;
}
.sully-chat-header .sully-chat-name {
  font-family:"Noto Serif SC","Songti SC","SimSun",serif !important;
  font-size:18px !important;font-weight:600 !important;letter-spacing:.1em !important;
  line-height:1.3 !important;margin-bottom:3px !important;
}
.sully-chat-header .sully-chat-status {color:#c0b6d4 !important;gap:7px !important;}
.sully-chat-header .sully-chat-back {
  top:calc(var(--chrome-top,var(--safe-top,0px)) + 13px) !important;left:6px !important;
  color:#d4c6e6 !important;
}
.sully-chat-header .sully-chat-trigger {
  top:calc(50% + var(--chrome-top,var(--safe-top,0px)) / 2) !important;right:8px !important;bottom:auto !important;
  transform:translateY(-50%) !important;width:36px !important;height:36px !important;
  display:flex !important;align-items:center !important;justify-content:center !important;padding:8px !important;
  background:#1c2036c9 !important;border:1px solid #c3aed866 !important;
  border-radius:50% !important;z-index:2;
}
.sully-chat-header .sully-chat-buffs {margin-top:6px !important;}
.sully-chat-header .sully-chat-buffs button {font-size:9px !important;line-height:1.4 !important;}

/* Preserve component geometry: the theme edge must not add an outer box. */
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) {
  --sully-card-border:0 solid transparent;
  --sully-card-shadow:inset 0 0 0 1px #d5cbff80,inset 0 0 16px #dfd4ff26,0 0 10px #baacf01a;
}
.sully-chat-card[data-card-kind]:not([data-card-kind="transfer"]) .sully-chat-card-surface {
  border:0 !important;padding:0 !important;
}

/* Unframed send glyph and one-line character identity / token count. */
.sully-chat-send-button {
  border:0 !important;background:transparent !important;box-shadow:none !important;
  border-radius:0 !important;color:#d9cbed !important;
}
.sully-chat-send-button:hover {box-shadow:none !important;}
.sully-chat-header .sully-chat-buffs button {
  color:#d3c5e7 !important;
  filter:grayscale(1) sepia(.3) hue-rotate(205deg) saturate(.7);
}
.sully-chat-header .sully-chat-info {
  display:grid !important;grid-template-columns:minmax(0,max-content) auto;justify-content:start;
  align-items:center !important;column-gap:10px;row-gap:0;
}
.sully-chat-header .sully-chat-info > .sully-chat-name {
  grid-column:1;grid-row:1;margin:0 !important;
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.sully-chat-header .sully-chat-info > .sully-chat-status {
  grid-column:2;grid-row:1;gap:4px !important;justify-self:start;
}
.sully-chat-header .sully-chat-status > .sully-chat-online-status {display:none !important;}
.sully-chat-header .sully-chat-token {
  border:0 !important;border-left:1px solid #b7a3cc66 !important;
  border-radius:0 !important;background:none !important;box-shadow:none !important;
  padding:0 0 0 9px !important;font-size:11px !important;line-height:17px !important;
  letter-spacing:.04em;color:#bbaece !important;font-variant-numeric:tabular-nums;
}
.sully-chat-header .sully-chat-info > :not(.sully-chat-name):not(.sully-chat-status) {
  grid-column:1/-1;
}
.sully-chat-header .sully-chat-buffs {margin-top:5px !important;}

/* Compact collaboration attachment and bare utility icons. */
.sully-chat-card[data-card-kind="collaboration_file"] {--sully-card-radius:14px;}
.sully-chat-actions-button,
.sully-chat-header .sully-chat-trigger {
  background:transparent !important;border:0 !important;box-shadow:none !important;
}
.sully-chat-actions-button:hover,
.sully-chat-header .sully-chat-trigger:hover {background:transparent !important;box-shadow:none !important;}
.sully-collaboration-file {
  width:236px !important;max-width:100% !important;
  border-radius:14px !important;box-shadow:none !important;
}
.sully-collaboration-file > span:first-child {padding:10px !important;gap:8px !important;}
.sully-collaboration-file-icon {width:30px !important;height:36px !important;border-radius:8px !important;}
.sully-collaboration-file-icon > svg {width:20px !important;height:20px !important;}
.sully-collaboration-file-name {font-size:12px !important;line-height:1.35 !important;font-weight:500 !important;}
.sully-collaboration-file-detail {font-size:10px !important;margin-top:4px !important;}
.sully-collaboration-file-action {width:24px !important;height:28px !important;border:0 !important;background:none !important;}
.sully-collaboration-file > span:last-child {padding:5px 10px !important;font-size:9px !important;letter-spacing:.04em !important;}
.sully-psyche-status {color:#fff !important;opacity:1 !important;}
.sully-chat-header .sully-chat-selection-cancel,.sully-chat-header .sully-chat-selection-count {color:#f0edff !important;}
.sully-chat-header .sully-chat-extra-action {color:#f0edff !important;background:#dbceff14 !important;border-color:#d8cbff40 !important;}
.sully-chat-switch-item {background:#303249 !important;border-color:transparent !important;box-shadow:none !important;}
.sully-chat-switch-item[data-active="true"] {background:#3b3c56 !important;border-color:#bca8dd66 !important;}
.sully-chat-switch-name {color:#eee5f7 !important;}
.sully-chat-switch-title,.sully-chat-switch-description {color:#b9adc9 !important;}
/* Keep the original icon tile / caption layout, with no rectangular button slab. */
.sully-chat-panel [role="group"] > button {background:transparent !important;border:0 !important;box-shadow:none !important;}
.sully-chat-panel [role="group"] > button > div:first-child {
  background:#d3c3ff12 !important;border-color:#d3c3ff26 !important;box-shadow:none !important;
}
/* HTML and custom-art event cards own their presentation; do not frame them with the theme shell. */
.sully-chat-card:is([data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"]) .sully-chat-card-surface {
  background:transparent !important;border:0 !important;box-shadow:none !important;overflow:visible !important;
}

/* 星轨 · 雾紫：同版式的浅色配色 */
.sully-chat-root {
 color:#443653 !important;background-color:#eee8f6 !important;
 background-image:radial-gradient(ellipse at 5% 75%,#cfbfed88,transparent 55%),radial-gradient(ellipse at 96% 20%,#fffaffcc,transparent 52%),radial-gradient(circle at 30% 20%,#ffffffcc 0 1px,transparent 1.5px),linear-gradient(155deg,#f2edf8,#ded5ee) !important;
 background-size:auto,auto,113px 157px,auto !important;
}
.sully-chat-header {background:#e8e0f2 !important;border-bottom-color:#9c82b64d !important;}
.sully-chat-header .sully-chat-name {color:#40304f !important;}
.sully-chat-header .sully-chat-avatar {opacity:.36 !important;}
.sully-chat-header::before {color:#8e72a9 !important;}
.sully-chat-header .sully-chat-token {color:#826b97 !important;border-left-color:#ad98bd80 !important;}
.sully-chat-header .sully-chat-buffs button {color:#685277 !important;border-color:#ad98bd80 !important;}
.sully-chat-root .sully-chat-back,.sully-chat-root .sully-chat-trigger,.sully-chat-root .sully-chat-actions-button,.sully-chat-root .sully-chat-send-button {color:#6a5182 !important;}
.sully-chat-header .sully-chat-status,.sully-chat-header .sully-chat-selection-cancel,.sully-chat-header .sully-chat-selection-count {color:#6a5182 !important;}
.sully-chat-header .sully-chat-extra-action {color:#6a5182 !important;background:#faf7fd88 !important;border-color:#bca8d180 !important;}
.sully-chat-message,.sully-chat-message-sender {color:#81708f !important;}
.sully-bubble-ai,.sully-bubble-user {color:#493958 !important;border-color:#ffffffc9 !important;box-shadow:inset 0 1px #fff,0 3px 12px #9074ad16 !important;}
.sully-bubble-ai {background:linear-gradient(135deg,#fffcffed,#eee6f7ed) !important;}
.sully-bubble-user {background:linear-gradient(135deg,#e6d6f8,#d5c1ed) !important;}
.sully-chat-message-avatar-img {border-color:#fffbff !important;box-shadow:0 0 10px #9275ac24 !important;}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) {--sully-card-background:linear-gradient(125deg,#fbf7ffed,#e5d9f1eb);--sully-card-color:#493958;--sully-card-shadow:inset 0 0 0 1px #fff9,0 3px 12px #9275ac1a;}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(div,section,article,header,footer,button,a,p,span,h2,h3,h4,h5,small,strong,b,label,li,blockquote,details,summary,pre) {color:#584367 !important;border-color:#a991c03b !important;}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-qr-surface {background-color:#ffffff !important;}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content .sully-chat-meter-fill {background-color:#c9b1bd !important;}
.sully-chat-card[data-card-kind]:not(:where([data-card-kind="transfer"], [data-card-kind="html_card"], [data-card-variant="qixi_event_card"], [data-card-variant="like520_card"])) .sully-chat-card-content :is(h2,h3,h4,h5,strong,b) {color:#493958 !important;}
.sully-chat-transfer-card,.sully-chat-transfer-receipt {color:#493958 !important;background:linear-gradient(125deg,#eee4f9,#d9c9ed) !important;border-color:#aa92c480 !important;box-shadow:inset 0 1px #fff9 !important;}
.sully-chat-transfer-card .sully-chat-transfer-amount,.sully-chat-transfer-brand,.sully-chat-transfer-icon,.sully-chat-transfer-note,.sully-chat-transfer-recipient,.sully-chat-transfer-status {color:#584367 !important;}
.sully-chat-transfer-status {background:#ffffff4d !important;border-color:#b6a1c780 !important;}
.sully-chat-transfer-header {border-bottom-color:#a38db93b !important;}
.sully-chat-transfer-card[data-status="returned"],.sully-chat-transfer-receipt[data-status="returned"] {background:linear-gradient(135deg,#e9e3ee,#d8d0e1) !important;}
.sully-chat-transfer-dialog {background:#f5effa !important;color:#493958 !important;border-color:#b9a3cc !important;}
.sully-chat-transfer-dialog button {background:#e2d5ef !important;color:#493958 !important;}
.sully-voice-bar {color:#584367 !important;background:linear-gradient(110deg,#f8f2ff,#e4d8f2) !important;border-color:#fff9 !important;box-shadow:inset 0 1px #fff !important;}
.sully-voice-bar-button {color:#fff !important;background:linear-gradient(140deg,#b39bcf,#967aaf) !important;box-shadow:none !important;}
.sully-voice-bar-wave-segment {background:#9478af !important;}
.sully-voice-bar-toggle,.sully-voice-bar-transcript {color:#604c73 !important;background:#e8ddf4 !important;}
.sully-psyche-card {background:linear-gradient(125deg,#f5effbed,#e6daf2ed) !important;color:#493958 !important;border-color:#bca6cf80 !important;box-shadow:inset 3px 0 #b49bcf60 !important;}
.sully-psyche-title,.sully-psyche-subtitle,.sully-psyche-preview,.sully-psyche-body,.sully-psyche-status {color:#68527a !important;}
.sully-chat-system,.sully-chat-interaction {color:#726080 !important;background:#f3ecf8b8 !important;border-color:#b9a3cd40 !important;}
.sully-schedule-change {background:#f3ecf9 !important;color:#493958 !important;border-color:#b9a3cd80 !important;}
.sully-schedule-change-kicker,.sully-schedule-change-count,.sully-schedule-change-time,.sully-schedule-change-after {color:#584367 !important;}
.sully-schedule-change-row {background:#e5d8f0 !important;border-color:#c7b3da !important;}
.sully-schedule-change-before {color:#97879f !important;}
.sully-chat-inputbar {background:#e8e0f2 !important;color:#584367 !important;border-color:#bba3cf66 !important;}
.sully-chat-input-wrap {background:#faf7fd88 !important;border-color:#bca8d180 !important;box-shadow:inset 0 1px #fff9 !important;}
.sully-chat-textarea {color:#493958 !important;caret-color:#8e6baa !important;}
.sully-chat-textarea::placeholder {color:#94839f !important;}
.sully-chat-composer button {color:#786089 !important;}
.sully-chat-root .sully-voice-bar-placeholder button {color:#8d6eaa !important;}
.sully-schedule-change {box-shadow:inset 3px 0 #b49bcd70,0 6px 18px #8e71a31c !important;}
.sully-schedule-change-arrow {color:#8a719f !important;}
.sully-chat-header::after,.sully-chat-inputbar::before {filter:drop-shadow(0 1px 1px #c9bcdf) !important;}
.sully-chat-panel,.sully-chat-emoji-suggestions,.sully-chat-auto-reply {background:#e8e0f2 !important;color:#584367 !important;border-color:#9c82b64d !important;}
.sully-chat-panel button:not(:where(.sully-chat-page-dot, .sully-chat-bubble-danger)) {color:#786089 !important;background:#faf7fd88 !important;border-color:#bca8d166 !important;}
.sully-chat-panel .sully-chat-bubble-search {color:#493958 !important;background:#faf7fdc8 !important;border-color:#bca8d180 !important;}
.sully-chat-panel .sully-chat-bubble-search::placeholder {color:#94839f !important;}
.sully-chat-panel .sully-chat-bubble-pill {background:#faf7fd88 !important;border-color:#bca8d166 !important;color:#584367 !important;}
.sully-chat-panel .sully-chat-bubble-pill button:not(:where(.sully-chat-bubble-danger)) {color:inherit !important;background:transparent !important;border-color:transparent !important;}
.sully-chat-panel .sully-chat-bubble-pill[data-active="true"],.sully-chat-panel .sully-chat-bubble-chip[data-active="true"] {background:#8c6fb0 !important;border-color:#745898 !important;color:#ffffff !important;}
.sully-chat-panel .sully-chat-bubble-danger {background:#dc2626 !important;color:#ffffff !important;border-color:#f87171 !important;}
.sully-chat-panel .sully-chat-page-dot {background:#bca8d180 !important;border:0 !important;padding:0 !important;}
.sully-chat-panel .sully-chat-page-dot[data-active="true"] {background:#6a5182 !important;}
.sully-chat-panel [role="group"] > button {background:transparent !important;border:0 !important;box-shadow:none !important;}
.sully-chat-panel [role="group"] > button > div:first-child {background:#faf7fd88 !important;border-color:#bca8d140 !important;}
.sully-chat-switch-item {background:#eee7f5 !important;border-color:transparent !important;}
.sully-chat-switch-item[data-active="true"] {background:#faf5ff !important;border-color:#b49bcf99 !important;}
.sully-chat-switch-name {color:#584367 !important;}
.sully-chat-switch-title,.sully-chat-switch-description {color:#8b759d !important;}
`},ro={format:Xn,version:to,name:ao,parts:eo},no=`/* 银晕。图形随白框打包，消息、头像、情绪及操作来自当前会话。 */
.sully-chat-root, .sully-chat-transfer-compose {
    --halo-serif: "Times New Roman", "Noto Serif SC", "Songti SC", "SimSun", serif;
    --halo-ink: #202536;
    --halo-muted: #606173;
    --halo-rule: #b8b6c966;
    --halo-gold: #d4b997;
    font-family: var(--halo-serif);
}
.sully-chat-root {
    color: var(--halo-ink);
    background: var(--halo-orbits) center / 100% 100% no-repeat,
        radial-gradient(ellipse at 90% -8%, #bfc0d4, transparent 35%),
        radial-gradient(ellipse at 14% 88%, #deddea88, transparent 38%),
        linear-gradient(130deg, #e5e3ee, #efedf5 29%, #eae9f2 65%, #efedf5) !important;
}

/* 标题和头像保留真实图片及名片入口。 */
.sully-chat-root .sully-chat-header {
    padding-inline: clamp(12px, 4%, 26px);
    background: transparent !important;
    border: 0;
    box-shadow: none;
    backdrop-filter: none;
}
.sully-chat-root .sully-chat-header :is(.sully-chat-back,.sully-chat-extra-action,.sully-chat-trigger) {
    background: transparent; color: #35394b; box-shadow: none;
}
.sully-chat-root .sully-chat-avatar {
    border: 2px solid #f8f6f6; border-radius: 50%;
    outline: 1px solid #c4ad90; outline-offset: 2px;
    box-shadow: 0 0 0 5px #eeebf188;
}
.sully-chat-root .sully-chat-name { color: var(--halo-ink); font-size: 18px; font-weight: 500; letter-spacing: .10em; overflow-wrap: anywhere; }
.sully-chat-root .sully-chat-status :is(.sully-chat-online-status,.sully-chat-custom-status,.sully-chat-token) {
    color: var(--halo-muted); background: transparent; border-color: var(--halo-rule);
}
.sully-chat-root .sully-chat-online-status > span:empty { background: #74788d; }
.sully-chat-root .sully-chat-buffs :is(button,[aria-hidden] span) {
    background: #f3f1f666 !important; border: 1px solid #c8c5d5 !important; color: #49485a !important;
    border-radius: 12px; box-shadow: none; padding: 3px 6px; font: 500 10px/1.05 var(--halo-serif);
}
.sully-chat-root .sully-chat-messages {
    margin-inline: clamp(9px, 4.8%, 26px);
    border: 1px solid var(--halo-rule);
    padding-block: 18px 24px;
    scrollbar-width: none;
}
.sully-chat-root .sully-chat-message-ai:not(.sully-chat-message-module)::before {
    content: ""; position: absolute; pointer-events: none;
    left: 0; top: 15px; width: 4px; height: 4px; transform: rotate(45deg);
    border: 1px solid #8b899d; background: #eeedf5;
}
.sully-chat-root .sully-chat-avatar-wrap {
    background: #e7e3e8; overflow: visible; border-radius: 2px;
    box-shadow: 0 2px 5px #45475812;
}
.sully-chat-root .sully-chat-avatar-wrap::before {
    content: ""; position: absolute; z-index: 1; inset: -1px; pointer-events: none;
    border: 1px solid #c8b6a37a; border-radius: 2px;
    background:
        linear-gradient(var(--halo-gold),var(--halo-gold)) left top / 5px 1px,
        linear-gradient(var(--halo-gold),var(--halo-gold)) right bottom / 5px 1px;
    background-repeat: no-repeat;
}
.sully-chat-root .sully-chat-message-avatar-img { border: 2px solid #f4f0f0; box-shadow: none; }
.sully-chat-root .sully-chat-avatar-timestamp { color: #595a6c; font: 400 10px/12px var(--halo-serif); letter-spacing: .035em; }
.sully-chat-root .sully-chat-message-content { overflow-wrap: anywhere; }
.sully-chat-root .sully-chat-message-content > div > div { min-width: 0; max-width: 100%; }
.sully-chat-root .sully-chat-message-content > [aria-hidden="true"] { right: -2rem; }

/* 切角绘在底纹上，长消息、引用和语音字幕可自然撑高。 */
.sully-chat-root :is(.sully-bubble-ai,.sully-bubble-user) {
    background: var(--halo-face) center / 100% 100% no-repeat !important;
    border: 0 !important; border-radius: 0 !important; box-shadow: none !important;
    padding: 10px 15px;
}
.sully-chat-root .sully-bubble-ai { --halo-face: var(--halo-paper); color: var(--halo-ink); }
.sully-chat-root .sully-bubble-user { --halo-face: var(--halo-night); color: #faf8fb; }
.sully-chat-root .sully-voice-bar {
    max-width: 100%; min-width: 0;
    background: var(--halo-paper) center / 100% 100% no-repeat !important;
    color: var(--halo-ink); border: 0 !important; border-radius: 0 !important; box-shadow: none;
}
.sully-chat-root .sully-voice-bar-button { color: #373c50 !important; background: #e2e1eb !important; }
.sully-chat-root .sully-voice-bar-wave-segment { background: #666a80 !important; }
.sully-chat-root .sully-voice-bar-toggle { color: #4b4e62 !important; background: #e5e3ed; }
.sully-chat-root .sully-voice-bar-transcript { color: #43475e !important; background: #f2f1f7 !important; }

/* 心象的分隔线贴着真实标题，折叠、展开和翻译都可用。 */
.sully-chat-root .sully-psyche-card {
    background: var(--halo-psyche) center / 100% 100% no-repeat !important;
    border: 0 !important; border-radius: 0 !important; box-shadow: none !important;
    padding: 12px 17px 14px; color: #f7f5fa;
}
.sully-chat-root .sully-psyche-card > div:has(> .sully-psyche-title) {
    padding-bottom: 6px; margin-bottom: 8px; border-bottom: 1px solid #d2bb946b;
}
.sully-chat-root .sully-psyche-card > div:has(> .sully-psyche-title)::after {
    content: ""; position: absolute; left: 50%; bottom: -2px; width: 3px; height: 3px;
    background: #e5cfad; transform: rotate(45deg); pointer-events: none;
}
.sully-chat-root .sully-psyche-card :is(.sully-psyche-title,.sully-psyche-subtitle,.sully-psyche-status,button) {
    color: #efedf6 !important; font-family: var(--halo-serif) !important; text-shadow: none !important;
}
.sully-chat-root .sully-psyche-card :is(.sully-psyche-preview,.sully-psyche-body) {
    color: #faf7fc !important; font-family: var(--halo-serif) !important; font-style: italic;
    font-weight: 400; line-height: 1.7; text-shadow: none !important;
}
.sully-chat-root .sully-psyche-preview > span { color: #dec8a8 !important; }
.sully-chat-root .sully-psyche-body { border-color: #d4b99388 !important; mask-image: none !important; }
.sully-chat-root .sully-psyche-translation-tools { color: #ece7f3 !important; }

/* Sully Pay 保留原金额、币种、备注和处理状态。 */
.sully-chat-root .sully-chat-transfer-card {
    width: 236px; max-width: 100%; padding: 12px 18px 12px 54px;
    background: var(--halo-pay) center / 100% 100% no-repeat !important;
    border-radius: 0; color: #faf8fc; box-shadow: none;
}
.sully-chat-root .sully-chat-transfer-watermark { display: none; }
.sully-chat-root .sully-chat-transfer-header { margin: 0; }
.sully-chat-root .sully-chat-transfer-card .sully-chat-transfer-icon {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%); padding: 6px;
    background: #ffffff0f; border: 1px solid #ebdfd47d; border-radius: 1px;
}
.sully-chat-root .sully-chat-transfer-brand { color: #eeecf4; font: 400 12px/1.4 var(--halo-serif); letter-spacing: .14em; }
.sully-chat-root .sully-chat-transfer-card .sully-chat-transfer-amount {
    color: #fcfafd; font: 400 23px/1.2 Garamond, var(--halo-serif); letter-spacing: .045em; overflow-wrap: anywhere;
}
.sully-chat-root .sully-chat-transfer-card :is(.sully-chat-transfer-note,.sully-chat-transfer-recipient,.sully-chat-transfer-status) { color: #eeedf5; }
.sully-chat-root .sully-chat-transfer-status { backdrop-filter: none; }
.sully-chat-root .sully-chat-transfer-receipt { border: 0; background: #f3f2f5; box-shadow: none; }
.sully-chat-root .sully-chat-transfer-receipt .sully-chat-transfer-icon { background: #e6e4e9; color: #66636e; }
.sully-chat-root .sully-chat-transfer-receipt .sully-chat-transfer-status { color: #524f59; }

.sully-chat-root .sully-chat-inputbar { background: transparent; box-shadow: none; border: 0; backdrop-filter: none; }
.sully-chat-root .sully-chat-composer { gap: 4px; align-items: center; padding: 10px 4%; }
.sully-chat-root :is(.sully-chat-actions-button,.sully-chat-input-wrap,.sully-chat-send-button) { border: 0; border-radius: 0; box-shadow: none; }
.sully-chat-root .sully-chat-actions-button { background: transparent; color: #34384a; }
.sully-chat-root .sully-chat-input-wrap { background: var(--halo-input) center / 100% 100% no-repeat; }
.sully-chat-root .sully-chat-textarea { color: var(--halo-ink); font-family: var(--halo-serif); }
.sully-chat-root .sully-chat-textarea::placeholder { color: var(--halo-muted); font-style: italic; }
.sully-chat-root .sully-chat-input-wrap button { color: #515467; }
.sully-chat-root .sully-chat-send-button { width: 45px; background: var(--halo-send) center / 100% 88% no-repeat; color: #fff; }
.sully-chat-root .sully-chat-send-button:disabled { opacity: .55; }

/* 加号保留完整的触控区域，星影仅在图标下面。 */
.sully-chat-root .sully-chat-panel:has(.sully-chat-action-page) { background: #f1f0f5; border: 0; box-shadow: none; }
.sully-chat-root .sully-chat-action-page { grid-template-rows: repeat(2,minmax(68px,auto)); gap: 7px 3px; padding: 12px 10px 8px; }
.sully-chat-root .sully-chat-action-page > button { gap: 2px; color: #514f58; }
.sully-chat-root .sully-chat-action-page > button > :first-child {
    position: relative; isolation: isolate; display: grid; place-items: center;
    width: 46px; height: 43px; background: transparent; color: #555361; border: 0; border-radius: 0; box-shadow: none;
}
.sully-chat-root .sully-chat-action-page > button > :first-child::before {
    content: ""; position: absolute; z-index: -1; pointer-events: none; inset: 5px 6px;
    background: var(--halo-star) center / contain no-repeat; opacity: .18; filter: blur(1.4px);
}
.sully-chat-root .sully-chat-action-page > button > :first-child > div {
    display: grid; place-items: center; width: 100%; height: 100%; background: none; color: inherit; border: 0; box-shadow: none;
}
.sully-chat-root .sully-chat-action-page :is(svg,img) { width: 19px; height: 19px; }
/* 用本地线描图标呈现戳一戳，离线时也能辨认。 */
.sully-chat-root .sully-chat-action-page img[alt="poke"] {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23555361' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8.5 20.5h5.8c2.1 0 3.4-1.5 3.7-3.4l.6-4.4c.2-1.1-.8-2-1.8-1.7l-1.1.4c-.4-1.4-2-1.6-2.9-.7-.5-1.2-1.8-1.3-2.6-.6l-.5-5.7c-.2-1.9-3-1.7-2.9.3l.7 9.2-1.9-1.7c-1.4-1.2-3 .5-2 1.8l3.4 4.7c.4.6 1 1.3 1.5 1.8Z'/%3E%3C/svg%3E");
}
.sully-chat-root .sully-chat-action-page > button > span:last-child { color: #514f58; font: 400 12px/1.4 var(--halo-serif); }
.sully-chat-root .sully-chat-action-page .sully-chat-badge-dot { top: 6px; right: 6px; width: 5px; height: 5px; border: 0; background: #8b8596; }
.sully-chat-root .sully-chat-page-dot { background: #d1ced6; }
.sully-chat-root .sully-chat-page-dot[data-active="true"] { background: #85818f; }

/* 收款详情在聊天舞台内，发起转账只匹配它自己的表单。 */
.sully-chat-transfer-overlay, .sully-chat-transfer-compose > :first-child {
    background: #302e373b; backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);
}
.sully-chat-transfer-dialog, .sully-chat-transfer-compose > div:nth-child(2) {
    width: min(100%,330px); max-width: 100%; max-height: 100%; overflow-y: auto;
    border: 0; border-radius: 16px; background: #fcfbfc; color: #37363d; box-shadow: 0 8px 32px #2d2a341a;
    font-family: var(--halo-serif);
}
.sully-chat-transfer-detail-header { margin: 0 22px; padding: 21px 0 15px; border-bottom: 1px solid #e6e4e8; background: none; color: #37363d; }
.sully-chat-transfer-detail-header > :first-child { display: none; }
.sully-chat-transfer-detail-header > div { color: #69686e; }
.sully-chat-transfer-detail-header > div:nth-child(2) { gap: 6px; margin-bottom: 13px; }
.sully-chat-transfer-detail-header > div:nth-child(2) > * { background: none; padding: 0; color: #57555e; }
.sully-chat-transfer-detail-header .sully-chat-transfer-detail-amount { color: #323138; font: 400 32px/1.2 var(--halo-serif); overflow-wrap: anywhere; }
.sully-chat-transfer-detail-body { padding: 14px 22px 18px; }
.sully-chat-transfer-detail-body > div:not(:has(button)) {
    display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
    margin: 0; padding: 5px 0; background: transparent; font: 400 13px/1.55 var(--halo-serif);
}
.sully-chat-transfer-detail-body > div:not(:has(button)) > :first-child { flex: none; color: #69686e; font: inherit; }
.sully-chat-transfer-detail-body > div:not(:has(button)) > :last-child { color: #37363d; font: inherit; text-align: right; overflow-wrap: anywhere; }
.sully-chat-transfer-dialog button, .sully-chat-transfer-compose button {
    min-height: 42px; border: 0; border-radius: 8px; background: #efedf1;
    color: #48464e; font: 400 14px/1.4 var(--halo-serif); box-shadow: none;
}
.sully-chat-transfer-dialog .sully-chat-transfer-accept, .sully-chat-transfer-compose button:last-child { background: #65636f; color: #fff; }
.sully-chat-transfer-compose h3 { text-align: left; font: 500 17px/1.5 var(--halo-serif); color: #37363d; }
.sully-chat-transfer-compose input { border-radius: 7px; color: #37363d; background: #f1f0f3; font: 400 16px/1.5 var(--halo-serif); }
.sully-chat-transfer-compose input::placeholder { color: #706e75; }


/* 内嵌 SVG 使预设可离线应用及单独导出。 */
.sully-chat-root {
    --halo-orbits: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 941 1670%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%22.95%22 y2=%22.94%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffffff%22 stop-opacity=%220.58%22/%3E%3Cstop offset=%220.3%22 stop-color=%22%23fff9eb%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.6%22 stop-color=%22%23ffe9c2%22 stop-opacity=%220.95%22/%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220.04%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22q%22 x1=%220%22 y1=%22.88%22 x2=%221%22 y2=%22.15%22%3E%3Cstop offset=%220%22 stop-color=%22%23fff9eb%22 stop-opacity=%220.35%22/%3E%3Cstop offset=%220.45%22 stop-color=%22%23f4d6ad%22 stop-opacity=%220.92%22/%3E%3Cstop offset=%220.88%22 stop-color=%22%23fff%22 stop-opacity=%220.98%22/%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220.24%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22c%22 x1=%22.12%22 y1=%220%22 x2=%22.78%22 y2=%22.97%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffe7bc%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.32%22 stop-color=%22%23cfab85%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23fff%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%23f7e4ce%22 stop-opacity=%220.9%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22f%22 x2=%221%22 y2=%22.26%22%3E%3Cstop offset=%220%22 stop-color=%22%23aba9c1%22 stop-opacity=%220.82%22/%3E%3Cstop offset=%220.52%22 stop-color=%22%23aaa8bd%22 stop-opacity=%220.87%22/%3E%3Cstop offset=%221%22 stop-color=%22%23b9b8cb%22 stop-opacity=%220.53%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M208 -9Q394 20 521 132%22 fill=%22none%22 stroke=%22%23fff7%22 stroke-width=%220.75%22/%3E%3Cpath d=%22M410 -6C639 96 785 273 870 550%22 fill=%22none%22 stroke=%22url%28%23g%29%22 stroke-width=%221.45%22/%3E%3Cpath d=%22M958 149C776 124 613 271 565 440%22 fill=%22none%22 stroke=%22url%28%23q%29%22 stroke-width=%221.25%22/%3E%3Cpath d=%22M396 727Q459 650 532 580%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221.35%22/%3E%3Cpath d=%22M-20 1362Q76 1466 220 1550%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221.05%22/%3E%3Cpath d=%22M486 1670Q705 1494 958 1281%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%221.2%22/%3E%3Cellipse cx=%22854%22 cy=%221325%22 rx=%22162%22 ry=%22162%22 fill=%22none%22 stroke=%22url%28%23c%29%22 stroke-width=%221.35%22/%3E%3C/svg%3E");
    --halo-paper: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 246 74%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22p%22 x1=%220%22 y1=%22.7%22 x2=%221%22 y2=%22.15%22%3E%3Cstop offset=%220%22 stop-color=%22%23eeedf3%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.32%22 stop-color=%22%23f4f3f8%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.7%22 stop-color=%22%23f6f5f9%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%23eae9f1%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3CradialGradient id=%22h%22 cx=%22.83%22 cy=%22-.2%22 r=%22.93%22%3E%3Cstop offset=%220%22 stop-color=%22%23fff%22 stop-opacity=%220.58%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23fff%22 stop-opacity=%220.2%22/%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3ClinearGradient id=%22e%22 x2=%221%22 y2=%22.75%22%3E%3Cstop offset=%220%22 stop-color=%22%23cfccd8%22 stop-opacity=%220.9%22/%3E%3Cstop offset=%220.3%22 stop-color=%22%23e2e0e9%22 stop-opacity=%220.84%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23fff%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.78%22 stop-color=%22%23d9d6e2%22 stop-opacity=%220.94%22/%3E%3Cstop offset=%221%22 stop-color=%22%23ddd8e2%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M.8 14L14 .8H245L245.5 59L231 73.2H1Z%22 fill=%22url%28%23p%29%22 stroke=%22url%28%23e%29%22 stroke-width=%221.25%22/%3E%3Cpath d=%22M.8 14L14 .8H245L245.5 59L231 73.2H1Z%22 fill=%22url%28%23h%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M.8 14L14 .8%22 fill=%22none%22 stroke=%22%23d4bb9e%22 stroke-width=%220.8%22/%3E%3Cpath d=%22M231 73.2l14 -14%22 fill=%22none%22 stroke=%22%23d5b28a%22 stroke-width=%220.95%22/%3E%3Cpath d=%22M233 4h7l2 3v4M4 62v6l3 3h5%22 fill=%22none%22 stroke=%22%23d3cfdd%22 stroke-width=%221.25%22/%3E%3Cpath d=%22M16 2h179%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.65%22/%3E%3C/svg%3E");
    --halo-night: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 290 78%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22n%22 x2=%221%22 y2=%22.012%22%3E%3Cstop offset=%220%22 stop-color=%22%23484c5d%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.22%22 stop-color=%22%23434757%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23464a5b%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23585c6d%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%236c6e7f%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3CradialGradient id=%22w%22 cx=%221.04%22 cy=%221.05%22 r=%220.34%22%3E%3Cstop offset=%220%22 stop-color=%22%23f3eef3%22 stop-opacity=%220.96%22/%3E%3Cstop offset=%220.25%22 stop-color=%22%23dcd8e0%22 stop-opacity=%220.78%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23b6b6c5%22 stop-opacity=%220.49%22/%3E%3Cstop offset=%220.84%22 stop-color=%22%239b9bab%22 stop-opacity=%220.17%22/%3E%3Cstop offset=%221%22 stop-color=%22%23858294%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3CradialGradient id=%22l%22 cx=%22.01%22 cy=%221.05%22 r=%220.47%22%3E%3Cstop offset=%220%22 stop-color=%22%23aaa8b5%22 stop-opacity=%220.92%22/%3E%3Cstop offset=%220.4%22 stop-color=%22%239796a6%22 stop-opacity=%220.6%22/%3E%3Cstop offset=%220.78%22 stop-color=%22%23838396%22 stop-opacity=%220.2%22/%3E%3Cstop offset=%221%22 stop-color=%22%2377798a%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3ClinearGradient id=%22b%22 x1=%220%22 y1=%22.1%22 x2=%221%22 y2=%22.96%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffe5bd%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.2%22 stop-color=%22%23fff%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23a4a4b4%22 stop-opacity=%220.4%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23fff4e0%22 stop-opacity=%220.93%22/%3E%3Cstop offset=%221%22 stop-color=%22%23e4caa4%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M1 24V5l4-4h21M270 77h14l5-5V57%22 fill=%22none%22 stroke=%22%23fdf1dd%22 stroke-width=%221.4%22/%3E%3Cpath d=%22M1 21L21 .7H289V61l-17 16H1Z%22 fill=%22url%28%23n%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H289V61l-17 16H1Z%22 fill=%22url%28%23l%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H289V61l-17 16H1Z%22 fill=%22url%28%23w%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H289V61l-17 16H1Z%22 fill=%22none%22 stroke=%22url%28%23b%29%22 stroke-width=%221.15%22/%3E%3Cdefs%3E%3Cfilter id=%22silk%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.015 .024%22 numOctaves=%223%22 seed=%2218%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%22.19 .64 .17 0 0 .19 .64 .17 0 0 .19 .64 .17 0 0 0 0 0 .16 0%22/%3E%3C/filter%3E%3CclipPath id=%22mask%22%3E%3Cpath d=%22M1 21L21 .7H289V61l-17 16H1Z%22 fill=%22%23fff%22 stroke=%22none%22 stroke-width=%221%22/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=%22url%28%23mask%29%22%3E%3Crect width=%22290%22 height=%2278%22 filter=%22url%28%23silk%29%22 opacity=%22.65%22/%3E%3C/g%3E%3Cpath d=%22M5 15v-10h10M275 5h10v10M5 63v10h10M285 63v10h-10%22 fill=%22none%22 stroke=%22%23e5c595%22 stroke-width=%220.72%22/%3E%3C/svg%3E");
    --halo-psyche: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 677 302%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22n%22 x2=%221%22 y2=%22.012%22%3E%3Cstop offset=%220%22 stop-color=%22%23484c5d%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.22%22 stop-color=%22%23434757%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23464a5b%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23585c6d%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%236c6e7f%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3CradialGradient id=%22w%22 cx=%221.04%22 cy=%221.05%22 r=%220.69%22%3E%3Cstop offset=%220%22 stop-color=%22%23f3eef3%22 stop-opacity=%220.96%22/%3E%3Cstop offset=%220.25%22 stop-color=%22%23dcd8e0%22 stop-opacity=%220.78%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23b6b6c5%22 stop-opacity=%220.49%22/%3E%3Cstop offset=%220.84%22 stop-color=%22%239b9bab%22 stop-opacity=%220.17%22/%3E%3Cstop offset=%221%22 stop-color=%22%23858294%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3CradialGradient id=%22l%22 cx=%22.01%22 cy=%221.05%22 r=%220.47%22%3E%3Cstop offset=%220%22 stop-color=%22%23aaa8b5%22 stop-opacity=%220.92%22/%3E%3Cstop offset=%220.4%22 stop-color=%22%239796a6%22 stop-opacity=%220.6%22/%3E%3Cstop offset=%220.78%22 stop-color=%22%23838396%22 stop-opacity=%220.2%22/%3E%3Cstop offset=%221%22 stop-color=%22%2377798a%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3ClinearGradient id=%22b%22 x1=%220%22 y1=%22.1%22 x2=%221%22 y2=%22.96%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffe5bd%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.2%22 stop-color=%22%23fff%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23a4a4b4%22 stop-opacity=%220.4%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23fff4e0%22 stop-opacity=%220.93%22/%3E%3Cstop offset=%221%22 stop-color=%22%23e4caa4%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M1 28V5l4-4h25M652 301h19l5-5V276%22 fill=%22none%22 stroke=%22%23fdf1dd%22 stroke-width=%221.4%22/%3E%3Cpath d=%22M2 279L24 300H2ZM655 301L676 280V301Z%22 fill=%22%23c5c1c9%22 stroke=%22%23f7ead6%22 stroke-width=%220.8%22/%3E%3Cpath d=%22M1 21L25 .7H676V280l-22 21H23L1 280Z%22 fill=%22url%28%23n%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L25 .7H676V280l-22 21H23L1 280Z%22 fill=%22url%28%23l%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L25 .7H676V280l-22 21H23L1 280Z%22 fill=%22url%28%23w%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L25 .7H676V280l-22 21H23L1 280Z%22 fill=%22none%22 stroke=%22url%28%23b%29%22 stroke-width=%221.15%22/%3E%3Cdefs%3E%3Cfilter id=%22silk%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.015 .024%22 numOctaves=%223%22 seed=%2218%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%22.19 .64 .17 0 0 .19 .64 .17 0 0 .19 .64 .17 0 0 0 0 0 .16 0%22/%3E%3C/filter%3E%3CclipPath id=%22mask%22%3E%3Cpath d=%22M1 21L25 .7H676V280l-22 21H23L1 280Z%22 fill=%22%23fff%22 stroke=%22none%22 stroke-width=%221%22/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=%22url%28%23mask%29%22%3E%3Crect width=%22677%22 height=%22302%22 filter=%22url%28%23silk%29%22 opacity=%22.65%22/%3E%3C/g%3E%3Cpath d=%22M1 278l1 21h22M655 301l21 -21%22 fill=%22none%22 stroke=%22%23fff3df%22 stroke-width=%221.2%22/%3E%3Cpath d=%22M20 35v-15h15M642 20h15v15M20 267v15h15M657 267v15h-15%22 fill=%22none%22 stroke=%22%23e5c595%22 stroke-width=%221%22/%3E%3Cdefs%3E%3ClinearGradient id=%22r%22 gradientUnits=%22userSpaceOnUse%22 x1=%2230%22 x2=%22643%22 y1=%2285%22 y2=%2285%22%3E%3Cstop offset=%220%22 stop-color=%22%23d2b68e%22 stop-opacity=%220.58%22/%3E%3Cstop offset=%220.48%22 stop-color=%22%23f6e0bb%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%23e4c9a3%22 stop-opacity=%220.15%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22s%22 gradientUnits=%22userSpaceOnUse%22 x1=%2230%22 x2=%2230%22 y1=%22102%22 y2=%22276%22%3E%3Cstop offset=%220%22 stop-color=%22%23d6bd97%22 stop-opacity=%220%22/%3E%3Cstop offset=%220.24%22 stop-color=%22%23d6bd97%22 stop-opacity=%220.73%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23dcc19d%22 stop-opacity=%220.6%22/%3E%3Cstop offset=%221%22 stop-color=%22%23dcc19d%22 stop-opacity=%220%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M517 302Q573 207 677 145%22 fill=%22none%22 stroke=%22%23e4d2ba%22 stroke-width=%221%22/%3E%3C/svg%3E");
    --halo-pay: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 457 110%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22n%22 x2=%221%22 y2=%22.012%22%3E%3Cstop offset=%220%22 stop-color=%22%23575b6b%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.22%22 stop-color=%22%23494d5f%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.55%22 stop-color=%22%23484c5d%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23626578%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%237c7d91%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3CradialGradient id=%22w%22 cx=%221.04%22 cy=%221.05%22 r=%220.69%22%3E%3Cstop offset=%220%22 stop-color=%22%23f3eef3%22 stop-opacity=%220.96%22/%3E%3Cstop offset=%220.25%22 stop-color=%22%23dcd8e0%22 stop-opacity=%220.78%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23b6b6c5%22 stop-opacity=%220.49%22/%3E%3Cstop offset=%220.84%22 stop-color=%22%239b9bab%22 stop-opacity=%220.17%22/%3E%3Cstop offset=%221%22 stop-color=%22%23858294%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3CradialGradient id=%22l%22 cx=%22.01%22 cy=%221.05%22 r=%220.69%22%3E%3Cstop offset=%220%22 stop-color=%22%23aaa8b5%22 stop-opacity=%220.92%22/%3E%3Cstop offset=%220.4%22 stop-color=%22%239796a6%22 stop-opacity=%220.6%22/%3E%3Cstop offset=%220.78%22 stop-color=%22%23838396%22 stop-opacity=%220.2%22/%3E%3Cstop offset=%221%22 stop-color=%22%2377798a%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3ClinearGradient id=%22b%22 x1=%220%22 y1=%22.1%22 x2=%221%22 y2=%22.96%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffe5bd%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.2%22 stop-color=%22%23fff%22 stop-opacity=%220.99%22/%3E%3Cstop offset=%220.56%22 stop-color=%22%23a4a4b4%22 stop-opacity=%220.4%22/%3E%3Cstop offset=%220.85%22 stop-color=%22%23fff4e0%22 stop-opacity=%220.93%22/%3E%3Cstop offset=%221%22 stop-color=%22%23e4caa4%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M1 24V5l4-4h21M413 109h38l5-5V65%22 fill=%22none%22 stroke=%22%23fdf1dd%22 stroke-width=%221.4%22/%3E%3Cpath d=%22M2 87L24 108H2ZM416 109L456 69V109Z%22 fill=%22%23c5c1c9%22 stroke=%22%23f7ead6%22 stroke-width=%220.8%22/%3E%3Cpath d=%22M1 21L21 .7H456V69l-41 40H1Z%22 fill=%22url%28%23n%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H456V69l-41 40H1Z%22 fill=%22url%28%23l%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H456V69l-41 40H1Z%22 fill=%22url%28%23w%29%22 stroke=%22none%22 stroke-width=%221%22/%3E%3Cpath d=%22M1 21L21 .7H456V69l-41 40H1Z%22 fill=%22none%22 stroke=%22url%28%23b%29%22 stroke-width=%221.15%22/%3E%3Cdefs%3E%3Cfilter id=%22silk%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.015 .024%22 numOctaves=%223%22 seed=%2218%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%22.19 .64 .17 0 0 .19 .64 .17 0 0 .19 .64 .17 0 0 0 0 0 .16 0%22/%3E%3C/filter%3E%3CclipPath id=%22mask%22%3E%3Cpath d=%22M1 21L21 .7H456V69l-41 40H1Z%22 fill=%22%23fff%22 stroke=%22none%22 stroke-width=%221%22/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=%22url%28%23mask%29%22%3E%3Crect width=%22457%22 height=%22110%22 filter=%22url%28%23silk%29%22 opacity=%22.65%22/%3E%3C/g%3E%3Cpath d=%22M1 86l1 21h22M416 109l40 -40%22 fill=%22none%22 stroke=%22%23fff3df%22 stroke-width=%221.2%22/%3E%3Cpath d=%22M5 15v-10h10M442 5h10v10M5 95v10h10M452 95v10h-10%22 fill=%22none%22 stroke=%22%23e5c595%22 stroke-width=%220.72%22/%3E%3C/svg%3E");
    --halo-input: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 684 71%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x2=%221%22 y2=%22.3%22%3E%3Cstop offset=%220%22 stop-color=%22%23f4f3f9%22 stop-opacity=%220.42%22/%3E%3Cstop offset=%220.45%22 stop-color=%22%23f7f6fb%22 stop-opacity=%220.72%22/%3E%3Cstop offset=%221%22 stop-color=%22%23efeef6%22 stop-opacity=%220.62%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M1 .8H683V53L666 70H1Z%22 fill=%22url%28%23g%29%22 stroke=%22%23c8c6d6%22 stroke-width=%221.1%22/%3E%3Cpath d=%22M4 10V4h8M671 4h9v8M4 59v8h10%22 fill=%22none%22 stroke=%22%23d5d1dd%22 stroke-width=%221%22/%3E%3Cpath d=%22M667 70l15-15%22 fill=%22none%22 stroke=%22%23dfc7a7%22 stroke-width=%220.85%22/%3E%3C/svg%3E");
    --halo-send: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 108 71%22 preserveAspectRatio=%22none%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%221%22 x2=%221%22 y2=%22.3%22%3E%3Cstop offset=%220%22 stop-color=%22%239695a6%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.45%22 stop-color=%22%23626779%22 stop-opacity=%221%22/%3E%3Cstop offset=%220.78%22 stop-color=%22%23797c8f%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%23b7b5c0%22 stop-opacity=%221%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=%22M1 70 27 22 59 1H107L81 70Z%22 fill=%22url%28%23g%29%22 stroke=%22%23e6dfdf%22 stroke-width=%220.8%22/%3E%3Cpath d=%22M26 25 38 2h18M81 70l6-16-17 16%22 fill=%22none%22 stroke=%22%23efd7b2%22 stroke-width=%220.85%22/%3E%3C/svg%3E");
    --halo-star: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 40%27%3E%3Cpath fill=%27%23968fa4%27 d=%27M20 1Q22 17 39 20Q22 23 20 39Q17 23 1 20Q17 17 20 1Z%27/%3E%3C/svg%3E");
}
`,sr={voiceBarBg:"#f4f3f8",voiceBarActiveBg:"#e7e6ef",voiceBarBtnColor:"#d8d6e3",voiceBarWaveColor:"#686c82",voiceBarTextColor:"#34394e"},ir={format:"sullyos-chat-decoration",version:1,name:"银晕",parts:{layout:{chatAvatarMode:"every_message",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarVisibility:"both",chatAvatarPlacement:"beside",chatAvatarAlign:"top",chatAvatarOffsetY:0,chatSnapToEdge:!1,chatBubbleIndent:0,chatBubbleStyle:"flat",chatMessageSpacing:"default",chatShowTimestamp:"always",chatTimestampPosition:"below_avatar",chatHeaderStyle:"default",chatChromeStyle:"soft",chatHeaderAlign:"left",chatHeaderDensity:"airy",chatHideHeaderBuffs:!1,chatStatusStyle:"dot",chatInputStyle:"rounded",chatSendButtonStyle:"circle",chatModuleAlign:"center"},bubbles:{id:"silver-halo",name:"银晕",type:"custom",ai:{...sr,textColor:"#202536",backgroundColor:"#f4f3f8",borderRadius:0,opacity:1,tailMode:"none"},user:{...sr,textColor:"#f8f7fb",backgroundColor:"#4a4e60",borderRadius:0,opacity:1,tailMode:"none"}},background:{image:null,style:"plain"},psyche:{styleId:"minimal"},css:no}},oo=[{id:"builtin-acid-orbit",name:"星轨 · 深空",read:()=>Nt(structuredClone(Qn))},{id:"builtin-acid-orbit-lavender",name:"星轨 · 雾紫",read:()=>Nt(structuredClone(ro))},{id:"builtin-silver-halo",name:ir.name,read:()=>Nt(structuredClone(ir))}],lr=[["collection","你的聊天装扮，都在这里","这里展示你制作和导入的白框、气泡、头像框、聊天背景、心象与提示音。按分类挑选，点开就能预览。","下一步"],["mine","看看当前角色穿了什么","点右上角「我的」，进入这个角色的搭配。",""],["outfit","这是当前聊天角色的搭配","搭配栏里可以自由组合已收藏的作品。「保存当前搭配」只存入搭配栏，不会混进外面的作品预设。这里的预览使用示例聊天。","知道了"],["outfit-back","回到你的作品收藏","点左上角「返回」，再认识一下导入和分享。",""],["import","把喜欢的装扮带回来","点击「导入装扮」。分享码、CSS、文件和分享图片，都从同一个入口导入。",""],["import-page","一种入口，多种导入方式","分享码会自动识别类型；旧 CSS 没有署名时，先确认自制或外部导入。文件与相册也可以分别选择。","看看分享"],["share","把自己的创作分享出去","点击「分享装扮」，进入统一的作者页面。",""],["share-page","文件、图片，或一枚分享码","文件分享和图片分享可直接导出。码分享需要投稿审核，通过后获得专属码；所有分类的作品和提交都在同一个作者页面。","完成引导"]];function so({step:a,onNext:r,onSkip:n}){const s=lr[a],[l,c]=o.useState(()=>!!document.querySelector("dialog[open]"));o.useEffect(()=>{const x=()=>c(!!document.querySelector("dialog[open]")),A=new MutationObserver(x);return A.observe(document.body,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["open"]}),x(),()=>A.disconnect()},[]);const[k,j]=o.useState(null);return o.useEffect(()=>{var R;if(j(null),!s||l)return;const x=document.querySelector(`[data-dress-guide="${s[0]}"]`);if(!x)return;(R=x.scrollIntoView)==null||R.call(x,{block:"nearest",inline:"nearest"});const A=()=>{const S=x.getBoundingClientRect();j({left:S.left,top:S.top,width:S.width,height:S.height})},C=new ResizeObserver(A);return C.observe(x),A(),window.addEventListener("resize",A),document.addEventListener("scroll",A,!0),()=>{C.disconnect(),window.removeEventListener("resize",A),document.removeEventListener("scroll",A,!0)}},[a,s,l]),!s||l?null:Ha.createPortal(t.jsxs("div",{className:"dress-guide-layer",children:[k&&t.jsx("div",{"aria-hidden":"true",className:"dress-guide-focus",style:k}),t.jsxs("section",{role:"region","aria-label":"聊天装扮使用引导","aria-live":"polite",className:"dress-guide-note",children:[t.jsxs("header",{children:[t.jsxs("small",{children:["认识聊天装扮 · ",a+1,"/",lr.length]}),t.jsx("button",{onClick:n,children:"跳过引导"})]}),t.jsx("h3",{children:s[1]}),t.jsx("p",{children:s[2]}),s[3]?t.jsxs("button",{className:"dress-guide-next",onClick:r,children:[s[3]," →"]}):t.jsx("small",{className:"dress-guide-wait",children:"轻点高亮的按钮，继续体验"})]})]}),document.body)}const Rr="sully-beauty-catalog-notice-v1",Or="sully-beauty-author-notice-v1";function Lr(a){try{return localStorage.getItem(a)!=="seen"}catch{return!0}}function Tr({author:a=!1,onClose:r}){const n=o.useRef(null),s=()=>{try{localStorage.setItem(a?Or:Rr,"seen")}catch{}r()};return o.useEffect(()=>{var l;return(l=n.current)==null||l.showModal(),()=>{var c;return(c=n.current)==null?void 0:c.close()}},[]),Ha.createPortal(t.jsxs("dialog",{ref:n,className:"beauty-confirm-dialog","aria-label":a?"给美化作者的新功能":"装扮库上线啦",onCancel:l=>{l.preventDefault(),s()},children:[t.jsx("h3",{children:a?"给美化作者的新功能":"装扮库上线啦"}),t.jsx("div",{className:"beauty-confirm-body",children:a?t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"你提交过的作品，现在可以由你决定是否放进装扮库，供大家搜索、预览和领取。"}),t.jsx("p",{children:"原有作品不会自动公开。在「我的提交 → 选择文件更新」中勾选「允许公开展示」，补上封面并提交，审核通过后才会进入装扮库。"}),t.jsx("p",{children:"「我的提交」还支持单独或批量修改协议，包括二改、转载与反馈约定，无需重新选文件。修改后仍需人工审核，通常需要 1–2 天；通过后原分享码提供新版本。"}),t.jsx("p",{children:"也可以取消公开展示。目录缓存会稍后更新，已下载的副本无法收回。"})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"聊天装扮新增「装扮库（测试版）」入口，可以按分类和名称搜索作者公开的作品，查看效果后再领取到自己的收藏。"}),t.jsx("p",{children:"列表先显示封面，点开作品后可按需体验交互预览。审核后更新目录，再次进入或点「刷新目录」即可查看新上架的作品。"}),t.jsx("p",{children:"只有作者同意公开且审核通过的作品才会展示；领取前记得查看作者的使用约定。"})]})}),t.jsx("footer",{children:t.jsx("button",{autoFocus:!0,onClick:s,children:"知道了"})})]}),document.body)}const ce=[["all","全部"],["appearance","桌面主题"],["chat","全部聊天"],["whitebox","白框"],["bubbles","气泡"],["avatar","头像框"],["background","聊天背景"],["psyche","心象"],["sound","提示音"],["collaboration","协同工作"],["date","见面界面"],["story","剧情界面"],["schedule","日程表"],["journal","交换日记"]];function Ce(a){var l,c,k,j;const r=a.parts;if(r.collaboration)return["collaboration"];if(r.date)return["date"];if(r.story)return["story"];if(r.schedule||r.journal)return[...r.schedule?["schedule"]:[],...r.journal?["journal"]:[]];const n=["chat"],s=(r.css||"").replace(/\/\* sully-composer:(avatar|background) \*\/[\s\S]*?\/\* end-sully-composer:\1 \*\//g,"").trim();return(r.layout||s||Object.keys(r).filter(x=>x!=="css").length>1)&&n.push("whitebox"),r.psyche&&n.push("psyche"),r.bubbles&&n.push("bubbles"),((l=r.bubbles)!=null&&l.user.avatarDecoration||(c=r.bubbles)!=null&&c.ai.avatarDecoration||(k=r.css)!=null&&k.includes("/* sully-composer:avatar */"))&&n.push("avatar"),(r.background||(j=r.css)!=null&&j.includes("/* sully-composer:background */"))&&n.push("background"),r.sound!==void 0&&n.push("sound"),n}function cr(a){var s,l,c,k,j;const r=a.parts,n=[];return r.collaboration&&n.push("协同工作（全局）"),r.date&&n.push("见面界面"),r.story&&n.push("剧情界面（全局）"),r.journal&&n.push("交换日记（全局）"),r.schedule&&n.push("日程表（全局）"),r.psyche&&n.push("心象"),r.layout&&n.push("界面布局"),r.bubbles&&n.push("气泡"),((s=r.bubbles)!=null&&s.user.avatarDecoration||(l=r.bubbles)!=null&&l.ai.avatarDecoration||(c=r.css)!=null&&c.includes("/* sully-composer:avatar */"))&&n.push("头像框"),(r.background||(k=r.css)!=null&&k.includes("/* sully-composer:background */"))&&n.push("聊天背景"),r.sound!==void 0&&n.push("提示音"),(j=r.css)!=null&&j.replace(/\/\* sully-composer:(avatar|background) \*\/[\s\S]*?\/\* end-sully-composer:\1 \*\//g,"").trim()&&n.push("白框 / 自定义样式（以预览为准）"),n.join(" · ")||"作者提供的聊天样式"}const io=["appearance","schedule","journal"];function ve(a,r){const n=a.some(s=>io.includes(s));return r==="appearance"?n:!n}function Xa(a){return!!(a.parts.schedule||a.parts.journal)}function lo({codePanel:a,busy:r,onFile:n,onCss:s,onCssBatch:l,initialCss:c,initialCategory:k="whitebox"}){var at;const[j,x]=o.useState(c?"css":"code"),A=o.useRef(null),C=o.useRef(null),[R,S]=o.useState(k),[g,b]=o.useState((c==null?void 0:c.text)||""),[m,d]=o.useState((c==null?void 0:c.name)||"导入的"+(((at=ie.find(([M])=>M===k))==null?void 0:at[1])||"装扮")),[v,h]=o.useState(""),[W,I]=o.useState(""),[H,w]=o.useState(""),[T,L]=o.useState(!1),[z,q]=o.useState(null),$=o.useMemo(()=>{try{return Mr(g)}catch{return null}},[g]);$a(()=>r||T?!0:z?(q(null),!0):!1,35);const F=o.useMemo(()=>{if(!g.trim())return null;try{return ge(g,m,R)}catch{return null}},[g,m,R]),N=()=>{var X,y;const M=ge(((X=$==null?void 0:$[0])==null?void 0:X.code)||g,((y=$==null?void 0:$[0])==null?void 0:y.name)||m.trim()||"导入的装扮",R);if(!M.origin&&!v)throw Error("请选择这份 CSS 是自制还是外部导入");return{...M,origin:M.origin||{kind:v,credit:W.trim()||void 0}}},tt=M=>{var y;const X=(y=M.target.files)==null?void 0:y[0];M.target.value="",X&&n(X)};return t.jsxs("section",{className:"beauty-import-hub",children:[t.jsx("nav",{"aria-label":"导入方式",children:[["code","用码领取"],["css","直接 CSS"],["file","文件 / 图片"]].map(([M,X])=>t.jsx("button",{disabled:r||T,"aria-pressed":j===M,onClick:()=>x(M),children:X},M))}),j==="code"&&a,j==="file"&&t.jsxs("div",{className:"beauty-import-files",children:[t.jsx("h3",{children:"把装扮带进来"}),t.jsx("p",{children:"选择预设原文件，或带有装扮信息的分享原图。普通图片会作为聊天背景导入。"}),t.jsx("input",{hidden:!0,ref:A,type:"file",accept:"*/*","aria-label":"装扮文件",onChange:tt}),t.jsx("input",{hidden:!0,ref:C,type:"file",accept:"image/*","aria-label":"装扮相册图片",onChange:tt}),t.jsxs("button",{disabled:r,onClick:()=>{var M;return(M=A.current)==null?void 0:M.click()},children:["从文件选择 ",t.jsx("span",{children:"JSON / ZIP / CSS / TXT"})]}),t.jsxs("button",{disabled:r,onClick:()=>{var M;return(M=C.current)==null?void 0:M.click()},children:["从相册选择 ",t.jsx("span",{children:"分享原图 / 聊天背景"})]})]}),j==="css"&&t.jsxs("div",{className:"beauty-import-css",children:[$&&t.jsxs("p",{role:"status",children:["识别到旧版白框合集，共 ",$.length," 份。确认来源后一起导入，预览展示第一份。"]}),!$&&t.jsxs("label",{children:["装扮名称",t.jsx("input",{value:m,maxLength:60,onChange:M=>{d(M.target.value),q(null)}})]}),t.jsxs("label",{children:["粘贴 CSS / 旧版白框码",t.jsx("textarea",{"aria-label":"待导入 CSS",spellCheck:!1,value:g,onChange:M=>{b(M.target.value),h(""),q(null),w("")},placeholder:"粘贴作者分享的完整 CSS，保留开头署名"})]}),F!=null&&F.origin?t.jsxs("div",{className:"beauty-import-credit",children:["署名：",F.origin.credit,t.jsxs("p",{children:[F.origin.allowRemix===!1?"禁止二改":F.origin.allowRemix===!0?"允许二改":"未注明二改规则"," · ",F.origin.allowRedistribute===!1?"禁止二次传播":F.origin.allowRedistribute===!0?"允许二次传播":"未注明传播规则"]})]}):t.jsxs("fieldset",{children:[t.jsx("legend",{children:"未识别到作者署名，请确认来源"}),!$&&t.jsxs("label",{children:["CSS 类型",t.jsx("select",{"aria-label":"CSS 类型",value:R,onChange:M=>{S(M.target.value),q(null)},children:ie.filter(([M])=>M!=="sound").map(([M,X])=>t.jsx("option",{value:M,children:X},M))})]}),t.jsxs("label",{children:[t.jsx("input",{type:"radio",name:"css-origin",checked:v==="self",onChange:()=>h("self")}),"这是我自制的"]}),t.jsxs("label",{children:[t.jsx("input",{type:"radio",name:"css-origin",checked:v==="imported",onChange:()=>h("imported")}),"外部导入"]}),t.jsxs("label",{children:["作者署名（选填）",t.jsx("input",{value:W,maxLength:60,onChange:M=>I(M.target.value)})]})]}),H&&t.jsx("p",{role:"alert",children:H}),t.jsxs("div",{className:"beauty-import-actions",children:[t.jsx("button",{disabled:r||T||!g.trim(),onClick:()=>{try{q(N().preset),w("")}catch(M){w(M.message)}},children:"查看预览"}),t.jsx("button",{disabled:r||T||!g.trim(),onClick:async()=>{if(!T){L(!0),w("");try{if($){if(!l)throw Error("请从统一导入入口导入合集");const M=$.map(X=>{const y=ge(X.code,X.name);if(!y.origin&&!v)throw Error("请选择这份 CSS 是自制还是外部导入");return{preset:y.preset,origin:y.origin||{kind:v,credit:W.trim()||void 0}}});await l(M)}else{const M=N();await s(M.preset,M.origin)}b(""),q(null)}catch(M){w(M.message)}finally{L(!1)}}},children:T?"导入中…":"保存到装扮库"})]}),z&&t.jsx(la,{data:z})]})]})}const co=[{id:"echo",name:"心象",sub:"暗紫 × 暖金，二次元卡牌"},{id:"whisper",name:"心声",sub:"羊皮纸暖色，私密日记"},{id:"minimal",name:"极简",sub:"纯白单色，OOC 调试视图"},{id:"ink",name:"墨迹",sub:"宣纸朱印，水墨卷轴"},{id:"neon",name:"脑域",sub:"赛博青光，神经接驳"},{id:"terminal",name:"内核",sub:"黑底绿字，终端日志"},{id:"stellar",name:"星语",sub:"深空夜蓝，缀星独白"},{id:"tama",name:"心宠",sub:"拓麻歌子，液晶点阵屏"},{id:"pixel",name:"像素",sub:"JRPG 对话框，硬影粗框"},{id:"muji",name:"素净",sub:"性冷淡暖灰，大片留白"},{id:"ins",name:"ins",sub:"白卡软影，feed 碎碎念"},{id:"custom",name:"自定",sub:"三色调教，配你自己的味"}];function po(a,r,n,s){var j;const l={};let c;const k=oe([r.chatDecorationCssIsolated?"":n.chatChromeCustomCss,r.chromeCustomCss].filter(Boolean).join(`
`));if((a==="avatar"||a==="background")&&(l.chatSound=re(r.chromeCustomCss,r.chatSound,n.chatChromeCustomCss,n.chatSound)||{src:"none"},l.chatSoundBound=!1),a==="avatar"){c=structuredClone(s),c.id="decoration-reset-"+crypto.randomUUID(),c.name+="（无头像框）",c.type="custom";for(const x of["user","ai"])delete c[x].avatarDecoration,delete c[x].avatarDecorationX,delete c[x].avatarDecorationY,delete c[x].avatarDecorationScale,delete c[x].avatarDecorationRotate;l.bubbleStyle=c.id,l.chromeCustomCss=le(k,"avatar",""),l.chatDecorationCssIsolated=!0}else a==="bubbles"?l.bubbleStyle="default":a==="background"?(l.chatBackground="",l.chatAppearance={...r.chatAppearance,chatBackgroundStyle:"plain"},l.chromeCustomCss=le(k,"background",""),l.chatDecorationCssIsolated=!0):a==="sound"?(l.chromeCustomCss=oe(r.chromeCustomCss||""),l.chatSound={src:"none"},l.chatSoundBound=!1):a==="psyche"?(l.thinkingChainStyle="echo",l.thinkingChainCustomCss="",l.thinkingChainCustomColors=void 0):a==="whitebox"&&(l.chromeCustomCss="",l.chatDecorationCssIsolated=!0,l.chatAppearance={...ne,chatBackgroundStyle:(j=r.chatAppearance)==null?void 0:j.chatBackgroundStyle},l.chatFineTune={enabled:!0},l.chatSound=re(r.chromeCustomCss,r.chatSound,n.chatChromeCustomCss,n.chatSound)||{src:"none"},l.chatSoundBound=!1);return{character:l,bubble:c}}const dr=["avatarDecoration","avatarDecorationX","avatarDecorationY","avatarDecorationScale","avatarDecorationRotate"],Me=a=>Array.isArray(a)?a.map(Me):a&&typeof a=="object"?Object.fromEntries(Object.keys(a).sort().map(r=>[r,Me(a[r])])):a,pr=a=>JSON.stringify(Me(a)),ur=a=>JSON.stringify(hn(a));async function uo(a,r,n,s,l,c,k){const j=Nt(a),x=[],A=new Map,C=[],R=new Map,S=new Map,g=new Map,b=new Map,m=new Map,d=w=>(m.has(w)||m.set(w,k(w)),m.get(w)),v=w=>(g.has(w.id)||g.set(w.id,Se(w).then(T=>T.parts.bubbles)),g.get(w.id)),h=pr(c),W=!j.parts.css&&!j.parts.layout,I=r.includes("css")&&je(j)?Ya(j.parts.css||""):null,H=I?["user","ai"].filter(w=>!!(I.shared||I[w])):[];for(const w of n){const T=await un(j,r.filter(z=>z!=="bubbles"),"character",w,s),L=l.find(z=>z.id===(w.bubbleStyle||s.chatDefaultBubbleStyle));if(r.includes("bubbles")&&j.parts.bubbles){let z=structuredClone(j.parts.bubbles);const q=["user","ai"].filter(N=>!!z[N].avatarDecoration);if(W&&L&&["user","ai"].some(N=>!z[N].avatarDecoration&&L[N].avatarDecoration)){for(const N of["user","ai"])if(!z[N].avatarDecoration&&L[N].avatarDecoration)for(const tt of dr)z[N][tt]=L[N][tt];b.has(L.id)||b.set(L.id,Se(z).then(N=>N.parts.bubbles)),z=await b.get(L.id)}if(W&&q.length>0){const N=[w.chatDecorationCssIsolated?"":s.chatChromeCustomCss,w.chromeCustomCss].filter(Boolean).join(`
`),tt=Ya(N);if(q.some(at=>!!(tt.shared||tt[at]))){let at=oe(N);for(const M of q)at=Ee(at,M,"");T.character.chromeCustomCss=at,T.character.chatDecorationCssIsolated=!0,T.character.chatSound=re(w.chromeCustomCss,w.chatSound,s.chatChromeCustomCss,s.chatSound)||{src:"none"},T.character.chatSoundBound=!1}}const $=ur(z);let F=R.get($);if(!F){for(const N of l)if(N.name===z.name)try{if(ur(await v(N))!==$||pr(await d(N.id))!==h)continue;F=N;break}catch{}F||(F=await qe({...z,id:"decoration-"+crypto.randomUUID(),type:"custom"}),x.push(F),A.set(F.id,c)),R.set($,F)}T.character.bubbleStyle=F.id}else if(!r.includes("bubbles")&&L&&H.some(z=>!!L[z].avatarDecoration)){const z=`${L.id}:${H.join(",")}`;let q=S.get(z);if(!q){const $=structuredClone(L);for(const F of H)for(const N of dr)delete $[F][N];q=await qe({...$,id:"decoration-"+crypto.randomUUID(),type:"custom"}),S.set(z,q),x.push(q),A.set(q.id,Ea(await d(L.id)))}T.character.bubbleStyle=q.id}C.push({character:w,changes:T})}return{prepared:C,bubbles:x,bubbleOrigins:A}}const _e={},ho=/\/\*\s*@sully-sound\b[^{}]*\{[^{}]*\}\s*\*\//gi,Fr=a=>a.replace(ho,""),Ia=a=>new RegExp(`/\\* sully-composer:${a} \\*/[\\s\\S]*?/\\* end-sully-composer:${a} \\*/`,"g"),hr={collaboration:"协同工作（主题、头像样式与 CSS）",css:"白框 / 自定义样式",layout:"聊天布局",bubbles:"气泡预设",avatar:"头像框",background:"聊天背景",psyche:"心象",sound:"聊天提示音",date:"见面界面",story:"剧情界面",schedule:"日程表",journal:"交换日记"},Fe={css:"chatChromeCustomCss",background:"chatBackground",psyche:"chatPsyche",sound:"chatSound",story:"storyAppearance",schedule:"scheduleCardAppearance",journal:"journalAppearance"},fo=new Set([...Object.values(Fe),"chatBackgroundStyle"]),Ir=a=>a.startsWith("chat")&&!fo.has(a)||a==="acnhChatSync";function Hr(a){var n,s;if((a==null?void 0:a.format)==="sullyos-chat-decoration")return a.parts||{};if((a==null?void 0:a.type)!=="sully_appearance_preset")return{};const r={};for(const[l,c]of Object.entries(Fe))((n=a.theme)==null?void 0:n[c])!==void 0&&(r[l]=a.theme[c]);return(a.chatLayout||Object.keys(a.theme||{}).some(Ir))&&(r.layout=!0),(s=a.chatThemes)!=null&&s.length&&(r.bubbles=a.chatThemes),r}function bo(a){const r=a,n=Hr(r),s=[];(r==null?void 0:r.type)==="sully_appearance_preset"&&(s.push({key:"theme",label:"桌面外观（主体）",required:!0}),Object.keys(r.customIcons||{}).length&&s.push({key:"icons",label:"桌面图标"}));const l=n.css||"";for(const c of Object.keys(hr)){let k=n[c]!==void 0;if(c==="css"&&(k=!!Fr(l).replace(Ia("avatar"),"").replace(Ia("background"),"").trim()),c==="avatar"&&(k=Ia("avatar").test(l)),c==="background"&&(k=k||Ia("background").test(l)),c==="sound"&&(k=k||!!Er(l)),!k)continue;let j=hr[c];if(c==="bubbles"){const x=Array.isArray(n.bubbles)?n.bubbles:[n.bubbles];j+=`（${x.length} 套）：`+x.map(A=>A.name||"未命名气泡").join("、"),x.some(A=>{var C,R;return((C=A.user)==null?void 0:C.avatarDecoration)||((R=A.ai)==null?void 0:R.avatarDecoration)})&&(j+="（含气泡内嵌头像框）")}s.push({key:c,label:j})}return s}function fr(a,r){if(r.css===!1)return["avatar","background"].filter(n=>r[n]!==!1).flatMap(n=>a.match(Ia(n))||[]).join(`
`);for(const n of["avatar","background"])r[n]===!1&&(a=a.replace(Ia(n),""));return r.sound===!1?Fr(a):a}function Ka(a,r=_e){const n=structuredClone(a),s=Hr(n),l=Er(s.css);if((n==null?void 0:n.type)==="sully_appearance_preset"){if(r.icons===!1&&delete n.customIcons,r.layout===!1){delete n.chatLayout;for(const c of Object.keys(n.theme))Ir(c)&&delete n.theme[c]}for(const[c,k]of Object.entries(Fe))c!=="css"&&r[c]===!1&&delete n.theme[k];if(r.background===!1&&delete n.theme.chatBackgroundStyle,r.bubbles===!1&&(delete n.chatThemes,delete n.theme.chatDefaultBubbleStyle),typeof s.css=="string"){const c=fr(s.css,r);c.trim()?n.theme.chatChromeCustomCss=c:delete n.theme.chatChromeCustomCss}r.css===!1&&r.sound!==!1&&l&&(n.theme.chatSound=l)}else if((n==null?void 0:n.format)==="sullyos-chat-decoration"){for(const c of Object.keys(n.parts))c!=="css"&&r[c]===!1&&delete n.parts[c];if(typeof s.css=="string"){const c=fr(s.css,r);c.trim()?n.parts.css=c:delete n.parts.css}r.css===!1&&r.sound!==!1&&l&&n.parts.sound===void 0&&(n.parts.sound=l)}return n}function Pe({pack:a,selection:r,onChange:n}){const s=bo(a);return s.length?t.jsxs("fieldset",{className:"beauty-share-contents",children:[t.jsx("legend",{children:"本次分享包含"}),t.jsx("p",{children:"作品包含以下内容，默认全部勾选。请取消不想分享的部分，本机原预设不变。"}),s.map(l=>t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",disabled:l.required,checked:r[l.key]!==!1,onChange:c=>n({...r,[l.key]:c.target.checked})}),"包含",l.label,l.key==="sound"?"（会影响接收者的消息提示音）":""]},l.key)),t.jsx("small",{children:"手写 CSS 中未独立保存的效果，随「白框 / 自定义样式」一起分享；气泡内嵌头像框随该气泡一起分享。"})]}):null}const $r=(a,r)=>"beauty_binding_"+a+"_"+r;function De(a){return Array.isArray(a)?a.map(De):a&&typeof a=="object"?Object.fromEntries(Object.keys(a).sort().filter(r=>a[r]!==void 0).map(r=>[r,De(a[r])])):a}async function we(a,r){const n=qa(a,r),{exportedAt:s,createdAt:l,id:c,...k}=n,j=new TextEncoder().encode(JSON.stringify(De(k)));return[...new Uint8Array(await crypto.subtle.digest("SHA-256",j))].map(x=>x.toString(16).padStart(2,"0")).join("")}async function Gr(a,r){const n=await St.getAsset($r(a,r));return n?JSON.parse(n):null}async function Re(a,r,n){await St.saveAsset($r(a,r),JSON.stringify(n))}function Vr({sources:a,source:r,file:n,kind:s,onSource:l,onFile:c,allowFile:k=!0,onPreview:j}){const x=o.useRef(null),A=o.useRef(null),[C,R]=o.useState("all"),[S,g]=o.useState(""),[b,m]=o.useState(0),d=y=>y.categories||[y.kind==="appearance"||!y.kind&&s==="appearance"?"appearance":"chat"],v=ce.filter(([y])=>y==="all"||a.some(V=>d(V).includes(y))),h=a.filter(y=>(C==="all"||d(y).includes(C))&&y.name.toLocaleLowerCase().includes(S.trim().toLocaleLowerCase())),W=Math.max(1,Math.ceil(h.length/12)),I=Math.min(b,W-1),H=()=>{var y,V;(y=x.current)==null||y.close(),(V=A.current)==null||V.focus()};$a(()=>{var y;return(y=x.current)!=null&&y.open?(H(),!0):!1},60);const w=y=>{l(y),H()},[T,L]=o.useState(null),[z,q]=o.useState(""),[$,F]=o.useState(!1),N=a.find(y=>y.id===r),tt=o.useRef(N==null?void 0:N.read);tt.current=N==null?void 0:N.read;const at=o.useRef(j);at.current=j;const[M,X]=o.useState(0);return o.useEffect(()=>{var ct;let y=!0;if(L(null),q(""),(ct=at.current)==null||ct.call(at,null),r==="file"&&!n||r!=="file"&&!tt.current){F(!1);return}F(!0);const V=tt.current;return(r==="file"?Ar(n,s):Promise.resolve().then(()=>V())).then(Ot=>{var _;if(y){const E=qa(Ot,s);L(E),(_=at.current)==null||_.call(at,E)}}).catch(Ot=>{y&&q(Ot instanceof Error?Ot.message:"预览读取失败")}).finally(()=>{y&&F(!1)}),()=>{y=!1}},[r,n,s,N==null?void 0:N.id,N==null?void 0:N.revision,M]),t.jsxs("section",{children:[t.jsxs("div",{className:"beauty-preset-source",children:[t.jsx("span",{children:"分享的作品"}),t.jsxs("button",{ref:A,type:"button",onClick:()=>{var y;return(y=x.current)==null?void 0:y.showModal()},children:[t.jsx("span",{children:(N==null?void 0:N.name)||"选择已保存的预设"}),t.jsx("span",{"aria-hidden":"true",children:"›"})]}),k&&t.jsx("button",{type:"button",onClick:()=>l("file"),children:"上传预设文件"})]}),t.jsxs("dialog",{ref:x,className:"beauty-preset-dialog","aria-labelledby":"beauty-preset-dialog-title",onCancel:y=>{y.preventDefault(),H()},children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("h2",{id:"beauty-preset-dialog-title",children:"选择预设"}),t.jsx("p",{children:"从本机收藏中选一份作品"})]}),t.jsx("button",{className:"beauty-preset-close",type:"button","aria-label":"关闭预设选择",onClick:H,children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round","aria-hidden":"true",children:t.jsx("path",{d:"m6 6 12 12M18 6 6 18"})})})]}),t.jsx("input",{className:"beauty-preset-search",autoFocus:!0,type:"search","aria-label":"搜索已保存的预设",placeholder:"搜索预设名称",value:S,onChange:y=>{g(y.target.value),m(0)}}),t.jsx("nav",{"aria-label":"预设分类",children:v.map(([y,V])=>t.jsx("button",{type:"button","aria-pressed":C===y,onClick:()=>{R(y),m(0)},children:V},y))}),t.jsxs("div",{className:"beauty-preset-results",children:[t.jsxs("p",{className:"beauty-preset-count",children:["共 ",h.length," 份预设 · 选择后查看完整预览"]}),h.slice(I*12,I*12+12).map(y=>t.jsxs("button",{type:"button",className:"beauty-preset-row",onClick:()=>w(y.id),children:[t.jsx("span",{className:"beauty-preset-symbol","aria-hidden":"true",children:d(y).includes("appearance")?"◈":"◇"}),t.jsxs("span",{children:[t.jsx("strong",{children:y.name}),t.jsx("small",{children:d(y).filter(V=>V!=="chat"||d(y).length===1).map(V=>{var Ct;return(Ct=ce.find(([ct])=>ct===V))==null?void 0:Ct[1]}).filter(Boolean).join(" · ")})]}),t.jsx("span",{className:"beauty-preset-select",children:y.id===r?"已选":"选择"})]},y.id)),!h.length&&t.jsx("p",{className:"beauty-preset-empty",children:S?"没有找到这个名字，试试其他关键词。":"这里还没有保存的预设。"})]}),t.jsxs("footer",{children:[t.jsx("button",{type:"button",disabled:I===0,onClick:()=>m(I-1),children:"上一页"}),t.jsxs("span",{"aria-live":"polite",children:[I+1," / ",W]}),t.jsx("button",{type:"button",disabled:I+1>=W,onClick:()=>m(I+1),children:"下一页"})]})]}),r==="file"&&t.jsxs("label",{children:["预设文件（JSON / ZIP / PNG）",t.jsx("input",{type:"file",accept:".json,.zip,.png",onChange:y=>{var V;return c(((V=y.target.files)==null?void 0:V[0])||null)}})]}),N&&t.jsx("button",{type:"button",disabled:$,onClick:()=>X(y=>y+1),children:"刷新预览"}),$&&t.jsx("p",{role:"status",children:"正在载入预设预览…"}),z&&t.jsx("p",{role:"alert",children:z}),!!T&&t.jsx(la,{data:T})]})}const br=256*1024;function Oe(a){if(typeof a!="string"||a.length>br*1.4)throw Error("装扮库封面最多 256 KB");const r=/^data:image\/(png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(a);if(!r)throw Error("请生成 PNG 或 WebP 装扮库封面");let n;try{n=atob(r[2])}catch{throw Error("封面数据无效")}if(n.length>br||(r[1]==="png"?!n.startsWith(`PNG\r

`):!(n.startsWith("RIFF")&&n.slice(8,12)==="WEBP")))throw Error("封面数据无效");return a}function Vo(a){if(!Ke(a)||a.version!==1||!Number.isFinite(a.generatedAt)||!Array.isArray(a.entries)||a.entries.length>1e4)throw Error("装扮库目录格式无效");const r=new Set,n=a.entries.map(s=>{if(!Ke(s)||!/^S-[A-F0-9]{12}$/.test(s.code)||!/^[a-f0-9]{32}$/.test(s.revision)||!/^[a-f0-9]{64}$/.test(s.sha256)||!["appearance","chat-decoration"].includes(s.kind)||!Number.isInteger(s.bytes)||s.bytes<=0||s.bytes>20*1024*1024||!Array.isArray(s.categories)||s.categories.some(k=>typeof k!="string"))throw Error("装扮库条目无效");const l=Cr(s.metadata);if(!l.allowPublicListing||r.has(s.code))throw Error("装扮库条目无效");r.add(s.code);const c=`items/${s.code}/${s.revision}`;if(s.file!==c+".json"||![c+".png",c+".webp"].includes(s.cover))throw Error("装扮库资源地址无效");return{code:s.code,revision:s.revision,sha256:s.sha256,bytes:s.bytes,kind:s.kind,metadata:l,categories:s.categories,cover:s.cover,file:s.file}});return{version:1,generatedAt:a.generatedAt,entries:n}}function Uo(a,r=Math.random){const n=[...a];for(let s=n.length-1;s>0;s--){const l=Math.floor(r()*(s+1));[n[s],n[l]]=[n[l],n[s]]}return n}function Ur(a,r,n){if(!r||!n)throw Error("封面图片尺寸无效");const s=Math.min(1,360/r,600/n),l=document.createElement("canvas");l.width=Math.max(1,Math.round(r*s)),l.height=Math.max(1,Math.round(n*s));const c=l.getContext("2d");if(!c)throw Error("当前设备无法生成封面");return c.drawImage(a,0,0,l.width,l.height),Oe(l.toDataURL("image/webp",.75))}async function mo(a){if(!["image/png","image/jpeg","image/webp"].includes(a.type))throw Error("请选择 PNG、JPG 或 WebP 预览截图");if(a.size>10*1024*1024)throw Error("预览截图最多 10 MB，请先裁剪或缩小");const r=URL.createObjectURL(a),n=new AbortController,s=setTimeout(()=>n.abort(Error("封面图片读取超时，请换一张截图")),15e3);try{const l=new Image;if(l.src=r,await In(l.decode(),n.signal),l.naturalWidth*l.naturalHeight>4e7)throw Error("预览截图尺寸过大，请先裁剪或缩小");return Ur(l,l.naturalWidth,l.naturalHeight)}finally{clearTimeout(s),URL.revokeObjectURL(r)}}function mr({pack:a,cover:r,onCover:n}){const s=o.useRef(a);s.current=a;const l=o.useRef(!0);o.useEffect(()=>(l.current=!0,()=>{l.current=!1}),[]);const c=o.useRef(null),k=o.useRef(null),[j,x]=o.useState(!1),[A,C]=o.useState("");return t.jsxs("div",{className:"beauty-catalog-consent",children:[t.jsx("p",{children:"审核通过后，作品、署名、联系说明、留言及预览素材会在装扮库公开，可被下载。取消公开后缓存可能短暂保留，已下载的副本无法收回。"}),t.jsx(la,{ref:c,data:a}),t.jsx("button",{type:"button",disabled:j,onClick:async()=>{const R=a;x(!0),C(""),n("");try{if(!c.current)throw Error("请等待预览载入");const S=await c.current.capture();l.current&&s.current===R&&n(Ur(S,S.width,S.height))}catch(S){C(S instanceof Error?S.message:"封面生成失败，请重试")}finally{x(!1)}},children:j?"正在生成封面…":r?"重新生成封面":"生成装扮库封面"}),t.jsx("p",{children:"图床限制导致生成失败时，可截取上方示例预览，再上传为封面。请只保留作品预览，不要包含真实聊天或个人信息；封面将随作品一起审核。"}),t.jsx("input",{ref:k,type:"file",accept:"image/png,image/jpeg,image/webp",hidden:!0,onChange:async R=>{var b;const S=(b=R.target.files)==null?void 0:b[0];if(R.target.value="",!S||j)return;const g=a;x(!0),C(""),n("");try{const m=await mo(S);l.current&&s.current===g&&n(m)}catch(m){C(m instanceof Error?m.message:"截图读取失败，请换一张图片")}finally{x(!1)}}}),t.jsx("button",{type:"button",disabled:j,onClick:()=>{var R;return(R=k.current)==null?void 0:R.click()},children:"上传预览截图"}),r&&t.jsxs("div",{children:[t.jsx("img",{src:r,alt:"即将公开的装扮库封面",style:{maxWidth:120,maxHeight:200,objectFit:"contain"}}),t.jsx("p",{children:"封面已就绪，将随作品一起审核。"})]}),A&&t.jsx("p",{role:"alert",children:A})]})}function xo({items:a,session:r,onClose:n,onDone:s}){const l=a.length===1,c=a[0].metadata,[k,j]=o.useState(l?String(c.allowRemix):"keep"),[x,A]=o.useState(l?String(c.allowRedistribute):"keep"),[C,R]=o.useState(l?c.bugFeedback:"keep"),[S,g]=o.useState(l),[b,m]=o.useState(l?c.message:""),[d,v]=o.useState({}),[h,W]=o.useState(!1),[I,H]=o.useState(""),w=o.useRef(null),T=o.useRef(!1);o.useEffect(()=>{var z;return(z=w.current)==null||z.showModal(),()=>{var q;return(q=w.current)==null?void 0:q.close()}},[]);const L=a.every(z=>{var q;return(q=d[z.id])==null?void 0:q.ok});return Ha.createPortal(t.jsxs("dialog",{ref:w,className:"beauty-confirm-dialog beauty-terms-editor","aria-label":"修改使用协议",onCancel:z=>{z.preventDefault(),T.current||n()},children:[t.jsx("h3",{children:l?"修改使用协议":`批量修改协议 · ${a.length} 份`}),t.jsxs("div",{className:"beauty-confirm-body",children:[t.jsx("p",{children:"沿用各作品已审核的文件和分享码，只修改下方约定。新协议仍需人工审核，通常 1–2 天；通过前继续使用旧协议。"}),t.jsxs("fieldset",{disabled:h||Object.keys(d).length>0,children:[t.jsxs("label",{children:["二改许可",t.jsxs("select",{value:k,onChange:z=>j(z.target.value),children:[t.jsx("option",{value:"keep",children:"保持各作品原设置"}),t.jsx("option",{value:"true",children:"允许二改"}),t.jsx("option",{value:"false",children:"禁止二改"})]})]}),t.jsxs("label",{children:["二次传播",t.jsxs("select",{value:x,onChange:z=>A(z.target.value),children:[t.jsx("option",{value:"keep",children:"保持各作品原设置"}),t.jsx("option",{value:"true",children:"允许二次传播"}),t.jsx("option",{value:"false",children:"禁止二次传播"})]})]}),t.jsxs("label",{children:["Bug 反馈",t.jsxs("select",{value:C,onChange:z=>R(z.target.value),children:[t.jsx("option",{value:"keep",children:"保持各作品原设置"}),t.jsx("option",{value:"welcome",children:"欢迎反馈"}),t.jsx("option",{value:"self-fix",children:"请自行修复处理"})]})]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:S,onChange:z=>g(z.target.checked)}),l?"修改作者留言 / 补充约定":"统一替换作者留言 / 补充约定"]}),S&&t.jsx("textarea",{"aria-label":"作者留言与补充约定",rows:4,maxLength:2e3,value:b,onChange:z=>m(z.target.value)})]}),t.jsx("p",{children:"公开展示授权保持各作品原设置。已领取的用户需要检查更新并确认新协议，本机旧副本不会被远程改写。"}),t.jsx("ul",{children:a.map(z=>t.jsxs("li",{children:[z.metadata.name,d[z.id]&&t.jsxs("span",{role:"status",children:[" · ",d[z.id].message]})]},z.id))}),I&&t.jsx("p",{role:"alert",children:I})]}),t.jsxs("footer",{children:[t.jsx("button",{disabled:h,onClick:n,children:L?"完成":"关闭"}),t.jsx("button",{disabled:h||L,onClick:async()=>{var q;if(T.current)return;const z={};if(k!=="keep"&&(z.allowRemix=k==="true"),x!=="keep"&&(z.allowRedistribute=x==="true"),C!=="keep"&&(z.bugFeedback=C),S&&(z.message=b),!Object.keys(z).length){H("请至少选择一项需要修改的约定");return}T.current=!0,W(!0),H("");try{for(const $ of a)if(!((q=d[$.id])!=null&&q.ok))try{const F=await ta(`/submissions/${$.id}/terms`,{method:"POST",token:r.token,body:{terms:z,expectedRevision:$.latestRevision}});let N=!1;if(!F.unchanged)try{const tt=await Gr(r.authorCode,$.id);(tt==null?void 0:tt.revision)===$.latestRevision&&$.latestRevision===$.publishedRevision&&await Re(r.authorCode,$.id,{...tt,revision:F.revision})}catch{N=!0}v(tt=>({...tt,[$.id]:{ok:!0,message:F.unchanged?"协议未变化，无需提交":N?"已送审；本机关联更新失败，请勿重复提交":"已送交人工审核"}}))}catch(F){v(N=>({...N,[$.id]:{ok:!1,message:F instanceof Error?F.message:"提交失败，可重试"}}))}try{await s()}catch{H("提交结果已列出，列表刷新失败，请稍后手动刷新。")}}finally{T.current=!1,W(!1)}},children:h?"正在提交…":L?"已处理":Object.keys(d).length?"重试未成功的作品":"提交协议修改"})]})]}),document.body)}const Wr="sully-beauty-author-defaults-v1";function xr(){let a={};try{a=JSON.parse(localStorage.getItem(Wr)||"{}")}catch{}return{name:"",allowPublicListing:!1,credit:typeof a.credit=="string"?a.credit:"",platforms:Array.isArray(a.platforms)?a.platforms.filter(r=>vr.includes(r)):[],contact:a.contact||"",allowRemix:a.allowRemix===!0,allowRedistribute:a.allowRedistribute===!0,exportVersion:Wa,bugFeedback:a.bugFeedback==="self-fix"?"self-fix":"welcome",message:a.message||""}}function go({metadata:a}){return t.jsxs("div",{className:"beauty-share-terms",children:[t.jsx("strong",{children:a.name}),t.jsxs("p",{children:["署名：",a.credit]}),t.jsxs("p",{children:["Repo 平台：",a.platforms.join("、"),a.contact&&` · ${a.contact}`]}),t.jsxs("p",{children:[a.allowRemix?"允许二改":"不允许二改"," · ",a.allowRedistribute?"允许二次传播":"不允许二次传播"]}),t.jsxs("p",{children:["导出版本：",a.exportVersion]}),t.jsx("p",{children:a.bugFeedback==="welcome"?"欢迎反馈 Bug":"Bug 请自行修复处理"}),a.message&&t.jsx("p",{className:"beauty-share-message",children:a.message})]})}function gr({kind:a,sources:r,onReceive:n,onBusyChange:s,defaultOpen:l=!1,initialTab:c="receive",receivedMessage:k,embedded:j=!1,unified:x=!1,onOpenReceiver:A,surface:C,initialSource:R}){var Ra,Za;const[S,g]=o.useState(l),[b,m]=o.useState(c),[d,v]=o.useState(fn),[h,W]=o.useState(he),[I,H]=o.useState(!!h),[w,T]=o.useState(""),[L,z]=o.useState(!!h),[q,$]=o.useState((h==null?void 0:h.authorCode)||""),[F,N]=o.useState((h==null?void 0:h.password)||""),[tt,at]=o.useState(""),[M,X]=o.useState(!1),[y,V]=o.useState(!1),[Ct,ct]=o.useState(""),[Ot,_]=o.useState(""),[E,Vt]=o.useState(()=>{var i,D;return{...xr(),name:((i=r.find(Q=>Q.id===R))==null?void 0:i.name)||((D=r[0])==null?void 0:D.name)||""}}),[ot,rt]=o.useState(R||((Ra=r[0])==null?void 0:Ra.id)||"file"),[ga,ca]=o.useState(a),ya=x?((Za=r.find(i=>i.id===ot))==null?void 0:Za.kind)||ga:a,[vt,Ca]=o.useState(null),[Bt,et]=o.useState(null),[wt,Et]=o.useState([]),[zt,da]=o.useState(!1),[Dt,B]=o.useState([]),[Ht,aa]=o.useState(null),[pa,Qt]=o.useState(!1),[kt,Da]=o.useState({offset:0,total:0,pageSize:12,nextOffset:null}),[Ut,va]=o.useState("all"),[ua,ha]=o.useState(""),[fa,Lt]=o.useState(""),[Mt,Xt]=o.useState(null),[Aa,nt]=o.useState(null),[Pt,Na]=o.useState(""),[Wt,wa]=o.useState(null),[ka,lt]=o.useState(!1),[ht,ea]=o.useState(null),[ft,p]=o.useState(null),[f,dt]=o.useState(null),pt=o.useMemo(()=>f?Ka(f.pack,f.selection):null,[f]),bt=o.useMemo(()=>Mt?Ka(Mt.pack,Mt.selection):null,[Mt]);$a(()=>{if(y||M)return!0;if(Aa)nt(null);else if(Mt)Xt(null);else if(Ht)aa(null);else if(zt)da(!1);else if(f)dt(null);else if(Bt)et(null);else if(ht)ea(null);else return!1;return!0},30,S);const[Z,K]=o.useState(""),[J,jt]=o.useState("");o.useEffect(()=>K(""),[f]),o.useEffect(()=>jt(""),[Mt]);const G=o.useRef(null);o.useEffect(()=>{var i,D,Q;b==="submit"&&f&&((D=(i=G.current)==null?void 0:i.scrollIntoView)==null||D.call(i,{block:"start"}),(Q=G.current)==null||Q.focus({preventScroll:!0}))},[f,b]);const mt=()=>{var D;if(!ft)return;const i=((D=r.find(Q=>Q.id===ot))==null?void 0:D.name)||(vt==null?void 0:vt.name)||"我的美化";dt({pack:structuredClone(ft),kind:ya,name:i,source:ot,selection:{..._e}}),ct(""),_("")},ut=(i,D)=>Vt(Q=>({...Q,[i]:D})),Y=async i=>{V(!0),s==null||s(!0),ct(""),_("");try{await i()}catch(D){ct(D instanceof Error?D.message:"操作失败，请重试")}finally{V(!1),s==null||s(!1)}},xt=async(i=d,D=kt.offset,Q=Ut,$t=fa)=>{if(!i)return;const Rt=await ta(`/submissions?offset=${D}&status=${Q}&q=${encodeURIComponent($t)}`,{token:i.token});Et(Rt.submissions),Da(Rt),Qt(!0),nt(null),Rt.submissions.length&&Lr(Or)&&da(!0)},ja=()=>Y(async()=>{if(Ye(F),!L&&F!==tt)throw Error("两次输入的密码不一致");const i=await ta(L?"/auth/login":"/auth/register",{method:"POST",body:L?{authorCode:q,password:F}:{password:F}});I?Je(i.authorCode,F):fe(),W(he()),be(i),v(i),N(""),at(""),X(!L),await xt(i,0)}),de=()=>Y(async()=>{var ba;if(!d||M)throw Error("请先保存作者码和密码");if(!f)throw Error("请先确认要分享的作品");const i=Cr({...E,exportVersion:Wa}),D=r.find(ra=>ra.id===f.source);f.source!=="file"&&await((ba=D==null?void 0:D.beforeSubmit)==null?void 0:ba.call(D));const Q=qa(pt,f.kind);if(!await tr(Q))return;const $t=await we(Q,f.kind),Rt=await ta(Bt?`/submissions/${Bt.id}`:"/submissions",{method:"POST",token:d.token,body:{metadata:i,package:Q,...i.allowPublicListing?{catalogCover:Oe(Z)}:{},...Bt?{expectedRevision:Bt.latestRevision}:{}}});if(D!=null&&D.bindingId&&(Rt!=null&&Rt.id))try{await Re(d.authorCode,Rt.id,{sourceId:D.bindingId,kind:f.kind,fingerprint:$t,revision:Rt.revision,selection:f.selection})}catch{ct("投稿已成功，但本机关联未保存。请在我的提交中手动选择作品更新。")}_t("submit",Bt?"revision":"new"),localStorage.setItem(Wr,JSON.stringify({...i,name:""})),Vt(ra=>({...ra,allowPublicListing:!1})),et(null),dt(null),m("mine"),va("all"),ha(""),Lt(""),_("作品已送达，感谢你的分享。人工审核通常需要 1–2 天，通过后就能把专属美化码带给大家了。"),await xt(d,0,"all","")}),Ga=i=>Y(async()=>{var ra;if(!d||i.pendingRevision)throw Error("请等待当前版本审核完成");const D=await Gr(d.authorCode,i.id),Q=D&&r.find(Oa=>Oa.bindingId===D.sourceId&&Oa.kind===D.kind);if(!D||!Q)throw Error("本机没有关联的原始装扮，请用「选择文件更新」重新选择并关联作品。");if(D.revision!==i.latestRevision)throw Error("此作品已在其他地方更新，请用「选择文件更新」确认并重新关联。");await((ra=Q.beforeSubmit)==null?void 0:ra.call(Q));const $t=qa(await(Q.readCurrent||Q.read)(),i.kind),Rt=D.selection||{..._e};if(await we(Ka($t,Rt),i.kind)===D.fingerprint){_("原始装扮没有变化，无需重复提交。");return}Xt({item:i,source:Q,pack:structuredClone($t),selection:Rt})});return o.useEffect(()=>{S&&d&&C!=="receive"&&Y(()=>xt(d,0))},[S]),t.jsxs("section",{className:"beauty-share-panel",children:[zt&&S&&C!=="receive"&&t.jsx(Tr,{author:!0,onClose:()=>da(!1)}),!j&&t.jsxs("button",{type:"button",className:"beauty-share-heading",disabled:y,"aria-expanded":S,onClick:()=>g(i=>!i),children:["美化分享码 ",t.jsx("span",{children:S?"收起":"导出 / 领取 / 我的提交"})]}),S&&t.jsxs(t.Fragment,{children:[C!=="receive"&&t.jsxs("nav",{"aria-label":"美化分享",children:[C!=="author"&&t.jsx("button",{disabled:y,"aria-pressed":b==="receive",onClick:()=>A?A():m("receive"),children:"用码领取"}),t.jsx("button",{disabled:y,"aria-pressed":b==="submit",onClick:()=>m("submit"),children:"投稿获取分享码"}),t.jsx("button",{disabled:y,"aria-pressed":b==="mine",onClick:()=>{m("mine"),Y(()=>xt())},children:"我的提交"})]}),Ct&&t.jsx("p",{role:"alert",className:"beauty-share-error",children:Ct}),Ot&&t.jsx("p",{role:"status",children:Ot}),t.jsxs("fieldset",{disabled:y,children:[b==="submit"&&t.jsxs("div",{className:"beauty-submit-flow",ref:G,tabIndex:-1,children:[t.jsxs("ol",{className:"beauty-submit-steps","aria-label":"投稿进度",children:[t.jsxs("li",{"aria-current":f?void 0:"step",children:[t.jsx("span",{children:f?"✓":"01"}),"确认作品"]}),t.jsxs("li",{"aria-current":f?"step":void 0,children:[t.jsx("span",{children:"02"}),"署名与规范"]})]}),t.jsxs("div",{className:"beauty-submit-intro",children:[t.jsx("small",{children:Bt?"更新作品":"分享你的创作"}),t.jsx("h3",{children:f?"为这份美化，留下你的名字":`先看看，是这份${ya==="appearance"?"桌面主题":"美化作品"}吗？`}),t.jsx("p",{children:f?"写好署名与使用规范，让收到它的人知道如何珍惜。":"确认预览和作品名称，再把它送到大家手中。"})]}),f?t.jsxs("div",{className:"beauty-confirmed-work",children:[t.jsxs("div",{children:[t.jsxs("small",{children:["已确认 · ",f.kind==="appearance"?"桌面主题":"美化作品"]}),t.jsx("strong",{children:f.name})]}),t.jsx("button",{onClick:()=>{dt(null),p(null)},children:"重新选择"}),t.jsx(Pe,{pack:f.pack,selection:f.selection,onChange:i=>dt({...f,selection:i})}),t.jsxs("details",{children:[t.jsx("summary",{children:"再看一眼预览"}),t.jsx(la,{data:pt})]})]}):t.jsxs(t.Fragment,{children:[x&&ot==="file"&&t.jsxs("label",{children:["投稿文件类型",t.jsxs("select",{value:ga,onChange:i=>ca(i.target.value),children:[t.jsx("option",{value:"appearance",children:"桌面主题"}),t.jsx("option",{value:"chat-decoration",children:"聊天 / App 美化"})]})]}),t.jsx(Vr,{kind:ya,sources:r,source:ot,file:vt,onPreview:p,onFile:Ca,onSource:i=>{rt(i),p(null);const D=r.find(Q=>Q.id===i);D&&!Bt&&ut("name",D.name)}}),t.jsxs("div",{className:"beauty-submit-next",children:[t.jsx("p",{children:"这一步只确认作品，还不会上传。"}),t.jsxs("button",{className:"beauty-submit-primary",disabled:!ft,onClick:mt,children:["就是这份，继续 ",t.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})]}),b==="receive"?t.jsxs(t.Fragment,{children:[x&&t.jsx("p",{children:"桌面主题、气泡、头像框、白框等美化码都在这里领取，自动识别，无需选择分类。"}),t.jsxs("label",{children:["美化码",t.jsx("input",{value:Pt,maxLength:20,placeholder:"S-…",autoCapitalize:"characters",onChange:i=>{Na(i.target.value),wa(null),lt(!1),ea(null)}})]}),t.jsx("button",{onClick:()=>Y(async()=>{const i=Pt.trim().toUpperCase();if(!/^S-[A-F0-9]{12}$/.test(i))throw Error("请输入完整的美化码（S- 开头）");wa(null),lt(!1),ea(null);const D=await ta(`/shares/${i}`);if(!x&&D.kind!==a)throw Error(a==="appearance"?"这是聊天装扮，请到外观 App 的统一用码领取入口领取":"这是桌面主题，请到外观 App 的统一用码领取入口领取");wa(D)}),children:"查看说明"}),Wt&&t.jsxs(t.Fragment,{children:[t.jsx(go,{metadata:Wt.metadata}),ht?t.jsx(la,{data:ht}):t.jsx("button",{onClick:()=>Y(async()=>{ea(await Ae(Wt,x?Wt.kind:a))}),children:"预览效果"}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:ka,onChange:i=>lt(i.target.checked)}),"我已阅读作者的使用规范"]}),t.jsx("button",{disabled:!ka,onClick:()=>Y(async()=>{const i=await Ae(Wt,x?Wt.kind:a);await n(i,Wt),_t("import","code"),_(k||(a==="appearance"?"已存入外观预设，可在预设列表中选择应用。":"已载入，请在装扮确认区选择需要应用的部分。"))}),children:"领取并载入预设"})]})]}):(b!=="submit"||f)&&t.jsx(t.Fragment,{children:d?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["作者码：",t.jsx("strong",{className:"beauty-share-code",children:d.authorCode})]}),t.jsxs("div",{className:"beauty-share-actions",children:[t.jsx("button",{onClick:()=>Y(async()=>{await Ze({content:`糯米机美化作者码：${d.authorCode}
请另行妥善保存您设置的密码。恢复身份需要作者码和密码；本文件不是美化分享码。`,fileName:"糯米机-作者码.txt",mimeType:"text/plain"})}),children:"保存作者码"}),t.jsx("button",{onClick:()=>Y(async()=>{await ta("/auth/logout",{method:"POST",token:d.token}),be(null),fe(),W(null),H(!1),N(""),$(""),v(null),Et([]),Qt(!1),X(!1)}),children:"退出登录"})]}),t.jsxs("details",{className:"beauty-author-backup",children:[t.jsx("summary",{children:"作者身份与搬家"}),(h==null?void 0:h.authorCode)===d.authorCode?t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"已记住作者身份。个人完整备份会携带作者码和密码，导入后可直接登录，原投稿绑定也会保留。"}),t.jsx("button",{onClick:()=>{fe(),W(null),H(!1)},children:"不再随备份保存身份"})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"首次开启请验证一次密码。仅写入本机及个人完整备份，不会出现在美化分享文件里。"}),t.jsxs("label",{children:["验证作者密码",t.jsx("input",{type:"password",maxLength:128,autoComplete:"current-password",value:w,onChange:i=>T(i.target.value)})]}),t.jsx("button",{onClick:()=>Y(async()=>{Ye(w);const i=await ta("/auth/login",{method:"POST",body:{authorCode:d.authorCode,password:w}});Je(i.authorCode,w),be(i),v(i),W(he()),T(""),_("已开启作者身份搬家")}),children:"验证并记住身份"})]})]}),M&&t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:!1,onChange:()=>X(!1)}),"我已妥善保存作者码和密码（清缓存或换设备后需要使用）"]}),b==="submit"?t.jsxs(t.Fragment,{children:[Bt&&t.jsxs(t.Fragment,{children:[t.jsxs("h3",{children:["更新：",Bt.metadata.name]}),t.jsx("button",{onClick:()=>{et(null),dt(null),p(null),Vt(xr())},children:"取消更新，改为新投稿"})]}),t.jsxs("label",{children:["美化名",t.jsx("input",{value:E.name,maxLength:80,onChange:i=>ut("name",i.target.value)})]}),t.jsxs("label",{children:["署名",t.jsx("input",{value:E.credit,maxLength:60,onChange:i=>ut("credit",i.target.value)})]}),t.jsx("p",{children:"发放平台（可多选，方便使用者找到作者 Repo）"}),vr.map(i=>t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:E.platforms.includes(i),onChange:D=>ut("platforms",D.target.checked?[...E.platforms,i]:E.platforms.filter(Q=>Q!==i))}),i]},i)),t.jsxs("label",{children:["如何找到你（选填）",t.jsx("input",{value:E.contact,maxLength:160,placeholder:"如群昵称或 DC 用户名",onChange:i=>ut("contact",i.target.value)})]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:E.allowRemix,onChange:i=>ut("allowRemix",i.target.checked)}),"允许二改"]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:E.allowRedistribute,onChange:i=>ut("allowRedistribute",i.target.checked)}),"允许二次传播"]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:E.allowPublicListing===!0,onChange:i=>ut("allowPublicListing",i.target.checked)}),"允许在装扮库公开展示（选填）"]}),E.allowPublicListing&&f&&t.jsx(mr,{pack:pt,cover:Z,onCover:K},f.source),t.jsxs("p",{children:["糯米机版本：",Wa,"（当前导出版本）"]}),t.jsxs("label",{children:["Bug 反馈",t.jsxs("select",{value:E.bugFeedback,onChange:i=>ut("bugFeedback",i.target.value),children:[t.jsx("option",{value:"welcome",children:"欢迎反馈"}),t.jsx("option",{value:"self-fix",children:"Bug 请自行修复处理"})]})]}),t.jsxs("label",{children:["作者留言",t.jsx("textarea",{rows:4,value:E.message,maxLength:2e3,onChange:i=>ut("message",i.target.value)})]}),t.jsxs("div",{className:"beauty-submit-next",children:[t.jsxs("p",{children:["人工审核通常需要 1–2 天，审核前仅你和管理员可见。",Bt?"通过后才会替换原分享码的内容。":"通过后获得专属分享码。","文件最多 20 MB。"]}),t.jsxs("button",{className:"beauty-submit-primary",disabled:M,onClick:de,children:["送交审核 ",t.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"beauty-list-tools",children:[t.jsxs("label",{children:["提交状态",t.jsxs("select",{value:Ut,onChange:i=>{va(i.target.value),Y(()=>xt(d,0,i.target.value))},children:[t.jsx("option",{value:"all",children:"全部"}),t.jsx("option",{value:"pending",children:"人工审核中"}),t.jsx("option",{value:"approved",children:"已通过"}),t.jsx("option",{value:"rejected",children:"已退回"})]})]}),t.jsxs("label",{children:["查找作品",t.jsx("input",{value:ua,maxLength:80,placeholder:"名称或美化码",onChange:i=>ha(i.target.value),onKeyDown:i=>{i.key==="Enter"&&(i.preventDefault(),Lt(ua),Y(()=>xt(d,0,Ut,ua)))}})]})]}),t.jsxs("div",{className:"beauty-share-actions",children:[t.jsx("button",{onClick:()=>{Lt(ua),Y(()=>xt(d,0,Ut,ua))},children:"查找"}),t.jsx("button",{onClick:()=>Y(()=>xt()),children:"刷新状态"}),t.jsxs("span",{className:"beauty-list-count",children:["共 ",kt.total," 份作品"]})]}),t.jsxs("div",{className:"beauty-share-actions",children:[t.jsx("button",{disabled:!wt.some(i=>i.shareCode&&!i.pendingRevision),onClick:()=>B(i=>[...i,...wt.filter(D=>D.shareCode&&!D.pendingRevision&&!i.some(Q=>Q.id===D.id))]),children:"选择本页可修改的作品"}),t.jsxs("button",{disabled:!Dt.length,onClick:()=>aa(Dt),children:["批量修改协议（",Dt.length,"）"]}),Dt.length>0&&t.jsx("button",{onClick:()=>B([]),children:"清空选择"})]}),pa&&!wt.length&&t.jsx("p",{className:"beauty-empty",children:Ut!=="all"||fa?"没有符合条件的提交，试试其他状态或名称。":"还没有提交。点击「投稿获取分享码」分享你的第一份美化吧。"}),wt.map(i=>t.jsxs("article",{children:[i.shareCode&&!i.pendingRevision&&t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:Dt.some(D=>D.id===i.id),onChange:D=>B(Q=>D.target.checked?[...Q.filter($t=>$t.id!==i.id),i]:Q.filter($t=>$t.id!==i.id))}),"选择修改协议"]}),t.jsx("strong",{children:i.metadata.name}),t.jsxs("p",{className:"beauty-item-meta",children:[i.kind==="appearance"?"桌面主题":"美化预设"," ",t.jsx("span",{className:`beauty-status is-${i.status}`,children:i.status==="pending"?"人工审核中":i.status==="approved"?"审核通过":"已退回"})]}),i.status==="pending"&&t.jsx("p",{className:"beauty-share-message",children:"人工审核通常需要 1–2 天，请耐心等待。"}),i.reviewNote&&t.jsxs("p",{className:"beauty-share-message",children:["审核说明：",i.reviewNote]}),i.shareCode&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"beauty-share-code",children:i.shareCode}),i.status!=="approved"&&t.jsx("p",{children:"分享码仍提供上次审核通过的版本。"}),t.jsx("button",{onClick:()=>Y(async()=>{await Ze({content:`${i.shareCode}
在糯米机「聊天装扮」或「外观装扮」的「导入装扮 → 用码领取」输入此码，自动识别美化类型。`,fileName:"美化分享码.txt",mimeType:"text/plain"})}),children:"分享码保存为文件"}),t.jsx("button",{onClick:()=>Y(async()=>{await navigator.clipboard.writeText(i.shareCode),_("美化码已复制")}),children:"复制美化码"})]}),t.jsxs("div",{className:"beauty-share-actions",children:[i.shareCode&&t.jsx("button",{onClick:()=>Y(async()=>{const{openBeautyPoster:D}=await Ja(async()=>{const{openBeautyPoster:Q}=await import("./BeautyPosterDialog-p7seGW0L.js");return{openBeautyPoster:Q}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));await D(i.shareCode)}),children:"分享预览图"}),t.jsx("button",{disabled:!!i.pendingRevision||!x&&i.kind!==a,onClick:()=>{var D;et(i),dt(null),p(null),x&&(ca(i.kind),rt(((D=r.find(Q=>Q.kind===i.kind))==null?void 0:D.id)||"file"),Ca(null)),Vt({...i.metadata,allowPublicListing:!i.catalogHidden&&i.metadata.allowPublicListing===!0,exportVersion:Wa}),m("submit")},children:"选择文件更新"}),t.jsx("button",{disabled:!!i.pendingRevision,onClick:()=>Ga(i),children:"一键更新"}),i.shareCode&&t.jsx("button",{disabled:!!i.pendingRevision,onClick:()=>aa([i]),children:"修改协议"}),!i.catalogHidden&&(i.catalogPublic||i.metadata.allowPublicListing)&&t.jsx("button",{onClick:()=>Y(async()=>{await ta(`/submissions/${i.id}/hide-catalog`,{method:"POST",token:d.token}),await xt(),_("已取消公开展示。静态目录与缓存会稍后更新，已下载副本无法收回；原分享码仍可使用。")}),children:"取消公开展示"}),t.jsx("button",{onClick:()=>nt(i.id),children:"删除"})]}),!x&&i.kind!==a&&t.jsxs("p",{children:["请到",i.kind==="appearance"?"桌面主题":"美化预设","更新此作品。"]}),Aa===i.id&&t.jsxs("div",{className:"beauty-delete-confirm",children:[t.jsxs("p",{children:["删除「",i.metadata.name,"」？分享码立即失效，已下载的副本无法收回。"]}),t.jsx("button",{onClick:()=>Y(async()=>{await ta(`/submissions/${i.id}`,{method:"DELETE",token:d.token}),(Bt==null?void 0:Bt.id)===i.id&&et(null),await xt(),_("已删除该作品。")}),children:"确认删除"}),t.jsx("button",{onClick:()=>nt(null),children:"取消"})]})]},i.id)),kt.total>0&&t.jsxs("div",{className:"beauty-pagination","aria-label":"我的提交分页",children:[t.jsx("button",{disabled:!kt.offset,onClick:()=>Y(()=>xt(d,Math.max(0,kt.offset-kt.pageSize))),children:"上一页"}),t.jsxs("span",{children:["第 ",Math.floor(kt.offset/kt.pageSize)+1," / ",Math.max(1,Math.ceil(kt.total/kt.pageSize))," 页"]}),t.jsx("button",{disabled:kt.nextOffset===null,onClick:()=>Y(()=>xt(d,kt.nextOffset)),children:"下一页"})]})]})]}):t.jsxs("div",{children:[t.jsx("p",{children:"首次提交建立作者身份，当前浏览器会记住登录。换设备时，用作者码和密码恢复。"}),t.jsxs("div",{className:"beauty-share-actions",children:[t.jsx("button",{"aria-pressed":!L,onClick:()=>z(!1),children:"首次使用"}),t.jsx("button",{"aria-pressed":L,onClick:()=>z(!0),children:"恢复作者身份"})]}),L&&t.jsxs("label",{children:["作者码",t.jsx("input",{value:q,maxLength:20,autoComplete:"username",onChange:i=>$(i.target.value)})]}),t.jsxs("label",{children:["密码（12–128 字符）",t.jsx("input",{type:"password",value:F,minLength:12,maxLength:128,autoComplete:L?"current-password":"new-password",onChange:i=>N(i.target.value)})]}),!L&&t.jsxs("label",{children:["再次输入密码",t.jsx("input",{type:"password",value:tt,maxLength:128,autoComplete:"new-password",onChange:i=>at(i.target.value)})]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",checked:I,onChange:i=>H(i.target.checked)}),"记住作者身份，随个人完整备份搬家（含密码，不进入美化分享文件）"]}),t.jsx("button",{onClick:ja,children:L?"登录":"建立作者身份"})]})})]}),y&&t.jsx("p",{role:"status",children:"处理中，请稍候…"})]}),Ht&&d&&t.jsx(xo,{items:Ht,session:d,onClose:()=>aa(null),onDone:async()=>{B([]),await xt()}}),Mt&&t.jsxs(Pa,{title:"提交新版装扮",confirm:"提交审核",onClose:()=>Xt(null),onConfirm:async()=>{var Rt,ba;if(!d)throw Error("请重新登录作者身份");const i=Mt,D=qa(bt,i.item.kind),Q=await we(D,i.item.kind);if(await((ba=(Rt=i.source).beforeSubmit)==null?void 0:ba.call(Rt)),!await tr(D))throw Error("尚未确认文件分享");const $t=await ta(`/submissions/${i.item.id}`,{method:"POST",token:d.token,body:{metadata:{...i.item.metadata,allowPublicListing:!i.item.catalogHidden&&i.item.metadata.allowPublicListing===!0,exportVersion:Wa},...!i.item.catalogHidden&&i.item.metadata.allowPublicListing?{catalogCover:Oe(J)}:{},package:D,expectedRevision:i.item.latestRevision}});_t("submit","revision");try{await Re(d.authorCode,i.item.id,{sourceId:i.source.bindingId,kind:i.item.kind,fingerprint:Q,revision:$t.revision,selection:i.selection})}catch{ct("新版已提交，但本机关联未保存，请勿重复提交。")}_("新版已送交人工审核，通常需要 1–2 天。通过后原分享码将提供新版，审核期间继续提供已通过的版本。"),Xt(null);try{await xt()}catch{ct("提交成功，状态刷新失败，请手动刷新。")}},children:[t.jsx("p",{children:"检测到您的原始装扮已经更新，是否提交？"}),t.jsxs("p",{children:["「",Mt.source.name,"」"]}),t.jsx(Pe,{pack:Mt.pack,selection:Mt.selection,onChange:i=>Xt({...Mt,selection:i})}),t.jsx("p",{children:"沿用原投稿的署名和使用规范。需要修改说明时，请使用「选择文件更新」。"}),!Mt.item.catalogHidden&&Mt.item.metadata.allowPublicListing&&t.jsx(mr,{pack:bt,cover:J,onCover:jt}),t.jsxs("details",{children:[t.jsx("summary",{children:"查看本次更新预览"}),t.jsx(la,{data:bt})]})]})]})}function yo({entry:a,onOpen:r,getUsage:n,...s}){const l=o.useRef(null),c=o.useRef(a);c.current=a;const[k,j]=o.useState(!1),[x,A]=o.useState(),[C,R]=o.useState("");o.useEffect(()=>{const b=new IntersectionObserver(m=>{m.some(d=>d.isIntersecting)&&(j(!0),b.disconnect())},{rootMargin:"100px"});return l.current&&b.observe(l.current),()=>b.disconnect()},[]),o.useEffect(()=>{if(!k)return;let b=!0;return A(void 0),R(""),Kr(c.current).then(m=>{b&&A(m)}).catch(m=>{b&&R(m instanceof Error?m.message:"装扮读取失败")}),()=>{b=!1}},[k,a.id,a.revision]);const[S,g]=o.useState("");return o.useEffect(()=>{let b=!0;return g(""),x&&n&&n(x.pack).then(m=>{b&&g(m)}),()=>{b=!1}},[x,n]),t.jsxs("article",{className:"wardrobe-item",children:[t.jsxs("button",{ref:l,type:"button",className:"wardrobe-tile",onClick:()=>r(a,x),"aria-label":`预览 ${a.name}`,children:[t.jsx("div",{className:"wardrobe-cover","aria-hidden":"true",children:x?t.jsx(la,{data:x.pack,compact:!0}):t.jsx("span",{className:"wardrobe-placeholder",children:C?"点按重试预览":"预览载入中"})}),t.jsx("strong",{children:a.name}),S&&t.jsx("span",{className:"wardrobe-usage",children:S}),t.jsx("span",{className:"wardrobe-credit",children:x?`${_r(x.origin)}${x.origin.credit?" · "+x.origin.credit:""}${ia(x.origin)?"":" · 禁止二改"}`:C?"读取失败 · 可重试或删除":"正在读取来源"})]}),C&&t.jsx("p",{className:"wardrobe-credit",role:"alert",children:C}),t.jsx(qr,{entry:a,origin:x==null?void 0:x.origin,...s}),(x==null?void 0:x.share)&&t.jsx(Nr,{share:x.share})]})}function qr({entry:a,origin:r,onEdit:n,onShare:s,onDelete:l,onUpdate:c}){const[k,j]=o.useState(!1);return r?r.kind==="builtin"?null:t.jsxs("div",{className:"wardrobe-card-actions","aria-label":`${a.name}的操作`,children:[r.kind==="imported"&&r.share&&c&&t.jsx("button",{disabled:k,onClick:async()=>{j(!0);try{await c(a)}finally{j(!1)}},children:k?"检查中…":"检查更新"}),n&&t.jsx("button",{disabled:!ia(r),title:ia(r)?void 0:"作者禁止二改",onClick:()=>n(a),children:"编辑"}),r.kind==="self"&&s&&t.jsx("button",{onClick:()=>s(a),children:"分享"}),l&&t.jsx("button",{className:"is-danger",onClick:()=>l(a),children:"删除"})]}):l?t.jsx("div",{className:"wardrobe-card-actions","aria-label":`${a.name}的操作`,children:t.jsx("button",{className:"is-danger",onClick:()=>l(a),children:"删除"})}):null}async function Kr(a){const r=await(a.readLocal||a.read)();let n=null;try{const s=await St.getAsset("beauty_source_"+await a.attributionKey()),l=s?JSON.parse(s):null;l!=null&&l.metadata&&/^S-[A-F0-9]{12}$/.test(l.code)&&(n=l)}catch{}return{pack:r,share:n,origin:await Gt(await a.attributionKey())}}function Co({entry:a,initial:r,onClose:n,onApply:s,onEdit:l,onExport:c,onShare:k,onDelete:j,onUpdate:x}){var v;const A=o.useRef(null),[C,R]=o.useState(r),[S,g]=o.useState(""),[b,m]=o.useState(0);$a(()=>(n(),!0),40),o.useEffect(()=>{var h;return(h=A.current)==null||h.showModal(),()=>{var W;return(W=A.current)==null?void 0:W.close()}},[]),o.useEffect(()=>{if(r)return;let h=!0;return g(""),Kr(a).then(W=>{h&&R(W)}).catch(W=>{h&&g(W instanceof Error?W.message:"预览读取失败")}),()=>{h=!1}},[a,r,b]);const d=(v=C==null?void 0:C.share)==null?void 0:v.metadata;return Ha.createPortal(t.jsxs("dialog",{ref:A,className:"wardrobe-detail","aria-labelledby":"wardrobe-detail-title",onCancel:n,children:[t.jsxs("header",{children:[t.jsx("button",{type:"button",onClick:n,"aria-label":"返回我的装扮",children:"‹"}),t.jsx("span",{children:"装扮预览"}),C!=null&&C.share?t.jsx(Nr,{share:C.share}):t.jsx("span",{className:"wardrobe-detail-label",children:"本机"})]}),t.jsxs("div",{className:"wardrobe-detail-scroll",children:[t.jsx("div",{className:"wardrobe-detail-stage",children:C?t.jsx(la,{data:C.pack}):S?t.jsxs("div",{role:"alert",children:[t.jsx("p",{children:S}),t.jsx("button",{onClick:()=>m(h=>h+1),children:"重新载入"})]}):t.jsx("p",{role:"status",children:"正在载入预览…"})}),t.jsxs("div",{className:"wardrobe-detail-info",children:[t.jsx("h2",{id:"wardrobe-detail-title",children:a.name}),t.jsx("p",{children:d?`作者 · ${d.credit}`:"保存在这台设备上的装扮"}),C&&t.jsxs("p",{children:[_r(C.origin),ia(C.origin)?"":" · 作者禁止二改，编辑已锁定"]}),t.jsx(qr,{entry:a,origin:C==null?void 0:C.origin,onEdit:l?h=>{n(),l(h)}:void 0,onShare:k?h=>{n(),k(h)}:void 0,onUpdate:x?h=>{n(),x(h)}:void 0,onDelete:j?h=>{n(),j(h)}:void 0}),a.contents&&t.jsxs("p",{children:["会应用：",a.contents,"。按作者提供的完整作品应用。"]}),d&&t.jsxs("details",{children:[t.jsx("summary",{children:"作者留言与使用规范"}),d.message&&t.jsx("p",{className:"wardrobe-message",children:d.message}),t.jsxs("p",{children:[d.allowRemix?"允许二改":"不允许二改"," · ",d.allowRedistribute?"允许二次传播":"不允许二次传播"]}),t.jsxs("p",{children:["导出版本：",d.exportVersion]}),t.jsxs("p",{children:["Repo：",d.platforms.join("、"),d.contact&&` · ${d.contact}`]}),t.jsx("p",{children:d.bugFeedback==="welcome"?"欢迎反馈 Bug":"Bug 请自行修复处理"})]})]})]}),t.jsxs("footer",{children:[t.jsx("span",{children:"应用后查看实际效果"}),t.jsx("button",{type:"button",disabled:!C,onClick:()=>{n(),s(a)},children:"立即应用"})]})]}),document.body)}function xa({entries:a,getUsage:r,onApply:n,onEdit:s,onExport:l,onShare:c,onDelete:k,onUpdate:j,searchOpen:x=!1,title:A="我的收藏"}){const[C,R]=o.useState("");o.useEffect(()=>{x||(R(""),g(0))},[x]);const[S,g]=o.useState(0),[b,m]=o.useState(),d=a.filter(H=>H.name.toLocaleLowerCase().includes(C.trim().toLocaleLowerCase())),v=Math.max(1,Math.ceil(d.length/12)),h=Math.min(S,v-1),W=o.useRef(null),I=H=>{var w;g(H),(w=W.current)==null||w.scrollIntoView({block:"start"})};return t.jsxs("div",{ref:W,className:"wardrobe-library",children:[x&&t.jsx("input",{autoFocus:!0,className:"wardrobe-search","aria-label":"查找本机装扮",placeholder:"搜索已收藏的装扮",value:C,onChange:H=>{R(H.target.value),g(0)}}),t.jsxs("div",{className:"wardrobe-list-caption",children:[t.jsx("h3",{children:A}),t.jsxs("span",{children:["本机 · ",d.length," 款"]})]}),t.jsx("div",{className:"wardrobe-grid",children:d.slice(h*12,h*12+12).map(H=>t.jsx(yo,{getUsage:r,entry:H,onEdit:s,onShare:c,onDelete:k,onUpdate:j,onOpen:(w,T)=>m({entry:w,loaded:T})},H.id))}),!d.length&&t.jsxs("div",{className:"wardrobe-empty",children:[t.jsx("span",{children:"✧"}),t.jsx("h3",{children:C?"没有找到这款装扮":"把喜欢的装扮留在这里"}),t.jsx("p",{children:C?"换个名称试试。":"保存预设、导入文件或用分享码领取后，就能在这里预览和应用。"})]}),v>1&&t.jsxs("nav",{className:"wardrobe-pagination","aria-label":"本机装扮分页",children:[t.jsx("button",{disabled:h===0,onClick:()=>I(h-1),children:"上一页"}),t.jsxs("span",{children:[h+1," / ",v]}),t.jsx("button",{disabled:h+1===v,onClick:()=>I(h+1),children:"下一页"})]}),b&&t.jsx(Co,{entry:b.entry,initial:b.loaded,onClose:()=>m(void 0),onApply:n,onEdit:s,onExport:l,onShare:c,onDelete:k,onUpdate:j})]})}function vo(a){const r=new Map;return{text:a.replace(/data:image\/[\w.+-]+;base64,[a-z\d+/=\r\n]+/gi,s=>{let l=`sully-embedded-image-${r.size+1}`;for(;a.includes(l);)l+="-asset";return r.set(l,s),l}),count:r.size,expand:s=>s.replace(/sully-embedded-image-\d+(?:-asset)*/g,l=>r.get(l)??l)}}function wo({value:a,onChange:r,...n}){const s=o.useMemo(()=>vo(a),[a]),[l,c]=o.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("textarea",{...n,value:s.text,onChange:k=>r(s.expand(k.target.value))}),(s.count>0||a.includes("blobref:"))&&t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"图片使用短名称显示；复制完整 CSS 时会包含图片。"}),t.jsx("button",{type:"button",disabled:n.disabled,onClick:async()=>{try{await navigator.clipboard.writeText(await jr(a)),c("已复制完整 CSS")}catch{c("复制失败，请重试")}},children:"复制完整 CSS（含图片）"}),l&&t.jsx("p",{role:"status",children:l})]})]})}const ee={avatarDecorationX:me.avatarDecorationX,avatarDecorationY:me.avatarDecorationY,avatarDecorationScale:me.avatarDecorationScale,avatarDecorationRotate:0};function ko(a,r,n,s=ee){if(!Number.isFinite(r)||!Number.isFinite(n)||r<=0||n<=0)throw Error("头像框图片尺寸无效");return`.sully-chat-avatar-wrap::after {
  content: ''; position: absolute; inset: auto;
  left: ${s.avatarDecorationX}%; top: ${s.avatarDecorationY}%;
  width: ${s.avatarDecorationScale*100}%; height: auto; aspect-ratio: ${r} / ${n};
  transform: translate(-50%, -50%) rotate(${s.avatarDecorationRotate}deg);
  background: url(${JSON.stringify(a)}) center / 100% 100% no-repeat;
  pointer-events: none; z-index: 2;
}
.sully-chat-message-avatar-img { border-radius: 50%; }`}function jo({css:a,disabled:r,onChange:n,onBusy:s,onError:l}){const[c,k]=o.useState(null),[j,x]=o.useState({...ee}),A=o.useRef(!0);o.useEffect(()=>(A.current=!0,()=>{A.current=!1}),[]);const[C,R]=o.useState(()=>Ne(a));o.useEffect(()=>{a.trim()&&R(Ne(a))},[a]);const S=(b,m,d,v=ee)=>se(ko(b,m,d,v),C),g=c&&a===S(c.image,c.width,c.height,j);return t.jsxs(t.Fragment,{children:[t.jsxs("label",{children:["头像框给谁用",t.jsx("select",{"aria-label":"头像框给谁用",disabled:r,value:C,onChange:b=>{const m=b.target.value;R(m),n(se(a,m))},children:Te.map(([b,m])=>t.jsx("option",{value:b,children:m},b))})]}),t.jsxs("label",{children:["选择透明头像框图片",t.jsx("input",{type:"file",accept:"image/*",disabled:r,onChange:async b=>{var v;const m=(v=b.target.files)==null?void 0:v[0];if(b.target.value="",!m)return;s(!0),l("");let d;try{if(m.size>12*1024*1024)throw Error("请选择 12 MB 以内的图片");if(!m.type.startsWith("image/"))throw Error("请上传图片文件");d=URL.createObjectURL(m);const h=new Image;if(await new Promise((H,w)=>{h.onload=()=>H(),h.onerror=()=>w(Error("头像框图片读取失败")),h.src=d}),!A.current)return;const{token:W}=await nn(m);if(!A.current)return;const I={image:W,width:h.naturalWidth,height:h.naturalHeight};k(I),x({...ee}),n(S(W,I.width,I.height))}catch(h){A.current&&l(h instanceof Error?h.message:"图片读取失败")}finally{d&&URL.revokeObjectURL(d),A.current&&s(!1)}}})]}),g&&t.jsxs("fieldset",{disabled:r,children:[t.jsx("legend",{children:"头像框位置与大小"}),[["avatarDecorationX","左右位置",0,100,.1],["avatarDecorationY","上下位置",0,100,.1],["avatarDecorationScale","缩放",.5,3,.01],["avatarDecorationRotate","旋转",-180,180,1]].map(([b,m,d,v,h])=>t.jsxs("label",{children:[m,"：",j[b],t.jsx("input",{"aria-label":m,type:"range",min:d,max:v,step:h,value:j[b],onChange:W=>{const I={...j,[b]:Number(W.target.value)};x(I),n(S(c.image,c.width,c.height,I))}})]},b))]})]})}function Le({preset:a,category:r}){var s;const n=o.useMemo(()=>{if(r==="whitebox"||r==="collaboration")return a;const l=r==="date"?{date:a.parts.date||{preset:"none"}}:r==="story"?{story:a.parts.story||{preset:"none"}}:r==="journal"?{journal:a.parts.journal||{preset:"original"}}:r==="schedule"?{schedule:a.parts.schedule||{preset:"original"}}:r==="psyche"?{psyche:a.parts.psyche||{styleId:"echo"}}:r==="avatar"?{bubbles:a.parts.bubbles||Yt.default,css:[...(a.parts.css||"").matchAll(ae("avatar"))].map(c=>c[0]).join(`
`)||void 0}:r==="bubbles"?{bubbles:a.parts.bubbles||Yt.default}:r==="background"?{background:a.parts.background||{image:null,style:"plain"},css:a.parts.css}:{};return{...a,parts:l}},[a,r]);return r==="sound"?t.jsxs("div",{className:"decoration-sound-thumb","aria-hidden":"true",children:[t.jsx("svg",{viewBox:"0 0 80 48",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",children:t.jsx("path",{d:"M8 21v6m10-12v18m11-23v28m11-34v40m11-32v24m11-19v14m10-10v6"})}),t.jsx("small",{children:(s=a.parts.sound)!=null&&s.src&&a.parts.sound.src!=="none"?"消息提示音":"默认提示音"})]}):t.jsx("div",{className:"decoration-mini-preview","aria-hidden":"true",children:t.jsx(la,{data:n,compact:!0,thumbnailPart:r==="whitebox"?"full":r})})}function Yr({getUsage:a,entry:r,category:n,disabled:s,onChoose:l}){const c=o.useRef(r.readLocal||r.read);c.current=r.readLocal||r.read;const[k,j]=o.useState(null),[x,A]=o.useState(!1);o.useEffect(()=>{let S=!0;return j(null),A(!1),Promise.resolve().then(()=>c.current()).then(g=>{S&&j(Nt(g))}).catch(()=>{S&&A(!0)}),()=>{S=!1}},[r.id,r.revision]);const[C,R]=o.useState("");return o.useEffect(()=>{let S=!0;return R(""),k&&a&&a(k).then(g=>{S&&R(g)}),()=>{S=!1}},[k,a]),t.jsxs("button",{className:"decoration-preset-tile","aria-label":`选择 ${r.name}`,disabled:s,onClick:l,children:[t.jsx("span",{className:"decoration-preset-tile-image","data-category":n,children:k?t.jsx(Le,{preset:k,category:n}):t.jsx("span",{className:"decoration-thumbnail-loading",children:x?"预览暂不可用":"载入预览…"})}),t.jsx("strong",{children:r.name}),C&&t.jsx("span",{className:"wardrobe-usage",children:C}),t.jsxs("small",{children:["选择这款 ",t.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})}const te=6;function So({getUsage:a,entries:r,busy:n,error:s,onClose:l,onChoose:c,onDelete:k,onSave:j}){const x=o.useRef(null),A=o.useRef(null),[C,R]=o.useState(""),[S,g]=o.useState(0),b=o.useMemo(()=>r.filter(v=>v.name.toLocaleLowerCase().includes(C.trim().toLocaleLowerCase())),[r,C]),m=Math.max(1,Math.ceil(b.length/te)),d=Math.min(S,m-1);return o.useEffect(()=>{var v;return(v=x.current)==null||v.showModal(),()=>{var h;return(h=x.current)==null?void 0:h.close()}},[]),o.useEffect(()=>{g(d),A.current&&(A.current.scrollTop=0)},[d,C]),t.jsxs("dialog",{ref:x,className:"outfit-collection","aria-labelledby":"outfit-collection-title",onCancel:v=>{v.preventDefault(),n||l()},children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("h2",{id:"outfit-collection-title",children:"搭配收藏"}),t.jsx("p",{children:"选中后先预览，喜欢再应用。"})]}),t.jsx("button",{disabled:n,"aria-label":"关闭搭配收藏",onClick:l,children:"×"})]}),t.jsxs("div",{className:"outfit-collection-tools",children:[t.jsx("input",{type:"search","aria-label":"搜索搭配收藏",placeholder:"搜索搭配名称",value:C,onChange:v=>{R(v.target.value),g(0)}}),t.jsx("button",{disabled:n,onClick:j,children:"保存当前搭配"})]}),t.jsxs("div",{className:"outfit-collection-count",role:"status",children:[C.trim()?`找到 ${b.length} 套`:`共 ${r.length} 套`," · 每页 ",te," 套"]}),t.jsxs("div",{className:"outfit-collection-results",ref:A,children:[b.slice(d*te,(d+1)*te).map(v=>t.jsxs("article",{children:[t.jsx(Yr,{getUsage:a,entry:v,category:"whitebox",disabled:n,onChoose:()=>c(v)}),t.jsx("button",{className:"outfit-collection-delete",disabled:n,"aria-label":`删除搭配 ${v.name}`,onClick:()=>k(v),children:"删除"})]},v.id)),!b.length&&t.jsx("p",{className:"outfit-collection-empty",children:C.trim()?"没有找到这套搭配，换个名称试试。":"还没有收藏。把当前喜欢的组合保存下来吧。"})]}),s&&t.jsx("p",{role:"alert",children:s}),t.jsxs("footer",{children:[t.jsx("button",{disabled:n||d===0,onClick:()=>g(d-1),children:"上一页"}),t.jsx("label",{children:t.jsx("select",{"aria-label":"跳转到搭配页",disabled:n||m===1,value:d,onChange:v=>g(Number(v.target.value)),children:Array.from({length:m},(v,h)=>t.jsxs("option",{value:h,children:["第 ",h+1," / ",m," 页"]},h))})}),t.jsx("button",{disabled:n||d===m-1,onClick:()=>g(d+1),children:"下一页"})]})]})}function Eo(a,r){const[n,s]=o.useState(a);return o.useEffect(()=>{if(!r){s(a);return}const l=setTimeout(()=>s(a),300);return()=>clearTimeout(l)},[a,r]),r?n:a}const Zt=({active:a,label:r,desc:n,onClick:s})=>t.jsxs("button",{onClick:s,className:`px-3 py-2 text-[11px] font-bold rounded-xl border transition-all active:scale-95 ${a?"bg-primary/10 text-primary border-primary/30 ring-1 ring-primary/20":"bg-white text-slate-500 border-slate-200 hover:border-slate-300"}`,children:[t.jsx("div",{children:r}),n&&t.jsx("div",{className:"text-[9px] font-normal mt-0.5 opacity-70",children:n})]}),Ao=({value:a,onChange:r})=>t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"头像显示"}),t.jsx("div",{className:"flex gap-2 flex-wrap",children:[["both","全部显示"],["hide_ai","隐藏角色侧"],["hide_user","隐藏我的"],["hide_both","全部隐藏"]].map(([n,s])=>t.jsx(Zt,{active:(a.chatAvatarVisibility||"both")===n,label:s,onClick:()=>r({chatAvatarVisibility:n})},n))}),(a.chatAvatarVisibility||"both")!=="both"&&t.jsxs("label",{className:"flex items-center gap-2 mt-2 text-[11px] text-slate-500",children:[t.jsx("input",{type:"checkbox",checked:!!a.chatSnapToEdge,onChange:n=>r({chatSnapToEdge:n.target.checked}),className:"accent-current"}),"隐藏的一侧气泡贴边（收回头像空位）"]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"头像位置"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(Zt,{active:(a.chatAvatarPlacement||"beside")==="beside",label:"气泡旁（默认）",desc:"跟随头像出现频率",onClick:()=>r({chatAvatarPlacement:"beside"})}),t.jsx(Zt,{active:a.chatAvatarPlacement==="above_group",label:"每轮气泡上方",desc:"连续气泡共用一次头像",onClick:()=>r({chatAvatarPlacement:"above_group"})})]})]}),(a.chatAvatarPlacement||"beside")==="beside"&&t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"头像对齐气泡"}),t.jsx("div",{className:"flex gap-2 flex-wrap",children:[["bottom","底部（默认）"],["top","顶部"],["center","垂直居中"]].map(([n,s])=>t.jsx(Zt,{active:(a.chatAvatarAlign||"bottom")===n,label:s,onClick:()=>r({chatAvatarAlign:n})},n))}),t.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[t.jsx("span",{className:"text-[11px] text-slate-500 shrink-0",children:"垂直微调"}),t.jsx("input",{type:"range",min:-16,max:16,step:2,value:a.chatAvatarOffsetY||0,onChange:n=>r({chatAvatarOffsetY:Number(n.target.value)}),className:"flex-1 accent-current"}),t.jsxs("span",{className:"text-[11px] font-mono text-slate-500 w-10 text-right",children:[a.chatAvatarOffsetY||0,"px"]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"气泡正文字号"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(Zt,{active:!a.chatBubbleFontSize,label:"默认",onClick:()=>r({chatBubbleFontSize:0})}),[12,13,14,15,16].map(n=>t.jsx(Zt,{active:a.chatBubbleFontSize===n,label:`${n}px`,onClick:()=>r({chatBubbleFontSize:n})},n))]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"气泡正文行距"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(Zt,{active:!a.chatBubbleLineHeight,label:"默认",onClick:()=>r({chatBubbleLineHeight:0})}),[1.2,1.35,1.5,1.7].map(n=>t.jsx(Zt,{active:a.chatBubbleLineHeight===n,label:String(n),onClick:()=>r({chatBubbleLineHeight:n})},n))]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"气泡与头像间距"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(Zt,{active:!a.chatBubbleIndent,label:"默认 (48px)",onClick:()=>r({chatBubbleIndent:0})}),[28,60,72].map(n=>t.jsx(Zt,{active:a.chatBubbleIndent===n,label:`${n}px`,onClick:()=>r({chatBubbleIndent:n})},n))]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[11px] font-bold text-slate-500 mb-2",children:"HTML / 心象 / 音乐卡片位置"}),t.jsxs("div",{className:"flex gap-2 flex-wrap",children:[t.jsx(Zt,{active:(a.chatModuleAlign||"center")==="center",label:"水平居中（默认）",desc:"卡片类内容居中显示",onClick:()=>r({chatModuleAlign:"center"})}),t.jsx(Zt,{active:a.chatModuleAlign==="anchor",label:"贴气泡列",desc:"跟气泡同侧，旧版观感",onClick:()=>r({chatModuleAlign:"anchor"})})]}),t.jsx("p",{className:"mt-1.5 text-[10px] text-slate-400",children:"角色发的 HTML 卡片、心象（思考链）卡片和音乐（一起听）卡片的横向位置。可在白框进阶预览里切换对应卡片查看效果。"})]})]}),yr={chatAvatarVisibility:"both",chatAvatarPlacement:"beside",chatAvatarAlign:"bottom",chatAvatarOffsetY:0,chatBubbleFontSize:0,chatBubbleLineHeight:0,chatBubbleIndent:0,chatSnapToEdge:!1,chatModuleAlign:"center"},No=[{name:"默认聊天",desc:"柔和通用的聊天壳",config:{chatChromeStyle:"soft",chatBackgroundStyle:"plain",chatHeaderStyle:"default",chatHeaderAlign:"left",chatHeaderDensity:"default",chatStatusStyle:"subtle",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatBubbleStyle:"modern",chatMessageSpacing:"default",chatInputStyle:"rounded",chatSendButtonStyle:"circle",chatShowTimestamp:"always",chatTimestampPosition:"below"}},{name:"WeChat",desc:"平整克制的熟悉感",config:{chatChromeStyle:"flat",chatBackgroundStyle:"paper",chatHeaderStyle:"wechat",chatHeaderAlign:"left",chatHeaderDensity:"compact",chatStatusStyle:"dot",chatAvatarShape:"square",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatBubbleStyle:"wechat",chatMessageSpacing:"default",chatInputStyle:"wechat",chatSendButtonStyle:"pill",chatShowTimestamp:"always",chatTimestampPosition:"top_center"}},{name:"Telegram",desc:"轻盈通透的玻璃感",config:{chatChromeStyle:"floating",chatBackgroundStyle:"mesh",chatHeaderStyle:"telegram",chatHeaderAlign:"center",chatHeaderDensity:"default",chatStatusStyle:"pill",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatBubbleStyle:"flat",chatMessageSpacing:"spacious",chatInputStyle:"telegram",chatSendButtonStyle:"circle",chatShowTimestamp:"always",chatTimestampPosition:"below"}},{name:"Discord",desc:"频道感更强的界面",config:{chatChromeStyle:"floating",chatBackgroundStyle:"grid",chatHeaderStyle:"discord",chatHeaderAlign:"left",chatHeaderDensity:"default",chatStatusStyle:"pill",chatAvatarShape:"rounded",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatBubbleStyle:"shadow",chatMessageSpacing:"compact",chatInputStyle:"discord",chatSendButtonStyle:"minimal",chatShowTimestamp:"always",chatTimestampPosition:"below"}},{name:"iMessage",desc:"更圆润、更轻的气质",config:{chatChromeStyle:"soft",chatBackgroundStyle:"mesh",chatHeaderStyle:"minimal",chatHeaderAlign:"center",chatHeaderDensity:"airy",chatStatusStyle:"subtle",chatAvatarShape:"circle",chatAvatarSize:"large",chatAvatarMode:"grouped",chatBubbleStyle:"ios",chatMessageSpacing:"spacious",chatInputStyle:"ios",chatSendButtonStyle:"circle",chatShowTimestamp:"always",chatTimestampPosition:"below"}},{name:"沉浸剧场",desc:"无头像+贴边+松行距",config:{chatChromeStyle:"flat",chatBackgroundStyle:"plain",chatHeaderStyle:"minimal",chatHeaderAlign:"center",chatHeaderDensity:"compact",chatStatusStyle:"subtle",chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatBubbleStyle:"flat",chatMessageSpacing:"spacious",chatInputStyle:"flat",chatSendButtonStyle:"minimal",chatShowTimestamp:"never",chatTimestampPosition:"below",chatAvatarVisibility:"hide_both",chatSnapToEdge:!0,chatBubbleLineHeight:1.5}},{name:"紧凑密聊",desc:"小字紧排+顶对齐头像",config:{chatChromeStyle:"flat",chatBackgroundStyle:"plain",chatHeaderStyle:"default",chatHeaderAlign:"left",chatHeaderDensity:"compact",chatStatusStyle:"dot",chatAvatarShape:"rounded",chatAvatarSize:"small",chatAvatarMode:"grouped",chatBubbleStyle:"flat",chatMessageSpacing:"compact",chatInputStyle:"flat",chatSendButtonStyle:"minimal",chatShowTimestamp:"never",chatTimestampPosition:"below",chatAvatarVisibility:"both",chatAvatarAlign:"top",chatBubbleFontSize:13,chatBubbleLineHeight:1.35}},{name:"像素终端",desc:"伪窗口风格的聊天壳",config:{chatChromeStyle:"pixel",chatBackgroundStyle:"grid",chatHeaderStyle:"pixel",chatHeaderAlign:"left",chatHeaderDensity:"compact",chatStatusStyle:"pill",chatAvatarShape:"square",chatAvatarSize:"small",chatAvatarMode:"grouped",chatBubbleStyle:"outline",chatMessageSpacing:"compact",chatInputStyle:"pixel",chatSendButtonStyle:"pill",chatShowTimestamp:"always",chatTimestampPosition:"below"}}],Tt={chatAvatarShape:"circle",chatAvatarSize:"medium",chatAvatarMode:"grouped",chatAvatarPlacement:"beside",chatBubbleStyle:"modern",chatMessageSpacing:"default",chatShowTimestamp:"always",chatTimestampPosition:"below",chatHeaderStyle:"default",chatInputStyle:"default",chatChromeStyle:"soft",chatBackgroundStyle:"plain",chatHeaderAlign:"left",chatHeaderDensity:"default",chatStatusStyle:"subtle",chatSendButtonStyle:"circle"},Ft={chrome:[{value:"soft",label:"柔雾",desc:"轻薄玻璃感"},{value:"flat",label:"平面",desc:"更干净利落"},{value:"floating",label:"悬浮",desc:"层次更明显"},{value:"pixel",label:"像素",desc:"硬边伪窗口"}],background:[{value:"plain",label:"纯净"},{value:"grid",label:"网格"},{value:"paper",label:"纸面"},{value:"mesh",label:"氛围"}],header:[{value:"default",label:"默认"},{value:"minimal",label:"极简"},{value:"gradient",label:"渐变"},{value:"wechat",label:"微信感"},{value:"telegram",label:"Telegram"},{value:"discord",label:"Discord"},{value:"pixel",label:"像素窗"}],bubble:[{value:"modern",label:"现代"},{value:"flat",label:"扁平"},{value:"outline",label:"描边"},{value:"shadow",label:"立体"},{value:"wechat",label:"微信感"},{value:"ios",label:"iOS"}],input:[{value:"default",label:"默认"},{value:"rounded",label:"圆润"},{value:"flat",label:"扁平"},{value:"wechat",label:"微信感"},{value:"ios",label:"iOS"},{value:"telegram",label:"Telegram"},{value:"discord",label:"Discord"},{value:"pixel",label:"像素窗"}],align:[{value:"left",label:"左对齐"},{value:"center",label:"居中"}],density:[{value:"compact",label:"紧凑"},{value:"default",label:"默认"},{value:"airy",label:"舒展"}],status:[{value:"subtle",label:"弱提示"},{value:"pill",label:"状态胶囊"},{value:"dot",label:"圆点在线"}],send:[{value:"circle",label:"圆按钮"},{value:"pill",label:"胶囊按钮"},{value:"minimal",label:"极简图标"}],avatarShape:[{value:"circle",label:"圆形"},{value:"rounded",label:"圆角"},{value:"square",label:"方形"}],avatarSize:[{value:"small",label:"小"},{value:"medium",label:"中"},{value:"large",label:"大"}],avatarMode:[{value:"grouped",label:"连续共用",desc:"一串消息只露一次头像"},{value:"every_message",label:"每条都显示",desc:"每条消息都带头像"}],spacing:[{value:"compact",label:"紧凑"},{value:"default",label:"默认"},{value:"spacious",label:"宽松"}],timestamp:[{value:"always",label:"始终显示"},{value:"hover",label:"悬停（电脑）"},{value:"never",label:"不显示"}],timestampPosition:[{value:"below",label:"气泡下方",desc:"每组末尾贴边（默认）"},{value:"below_avatar",label:"头像下方",desc:"跟随双方头像居中显示"},{value:"top_center",label:"上方居中",desc:"微信式 · 按间隔分段"}],emojiSize:[{value:"small",label:"小",desc:"96px"},{value:"medium",label:"中",desc:"128px"},{value:"large",label:"大",desc:"160px · 旧版"}]},Bo=a=>`rounded-2xl border px-3 py-2 text-left transition-all active:scale-[0.98] ${a?"border-primary/40 bg-primary/10 text-primary shadow-sm":"border-slate-200 bg-white text-slate-500 hover:border-slate-300"}`,It=({title:a,items:r,value:n,onPick:s})=>t.jsxs("div",{children:[t.jsx("div",{className:"mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400",children:a}),t.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(l=>t.jsxs("button",{onClick:()=>s(l.value),className:Bo(n===l.value),children:[t.jsx("div",{className:"text-[11px] font-bold",children:l.label}),l.desc&&t.jsx("div",{className:"mt-0.5 text-[9px] opacity-70",children:l.desc})]},l.value))})]});function zo({theme:a,updateTheme:r}){const n=a.chatAvatarShape||Tt.chatAvatarShape,s=a.chatAvatarSize||Tt.chatAvatarSize,l=a.chatAvatarMode||Tt.chatAvatarMode;a.chatAvatarPlacement||Tt.chatAvatarPlacement;const c=a.chatBubbleStyle||Tt.chatBubbleStyle,k=a.chatMessageSpacing||Tt.chatMessageSpacing,j=a.chatShowTimestamp||Tt.chatShowTimestamp,x=a.chatTimestampPosition||Tt.chatTimestampPosition,A=a.chatHeaderStyle||Tt.chatHeaderStyle,C=a.chatInputStyle||Tt.chatInputStyle,R=a.chatChromeStyle||Tt.chatChromeStyle,S=a.chatBackgroundStyle||Tt.chatBackgroundStyle,g=a.chatHeaderAlign||Tt.chatHeaderAlign,b=a.chatHeaderDensity||Tt.chatHeaderDensity,m=a.chatStatusStyle||Tt.chatStatusStyle,d=a.chatSendButtonStyle||Tt.chatSendButtonStyle,v=a.chatHideHeaderBuffs!==!0;return t.jsxs("div",{children:[t.jsxs("details",{className:"chat-decoration-layout-group",children:[t.jsx("summary",{children:"内置布局"}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-3 text-[10px] text-slate-400",children:"一键换整套聊天壳（含头像、气泡、间距与细节微调），切预设会先清掉微调残留。"}),t.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:No.map(h=>t.jsxs("button",{onClick:()=>r({...yr,...h.config}),className:"rounded-2xl border border-slate-200 bg-slate-50 p-3 text-left transition-all hover:border-primary/30 hover:bg-white active:scale-[0.98]",children:[t.jsx("div",{className:"text-xs font-bold text-slate-700",children:h.name}),t.jsx("div",{className:"mt-1 text-[10px] text-slate-400",children:h.desc})]},h.name))})]})]}),t.jsxs("details",{className:"chat-decoration-layout-group",children:[t.jsx("summary",{children:"界面风格"}),t.jsxs("div",{children:[t.jsx(It,{title:"聊天壳",items:Ft.chrome,value:R,onPick:h=>r({chatChromeStyle:h})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"消息区背景",items:Ft.background,value:S,onPick:h=>r({chatBackgroundStyle:h})})})]})]}),t.jsxs("details",{className:"chat-decoration-layout-group",children:[t.jsx("summary",{children:"头部与在线状态"}),t.jsxs("div",{children:[t.jsx(It,{title:"头部风格",items:Ft.header,value:A,onPick:h=>r({chatHeaderStyle:h})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"头部对齐",items:Ft.align,value:g,onPick:h=>r({chatHeaderAlign:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"头部密度",items:Ft.density,value:b,onPick:h=>r({chatHeaderDensity:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"在线状态样式",items:Ft.status,value:m,onPick:h=>r({chatStatusStyle:h})})}),t.jsxs("div",{className:"mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5",children:[t.jsxs("div",{className:"min-w-0 pr-3",children:[t.jsx("div",{className:"text-[11px] font-bold text-slate-700",children:"显示情绪栏"}),t.jsx("div",{className:"mt-0.5 text-[10px] text-slate-400",children:"角色名下方的情绪 buff 胶囊；关掉后顶栏更干净（位置/样式也可在「进阶」里用 .sully-chat-buffs 调）。"})]}),t.jsx("button",{onClick:()=>r({chatHideHeaderBuffs:v}),className:`relative h-6 w-11 shrink-0 rounded-full transition-colors ${v?"bg-primary":"bg-slate-300"}`,"aria-pressed":v,children:t.jsx("span",{className:`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${v?"left-[22px]":"left-0.5"}`})})]})]})]}),t.jsxs("details",{className:"chat-decoration-layout-group",children:[t.jsx("summary",{children:"气泡与头像"}),t.jsxs("div",{children:[t.jsx(It,{title:"消息气泡",items:Ft.bubble,value:c,onPick:h=>r({chatBubbleStyle:h})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"头像形状",items:Ft.avatarShape,value:n,onPick:h=>r({chatAvatarShape:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"头像尺寸",items:Ft.avatarSize,value:s,onPick:h=>r({chatAvatarSize:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"头像出现频率",items:Ft.avatarMode,value:l,onPick:h=>r({chatAvatarMode:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"消息密度",items:Ft.spacing,value:k,onPick:h=>r({chatMessageSpacing:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"时间戳",items:Ft.timestamp,value:j,onPick:h=>r({chatShowTimestamp:h})})}),t.jsxs("div",{className:"mt-4",children:[t.jsx(It,{title:"时间位置",items:Ft.timestampPosition,value:x,onPick:h=>r({chatTimestampPosition:h})}),t.jsx("p",{className:"mt-1.5 text-[10px] text-slate-400",children:"具体字号、胶囊底色或装饰可在「白框」里用 .sully-chat-time-divider 与 .sully-chat-timestamp 自定义。"})]})]})]}),t.jsxs("details",{className:"chat-decoration-layout-group",open:!0,children:[t.jsx("summary",{children:"细节微调"}),t.jsxs("div",{children:[t.jsx(Ao,{value:a,onChange:r}),t.jsx("button",{className:"chat-decoration-link",onClick:()=>r({...yr}),children:"微调恢复默认"})]})]}),t.jsxs("details",{className:"chat-decoration-layout-group",children:[t.jsx("summary",{children:"表情包与输入栏"}),t.jsxs("div",{children:[t.jsx(It,{title:"表情包大小",items:Ft.emojiSize,value:a.chatEmojiSize||"small",onPick:h=>r({chatEmojiSize:h})}),t.jsx("p",{className:"mt-2 text-[10px] text-slate-400",children:"调整当前范围内的表情包图片尺寸；全局默认也会用于群聊。用自定义 CSS 调过尺寸的美化会继续覆盖这里的设置。"}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"输入栏风格",items:Ft.input,value:C,onPick:h=>r({chatInputStyle:h})})}),t.jsx("div",{className:"mt-4",children:t.jsx(It,{title:"发送按钮",items:Ft.send,value:d,onPick:h=>r({chatSendButtonStyle:h})})})]})]})]})}const Sa=ie;function Jr({getUsage:a,outfits:r=[],onOutfitsChange:n,preset:s,origin:l,initialOrigins:c,originalKey:k,theme:j,sources:x,onOpenWorkshop:A,onClose:C,onSaved:R,onShareSaved:S,maker:g,characterName:b,onApply:m}){var Xt,Aa,nt,Pt,Na,Wt,wa,ka,lt,ht,ea,ft;const[d,v]=o.useState(()=>structuredClone(s)),[h,W]=o.useState(""),[I,H]=o.useState(()=>c!==void 0?{...c}:Object.fromEntries(Object.keys(s.parts).map(p=>[p,l]))),[w,T]=o.useState({}),[L,z]=o.useState("both"),[q,$]=o.useState({}),[F,N]=o.useState(!1),[tt,at]=o.useState(null),[M,X]=o.useState(!1),[y,V]=o.useState(!1),[Ct,ct]=o.useState(!1),[Ot,_]=o.useState(!1),[E,Vt]=o.useState(g||"whitebox"),[ot,rt]=o.useState(null),[ga,ca]=o.useState(""),[ya,vt]=o.useState(0),[Ca,Bt]=o.useState(!!k&&["self","remix"].includes(l.kind)),[et,wt]=o.useState(!1),[Et,zt]=o.useState(""),[da,Dt]=o.useState(""),B=o.useMemo(()=>Pr(Object.values(I)),[I]);$a(()=>(et||(Ot?_(!1):y?V(!1):Ct?ct(!1):F?N(!1):M?X(!1):ot?rt(null):C()),!0),30);const Ht=!ia(B),aa=/\/\* sully-composer:background \*\/\n?([\s\S]*?)\/\* end-sully-composer:background \*\//,pa=Be(d,E),Qt=p=>v(f=>E==="date"||E==="story"?{...f,parts:{[E]:{preset:"novel",...f.parts[E],customCss:p}}}:E==="collaboration"?{...f,parts:{collaboration:{uiTheme:"sully",avatarMode:"theme",avatarStyle:"circle",...f.parts.collaboration,customCss:p}}}:E==="journal"?{...f,parts:{...f.parts,journal:{...f.parts.journal,customCss:p}}}:E==="schedule"?{...f,parts:{...f.parts,schedule:{...f.parts.schedule,customCss:p}}}:E==="bubbles"?{...f,parts:{...f.parts,bubbles:{...f.parts.bubbles||structuredClone(Yt.default),customCss:p}}}:E==="psyche"?{...f,parts:{...f.parts,psyche:{styleId:"echo",...f.parts.psyche,customCss:p}}}:E==="background"||E==="avatar"?{...f,parts:{...f.parts,css:le(f.parts.css||"",E,p)}}:{...f,parts:{...f.parts,css:p}}),kt=o.useMemo(()=>({...d,parts:{...d.parts,...h.trim()?{css:[d.parts.css,h].filter(Boolean).join(`
`)}:{}}}),[d,h]),Ut=Eo(kt,!!g),va=async(p=!1,f=!1)=>{if(!et){wt(!0),zt("");try{if(!ia(B))throw Error("作者禁止二改");if(f&&B.allowRedistribute===!1)throw Error("作者禁止二次传播，这份作品不能投稿分享");if(!d.name.trim())throw Error("请填写预设名称");const dt=g?mn(g,g==="whitebox"?kt.parts.css||"":pa):void 0;if(g==="avatar"&&!pa.trim())throw Error("请先选择头像框图片或填写头像框 CSS");const pt=g?ze({...kt,name:d.name.trim()},g):{...kt,name:d.name.trim()};if(g==="whitebox"&&(pt.parts.css=dt),p&&m){await m(pt,B);return}const bt=await _a(pt,Ea(B),Ca?k:void 0,g?void 0:"outfit");_t("save",g||"outfit"),f&&S?await S(bt):R(pt)}catch(dt){zt(dt instanceof Error?dt.message:"保存失败")}finally{wt(!1)}}},ua=async p=>{var f,dt,pt;if(ot){wt(!0),zt("");try{const bt=await Gt(await p.attributionKey());if(!ia(bt))throw Error("作者禁止二改，请回到装扮库整套应用这份作品。");const Z=Nt(await(p.readLocal||p.read)());if(ot==="whitebox")v(K=>({...K,parts:{...K.parts,...Z.parts}}));else if(ot==="avatar"){const K=Be(Z,"avatar"),J=["avatarDecoration","avatarDecorationX","avatarDecorationY","avatarDecorationScale","avatarDecorationRotate"];if(g)v(jt=>{const G=structuredClone(jt.parts.bubbles||Yt.default);if(Z.parts.bubbles)for(const mt of["user","ai"])for(const ut of J)G[mt][ut]=Z.parts.bubbles[mt][ut];return{...jt,parts:{...jt.parts,...Z.parts.bubbles?{bubbles:G}:{},css:le(jt.parts.css||"","avatar",K)}}});else{const jt=!!((f=Z.parts.bubbles)!=null&&f.user.avatarDecoration||(dt=Z.parts.bubbles)!=null&&dt.ai.avatarDecoration);if(!K.trim()&&!jt)throw Error("这份预设没有头像框");const G=L==="both"?["user","ai"]:[L];v(mt=>{let ut=mt.parts.bubbles?structuredClone(mt.parts.bubbles):void 0;if(K.trim()){if(ut)for(const Y of G)for(const xt of J)delete ut[Y][xt];return{...mt,parts:{...mt.parts,...ut?{bubbles:ut}:{},css:Ee(mt.parts.css||"",L,K)}}}if(ut=ut||structuredClone(Yt.default),Z.parts.bubbles)for(const Y of G){const xt=Z.parts.bubbles[Y].avatarDecoration?Z.parts.bubbles[Y]:L!=="both"?Z.parts.bubbles.ai.avatarDecoration?Z.parts.bubbles.ai:Z.parts.bubbles.user:Z.parts.bubbles[Y];for(const ja of J)xt[ja]!==void 0?ut[Y][ja]=xt[ja]:delete ut[Y][ja]}return{...mt,parts:{...mt.parts,bubbles:ut,css:Ee(mt.parts.css||"",L,"")}}})}}else if(ot==="background"){const K=(pt=(Z.parts.css||"").match(aa))==null?void 0:pt[0];if(!Z.parts.background&&!K)throw Error("这份预设没有聊天背景");v(J=>({...J,parts:{...J.parts,...Z.parts.background?{background:Z.parts.background}:{},css:[(J.parts.css||"").replace(aa,"").trim(),K].filter(Boolean).join(`
`)}}))}else{const K=Z.parts[ot];if(K===void 0)throw Error("这份预设没有对应内容");v(J=>({...J,parts:{...J.parts,[ot]:K}}))}if(!g&&ot==="avatar"){H(jt=>{const G={...jt};return L==="both"?(G["avatar:user"]=bt,G["avatar:ai"]=bt,delete G.avatar):(G.avatar&&(G["avatar:user"]??(G["avatar:user"]=G.avatar),G["avatar:ai"]??(G["avatar:ai"]=G.avatar),delete G.avatar),G["avatar:"+L]=bt),G});const K=L==="both"?{user:p.name,ai:p.name}:{...q,[L]:p.name},J=K.user&&K.ai&&K.user===K.ai?K.user:[K.user?`我：${K.user}`:"",K.ai?`TA：${K.ai}`:""].filter(Boolean).join(" · ");$(K),T(jt=>({...jt,avatar:J||p.name}))}else H(K=>{const J={...K,...Object.fromEntries((ot==="whitebox"?Object.keys(Z.parts):[ot]).map(jt=>[jt,bt]))};return ot==="whitebox"&&Z.parts.css!==void 0&&(delete J["avatar:user"],delete J["avatar:ai"],delete J.avatar,delete J["background:css"]),ot==="background"&&delete J["background:css"],J}),ot==="whitebox"?($({}),T(K=>{const J={...K,whitebox:p.name};return delete J.avatar,J})):T(K=>({...K,[ot]:p.name}));rt(null),Dt("已加入搭配"),X(!1)}catch(bt){zt(bt instanceof Error?bt.message:"无法读取预设")}finally{wt(!1)}}},ha=x.filter(p=>{var f;return p.kind==="chat-decoration"&&(!ot||((f=p.categories)==null?void 0:f.includes(ot)))&&p.name.toLocaleLowerCase().includes(ga.toLocaleLowerCase())}),fa=Math.max(1,Math.ceil(ha.length/8)),Lt=Math.min(ya,fa-1),Mt=async p=>{wt(!0),zt("");try{const f=await Gt(await p.attributionKey());if(!ia(f))throw Error("作者禁止二改");const dt=Nt(await(p.readLocal||p.read)());v(dt),W(""),H(Object.fromEntries(Object.keys(dt.parts).map(pt=>[pt,f]))),T({}),$({}),X(!1),N(!1),Dt("已载入搭配，点击应用搭配后才会更改角色。")}catch(f){zt(f instanceof Error?f.message:"读取失败")}finally{wt(!1)}};return Ha.createPortal(t.jsxs("div",{"data-dress-guide":g?void 0:"outfit",className:`decoration-draft ${g?"decoration-maker":"decoration-current"}`,role:"dialog","aria-modal":"true","aria-label":g?`${(Xt=Sa.find(([p])=>p===g))==null?void 0:Xt[1]}制作器`:"我的搭配",children:[t.jsxs("header",{children:[t.jsx("button",{"data-dress-guide":g?void 0:"outfit-back",disabled:et,onClick:C,children:"‹ 返回"}),t.jsx("strong",{children:g?`${(Aa=Sa.find(([p])=>p===g))==null?void 0:Aa[1]}制作器`:"我的搭配"}),t.jsx("button",{disabled:et||Ht,onClick:()=>va(!g),children:et?"保存中…":g?"保存预设":"应用搭配"})]}),t.jsxs("div",{className:"decoration-composer-body",children:[t.jsxs("div",{className:"decoration-composer-preview",children:[t.jsx(la,{data:Ut,sceneScope:!g||g==="whitebox"?"all":"preset"}),(!g||g==="whitebox")&&t.jsxs("button",{className:"decoration-layout-orb",disabled:et||Ht,"aria-label":"调整布局","aria-expanded":Ct,onClick:()=>ct(!Ct),children:[t.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[t.jsx("path",{d:"M4 7h16M4 17h16"}),t.jsx("rect",{x:"7",y:"4",width:"4",height:"6",rx:"2"}),t.jsx("rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"})]}),t.jsx("span",{children:"布局"})]}),Ct&&t.jsxs("aside",{className:"decoration-layout-popover","aria-label":"布局浮窗",children:[t.jsxs("header",{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"布局微调"}),t.jsx("small",{children:"边调整，边看效果"})]}),t.jsx("button",{"aria-label":"收起布局浮窗",onClick:()=>ct(!1),children:"×"})]}),t.jsx("div",{className:"decoration-layout-fields",children:t.jsx(zo,{theme:{...j,...ne,...d.parts.layout},updateTheme:p=>v(f=>({...f,parts:{...f.parts,layout:{...f.parts.layout,...p}}}))})})]})]}),!g&&t.jsxs("button",{className:"decoration-side-toggle","aria-expanded":M,onClick:()=>X(!M),children:["搭配 ",t.jsx("span",{"aria-hidden":"true",children:"☷"})]}),!g&&t.jsxs("button",{className:"decoration-outfit-toggle","aria-label":"打开搭配收藏","aria-expanded":F,onClick:()=>{X(!1),ct(!1),zt(""),N(!0)},children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:[t.jsx("path",{d:"M5 4h14v17l-7-4-7 4z"}),t.jsx("path",{d:"M9 8h6"})]}),t.jsx("span",{children:"收藏"})]}),!g&&M&&t.jsx("button",{className:"decoration-side-scrim","aria-label":"收起搭配侧栏",onClick:()=>X(!1)}),t.jsxs("aside",{className:"decoration-composer-controls","data-open":M,children:[!g&&t.jsxs("header",{className:"decoration-side-header",children:[t.jsx("strong",{children:"我的选择"}),t.jsx("button",{"aria-label":"关闭搭配侧栏",onClick:()=>X(!1),children:"×"})]}),Ht&&t.jsx("p",{role:"status",children:"当前搭配包含禁止二改的作品，已锁定编辑；可以返回装扮库更换作品。"}),!g&&t.jsxs("p",{className:"decoration-current-character",children:["当前角色：",b||"当前角色"," · 点选预设搭配"]}),g&&t.jsxs("label",{className:"decoration-name",children:["名称",t.jsx("input",{disabled:et,value:d.name,maxLength:60,onChange:p=>v({...d,name:p.target.value})})]}),(g==="story"||g==="date")&&S&&t.jsxs("div",{children:[t.jsx("button",{className:"decoration-save-outfit",disabled:et||Ht||B.allowRedistribute===!1,onClick:()=>void va(!1,!0),children:"保存并投稿云端"}),t.jsx("p",{children:"先保存到本机，再确认作品、署名和使用规范。人工审核通过后获得分享码；公开展示需另行勾选。"})]}),k&&["self","remix"].includes(l.kind)&&t.jsxs("label",{children:[t.jsx("input",{disabled:et,type:"checkbox",checked:Ca,onChange:p=>Bt(p.target.checked)}),"更新原预设，否则另存一份"]}),!g&&t.jsx("button",{className:"decoration-save-outfit",disabled:et||Ht,onClick:()=>V(!0),children:"保存当前搭配"}),!g&&t.jsx("div",{className:"decoration-current-grid",children:Sa.filter(([p])=>p!=="schedule"&&p!=="journal"&&p!=="date"&&p!=="story"&&p!=="collaboration").map(([p,f])=>t.jsxs("button",{disabled:et||Ht,onClick:()=>{rt(p),ca(""),vt(0),zt("")},children:[t.jsx("span",{className:"decoration-current-image",children:t.jsx(Le,{preset:Ut,category:p})}),t.jsx("small",{children:w[p]||"当前使用"}),t.jsx("strong",{children:f})]},p))}),g&&t.jsxs("div",{className:"decoration-category-panel","aria-label":`${(nt=Sa.find(([p])=>p===E))==null?void 0:nt[1]}设置`,children:[t.jsxs("details",{open:!0,className:"decoration-composer-section",children:[t.jsx("summary",{children:"选择预设"}),t.jsxs("button",{className:"decoration-preset-choice",disabled:et,onClick:()=>{rt(E),ca(""),vt(0),zt("")},children:[t.jsx("span",{className:"decoration-selected-thumb",children:t.jsx(Le,{preset:Ut,category:E})}),t.jsxs("span",{className:"decoration-selected-copy",children:[t.jsx("small",{children:w[E]?"当前搭配":"效果预览"}),t.jsx("strong",{children:w[E]||`选择${(Pt=Sa.find(([p])=>p===E))==null?void 0:Pt[1]}预设`}),t.jsx("em",{children:"点开挑选更多款式"})]}),t.jsx("span",{className:"decoration-choice-arrow","aria-hidden":"true",children:"›"})]})]}),t.jsxs("details",{open:!0,className:"decoration-composer-section",children:[t.jsx("summary",{children:E==="date"||E==="story"?"阅读样式":E==="sound"?"制作提示音":`${(Na=Sa.find(([p])=>p===E))==null?void 0:Na[1]} CSS`}),E==="collaboration"&&t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"全局协同工作外观，不含任务记录、上传文件或 API 配置。"}),t.jsxs("label",{children:["基础主题",t.jsx("select",{value:((Wt=d.parts.collaboration)==null?void 0:Wt.uiTheme)||"sully",onChange:p=>v(f=>({...f,parts:{collaboration:{customCss:"",avatarMode:"theme",avatarStyle:"circle",...f.parts.collaboration,uiTheme:p.target.value}}})),children:wr.map(p=>t.jsx("option",{value:p.id,children:p.label},p.id))})]})]}),E==="journal"&&t.jsxs("label",{children:["日记主题",t.jsx("select",{"aria-label":"日记主题",value:((wa=d.parts.journal)==null?void 0:wa.preset)||"original",onChange:p=>v(f=>({...f,parts:{...f.parts,journal:{...f.parts.journal,preset:p.target.value}}})),children:Br.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id))})]}),E==="schedule"&&t.jsxs("div",{children:[t.jsx("p",{children:"全局样式：同步桌面组件与聊天日程表，不更改日程内容。"}),t.jsxs("label",{children:["日程配色",t.jsxs("select",{"aria-label":"日程配色",value:((ka=d.parts.schedule)==null?void 0:ka.preset)||"original",onChange:p=>v(f=>({...f,parts:{...f.parts,schedule:{...f.parts.schedule,preset:p.target.value}}})),children:[zr.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id)),t.jsx("option",{value:"custom",children:"自定义配色"})]})]}),((lt=d.parts.schedule)==null?void 0:lt.preset)==="custom"&&["background","textColor","accentColor"].map((p,f)=>{var dt;return t.jsxs("label",{children:[["背景（颜色或渐变）","文字颜色","强调色"][f],t.jsx("input",{value:((dt=d.parts.schedule)==null?void 0:dt[p])||"",onChange:pt=>v(bt=>({...bt,parts:{...bt.parts,schedule:{...bt.parts.schedule,[p]:pt.target.value}}}))})]},p)})]}),(E==="date"||E==="story")&&t.jsxs("label",{children:["阅读样式",t.jsx("select",{value:((ht=d.parts[E])==null?void 0:ht.preset)||"none",onChange:p=>v(f=>({...f,parts:{[E]:{...f.parts[E],preset:p.target.value}}})),children:kr.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id))}),t.jsx("small",{children:"选择阅读底稿后，可在下方编写 CSS；「无」恢复原界面。"})]}),E==="sound"?t.jsx(Hn,{sound:d.parts.sound||null,bound:!1,showBind:!1,onChangeSound:p=>v(f=>({...f,parts:{...f.parts,sound:p}})),onChangeBound:()=>{}}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:async()=>{try{await navigator.clipboard.writeText(bn(E)),Dt("已复制当前分类提示词")}catch{zt("复制失败")}},children:"复制 AI 提示词"}),E==="avatar"&&t.jsx(jo,{css:pa,disabled:et,onChange:Qt,onBusy:wt,onError:zt}),E==="background"&&t.jsxs("label",{children:["选择壁纸",t.jsx("input",{type:"file",accept:"image/*",disabled:et,onChange:async p=>{var dt;const f=(dt=p.target.files)==null?void 0:dt[0];if(f)try{if(f.size>12*1024*1024)throw Error("请选择 12 MB 以内的图片");const{blobToDataUrl:pt}=await Ja(async()=>{const{blobToDataUrl:Z}=await import("./useLocalBackHandler-5SZnNJaa.js").then(K=>K.ac);return{blobToDataUrl:Z}},__vite__mapDeps([3,4,1,5])),bt=await pt(f);v(Z=>{var K;return{...Z,parts:{...Z.parts,background:{image:bt,style:((K=Z.parts.background)==null?void 0:K.style)||"plain"}}}})}catch(pt){zt(pt instanceof Error?pt.message:"图片读取失败")}}})]}),t.jsx(wo,{disabled:et,"aria-label":`${(ea=Sa.find(([p])=>p===E))==null?void 0:ea[1]} CSS`,spellCheck:!1,value:pa,onChange:Qt,placeholder:E==="psyche"?".sully-psyche-card { }":E==="background"?".sully-chat-root { background: #f5f5f5; }":"在这里编写或粘贴 CSS"}),E==="whitebox"&&t.jsxs("label",{children:["追加 CSS",t.jsx("textarea",{disabled:et,"aria-label":"追加 CSS",spellCheck:!1,value:h,onChange:p=>W(p.target.value)})]})]})]})]},E),B.credit&&t.jsxs("p",{children:["来源署名：",B.credit]}),Et&&t.jsx("p",{role:"alert",children:Et}),da&&t.jsx("p",{role:"status",children:da})]})]}),!g&&F&&t.jsx(So,{getUsage:a,entries:r,busy:et,error:Et,onClose:()=>N(!1),onChoose:p=>void Mt(p),onDelete:at,onSave:()=>V(!0)}),tt&&t.jsx(Pa,{title:"删除这套搭配？",confirm:"删除",danger:!0,onClose:()=>at(null),onConfirm:async()=>{await Dr(tt.id),await(n==null?void 0:n())},children:t.jsx("p",{children:"只移除搭配收藏，已应用的效果和各部件原件会保留。"})}),y&&t.jsxs(Pa,{title:"保存当前搭配",confirm:"保存到搭配栏",onClose:()=>V(!1),onConfirm:async()=>{if(!ia(B))throw Error("作者禁止二改");if(!d.name.trim())throw Error("请填写搭配名称");const p={...kt,name:d.name.trim()};await _a(p,Ea(B),void 0,"outfit"),_t("save","outfit"),await(n==null?void 0:n()),Dt("已保存到搭配栏")},children:[t.jsx("p",{children:"保存这次组合，下次可以整套应用。"}),t.jsxs("label",{children:["搭配名称",t.jsx("input",{"aria-label":"搭配名称",maxLength:60,value:d.name,onChange:p=>v({...d,name:p.target.value})})]})]}),Ot&&t.jsx(Jr,{preset:ze({...d,name:"当前心象"},"psyche"),origin:B,theme:j,sources:x,maker:"psyche",onOpenWorkshop:A,onClose:()=>_(!1),onSaved:p=>{v(f=>({...f,parts:{...f.parts,psyche:p.parts.psyche}})),_(!1),rt(null),n==null||n().catch(()=>zt("心象已保存，预设库刷新失败，请重新打开。")),Dt("心象已保存到预设库；应用搭配后更新角色。")}}),ot&&t.jsx("div",{className:"decoration-shelf-overlay",children:t.jsxs("section",{role:"dialog","aria-modal":"true","aria-label":"选择搭配预设",children:[t.jsxs("header",{children:[t.jsx("strong",{children:(ft=Sa.find(([p])=>p===ot))==null?void 0:ft[1]}),t.jsx("button",{disabled:et,onClick:()=>rt(null),children:"关闭"})]}),!g&&ot==="avatar"&&t.jsx("div",{className:"decoration-avatar-target",role:"group","aria-label":"头像框给谁用",children:Te.map(([p,f])=>t.jsx("button",{type:"button",disabled:et,"aria-pressed":L===p,onClick:()=>z(p),children:f},p))}),!g&&ot==="psyche"&&t.jsx("button",{disabled:et||Ht,onClick:()=>_(!0),children:"编辑并另存当前心象"}),t.jsx("input",{type:"search","aria-label":"搜索搭配预设",placeholder:"搜索预设名称",value:ga,onChange:p=>{ca(p.target.value),vt(0)}}),t.jsxs("div",{className:"decoration-shelf-results decoration-shelf-grid",children:[ha.slice(Lt*8,Lt*8+8).map(p=>t.jsx(Yr,{getUsage:a,entry:p,category:ot,disabled:et,onChoose:()=>{ua(p)}},p.id)),!ha.length&&t.jsx("p",{children:"暂无对应预设，请先在装扮库导入或保存。"})]}),Et&&t.jsx("p",{role:"alert",children:Et}),t.jsxs("footer",{children:[t.jsx("button",{disabled:et||Lt===0,onClick:()=>vt(Lt-1),children:"上一页"}),t.jsxs("span",{children:[Lt+1," / ",fa]}),t.jsx("button",{disabled:et||Lt+1>=fa,onClick:()=>vt(Lt+1),children:"下一页"})]})]})})]}),document.body)}const Mo=o.lazy(()=>Ja(()=>import("./BeautyCatalog-4xp9_WYp.js"),__vite__mapDeps([15,1,3,4,5,2,6,7,8,9,10,11,12,13,14,16,17]))),_o=o.lazy(()=>Ja(()=>import("./BubbleMaker-rY-Qwd8q.js"),__vite__mapDeps([18,4,1,16,9,3,5,2,6,7,8,10,11,19,12,13,14,17]))),ke=(a,r,n)=>Nt({format:"sullyos-chat-decoration",version:1,name:r,parts:{[a]:n||{preset:"original"}}});function Po({presets:a,onExport:r,onImport:n,onBusyChange:s,onBack:l,targetCharacterId:c,onCustomize:k,onApplied:j,onCollaborationApplied:x,createDraft:A,onOpenWorkshop:C,initialMaker:R,initialCategory:S}){var Ve,Ue;const{characters:g,activeCharacterId:b,theme:m,updateTheme:d,customIcons:v,setCustomIcon:h,deleteAppearancePreset:W,removeCustomTheme:I,replaceAppearancePreset:H,customThemes:w=[],applyAppearancePreset:T,addCustomTheme:L,updateCharacter:z,setActiveCharacterId:q,openApp:$,closeApp:F}=xn(),N=c||S==="date"||S==="story"||S==="collaboration"?"chat":"appearance",tt=o.useRef(!1);o.useEffect(()=>{tt.current||(tt.current=!0,_t("library",N==="chat"?"chat":"appearance"),R&&_t("maker",R))},[]);const at=gn()!==null,[M,X]=o.useState(()=>!R&&!!c&&Lr(Rr)),[y,V]=o.useState(()=>!R&&c&&yn()?0:null),Ct=()=>{kn(),V(null)},[ct,Ot]=o.useState(null),[_,E]=o.useState(null),[Vt,ot]=o.useState(c||b||((Ve=g[0])==null?void 0:Ve.id)||""),rt=g.find(e=>e.id===Vt),[ga,ca]=o.useState();o.useEffect(()=>{let e=!0;return ue.loadSettings().then(u=>{e&&ca(Ma(u))}).catch(()=>{}),()=>{e=!1}},[]);const ya=async e=>{const u={...Ma(e),customCss:await sn(e.customCss)};await ue.applyAppearance(u),ca(u),x==null||x(u)},vt=o.useMemo(()=>qn(m,rt,[...w,...Object.values(Yt)].find(e=>e.id===((rt==null?void 0:rt.bubbleStyle)||m.chatDefaultBubbleStyle||"default"))||Yt.default,v,void 0,ga),[m,rt,w,v,ga]),[Ca,Bt]=o.useState("both");o.useEffect(()=>{(_==null?void 0:_.kind)==="chat-decoration"&&Bt(Ne(_.preset.parts.css||""))},[_]);const[et,wt]=o.useState(!1),[Et,zt]=o.useState(!1),[da,Dt]=o.useState(""),[B,Ht]=o.useState(()=>S||R||(c?"all":jn()||"all")),[aa,pa]=o.useState(!1),[Qt,kt]=o.useState("file"),[Da,Ut]=o.useState(""),[va,ua]=o.useState(null),[ha,fa]=o.useState({}),[Lt,Mt]=o.useState(),[Xt,Aa]=o.useState(()=>{try{return JSON.parse(localStorage.getItem("sully-beauty-author-defaults-v1")||"{}").credit||""}catch{return""}}),[nt,Pt]=o.useState(()=>Sn()?"receive":"library");o.useEffect(()=>{Ln(),c||Tn()},[]);const[Na,Wt]=o.useState([]),[wa,ka]=o.useState([]);o.useEffect(()=>{let e=!0;return on(St).then(u=>{e&&Array.isArray(u)&&ka(u.filter(O=>typeof O.code=="string").map(O=>Nt({format:"sullyos-chat-decoration",version:1,name:O.name||"白框预设",parts:{css:O.code}})))}).catch(()=>ft("旧版白框预设读取失败")),()=>{e=!1}},[]);const[lt,ht]=o.useState(!1),[ea,ft]=o.useState(""),[p,f]=o.useState(""),dt=async()=>{ht(!0),s(!0),ft("");try{if(B==="collaboration")await ya(Ma({})),await St.saveAsset("decoration_global_collaboration","");else if(B==="story")await d({storyAppearance:{preset:"none"}});else if(B==="date"&&rt)await z(rt.id,{dateAppearance:{preset:"none"}});else if(B==="schedule")await d({scheduleCardAppearance:{preset:"original",customCss:""}});else if(B==="journal")await d({journalAppearance:{preset:"original",customCss:""}});else if(B==="appearance"){await d({...An,wallpaper:En,skin:"default",darkMode:!1,launcherWidgets:{},desktopDecorations:[],customFont:"",preserveCustomIconOutlines:!1,nowPlayingWidgetLight:!0});for(const e of Object.keys(v))await h(e,void 0)}else if(rt){const e=[...w,...Object.values(Yt)].find(P=>P.id===(rt.bubbleStyle||m.chatDefaultBubbleStyle||"default"))||Yt.default,u=po(B,rt,m,e);u.bubble&&(await L(u.bubble),await Fa("bubble-"+u.bubble.id,Ea(await Gt("bubble-"+e.id)))),await z(rt.id,u.character);const O=await St.getAsset("decoration_slots_"+rt.id);if(O){const P=JSON.parse(O);B==="avatar"?(delete P["css:avatar"],delete P["css:avatar:user"],delete P["css:avatar:ai"]):B==="background"?(delete P.background,delete P["css:background"]):B==="whitebox"?(delete P.css,delete P.layout,delete P["css:avatar"],delete P["css:avatar:user"],delete P["css:avatar:ai"],delete P["css:background"]):delete P[B],await St.saveAsset("decoration_slots_"+rt.id,JSON.stringify(P)),Object.keys(P).length||await St.saveAsset("decoration_applied_"+rt.id,"")}else B==="whitebox"&&await St.saveAsset("decoration_applied_"+rt.id,"")}f("已恢复本分类默认样式")}catch(e){ft(e instanceof Error?e.message:"恢复失败，请重试")}finally{ht(!1),s(!1)}},[pt,bt]=o.useState(null),[Z,K]=o.useState(null),[J,jt]=o.useState(null),[G,mt]=o.useState(()=>R?{preset:Qe(R),origin:{kind:"self"},maker:R}:null),ut=e=>{_t("maker",e),mt({preset:Qe(e),origin:{kind:"self"},maker:e})},Y=async()=>Wt(await ye()),xt=async e=>{ht(!0),s(!0),ft("");try{const u=await e.attributionKey(),O=await Gt(u);if(!ia(O))throw Error("作者禁止二改，这份作品已锁定编辑");if(e.kind==="appearance"){jt({entry:e,name:e.name,origin:O,useCurrent:!1});return}const P=Nt(await(e.readLocal||e.read)()),At=Ce(P).filter(yt=>yt!=="chat"),st=At.length===1?At[0]:"whitebox";mt({preset:ze(P,st),origin:O,originalKey:e.id.startsWith("local-chat-")?u:void 0,originalEntryId:e.id,maker:st})}catch(u){ft(u instanceof Error?u.message:"无法打开编辑")}finally{ht(!1),s(!1)}},ja=async()=>{ht(!0),ft("");try{if(!rt)throw Error("请先选择角色");const e=await St.getAsset("decoration_applied_"+Vt),u=await St.getAsset("decoration_slots_"+Vt),O=u?JSON.parse(u):null,P=O?Object.fromEntries(await Promise.all(Object.entries(O).flatMap(([gt,Jt])=>(gt==="css:avatar"?["avatar:user","avatar:ai"]:gt.startsWith("css:avatar:")?["avatar:"+gt.slice(11)]:gt==="css:background"?["background:css"]:[gt]).map(async oa=>[oa,await Gt(Jt)])))):void 0,At=P!==void 0?Pr(Object.values(P)):e?await Gt(e):{kind:"self"},st=rt.bubbleStyle||m.chatDefaultBubbleStyle||"default",yt=await Nn(`${rt.name}的搭配`,m,rt,w.find(gt=>gt.id===st)||Yt[st]||Yt.default);mt({preset:yt,origin:At,initialOrigins:P}),y!==null&&V(2)}catch(e){ft(e instanceof Error?e.message:"无法创建草稿")}finally{ht(!1)}},de=async e=>{var u;ht(!0),s(!0),ft(""),wt(!1),Dt("");try{if(e.size>40*1024*1024)throw Error("文件超过 40 MB，请精简素材后重试");const O=new Uint8Array(await e.arrayBuffer()),P=Bn(O)&&zn(O)?Mn(O):null;if((P==null?void 0:P.metadata.kind)==="appearance"){const oa=await n(new File([new Uint8Array(P.payload)],P.metadata.fileName,{type:P.metadata.mimeType}));E({kind:"appearance",id:oa,name:P.metadata.title}),_t("import","image");return}const At=P?new TextDecoder().decode(P.payload):/\.(css|txt)$/i.test(e.name)?await e.text():null;if(At&&$n(At)){Mt({text:At,name:(P==null?void 0:P.metadata.title)||e.name.replace(/\.[^.]+$/,"")}),Pt("receive");return}const st=P?new TextDecoder().decode(P.payload):/\.(json|txt|css)$/i.test(e.name)?await e.text():null;if(st&&Mr(st)){Mt({text:st,name:"旧版白框合集"}),Pt("receive");return}const yt=/\.json$/i.test(e.name)&&((u=JSON.parse(await e.text()))==null?void 0:u.type)==="sully_appearance_preset";if(/\.zip$/i.test(e.name)||yt){const oa=await n(e);E({kind:"appearance",id:oa,name:e.name}),_t("import","file");return}const gt=await _n(e),Jt=gt.kind==="preset"?gt.preset:{format:"sullyos-chat-decoration",version:1,name:gt.name,parts:{background:{image:gt.image,style:"plain"}}};let it={kind:"imported"};if(P||/\.json$/i.test(e.name))try{it=Wn(JSON.parse(P?new TextDecoder().decode(P.payload):await e.text()))}catch{}await _a(Jt,it),await Y(),E({kind:"chat-decoration",preset:Jt,name:Jt.name}),_t("import",P?"image":"file")}catch(O){ft(O instanceof Error?O.message:"导入失败")}finally{ht(!1),s(!1)}},Ga=async(e,u=!1,O=!1,P={})=>{var At,st;ht(!0),s(!0),ft("");try{const yt=await Gt(await e.attributionKey());if(yt.allowRedistribute===!1)throw Error("作者禁止二次传播，这份作品不能导出分享");const gt=yt.credit||Xt.trim();if(!gt)throw Error("请先填写分享署名");const Jt={kind:yt.kind,credit:gt,allowRemix:yt.allowRemix,allowRedistribute:yt.allowRedistribute};let it,oa=".json";if(O){const Ba=Nt(await e.read()),U=((At=e.categories)==null?void 0:At.filter(za=>za!=="chat")[0])||"whitebox",qt=Be(Ba,U);if(!(qt!=null&&qt.trim()))throw Error("这份装扮没有可单独复制的 CSS，请使用文件或图片分享");await navigator.clipboard.writeText(Gn(qt,{...Jt,name:e.name,category:U,...U==="date"||U==="story"?{readingPreset:(st=Ba.parts[U])==null?void 0:st.preset}:{}})),f("已复制带署名的 CSS（仅样式，完整素材请用文件分享）"),_t("share","css");return}if(e.kind==="appearance"){const{default:Ba}=await Ja(async()=>{const{default:pe}=await import("./vendor-C7jFqhk5.js").then(We=>We.j);return{default:pe}},__vite__mapDeps([7,4,1])),U=await Ba.loadAsync(await r(e.id)),qt=U.file("preset.json");if(!qt)throw Error("主题文件缺少预设信息");const za=Ka(JSON.parse(await qt.async("string")),P);U.file("preset.json",JSON.stringify({...za,beautyOrigin:Jt})),it=await U.generateAsync({type:"blob"}),oa=".zip"}else it=JSON.stringify({...await Qa(Nt(Ka(await e.read(),P))),beautyOrigin:Jt},null,2);_t("share",u?"image":"file"),await Pn({blob:typeof it=="string"?new Blob([it],{type:"application/json"}):it,fileName:Dn(e.name)+oa,...u?{card:{kind:e.kind==="appearance"?"appearance":"chat-decoration",title:e.name,author:gt,restrictions:yt.allowRemix===!1?"禁止二改":void 0}}:{}})}catch(yt){ft(yt instanceof Error?yt.message:"导出失败")}finally{ht(!1),s(!1)}};o.useEffect(()=>{let e=!0;return ye().then(u=>{e&&Wt(u)}).catch(()=>{e&&ft("美化预设读取失败，请重新打开此页。")}),()=>{e=!1}},[]);const Ra=async(e,u)=>{if(Dt(""),u.kind==="appearance"){const P=await n(new File([JSON.stringify(e)],"beauty-preset.json",{type:"application/json"}));await Rn(P,u),Ht(c?"all":"appearance"),E({kind:"appearance",id:P,name:e.name});return}const O=Nt(e);await _a(O,{kind:"imported",share:u}),await Y(),Ht("all"),wt(!1),E({kind:"chat-decoration",preset:O,name:O.name})},Za=async()=>{if(!(!_||Et)){zt(!0),s(!0),Dt("");try{if(_.kind==="appearance")await T(_.id),j==null||j(),F();else if(_.preset.parts.collaboration){await ya(_.preset.parts.collaboration);const e=await Ta(_.preset);await St.saveAsset("decoration_global_collaboration",e),await xe(e,"collaboration"),f("已应用到协同工作，所有协同窗口共用此外观")}else if(_.preset.parts.story)await d({storyAppearance:{..._.preset.parts.story,name:_.name}}),f("已应用剧情界面美化");else if(Xa(_.preset)){const e=Nt(_.preset).parts;await d({...e.schedule?{scheduleCardAppearance:e.schedule}:{},...e.journal?{journalAppearance:e.journal}:{}});const u=await Ta(_.preset);for(const O of["schedule","journal"])e[O]&&(await St.saveAsset("decoration_global_"+O,u),await xe(u,"appearance:"+O));f("已同步全局 App 样式，内容保持不变")}else{const e=et?g:g.filter(it=>it.id===Vt);if(!e.length)throw Error("请选择要应用的角色");const u=await Ta(_.preset),O=Object.keys(_.preset.parts),P=await Gt(u),At=new Set(w.map(it=>it.id)),st=je(_.preset)&&!Xe(_.preset)?On(_.preset,Ca):_.preset,{prepared:yt,bubbles:gt,bubbleOrigins:Jt}=await uo(st,O,e,m,[...w,...Object.values(Yt)],P,it=>At.has(it)?Gt("bubble-"+it):Promise.resolve({kind:"builtin"}));for(const it of gt)await L(it),await Fa("bubble-"+it.id,Jt.get(it.id)||P);for(const{character:it,changes:oa}of yt){await z(it.id,oa.character),await St.saveAsset("decoration_applied_"+it.id,u);const Ba=await St.getAsset("decoration_slots_"+it.id),U=Ba?JSON.parse(Ba):{},qt=st.parts.css,za=qt?[...qt.matchAll(/\/\* sully-composer:(avatar|background) \*\/[\s\S]*?\/\* end-sully-composer:\1 \*\//g)]:[],pe=qt?qt.replace(/\/\* sully-composer:(avatar|background) \*\/[\s\S]*?\/\* end-sully-composer:\1 \*\//g,"").trim():"",en=!!!(st.parts.layout||pe||Object.keys(st.parts).filter(La=>La!=="css").length>1)&&za.length>0;for(const La of O)if(La==="css"&&en){if(za.some(sa=>sa[1]==="background")&&(U["css:background"]=u),za.some(sa=>sa[1]==="avatar")){const sa=Ya(qt);sa.shared?(U["css:avatar:user"]=u,U["css:avatar:ai"]=u,delete U["css:avatar"]):(U["css:avatar"]&&(U["css:avatar:user"]??(U["css:avatar:user"]=U["css:avatar"]),U["css:avatar:ai"]??(U["css:avatar:ai"]=U["css:avatar"]),delete U["css:avatar"]),sa.user&&(U["css:avatar:user"]=u),sa.ai&&(U["css:avatar:ai"]=u))}}else if(U[La]=u,La==="css"&&(delete U["css:avatar"],delete U["css:avatar:user"],delete U["css:avatar:ai"],delete U["css:background"]),La==="bubbles"&&!st.parts.css&&!st.parts.layout&&st.parts.bubbles)for(const sa of["user","ai"])st.parts.bubbles[sa].avatarDecoration&&(U["css:avatar"]&&(U["css:avatar:user"]??(U["css:avatar:user"]=U["css:avatar"]),U["css:avatar:ai"]??(U["css:avatar:ai"]=U["css:avatar"]),delete U["css:avatar"]),delete U["css:avatar:"+sa]);await St.saveAsset("decoration_slots_"+it.id,JSON.stringify(U)),await xe(u,"chat:"+it.id)}f(et?`已应用到全部 ${e.length} 个角色`:`已应用给 ${e[0].name}`)}_.kind==="chat-decoration"&&_.builtinSilverHalo&&Sr("应用内置银晕白框"),_t("apply",_.kind==="appearance"?"appearance":_.preset.parts.collaboration?"collaboration":Xa(_.preset)?_.preset.parts.schedule?"schedule":"journal":"chat"),E(null)}catch(e){Dt(e instanceof Error?e.message:"应用失败，请重试")}finally{zt(!1),s(!1)}}},i=[...a.map(e=>({id:e.id,bindingId:e.id,name:e.name,kind:"appearance",categories:["appearance"],contents:"作者保存的桌面主题与搭配",revision:e,attributionKey:async()=>e.id,read:async()=>Ar(new File([await r(e.id)],"preset.zip"),"appearance")})),...Na.map(e=>({id:e._libraryId,bindingId:e._libraryId,name:e.name,kind:"chat-decoration",categories:Ce(e),contents:cr(e),revision:e,attributionKey:async()=>e._libraryId,readLocal:async()=>e,read:async()=>Qa(e),readCurrent:async()=>{const u=(await ye()).find(O=>O._libraryId===e._libraryId);if(!u)throw Error("原装扮已删除");return Qa(u)}})),...wa.map((e,u)=>({id:`legacy-${u}`,name:e.name,kind:"chat-decoration",categories:Ce(e),contents:cr(e),revision:e,attributionKey:()=>Ta(e),read:async()=>e})),...w.map(e=>({id:"bubble-"+e.id,bindingId:"bubble-"+e.id,name:e.name,kind:"chat-decoration",categories:["bubbles"],contents:"聊天气泡",revision:e,attributionKey:async()=>"bubble-"+e.id,read:()=>Se(e)}))],D=oo.map(e=>({id:e.id,name:e.name,kind:"chat-decoration",categories:["chat","whitebox"],contents:"完整聊天装扮 · 布局、气泡、背景与心象",attributionKey:async()=>"",read:async()=>e.read()})),Q=Object.values(Yt).map(e=>({id:"builtin-bubble-"+e.id,name:e.name,kind:"chat-decoration",categories:["bubbles"],contents:"聊天气泡",attributionKey:async()=>"",read:async()=>Nt({format:"sullyos-chat-decoration",version:1,name:e.name,parts:{bubbles:structuredClone(e)}})})),$t=[{src:"none",label:"静音（默认）"},...Object.entries(Cn).map(([e,u])=>({src:e,label:u.label}))].map(e=>({id:"builtin-sound-"+e.src,name:e.label,kind:"chat-decoration",categories:["sound"],contents:"消息提示音",attributionKey:async()=>"",read:async()=>Nt({format:"sullyos-chat-decoration",version:1,name:e.label,parts:{sound:{src:e.src,volume:.6}}})})),Rt=vn.map(e=>({id:e.id,name:e.name,kind:"appearance",categories:["appearance"],contents:"紫色星光壁纸、桌面图标与小组件，含彼方和热点图标",attributionKey:async()=>"",read:async()=>structuredClone(e)})),ba=co.filter(e=>e.id!=="custom").map(e=>({id:"psyche-"+e.id,name:e.name,kind:"chat-decoration",categories:["psyche"],contents:e.sub,attributionKey:async()=>"",read:async()=>({format:"sullyos-chat-decoration",version:1,name:e.name,parts:{psyche:{styleId:e.id,customCss:""}}})})),ra=i,Oa=new Set(Na.filter(e=>e._collection==="outfit").map(e=>e._libraryId)),Zr=i.filter(e=>Oa.has(e.id)),Qr=i.filter(e=>!Oa.has(e.id)&&ve(e.categories,N)),Xr=wr.map(e=>({id:"collaboration-"+e.id,name:e.label,kind:"chat-decoration",categories:["collaboration"],contents:e.caption,attributionKey:async()=>"",read:async()=>({format:"sullyos-chat-decoration",version:1,name:e.label,parts:{collaboration:Ma({uiTheme:e.id})}})})),Ie=["date","story"].flatMap(e=>kr.filter(u=>u.id!=="none").map(u=>({id:e+"-"+u.id,name:u.name,kind:"chat-decoration",categories:[e],contents:u.description,attributionKey:async()=>"",read:async()=>Nt({format:"sullyos-chat-decoration",version:1,name:u.name,parts:{[e]:{preset:u.id}}})}))),He=[...zr.map(e=>({id:"schedule-"+e.id,name:e.name,kind:"chat-decoration",categories:["schedule"],contents:"日程表（全局）",attributionKey:async()=>"",read:async()=>ke("schedule",e.name,{preset:e.id})})),...Br.map(e=>({id:"journal-"+e.id,name:e.name,kind:"chat-decoration",categories:["journal"],contents:"交换日记",attributionKey:async()=>"",read:async()=>ke("journal",e.name,{preset:e.id})}))],$e=Qr.filter(e=>B==="all"||e.categories.includes(B)),na=ra.find(e=>e.id===Da),ma=async e=>{ht(!0),s(!0),ft("");try{if(e.kind==="appearance")await T(e.id),_t("apply","appearance"),F();else{const u=Nt(await(e.readLocal||e.read)());if(e.attributionKey){const O=await e.attributionKey(),P=await Ta(u);O!==P&&await Fa(P,await Gt(O))}Dt(""),wt(!1),E({kind:"chat-decoration",preset:u,name:u.name,builtinSilverHalo:D.includes(e)&&e.id==="builtin-silver-halo"})}}catch(u){ft(u instanceof Error?u.message:"应用失败，请重试")}finally{ht(!1),s(!1)}},tn=async e=>{ht(!0),s(!0),ft(""),f("");try{const u=await Gt(await e.attributionKey());if(u.kind!=="imported"||!u.share)throw Error("只有码导入的原件可以检查更新");const O=await ta(`/shares/${u.share.code}`);if(O.kind!==e.kind||O.code!==u.share.code)throw Error("更新来源不匹配");if(O.revision===u.share.revision){f("已经是最新审核通过的版本。");return}K({entry:e,share:O,previous:u.share.revision})}catch(u){ft(u instanceof Error?u.message:"检查更新失败")}finally{ht(!1),s(!1)}},an=async e=>{if(e.kind==="appearance")await W(e.id);else if(e.id.startsWith("local-chat-"))await Dr(e.id),await Y();else if(e.id.startsWith("bubble-"))await I(e.id.slice(7));else if(e.id.startsWith("legacy-")){const u=Number(e.id.slice(7)),O=await St.getAssetRaw("chrome_css_presets"),P=Array.isArray(O)?O:JSON.parse(localStorage.getItem("sully_chrome_css_presets_v1")||"[]"),st=P.filter(gt=>typeof gt.code=="string")[u];if(!st||st.code!==Nt(await e.read()).parts.css)throw Error("预设列表已变化，请重新打开后删除");const yt=P.filter(gt=>gt!==st);await St.saveAssetRaw("chrome_css_presets",yt),localStorage.setItem("sully_chrome_css_presets_v1",JSON.stringify(yt)),ka(gt=>gt.filter((Jt,it)=>it!==u))}f("已从本机收藏删除。")},Ge=()=>{if(!(lt||Et)){if(pt){bt(null);return}if(Z){K(null);return}if(J){jt(null);return}if(ct){Ot(null);return}if(_){E(null);return}if(G){mt(null),(y===2||y===3)&&V(4);return}if(aa){pa(!1);return}if(nt!=="library"){Pt("library"),(y===5||y===7)&&V(6);return}(l||F)()}};return $a(()=>(Ge(),!0),20),nt==="catalog"?t.jsx(o.Suspense,{fallback:t.jsx("p",{role:"status",className:"text-slate-700 p-4",children:"正在打开装扮库…"}),children:t.jsx(Mo,{onBack:()=>Pt("library"),onReceive:async(e,u)=>{await Ra(e,u),Pt("library")}})}):t.jsxs("div",{className:"beauty-wardrobe",children:[t.jsxs("div",{className:"wardrobe-navigation",children:[t.jsxs("header",{className:"wardrobe-topline",children:[t.jsx("button",{className:"wardrobe-back",disabled:lt||Et,"aria-label":nt==="library"?S==="collaboration"?"返回协同设置":c?"返回聊天":"返回外观设置":"返回我的装扮",onClick:Ge,children:t.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:t.jsx("path",{d:"m15 4-8 8 8 8"})})}),t.jsx("h2",{children:nt==="library"?S==="collaboration"?"协同工作装扮":N==="chat"?"聊天装扮":"外观装扮":nt==="receive"?"导入装扮":"分享装扮"}),t.jsx("div",{className:"wardrobe-header-actions",children:nt==="library"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{disabled:lt,"aria-label":"搜索本机装扮",onClick:()=>{Pt("library"),pa(e=>!e)},children:t.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[t.jsx("circle",{cx:"10.5",cy:"10.5",r:"7.5"}),t.jsx("path",{d:"m16 16 5 5"})]})}),c&&t.jsx("button",{disabled:lt||!rt,"data-dress-guide":"mine","aria-label":"我 · 当前搭配",onClick:()=>void ja(),children:t.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[t.jsx("circle",{cx:"12",cy:"7",r:"4"}),t.jsx("path",{d:"M3 21v-2c0-4 4-6 9-6s9 2 9 6v2z"})]})})]})})]}),nt==="library"&&t.jsx("div",{className:"wardrobe-categories","aria-label":"按用途浏览本机装扮",children:ce.filter(([e])=>e==="all"||e!=="chat"&&ve([e],N)).map(([e,u])=>t.jsx("button",{disabled:lt,"aria-pressed":B===e,onClick:O=>{Ht(e),O.currentTarget.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})},children:u},e))})]}),t.jsxs("div",{className:"wardrobe-content",children:[nt==="library"&&c&&t.jsx("div",{className:"wardrobe-character-context",children:t.jsxs("label",{children:["当前角色：",t.jsxs("select",{"aria-label":"当前角色",disabled:lt||Et,value:Vt,onChange:e=>{ot(e.target.value),f("")},children:[!g.length&&t.jsx("option",{value:"",children:"暂无角色"}),g.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))]})]})}),nt==="library"&&N==="chat"&&t.jsxs("button",{className:"wardrobe-catalog-entry",disabled:lt,onClick:()=>{V(null),Pt("catalog")},children:[t.jsxs("span",{children:["装扮库 ",t.jsx("small",{children:"测试版"})]}),t.jsx("span",{"aria-hidden":"true",children:"↗"})]}),nt==="library"&&t.jsxs("div",{className:"wardrobe-entrypoints",children:[t.jsxs("button",{"data-dress-guide":"import",disabled:lt,onClick:()=>{Pt("receive"),y!==null&&V(5)},children:[t.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:t.jsx("path",{d:"M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5M8 8h8v8H8z"})}),t.jsx("span",{children:"导入装扮"}),t.jsx("small",{children:"›"})]}),t.jsxs("button",{"data-dress-guide":"share",disabled:lt,onClick:()=>{Pt("mine"),y!==null&&V(7)},children:[t.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:t.jsx("path",{d:"M12 16V3m-5 5 5-5 5 5M5 14v6h14v-6"})}),t.jsx("span",{children:"分享装扮"}),t.jsx("small",{children:"›"})]})]}),nt==="library"&&t.jsxs("div",{className:"wardrobe-file-actions",children:[B==="collaboration"&&t.jsx("button",{disabled:lt,onClick:async()=>{ht(!0);try{const e=A?await A():{format:"sullyos-chat-decoration",version:1,name:"我的协同工作",parts:{collaboration:Ma(await ue.loadSettings())}};Ot({preset:e,key:"decoration_global_collaboration"})}catch(e){ft(e.message)}finally{ht(!1)}},children:"保存当前样式"}),B!=="all"&&B!=="chat"&&t.jsx("button",{disabled:lt||Et||!!c&&!rt,onClick:()=>void dt(),children:"恢复默认"}),!c&&(B==="schedule"||B==="journal")&&t.jsx("button",{disabled:lt,onClick:()=>Ot({preset:ke(B,"我的"+(B==="schedule"?"日程表":"交换日记"),B==="schedule"?m.scheduleCardAppearance:m.journalAppearance),key:"decoration_global_"+B}),children:"保存当前样式"}),ie.filter(([e])=>e===B&&ve([e],N)).map(([e,u])=>t.jsxs("button",{disabled:lt,onClick:()=>ut(e),children:[u,"制作器 ＋"]},e))]}),ea&&t.jsx("p",{role:"alert",className:"text-sm text-red-600",children:ea}),p&&t.jsx("p",{role:"status",children:p}),nt==="library"&&t.jsx("fieldset",{"data-dress-guide":"collection",disabled:lt,className:"border-0 p-0 m-0 min-w-0",children:!(["bubbles","psyche","schedule","journal","date","story"].includes(B)&&$e.length===0)&&t.jsx(xa,{getUsage:vt,searchOpen:aa,title:B==="all"?"我的收藏":(Ue=ce.find(([e])=>e===B))==null?void 0:Ue[1],entries:$e,onEdit:xt,onDelete:bt,onUpdate:tn,onShare:e=>{Ut(e.id),Pt("mine")},onExport:e=>Ga(e),onApply:e=>{ma(e)}},B)}),nt==="receive"&&t.jsx("div",{"data-dress-guide":"import-page",children:t.jsx(lo,{initialCss:Lt,initialCategory:B==="collaboration"||B==="date"||B==="story"?B:void 0,busy:lt,onFile:e=>{de(e)},onCssBatch:async e=>{await Vn(e),_t("import","css"),await Y(),f(`已导入 ${e.length} 份白框，请到收藏中选择应用`)},onCss:async(e,u)=>{await _a(e,u),_t("import","css"),await Y(),E({kind:"chat-decoration",preset:e,name:e.name}),wt(!1)},codePanel:t.jsx(gr,{surface:"receive",kind:"appearance",unified:!0,embedded:!0,defaultOpen:!0,initialTab:"receive",sources:[],onBusyChange:e=>{ht(e),s(e)},onReceive:Ra,receivedMessage:"已保存到本机预设，可选择立即应用。"},"receiver")},Lt==null?void 0:Lt.text)}),(nt==="mine"||nt==="submit")&&t.jsxs("section",{"data-dress-guide":"share-page",className:"wardrobe-share-hub",children:[t.jsx("nav",{className:"wardrobe-share-methods","aria-label":"分享方式",children:[["file","文件分享"],["image","图片分享"],["code","码分享"]].map(([e,u])=>t.jsx("button",{disabled:lt,"aria-pressed":Qt===e,onClick:()=>kt(e),children:u},e))}),Qt==="code"?t.jsx(gr,{surface:"author",kind:"appearance",unified:!0,embedded:!0,defaultOpen:!0,initialTab:"submit",initialSource:Da||void 0,onBusyChange:e=>{ht(e),s(e)},sources:ra.map(e=>({...e,beforeSubmit:async()=>{if((await Gt(await e.attributionKey())).allowRedistribute===!1)throw Error("作者禁止二次传播，这份作品不能投稿分享")}})),onReceive:Ra},"author"):t.jsxs("fieldset",{disabled:lt,className:"beauty-share-panel",children:[t.jsx("p",{children:Qt==="image"?"制作可导入的分享图片，沿用原来的分享卡形式。":"导出预设原文件，接收方可直接导入。"}),t.jsx(Vr,{allowFile:!1,sources:ra,source:Da,file:null,kind:(na==null?void 0:na.kind)||"chat-decoration",onSource:Ut,onFile:()=>{},onPreview:e=>{ua(e),fa({})}}),!!va&&t.jsx(Pe,{pack:va,selection:ha,onChange:fa}),t.jsxs("label",{children:["分享署名",t.jsx("input",{maxLength:60,value:Xt,placeholder:"填写你的作者署名；已有作者署名的作品会保留原署名",onChange:e=>Aa(e.target.value)})]}),(na==null?void 0:na.kind)==="chat-decoration"&&t.jsx("button",{disabled:lt,onClick:()=>void Ga(na,!1,!0),children:"复制带署名的 CSS"}),t.jsx("button",{disabled:!na||lt,onClick:()=>{na&&Ga(na,Qt==="image",!1,ha)},children:lt?"正在准备…":Qt==="image"?"制作分享图片":"分享预设文件"})]})]}),nt==="library"&&B==="collaboration"&&t.jsx(xa,{getUsage:vt,entries:Xr,title:"内置协同主题",onEdit:xt,onApply:e=>void ma(e)}),nt==="library"&&(B==="date"||B==="story")&&t.jsx(xa,{getUsage:vt,entries:Ie.filter(e=>{var u;return(u=e.categories)==null?void 0:u.includes(B)}),title:B==="date"?"内置见面美化":"内置剧情美化",onApply:e=>{ma(e)}}),nt==="library"&&!c&&(B==="schedule"||B==="journal")&&t.jsx(xa,{getUsage:vt,entries:He.filter(e=>{var u;return(u=e.categories)==null?void 0:u.includes(B)}),title:B==="schedule"?"内置日程表":"内置日记主题",onApply:e=>{ma(e)}}),ct&&t.jsxs(Pa,{title:"保存当前样式",confirm:"保存到装扮收藏",onClose:()=>Ot(null),onConfirm:async()=>{if(!ct.preset.name.trim())throw Error("请填写名称");const e=await St.getAsset(ct.key),u=e?await Gt(e):{kind:ct.preset.parts.collaboration?"self":"legacy"};await _a(ct.preset,u),await Y(),f("已保存到装扮收藏")},children:[t.jsxs("label",{children:["美化名称",t.jsx("input",{value:ct.preset.name,maxLength:60,onChange:e=>Ot({...ct,preset:{...ct.preset,name:e.target.value}})})]}),t.jsx("p",{children:"只保存样式，不包含协同任务、文件、API、日程、日记内容或角色资料。"})]}),nt==="library"&&N==="chat"&&(B==="all"||B==="chat"||B==="whitebox")&&t.jsx(xa,{getUsage:vt,entries:D,title:"内置白框",onEdit:xt,onApply:e=>{ma(e)}}),nt==="library"&&N==="appearance"&&(B==="all"||B==="appearance")&&t.jsx(xa,{getUsage:vt,entries:Rt,title:"内置桌面主题",onApply:e=>{ma(e)}}),nt==="library"&&N==="chat"&&(B==="all"||B==="bubbles")&&t.jsx(xa,{getUsage:vt,entries:Q,title:"内置气泡",onApply:e=>{ma(e)},onEdit:xt}),nt==="library"&&N==="chat"&&(B==="all"||B==="sound")&&t.jsx(xa,{getUsage:vt,entries:$t,title:"内置提示音",onApply:e=>void ma(e)}),nt==="library"&&N==="chat"&&B==="psyche"&&t.jsx(xa,{getUsage:vt,entries:ba,title:"内置心象",onApply:e=>{ma(e)}}),nt==="library"&&t.jsxs(t.Fragment,{children:[t.jsx(wn,{}),c&&t.jsx("button",{className:"dress-guide-replay",onClick:()=>V(0),children:"再看一次使用引导"})]}),(G==null?void 0:G.maker)==="bubbles"?Ha.createPortal(t.jsx("div",{className:"decoration-bubble-maker",role:"dialog","aria-modal":"true","aria-label":"气泡制作器",children:t.jsx(o.Suspense,{fallback:t.jsx("p",{children:"正在打开气泡制作器…"}),children:t.jsx(_o,{embedded:!0,initialTheme:G.preset.parts.bubbles,onClose:()=>mt(null),onSaveTheme:async e=>{var O;const u=await Qa({format:"sullyos-chat-decoration",version:1,name:e.name,parts:{bubbles:e}});(O=G.originalEntryId)!=null&&O.startsWith("bubble-")&&["self","remix"].includes(G.origin.kind)?(await L({...e,id:G.originalEntryId.slice(7)}),await Fa(G.originalEntryId,Ea(G.origin))):await _a(u,Ea(G.origin),G.originalKey&&["self","remix"].includes(G.origin.kind)?G.originalKey:void 0),_t("save","bubbles"),await Y(),mt(null),E({kind:"chat-decoration",preset:u,name:u.name}),wt(!1)}})})}),document.body):G&&t.jsx(Jr,{getUsage:vt,...G,outfits:Zr,onOutfitsChange:Y,characterName:rt==null?void 0:rt.name,theme:m,sources:[...i.filter(e=>e.kind==="chat-decoration"&&!Oa.has(e.id)),...D,...Q,...$t,...ba,...He,...Ie],onOpenWorkshop:()=>ut("bubbles"),onClose:()=>{mt(null),(y===2||y===3)&&V(4)},onApply:async(e,u)=>{await Fa(await Ta(e),u),mt(null),(y===2||y===3)&&V(4),wt(!1),E({kind:"chat-decoration",preset:e,name:e.name})},onShareSaved:async e=>{await Y(),E(null),Ut(e),kt("code"),Pt("mine"),mt(null)},onSaved:e=>{mt(null),Y().catch(()=>ft("预设已保存，列表刷新失败，请重新打开")),E({kind:"chat-decoration",preset:e,name:e.name}),wt(!1)}})]}),M&&!at&&nt==="library"&&!G&&t.jsx(Tr,{onClose:()=>X(!1)}),!M&&y!==null&&!at&&!(G!=null&&G.maker)&&t.jsx(so,{step:y,onSkip:Ct,onNext:()=>{y===7?Ct():y===5?(Pt("library"),V(6)):V(y+1)}}),pt&&t.jsxs(Pa,{title:"删除这份装扮？",confirm:"删除",danger:!0,onClose:()=>bt(null),onConfirm:()=>an(pt),children:[t.jsxs("p",{children:["「",pt.name,"」将从本机收藏移除。"]}),t.jsxs("p",{children:[pt.id.startsWith("bubble-")?"仍在使用这份气泡的角色将回到默认气泡。":"已应用的装扮会保留。","不会撤下已发布的分享码。"]})]}),Z&&t.jsxs(Pa,{title:"发现新版装扮",confirm:"同意规范并更新",onClose:()=>K(null),onConfirm:async()=>{var At,st;const{entry:e,share:u,previous:O}=Z,P=await Ae(u,u.kind);if(e.kind==="appearance"){const yt=await Gt(e.id);if(((At=yt.share)==null?void 0:At.code)!==u.code||((st=yt.share)==null?void 0:st.revision)!==O)throw Error("本机版本已变化，请重新检查");await H(e.id,P,{kind:"imported",share:u})}else await Un(e.id,Nt(P),u,O),await Y();_t("update",e.kind==="appearance"?"appearance":"chat"),f("本机收藏已更新。当前角色的搭配保持原样，需要时可重新应用。")},children:[t.jsxs("p",{children:[Z.share.metadata.name," · ",Z.share.metadata.credit]}),t.jsx("p",{children:Z.share.metadata.message||"作者未填写更新说明。"}),t.jsxs("p",{children:[Z.share.metadata.allowRemix?"允许二改":"禁止二改"," · ",Z.share.metadata.allowRedistribute?"允许二次传播":"禁止二次传播"]}),t.jsxs("p",{children:["导出版本：",Z.share.metadata.exportVersion]}),t.jsx("p",{children:"将替换本机这份收藏，不会自动改变角色的装扮。"})]}),J&&t.jsxs(Pa,{title:"编辑桌面主题",confirm:"保存预设",onClose:()=>jt(null),onConfirm:async()=>{var P,At;if(!J.name.trim())throw Error("请填写名称");const e=await J.entry.read(),u={...m};(P=u.wallpaper)!=null&&P.startsWith("blob:")&&(u.wallpaper=await St.getAsset("wallpaper")||""),(At=u.lockWallpaper)!=null&&At.startsWith("blob:")&&(u.lockWallpaper=await St.getAsset("lock_wallpaper")||void 0);const O={...e,name:J.name.trim(),...J.useCurrent?{theme:u}:{}};if(["self","remix"].includes(J.origin.kind))await H(J.entry.id,O,Ea(J.origin));else{const st=await n(new File([JSON.stringify(O)],"preset.json"));await Fa(st,Ea(J.origin))}f("桌面主题已保存。")},children:[t.jsxs("label",{children:["预设名称",t.jsx("input",{value:J.name,maxLength:60,onChange:e=>jt({...J,name:e.target.value})})]}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:J.useCurrent,onChange:e=>jt({...J,useCurrent:e.target.checked})}),"用当前桌面外观替换主题设置"]}),t.jsx("p",{children:["self","remix"].includes(J.origin.kind)?"保存会更新原预设，保留投稿关联。":"保存为二改副本，保留原作者的使用规范。"})]}),_&&t.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"beauty-apply-title",className:"fixed inset-0 z-[100] bg-black/30 flex items-center justify-center p-5",children:t.jsxs("div",{className:"bg-white rounded-2xl p-5 w-full max-w-sm shadow-xl text-slate-700",children:[t.jsx("h3",{id:"beauty-apply-title",className:"text-lg font-medium",children:"是否立即应用？"}),t.jsxs("p",{className:"text-sm mt-3 break-words",children:["应用「",_.name,"」"]}),_.kind==="appearance"?t.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"应用后返回桌面，查看新的主题效果。"}):_.preset.parts.collaboration?t.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"应用到所有协同窗口，只替换主题、头像样式和 CSS，任务记录与 API 配置保持不变。"}):_.preset.parts.story?t.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"应用到剧情放映厅，不修改剧情内容或提示词。"}):Xa(_.preset)?t.jsxs("p",{className:"text-xs text-slate-500 mt-2",children:[_.preset.parts.schedule?"同步桌面组件及聊天内日程表的外观，不修改日程安排。":"同步交换日记 App 的外观，不修改日记内容。","已收纳到外观 App。"]}):t.jsxs(t.Fragment,{children:[t.jsxs("label",{className:"block text-sm mt-4",children:["选择应用角色",t.jsxs("select",{disabled:Et||et,value:Vt,onChange:e=>ot(e.target.value),className:"block w-full mt-2 p-3 border rounded-xl",children:[t.jsx("option",{value:"",children:"请选择角色"}),g.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))]})]}),je(_.preset)&&!Xe(_.preset)&&t.jsxs("label",{className:"block text-sm mt-4",children:["头像框给谁用",t.jsx("select",{"aria-label":"头像框给谁用",disabled:Et,value:Ca,onChange:e=>Bt(e.target.value),className:"block w-full mt-2 p-3 border rounded-xl",children:Te.map(([e,u])=>t.jsx("option",{value:e,children:u},e))})]}),t.jsxs("label",{className:"beauty-share-check",children:[t.jsx("input",{type:"checkbox",disabled:Et,checked:et,onChange:e=>wt(e.target.checked)}),"应用到所有角色（",g.length,"）"]}),t.jsxs("p",{className:"text-xs text-slate-500 mt-2",children:[et?"将替换全部现有角色的对应装扮。":"只替换所选角色的对应装扮。",!g.length&&"暂无角色，可稍后创建角色再应用。"]})]}),da&&t.jsx("p",{role:"alert",className:"text-sm text-red-600 mt-3",children:da}),t.jsxs("div",{className:"flex justify-end gap-3 mt-5",children:[t.jsx("button",{disabled:Et,onClick:()=>E(null),className:"px-3 py-2 text-sm",children:"暂不应用"}),t.jsx("button",{disabled:Et||_.kind==="chat-decoration"&&!Xa(_.preset)&&!_.preset.parts.story&&!_.preset.parts.collaboration&&!Vt,onClick:Za,className:"px-4 py-2 rounded-xl bg-slate-800 text-white text-sm disabled:opacity-40",children:Et?"正在应用…":_.kind==="appearance"?"应用并查看桌面":"立即应用"})]})]})})]})}const Wo=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"}));export{ce as B,wo as C,ee as U,Po as a,Wo as b,ve as c,Vo as p,Uo as s};
