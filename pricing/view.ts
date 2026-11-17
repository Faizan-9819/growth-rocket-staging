import type { CurrencyCode, PriceLocale, Pricing } from "./types";

/**
 * A currency's prices as the site's copy uses them: every figure the copy
 * quotes, worked out from the four numbers in eur.ts / gbp.ts / usd.ts /
 * inr.ts and formatted for one language ("€57.50" in English, "€57,50" in
 * Dutch).
 *
 * A figure the currency doesn't have is `null` — with no monthly billing
 * there is no monthly price, saving or per-month figure; with no launch offer
 * there are no offer figures — and copy built from it leaves it out.
 */

/** The figures, as plain numbers. */
export type PriceAmounts = {
  monthly: number | null;
  monthlyWas: number | null;
  yearly: number;
  yearlyWas: number | null;
  onboarding: number;
  /** The yearly price spread over 12 months (monthly billing only). */
  yearlyPerMonth: number | null;
  /** 12 monthly payments minus the yearly price. */
  annualSaving: number | null;
  /** 12 monthly payments. */
  twelveMonthly: number | null;
  /** Yearly price plus onboarding: what the first year costs. */
  firstYear: number;
  /** Three years of the subscription: 36 monthly payments, or 3 yearly. */
  threeYears: number;
  offerYearly: number | null;
  /** The offer's yearly price spread over 12 months. */
  offerPerMonth: number | null;
  /** 12 monthly payments minus the offer's yearly price. */
  offerSaving: number | null;
};

export function priceAmounts(p: Pricing): PriceAmounts {
  const monthly = p.monthly?.price ?? null;
  const yearly = p.yearly.price;
  const offer = p.launchOffer?.yearly ?? null;
  return {
    monthly,
    monthlyWas: p.monthly?.was ?? null,
    yearly,
    yearlyWas: p.yearly.was ?? null,
    onboarding: p.onboarding,
    yearlyPerMonth: monthly === null ? null : yearly / 12,
    annualSaving: monthly === null ? null : monthly * 12 - yearly,
    twelveMonthly: monthly === null ? null : monthly * 12,
    firstYear: yearly + p.onboarding,
    threeYears: monthly === null ? yearly * 3 : monthly * 36,
    offerYearly: offer,
    offerPerMonth: offer === null || monthly === null ? null : offer / 12,
    offerSaving: offer === null || monthly === null ? null : monthly * 12 - offer,
  };
}

/**
 * What the subscription has cost after `months` months, onboarding
 * included: monthly payments where the currency has monthly billing, or a
 * yearly payment at the start of each year where it doesn't.
 */
export function subscriptionCostAt(p: Pricing, months: number): number {
  if (p.monthly) return p.onboarding + p.monthly.price * months;
  return p.onboarding + p.yearly.price * Math.max(1, Math.ceil(months / 12));
}

/** "€690", "€57.50" / "€57,50", "₹65,000". Whole amounts show no cents;
    rupees always round to whole. */
export function formatMoney(
  amount: number,
  p: Pick<Pricing, "currency" | "symbol">,
  locale: PriceLocale,
): string {
  const rupees = p.currency === "INR";
  const value = rupees ? Math.round(amount) : Math.round(amount * 100) / 100;
  const cents = !Number.isInteger(value);
  const formatted = value.toLocaleString(
    rupees ? "en-IN" : locale === "nl" ? "nl-NL" : "en-GB",
    { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 },
  );
  return `${p.symbol}${formatted}`;
}

const CARDINAL: Record<PriceLocale, string[]> = {
  en: ["zero", "one", "two", "three", "four", "five", "six"],
  nl: ["nul", "één", "twee", "drie", "vier", "vijf", "zes"],
};
const ORDINAL_NL = ["", "eerste", "tweede", "derde", "vierde", "vijfde", "zesde"];

/** Every figure as copy shows it; `null` where this currency has none. */
export type PriceView = {
  currency: CurrencyCode;
  locale: PriceLocale;
  hasMonthly: boolean;
  hasOffer: boolean;
  monthly: string | null;
  monthlyWas: string | null;
  yearly: string;
  yearlyWas: string | null;
  onboarding: string;
  yearlyPerMonth: string | null;
  annualSaving: string | null;
  twelveMonthly: string | null;
  firstYear: string;
  threeYears: string;
  /** "17%": the annual saving against 12 monthly payments. */
  savingPercent: string | null;
  offerYearly: string | null;
  offerPerMonth: string | null;
  offerSaving: string | null;
  /** "100" in "First 100 customers only". */
  offerCustomers: string | null;
  /** "two" / "twee" in "for your first two years". */
  offerYears: string | null;
  /** "three" / "derde" in "from year three" / "vanaf het derde jaar". */
  offerFromYear: string | null;
};

export function priceView(p: Pricing, locale: PriceLocale): PriceView {
  const a = priceAmounts(p);
  const money = (n: number | null) =>
    n === null ? null : formatMoney(n, p, locale);
  const offer = p.launchOffer;
  const word = (n: number) => CARDINAL[locale][n] ?? String(n);
  return {
    currency: p.currency,
    locale,
    hasMonthly: p.monthly !== null,
    hasOffer: offer !== null,
    monthly: money(a.monthly),
    monthlyWas: money(a.monthlyWas),
    yearly: formatMoney(a.yearly, p, locale),
    yearlyWas: money(a.yearlyWas),
    onboarding: formatMoney(a.onboarding, p, locale),
    yearlyPerMonth: money(a.yearlyPerMonth),
    annualSaving: money(a.annualSaving),
    twelveMonthly: money(a.twelveMonthly),
    firstYear: formatMoney(a.firstYear, p, locale),
    threeYears: formatMoney(a.threeYears, p, locale),
    savingPercent:
      a.annualSaving === null || !a.twelveMonthly
        ? null
        : `${Math.round((a.annualSaving / a.twelveMonthly) * 100)}%`,
    offerYearly: money(a.offerYearly),
    offerPerMonth: money(a.offerPerMonth),
    offerSaving: money(a.offerSaving),
    offerCustomers: offer ? String(offer.customers) : null,
    offerYears: offer ? word(offer.years) : null,
    offerFromYear: offer
      ? locale === "nl"
        ? (ORDINAL_NL[offer.years + 1] ?? `${offer.years + 1}e`)
        : word(offer.years + 1)
      : null,
  };
}

/** The keys of PriceView that hold copy (not the flags). */
export type PriceToken = Exclude<
  keyof PriceView,
  "currency" | "locale" | "hasMonthly" | "hasOffer"
>;

/**
 * Fills "{yearly}", "{onboarding}"… in a line of copy. Returns `null` when
 * the line quotes a figure this currency doesn't have, so the caller leaves
 * the line out ("Save {annualSaving} …" for a yearly-only currency).
 */
export function fillPrices(template: string, view: PriceView): string | null {
  let missing = false;
  const out = template.replace(/\{(\w+)\}/g, (match, key: string) => {
    if (!(key in view) || key === "hasMonthly" || key === "hasOffer") {
      throw new Error(`Unknown price token ${match} in "${template}"`);
    }
    const value = view[key as PriceToken];
    if (value === null) missing = true;
    return value ?? "";
  });
  return missing ? null : out;
}
