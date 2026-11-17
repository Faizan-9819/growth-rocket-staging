"use client";

import ButtonF from "../ui/ButtonF";
import { usePriceView } from "../CurrencyProvider";

/* Prices come from /pricing, in the visitor's currency: the monthly price,
   or the yearly one where there is no monthly billing. */
const COPY = {
  en: {
    from: "From",
    period: "/ month",
    periodYearly: "/ year",
    detail: "Website, hosting, Hub and support in one package.",
    onboarding: "one-time onboarding",
    cta: "View pricing",
  },
  nl: {
    from: "Vanaf",
    period: "/ maand",
    periodYearly: "/ jaar",
    detail: "Website, hosting, Hub en support in één pakket.",
    onboarding: "eenmalige onboarding",
    cta: "Bekijk prijzen",
  },
};

/**
 * Compact monthly-plan card for the blog's right rail — the black
 * BillingCard from /pricing, shrunk to a sidebar and pinned to monthly.
 * Sticky at the same offset as the table of contents on the left.
 */
export default function BlogPricingCard({ locale }: { locale: "en" | "nl" }) {
  const copy = COPY[locale];
  const view = usePriceView(locale);

  return (
    <aside className="hidden xl:block xl:w-[220px] xl:flex-none">
      <div className="sticky top-[104px] rounded-[13px] bg-[#0a0516] p-[20px] text-white shadow-[0_10px_30px_rgb(10_5_22_/_18%)] ring-1 ring-[#e4fa65]/30">
        <span className="font-sans text-[11px] leading-none font-bold tracking-[0.12em] text-[#c9c2d4] uppercase">
          {copy.from}
        </span>

        <div className="mt-[10px] flex items-baseline gap-[6px]">
          <strong className="font-bricolage text-[44px] leading-[0.9] tracking-[-0.035em] text-[#e4fa65]">
            {view.monthly ?? view.yearly}
          </strong>
          <span className="font-sans text-[14px] font-medium text-[#c9c2d4]">
            {view.monthly ? copy.period : copy.periodYearly}
          </span>
        </div>

        <p className="mt-[14px] mb-0 border-t border-white/[0.18] pt-[12px] font-sans text-[13px] leading-[1.5] text-[#c9c2d4]">
          {copy.detail}
        </p>
        <p className="mt-[6px] mb-0 font-sans text-[12px] leading-[1.5] font-semibold text-[#e4fa65]">
          {`+ ${view.onboarding} ${copy.onboarding}`}
        </p>

        <ButtonF
          href="/pricing"
          variant="lime"
          arrowSize={12}
          className="mt-[12px] flex min-h-[34px]! w-full justify-between px-[14px]! py-[6px]! text-left text-[12px]!"
        >
          {copy.cta}
        </ButtonF>
      </div>
    </aside>
  );
}
