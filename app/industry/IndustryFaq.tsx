"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import { ToggleIcon } from "../components/sections/home2/FaqAccordion";
import IndustrySection from "./IndustrySection";
import { useIndustryCopy } from "./copy";

/* Card-per-question styling is home2's FaqAccordion; the questions are the
   eight from Growth-Rocket-Electricians-Standalone.html. */
export default function IndustryFaq() {
  const { FAQ, FAQ_ITEMS } = useIndustryCopy();
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <IndustrySection
      id="industry-faq"
      variant="open"
      className="bg-white text-[#0a0516]"
    >
      <div className="flex items-start gap-[65px] max-[900px]:flex-col max-[900px]:gap-[35px]">
        <RevealGroup className="w-[40%] self-start max-[900px]:w-full md:sticky md:top-[120px]">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {FAQ.heading}
              <br />
              <span className="text-[#5b2dce]">{FAQ.headingAccent}</span>
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="mt-[18px] font-sans text-[15px] leading-[1.7] text-[#625b6b]"
          >
            {FAQ.intro}
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="w-[60%] max-[900px]:w-full">
          <div className="flex w-full flex-col gap-[10px]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = open === index;
              return (
                <RevealItem
                  key={item.question}
                  className={
                    "w-full rounded-[13px] border bg-white transition-colors duration-200 " +
                    (isOpen ? "border-[#5b2dce]" : "border-[#ded8e7]")
                  }
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[20px] px-[18px] py-[18px] text-left md:px-[28px]"
                  >
                    <span
                      className={
                        "font-sans text-[15px] leading-[1.45] font-medium tracking-[-0.01em] transition-colors duration-200 md:text-[17px] " +
                        (isOpen ? "text-[#5b2dce]" : "text-[#0a0516]")
                      }
                    >
                      {item.question}
                    </span>
                    <ToggleIcon open={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-[18px] pb-[18px] font-sans text-[14px] leading-[1.75] text-[#625a70] md:px-[28px] md:pb-[22px]">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </RevealItem>
              );
            })}
          </div>
        </RevealGroup>
      </div>
    </IndustrySection>
  );
}
