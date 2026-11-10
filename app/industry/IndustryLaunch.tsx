"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import { useIndustryCopy } from "./copy";

/**
 * Launch steps as a timeline — same treatment as home2's ProcessTimeline:
 * lime step circles with a white ring over a 2px rule, horizontal from md up
 * and vertical below. The white ring masks the rule under each circle, so the
 * section must stay on a white surface.
 *
 * One clock drives the cards and the rule segments drawn between them. Card
 * `i` runs over `[LEAD + STEP*i, +CARD]`; the segment leading out of it sets
 * off DRAW_LEAD later, so the line reads as drawing each card into place.
 */
const LEAD = 0.092;
const STEP = 0.161;
const CARD = 0.69;
const DRAW = 0.575;
const DRAW_LEAD = 0.184;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DRAW: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function IndustryLaunch() {
  const { LAUNCH } = useIndustryCopy();
  const reduced = useReducedMotion();
  const steps = LAUNCH.steps;

  const list: Variants = { hidden: {}, show: {} };

  const card: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: CARD, delay: LEAD + STEP * i, ease: EASE },
    }),
  };

  // `custom` is the index of the step a segment starts from. Reduced motion
  // keeps the rule whole and just fades it in.
  const drawTransition = (i: number): Transition => ({
    duration: reduced ? 0.3 : DRAW,
    delay: LEAD + STEP * i + DRAW_LEAD,
    ease: reduced ? "linear" : EASE_DRAW,
  });

  const drawX: Variants = {
    hidden: reduced ? { opacity: 0 } : { scaleX: 0 },
    show: (i: number) =>
      reduced
        ? { opacity: 1, transition: drawTransition(i) }
        : { scaleX: 1, transition: drawTransition(i) },
  };

  const drawY: Variants = {
    hidden: reduced ? { opacity: 0 } : { scaleY: 0 },
    show: (i: number) =>
      reduced
        ? { opacity: 1, transition: drawTransition(i) }
        : { scaleY: 1, transition: drawTransition(i) },
  };

  return (
    <IndustrySection
      id="industry-launch"
      variant="open"
      className="bg-white text-[#0a0516]"
    >
      <RevealGroup>
        <div className="mb-[36px] flex items-end md:justify-between gap-[60px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[20px]">
          <RevealItem className="w-[58%] max-[900px]:w-full">
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {LAUNCH.headingLead}
              <span className="text-[#5b2dce]">{LAUNCH.headingAccent}</span>
              <br />
              {LAUNCH.headingTail}
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="ml-auto max-w-[42%] text-right font-sans text-[15px] leading-[1.6] text-[#625b6b] max-[900px]:ml-0 max-[900px]:max-w-full max-[900px]:text-left"
          >
            {LAUNCH.intro}
          </RevealItem>
        </div>
      </RevealGroup>

      {/* The timeline keeps its own choreography rather than joining a
          RevealGroup, so the rule segments stay timed against their cards. */}
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] md:mt-[50px] md:grid-cols-4 md:gap-[22px] lg:gap-[30px]"
      >
        {steps.map((step, i) => (
          <motion.article
            key={step.num}
            custom={i}
            variants={card}
            className="relative z-[1] grid grid-cols-[40px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] md:block md:pt-0"
          >
            {/* Desktop rule: this circle's centre to the next one's (one
                column plus one gap); the last step tails off 28px short of
                the row's right edge. */}
            <motion.span
              aria-hidden
              custom={i}
              variants={drawX}
              className={`absolute left-[28px] top-[28px] -z-10 hidden h-[2px] origin-left bg-[#ded8e7] md:block ${
                i < steps.length - 1
                  ? "md:w-[calc(100%+22px)] lg:w-[calc(100%+30px)]"
                  : "md:w-[calc(100%-56px)]"
              }`}
            />

            {/* Mobile rule: centre of this circle to the centre of the next.
                35px row gap + 22px top padding + half a 40px circle = 77px. */}
            {i < steps.length - 1 && (
              <motion.span
                aria-hidden
                custom={i}
                variants={drawY}
                className="absolute bottom-[-77px] left-[19px] top-[42px] -z-10 w-[2px] origin-top bg-[#ded8e7] md:hidden"
              />
            )}

            <span className="row-span-3 row-start-1 grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e4fa65] font-bricolage text-[18px] tracking-[-0.03em] text-[#0a0516] shadow-[0_0_0_6px_#fff] md:h-[56px] md:w-[56px] md:text-[24px] md:shadow-[0_0_0_8px_#fff]">
              {step.num}
            </span>

            <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.05] tracking-[-0.035em] md:mt-[26px] md:text-[22px] lg:text-[25px]">
              {step.title}
            </h3>

            <p className="m-0 font-sans text-[16px] leading-[1.75] text-[#625a70] md:mt-[15px]">
              {step.body}
            </p>

            <span className="m-0 inline-flex w-max items-center rounded-full bg-[rgba(228,250,101,0.42)] px-[10px] py-[6px] font-sans text-[11px] font-bold tracking-[0.025em] text-[#0a0516] md:mt-[20px] md:px-[11px] md:py-[7px] md:text-[12px]">
              {step.owner}
            </span>
          </motion.article>
        ))}
      </motion.div>

      <RevealGroup delay={0.08}>
        <RevealItem
          as="p"
          className="mt-[35px] font-sans text-[12px] leading-[1.6] text-[#6b6475]"
        >
          {LAUNCH.small}
        </RevealItem>
      </RevealGroup>
    </IndustrySection>
  );
}
