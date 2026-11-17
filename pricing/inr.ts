import type { Pricing } from "./types";

/** Indian rupee — India. Yearly billing only. */
export const INR: Pricing = {
  currency: "INR",
  symbol: "₹",
  monthly: null,
  yearly: { price: 65000 },
  onboarding: 19000,
  launchOffer: null,
};
