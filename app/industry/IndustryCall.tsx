"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import ButtonF from "../components/ui/ButtonF";
import { useIndustryCopy } from "./copy";
import { usePriceView } from "../components/CurrencyProvider";
import { useLanguage } from "../i18n/LanguageProvider";
import { fillPrices } from "@/pricing";

function openLeadForm() {
  window.dispatchEvent(new CustomEvent("open-lead-form"));
}

export default function IndustryCall() {
  const { CALL } = useIndustryCopy();
  const { locale } = useLanguage();
  // "From {monthly} / month", or the yearly price without monthly billing.
  const view = usePriceView(locale);
  const monthlyPrice = fillPrices(CALL.price, view);
  const price = monthlyPrice ?? view.yearly;
  const period =
    monthlyPrice === null ? CALL.pricePeriodYearly : CALL.pricePeriod;
  return (
    <IndustrySection
      id="industry-call"
      className="bg-[#0a0516] text-white"
      labelledBy="industry-call-heading"
    >
      <div className="flex items-center justify-between gap-[50px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[28px]">
        <RevealGroup className="w-[58%] max-[900px]:w-full">
          <RevealItem>
            <h2
              id="industry-call-heading"
              className="font-bricolage text-[clamp(34px,3.35vw,52px)] leading-[1.05] tracking-[-0.04em] font-semibold"
            >
              {CALL.headingLead}
              <br />
              <span className="text-[#e4fa65]">{CALL.headingAccent}</span>
              {CALL.headingTail}
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[23px] font-sans text-[17px] leading-[1.58] text-[#c9c2d4] max-[600px]:text-[16px]"
          >
            {CALL.introLead}
            {CALL.introStrong && (
              <strong className="font-semibold text-[#e4fa65]">
                {CALL.introStrong}
              </strong>
            )}
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          delay={0.08}
          className="flex w-[330px] shrink-0 flex-col items-start gap-[13px] max-[900px]:w-full"
        >
          <RevealItem className="flex w-full flex-col items-start">
            <span className="font-sans text-[11px] leading-none font-bold tracking-[0.12em] text-[#c9c2d4]">
              {CALL.priceLabel}
            </span>
            <div className="mt-[6px] flex items-end gap-[7px]">
              <strong className="font-bricolage text-[clamp(58px,5.4vw,86px)] leading-[0.88] font-semibold tracking-[-0.025em] max-[900px]:text-[66px] text-[#e4fa65]">
                {price}
              </strong>
              <small className="pb-[6px] font-sans text-[14px] leading-none font-semibold text-[#c9c2d4]">
                {period}
              </small>
            </div>
          </RevealItem>

          <RevealItem className=" gap-[8px]">
            {/* Opens the site-wide lead enquiry form StickyActions listens for. */}
            <ButtonF
              variant="lime"
              label
              arrowSize={17}
              onClick={openLeadForm}
              className="w-full justify-between text-[12px] md:text-[14px]"
            >
              {CALL.cta.label}
            </ButtonF>
          </RevealItem>
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
