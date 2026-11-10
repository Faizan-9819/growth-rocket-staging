import type { Metadata } from "next";
import HomeShell from "../../components/sections/home2/HomeShell";
import AboutHero from "../../components/sections/about/AboutHero";
import AboutIntro from "../../components/sections/about/AboutIntro";
import AboutPurpose from "../../components/sections/about/AboutPurpose";
import AboutClosing from "../../components/sections/about/AboutClosing";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, socialMeta } from "../../lib/seo";

/* Title and description from GGR Pages.xlsx (see META-TAGS.md). */
const TITLE = "Over Growth Rocket | Technologie voor zzp en mkb";
const DESCRIPTION =
  "Maak kennis met Growth Rocket, een initiatief van Parashift Technologies. Wij maken bruikbare technologie toegankelijk voor het mkb en zzp’ers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/over-ons"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/over-ons",
    languages: {
      en: "https://www.getgrowthrocket.com/about",
      nl: "https://www.getgrowthrocket.com/nl/over-ons",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** /nl/over-ons — the folds of app/about/page.tsx, each handed `locale="nl"`. */
export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <JsonLd data={buildPageSchema("/nl/over-ons", TITLE, DESCRIPTION)} />

      <HomeShell>
        <AboutHero locale="nl" />
        <AboutIntro locale="nl" />
        <AboutPurpose locale="nl" />
        <AboutClosing locale="nl" />
      </HomeShell>
    </main>
  );
}
