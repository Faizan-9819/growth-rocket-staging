import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import DesignDetail, {
  buildDesignMetadata,
} from "../../../../designs/DesignDetail";
import {
  CUSTOM_DETAIL_PATHS,
  DESIGNS_BASE,
  designFromNlCustomSegment,
  templateHref,
} from "../../../../designs/design-routes";
import {
  getTemplateBySlug,
  templates,
} from "../../../../designs/templates-data";

type NlTemplateDetailPageProps = {
  params: Promise<{ industry: string; slug: string }>;
};

/**
 * The design a /nl/ontwerpen/<branche>/<segment> URL refers to. The segment is
 * either a design's own NL slug (CUSTOM_DETAIL_PATHS, e.g.
 * shinesquad-website-thuisschoonmaak) or a design slug (dentalcare, or the old
 * pattern URL of a design that now has its own NL URL).
 */
function templateFor(slug: string) {
  const custom = designFromNlCustomSegment(slug);
  return getTemplateBySlug(custom?.slug ?? slug);
}

/** Pre-renders the designs that keep the <branche>/<design> pattern URL. */
export function generateStaticParams() {
  return templates
    .filter((t) => !CUSTOM_DETAIL_PATHS[t.slug]?.nl)
    .map((t) => {
      const [industry, slug] = templateHref(t, "nl")
        .slice(DESIGNS_BASE.nl.length + 1)
        .split("/");
      return { industry, slug };
    });
}

export async function generateMetadata({
  params,
}: NlTemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = templateFor(slug);
  return template ? buildDesignMetadata(template, "nl") : {};
}

/**
 * /nl/ontwerpen/<branche>/<design> — the detail page of a design on the
 * pattern URL; for a design with its own NL URL (no <branche>), the old URL
 * redirects to it.
 */
export default async function NlTemplateDetailPage({
  params,
}: NlTemplateDetailPageProps) {
  const { industry, slug } = await params;
  const template = templateFor(slug);
  if (!template) notFound();

  // Each design is served at exactly one NL URL. Any other URL that names it
  // — the old /nl/ontwerpen/<branche>/<design> of a design that now has its
  // own NL slug, or a wrong industry — goes there in one permanent redirect.
  const href = templateHref(template, "nl");
  if (`${DESIGNS_BASE.nl}/${industry}/${slug}` !== href) {
    permanentRedirect(href);
  }

  return <DesignDetail template={template} locale="nl" />;
}
