import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import {
  SITE_URL,
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "../lib/seo";
import type { AnimationStyle } from "../features/FeatureReveal";
import type { Locale } from "../i18n/config";
import IndustryClient from "./IndustryClient";
import type { IndustryPageDef } from "./types";

/* Scroll-reveal style for the industry pages, as on
   /industry/website-for-electricians. See app/features/animationStyle.md. */
const animationStyle: AnimationStyle = "stagger";

/* Each /website-for-<industry> route and its /nl twin is a two-line page.tsx
   over these: the metadata (self-canonical, reciprocal hreflang) and the page
   itself, with its schema and FAQ JSON-LD built from the visible answers. */

export function industryMetadata(
  page: IndustryPageDef,
  locale: Locale,
): Metadata {
  const { title, description } = page.seo[locale];
  const path = page.paths[locale];
  return {
    title,
    description,
    ...socialMeta(title, description, path),
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}${page.paths.en}`,
        nl: `${SITE_URL}${page.paths.nl}`,
      },
    },
  };
}

export default function IndustryRoute({
  page,
  locale,
}: {
  page: IndustryPageDef;
  locale: Locale;
}) {
  const { title, description } = page.seo[locale];
  const faqSchema = buildFaqJsonLdFromItems(page.copy[locale].FAQ_ITEMS);
  return (
    <>
      <JsonLd data={buildPageSchema(page.paths[locale], title, description)} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <IndustryClient copy={page.copy} animationStyle={animationStyle} />
    </>
  );
}
