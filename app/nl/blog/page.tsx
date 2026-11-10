import type { Metadata } from "next";
import { getAllBlogPosts } from "../../lib/blog-posts";
import BlogLandingClient from "../../components/blog/BlogLandingClient";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, socialMeta } from "../../lib/seo";

/* The same landing as app/blog/page.tsx (BlogLandingClient translates its UI
   by locale), listing the Dutch translations only. */
export const revalidate = 3600;

const BLOG_TITLE = "Tips voor je bedrijfswebsite | Growth Rocket Blog";
const BLOG_DESCRIPTION =
  "Praktische tips voor het mkb en zzp’ers over je website, aanvragen en online afspraken boeken. Zo houd je overzicht in je dagelijkse werk.";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  ...socialMeta(BLOG_TITLE, BLOG_DESCRIPTION, "/nl/blog"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/blog",
    languages: {
      en: "https://www.getgrowthrocket.com/blog",
      nl: "https://www.getgrowthrocket.com/nl/blog",
    },
  },
};

export default async function NlBlogLandingPage() {
  const posts = await getAllBlogPosts("nl");
  return (
    <>
      <JsonLd data={buildPageSchema("/nl/blog", BLOG_TITLE, BLOG_DESCRIPTION)} />
      <BlogLandingClient posts={posts} />
    </>
  );
}
