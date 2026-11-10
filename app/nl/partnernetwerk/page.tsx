import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, socialMeta } from "../../lib/seo";
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

const TITLE = "Partner worden bij Growth Rocket | Partnernetwerk";
const DESCRIPTION =
  "Help het mkb en zzp’ers met Growth Rocket. Ontvang €200 eenmalige commissie per succesvolle doorverwijzing zodra de website van de klant live gaat.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/partnernetwerk"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    languages: {
      en: "https://www.getgrowthrocket.com/partner-network",
      nl: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    },
  },
};

export default function NlPartnernetwerkPage() {
  return (
    <main className="partner-theme relative min-h-screen">
      <JsonLd data={buildPageSchema("/nl/partnernetwerk", TITLE, DESCRIPTION)} />
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
