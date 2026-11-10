"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "../i18n/config";
import { categoryFromDesignsPath } from "./design-routes";
import { getIndustryCopy } from "./industry-copy";

/** The designs hero's H1: the industry's own two lines, with an eyebrow above
    them, on /designs/<industry>; the listing's general H1 (no eyebrow)
    otherwise. Reads the URL like DesignsHeroIntro, so it follows the industry
    filter too. The eyebrow is styled as the design detail hero's label
    (`.dc-label` in DesignHero). */
export default function DesignsHeroHeading({
  locale,
  generalLine1,
  generalLine2,
}: {
  locale: Locale;
  generalLine1: string;
  generalLine2: string;
}) {
  const category = categoryFromDesignsPath(usePathname() ?? "");
  const headings =
    category && category !== "all"
      ? getIndustryCopy(category, locale)?.headings
      : undefined;

  return (
    <>
      {headings && (
        <p className="mt-0 mb-[14px] font-sans text-[11px] leading-[1.4] font-semibold tracking-[0.13em] text-[#c3bdcc] uppercase min-[701px]:mb-[20px]">
          {headings.eyebrow}
        </p>
      )}
      <h1 className="font-bricolage text-[clamp(48px,6.1vw,88px)] leading-[0.94]! font-semibold tracking-[-0.065em]! max-sm:text-[48px]">
        {headings?.line1 ?? generalLine1}
        <br />
        <span className="text-[#e4fa65]">
          {headings?.line2 ?? generalLine2}
        </span>
      </h1>
    </>
  );
}
