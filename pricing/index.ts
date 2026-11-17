/**
 * Growth Rocket's prices — the one place they are set.
 *
 *   eur.ts  Europe (the copy's own prices, and what search engines see)
 *   gbp.ts  UK
 *   usd.ts  rest of the world
 *   inr.ts  India
 *
 * See README.md for how the site uses them.
 */
import { EUR } from "./eur";
import { GBP } from "./gbp";
import { INR } from "./inr";
import { PHRASES, type PhraseName } from "./phrases";
import type { CurrencyCode, PriceLocale, Pricing } from "./types";
import { USD } from "./usd";
import {
  priceAmounts,
  priceView,
  type PriceAmounts,
  type PriceToken,
  type PriceView,
} from "./view";

export type { CurrencyCode, PriceLocale, Pricing } from "./types";
export type { PriceAmounts, PriceToken, PriceView } from "./view";
export {
  fillPrices,
  formatMoney,
  priceAmounts,
  priceView,
  subscriptionCostAt,
} from "./view";
export { PHRASES, type PhraseName } from "./phrases";

export const PRICING: Record<CurrencyCode, Pricing> = { EUR, GBP, USD, INR };

const LOCALES: PriceLocale[] = ["en", "nl"];

/* ---------- Euro copy ---------- */

/** Every euro figure and phrase, as strings, for writing copy with. */
export type EurText = Record<PriceToken | PhraseName, string>;

function eurText(locale: PriceLocale): EurText {
  const view = priceView(EUR, locale);
  const text = {} as EurText;
  for (const [key, value] of Object.entries(view)) {
    if (key === "currency" || key === "locale" || typeof value === "boolean") {
      continue;
    }
    // The copy quotes every euro figure, so euro pricing must keep all of
    // them: monthly billing, "was" prices and the launch offer.
    if (value === null) {
      throw new Error(
        `pricing/eur.ts: the site's copy quotes the euro "${key}" figure, so it can't be left out`,
      );
    }
    text[key as PriceToken] = value as string;
  }
  for (const [name, phrase] of Object.entries(PHRASES)) {
    const build = (phrase as Partial<Record<PriceLocale, (v: PriceView) => string>>)[locale];
    // A phrase written for one language only reads as that language's.
    text[name as PhraseName] = (build ?? Object.values(phrase)[0])(view);
  }
  return text;
}

/**
 * The euro prices as copy writes them, per language:
 *
 *   const EN = EUR_TEXT.en;
 *   `Growth Rocket costs ${EN.monthlyOrYearly}, plus a ${EN.onboarding} …`
 *
 * Visitors shown another currency see that currency's version of every
 * figure and phrase (see priceSwaps).
 */
export const EUR_TEXT: Record<PriceLocale, EurText> = {
  en: eurText("en"),
  nl: eurText("nl"),
};

/* ---------- Swapping euro copy for another currency ---------- */

/**
 * Euro phrase → the same phrase in `currency`, for both languages, longest
 * first. CurrencyProvider rewrites the page's text with these.
 */
export function priceSwaps(currency: CurrencyCode): [string, string][] {
  const swaps = new Map<string, string>();
  for (const locale of LOCALES) {
    const from = priceView(EUR, locale);
    const to = priceView(PRICING[currency], locale);
    for (const [name, phrase] of Object.entries(PHRASES)) {
      const build = (phrase as Partial<Record<PriceLocale, (v: PriceView) => string>>)[locale];
      if (!build) continue;
      const a = build(from);
      const b = build(to);
      if (!a || a === b) continue;
      const known = swaps.get(a);
      if (known !== undefined && known !== b) {
        throw new Error(`pricing/phrases.ts: "${a}" (${name}) has two translations`);
      }
      swaps.set(a, b);
    }
  }
  return [...swaps].sort((x, y) => y[0].length - x[0].length);
}

/**
 * Euro amount → the same figure in `currency`, for a lone "€690" in copy.
 * A figure `currency` doesn't have is left out of the map.
 */
export function amountSwaps(currency: CurrencyCode): Map<number, number> {
  const from = priceAmounts(EUR);
  const to = priceAmounts(PRICING[currency]);
  const map = new Map<number, number>();
  const clash = new Set<number>();
  for (const key of Object.keys(from) as (keyof PriceAmounts)[]) {
    const a = from[key];
    const b = to[key];
    if (a === null || b === null) continue;
    const eur = Math.round(a * 100) / 100;
    if (map.has(eur) && map.get(eur) !== b) clash.add(eur);
    map.set(eur, b);
  }
  // Two euro figures that happen to be equal but mean different things in
  // another currency can't be told apart in the text: convert neither.
  clash.forEach((eur) => map.delete(eur));
  return map;
}

/** Shorthands for writing copy: `${EUR_EN.monthlyOrYearly}`. */
export const EUR_EN = EUR_TEXT.en;
export const EUR_NL = EUR_TEXT.nl;
