import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DesignsListing from "../../designs/DesignsListing";
import {
  INDUSTRY_SLUGS,
  categoryFromIndustrySlug,
  designsHref,
} from "../../designs/design-routes";
import { getIndustryCopy } from "../../designs/industry-copy";
import { socialMeta } from "../../lib/seo";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

export function generateStaticParams() {
  return Object.values(INDUSTRY_SLUGS).map((s) => ({ industry: s.en }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industry } = await params;
  const category = categoryFromIndustrySlug(industry, "en");
  if (!category) return {};
  const origin = "https://www.getgrowthrocket.com";
  const copy = getIndustryCopy(category, "en");

  return {
    ...(copy && {
      title: copy.title,
      description: copy.description,
      ...socialMeta(copy.title, copy.description, designsHref("en", category)),
    }),
    alternates: {
      canonical: `${origin}${designsHref("en", category)}`,
      languages: {
        en: `${origin}${designsHref("en", category)}`,
        nl: `${origin}${designsHref("nl", category)}`,
      },
    },
  };
}

/** /design/<industry> — the designs listing, pre-filtered to one industry. */
export default async function IndustryDesignsPage({
  params,
}: IndustryPageProps) {
  const { industry } = await params;
  const category = categoryFromIndustrySlug(industry, "en");
  if (!category) notFound();

  const copy = getIndustryCopy(category, "en");
  return (
    <DesignsListing
      locale="en"
      category={category}
      title={copy?.title ?? ""}
      description={copy?.description ?? ""}
    />
  );
}
