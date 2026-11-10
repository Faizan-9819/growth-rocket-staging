import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import {
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "../../lib/seo";
import IndustryClient from "../IndustryClient";
import { ELEC_COPY } from "./data";
import type { AnimationStyle } from "../../features/FeatureReveal";

/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence; headlines by word.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "stagger";

const TITLE = "A Website for Electricians | Growth Rocket";
const DESCRIPTION =
  "A professional website for electricians, with Growth Rocket Hub for enquiries, appointments, quotes and invoices. Hosting, maintenance and support included.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/industry/website-for-electricians"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/industry/website-for-electricians",
    languages: {
      en: "https://www.getgrowthrocket.com/industry/website-for-electricians",
      nl: "https://www.getgrowthrocket.com/nl/branche/website-voor-elektriciens",
    },
  },
};

export default function ElectriciansPage() {
  const faqSchema = buildFaqJsonLdFromItems(ELEC_COPY.en.FAQ_ITEMS);
  return (
    <>
      <JsonLd
        data={buildPageSchema("/industry/website-for-electricians", TITLE, DESCRIPTION)}
      />
      {faqSchema && <JsonLd data={faqSchema} />}
      <IndustryClient copy={ELEC_COPY} animationStyle={animationStyle} />
    </>
  );
}
