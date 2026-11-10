"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import { useIndustryCopy } from "./copy";

export default function IndustryIntro() {
  const { INTRO } = useIndustryCopy();
  return (
    <IndustrySection variant="open" className="bg-white text-[#0a0516]">
      <div className="flex items-start gap-[70px] max-[900px]:flex-col max-[900px]:gap-[34px]">
        <RevealGroup className="w-[55%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {INTRO.heading}
              <br />
              <span className="text-[#5b2dce]">
                {INTRO.headingAccent[0]}
                <br />
                {INTRO.headingAccent[1]}
              </span>
            </h2>
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="w-[45%] max-[900px]:w-full">
          {INTRO.paragraphs.map((paragraph, index) => (
            <RevealItem
              as="p"
              key={paragraph}
              className={`font-sans text-[15px] leading-[1.7] text-[#625b6b] ${
                index === 0 ? "" : "mt-[18px]"
              }`}
            >
              {paragraph}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
