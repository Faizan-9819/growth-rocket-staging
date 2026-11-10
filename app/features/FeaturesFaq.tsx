"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "./FeatureReveal";
import SectionCard from "./SectionCard";
import { ToggleIcon } from "../components/sections/home2/FaqAccordion";
import ButtonF from "../components/ui/ButtonF";
import { FEATURES_COPY } from "./data";
import { useLanguage } from "../i18n/LanguageProvider";

/* "Your questions answered." in the styling of the design pages' FAQ fold
   (`sections/design/DesignFaq.tsx`, "A few things you might ask."), which in
   turn wears the pricing and home2 FAQs' — so all four draw the same fold:

   - The `0.85fr / 1.15fr` rail with a sticky left column holding the heading
     and a "Still have a question?" card in the home FAQ's dark styling.
   - Questions are bordered white cards on the silver fold that turn violet
     when open, toggled by the home2 FAQ's lime tile (imported, not copied).
   - Exactly one answer is open at all times: clicking a question opens it
     rather than toggling it, so the fold never collapses to a bare list.

   The copy stays this page's, including the supporting line under the
   heading, and the fold keeps this page's SectionCard shell, silver surface
   and reduced-motion handling. The card's CTA opens the lead enquiry form.

   The section deliberately has no `overflow-hidden` anywhere between it and
   the sticky column: that would make it a scroll container and leave the
   column nothing to travel in. */

/** The home FAQ's HelpCard (dark card, lime heading and pill), carrying this
    page's copy. The CTA opens the site-wide lead enquiry form StickyActions
    listens for. */
function HelpCard() {
  const { t } = useLanguage();

  return (
    <div className="relative mt-[28px] flex w-full max-w-[378px] flex-col gap-[16px] overflow-hidden rounded-[13px] border border-white/10 bg-[#0a0516] p-[26px] md:mt-[32px] md:p-[30px]">
      <div className="relative flex flex-col gap-[14px]">
        <p className="m-0 font-bricolage text-[24px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#e4fa65]">
          {t({ en: "Still have a question?", nl: "Nog een vraag?" })}
        </p>
        <p className="m-0 font-sans text-[15px] leading-[1.6] text-[#c9c2d4]">
          {t({
            en: "Ask us anything about Growth Rocket — what is included, how it is set up and what happens after it goes live.",
            nl: "Vraag ons alles over Growth Rocket: wat er inbegrepen is, hoe we alles inrichten en wat er gebeurt als je website live staat.",
          })}
        </p>

        <ButtonF
          variant="lime"
          size="lg"
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-lead-form"))
          }
          className="mt-[4px] self-start"
        >
          {t({ en: "Talk to our team", nl: "Neem contact op" })}
        </ButtonF>
      </div>
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onOpen,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const reduced = useReducedMotion();
  const panelId = `features-faq-panel-${index}`;
  const buttonId = `features-faq-button-${index}`;

  return (
    <RevealItem
      className={
        "w-full rounded-[13px] border bg-white transition-colors duration-200 " +
        (isOpen
          ? "border-[#5b2dce]"
          : "border-[#ded8e7] hover:border-[#b9a6f0]")
      }
    >
      {/* The padding lives on the button rather than the card so the whole band
          beside the question is a hit target. */}
      <button
        id={buttonId}
        type="button"
        onClick={onOpen}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-[14px] px-[18px] py-[14px] text-left md:gap-[16px] md:px-[28px] md:py-[20px]"
      >
        <span
          className={
            "font-sans text-[14px] leading-[1.45] font-medium tracking-[-0.01em] transition-colors duration-200 md:text-[17px] " +
            (isOpen ? "text-[#5b2dce]" : "text-[#0a0516]")
          }
        >
          {question}
        </span>
        <ToggleIcon open={isOpen} iconClassName="size-[17px] md:size-[21px]" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-[18px] pb-[18px] font-sans text-[14px] leading-[1.75] text-[#625a70] md:px-[28px] md:pb-[22px]">
              <p className="m-0">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  );
}

export default function FeaturesFaq() {
  const [open, setOpen] = useState(0);
  const { t, locale } = useLanguage();
  const { faqItems } = FEATURES_COPY[locale];

  return (
    <SectionCard
      id="faq"
      labelledBy="features-faq-heading"
      className="bg-[#eeeeee] text-[#0a0516]"
    >
      {/* items-start is what lets the left column stick: a grid item stretches
          to the full row height by default, leaving sticky nothing to travel
          in. It only matters from 768px, where the two columns exist. */}
      <div className="grid grid-cols-1 items-start gap-[35px] md:grid-cols-[0.85fr_1.15fr] md:gap-[50px] lg:gap-[90px]">
        {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
        <RevealGroup className="self-start md:sticky md:top-[120px]">
          <RevealItem>
            <h2
              id="features-faq-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] leading-[1.1] font-semibold tracking-[-0.04em]"
            >
              {t({ en: "Your questions", nl: "Je vragen" })}
              <br />
              <span className="text-[#5b2dce]">
                {t({ en: "answered.", nl: "beantwoord." })}
              </span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[18px] max-w-[378px] font-sans text-[16px] leading-[1.65] text-[#625a70]"
          >
            {t({
              en: "Clear answers about your Growth Rocket website and connected business tools.",
              nl: "Heldere antwoorden over je Growth Rocket-website en hoe je daarmee je dagelijkse werk regelt.",
            })}
          </RevealItem>

          <RevealItem>
            <HelpCard />
          </RevealItem>
        </RevealGroup>

        {/* Same 0.05 step as the other FAQ folds, starting as soon as the
            list's top edge is in. */}
        <RevealGroup
          stagger={0.05}
          amount={0.05}
          className="flex w-full flex-col gap-[16px]"
        >
          {faqItems.map(({ question, answer }, i) => (
            <AccordionItem
              key={question}
              question={question}
              answer={answer}
              index={i}
              isOpen={open === i}
              onOpen={() => setOpen(i)}
            />
          ))}
        </RevealGroup>
      </div>
    </SectionCard>
  );
}
