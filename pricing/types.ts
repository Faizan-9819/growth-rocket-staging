/** The currencies the site shows prices in (see app/lib/currency.ts). */
export type CurrencyCode = "EUR" | "GBP" | "INR" | "USD";

/** The site's two languages. */
export type PriceLocale = "en" | "nl";

/**
 * One currency's prices. Every price on the site comes from these four
 * objects (eur.ts, gbp.ts, usd.ts, inr.ts) — change a number there and every
 * page follows.
 */
export type Pricing = {
  currency: CurrencyCode;
  /** Shown before the amount: "€690". */
  symbol: string;
  /**
   * Monthly billing. `null` when this currency offers yearly billing only:
   * the billing switch, monthly prices and per-month figures are left out.
   */
  monthly: {
    price: number;
    /** Struck-through "was" price beside it, or leave it out for none. */
    was?: number;
  } | null;
  yearly: {
    price: number;
    /** Struck-through "was" price beside it, or leave it out for none. */
    was?: number;
  };
  /** One-time onboarding fee. */
  onboarding: number;
  /**
   * The launch offer: a lower yearly price for the first customers, for the
   * first few years, with the regular yearly price struck through beside it.
   * `null` for no offer in this currency.
   */
  launchOffer: {
    yearly: number;
    /** "First 100 customers only". */
    customers: number;
    /** How many years the offer price lasts: "for your first two years". */
    years: number;
  } | null;
};
