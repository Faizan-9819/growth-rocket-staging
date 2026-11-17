import { EUR_NL } from "@/pricing";
import type { Metadata } from "next";
import HomeShell from "../../components/sections/home2/HomeShell";
import PricingHero from "../../components/sections/pricing/PricingHero";
import PricingPlan from "../../components/sections/pricing/PricingPlan";
import BespokeBanner from "../../components/sections/pricing/BespokeBanner";
import PricingFaq from "../../components/sections/pricing/PricingFaq";
import { PRICING_FAQS_NL } from "../../components/sections/pricing/faqs";
import JsonLd from "../../components/JsonLd";
import { buildFaqJsonLdFromItems, buildPageSchema, socialMeta } from "../../lib/seo";

/* Title and description from GGR Pages.xlsx (see META-TAGS.md). */
const TITLE = `Kosten website laten maken: ${EUR_NL.yearly} per jaar | Growth Rocket`;
const DESCRIPTION =
  `${EUR_NL.yearlyOrMonthly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten, excl. btw. Website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning in één pakket.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/prijzen"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/prijzen",
    languages: {
      en: "https://www.getgrowthrocket.com/pricing",
      nl: "https://www.getgrowthrocket.com/nl/prijzen",
    },
  },
};

/**
 * /nl/prijzen — the same folds as /pricing (see app/pricing/page.tsx), each
 * handed `locale="nl"` for its Dutch copy. Until this page existed proxy.ts
 * rewrote the NL pricing URL to the EN page. The old /nl/pricing URL now
 * redirects here (next.config.ts).
 */
export default function NlPricingPage() {
  const faqSchema = buildFaqJsonLdFromItems(
    PRICING_FAQS_NL.map(({ q, a }) => ({ question: q, answer: a })),
  );

  return (
    <main className="relative min-h-screen">
      <JsonLd data={buildPageSchema("/nl/prijzen", TITLE, DESCRIPTION)} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <HomeShell>
        <PricingHero locale="nl" />
        <PricingPlan locale="nl" />
        <BespokeBanner locale="nl" />
        <PricingFaq locale="nl" />
      </HomeShell>
    </main>
  );
}
