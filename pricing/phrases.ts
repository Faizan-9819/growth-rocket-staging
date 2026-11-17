import type { PriceLocale } from "./types";
import type { PriceView } from "./view";

/**
 * The price phrases the site's copy is written with, per language.
 *
 * Copy quotes these (through EUR_TEXT in index.ts) instead of typing prices
 * out, so the euro text comes from eur.ts. For a visitor shown another
 * currency, CurrencyProvider swaps each phrase for the same phrase built from
 * their prices — which is how a yearly-only currency (INR) loses every
 * mention of monthly billing: its version of a phrase leaves monthly out, and
 * a sentence that is only about monthly billing becomes empty.
 *
 * Sentences that can disappear start with their own space, so the text
 * around them stays tidy.
 */
type Phrase = Partial<Record<PriceLocale, (v: PriceView) => string>>;

export const PHRASES = {
  /** "€69 per month" — or the yearly price, without monthly billing. */
  perPeriod: {
    en: (v) => (v.monthly ? `${v.monthly} per month` : `${v.yearly} per year`),
    nl: (v) => (v.monthly ? `${v.monthly} per maand` : `${v.yearly} per jaar`),
  },
  /** Page titles: "From €69/Month", "vanaf €69 p/m". */
  perPeriodTitle: {
    en: (v) => (v.monthly ? `${v.monthly}/Month` : `${v.yearly}/Year`),
    nl: (v) => (v.monthly ? `${v.monthly} p/m` : `${v.yearly} p/j`),
  },
  /** "€69/mo" — tables and compact lists. */
  perPeriodShort: {
    en: (v) => (v.monthly ? `${v.monthly}/mo` : `${v.yearly}/yr`),
    nl: (v) => (v.monthly ? `${v.monthly}/mnd` : `${v.yearly}/jr`),
  },
  monthlyOrYearly: {
    en: (v) =>
      v.monthly
        ? `${v.monthly} per month or ${v.yearly} per year`
        : `${v.yearly} per year`,
    nl: (v) =>
      v.monthly
        ? `${v.monthly} per maand of ${v.yearly} per jaar`
        : `${v.yearly} per jaar`,
  },
  /** "€69 per month, or €690 per year with annual billing". */
  monthlyOrYearlyAnnualBilling: {
    en: (v) =>
      v.monthly
        ? `${v.monthly} per month, or ${v.yearly} per year with annual billing`
        : `${v.yearly} per year`,
  },
  yearlyOrMonthly: {
    en: (v) =>
      v.monthly
        ? `${v.yearly} per year or ${v.monthly} per month`
        : `${v.yearly} per year`,
    nl: (v) =>
      v.monthly
        ? `${v.yearly} per jaar of ${v.monthly} per maand`
        : `${v.yearly} per jaar`,
  },
  /** "€690 per year (€69 per month)". */
  yearlyAndMonthly: {
    en: (v) =>
      v.monthly
        ? `${v.yearly} per year (${v.monthly} per month)`
        : `${v.yearly} per year`,
    nl: (v) =>
      v.monthly
        ? `${v.yearly} per jaar (${v.monthly} per maand)`
        : `${v.yearly} per jaar`,
  },
  /** "€690/year (€69/month)". */
  yearlyAndMonthlySlash: {
    en: (v) =>
      v.monthly ? `${v.yearly}/year (${v.monthly}/month)` : `${v.yearly}/year`,
  },
  /** "€69/month (€690/year)" / "€69 per maand (€690 per jaar)". */
  monthlyAndYearly: {
    en: (v) =>
      v.monthly ? `${v.monthly}/month (${v.yearly}/year)` : `${v.yearly}/year`,
    nl: (v) =>
      v.monthly
        ? `${v.monthly} per maand (${v.yearly} per jaar)`
        : `${v.yearly} per jaar`,
  },
  /** "€69/mo (€690/yr)". */
  monthlyAndYearlyShort: {
    en: (v) =>
      v.monthly ? `${v.monthly}/mo (${v.yearly}/yr)` : `${v.yearly}/yr`,
    nl: (v) =>
      v.monthly ? `${v.monthly}/mnd (${v.yearly}/jr)` : `${v.yearly}/jr`,
  },
  /** " Annual billing saves €138 compared with 12 monthly payments." */
  annualSavingSentence: {
    en: (v) =>
      v.annualSaving
        ? ` Annual billing saves ${v.annualSaving} compared with 12 monthly payments.`
        : "",
    nl: (v) =>
      v.annualSaving
        ? ` Met jaarlijkse betaling bespaar je ${v.annualSaving} ten opzichte van 12 maandbetalingen.`
        : "",
  },
  /** " Annual billing works out at €57.50 per month and saves €138 …" */
  annualWorksOutSentence: {
    en: (v) =>
      v.yearlyPerMonth && v.annualSaving
        ? ` Annual billing works out at ${v.yearlyPerMonth} per month and saves ${v.annualSaving} compared with 12 monthly payments.`
        : "",
    nl: (v) =>
      v.yearlyPerMonth && v.annualSaving
        ? ` Bij jaarlijkse betaling komt dat neer op ${v.yearlyPerMonth} per maand en bespaar je ${v.annualSaving} ten opzichte van twaalf maandbetalingen.`
        : "",
  },
  /** " Monthly billing is €69 per month plus the same onboarding fee." */
  monthlyBillingSentence: {
    en: (v) =>
      v.monthly
        ? ` Monthly billing is ${v.monthly} per month plus the same onboarding fee.`
        : "",
    nl: (v) =>
      v.monthly
        ? ` Bij maandelijkse betaling betaal je ${v.monthly} per maand plus dezelfde opstartkosten.`
        : "",
  },
  /** "Both options include" — with yearly billing only, there's one. */
  bothOptionsInclude: {
    en: (v) => (v.monthly ? "Both options include" : "The package includes"),
    nl: (v) => (v.monthly ? "Beide opties omvatten" : "Het pakket omvat"),
  },
  /** "annual or monthly billing" (no price, but monthly). */
  billingKinds: {
    en: (v) => (v.monthly ? "annual or monthly billing" : "annual billing"),
  },
  /** "an annual or monthly subscription" (no price, but monthly). */
  subscriptionKindsA: {
    en: (v) =>
      v.monthly
        ? "an annual or monthly subscription"
        : "an annual subscription",
  },
  /** "Je betaalt per jaar of per maand" (no price, but monthly). */
  payPerPeriod: {
    nl: (v) =>
      v.monthly ? "Je betaalt per jaar of per maand" : "Je betaalt per jaar",
  },
  /** "your monthly or annual subscription" (no price, but monthly). */
  subscriptionKinds: {
    en: (v) =>
      v.monthly
        ? "your monthly or annual subscription"
        : "your annual subscription",
    nl: (v) => (v.monthly ? "je maand- of jaarabonnement" : "je jaarabonnement"),
  },
  /** The design pages' billing answer, whole. */
  designBillingAnswer: {
    en: (v) =>
      v.monthly && v.yearlyPerMonth
        ? `Annual billing is ${v.yearly} per year, or choose ${v.monthly} per month. Both options have a ${v.onboarding} one-time onboarding fee. The annual price works out to ${v.yearlyPerMonth} per month, billed annually.`
        : `Billing is annual: ${v.yearly} per year, plus a ${v.onboarding} one-time onboarding fee.`,
  },
  /** The pricing FAQ's annual-versus-monthly comparison (shown only where
      monthly billing exists; see `monthlyOnly` in the FAQ data). */
  annualVersusMonthly: {
    en: (v) =>
      v.monthly
        ? `Annual billing costs ${v.yearly} per year, which works out at ${v.yearlyPerMonth} per month and saves ${v.annualSaving}, about ${v.savingPercent}, compared with paying ${v.monthly} per month for 12 months.`
        : "",
    nl: (v) =>
      v.monthly
        ? `Bij jaarlijkse betaling betaal je ${v.yearly} per jaar. Dat komt neer op ${v.yearlyPerMonth} per maand en bespaart je ${v.annualSaving}, ongeveer ${v.savingPercent}, ten opzichte van twaalf maandbetalingen van ${v.monthly}.`
        : "",
  },
  /** Blog: "Spread monthly, that's €57.50 — one fixed yearly price of €690". */
  spreadMonthly: {
    en: (v) =>
      v.yearlyPerMonth
        ? `Spread monthly, that's ${v.yearlyPerMonth} — one fixed yearly price of ${v.yearly}`
        : `One fixed yearly price of ${v.yearly}`,
    nl: (v) =>
      v.yearlyPerMonth
        ? `Omgerekend is dat ${v.yearlyPerMonth} per maand, één vaste jaarprijs van ${v.yearly}`
        : `Eén vaste jaarprijs van ${v.yearly}`,
  },
} satisfies Record<string, Phrase>;

export type PhraseName = keyof typeof PHRASES;
