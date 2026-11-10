"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import ButtonF from "../components/ui/ButtonF";
import IndustrySection from "./IndustrySection";
import IndustryBillingCard from "./IndustryBillingCard";
import { useIndustryCopy } from "./copy";

export default function IndustryPricing() {
  const { PRICING } = useIndustryCopy();
  return (
    <IndustrySection id="industry-pricing" className="bg-[#e4fa65] text-[#0a0516]">
      <div className="flex items-center gap-[70px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[34px]">
        <RevealGroup className="w-[56%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {PRICING.headingLines[0]}
              <br />
              {PRICING.headingLines[1]}
              <br />
              <span className="text-[#5b2dce]">{PRICING.headingAccent}</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[23px] w-full max-w-[510px] font-sans text-[15px] leading-[1.7] text-[#414629]"
          >
            {PRICING.intro}
          </RevealItem>

          <ul className="my-[24px] flex w-full flex-col font-sans text-[14px]">
            {PRICING.includes.map((item, index) => (
              <RevealItem
                as="li"
                key={item}
                className={`py-[12px] leading-[1.5] ${
                  index === 0 ? "" : "border-t border-[#00000022]"
                }`}
              >
                <span aria-hidden className="mr-[10px] text-[#5b2dce]">
                  ✓
                </span>
                {item}
              </RevealItem>
            ))}
          </ul>

          <RevealItem
            as="p"
            className="font-sans text-[12px] leading-[1.6] text-[#494f2c]"
          >
            {PRICING.smallLead}
            <ButtonF
              href={PRICING.smallLink.href}
              variant="link"
              arrowSize={13}
              className="cursor-pointer gap-[5px]"
            >
              <span className="underline underline-offset-[3px]">
                {PRICING.smallLink.label}
              </span>
            </ButtonF>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          delay={0.08}
          className="flex w-[44%] justify-end max-[900px]:w-full max-[900px]:justify-start"
        >
          <RevealItem media className="w-full max-w-[450px]">
            <IndustryBillingCard />
          </RevealItem>
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
