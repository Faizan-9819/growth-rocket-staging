"use client";

import ButtonF from "../../ui/ButtonF";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { localizedHref } from "../../../i18n/locale-href";

/**
 * Pricing teaser — a straight port of `section.pricing-teaser-section` from
 * index.html / style.css.
 *
 * - Deep `#0a0516` card at the 13px fold radius, `58px` vertical padding
 *   (`44px` at ≤760px) and the `--fold-inset` sides (`clamp(28px,5vw,80px)`,
 *   `20px` at ≤760px).
 * - A `1.25fr / auto` row, centred, that collapses to one column at ≤900px.
 * - Lime for the accent span, the strong and the price; `#c9c2d4` for the
 *   supporting copy, the "FROM" label and "/ month".
 *
 * The one departure is the CTA: instead of the source's `.button` with a text
 * `↗`, it is the shared lime ButtonF so it hovers exactly like every other
 * call to action on home2 — lime pill, white on hover.
 */
export default function PricingTeaser() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-teaser-heading"
      className="mx-auto grid w-full grid-cols-1 items-center gap-[clamp(24px,4vw,72px)] overflow-hidden rounded-[13px] bg-[#0a0516] px-[20px] py-[44px] text-white min-[761px]:px-[clamp(28px,5vw,80px)] min-[761px]:py-[58px] min-[901px]:grid-cols-[minmax(0,1.25fr)_auto]"
    >
      <RevealGroup>
        <RevealItem>
          <h2
            id="pricing-teaser-heading"
            className="m-0 max-w-[760px] font-bricolage text-[clamp(34px,3.35vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
          >
            {locale === "en" ? (
              <>
                Your website.
                <br />
                Your business tools.
              </>
            ) : (
              "Je website, met alles om je dagelijkse werk te regelen."
            )}
            <br />
            {t({ en: "One ", nl: "Eén " })}
            <span className="text-[#e4fa65]">Growth Rocket</span>
            {t({ en: " package.", nl: " pakket." })}
          </h2>
        </RevealItem>

        <RevealItem>
          <p className="mt-[16px] mb-0 max-w-[660px] font-sans text-[16px] leading-[1.58] text-[#c9c2d4] min-[761px]:text-[17px]">
            {t({
              en: "Your professional website, Growth Rocket Hub, hosting, maintenance and support.",
              nl: "Je professionele website, Growth Rocket Hub, hosting, onderhoud en ondersteuning.",
            })}
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="grid grid-cols-[max-content_max-content] items-end justify-items-start gap-x-[8px] gap-y-[4px] min-[901px]:min-w-[330px]">
        <RevealItem className="col-span-full">
          <span className="font-sans text-[11px] leading-none font-bold tracking-[0.12em] text-[#c9c2d4]">
            {t({ en: "FROM", nl: "VANAF" })}
          </span>
        </RevealItem>

        {/* Yearly list price, struck through: the launch price below
            replaces it for the first 100 customers. */}
        <RevealItem className="col-span-full mt-[6px]">
          <s className="font-bricolage text-[24px] leading-none font-semibold tracking-[-0.02em] text-[#c9c2d4] decoration-[2px] min-[761px]:text-[28px]">
            €690
          </s>
        </RevealItem>

        <RevealItem>
          <strong className="font-bricolage text-[66px] leading-[0.88] font-bold tracking-[-0.025em] text-[#e4fa65] min-[761px]:text-[clamp(58px,5.4vw,86px)]">
            €490
          </strong>
        </RevealItem>

        <RevealItem className="self-end">
          <small className="mb-[0.48em] block font-sans text-[14px] leading-none font-semibold text-[#c9c2d4]">
            {t({ en: "/ year", nl: "/ jaar" })}
          </small>
        </RevealItem>

        {/* The offer note and the CTA sit outside the reveal items so they
            are always rendered, never left waiting on the stagger. */}
        <p className="col-span-full m-0 mt-[6px] font-sans text-[15px] leading-[1.3] font-semibold text-[#e4fa65]">
          {t({
            en: "First 100 customers only",
            nl: "Alleen voor de eerste 100 klanten",
          })}
        </p>

        <div className="col-span-full w-full min-[761px]:w-auto">
          <ButtonF
            href={localizedHref("/pricing", locale)}
            variant="lime"
            arrowSize={18}
            className="mt-[14px] flex w-full justify-center min-[761px]:w-fit"
          >
            {t({ en: "View full pricing", nl: "Bekijk de prijzen" })}
          </ButtonF>
        </div>
      </RevealGroup>
    </section>
  );
}
