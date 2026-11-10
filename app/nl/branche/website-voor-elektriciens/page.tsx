import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import {
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "@/app/lib/seo";
import IndustryClient from "@/app/industry/IndustryClient";
import { ELEC_COPY } from "@/app/industry/website-for-electricians/data";
import type { AnimationStyle } from "@/app/features/FeatureReveal";

/* Keep in step with app/industry/website-for-electricians/page.tsx. */
const animationStyle: AnimationStyle = "stagger";

const TITLE = "Een Website voor Elektriciens | Growth Rocket";
const DESCRIPTION =
  "Een professionele website voor elektriciens, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Hosting, onderhoud en support inbegrepen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/branche/website-voor-elektriciens"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/branche/website-voor-elektriciens",
    languages: {
      en: "https://www.getgrowthrocket.com/industry/website-for-electricians",
      nl: "https://www.getgrowthrocket.com/nl/branche/website-voor-elektriciens",
    },
  },
};

/* The same page as /industry/website-for-electricians, with the Dutch copy from
   app/industry/website-for-electricians/data.ts. */
export default function NlElectriciansPage() {
  const faqSchema = buildFaqJsonLdFromItems(ELEC_COPY.nl.FAQ_ITEMS);
  return (
    <>
      <JsonLd
        data={buildPageSchema(
          "/nl/branche/website-voor-elektriciens",
          TITLE,
          DESCRIPTION,
        )}
      />
      {faqSchema && <JsonLd data={faqSchema} />}
      <IndustryClient copy={ELEC_COPY} animationStyle={animationStyle} />
    </>
  );
}
