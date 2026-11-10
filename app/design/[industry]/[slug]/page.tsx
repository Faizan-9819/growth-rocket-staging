import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import DesignDetail, {
  buildDesignMetadata,
} from "../../../designs/DesignDetail";
import {
  categoryFromIndustrySlug,
  industrySlug,
  patternTemplateHref,
  templateHref,
} from "../../../designs/design-routes";
import { getTemplateBySlug, templates } from "../../../designs/templates-data";

type TemplateDetailPageProps = {
  params: Promise<{ industry: string; slug: string }>;
};

/* Designs with their own EN URL (CUSTOM_DETAIL_PATHS) are left out: their
   pattern URL only redirects, and is served on demand with a 308. */
export function generateStaticParams() {
  return templates
    .filter((t) => templateHref(t, "en") === patternTemplateHref(t, "en"))
    .map((t) => ({
      industry: industrySlug(t.category, "en"),
      slug: t.slug,
    }));
}

export async function generateMetadata({
  params,
}: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  return template ? buildDesignMetadata(template, "en") : {};
}

export default async function TemplateDetailPage({
  params,
}: TemplateDetailPageProps) {
  const { industry, slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  // A design reached under the wrong industry, or one with its own EN URL,
  // goes to its real URL.
  if (
    categoryFromIndustrySlug(industry, "en") !== template.category ||
    templateHref(template, "en") !== patternTemplateHref(template, "en")
  ) {
    permanentRedirect(templateHref(template, "en"));
  }

  return <DesignDetail template={template} locale="en" />;
}
