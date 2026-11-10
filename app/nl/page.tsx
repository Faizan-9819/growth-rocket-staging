import type { Metadata } from "next";
import { socialMeta } from "../lib/seo";
// The previous homepage. No longer rendered — the home2 design now lives at
// /nl — but HomeClient and its sections are kept in place for reference.
// import HomeClient from "../HomeClient";
import Home2Client from "../home2/Home2Client";
import { getHomeBlogPosts } from "../lib/blog-posts";

const TITLE = "Website laten maken voor zzp’ers en mkb – vanaf €69 p/m";
const DESCRIPTION =
  "Een compleet online businesssysteem voor het mkb en zzp’ers: je website en Growth Rocket Hub, met hosting, onderhoud en ondersteuning voor je geregeld.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl",
    languages: {
      en: "https://www.getgrowthrocket.com/",
      nl: "https://www.getgrowthrocket.com/nl",
    },
  },
};

export default async function NlHomePage() {
  // return <HomeClient />;
  const blogPosts = await getHomeBlogPosts();
  return <Home2Client blogPosts={blogPosts} />;
}
