import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import DesignDetail, { buildDesignMetadata } from "../DesignDetail";
import {
  CUSTOM_DETAIL_PATHS,
  categoryFromIndustrySlug,
  designFromCustomPath,
  designsHref,
  templateHref,
} from "../design-routes";
import { getTemplateBySlug } from "../templates-data";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

/** Base of the designs' own EN URLs (CUSTOM_DETAIL_PATHS). */
const CUSTOM_BASE = "/designs";

/** The design whose custom EN detail path is /designs/<segment>, if any. */
function customDesign(segment: string) {
  const custom = designFromCustomPath(
    `${CUSTOM_BASE}/${decodeURIComponent(segment)}`,
  );
  return custom ? getTemplateBySlug(custom.slug) : undefined;
}

export function generateStaticParams() {
  return Object.values(CUSTOM_DETAIL_PATHS).flatMap(({ en }) =>
    en?.startsWith(`${CUSTOM_BASE}/`)
      ? [{ industry: en.slice(CUSTOM_BASE.length + 1) }]
      : [],
  );
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industry } = await params;
  const design = customDesign(industry);
  return design ? buildDesignMetadata(design, "en") : {};
}

/**
 * /designs/<segment> serves the designs whose own EN URL is one segment under
 * /designs (CUSTOM_DETAIL_PATHS), e.g. /designs/shinesquad-home-cleaning-website.
 * The old /designs/<industry> listing URLs redirect to /design/<industry>.
 */
export default async function IndustryDesignsPage({
  params,
}: IndustryPageProps) {
  const { industry } = await params;
  const design = customDesign(industry);
  if (design) return <DesignDetail template={design} locale="en" />;

  const category = categoryFromIndustrySlug(industry, "en");
  if (category) permanentRedirect(designsHref("en", category));

  // Old /designs/<design> links: send them to the design's page.
  const template = getTemplateBySlug(industry);
  if (template) permanentRedirect(templateHref(template, "en"));
  notFound();
}
