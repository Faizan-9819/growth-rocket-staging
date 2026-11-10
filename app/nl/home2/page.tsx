import type { Metadata } from "next";
import Home2Client from "../../home2/Home2Client";
import { getHomeBlogPosts } from "../../lib/blog-posts";

export const metadata: Metadata = {
  title: "Beheerde Websites voor Kleine Bedrijven | Growth Rocket",
  description:
    "Een professionele website voor uw bedrijf — gebouwd, gehost en beheerd voor u. Vaste jaarprijs, live in 7 dagen. Bekijk hoe het werkt.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/home2",
    languages: {
      en: "https://www.getgrowthrocket.com/home2",
      nl: "https://www.getgrowthrocket.com/nl/home2",
    },
  },
};

export default async function NlHome2Page() {
  const blogPosts = await getHomeBlogPosts();
  return <Home2Client blogPosts={blogPosts} />;
}
