"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "../i18n/config";
import { categoryFromDesignsPath } from "./design-routes";
import { getIndustryCopy } from "./industry-copy";

/** The designs hero's opening paragraph: the industry's own intro on
    /designs/<industry>, the listing's general one otherwise. It reads the URL,
    so it follows the industry filter too (which changes the URL in place). */
export default function DesignsHeroIntro({
  locale,
  generalIntro,
}: {
  locale: Locale;
  generalIntro: string;
}) {
  const category = categoryFromDesignsPath(usePathname() ?? "");
  const industry =
    category && category !== "all"
      ? getIndustryCopy(category, locale)
      : undefined;
  return <>{industry?.intro ?? generalIntro}</>;
}
