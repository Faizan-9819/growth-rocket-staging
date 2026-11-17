/**
 * Geo pricing: which currency a visitor sees, picked from their IP country.
 *
 *   Europe (except the UK)      → EUR (€)
 *   UK, Channel Islands, IoM    → GBP (£)
 *   India                       → INR (₹)
 *   everywhere else             → USD ($)
 *
 * The prices themselves are set in /pricing (one file per currency). proxy.ts
 * reads the visitor's country (Vercel's `x-vercel-ip-country` header) and
 * stores the currency in CURRENCY_COOKIE; CurrencyProvider then shows the
 * page's prices in it. Figures that aren't our prices (a freelancer's rates
 * in a blog post, say) convert at the day's exchange rate (lib/fx-rates),
 * rounded to a whole number.
 *
 * No country (localhost, a host that sends no geo header) stays on EUR.
 * To test another country, open any URL with `?country=GB` (or IN, US, DE…);
 * it sticks for the browser session. `?country=auto` goes back to the IP.
 *
 * Shared by proxy.ts and the client, so nothing server-only belongs here.
 */

import type { CurrencyCode } from "@/pricing/types";

export type { CurrencyCode };
export type ForeignCurrency = Exclude<CurrencyCode, "EUR">;
/** Euro → currency multipliers. */
export type EurRates = Record<ForeignCurrency, number>;

/** The visitor's currency, set by proxy.ts and read by CurrencyProvider. */
export const CURRENCY_COOKIE = "ggr_currency";
/** A country picked with `?country=XX`, which wins over the IP country. */
export const COUNTRY_OVERRIDE_COOKIE = "ggr_country";

const CURRENCIES: CurrencyCode[] = ["EUR", "GBP", "INR", "USD"];

/** Used when the live rates can't be fetched; roughly the Nov 2026 rates. */
export const FALLBACK_RATES: EurRates = { GBP: 0.84, INR: 104, USD: 1.1 };

const GBP_COUNTRIES = new Set(["GB", "UK", "GG", "JE", "IM", "GI"]);

/** European countries (ISO 3166-1 alpha-2), the UK aside. */
const EUR_COUNTRIES = new Set([
  "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE",
  "DK", "EE", "ES", "FI", "FO", "FR", "GR", "HR", "HU", "IE", "IS", "IT",
  "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL",
  "PT", "RO", "RS", "RU", "SE", "SI", "SK", "SM", "UA", "VA", "XK",
]);

export function currencyForCountry(country: string): CurrencyCode {
  const c = country.trim().toUpperCase();
  if (GBP_COUNTRIES.has(c)) return "GBP";
  if (c === "IN") return "INR";
  if (EUR_COUNTRIES.has(c)) return "EUR";
  return "USD";
}

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return CURRENCIES.includes(value as CurrencyCode);
}
