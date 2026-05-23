import type { Deal, DealInsight, EnrichedDeal, DealTag } from '@/types';
import { NORMAL_PRICES } from './mock-data';

// ============================================================
// SMART INSIGHT ENGINE
// Deterministic deal scoring — no randomness.
// Same deal always produces the same insight.
// ============================================================

// Deterministic hash from a string (used for seed-based variation)
function hashStr(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// Get seats left — deterministic based on deal id + day of week
function getSeatsLeft(dealId: string): number {
  const dayOfWeek = new Date().getDay(); // 0-6
  const hash = hashStr(dealId + String(dayOfWeek));
  const base = (hash % 18) + 1; // 1-18
  return base;
}

// Get booked today count — deterministic
function getBookedToday(dealId: string): number {
  const hash = hashStr(dealId + 'booked');
  const base = (hash % 150) + 12; // 12-161 booked today
  return base;
}

// Urgency intensity based on seats + tag
function getUrgencyMessage(
  seatsLeft: number,
  tag: DealTag,
  productType: string,
): string {
  const unit = productType === 'hotel' ? 'rooms' : 'seats';

  if (tag === 'Rare Deal' || tag === 'Flash Sale') {
    if (seatsLeft <= 3) return `🔥 Only ${seatsLeft} ${unit} left at this price!`;
    if (seatsLeft <= 8) return `⚡ Flash price — ${seatsLeft} ${unit} remaining`;
    return '🚨 Rare price — usually sells out in hours';
  }
  if (tag === 'Hot Deal') {
    if (seatsLeft <= 5) return `🔥 ${seatsLeft} ${unit} left — booking fast!`;
    return `⚡ ${seatsLeft} ${unit} left at deal price`;
  }
  if (tag === 'Last Seats') {
    return `⚠️ ${seatsLeft} ${unit} left — book before it's gone`;
  }
  if (tag === 'Good Deal') {
    return `✅ ${seatsLeft} ${unit} available — solid savings`;
  }
  return `${seatsLeft} ${unit} available`;
}

// Tag color mapping (Tailwind classes)
function getTagStyle(tag: DealTag): string {
  const map: Record<DealTag, string> = {
    'Rare Deal':  'bg-red-500/15 text-red-400 border-red-500/30',
    'Flash Sale': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
    'Hot Deal':   'bg-brand-500/15 text-brand-400 border-brand-500/30',
    'Last Seats': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    'Good Deal':  'bg-green-500/15 text-green-400 border-green-500/30',
    'Fair Price': 'bg-card text-foreground/70 border-border',
  };
  return map[tag];
}

// Core scoring function — fully deterministic
export function scoreDeal(deal: Deal): DealInsight {
  const normalPrice = NORMAL_PRICES[deal.id] ?? Math.round(deal.price * 1.35);
  const rawDiscount = (normalPrice - deal.price) / normalPrice;
  const discountPct  = Math.round(rawDiscount * 100);
  const seatsLeft    = getSeatsLeft(deal.id);
  const bookedToday  = getBookedToday(deal.id);

  // Determine tag from discount + hash variation
  const hash    = hashStr(deal.id);
  const variant = hash % 10; // 0-9

  let tag: DealTag;

  if (discountPct >= 45) {
    tag = variant < 3 ? 'Flash Sale' : 'Rare Deal';
  } else if (discountPct >= 35) {
    tag = seatsLeft <= 5 ? 'Last Seats' : 'Rare Deal';
  } else if (discountPct >= 25) {
    tag = seatsLeft <= 4 ? 'Last Seats' : 'Hot Deal';
  } else if (discountPct >= 15) {
    tag = 'Good Deal';
  } else {
    tag = 'Fair Price';
  }

  const urgencyLevel =
    tag === 'Rare Deal' || tag === 'Flash Sale' ? 'high'
    : tag === 'Hot Deal' || tag === 'Last Seats' ? 'medium'
    : 'low';

  return {
    tag,
    tagColor: getTagStyle(tag),
    normalPrice,
    discountPct,
    urgencyMessage: getUrgencyMessage(seatsLeft, tag, deal.productType),
    urgencyLevel,
    seatsLeft,
    bookedToday,
  };
}

// Enrich all deals with insights
export function enrichDeals(deals: Deal[]): EnrichedDeal[] {
  return deals.map((deal) => ({
    ...deal,
    insight: scoreDeal(deal),
  }));
}

// Format IDR currency
export function formatIDR(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    return `IDR ${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `IDR ${(amount / 1_000).toFixed(0)}K`;
  }
  return `IDR ${amount}`;
}
