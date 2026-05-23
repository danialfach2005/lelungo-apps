// ============================================================
// Lelungo — TypeScript Types
// ============================================================

export type ProductType = 'flight' | 'hotel' | 'package';

export type DealTag =
  | 'Rare Deal'
  | 'Hot Deal'
  | 'Good Deal'
  | 'Fair Price'
  | 'Last Seats'
  | 'Flash Sale';

export interface Deal {
  id: string;
  productType: ProductType;
  title: string;
  destination: string;
  destinationCode: string;
  origin?: string;
  originCode?: string;
  country: string;
  image: string;
  price: number;
  currency: string;
  affiliateUrl: string;
  affiliatePartner: string;
  departureDate?: string;
  returnDate?: string;
  duration?: string;         // e.g. "3h 15m" for flights, "3 nights" for hotels
  rating?: number;           // hotels
  reviewCount?: number;
  amenities?: string[];
  airline?: string;
  stops?: number;
}

export interface DealInsight {
  tag: DealTag;
  tagColor: string;          // Tailwind class
  normalPrice: number;
  discountPct: number;
  urgencyMessage: string;
  urgencyLevel: 'low' | 'medium' | 'high';
  seatsLeft?: number;
  bookedToday?: number;
}

export interface EnrichedDeal extends Deal {
  insight: DealInsight;
}

export interface ClickEvent {
  product_type: ProductType;
  destination: string;
  deal_id: string;
  price: number;
}

export type FilterType = 'all' | ProductType;
