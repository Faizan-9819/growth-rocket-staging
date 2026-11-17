import type { Pricing } from "./types";

/** Pound sterling — the UK, Channel Islands, Isle of Man and Gibraltar. */
export const GBP: Pricing = {
  currency: "GBP",
  symbol: "£",
  monthly: { price: 69 },
  yearly: { price: 690 },
  onboarding: 290,
  launchOffer: null,
};
