import type { Metadata } from "next";
import { socialMeta } from "../../lib/seo";
import DesignsListing from "../../designs/DesignsListing";
import { LISTING_COPY } from "../../designs/industry-copy";

const { title: TITLE, description: DESCRIPTION } = LISTING_COPY.nl;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/ontwerpen"),
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/ontwerpen",
    languages: {
      en: "https://www.getgrowthrocket.com/designs",
      nl: "https://www.getgrowthrocket.com/nl/ontwerpen",
    },
  },
};

export default function NlDesignsPage() {
  return <DesignsListing locale="nl" title={TITLE} description={DESCRIPTION} />;
}
