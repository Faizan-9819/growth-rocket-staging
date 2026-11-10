import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, SITE_URL, socialMeta } from "../../lib/seo";
import ContactPageContent from "@/app/components/contact/ContactPageContent";

const title = "Contact Growth Rocket | Vrijblijvend je vraag stellen";
const description =
  "Vragen over Growth Rocket? Bespreek het pakket, de inrichting en wat bij je bedrijf past met ons team. We helpen je graag, helemaal vrijblijvend.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMeta(title, description, "/nl/contact"),
  alternates: {
    canonical: `${SITE_URL}/nl/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      nl: `${SITE_URL}/nl/contact`,
    },
  },
};

export default function NlContactPage() {
  return (
    <>
      <JsonLd data={buildPageSchema("/nl/contact", title, description)} />
      <ContactPageContent locale="nl" />
    </>
  );
}
