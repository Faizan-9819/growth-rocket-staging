"use client";

import Image from "next/image";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import { useIndustryCopy } from "./copy";

export default function IndustryLocal() {
  const { LOCAL } = useIndustryCopy();
  return (
    <IndustrySection id="industry-local" className="bg-[#eeeef0] text-[#0a0516]">
      <div className="flex items-center gap-[50px] max-[900px]:flex-col max-[900px]:gap-[30px]">
        <RevealGroup className="w-[42%] max-[900px]:w-full">
          <RevealItem media>
            <figure className="relative m-0 h-[560px] w-full overflow-hidden rounded-[13px] max-[900px]:h-[380px]">
              <Image
                src={LOCAL.image}
                alt={LOCAL.photoAlt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </figure>
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="w-[58%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[45px] leading-[1.08] font-semibold tracking-[-0.045em]">
              {LOCAL.heading}
              <br />
              <span className="text-[#5b2dce]">{LOCAL.headingAccent}</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[23px] font-sans text-[15px] leading-[1.7] text-[#625b6b]"
          >
            {LOCAL.intro}
          </RevealItem>

          <ul className="mt-[22px] flex w-full flex-col">
            {LOCAL.checks.map((check, index) => (
              <RevealItem
                as="li"
                key={check}
                className={`relative py-[11px] pl-[26px] font-sans text-[14px] leading-[1.5] ${
                  index === 0 ? "" : "border-t border-[#d5d0dc]"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute top-[17px] left-[3px] h-[6px] w-[10px] -rotate-45 border-b-[1.5px] border-l-[1.5px] border-[#5b2dce]"
                />
                {check}
              </RevealItem>
            ))}
          </ul>

          <RevealItem
            as="p"
            className="mt-[23px] font-sans text-[12px] leading-[1.6] text-[#6b6475]"
          >
            {LOCAL.small}
          </RevealItem>
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
