"use client";

import { useState } from "react";
import ButtonF from "../../ui/ButtonF";
import { usePriceView } from "../../CurrencyProvider";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { fillPrices } from "@/pricing";
import type { BillingCopy } from "./page-copy";

/**
 * The subscription card inside `#package` — `.pricing-price-card
 * .pricing-unified-card` as dentalcare.css restyles it, together with the
 * `[data-billing]` handler that drove it.
 *
 * This is a separate component from `pricing/BillingCard` rather than a
 * variant of it, because dentalcare.css repaints almost every value:
 *
 *   .dc-package .pricing-price-card   width:100%; max-width:450px
 *                       justify-self:end; background:var(--dc-black)
 *                       color:white; border-radius:13px; padding:32px
 *   @1000px             padding:25px
 *   @700px              max-width:none; padding:26px
 *   .dc-package .billing-switch   margin-bottom:25px  (30px on /pricing)
 *   .billing-switch     display:flex; width:100%; gap:4px
 *                       background:rgb(255 255 255 / 10%)
 *                       border-radius:999px
 *   .billing-switch button    flex:1 1 auto; padding:10px 12px
 *                       color:var(--gr-white); font-size:12px  (dc)
 *   button.is-active    background:var(--gr-white); color:var(--gr-deep)
 *   .annual-saving-badge  border-radius:999px; font:800 10px/1
 *                       padding:5px 6px
 *   .pricing-billing-summary  min-height:245px
 *   .dc-package .price-old    font-size:26px; letter-spacing:.01em
 *                       font-weight:500; line-height:1.15
 *                       color:rgb(255 255 255 / 75%)
 *   .price-old::after   a 1px #ed6acb rule at top:48% — the strike
 *   .dc-package .price-main   flex; gap:10px; align-items:baseline
 *   .price-main strong  font-size:76px; letter-spacing:-.04em
 *                       line-height:1.15; color:var(--dc-green)
 *   @1000px             60px
 *   .price-main span    font-size:14px
 *   .pricing-setup-inline     margin:15px 0; flex; gap:8px; flex-wrap:wrap
 *                       font-size:13px
 *   .pricing-setup-row strong font-size:22px; font-weight:600
 *   .billing-detail / .billing-saving   font-size:12px; line-height:1.5
 *                       margin-top:10px   (all !important in the sheet)
 *   .billing-detail     padding-top:16px
 *                       border-top:1px solid rgb(255 255 255 / 18%)
 *   .billing-saving     color:var(--dc-green)
 *   .dc-package .pricing-price-card .button   width:100%; font-size:14px
 *                       gap:10px; margin-top:24px
 *                       background:var(--dc-green); color:var(--dc-black)
 *                       border-radius:50px
 *                       (+ base .button: min-height:56px; padding:14px 23px
 *                        font-weight:600; line-height:1.35)
 *
 * The copy the source's script assigned imperatively to its six `[data-*]`
 * nodes is the table below, driven by one `useState`.
 *
 * Prices come from /pricing, in the visitor's currency: the copy's price
 * lines hold "{token}" placeholders (pricing/view.ts) that this fills.
 * Without monthly billing (rupee) the switch is left out and the card shows
 * the yearly price alone; a line quoting a figure the currency doesn't have
 * is dropped.
 */

type Billing = "annual" | "monthly";

/* The card's own text, for templates without an approved page copy. */
const DEFAULT_COPY: BillingCopy = {
  groupLabel: "Choose billing period",
  annual: "Annually",
  save: "Save {savingPercent}",
  monthly: "Monthly",
  plans: {
    annual: {
      old: "{yearlyWas}",
      current: "{yearly}",
      period: "/ year",
      detail: "That’s {yearlyPerMonth} a month, billed annually.",
      saving: "Save {annualSaving} compared with 12 monthly payments.",
    },
    monthly: {
      old: "{monthlyWas}",
      current: "{monthly}",
      period: "/ month",
      detail: "Billed monthly.",
      saving: "Save {annualSaving} a year when you choose annual billing.",
    },
  },
  billedAnnually: "Billed annually.",
  setupFee: "+ {onboarding}",
  setupLabel: "one-time onboarding fee",
};

export default function DesignBillingCard({
  ctaLabel,
  ctaHref,
  copy = DEFAULT_COPY,
}: {
  ctaLabel: string;
  ctaHref: string;
  /** Approved copy; a plan without `detail`/`saving` shows neither line. */
  copy?: BillingCopy;
}) {
  const { locale } = useLanguage();
  // The built-in copy is English, so its figures are formatted the English
  // way ("€57.50") whatever page it lands on.
  const view = usePriceView(copy === DEFAULT_COPY ? "en" : locale);
  const [chosen, setBilling] = useState<Billing>("annual");
  // A currency without monthly billing shows the yearly price alone.
  const billing: Billing = view.hasMonthly ? chosen : "annual";
  const isAnnual = billing === "annual";
  const fill = (line?: string) => (line ? fillPrices(line, view) : null);
  const source = copy.plans[billing];
  const plan = {
    old: fill(source.old),
    current: fill(source.current),
    period: source.period,
    // A plan without `detail` shows none; one quoting figures this currency
    // doesn't have falls back to "Billed annually."
    detail: source.detail
      ? (fill(source.detail) ??
        (isAnnual ? (copy.billedAnnually ?? null) : null))
      : null,
    saving: fill(source.saving),
  };
  const save = fill(copy.save);

  /* The lines under the onboarding fee. The first one carries the divider. */
  type Note = { text: string; saving: boolean };
  const notes = [
    plan.detail && { text: plan.detail, saving: false },
    plan.saving && { text: plan.saving, saving: true },
    copy.taxNote && { text: copy.taxNote, saving: false },
  ].filter((note): note is Note => !!note);

  const switchButton =
    "flex-auto cursor-pointer rounded-full px-[12px] py-[10px] font-sans text-[12px] leading-none font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white";

  return (
    <div className="box-border w-full justify-self-end rounded-[13px] bg-[#0a0516] p-[26px] text-white min-[701px]:max-w-[450px] min-[701px]:p-[25px] min-[1001px]:p-[32px]">
      {/* .billing-switch */}
      {view.hasMonthly ? (
      <div
        role="group"
        aria-label={copy.groupLabel}
        className="mb-[25px] flex w-full flex-wrap items-center gap-[4px] rounded-full bg-white/10 p-[4px]"
      >
        <button
          type="button"
          onClick={() => setBilling("annual")}
          aria-pressed={isAnnual}
          className={`${switchButton} inline-flex items-center justify-center gap-[9px] ${
            isAnnual ? "bg-white text-[#0a0516]" : "text-white"
          }`}
        >
          {copy.annual}
          <span
            className={`inline-block rounded-full px-[6px] py-[5px] text-[10px] leading-none font-extrabold whitespace-nowrap ${
              isAnnual
                ? "bg-[#0a0516] text-[#e4fa65]"
                : "bg-[#e4fa65] text-[#0a0516]"
            }`}
          >
            {save}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setBilling("monthly")}
          aria-pressed={!isAnnual}
          className={`${switchButton} ${
            !isAnnual ? "bg-white text-[#0a0516]" : "text-white"
          }`}
        >
          {copy.monthly}
        </button>
      </div>
      ) : null}

      {/* .pricing-billing-summary */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="min-[701px]:min-h-[245px]"
      >
        {/* .price-old + its ::after strike */}
        {plan.old ? (
        <div className="relative inline-block font-sans text-[26px] leading-[1.15] font-medium tracking-[0.01em] text-white/75 tabular-nums after:absolute after:inset-x-0 after:top-[48%] after:h-px after:rounded-full after:bg-[#ed6acb] after:content-['']">
          {plan.old}
        </div>
        ) : null}

        {/* .price-main */}
        <div className="flex flex-wrap items-baseline justify-start gap-[10px]">
          <strong className="font-bricolage text-[60px] leading-[1.15] tracking-[-0.04em] text-[#e4fa65] min-[1001px]:text-[76px]">
            {plan.current}
          </strong>
          <span className="font-sans text-[14px] font-medium text-[#c9c2d4]">
            {plan.period}
          </span>
        </div>

        {/* .pricing-setup-row.pricing-setup-inline */}
        <div className="my-[15px] flex flex-wrap items-center gap-[8px] font-sans text-[13px] text-white">
          <strong className="text-[22px] font-semibold whitespace-nowrap">
            {fill(copy.setupFee)}
          </strong>
          <span>{copy.setupLabel}</span>
        </div>

        {notes.map((note, i) => (
          <p
            key={note.text}
            className={
              "mt-[10px] mb-0 font-sans text-[12px] leading-[1.5] " +
              (i === 0 ? "border-t border-white/[0.18] pt-[16px] " : "") +
              (note.saving
                ? "font-semibold text-[#e4fa65]"
                : "text-[#c9c2d4]")
            }
          >
            {note.text}
          </p>
        ))}
      </div>

      {/* .dc-package .pricing-price-card .button */}
      {/* home2's lime CTA — the hover scale and the two-slot arrow swap, in
          place of the flat `↗` — at this card's larger geometry. */}
      <ButtonF
        href={ctaHref}
        variant="lime"
        size="custom"
        arrowSize={18}
        className="mt-[24px] flex w-fit justify-center gap-[10px] rounded-[50px] px-[23px] py-[14px] text-[14px] leading-[1.35] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white lg:min-h-[56px]"
      >
        {ctaLabel}
      </ButtonF>
    </div>
  );
}
