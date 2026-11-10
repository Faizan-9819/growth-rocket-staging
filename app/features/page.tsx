import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import {
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "../lib/seo";
import FeaturesClient from "./FeaturesClient";
import { FEATURES_COPY } from "./data";
import type { AnimationStyle } from "./FeatureReveal";
//
/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence; headlines by word.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "stagger";

const TITLE = "Website with Booking, Enquiries & Invoicing | Growth Rocket";
const DESCRIPTION =
  "Manage website enquiries, appointments, customer contacts, quotes and invoices in Growth Rocket Hub. Your everyday business tools, connected to your website.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/features"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/features",
    languages: {
      en: "https://www.getgrowthrocket.com/features",
      nl: "https://www.getgrowthrocket.com/nl/functies",
    },
  },
};

export default function FeaturesPage() {
  const faqSchema = buildFaqJsonLdFromItems(FEATURES_COPY.en.faqItems);
  return (
    <>
      <JsonLd data={buildPageSchema("/features", TITLE, DESCRIPTION)} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <FeaturesClient animationStyle={animationStyle} />
    </>
  );
}
