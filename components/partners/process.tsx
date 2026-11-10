"use client";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { RevealGroup, RevealItem } from "@/app/features/FeatureReveal";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { processSteps } from "@/app/partner-network/data";

/**
 * The partner referral steps, laid out exactly like home2's ProcessTimeline
 * (`app/components/sections/home2/ProcessTimeline.tsx`): left-aligned head,
 * lime step circles with a white ring sitting on a 2px rule — horizontal from
 * md up, vertical below — and one clock that times each card and the rule
 * segment leading to it. Only the copy is this page's.
 */
const LEAD = 0.092; // before step 01 moves
const STEP = 0.161; // between consecutive steps
const CARD = 0.69; // a card's own fade-and-rise
const DRAW = 0.575; // a segment's draw
const DRAW_LEAD = 0.184; // after its own card, before the segment sets off

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DRAW: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function Process() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const list: Variants = { hidden: {}, show: {} };

  const card: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: CARD, delay: LEAD + STEP * i, ease: EASE },
    }),
  };

  // `custom` is the index of the step a segment *starts* from, so segment 0
  // runs 01 → 02. Reduced motion keeps the rule whole and just fades it in.
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
    <section
      aria-labelledby="partner-process-heading"
      className="rounded-[13px] bg-white py-[60px] text-[#0a0516] md:py-[94px]"
    >
      <div className="fix">
        <RevealGroup className="mb-[30px] md:mb-[44px]">
          <RevealItem>
            <h2
              id="partner-process-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              {t({ en: "A simple", nl: "Een eenvoudig" })}{" "}
              <span className="text-[#5b2dce]">
                {t({ en: "referral process.", nl: "doorverwijsproces." })}
              </span>
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="mt-[22px] max-w-[420px] font-sans text-[17px] font-normal leading-[1.7] tracking-normal text-[#625a70]"
          >
            {t({
              en: "Four steps. We handle the work. You stay focused on relationships.",
              nl: "Vier stappen. Wij doen het werk. Jij focust op relaties.",
            })}
          </RevealItem>
        </RevealGroup>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] md:mt-[50px] md:grid-cols-4 md:gap-[22px] lg:gap-[30px]"
        >
          {processSteps.map((step, i) => (
            <motion.article
              key={step.n}
              custom={i}
              variants={card}
              className="relative z-[1] grid grid-cols-[40px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] md:block md:pt-0"
            >
              {/* Desktop rule: this circle's centre to the next one's (one
                  column plus one gap); the last step's tail stops 28px short
                  of the row's right edge. The circle's white ring masks it. */}
              <motion.span
                aria-hidden
                custom={i}
                variants={drawX}
                className={`absolute left-[28px] top-[28px] -z-10 hidden h-[2px] origin-left bg-[#ded8e7] md:block ${
                  i < processSteps.length - 1
                    ? "md:w-[calc(100%+22px)] lg:w-[calc(100%+30px)]"
                    : "md:w-[calc(100%-56px)]"
                }`}
              />

              {/* Mobile rule: centre of this circle to the centre of the next. */}
              {i < processSteps.length - 1 && (
                <motion.span
                  aria-hidden
                  custom={i}
                  variants={drawY}
                  className="absolute bottom-[-77px] left-[19px] top-[42px] -z-10 w-[2px] origin-top bg-[#ded8e7] md:hidden"
                />
              )}

              <span className="row-span-2 row-start-1 grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e4fa65] font-bricolage text-[18px] tracking-[-0.03em] text-[#0a0516] shadow-[0_0_0_6px_#fff] md:h-[56px] md:w-[56px] md:text-[24px] md:shadow-[0_0_0_8px_#fff]">
                {step.n}
              </span>

              <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.05] tracking-[-0.035em] md:mt-[26px] md:text-[22px] lg:text-[25px]">
                {t(step.title)}
              </h3>

              <p className="m-0 font-sans text-[16px] leading-[1.75] text-[#625a70] md:mt-[15px]">
                {t(step.body)}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <RevealGroup className="mt-[40px] md:mt-[50px]">
          <RevealItem
            as="p"
            className="m-0 inline-flex w-max max-w-full items-center rounded-[13px] md:rounded-full bg-[rgba(228,250,101,0.42)] px-[11px] py-[7px] font-sans text-[12px] font-bold tracking-[0.025em] text-[#0a0516]"
          >
            {t({
              en: "No technical work. No project management. You focus on introductions.",
              nl: "Geen technisch werk. Geen projectmanagement. Jij focust op introducties.",
            })}
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
