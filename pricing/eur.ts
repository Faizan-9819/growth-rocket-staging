import type { Pricing } from "./types";

/**
 * Euro — Europe (all of it except the UK).
 *
 * The site's copy is written against these prices, so changing them changes
 * the euro prices everywhere, and they're also what search engines see.
 */
export const EUR: Pricing = {
  currency: "EUR",
  symbol: "€",
  monthly: { price: 69, was: 99 },
  yearly: { price: 690, was: 990 },
  onboarding: 290,
  launchOffer: { yearly: 490, customers: 100, years: 2 },
};
