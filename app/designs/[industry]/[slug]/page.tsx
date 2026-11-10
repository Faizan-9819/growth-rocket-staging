import { notFound, permanentRedirect } from "next/navigation";
import { templateHref } from "../../design-routes";
import { getTemplateBySlug } from "../../templates-data";

/** Old /designs/<industry>/<design> URLs: the detail page is /design/… now. */
export default async function LegacyTemplateDetailPage({
  params,
}: {
  params: Promise<{ industry: string; slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();
  permanentRedirect(templateHref(template, "en"));
}
