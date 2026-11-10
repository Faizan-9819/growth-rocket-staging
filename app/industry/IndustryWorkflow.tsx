"use client";

import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import { StartArt, Step1Art, Step2Art, Step3Art } from "./ScenarioArt";
import { useIndustryCopy } from "./copy";

const ART = [Step1Art, Step2Art, Step3Art];

/* Source writes emphasis inline as <strong> inside each action line. */
function renderLine(line: string): ReactNode {
  return line.split(/(\*\*[^*]+\*\*)/).map((part, index) =>
    part.startsWith("**") ? (
      <strong key={index} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

/* Final computed values (the .industry-main rules override the base ones):
     card        column, items-center, text-center, justify-center,
                 min-height 320px, padding 34px 18px, 1px border
     illustration 144x116, centred, margin-bottom 24px
     step badge   32x32 box, radius 9px, 1px #e4fa6545, bg #e4fa650c, 16px */
const CARD =
  "relative flex w-[calc(25%-12px)] min-w-0 flex-col items-center justify-center " +
  "rounded-[13px] border px-[18px] py-[34px] min-h-[320px] text-center " +
  "max-[1100px]:w-[calc(50%-8px)] max-[1100px]:px-[12px] " +
  "max-[600px]:w-full max-[600px]:min-h-[280px]";

export default function IndustryWorkflow() {
  const { WORKFLOW } = useIndustryCopy();
  return (
    <IndustrySection
      id="industry-workflow"
      variant="open"
      className="bg-white text-[#0a0516]"
      labelledBy="workflow-heading"
    >
      <RevealGroup>
        <RevealItem>
          <h2
            id="workflow-heading"
            className="mb-[32px] font-bricolage text-[clamp(28px,3.15vw,46px)] leading-[1.15] font-semibold tracking-[-0.04em] max-[900px]:mb-[26px] max-[900px]:text-[32px]"
          >
            {WORKFLOW.headingParts.map((part, index) => (
              <span
                key={part}
                className={`whitespace-nowrap max-[900px]:block ${
                  index === WORKFLOW.headingParts.length - 1
                    ? "text-[#5b2dce]"
                    : "text-[#0a0516]"
                }`}
              >
                {part}{" "}
              </span>
            ))}
          </h2>
        </RevealItem>
      </RevealGroup>

      <RevealGroup delay={0.08}>
        <ol
          aria-label={WORKFLOW.listLabel}
          className="m-0 flex list-none items-stretch gap-[16px] p-0 max-[1100px]:flex-wrap max-[600px]:flex-col max-[600px]:gap-[12px]"
        >
          <RevealItem
            as="li"
            className={`${CARD} border-[#e4fa65] bg-[#e4fa65] text-[#0a0516]`}
          >
            <div className="mx-auto mb-[24px] h-[116px] w-[144px] shrink-0 max-[600px]:mb-[20px]">
              <StartArt />
            </div>
            <p className="m-0 mx-auto font-bricolage text-[27px] leading-[1.14] font-[550] tracking-[-0.035em] max-[1100px]:text-[25px] max-[850px]:text-[28px] max-[600px]:text-[25px]">
              {WORKFLOW.start}
            </p>
          </RevealItem>

          {WORKFLOW.steps.map((step, index) => {
            const Art = ART[index];
            return (
              <RevealItem
                as="li"
                key={step.step}
                className={`${CARD} border-[#21192e] bg-[#0a0516] text-[#f5f2fa]`}
              >
                <span
                  aria-label={`${WORKFLOW.stepLabel} ${step.step}`}
                  className="absolute top-[18px] right-[18px] flex h-[32px] w-[32px] items-center justify-center rounded-[9px] border border-[#e4fa6545] bg-[#e4fa650c] font-bricolage text-[16px] leading-none font-medium text-[#e4fa65] max-[600px]:top-[12px] max-[600px]:right-[12px] max-[600px]:h-[28px] max-[600px]:w-[28px] max-[600px]:rounded-[8px] max-[600px]:text-[14px]"
                >
                  {step.step}
                </span>
                <div className="mx-auto mb-[24px] h-[116px] w-[144px] shrink-0 max-[600px]:mb-[20px]">
                  <Art />
                </div>
                <p className="m-0 mx-auto font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.4] tracking-[-0.015em] max-[1100px]:text-[clamp(13px,1.55vw,17px)] max-[850px]:text-[18px] max-[360px]:text-[16px]">
                  {step.lines.map((line, i) => (
                    <span key={i} className="block">
                      {renderLine(line)}
                    </span>
                  ))}
                </p>
              </RevealItem>
            );
          })}
        </ol>

        <RevealItem
          as="p"
          className="mt-[22px] flex items-start gap-[10px] font-sans text-[12px] leading-[1.6] text-[#6b6475]"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="mt-[2px] h-[16px] w-[16px] shrink-0 fill-none stroke-[#5b2dce] stroke-[1.5]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z" />
          </svg>
          <span>{WORKFLOW.note}</span>
        </RevealItem>
      </RevealGroup>
    </IndustrySection>
  );
}
