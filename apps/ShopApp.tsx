import React, { useState, useMemo } from 'react';
import { useOS } from '../context/OSContext';
import type { HouseId, ShopItem } from '../types';
import {
  SHOP_ITEMS, DIAGON_SHOPS, dailyCommissions, claimCommission,
  purchaseShopItem, giftOwnedItem, loadShopState, saveShopState,
  awardHousePoints, HOUSE_META,
} from '../utils/hogwarts';

const HouseChip: React.FC<{ houseId: HouseId }> = ({ houseId }) => (
  <span className="px-2 py-0.5 rounded-full text-[10px] text-white" style={{ background: HOUSE_META[houseId].color }}>
    {HOUSE_META[houseId].cn}
  </span>
);

const ShopApp: React.FC = () => {
  const { closeApp, characters, addToast } = useOS();
  const [state, setState] = useState(() => loadShopState());
  const [openShopId, setOpenShopId] = useState<string | null>(null);
  const [detail, setDetail] = useState<ShopItem | null>(null);
  const [gifting, setGifting] = useState(false);
  const [tab, setTab] = useState<'map' | 'bag'>('map');

  const persist = (next: typeof state) => { saveShopState(next); setState(next); };

  const commissions = useMemo(() => dailyCommissions(), []);
  const claimed = state.claimedCommissions || [];
  const shop = DIAGON_SHOPS.find(s => s.id === openShopId) || null;
  const shopItems = shop ? SHOP_ITEMS.filter(i => i.shop === shop.id) : [];

  const handleBuy = (item: ShopItem) => {
    const next = purchaseShopItem(state, item);
    if (!next) { addToast(`金加隆不足，还差 ${item.price - state.gold} G`, 'error'); return; }
    persist(next);
    addToast(`已购入「${item.name}」`, 'success');
    setDetail(null);
  };

  const handleClaim = (comm: (typeof commissions)[number]) => {
    const next = claimCommission(state, comm);
    if (!next) { addToast('这条委托今天已经领过了', 'error'); return; }
    persist(next);
    addToast(`委托完成，获得 ${comm.gold} 金加隆`, 'success');
  };

  const handleGift = (charId: string, houseId?: HouseId) => {
    if (!detail) return;
    persist(giftOwnedItem(state, detail.id, charId));
    if (houseId) awardHousePoints(houseId, 5, `收到礼物：${detail.name}`);
    addToast(`已把「${detail.name}」送出，学院 +5 分`, 'success');
    setGifting(false);
    setDetail(null);
  };

  const ownedCounts = state.owned.reduce<Record<string, number>>((m, o) => { m[o.itemId] = o.quantity; return m; }, {});

  return (
    <div className="h-full w-full flex flex-col overflow-hidden font-light" style={{ background: 'linear-gradient(175deg,#101d17 0%,#0a130f 60%,#0d1512 100%)' }}>
      {/* 顶栏：标题 + 金加隆余额 */}
      <div className="shrink-0 sticky top-0 z-10 backdrop-blur-md border-b border-amber-200/15" style={{ paddingTop: 'var(--safe-top)', background: 'rgba(9,18,14,0.9)' }}>
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => closeApp()} className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-amber-50 font-semibold text-base flex items-center gap-2">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300">巫师商品</span>
              对角巷
            </div>
            <div className="text-amber-200/50 text-[10px] truncate">沿着街灯寻找今天要拜访的店门</div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-300/40 bg-amber-400/10">
            <span className="text-amber-300 text-sm">◆</span>
            <span className="text-amber-100 font-bold text-sm">{state.gold}</span>
            <span className="text-amber-300/70 text-[10px]">G</span>
          </div>
        </div>
        <div className="flex gap-1.5 px-4 pb-2">
          {([['map', '🗺️ 街区地图'], ['bag', '🎒 背包']] as const).map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`shrink-0 text-[11px] px-3 py-1 rounded-full font-medium ${tab === k ? 'bg-amber-400 text-[#0a130f]' : 'bg-white/10 text-amber-200/70'}`}>{label}</button>
          ))}
        </div>
      </div>

      {tab === 'map' ? (
        <div className="flex-1 overflow-y-auto pb-8">
          {/* 布告栏 */}
          <div className="mx-4 mt-4 rounded-2xl border border-amber-200/25 overflow-hidden" style={{ background: 'rgba(20,32,26,0.85)' }}>
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-amber-200/15">
              <span className="text-amber-300">📜</span>
              <span className="text-amber-100 font-semibold text-sm">布告栏</span>
              <span className="ml-auto text-amber-200/40 text-[10px]">暑期期间临时搬到对角巷的每日委托</span>
            </div>
            <div className="divide-y divide-amber-200/10">
              {commissions.map(c => {
                const isClaimed = claimed.includes(c.id);
                return (
                  <div key={c.id} className="flex items-center gap-3 px-4 py-2.5">
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs leading-relaxed ${isClaimed ? 'text-stone-500 line-through' : 'text-amber-50/90'}`}>{c.text}</div>
                      <div className="text-[10px] text-amber-300/80 mt-0.5">◆ +{c.gold} G · 只发金加隆，不计学院分</div>
                    </div>
                    <button onClick={() => handleClaim(c)} disabled={isClaimed}
                      className={`shrink-0 text-[11px] px-3 py-1.5 rounded-full font-medium ${isClaimed ? 'bg-white/5 text-stone-500' : 'bg-amber-400 text-[#0a130f] active:scale-95 transition-transform'}`}>
                      {isClaimed ? '已领取' : '领取'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 街区地图 */}
          <div className="mx-4 mt-4 rounded-2xl border border-amber-200/25 overflow-hidden relative"
            style={{
              minHeight: '480px',
              background: `radial-gradient(120% 90% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 40%),
                repeating-linear-gradient(0deg, rgba(232,220,184,0.025) 0 2px, transparent 2px 18px),
                repeating-linear-gradient(90deg, rgba(232,220,184,0.02) 0 2px, transparent 2px 22px),
                linear-gradient(175deg, #14231c 0%, #0e1a14 55%, #16211a 100%)`,
            }}>
            {/* 街道 */}
            <div className="absolute pointer-events-none" style={{ left: '46%', top: 0, bottom: 0, width: 34, background: 'linear-gradient(90deg, transparent, rgba(232,220,184,0.06) 40%, rgba(232,220,184,0.09) 50%, rgba(232,220,184,0.06) 60%, transparent)', transform: 'rotate(6deg)' }} />
            {/* 喷泉 */}
            <div className="absolute flex flex-col items-center" style={{ left: '47%', top: '62%' }}>
              <span className="text-lg">⛲</span>
            </div>
            {/* 店铺节点 */}
            {DIAGON_SHOPS.map(s => (
              <button key={s.id} onClick={() => setOpenShopId(s.id)}
                className="absolute z-10 flex items-center gap-1.5 group active:scale-95 transition-transform"
                style={{ left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -50%)' }}>
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(243,227,179,0.95) 0%, rgba(212,175,55,0.55) 55%, transparent 75%)',
                    boxShadow: '0 0 14px rgba(212,175,55,0.5)',
                  }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: '#fff7dd', boxShadow: '0 0 6px #ffe9a8' }} />
                </span>
                <span className="px-2 py-1 rounded-lg text-[10px] leading-tight text-amber-100 whitespace-nowrap border border-amber-200/30"
                  style={{ background: 'rgba(8,15,12,0.82)', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                  {s.name}
                </span>
              </button>
            ))}
            {/* 底部提示 */}
            <div className="absolute bottom-2 inset-x-0 text-center text-[10px] text-amber-200/50 pointer-events-none">
              ◆ 沿着鹅卵石路，寻找亮着灯的门
            </div>
          </div>
        </div>
      ) : (
        /* 背包 */
        <div className="flex-1 overflow-y-auto px-4 py-4 pb-10">
          {state.owned.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              <div className="text-5xl mb-3">🎒</div>
              <p className="text-sm">背包还是空的。</p>
              <p className="text-xs mt-1">去地图上的店逛逛吧。</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {state.owned.map(o => {
                const item = SHOP_ITEMS.find(i => i.id === o.itemId);
                const giftedChar = o.giftedToCharId ? characters.find(c => c.id === o.giftedToCharId) : null;
                return (
                  <div key={o.itemId} className="rounded-2xl border border-amber-200/15 p-3.5 flex items-center gap-3" style={{ background: 'rgba(20,32,26,0.8)' }}>
                    <span className="text-2xl">{item?.icon || '📦'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-amber-50">{o.name} {o.quantity > 1 && <span className="text-amber-300/70 text-xs">×{o.quantity}</span>}</div>
                      <div className="text-[11px] text-amber-200/50 mt-0.5">
                        {giftedChar ? <>已送给 {giftedChar.name} {giftedChar.houseId && <HouseChip houseId={giftedChar.houseId} />}</> : item?.description || ''}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 店铺详情 */}
      {shop && (
        <div className="absolute inset-0 z-20 bg-black/50 backdrop-blur-sm" onClick={() => setOpenShopId(null)}>
          <div className="absolute bottom-0 inset-x-0 max-h-[80%] rounded-t-3xl overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(175deg,#15251d 0%,#0c150f 100%)' }}
            onClick={e => e.stopPropagation()}>
            <div className="px-5 pt-4 pb-3 border-b border-amber-200/15">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{shop.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-amber-50 font-semibold">{shop.name}</div>
                  <div className="text-[11px] text-amber-200/50">{shop.desc}</div>
                </div>
                <button onClick={() => setOpenShopId(null)} className="w-8 h-8 rounded-full bg-white/10 text-amber-200 text-lg leading-none">×</button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {shopItems.length === 0 && <div className="text-center text-stone-500 text-sm py-8">柜台今天没摆货——去别的店看看吧。</div>}
              {shopItems.map(item => (
                <button key={item.id} onClick={() => setDetail(item)}
                  className="w-full flex items-center gap-3 rounded-xl border border-amber-200/15 p-3 text-left active:scale-[0.99] transition-transform"
                  style={{ background: 'rgba(28,44,35,0.7)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-amber-50">{item.name}</div>
                    <div className="text-[11px] text-amber-200/50 truncate">{item.description}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-amber-300 text-sm font-bold">◆ {item.price} G</div>
                    {ownedCounts[item.id] && <div className="text-[10px] text-amber-200/40">已有 ×{ownedCounts[item.id]}</div>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 商品详情 / 购买 / 送礼 */}
      {detail && (
        <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm" onClick={() => setDetail(null)}>
          <div className="absolute bottom-0 inset-x-0 rounded-t-3xl p-5 space-y-3" style={{ background: '#16241c' }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{detail.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-amber-50 font-semibold">{detail.name}</div>
                <div className="text-[11px] text-amber-200/50">{detail.description}</div>
              </div>
              <div className="text-amber-300 font-bold">◆ {detail.price} G</div>
            </div>
            {detail.effect && <div className="text-[11px] text-amber-200/70 rounded-xl border border-amber-200/20 bg-amber-400/5 px-3 py-2">✨ {detail.effect}</div>}
            {gifting ? (
              <div className="space-y-2">
                <div className="text-[11px] text-amber-200/60">送给哪位巫师？（对方学院 +5 分）</div>
                <div className="max-h-56 overflow-y-auto space-y-1.5">
                  {characters.map(c => (
                    <button key={c.id} onClick={() => handleGift(c.id, (c as any).houseId)}
                      className="w-full flex items-center gap-2.5 rounded-xl bg-white/5 border border-amber-200/10 px-3 py-2 text-left active:scale-[0.99] transition-transform">
                      {c.avatar
                        ? <img src={c.avatar} className="w-8 h-8 rounded-full object-cover" alt="" />
                        : <div className="w-8 h-8 rounded-full bg-white/10 text-amber-100 flex items-center justify-center text-xs font-bold">{c.name[0]}</div>}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-amber-50 truncate">{c.name}</div>
                        {c.houseId && <div className="text-[10px]" style={{ color: HOUSE_META[c.houseId].color }}>{HOUSE_META[c.houseId].cn}</div>}
                      </div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setGifting(false)} className="w-full py-2.5 rounded-xl bg-white/10 text-amber-200/70 text-sm">返回</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2.5">
                <button onClick={() => handleBuy(detail)} className="py-3 rounded-xl bg-amber-400 text-[#0a130f] font-bold text-sm active:scale-95 transition-transform">购买</button>
                <button onClick={() => setGifting(true)} className="py-3 rounded-xl border border-amber-300/40 text-amber-200 text-sm active:scale-95 transition-transform">送给角色</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopApp;
