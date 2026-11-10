import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import {
  buildFaqJsonLdFromItems,
  buildPageSchema,
  socialMeta,
} from "../../lib/seo";
import FeaturesClient from "@/app/features/FeaturesClient";
import { FEATURES_COPY } from "@/app/features/data";
import type { AnimationStyle } from "@/app/features/FeatureReveal";

/* Keep in step with app/features/page.tsx. See animationStyle.md. */
const animationStyle: AnimationStyle = "stagger";

const TITLE = "Website met afsprakensysteem en facturatie | Growth Rocket";
const DESCRIPTION =
  "Beheer aanvragen via je website, afspraken, contacten, offertes en facturen in Growth Rocket Hub. Alles op één plek, verbonden met je website.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/functies"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/functies",
    languages: {
      en: "https://www.getgrowthrocket.com/features",
      nl: "https://www.getgrowthrocket.com/nl/functies",
    },
  },
};
//

export default function NlFeaturesPage() {
  const faqSchema = buildFaqJsonLdFromItems(FEATURES_COPY.nl.faqItems);
  return (
    <>
      <JsonLd data={buildPageSchema("/nl/functies", TITLE, DESCRIPTION)} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <FeaturesClient animationStyle={animationStyle} />
    </>
  );
}
