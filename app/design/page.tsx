import type { Metadata } from "next";
import { socialMeta } from "../lib/seo";
import DesignsListing from "../designs/DesignsListing";
import { LISTING_COPY } from "../designs/industry-copy";

const { title: TITLE, description: DESCRIPTION } = LISTING_COPY.en;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/design"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/design",
    languages: {
      en: "https://www.getgrowthrocket.com/design",
      nl: "https://www.getgrowthrocket.com/nl/ontwerpen",
    },
  },
};

export default function TemplatesPage() {
  return <DesignsListing locale="en" title={TITLE} description={DESCRIPTION} />;
}
