"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { RevealGroup, RevealItem } from "./FeatureReveal";
import SectionCard from "./SectionCard";
import { FEATURES_COPY, WORKFLOW_STEPS } from "./data";
import { useLanguage } from "../i18n/LanguageProvider";

/* The rail draws itself when it scrolls into view: the first node pops, the
   connecting line runs out of it towards the last, easing into every node on
   the way, and each node pops as the line reaches it, its label settling in
   just behind. Both rails play the same beat — left to right on the
   horizontal one, top to bottom on the vertical one phones get.

   The line is keyframed through every node rather than drawn in one sweep.
   The nodes sit at even steps along it (the first and last are its two ends),
   so node k is keyframe k/(n-1) and the line provably arrives at it on
   schedule, whatever easing each run uses — which is what lets the pops be
   plain delays.

   Drawn, the rail is exactly what it was: same line, nodes and labels. Under
   reduced motion it renders drawn and never plays. */

const LAST = WORKFLOW_STEPS.length - 1;
const STOPS = WORKFLOW_STEPS.map((_, k) => k / LAST);

const START = 0.2; // s after the rail is in view, so the heading leads
const LINE_AT = START + 0.15; // the line leaves the first node once it has popped
const RUN = 0.35; // s per node-to-node run

const EASE_RUN = [0.45, 0, 0.55, 1] as const;
const EASE_POP = [0.34, 1.56, 0.64, 1] as const; // back-out: a small overshoot
const EASE_SETTLE = [0.16, 1, 0.3, 1] as const; // FeatureReveal's curve

/* The moment the line reaches node k. Pops start a touch early so the node is
   already opening as the line meets its edge rather than its centre. */
function arrival(k: number) {
  return k === 0 ? START : LINE_AT + RUN * k - 0.05;
}

function lineVariants(axis: "x" | "y"): Variants {
  const transition = {
    delay: LINE_AT,
    duration: RUN * LAST,
    times: STOPS,
    ease: STOPS.slice(1).map(() => EASE_RUN),
  };
  return axis === "x"
    ? { hidden: { scaleX: 0 }, show: { scaleX: STOPS, transition } }
    : { hidden: { scaleY: 0 }, show: { scaleY: STOPS, transition } };
}

const NODE: Variants[] = WORKFLOW_STEPS.map((_, k) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { delay: arrival(k), duration: 0.45, ease: EASE_POP },
      opacity: { delay: arrival(k), duration: 0.15 },
    },
  },
}));

/* Labels rise into the horizontal rail and slide in beside the vertical one. */
function labelVariants(axis: "x" | "y"): Variants[] {
  return WORKFLOW_STEPS.map((_, k) => ({
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      ...(axis === "x" ? { y: 10 } : { x: -10 }),
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        delay: arrival(k) + 0.08,
        duration: 0.55,
        ease: EASE_SETTLE,
      },
    },
  }));
}

const RAIL = {
  x: { line: lineVariants("x"), labels: labelVariants("x") },
  y: { line: lineVariants("y"), labels: labelVariants("y") },
};

export default function WorkflowFold() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  /* Same five steps in every locale, so the rail geometry above (built from
     the EN list) holds; only the labels change. */
  const steps = FEATURES_COPY[locale].workflowSteps;

  /* Each rail is its own variant root, so it plays on its own trigger rather
     than the column group's stagger. `initial={false}` + `animate` settles it
     straight on the drawn state. */
  const draw = reduced
    ? ({ initial: false, animate: "show" } as const)
    : ({
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.6 },
      } as const);

  return (
    <SectionCard className="bg-[#5b2dce] text-white">
      <div className="flex items-center gap-[48px] max-[900px]:flex-col max-[900px]:items-stretch">
        <RevealGroup className="w-[42%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            {t({
              en: "One connected workflow for",
              nl: "Eén doorlopend proces voor",
            })}{" "}
            <span className="text-[#e4fa65]">
              {t({ en: "your business.", nl: "jouw bedrijf." })}
            </span>
          </h2>
          </RevealItem>
          <RevealItem as="p" className="mt-[20px] text-[17px] leading-[1.65] text-white/[0.76]">
            {t({
              en: "Growth Rocket brings the different parts of your customer journey together. A visitor can discover your business, submit an enquiry or book an appointment, and their information becomes available in the Hub for the next step.",
              nl: "Growth Rocket verbindt alle stappen in het contact met je klant. Iemand vindt je bedrijf, stuurt een aanvraag of boekt een afspraak. De gegevens staan vervolgens in de Hub, klaar voor de volgende stap.",
            })}
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="w-[58%] max-[900px]:mt-[8px] max-[900px]:w-full">
          {/* Desktop: horizontal rail with a connecting line behind the nodes. */}
          <motion.ol
            {...draw}
            className="relative flex w-full items-start pt-[28px] max-[600px]:hidden"
          >
            <motion.span
              aria-hidden
              variants={RAIL.x.line}
              className="absolute top-[8px] right-[10%] left-[10%] h-[2px] origin-left bg-white/[0.35]"
            />
            {steps.map((step, k) => (
              <li
                key={step}
                className="relative flex w-[20%] flex-col items-center px-[8px] text-center text-[15px] leading-[1.2] font-[750]"
              >
                <motion.span
                  aria-hidden
                  variants={NODE[k]}
                  className="absolute top-[-28px] h-[18px] w-[18px] rounded-full border-4 border-[#5b2dce] bg-[#e4fa65]"
                />
                <motion.span variants={RAIL.x.labels[k]}>{step}</motion.span>
              </li>
            ))}
          </motion.ol>

          {/* Narrow: the same rail rotated to a vertical list. The labels are
              `block` because a transform does nothing to an inline box. */}
          <motion.ol
            {...draw}
            className="relative hidden w-full flex-col max-[600px]:flex"
          >
            <motion.span
              aria-hidden
              variants={RAIL.y.line}
              className="absolute top-[22px] bottom-[22px] left-[10px] w-[2px] origin-top bg-white/[0.35]"
            />
            {steps.map((step, k) => (
              <li
                key={step}
                className="relative py-[11px] pl-[34px] text-left text-[15px] leading-[1.2] font-[750]"
              >
                <motion.span
                  aria-hidden
                  variants={NODE[k]}
                  className="absolute top-1/2 left-[2px] h-[18px] w-[18px] -translate-y-1/2 rounded-full border-4 border-[#5b2dce] bg-[#e4fa65]"
                />
                <motion.span variants={RAIL.y.labels[k]} className="block">
                  {step}
                </motion.span>
              </li>
            ))}
          </motion.ol>
        </RevealGroup>
      </div>
    </SectionCard>
  );
}
