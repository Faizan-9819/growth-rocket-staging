"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { LaunchCopy } from "./page-copy";

/**
 * "Ready in as little as 7 days." — `section.dc-launch.dc-open` from
 * dentalcare.html, wearing home2's `ProcessTimeline` motion.
 *
 * Copy and type come from dentalcare.css:
 *
 *   .dc-open            padding:76px clamp(24px,5vw,80px)  (44px 22px <700px)
 *                       no radius, no background
 *   .dc-launch h2 span  color:var(--dc-purple) #5b2dce
 *   .dc-number          42x42; background:var(--dc-green) #e4fa65
 *                       border-radius:50%; font-size:12px; font-weight:600
 *                       margin-bottom:22px
 *   .dc-steps h3        font-size:25px; line-height:1.16
 *                       margin-bottom:12px   (24px under 700px)
 *   .dc-steps p         font-size:14px; color:#655f6c
 *   .dc-caption         font-size:12px; line-height:1.6; color:#6b6771
 *                       margin:20px 0 0
 *
 * ── Motion ────────────────────────────────────────────────────────────────
 * The steps are `ProcessTimeline`'s timeline, mechanism and all — not just its
 * timing constants. That distinction is the whole point: an earlier pass copied
 * the constants onto dentalcare's own `article::after` hairline and it did not
 * read as the same fold, because that hairline is a 1px stub sitting *between*
 * two circles and it does not exist at all below 700px. Nothing appeared to be
 * drawn.
 *
 * So this takes ProcessTimeline's geometry:
 *
 *   - The rule runs circle-centre to circle-centre and passes *beneath* each
 *     circle, which is what makes the line look like it threads the steps
 *     together rather than bridging gaps. The solid circle paints over it where
 *     it crosses — no white ring, so the line meets each circle's edge.
 *   - It is 2px, not dentalcare's 1px. At 1px the draw is barely perceptible,
 *     which was half of why the animation did not register.
 *   - Unlike ProcessTimeline, there is no tail past the last step: the rule
 *     ends at step 04's circle.
 *   - Below 700px the row becomes a single column with the circle beside the
 *     copy and the rule turns vertical, drawn top-down. dentalcare.css instead
 *     goes two-up and hides the rule (`article:after{display:none}`), so this
 *     is a deliberate departure: the timeline has to stay a timeline on a
 *     phone or there is no animation left to match.
 *
 * A pseudo-element cannot be driven by a variant, so each segment is a real
 * `motion.span` parented to the card it starts from. Same painted result, and
 * each segment can now be timed against its own card.
 */

const STEPS = [
  {
    title: "Choose",
    body: "Start with this design and choose your billing option.",
  },
  {
    title: "Share",
    body: "Send your branding, business details and content.",
  },
  {
    title: "We build",
    body: "We set up your website and connected business tools.",
  },
  {
    title: "Go live",
    body: "Review your website, approve it and launch.",
  },
];

/**
 * One clock for the whole fold, so the rule can be timed against the cards
 * rather than just appearing under them. Card `i` runs over
 * `[LEAD + STEP*i, +CARD]`; the segment that leads to it starts once card
 * `i - 1` is on screen and lands a beat before card `i` settles, so the line
 * reads as drawing each card into place.
 *
 * `ProcessTimeline`'s values verbatim — the two folds are the same four-step
 * timeline and should move at the same speed.
 */
const LEAD = 0.092; // before step 01 moves
const STEP = 0.161; // between consecutive steps
const CARD = 0.69; // a card's own fade-and-rise
const DRAW = 0.575; // a segment's draw
const DRAW_LEAD = 0.184; // after its own card, before the segment sets off

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DRAW: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function DesignLaunch({
  business,
  copy,
}: {
  business: string;
  /** Approved copy (the shared master copy for sections 6–8). */
  copy?: LaunchCopy;
}) {
  const reduced = useReducedMotion();
  const text: LaunchCopy = copy ?? {
    heading: { lead: "Ready in as little as", accent: "7 days.", breakBefore: false },
    intro: [`You focus on your ${business}.`, "We take care of bringing it online."],
    steps: STEPS,
    note: "The 7-day setup depends on receiving the required information and approvals on time.",
  };
  const steps = text.steps.map((step, i) => ({
    n: String(i + 1).padStart(2, "0"),
    ...step,
  }));

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
    /* Layout, type and spacing are home2's `ProcessTimeline` (the home page's
       "Online within 7 working days" fold), class for class: the heading and
       its intro stacked full width, 56px number circles with a white ring
       (40px on phones), the rule running on past step 04, and the same
       footnote. The copy stays this page's own; it has no owner pills, so
       none are drawn. */
    <section
      aria-labelledby="design-launch-heading"
      className="bg-white py-[60px] text-[#0a0516] md:py-[94px]"
    >
      <div className="fix">
        {/* Only the head joins the shared reveal system. The timeline below it
            keeps its own choreography: one clock drives the cards AND the rule
            segments drawn between them, and a RevealGroup would take the cards
            off that clock and leave the line drawing to nothing. */}
        <RevealGroup className="mb-[30px] md:mb-[44px]">
          <RevealItem>
            <h2
              id="design-launch-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              {text.heading.lead}
              {text.heading.breakBefore ? <br /> : " "}
              <span className="text-[#5b2dce]">{text.heading.accent}</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[22px] max-w-[420px] font-sans text-[17px] font-normal leading-[1.7] tracking-normal text-[#625a70]"
          >
            {text.intro[0]}
            <br />
            {text.intro[1]}
          </RevealItem>
        </RevealGroup>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] md:mt-[50px] md:grid-cols-4 md:gap-[22px] lg:gap-[30px]"
        >
          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              custom={i}
              variants={card}
              className="relative z-[1] grid grid-cols-[40px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] md:block md:pt-0"
            >
              {/* Desktop rule: this circle's centre to the next one's, i.e. one
                  column plus one gap. The last step keeps the tail out to 28px
                  short of the row's right edge. Sits behind the circle, which
                  masks it with its white ring. */}
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

              {/* Mobile rule: centre of this circle to the centre of the next
                  one, so nothing hangs above 01 or below the last step. The
                  35px row gap plus the next card's 22px top padding and half
                  its circle is the 77px overhang. */}
              {i < steps.length - 1 && (
                <motion.span
                  aria-hidden
                  custom={i}
                  variants={drawY}
                  className="absolute bottom-[-77px] left-[19px] top-[42px] -z-10 w-[2px] origin-top bg-[#ded8e7] md:hidden"
                />
              )}

              {/* Two rows beside the circle on phones (title, body); the home
                  fold's third row is its owner pill. */}
              <span className="row-span-2 row-start-1 grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e4fa65] font-bricolage text-[18px] tracking-[-0.03em] text-[#0a0516] shadow-[0_0_0_6px_#fff] md:h-[56px] md:w-[56px] md:text-[24px] md:shadow-[0_0_0_8px_#fff]">
                {step.n}
              </span>

              <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.05] tracking-[-0.035em] md:mt-[26px] md:text-[22px] lg:text-[25px]">
                {step.title}
              </h3>

              <p className="m-0 font-sans text-[16px] leading-[1.75] text-[#625a70] md:mt-[15px]">
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <RevealGroup delay={0.08}>
          <RevealItem
            as="p"
            className="mt-[35px] font-sans text-[12px] leading-[1.6] text-[#6b6475]"
          >
            {text.note}
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
