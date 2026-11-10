import type { Metadata } from "next";
import { getEnBlogPosts } from "../lib/blog-posts-en";
import BlogLandingClient from "../components/blog/BlogLandingClient";
import JsonLd from "../components/JsonLd";
import { buildPageSchema, socialMeta } from "../lib/seo";

export const revalidate = 3600;

const BLOG_TITLE = "Small Business Website Tips & Guides | Growth Rocket Blog";
const BLOG_DESCRIPTION =
  "Practical guides for small businesses on website design, customer enquiries and online appointments, with advice to help keep everyday work organised.";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  ...socialMeta(BLOG_TITLE, BLOG_DESCRIPTION, "/blog"),
  alternates: {
    canonical: "/blog",
    languages: {
      en: "https://www.getgrowthrocket.com/blog",
      nl: "https://www.getgrowthrocket.com/nl/blog",
    },
  },
};

export default async function BlogLandingPage() {
  const posts = await getEnBlogPosts();
  return (
    <>
      <JsonLd
        data={buildPageSchema(
          "/blog",
          BLOG_TITLE,
          BLOG_DESCRIPTION
        )}
      />
      <BlogLandingClient posts={posts} />
    </>
  );
}
