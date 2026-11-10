"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import ButtonF from "../components/ui/ButtonF";
import DesignsFold from "./DesignsFold";
import type { Locale } from "../i18n/config";

/**
 * `section.designs-cta` — the closing fold of Growth Rocket Designs.html.
 *
 * The base rule paints it deep; the last pass repaints it lime, which is what
 * renders and what is used here:
 *
 *   background  var(--gr-lime) #e4fa65, deep text
 *   layout      flex, align-items center, justify-content space-between,
 *               gap 46px; column + align-items start at 900px
 *   h2          clamp(40px,4.5vw,66px), span #657221
 *   p           max-width 670px, margin-top 20px, 18px, rgb(10 5 22/72%)
 *   .button     deep on lime, brand-ink on white text at hover
 *
 * The source links this to its pricing page; there is no /pricing route here,
 * so the button opens the site's lead form via the same `open-lead-form` event
 * the home page's Start CTA dispatches.
 */
/* Copy from Growth-Rocket-Designs(-NL)-Standalone.html. */
const COPY: Record<
  Locale,
  { line1: string; line2: string; body: string; cta: string }
> = {
  en: {
    line1: "Like a direction?",
    line2: "Let’s make it yours.",
    body: "Your final website is built around your business, with the content, pages and connected tools you need.",
    cta: "Start With Growth Rocket",
  },
  nl: {
    line1: "Een ontwerp op het oog?",
    line2: "Laten we er jouw website van maken.",
    body: "We maken de website passend voor jouw bedrijf, met de teksten, pagina’s en alles wat je nodig hebt om je dagelijkse werk te regelen.",
    cta: "Start met Growth Rocket",
  },
};

export default function DesignsCta({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <DesignsFold
      className="bg-[#e4fa65] text-[#0a0516]"
      innerClassName="flex items-center justify-between gap-[46px] max-lg:flex-col max-lg:items-start"
    >
      <RevealGroup>
        <RevealItem>
          <h2 className="font-bricolage text-[clamp(40px,4.5vw,66px)] leading-[0.94] font-semibold tracking-[-0.065em]">
            {copy.line1}
            <br />
            <span className="text-[#657221]">{copy.line2}</span>
          </h2>
        </RevealItem>
        <RevealItem
          as="p"
          className="mt-[20px] max-w-[670px] text-[18px] leading-[1.65] text-[rgb(10_5_22_/_72%)]"
        >
          {copy.body}
        </RevealItem>
      </RevealGroup>

      {/* `delay` rather than a bigger stagger, so the button trails the copy
          column instead of slowing the whole fold down. */}
      <RevealGroup delay={0.12} className="shrink-0">
        <RevealItem>
          {/* `.button` from Growth Rocket Designs.html: the `lg` pill at
              15px/1.35, with a 200ms colour-only transition. */}
          <ButtonF
            variant="ink"
            size="lg"
            label
            onClick={openLeadForm}
            className="justify-center text-[15px] leading-[1.35] whitespace-nowrap !transition-colors !duration-200 hover:bg-[#5b219f] hover:text-white"
          >
            {copy.cta}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </DesignsFold>
  );
}
