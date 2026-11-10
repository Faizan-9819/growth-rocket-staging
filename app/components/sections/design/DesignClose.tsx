"use client";

import ButtonF from "../../ui/ButtonF";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { CloseCopy } from "./page-copy";

/**
 * "Make this your next website." — `section.dc-close.dc-panel` from
 * dentalcare.html, the last fold before the footer, carrying dentalcare.css's
 * own values.
 *
 *   .dc-close           background:var(--dc-green) #e4fa65
 *   .dc-close h2        font-size:clamp(38px,4.4vw,64px)   (38px <700px)
 *   .dc-close h2 span   color:var(--dc-purple) #5b2dce
 *   .dc-close>p         margin-top:24px; max-width:690px
 *   .dc-actions         flex; gap:24px; align-items:center; flex-wrap:wrap
 *                       margin-top:30px       (gap:12px under 700px)
 *   .dc-btn             inline-flex; justify-content:space-between; gap:28px
 *                       border-radius:100px; padding:15px 23px
 *                       font-weight:600; font-size:14px; line-height:1.4
 *                       min-height:52px
 *   .dc-btn span        font-size:22px
 *
 * The source's own hover (`translateY(-2px)` + `0 5px 20px #0002`) is dropped
 * for ButtonF's, so these react exactly like every CTA on home2 — the same
 * scale, and ArrowIcon's two-slot swap in place of the flat `↗` glyph. The
 * colours stay as dentalcare.css sets them: home2's purple→lime swap would
 * dissolve the primary button into this fold's lime panel.
 *   .dc-purple-btn      background:var(--dc-purple); color:white
 *   .dc-outline-btn     border:1px solid #0005; background:transparent
 *   @700px              .dc-close .dc-btn{width:100%}
 *   @prefers-reduced-motion   .dc-btn{transition:none}
 *
 * The fold is lime, and it is the page's closing pitch, so `SiteFooter` holds
 * the layout's own lime `ContactCta` back on /designs/* — two lime folds in a
 * row read as one fold repeating itself. The footer below arrives on its own.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 *
 * The secondary CTA opens the site-wide lead enquiry form (the event
 * StickyActions listens for) rather than the source's mailto, which is why
 * this fold is a client component.
 */
export default function DesignClose({
  title,
  business,
  copy,
}: {
  title: string;
  business: string;
  copy?: CloseCopy;
}) {
  const text: CloseCopy = copy ?? {
    heading: {
      lead: `Make ${title}`,
      accent: `your ${business}’s next website.`,
      breakBefore: true,
    },
    description: `A professional website for your ${business}. Your complete business system in Growth Rocket Hub. All maintained for you.`,
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  };

  return (
    <section
      aria-labelledby="design-close-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[34px] text-[#0a0516] min-[701px]:py-[64px]"
    >
      <RevealGroup className="fix">
        <RevealItem>
          <h2
            id="design-close-heading"
            className="m-0 font-bricolage text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(40px,4vw,58px)]"
          >
            {text.heading.lead}
            {text.heading.breakBefore ? <br /> : " "}
            <span className="text-[#5b2dce]">{text.heading.accent}</span>
          </h2>
        </RevealItem>

        <RevealItem
          as="p"
          className="mt-[24px] mb-0 max-w-[690px] font-sans text-[16px] leading-[1.65]"
        >
          {text.description}
        </RevealItem>

        {/* .dc-actions */}
        <RevealItem className="mt-[30px] flex flex-wrap items-center gap-[12px] min-[701px]:gap-[24px]">
          {/* .dc-btn: the `lg` pill at dentalcare.css's 23px × 15px padding
              and 100px radius, full width under 701px. */}
          <ButtonF
            href="#package"
            native
            variant="pill"
            size="lg"
            arrowSize={18}
            className="w-fit justify-between rounded-[100px] bg-[#5b2dce] px-[23px] py-[15px] leading-[1.4] text-white min-[701px]:w-auto"
          >
            {text.primaryCta}
          </ButtonF>

          <ButtonF
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-lead-form"))
            }
            variant="pill"
            size="lg"
            arrowSize={18}
            className="w-fit justify-between rounded-[100px] border border-[#00000055] bg-transparent px-[23px] py-[15px] leading-[1.4] text-[#0a0516] min-[701px]:w-auto"
          >
            {text.secondaryCta}
          </ButtonF>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
