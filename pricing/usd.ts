import type { Pricing } from "./types";

/** US dollar — every country not covered by EUR, GBP or INR. */
export const USD: Pricing = {
  currency: "USD",
  symbol: "$",
  monthly: { price: 75 },
  yearly: { price: 750 },
  onboarding: 290,
  launchOffer: null,
};
