"use client";

import { useState } from "react";
import ButtonF from "../components/ui/ButtonF";
import { usePriceView } from "../components/CurrencyProvider";
import { useLanguage } from "../i18n/LanguageProvider";
import { fillPrices } from "@/pricing";
import { useIndustryCopy } from "./copy";

type Billing = "annual" | "monthly";

function openLeadForm() {
  window.dispatchEvent(new CustomEvent("open-lead-form"));
}

/* Design is the pricing page's BillingCard; every string comes from
   electricians.html's `[data-price-*]` / `[data-billing-*]` nodes.

   Prices come from /pricing, in the visitor's currency: the copy's price
   lines hold "{token}" placeholders that this fills. Without monthly billing
   (rupee) the switch is left out and the card shows the yearly price alone;
   a line quoting a figure the currency doesn't have is dropped. */
export default function IndustryBillingCard() {
  const { BILLING, BILLING_UI, PRICING, SETUP_FEE } = useIndustryCopy();
  const { locale } = useLanguage();
  const view = usePriceView(locale);
  const [chosen, setBilling] = useState<Billing>("annual");
  const billing: Billing = view.hasMonthly ? chosen : "annual";
  const isAnnual = billing === "annual";
  const fill = (line: string) => fillPrices(line, view);
  const source = BILLING[billing];
  const plan = {
    old: fill(source.old),
    current: fill(source.current),
    period: source.period,
    detail: fill(source.detail) ?? (isAnnual ? BILLING_UI.billedAnnually : null),
    saving: fill(source.saving),
  };
  const saveBadge = fill(BILLING_UI.saveBadge);

  const tab =
    "inline-flex min-h-[38px] w-1/2 cursor-pointer items-center justify-center gap-[9px] rounded-full px-[12px] py-[10px] font-sans text-[12px] leading-none font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white";

  return (
    <div className="box-border w-full max-w-[450px] rounded-[13px] bg-[#0a0516] p-[32px] text-white max-[600px]:p-[24px]">
      {view.hasMonthly ? (
        <div
          role="group"
          aria-label={BILLING_UI.groupLabel}
          className="mb-[25px] flex w-full items-center gap-[4px] rounded-full bg-[#262626] p-[5px]"
        >
          <button
            type="button"
            onClick={() => setBilling("annual")}
            aria-pressed={isAnnual}
            className={`${tab} ${
              isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
            }`}
          >
            {BILLING_UI.annually}{" "}
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
            className={`${tab} ${
              !isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
            }`}
          >
            {BILLING_UI.monthly}
          </button>
        </div>
      ) : null}

      <div
        aria-live="polite"
        aria-atomic="true"
        className="min-h-[245px] max-[600px]:min-h-0"
      >
        {/* Strike rule matches the source's magenta `::after`. */}
        {plan.old ? (
          <div className="relative inline-block font-sans text-[26px] leading-[1.15] font-medium tracking-[0.01em] text-white/75 tabular-nums after:absolute after:inset-x-0 after:top-[48%] after:h-px after:rounded-full after:bg-[#ed6acb] after:content-['']">
            {plan.old}
          </div>
        ) : null}

        <div
          className={`${plan.old ? "mt-[12px] " : ""}flex flex-wrap items-baseline gap-[10px]`}
        >
          <strong className="font-bricolage text-[76px] leading-[1.15] font-semibold tracking-[-0.04em] text-[#e4fa65] max-[900px]:text-[62px]">
            {plan.current}
          </strong>
          <span className="font-sans text-[14px] font-medium text-[#c9c2d4]">
            {plan.period}
          </span>
        </div>

        <div className="my-[15px] flex flex-wrap items-center gap-[8px] font-sans text-[13px] text-white">
          <strong className="font-semibold whitespace-nowrap">
            {fill(SETUP_FEE.amount)}
          </strong>
          <span>{SETUP_FEE.label}</span>
        </div>

        <p className="mt-[10px] font-sans text-[12px] leading-[1.5] text-[#c9c2d4]">
          {plan.detail}
        </p>

        {plan.saving ? (
          <p className="mt-[10px] font-sans text-[12px] leading-[1.5] font-semibold text-[#e4fa65]">
            {plan.saving}
          </p>
        ) : null}
      </div>

      {/* Opens the site-wide lead enquiry form StickyActions listens for. */}
      <ButtonF
        onClick={openLeadForm}
        variant="lime"
        arrowSize={18}
        className="mt-[24px] flex w-fit cursor-pointer"
      >
        {PRICING.cta.label}
      </ButtonF>
    </div>
  );
}
