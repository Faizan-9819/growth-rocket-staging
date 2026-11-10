import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { Locale } from "../../../i18n/config";

/**
 * About hero — `section.about-hero` from about.html, carrying about.css's own
 * values rather than this site's fold vocabulary.
 *
 *   .about-page main>section  padding:clamp(48px,6vw,84px) var(--fold-inset)
 *                             border-radius:13px
 *   .about-page h1            max-width:1120px
 *                             font-size:clamp(42px,5.2vw,78px)
 *                             line-height:1.02; letter-spacing:-.05em
 *   .about-hero               background:var(--gr-deep)   #0a0516
 *   .about-hero h1 span       color:var(--gr-lime)        #e4fa65
 *   .about-page p             font-size:18px; line-height:1.65
 *   .about-hero p             max-width:750px; margin-top:26px
 *                             color:var(--gr-text-inverse-muted)  #c9c2d4
 *   .about-hero p+p           margin-top:14px
 *   @600px                    padding:38px 22px; h1:42px; p:17px
 *
 * The two paragraphs stack, as `p+p{margin-top:14px}` says — they are not a
 * two-column row.
 *
 * The one deliberate departure is horizontal spacing: about.css insets every
 * fold with `var(--fold-inset)`, and this uses the shared `.fix` rail instead
 * so the page lines up with the rest of the site.
 */
/* Copy from Growth-Rocket-About(-NL)-Standalone.html. */
const COPY: Record<
  Locale,
  { heading: string; accent: string; paragraphs: [string, string] }
> = {
  en: {
    heading: "We exist to democratize technology for",
    accent: "small businesses.",
    paragraphs: [
      "A business owner’s ambition should never be limited by their budget, technical knowledge or access to the right people. We believe small businesses deserve the same opportunity to benefit from technology as larger organisations.",
      "With Growth Rocket, we put that belief into practice: a complete online business system that makes technology accessible to small businesses. Our purpose is to lower the barriers that keep useful technology out of reach, so more people can build a business on their own terms.",
    ],
  },
  nl: {
    heading: "Wij maken technologie toegankelijk voor",
    accent: "kleine bedrijven.",
    paragraphs: [
      "Je ambities als ondernemer mogen niet afhangen van je budget, technische kennis of de mensen die je kent. Wij vinden dat kleine bedrijven net zo goed van technologie moeten kunnen profiteren als grote organisaties.",
      "Met Growth Rocket maken we die overtuiging waar: een compleet online businesssysteem dat technologie toegankelijk maakt voor kleine bedrijven. We nemen de drempels weg die handige technologie buiten bereik houden. Zo krijgen meer mensen de ruimte om op hun eigen manier te ondernemen.",
    ],
  },
};

export default function AboutHero({ locale = "en" }: { locale?: Locale }) {
  const copy = COPY[locale];

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[clamp(48px,6vw,84px)] text-white max-[600px]:py-[38px]"
    >
      <RevealGroup eager className="fix">
        <RevealItem>
          <h1
            id="about-hero-heading"
            className="m-0 max-w-[1120px] font-bricolage text-[clamp(42px,5.2vw,78px)] leading-[1.02] font-semibold tracking-[-0.05em] text-white max-[900px]:max-w-[850px] max-[600px]:text-[42px]"
          >
            {copy.heading}{" "}
            <span className="text-[#e4fa65]">{copy.accent}</span>
          </h1>
        </RevealItem>

        <RevealItem>
          <p className="mt-[26px] mb-0 max-w-[750px] font-sans text-[18px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            {copy.paragraphs[0]}
          </p>

          <p className="mt-[14px] mb-0 max-w-[750px] font-sans text-[18px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            {copy.paragraphs[1]}
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
