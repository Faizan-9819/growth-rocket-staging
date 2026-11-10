"use client";

import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { useLanguage } from "../../../i18n/LanguageProvider";

/**
 * Value strip — ported from `div.value-strip` in grsolidvariant.html.
 *
 * A full-bleed lime band that sits directly under the hero. `.full-bleed`
 * pulls it out of HomeShell's sand padding and max width so it runs edge to
 * edge, and the inner row uses the shared `.fix` container.
 *
 * The source stylesheet is desktop-first with max-width overrides at 760px and
 * 370px; those are inverted here into min-width steps, so the base values are
 * the smallest ones.
 */

/* Below 761px the three phrases have to share a single line, which a fixed
   18/20px never manages on a phone — so the mobile size tracks the viewport
   and only settles at the source's 20px once there is room for it. The
   source's own 371px step is folded into the clamp. `whitespace-nowrap` keeps
   a phrase from breaking at its own space when the line gets tight. */
const STRONG =
  "font-bricolage text-[16px] font-bold tracking-[-0.04em] whitespace-nowrap md:text-[26px]";

const STAR = "text-[19px] text-[#726e2b] md:text-[25px]";

/* The Dutch phrases run ~40% wider than the English ones, so at the sizes above
   the NL row overflowed a phone by up to ~150px and a 768–940px tablet by up to
   ~160px. For NL the group is made a size container and `--strip-fs` derives
   the phrase size from the row's own width (100cqi): what is left after the
   fixed gaps (4 × 6px; from 768px 5 × 20px plus ~52px for the eyebrow at its
   narrowest wrap), divided by how wide the line runs per px of type (~25.8 /
   ~25.4, rounded up for slack). It is capped at the English sizes, so a row
   with room to spare renders exactly as before. The stars keep their English
   ratio to the phrases. */
const NL_GROUP =
  "@container [--strip-fs:min(16px,calc((100cqi_-_24px)_/_27))] md:[--strip-fs:min(26px,calc((100cqi_-_152px)_/_26.5))]";

const NL_STRONG =
  "font-bricolage text-[length:var(--strip-fs)] font-bold tracking-[-0.04em] whitespace-nowrap";

const NL_STAR =
  "text-[length:calc(var(--strip-fs)*1.1875)] text-[#726e2b] md:text-[length:calc(var(--strip-fs)*25/26)]";

export default function ValueStrip() {
  const { locale, t } = useLanguage();
  const nl = locale === "nl";
  const strong = nl ? NL_STRONG : STRONG;
  const star = nl ? NL_STAR : STAR;

  return (
    <section className="full-bleed bg-[#e4fa65] py-[20px] text-[#0a0516] md:py-[24px] md:px-5 xl:px-0">
      {/* The strip is one row of short phrases, so it gets a tighter stagger
          than the fold default — at 0.08 the last "Get organised." landed
          almost half a second after the eyebrow on a band you read in one
          glance. */}
      <RevealGroup
        stagger={0.05}
        className={`fix flex flex-wrap items-center justify-between gap-[6px] md:gap-[12px] md:flex-nowrap md:gap-[20px]${nl ? ` ${NL_GROUP}` : ""}`}
      >
        <RevealItem
          as="span"
          className="basis-full font-sans text-[10px] font-semibold leading-[1.5] tracking-[0.1em] md:max-w-[120px] md:basis-auto md:text-[11px]"
        >
          {t({ en: "BUILT FOR YOUR EVERYDAY", nl: "Voor jouw werkdag" })}
        </RevealItem>

        {/* On mobile the five items get their own non-wrapping row under the
            eyebrow — the outer container has to keep `flex-wrap` for the
            eyebrow's `basis-full`, which would otherwise let these break too.
            `contents` dissolves this wrapper from 761px up, so the desktop row
            is exactly the flat one it was.
            It stays a plain <div> for that reason: a RevealItem here would be
            handed a transform it cannot paint once `display:contents` removes
            its box. The five phrases inside carry the reveal instead — variants
            reach them through context, so the plain wrapper costs nothing. */}
        <div className="flex basis-full flex-nowrap items-center justify-between gap-[6px] md:contents">
          <RevealItem as="span">
            <strong className={strong}>
              {t({ en: "Get found.", nl: "Word gevonden." })}
            </strong>
          </RevealItem>
          <RevealItem as="span" className={star}>
            <span aria-hidden>✳</span>
          </RevealItem>
          <RevealItem as="span">
            <strong className={strong}>
              {t({ en: "Get booked.", nl: "Laat klanten boeken." })}
            </strong>
          </RevealItem>
          <RevealItem as="span" className={star}>
            <span aria-hidden>✳</span>
          </RevealItem>
          <RevealItem as="span">
            <strong className={strong}>
              {t({ en: "Get organised.", nl: "Houd overzicht." })}
            </strong>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
