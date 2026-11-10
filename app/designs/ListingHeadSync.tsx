"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "../i18n/config";
import { MAIN_ORIGIN } from "../lib/legal";
import { categoryFromDesignsPath, designsHref } from "./design-routes";
import { listingMeta } from "./industry-copy";

function setAttr(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/**
 * Keeps the document head in step with the industry filter. Picking an
 * industry on the designs listing swaps the URL with history.pushState (see
 * TemplatesPageClient) instead of loading /designs/<industry>, so without
 * this the tab title, description, canonical, hreflang and share tags would
 * still be the page first loaded — what SEO extensions and browser tabs
 * show. Search engines load each URL directly and get the server's tags,
 * which are the same values.
 *
 * Skips the first run: the server already rendered this URL's tags.
 */
export default function ListingHeadSync({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const category = categoryFromDesignsPath(pathname ?? "");
    if (!category) return;

    const { title, description } = listingMeta(category, locale);
    const url = `${MAIN_ORIGIN}${designsHref(locale, category)}`;

    document.title = title;
    setAttr('meta[name="description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('link[rel="alternate"][hreflang="en"]', "href", `${MAIN_ORIGIN}${designsHref("en", category)}`);
    setAttr('link[rel="alternate"][hreflang="nl"]', "href", `${MAIN_ORIGIN}${designsHref("nl", category)}`);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
  }, [pathname, locale]);

  return null;
}
