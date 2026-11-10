"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import ButtonF from "../components/ui/ButtonF";
import { useIndustryCopy } from "./copy";

function openLeadForm() {
  window.dispatchEvent(new CustomEvent("open-lead-form"));
}

export default function IndustryClose() {
  const { CLOSE } = useIndustryCopy();
  return (
    <IndustrySection className="bg-[#e4fa65] text-[#0a0516]">
      <div className="flex items-center justify-between gap-[50px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[25px]">
        <RevealGroup className="w-[62%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em] max-[900px]:text-[38px]">
              {CLOSE.heading}
              <br />
              <span className="text-[#5b2dce]">{CLOSE.headingAccent}</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[23px] font-sans text-[15px] leading-[1.7] text-[#414629]"
          >
            {CLOSE.bodyLines[0]}
            <br />
            {CLOSE.bodyLines[1]}
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="shrink-0">
          <RevealItem>
            <ButtonF
              variant="violet"
              label
              arrowSize={17}
              onClick={openLeadForm}
              className="justify-between border border-transparent text-[12px] hover:bg-[#0a0516] hover:text-[#e4fa65] md:text-[14px]"
            >
              {CLOSE.cta.label}
            </ButtonF>
          </RevealItem>
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
