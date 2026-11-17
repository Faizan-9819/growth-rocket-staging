"use client";

import { useState } from "react";
import ButtonF from "../../ui/ButtonF";
import type { Locale } from "../../../i18n/config";
import { usePriceView } from "../../CurrencyProvider";
import { fillPrices } from "@/pricing";

/**
 * The subscription card — ported from `.pricing-price-card.pricing-unified-card`
 * in Pricing.html, together with the `[data-billing]` handler that drove it.
 *
 * In the source the switch rewrote six nodes by hand (`[data-price-old]`,
 * `[data-price-current]`, `[data-price-period]`, `[data-billing-detail]`,
 * `[data-billing-saving]` and a `[data-duo-price-*]` trio belonging to a
 * pricing layout this page never renders). That is one `useState` here, and the
 * copy the script assigned imperatively is the table below.
 *
 * The values are the final computed ones. Note that the source's `@media
 * (max-width:760px)` steps for `.price-main` never reach this card: every one of
 * them is written against `.price-main`/`.price-old` while the
 * `.pricing-unified-card` block that follows is a specificity higher, so the
 * clamps below hold at every width and the card has no mobile variant.
 *
 * Prices come from /pricing, in the visitor's currency: the copy below holds
 * "{token}" placeholders (pricing/view.ts) that the card fills. With a launch
 * offer (euro) the annual side shows it; without one, the regular yearly
 * price. Without monthly billing (rupee) the switch is left out and the card
 * shows the yearly price alone. A line quoting a figure the currency doesn't
 * have is dropped.
 */

type Billing = "annual" | "monthly";

type Plan = {
  /** Struck-through price above the current one. */
  old?: string;
  current: string;
  period: string;
  detail: string;
  saving: string;
  /** Who the price is for, under it — the annual launch price only. */
  offer?: string;
  /** Small print under the CTA. */
  terms?: string;
};

/* Copy from Growth-Rocket-Pricing(-NL)-Standalone.html and its billing
   script. */
const COPY: Record<
  Locale,
  {
    billing: Record<Billing, Plan>;
    /** The annual side for a currency without a launch offer. */
    annualRegular: Plan;
    /** The annual detail line when the currency has no per-month figure. */
    billedAnnually: string;
    groupLabel: string;
    annually: string;
    saveBadge: string;
    monthly: string;
    feeLabel: string;
    cta: string;
  }
> = {
  en: {
    billing: {
      annual: {
        old: "{yearly}",
        current: "{offerYearly}",
        period: "/ year",
        detail: "That’s {offerPerMonth} a month, billed annually.",
        saving: "Save {offerSaving} compared with 12 monthly payments.",
        offer: "First {offerCustomers} customers only",
        terms:
          "{offerYearly} per year for your first {offerYears} years, then {yearly} per year from year {offerFromYear}. Billed annually. All prices exclude VAT.",
      },
      monthly: {
        old: "{monthlyWas}",
        current: "{monthly}",
        period: "/ month",
        detail: "Billed monthly.",
        saving: "Save {annualSaving} a year when you choose annual billing.",
      },
    },
    annualRegular: {
      old: "{yearlyWas}",
      current: "{yearly}",
      period: "/ year",
      detail: "That’s {yearlyPerMonth} a month, billed annually.",
      saving: "Save {annualSaving} compared with 12 monthly payments.",
      terms: "Billed annually. All prices exclude VAT.",
    },
    billedAnnually: "Billed annually.",
    groupLabel: "Choose billing period",
    annually: "Annually",
    saveBadge: "Save {savingPercent}",
    monthly: "Monthly",
    feeLabel: "one-time onboarding fee",
    cta: "Get started with Growth Rocket",
  },
  nl: {
    billing: {
      annual: {
        old: "{yearly}",
        current: "{offerYearly}",
        period: "/ jaar",
        detail: "Dat is {offerPerMonth} per maand, jaarlijks gefactureerd.",
        saving: "Je bespaart {offerSaving} ten opzichte van 12 maandbetalingen.",
        offer: "Alleen voor de eerste {offerCustomers} klanten",
        terms:
          "{offerYearly} per jaar voor je eerste {offerYears} jaar, daarna {yearly} per jaar vanaf het {offerFromYear} jaar. Jaarlijks betaald. Alle prijzen zijn exclusief btw.",
      },
      monthly: {
        old: "{monthlyWas}",
        current: "{monthly}",
        period: "/ maand",
        detail: "Maandelijks gefactureerd.",
        saving: "Bespaar {annualSaving} per jaar als je jaarlijks betaalt.",
      },
    },
    annualRegular: {
      old: "{yearlyWas}",
      current: "{yearly}",
      period: "/ jaar",
      detail: "Dat is {yearlyPerMonth} per maand, jaarlijks gefactureerd.",
      saving: "Je bespaart {annualSaving} ten opzichte van 12 maandbetalingen.",
      terms: "Jaarlijks betaald. Alle prijzen zijn exclusief btw.",
    },
    billedAnnually: "Jaarlijks gefactureerd.",
    groupLabel: "Kies je betaalperiode",
    annually: "Jaarlijks",
    saveBadge: "Bespaar {savingPercent}",
    monthly: "Maandelijks",
    feeLabel: "eenmalige opstartkosten",
    cta: "Start met Growth Rocket",
  },
};

export default function BillingCard({ locale = "en" }: { locale?: Locale }) {
  const [chosen, setBilling] = useState<Billing>("annual");
  const copy = COPY[locale];
  const view = usePriceView(locale);
  // A currency without monthly billing shows the yearly price alone.
  const billing: Billing = view.hasMonthly ? chosen : "annual";
  const isAnnual = billing === "annual";
  const source =
    billing === "monthly"
      ? copy.billing.monthly
      : view.hasOffer
        ? copy.billing.annual
        : copy.annualRegular;
  const fill = (line?: string) => (line ? fillPrices(line, view) : null);
  const plan = {
    old: fill(source.old),
    current: fill(source.current),
    period: source.period,
    detail: fill(source.detail) ?? (isAnnual ? copy.billedAnnually : null),
    saving: fill(source.saving),
    offer: fill(source.offer),
    terms: fill(source.terms),
  };
  const saveBadge = fill(copy.saveBadge);

  return (
    <div className="box-border w-full max-w-[450px] rounded-[13px] bg-[#0a0516] p-[clamp(22px,2.5vw,36px)] text-white">
      {/* The unselected side is painted the card's own `#0a0516` rather than
          left transparent. The track is `white/10` over that same deep, so a
          transparent pill dissolved into the groove and only the selected side
          read as a control; against the lightened track the deep pill now sits
          as clearly "not chosen" as the white one does "chosen". */}
      {view.hasMonthly ? (
        <div
          role="group"
          aria-label={copy.groupLabel}
          className="mb-[30px] flex w-full items-center gap-[4px] rounded-full bg-[#262626] p-[5px]"
        >
          <button
            type="button"
            onClick={() => setBilling("annual")}
            aria-pressed={isAnnual}
            className={`inline-flex min-h-[38px] flex-auto items-center justify-center gap-[9px] rounded-full px-[12px] py-[10px] font-sans text-[13px] leading-none font-bold cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white ${
              isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
            }`}
          >
            {/*  */}
            {copy.annually}{" "}
            {saveBadge ? (
              <span
                className={`inline-block rounded-full px-[6px] py-[5px] text-[10px] leading-none font-extrabold whitespace-nowrap ${
                  isAnnual
                    ? "bg-[#0a0516] text-[#e4fa65]"
                    : "bg-[#e4fa65] text-[#0a0516]"
                }`}
              >
                {saveBadge}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => setBilling("monthly")}
            aria-pressed={!isAnnual}
            className={`min-h-[38px] flex-auto rounded-full px-[12px] py-[10px] font-sans text-[13px] leading-none font-bold transition-colors focus-visible:outline-2 cursor-pointer focus-visible:outline-offset-[3px] focus-visible:outline-white ${
              !isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
            }`}
          >
            {copy.monthly}
          </button>
        </div>
      ) : null}

      <div aria-live="polite" aria-atomic="true">
        {/* The strike is the source's `::after` rule — a 1px magenta rule at 48%
            rather than the base card's rotated 3px white one. */}
        {plan.old ? (
          <div className="relative inline-block font-sans text-[28px] leading-[1.15] font-medium tracking-[0.01em] text-white/75 tabular-nums after:absolute after:inset-x-0 after:top-[48%] after:h-px after:rounded-full after:bg-[#ed6acb] after:content-['']">
            {plan.old}
          </div>
        ) : null}

        <div
          className={`${plan.old ? "mt-[12px] " : ""}flex flex-wrap items-baseline gap-[8px]`}
        >
          <strong className="font-bricolage text-[clamp(64px,6vw,88px)] leading-[0.86] tracking-[-0.035em] text-[#e4fa65]">
            {plan.current}
          </strong>
          <span className="font-sans text-[20px] font-medium text-[#c9c2d4]">
            {plan.period}
          </span>
        </div>

        {plan.offer ? (
          <p className="mt-[12px] mb-0 font-sans text-[15px] leading-[1.3] font-semibold text-[#e4fa65]">
            {plan.offer}
          </p>
        ) : null}

        <div className="mt-[18px] flex flex-wrap items-center justify-start gap-x-[9px] gap-y-[6px] text-white">
          <strong className="text-[24px] font-semibold whitespace-nowrap">
            + {view.onboarding}
          </strong>
          <span className="text-[15px]">{copy.feeLabel}</span>
        </div>

        <p className="mt-[22px] border-t border-white/[0.18] pt-[16px] font-sans text-[14px] leading-[1.5] text-[#c9c2d4]">
          {plan.detail}
        </p>

        <p className="mt-[8px] min-h-[42px] font-sans text-[14px] leading-[1.5] font-semibold text-[#e4fa65]">
          {plan.saving}
        </p>
      </div>

      {/* Opens the site-wide lead enquiry form StickyActions listens for, the
          same event the navbar's "Start with Growth Rocket" button fires. */}
      <ButtonF
        onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form"))}
        variant="lime"
        arrowSize={18}
        className="mt-[10px] flex w-fit justify-between text-left text-[12px] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white md:text-[14px]"
      >
        {copy.cta}
      </ButtonF>

      {plan.terms ? (
        <p className="mt-[16px] mb-0 font-sans text-[13px] leading-[1.55] text-[#c9c2d4]">
          {plan.terms}
        </p>
      ) : null}
    </div>
  );
}
