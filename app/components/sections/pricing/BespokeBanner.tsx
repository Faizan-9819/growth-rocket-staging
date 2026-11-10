"use client";

import ButtonF from "../../ui/ButtonF";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { Locale } from "../../../i18n/config";

/**
 * Bespoke enquiry banner — ported from
 * `section.pricing-teaser-section.pricing-bespoke-banner` in Pricing.html.
 *
 * It reuses the homepage pricing-teaser shell and repaints it: brand purple in
 * place of the deep surface, a smaller heading clamp, and an action column that
 * carries a label and a lime button instead of a price.
 *
 * The vertical rhythm is the one place the source contradicts itself — the
 * banner's own block asks for 42px and a 600px step asks for 32px, but a later
 * `.pricing-teaser-section` block sets 58/44px with `!important` and wins both.
 * So the padding below is 44px rising to 58px, and the 600px step never paints.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `--fold-inset`, so this fold lines up with every other section on the
 * page; the section itself only carries the surface and its vertical rhythm.
 */
/* Copy from Growth-Rocket-Pricing(-NL)-Standalone.html. */
const COPY: Record<
  Locale,
  { question: string; offer: string; body: string; label: string; cta: string }
> = {
  en: {
    question: "Want a setup built around your business?",
    offer: "Get a bespoke plan.",
    body: "Bring the advantages of Growth Rocket to a bespoke setup for your business. From additional pages to custom functionality, we can shape the design and build around your requirements.",
    label: "Tailored to your scope",
    cta: "Discuss your requirements",
  },
  nl: {
    question: "Zoek je een oplossing op maat?",
    offer: "Kies voor een pakket op maat.",
    body: "De voordelen van Growth Rocket, afgestemd op jouw bedrijf. Van extra pagina’s tot functies op maat: we ontwerpen en bouwen een oplossing die past bij wat jij nodig hebt.",
    label: "Afgestemd op jouw wensen",
    cta: "Bespreek je wensen",
  },
};

export default function BespokeBanner({ locale = "en" }: { locale?: Locale }) {
  const copy = COPY[locale];

  return (
    <section
      aria-labelledby="bespoke-heading"
      className="overflow-hidden rounded-[13px] bg-[#5b2dce] py-[44px] text-white md:py-[58px]"
    >
      <RevealGroup className="fix grid grid-cols-1 items-center gap-[clamp(24px,4vw,72px)] lg:grid-cols-[minmax(0,1.25fr)_auto]">
        <RevealItem>
          <h2
            id="bespoke-heading"
            className="m-0 font-bricolage text-[clamp(28px,2.5vw,40px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
          >
            {/* The source keeps this line on one row from 1200px up — `xl` here,
                per the breakpoint table in globals.css. */}
            <span className="xl:whitespace-nowrap">
              {copy.question}
            </span>
            <br />
            <span className="text-[#e4fa65]">{copy.offer}</span>
          </h2>

          <p className="mt-[16px] max-w-[660px] font-sans text-[16px] leading-[1.58] text-[#c9c2d4] md:text-[17px]">
            {copy.body}
          </p>
        </RevealItem>

        <RevealItem className="flex w-full flex-col items-start gap-[8px]! sm:w-auto">
          <span className="font-sans text-[15px] text-[#c9c2d4]">
            {copy.label}
          </span>

          {/* Opens the site-wide lead enquiry form StickyActions listens for. */}
          <ButtonF
            variant="lime"
            arrowSize={18}
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-lead-form"))
            }
            className="flex w-full max-w-fit text-[13px] md:text-[15px]"
          >
            {copy.cta}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
