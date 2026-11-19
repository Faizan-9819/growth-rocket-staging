"use client";

import ButtonF from "../../ui/ButtonF";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { phoneHref } from "../../../lib/contact";
import { useContactPhone } from "../../useContactPhone";

/**
 * Contact call-to-action — ported from `section#contact.contact-section` in
 * grsolidvariant.html, the last fold before the footer.
 *
 * As with the other ported folds, the values below are the final computed ones:
 * later blocks in that stylesheet repaint the surface with the brand tokens
 * (`--gr-lime` / `--gr-deep`), raise the vertical padding to 64px at every
 * width, and pin every fold's radius to 13px with `!important`.
 *
 * The source sheet is desktop-first with max-width overrides at 1050px, 760px
 * and 370px; those are inverted here into min-width steps, so the base values
 * are the smallest ones. The bottom row's link size is the one place that
 * inversion is not monotonic — the source sets 15px, drops to 12px under
 * 1050px, then returns to 15px under 760px — so it reads as 15 / 12 / 15 here.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `.wrap`, so this fold lines up with every other section on the page;
 * the section itself only carries the surface and its vertical rhythm.
 *
 * Note: a late block in that stylesheet hides every `.eyebrow` globally, so the
 * eyebrow below is markup the reference page never paints. It is kept visible
 * here because it is real copy — drop the `<p>` to match the reference exactly.
 */
export type ContactCtaVariant = "default" | "home" | "partner";

/**
 * `variant="partner"` is the /partner-network closing fold: the same lime
 * surface and layout, carrying the copy and action of that page's former
 * violet CTA ("Help businesses grow online. Build recurring income.") and
 * opening the partner form instead of the lead form.
 *
 * `variant="home"` is the homepage's version of the default fold: identical
 * except for its heading, which the homepage source words differently
 * ("Ready for a simpler working day?" rather than "Big plans?").
 */
export default function ContactCta({
  variant = "default",
}: {
  variant?: ContactCtaVariant;
} = {}) {
  const { t } = useLanguage();
  const phone = useContactPhone();
  const partner = variant === "partner";
  const home = variant === "home";
  const mailto =
    "mailto:sales@getgrowthrocket.com?subject=Let%E2%80%99s%20talk%20about%20Growth%20Rocket";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[64px] text-[#0a0516]"
    >
      <RevealGroup className="fix">
        {!partner && (
          <RevealItem
            as="p"
            className="m-0 flex items-center gap-[10px] font-sans text-[12px] font-semibold leading-[1.5] tracking-[0.12em]"
          >
            {t({
              en: "YOUR NEXT CHAPTER STARTS HERE",
              nl: "ZET DE VOLGENDE STAP",
            })}
          </RevealItem>
        )}

        <RevealItem
          className={
            (partner ? "" : "mt-[24px] ") +
            "flex items-end justify-between gap-[16px] md:items-center md:gap-[30px]"
          }
        >
          <h2
            id="contact-heading"
            className="m-0 font-bricolage text-[28px] font-semibold leading-[1.05] tracking-[-0.055em]  md:text-[76px]"
          >
            {partner ? (
              <>
                {t({
                  en: "Help businesses grow online.",
                  nl: "Help bedrijven online groeien.",
                })}
                <br />
                <span className="text-[#657221]">
                  {t({
                    en: "Build recurring income.",
                    nl: "Bouw terugkerend inkomen op.",
                  })}
                </span>
              </>
            ) : home ? (
              <>
                {t({
                  en: "Ready for a simpler working day?",
                  nl: "Toe aan een makkelijkere werkdag?",
                })}
                <br />
                <span className="text-[#657221]">
                  {t({
                    en: "Let’s get your business connected.",
                    nl: "Laten we alles voor je verbinden.",
                  })}
                </span>
              </>
            ) : (
              <>
                {t({ en: "Big plans?", nl: "Grote plannen?" })}
                <br />
                <span className="text-[#657221]">
                  {t({
                    en: "Let’s make room for them.",
                    nl: "Laten we er ruimte voor maken.",
                  })}
                </span>
              </>
            )}
          </h2>

          {/* Opens the site-wide lead enquiry form StickyActions listens for —
              or, on the partner page, the partner form. */}
          <ButtonF
            variant="ink"
            size="custom"
            arrowClassName="btn-arrow--xl"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent(
                  partner ? "open-partner-form" : "open-lead-form",
                ),
              )
            }
            aria-label={
              partner
                ? t({ en: "Become a Partner", nl: "Word partner" })
                : t({
                    en: "Open the enquiry form",
                    nl: "Open het aanvraagformulier",
                  })
            }
            className="grid h-[54px] w-[54px] flex-shrink-0 place-items-center font-light md:h-[110px] md:w-[110px]"
          />
        </RevealItem>

        <RevealItem className="mt-[30px] flex flex-col items-start gap-[20px] border-t border-[#b8ce50] pt-[25px] md:mt-[40px] md:flex-row md:items-end md:justify-between md:gap-[24px]">
          {partner ? (
            <p className="m-0 font-sans text-[14px] leading-[1.65]">
              {t({
                en: "Become part of the Growth Rocket Partner Network.",
                nl: "Word onderdeel van het Growth Rocket Partnernetwerk.",
              })}
            </p>
          ) : (
            <p className="m-0 font-sans text-[14px] leading-[1.65]">
              {t({
                en: "Tell us about your business.",
                nl: "Vertel ons over je bedrijf.",
              })}
              <br />
              {t({
                en: "We’ll help you find your next step.",
                nl: "Samen kijken we wat bij je past.",
              })}
            </p>
          )}

          <ButtonF
            href={mailto}
            variant="link"
            arrowSize={14}
            className="gap-[6px] border-b border-current font-sans text-[15px] leading-[1.65] [overflow-wrap:anywhere] md:text-[12px] lg:text-[15px]"
          >
            sales@getgrowthrocket.com
          </ButtonF>

          <ButtonF
            href={phoneHref(phone)}
            variant="link"
            arrowSize={14}
            className="gap-[6px] border-b border-current font-sans text-[15px] leading-[1.65] [overflow-wrap:anywhere] md:text-[12px] lg:text-[15px]"
          >
            {phone}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
