import type { Metadata } from "next";
import { socialMeta } from "./lib/seo";
import Home2Client from "./home2/Home2Client";
import type { AnimationStyle } from "./features/FeatureReveal";
import { getHomeBlogPosts } from "./lib/blog-posts";

/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "stagger";

const TITLE = "Small Business Website & Business Tools – From €69/Month";
const DESCRIPTION =
  "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/",
    languages: {
      en: "https://www.getgrowthrocket.com/",
      nl: "https://www.getgrowthrocket.com/nl",
    },
  },
};

export default async function Home() {
  const blogPosts = await getHomeBlogPosts();
  return <Home2Client animationStyle={animationStyle} blogPosts={blogPosts} />;
}
