import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { Locale } from "../../../i18n/config";

/**
 * Pricing page hero — ported from `section.pricing-page-hero` in Pricing.html.
 *
 * The values below are the final computed ones. That stylesheet paints the fold
 * three times over: the base `.pricing-page-hero` block, a later block that pins
 * every fold's radius to 13px with `!important`, and `.pricing-page-main
 * .pricing-page-hero`, which is the one that actually wins — it drops the
 * heading/copy max-widths, shrinks the clamp on the `h1` and sets a flat 42px
 * padding-block in place of the source's 78/58px pair. So there is no vertical
 * step at 900px here, unlike the standalone version of this fold.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `--fold-inset`, so this fold lines up with every other section on the
 * page; the section itself only carries the surface and its vertical rhythm.
 */
/* Copy from Growth-Rocket-Pricing(-NL)-Standalone.html. */
const COPY: Record<Locale, { line1: string; line2: string; intro: string }> = {
  en: {
    line1: "One clear price for",
    line2: "a complete online business system.",
    intro:
      "Your website, Growth Rocket Hub, hosting, support and everyday business tools in one package.",
  },
  nl: {
    line1: "Eén helder tarief voor",
    line2: "een compleet online businesssysteem.",
    intro:
      "Eén compleet online businesssysteem: je professionele website en Growth Rocket Hub, inclusief hosting, onderhoud en ondersteuning.",
  },
};

export default function PricingHero({ locale = "en" }: { locale?: Locale }) {
  const copy = COPY[locale];

  return (
    <section
      aria-labelledby="pricing-hero-heading"
      className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[42px] text-white"
    >
      <RevealGroup eager className="fix">
        <RevealItem>
          <h1
            id="pricing-hero-heading"
            className="m-0 font-bricolage text-[clamp(38px,4.3vw,64px)] font-semibold leading-[1.02] tracking-[-0.055em] text-white"
          >
            {copy.line1}
            <br />
            {copy.line2}
          </h1>
        </RevealItem>

        <RevealItem
          as="p"
          className="mt-[18px] font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-[#c9c2d4]"
        >
          {copy.intro}
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
