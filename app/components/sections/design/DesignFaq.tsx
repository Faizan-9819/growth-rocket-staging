"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { ToggleIcon } from "../home2/FaqAccordion";
import ButtonF from "../../ui/ButtonF";
import type { Locale } from "../../../i18n/config";
import type { FaqCopy } from "./page-copy";

/** The home2 FAQ HelpCard's heading, used when the page copy has none. */
const HELP_TITLE: Record<Locale, string> = {
  en: "Still have questions?",
  nl: "Heb je nog vragen?",
};

/**
 * "A few things you might ask." — the questions from `section.dc-faq.dc-panel
 * #faq` in dentalcare.html, wearing `pricing/PricingFaq.tsx`'s styling rather
 * than the source's own. That fold in turn wears `home2/FaqAccordion.tsx`'s, so
 * all three now draw the same accordion and cannot drift apart.
 *
 * The content and the surface are this page's; everything else follows the
 * pricing fold:
 *
 * - The fold keeps dentalcare.css's `#eeeeef` panel (`.dc-faq{background:
 *   #eeeeef}`) instead of the pricing fold's white, so it still sits in this
 *   page's palette between `DesignPackage` and `DesignRelated`. The question
 *   cards are white on top of it, as they are on pricing.
 * - The `0.85fr / 1.15fr` rail with a sticky left column, in place of the
 *   source's static `.8fr / 1.2fr` pair.
 * - Questions are bordered white cards that turn violet when open, in place of
 *   the source's `<details>` divider rows.
 * - The toggle is the home2 FAQ's lime tile, imported rather than copied. It
 *   replaces the violet `+` glyph that rotated 45° via `details[open] summary
 *   span`. Question (17px / 20px from 768px), answer (16px) and toggle sizes
 *   are the home2 fold's, so the two read as the same component.
 * - Violet `#5b2dce` carries the accent — the heading's second line, the open
 *   question, the open card's border.
 * - The source's "Still have a question? / Talk to our team" line sits in the
 *   home2 FAQ's dark `HelpCard` under the heading (lime heading and pill). Its
 *   button opens the site-wide lead enquiry form, as the home, pricing and
 *   features FAQs' buttons do, rather than the source's `mailto:`.
 *
 * The behaviour is the pricing fold's, which is the home2 rule: exactly one
 * answer is open at all times. `onClick` sets the index rather than toggling
 * it, so clicking the open question is a no-op and the fold never collapses to
 * a bare list of headings. That replaces the native `<details>` rows, which let
 * every answer be open at once — the trade is that this fold is now a client
 * component, as an animated single-open accordion has to be.
 *
 * Note the section deliberately has no `overflow-hidden`: it would make the
 * fold a scroll container and leave the sticky left column nothing to travel in.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 */

/** `FaqAccordion`'s HelpCard (dark card, lime heading and pill), carrying this
    page's supporting copy. The button ("Talk to our team" / "Neem contact met
    ons op") opens the lead enquiry form StickyActions listens for. */
function HelpCard({
  heading,
  text,
  cta,
}: {
  heading: string;
  text: string;
  cta: string;
}) {
  return (
    <div className="relative mt-[28px] flex w-full max-w-[378px] flex-col gap-[16px] overflow-hidden rounded-[13px] border border-white/10 bg-[#0a0516] p-[26px] md:mt-[32px] md:p-[30px]">
      <div className="relative flex flex-col gap-[14px]">
        <p className="m-0 font-bricolage text-[24px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#e4fa65]">
          {heading}
        </p>
        <p className="m-0 font-sans text-[15px] leading-[1.6] text-[#c9c2d4]">
          {text}
        </p>

        <ButtonF
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-lead-form"))
          }
          variant="lime"
          size="lg"
          className="mt-[4px] self-start"
        >
          {cta}
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
  const panelId = `design-faq-panel-${index}`;
  const buttonId = `design-faq-button-${index}`;

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
            "font-sans text-[17px] leading-[1.45] font-medium tracking-[-0.01em] transition-colors duration-200 md:text-[20px] " +
            (isOpen ? "text-[#5b2dce]" : "text-[#0a0516]")
          }
        >
          {question}
        </span>
        <ToggleIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-[18px] pb-[18px] font-sans text-[16px] leading-[1.75] text-[#625a70] md:px-[28px] md:pb-[22px]">
              <p className="m-0">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  );
}

export default function DesignFaq({
  title,
  faqs,
  copy,
  locale = "en",
}: {
  title: string;
  faqs: { question: string; answer: string }[];
  /** Approved heading and help card; `faqs` carries the questions. */
  copy?: Omit<FaqCopy, "items">;
  locale?: Locale;
}) {
  const [open, setOpen] = useState(0);
  const text: Omit<FaqCopy, "items"> = copy ?? {
    heading: { lead: "A few things", accent: "you might ask.", breakBefore: true },
    intro: `Ask us anything about ${title} — what is included, how it is set up and what happens after it goes live.`,
    cta: "Talk to our team",
  };

  return (
    <section
      id="faq"
      aria-labelledby="design-faq-heading"
      className="rounded-[13px] bg-[#eeeeef] py-[56px] text-[#0a0516] md:py-[80px]"
    >
      {/* items-start is what lets the left column stick: a grid item stretches
          to the full row height by default, leaving sticky nothing to travel
          in. It only matters from 768px, where the two columns exist. */}
      <div className="fix grid grid-cols-1 items-start gap-[35px] md:grid-cols-[0.85fr_1.15fr] md:gap-[50px] lg:gap-[90px]">
        {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
        <RevealGroup className="self-start md:sticky md:top-[120px]">
          <RevealItem>
            <h2
              id="design-faq-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] leading-[1.1] font-semibold tracking-[-0.04em]"
            >
              {text.heading.lead}
              {text.heading.breakBefore ? <br /> : " "}
              <span className="text-[#5b2dce]">{text.heading.accent}</span>
            </h2>
          </RevealItem>

          <RevealItem>
            <HelpCard
              heading={text.helpTitle ?? HELP_TITLE[locale]}
              text={text.intro}
              cta={text.cta}
            />
          </RevealItem>
        </RevealGroup>

        {/* Several cards at the group default would finish well after the first
            is read, so the list runs at the same 0.05 step as home2's FAQ and
            starts as soon as its top edge is in. */}
        <RevealGroup
          stagger={0.05}
          amount={0.05}
          className="flex w-full flex-col gap-[16px]"
        >
          {faqs.map(({ question, answer }, i) => (
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
    </section>
  );
}
