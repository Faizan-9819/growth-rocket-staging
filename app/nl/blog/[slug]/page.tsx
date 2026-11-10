import type { Metadata } from "next";
import { permanentRedirect, redirect } from "next/navigation";
import BlogPostView from "../../../components/blog/BlogPostView";
import { translateBlogPath } from "../../../i18n/blog-locale-slugs";
import { buildStaticBlogMetadata } from "../../../lib/blog-metadata";
import { getNlTranslations, urlSlugFor } from "../../../lib/blog-content";

type NlBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

/**
 * /nl/blog/<url-slug> — every Dutch translation at its Dutch URL. A post
 * without one has no Dutch page: its /nl URL (what the language switch builds
 * from an English-only post) goes to the /nl/blog overview rather than showing
 * the English article on the Dutch site. That redirect is temporary, so the
 * URL serves the post as soon as its translation lands.
 */
export async function generateStaticParams() {
  const entries = await getNlTranslations();
  return entries.map((entry) => ({ slug: urlSlugFor(entry) }));
}

export async function generateMetadata({
  params,
}: NlBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildStaticBlogMetadata(decodeURIComponent(slug), "nl");
}

export default async function NlBlogPostPage({ params }: NlBlogPostPageProps) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  // A translated post reached by its English slug (/nl/blog/electrician-
  // website-checklist) goes to its Dutch URL in one permanent redirect.
  const href = translateBlogPath(`/nl/blog/${decoded}`, "nl");
  if (href && href !== `/nl/blog/${decoded}`) permanentRedirect(href);
  const translated = (await getNlTranslations()).some(
    (entry) => entry.blog.slug === decoded || urlSlugFor(entry) === decoded,
  );
  if (!translated) redirect("/nl/blog");
  return <BlogPostView pairingSlug={decoded} locale="nl" />;
}
