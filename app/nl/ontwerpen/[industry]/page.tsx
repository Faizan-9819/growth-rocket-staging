import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import DesignsListing from "../../../designs/DesignsListing";
import DesignDetail, {
  buildDesignMetadata,
} from "../../../designs/DesignDetail";
import {
  CUSTOM_DETAIL_PATHS,
  DESIGNS_BASE,
  INDUSTRY_SLUGS,
  categoryFromIndustrySlug,
  designFromNlCustomSegment,
  designsHref,
  templateHref,
} from "../../../designs/design-routes";
import { getIndustryCopy } from "../../../designs/industry-copy";
import { getTemplateBySlug } from "../../../designs/templates-data";
import { socialMeta } from "../../../lib/seo";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

/** The design whose own NL URL is /nl/ontwerpen/<segment>, if any. */
function customDesign(segment: string) {
  const custom = designFromNlCustomSegment(decodeURIComponent(segment));
  return custom ? getTemplateBySlug(custom.slug) : undefined;
}

export function generateStaticParams() {
  const customSegments = Object.values(CUSTOM_DETAIL_PATHS).flatMap(
    ({ nl }) => (nl ? [{ industry: nl.slice(DESIGNS_BASE.nl.length + 1) }] : []),
  );
  return [
    ...Object.values(INDUSTRY_SLUGS).map((s) => ({ industry: s.nl })),
    ...customSegments,
  ];
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industry } = await params;
  const design = customDesign(industry);
  if (design) return buildDesignMetadata(design, "nl");

  const category = categoryFromIndustrySlug(industry, "nl");
  if (!category) return {};
  const origin = "https://www.getgrowthrocket.com";
  const copy = getIndustryCopy(category, "nl");

  return {
    ...(copy && {
      title: copy.title,
      description: copy.description,
      ...socialMeta(copy.title, copy.description, designsHref("nl", category)),
    }),
    alternates: {
      canonical: `${origin}${designsHref("nl", category)}`,
      languages: {
        en: `${origin}${designsHref("en", category)}`,
        nl: `${origin}${designsHref("nl", category)}`,
      },
    },
  };
}

/**
 * /nl/ontwerpen/<segment> — the designs listing pre-filtered to a <branche>,
 * or the page of a design whose own NL URL is that one segment
 * (CUSTOM_DETAIL_PATHS).
 */
export default async function NlIndustryDesignsPage({
  params,
}: IndustryPageProps) {
  const { industry } = await params;
  const design = customDesign(industry);
  if (design) return <DesignDetail template={design} locale="nl" />;

  const category = categoryFromIndustrySlug(industry, "nl");

  if (!category) {
    const template = getTemplateBySlug(industry);
    if (template) permanentRedirect(templateHref(template, "nl"));
    notFound();
  }

  const copy = getIndustryCopy(category, "nl");
  return (
    <DesignsListing
      locale="nl"
      category={category}
      title={copy?.title ?? ""}
      description={copy?.description ?? ""}
    />
  );
}
