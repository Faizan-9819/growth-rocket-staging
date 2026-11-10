"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealGroup, RevealItem } from "@/app/features/FeatureReveal";
import ButtonF from "@/app/components/ui/ButtonF";
import { ToggleIcon } from "@/app/components/sections/home2/FaqAccordion";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";
import { partnerFaqs } from "@/app/partner-network/data";

/**
 * Partner FAQ — home2's FaqAccordion, fold for fold: sticky copy column with
 * the dark help card on the left, every question in the page flow on the
 * right (no scroll window, so no inner scrollbar), and exactly one answer
 * open at a time. Only the questions and the help card's CTA are this page's.
 */
function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: Translation;
  answer: Translation;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  const panelId = `partner-faq-panel-${index}`;
  const buttonId = `partner-faq-button-${index}`;

  return (
    <RevealItem
      className={
        "w-full rounded-[13px] border bg-white transition-colors duration-200 " +
        (isOpen
          ? "border-[#5b2dce]"
          : "border-[#ded8e7] hover:border-[#b9a6f0]")
      }
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-[14px] px-[18px] py-[14px] text-left md:gap-[16px] md:px-[28px] md:py-[20px]"
      >
        <span
          className={
            "font-sans text-[17px] font-medium leading-[1.45] tracking-[-0.01em] transition-colors duration-200 md:text-[20px] " +
            (isOpen ? "text-[#5b2dce]" : "text-[#0a0516]")
          }
        >
          {t(question)}
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
              <p className="m-0">{t(answer)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  );
}

function HelpCard() {
  const { t } = useLanguage();
  return (
    <div className="relative mt-[28px] flex w-full max-w-[378px] flex-col gap-[16px] overflow-hidden rounded-[13px] border border-white/10 bg-[#0a0516] p-[26px] md:mt-[32px] md:p-[30px]">
      <div className="relative flex flex-col gap-[14px]">
        <p className="m-0 font-bricolage text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#e4fa65]">
          {t({ en: "Still have questions?", nl: "Nog vragen?" })}
        </p>
        <p className="m-0 font-sans text-[15px] leading-[1.6] text-[#c9c2d4]">
          {t({
            en: "Can’t find what you’re looking for? Reach out to our team.",
            nl: "Staat je vraag er niet tussen? Neem contact op met ons team.",
          })}
        </p>
        <ButtonF
          href="#form"
          native
          variant="lime"
          size="lg"
          className="mt-[4px] self-start justify-center"
        >
          {t({ en: "Become a Partner", nl: "Word partner" })}
        </ButtonF>
      </div>
    </div>
  );
}

export default function PartnersFAQ() {
  const { t } = useLanguage();
  // Exactly one answer is open at all times, as on home2: clicking the open
  // question is a no-op rather than a toggle.
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="partner-faq-heading"
      className="rounded-[13px] bg-white py-[56px] text-[#0a0516] md:py-[80px]"
    >
      <div className="fix grid grid-cols-1 items-start gap-[35px] md:grid-cols-[0.85fr_1.15fr] md:gap-[50px] lg:gap-[90px]">
        <RevealGroup className="self-start md:sticky md:top-[120px]">
          <RevealItem>
            <h2
              id="partner-faq-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              {t({ en: "Frequently asked", nl: "Veelgestelde" })}
              <br />
              <span className="text-[#5b2dce]">
                {t({ en: "Questions", nl: "vragen" })}
              </span>
            </h2>
          </RevealItem>

          <RevealItem>
            <HelpCard />
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          stagger={0.05}
          amount={0.05}
          className="flex w-full flex-col gap-[16px]"
        >
          {partnerFaqs.map(([q, a], idx) => (
            <AccordionItem
              key={q.en}
              question={q}
              answer={a}
              index={idx}
              isOpen={open === idx}
              onToggle={() => setOpen(idx)}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
