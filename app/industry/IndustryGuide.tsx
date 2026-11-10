"use client";

import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import ArrowIcon from "../components/ui/ArrowIcon";
import ButtonF from "../components/ui/ButtonF";
import IndustrySection from "./IndustrySection";
import { useIndustryCopy } from "./copy";

/* Each card's art block cycles purple → ink → lime, as the source does. */
const ART = [
  "bg-[#5b2dce] text-[#e4fa65]",
  "bg-[#0a0516] text-[#e4fa65]",
  "bg-[#e4fa65] text-[#5b2dce]",
];

/* `.arrow-cta` on the link drives the swap for both arrows. A guide that isn't
   published yet has no href: for now its card links to "#" (same tab), so
   every card still shows "Read the guide" until the real guides exist. */
const GUIDE_PLACEHOLDER_HREF = "#";

function GuideCardShell({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href !== GUIDE_PLACEHOLDER_HREF;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="arrow-cta flex h-full cursor-pointer flex-col"
    >
      {children}
    </a>
  );
}

export default function IndustryGuide() {
  const { GUIDE } = useIndustryCopy();
  return (
    <IndustrySection
      id="industry-guide"
      className="bg-[#eeeef0] text-[#0a0516]"
    >
      <RevealGroup>
        <div className="mb-[36px] flex items-end gap-[60px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[20px]">
          <RevealItem className="w-[58%] max-[900px]:w-full">
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {GUIDE.heading}
              <br />
              <span className="text-[#5b2dce]">{GUIDE.headingAccent}</span>
            </h2>
          </RevealItem>
          {/* `.in-section-head>p`: body copy (16px / 1.65), capped at 430px. */}
          <RevealItem
            as="p"
            className="w-[42%] max-w-[430px] font-sans text-[16px] leading-[1.65] text-[#625b6b] max-[900px]:w-full"
          >
            {GUIDE.intro}
          </RevealItem>
        </div>
      </RevealGroup>

      <RevealGroup delay={0.08}>
        {/* `.in-blog-grid`: 24px gap, 16px from 1100px down. */}
        <div className="flex items-stretch gap-[24px] max-[1100px]:gap-[16px] max-[900px]:flex-col">
          {GUIDE.cards.map((card, index) => (
            <RevealItem
              as="article"
              key={card.num}
              className="w-[calc(33.333%-16px)] min-w-0 overflow-hidden rounded-[13px] bg-white max-[900px]:w-full"
            >
              <GuideCardShell href={card.href ?? GUIDE_PLACEHOLDER_HREF}>
                {/* `.in-blog-art`: 130px band (110px at 760px and below), the
                    number in Bricolage at 64px, the arrow at 38px. */}
                <div
                  aria-hidden
                  className={`flex h-[130px] items-center justify-between p-[24px] max-[760px]:h-[110px] ${ART[index]}`}
                >
                  <span className="font-bricolage text-[64px] leading-none">
                    {card.num}
                  </span>
                  <ArrowIcon direction="up-right" size={38} />
                </div>
                {/* `.in-blog-copy`: 25px padding (20px from 1100px down),
                    topic 11px, title 25px / 1.18 (23px from 1100px down),
                    body 14px / 1.65, link 13px. */}
                <div className="flex h-full w-full flex-col items-start p-[25px] max-[1100px]:p-[20px]">
                  <p className="mb-[14px] font-sans text-[11px] font-semibold tracking-[0.07em] text-[#5b2dce]">
                    {card.topic}
                  </p>
                  <h3 className="mb-[16px] font-bricolage text-[25px] leading-[1.18] font-semibold tracking-[-0.035em] max-[1100px]:text-[23px]">
                    {card.title}
                  </h3>
                  <p className="mb-[22px] font-sans text-[14px] leading-[1.65] text-[#625b6b]">
                    {card.body}
                  </p>
                  <ButtonF
                    as="span"
                    variant="link"
                    hover={false}
                    arrowSize={14}
                    className="mt-auto gap-[6px] font-sans text-[13px] font-medium text-[#5b2dce]"
                  >
                    <span className="underline underline-offset-[5px]">
                      {GUIDE.readLabel}
                    </span>
                  </ButtonF>
                </div>
              </GuideCardShell>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </IndustrySection>
  );
}
