import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import DesignsFold from "./DesignsFold";
import DesignsHeroHeading from "./DesignsHeroHeading";
import DesignsHeroIntro from "./DesignsHeroIntro";
import type { Locale } from "../i18n/config";

/**
 * `section.designs-hero` from Growth Rocket Designs.html.
 *
 * The base rule paints the fold white-on-deep-text; a later block repaints it
 * deep with the lime accent and muted inverse body copy, so those are the
 * computed values used here:
 *
 *   background: var(--gr-deep)   #0a0516
 *   h1         clamp(48px,6.1vw,88px) / .94 / -.065em, 48px under 600px
 *   h1 span    var(--gr-lime)    #e4fa65
 *   p          max-width 780px, margin-top 26px, clamp(18px,1.5vw,22px) / 1.55,
 *              var(--gr-text-inverse-muted) #c9c2d4
 *
 * Headings are Bricolage 600 throughout, per `h1,h2,h3{font-weight:600}`.
 *
 * Copy is the source file's own opening, as requested; the rest of the page
 * keeps the content it already had.
 *
 * `mt-20` clears the fixed navbar, same as the Features hero.
 */
/* Copy from Growth-Rocket-Designs(-NL)-Standalone.html. */
const COPY: Record<Locale, { line1: string; line2: string; intro: string }> = {
  en: {
    line1: "Choose your design.",
    line2: "Make it yours.",
    intro:
      "Explore our professional website designs for small businesses. Pick a style that feels right, and we’ll shape it around your services, story and customers.",
  },
  nl: {
    line1: "Kies je ontwerp.",
    line2: "Maak het eigen.",
    intro:
      "Ontdek onze professionele websiteontwerpen voor het mkb en zzp’ers. Kies een stijl die bij je past. Wij stemmen het ontwerp af op jouw diensten, verhaal en klanten.",
  },
};

export default function DesignsHero({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  return (
    <DesignsFold className="mt-20 bg-[#0a0516] text-white">
      <RevealGroup eager>
        <RevealItem>
          {/* An industry's view swaps in its own H1 and adds an eyebrow
              (and follows the filter), like the intro below. */}
          <DesignsHeroHeading
            locale={locale}
            generalLine1={copy.line1}
            generalLine2={copy.line2}
          />
        </RevealItem>
        <RevealItem
          as="p"
          className="mt-[26px] max-w-[780px] text-[clamp(18px,1.5vw,22px)] leading-[1.55] text-[#c9c2d4]"
        >
          {/* An industry's view opens with its own intro (and follows the
              filter), so the nine filtered listings don't read as copies. */}
          <DesignsHeroIntro locale={locale} generalIntro={copy.intro} />
        </RevealItem>
      </RevealGroup>
    </DesignsFold>
  );
}
