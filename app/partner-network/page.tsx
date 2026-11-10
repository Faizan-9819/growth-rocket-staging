import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { buildPageSchema, socialMeta } from "../lib/seo";
import HomeShell from "@/app/components/sections/home2/HomeShell";
import PartnersHero from "@/components/partners/hero";
import Opportunity from "@/components/partners/opportunity";
import PartnerTypes from "@/components/partners/partner-types";
import Solution from "@/app/components/sections/home2/Solution";
import Process from "@/components/partners/process";
import Commission from "@/components/partners/commission";
import WhyWorks from "@/components/partners/why-works";
import WhyPartners from "@/components/partners/why-partners";
import BiggerVision from "@/components/partners/bigger-vision";
import PartnersFAQ from "@/components/partners/faq";
import PartnerInterest from "@/components/partners/partner-interest";

const TITLE = "Become a Growth Rocket Partner | Partner Network";
const DESCRIPTION =
  "Help small businesses with Growth Rocket. Earn a €200 one-time commission for each successful referral when their website goes live.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/partner-network"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/partner-network",
    languages: {
      en: "https://www.getgrowthrocket.com/partner-network",
      nl: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    },
  },
};

export default function PartnersPage() {
  return (
    // HomeShell gives the page home2's bento macro-layout (rounded folds on
    // white, uniform gap, navbar clearance); `.partner-theme` repoints the old
    // brand tokens at the home2 palette for the mockups and the shared form.
    <main className="partner-theme relative min-h-screen">
      <JsonLd data={buildPageSchema("/partner-network", TITLE, DESCRIPTION)} />
      <HomeShell>
        <PartnersHero />
        <Opportunity />
        <Solution />
        <WhyWorks />
        <PartnerTypes />
        <Process />
        <Commission />
        <WhyPartners />
        <BiggerVision />
        <PartnersFAQ />
        <PartnerInterest />
      </HomeShell>
    </main>
  );
}
