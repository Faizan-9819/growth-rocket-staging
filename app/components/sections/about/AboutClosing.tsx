import ButtonF from "../../ui/ButtonF";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { Locale } from "../../../i18n/config";
import { localizedHref } from "../../../i18n/locale-href";

/**
 * "Small businesses deserve big possibilities." — the
 * `section.contact-section.about-closing` fold from about.html, carrying
 * about.css's own values.
 *
 *   .about-closing            background:var(--gr-lime)  #e4fa65
 *                             color:var(--gr-deep)
 *   .about-closing h2         max-width:none
 *                             font-size:clamp(32px,3.8vw,56px)
 *                             line-height:1.04; letter-spacing:-.045em
 *   h2 .about-closing-first-line  color:var(--gr-deep)
 *   h2 span                   color:#657221
 *   @901px                    .about-closing-first-line white-space:nowrap
 *   .about-closing p          max-width:none; margin-top:24px
 *                             color:var(--gr-deep)
 *   @1100px                   p font-size:clamp(14px,1.2vw,18px); nowrap
 *   .about-closing-actions    display:flex; flex-wrap:wrap; gap:14px
 *                             margin-top:30px
 *   .about-closing .button    min-height:54px; gap:24px; border-radius:999px
 *                             justify-content:space-between
 *                             white-space:normal
 *   .about-business-button    background:var(--gr-deep); color:var(--gr-lime)
 *                             border:1px solid var(--gr-deep)
 *   .about-partner-button     background:transparent; color:var(--gr-deep)
 *                             border:1px solid var(--gr-deep)
 *   .button:hover             background/border:var(--gr-brand-ink) #5b2dce
 *                             color:var(--gr-white)
 *   @600px                    actions column, stretched; button 100%, 14px
 *
 * The fold is lime, not the violet an earlier pass gave it. That does put it
 * next to the lime `ContactCta` the root layout mounts underneath — but this is
 * what about.css specifies, and `.contact-section` is the very class the source
 * shares with that fold.
 *
 * The buttons no longer follow about.css's `.button` rules above: they are
 * home2's shared `<ButtonF>` (dark variant, scale hover, ArrowIcon swap) so
 * the CTA matches the rest of the site.
 */
/* Copy from Growth-Rocket-About(-NL)-Standalone.html. The partner button goes
   to the partner network page rather than the source's mailto. */
const COPY: Record<
  Locale,
  {
    line1: string;
    line2: string;
    body: string;
    business: string;
    partner: string;
  }
> = {
  en: {
    line1: "Small businesses deserve big possibilities.",
    line2: "Let’s build them together.",
    body: "Join Growth Rocket in making technology accessible to every small business with the ambition to grow.",
    business: "Get Growth Rocket for your business",
    partner: "Become a partner",
  },
  nl: {
    line1: "Kleine bedrijven verdienen grote kansen.",
    line2: "Laten we die samen creëren.",
    body: "Maak samen met Growth Rocket technologie bereikbaar voor elk klein bedrijf dat wil groeien.",
    business: "Kies Growth Rocket voor je bedrijf",
    partner: "Word partner",
  },
};

export default function AboutClosing({ locale = "en" }: { locale?: Locale }) {
  const copy = COPY[locale];

  // home2's CTA button (Hero2 / FinalCta): `.btn--dark`, its scale-on-hover and
  // the ArrowIcon swap, with an 8px gap between the label and the arrow.
  const button =
    "rounded-[100px]! px-[22px]! py-[16px]! md:text-[15px]! gap-[8px]! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b2dce] max-[600px]:w-fit";

  return (
    <section
      aria-labelledby="about-closing-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[clamp(48px,6vw,84px)] text-[#0a0516] max-[600px]:py-[38px]"
    >
      <RevealGroup className="fix">
        <RevealItem>
          <h2
            id="about-closing-heading"
            className="m-0 font-bricolage text-[clamp(32px,3.8vw,56px)] leading-[1.04] font-semibold tracking-[-0.045em]"
          >
            <span className="text-[#0a0516] min-[901px]:whitespace-nowrap">
              {copy.line1}
            </span>
            <br />
            <span className="text-[#657221]">{copy.line2}</span>
          </h2>
        </RevealItem>

        <RevealItem
          as="p"
          className="mt-[24px] mb-0 font-sans text-[18px] leading-[1.65] text-[#0a0516] min-[1100px]:text-[clamp(14px,1.2vw,18px)] min-[1100px]:whitespace-nowrap max-[600px]:text-[17px]"
        >
          {copy.body}
        </RevealItem>

        <RevealItem className="mt-[30px] flex  flex-wrap gap-[14px] max-[600px]:flex-col max-[600px]:items-stretch">
          <ButtonF
            href={localizedHref("/pricing", locale)}
            variant="dark"
            arrow="up-right"
            className={`${button} text-[13px]!`}
          >
            {copy.business}
          </ButtonF>

          <ButtonF
            href={localizedHref("/partner-network", locale)}
            variant="dark"
            arrow="up-right"
            className={`${button} text-[14px]! border!  border-[#0a0516]! bg-transparent! text-[#0a0516]!`}
          >
            {copy.partner}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
