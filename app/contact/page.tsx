import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import ContactPageContent from "../components/contact/ContactPageContent";
import { buildPageSchema, SITE_URL, socialMeta } from "../lib/seo";

const title = "Contact Growth Rocket | Talk to Our Team";
const description =
  "Questions about Growth Rocket? Talk to our team about the package, setup and what suits your business. We’re happy to help, with no obligation.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMeta(title, description, "/contact"),
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      nl: `${SITE_URL}/nl/contact`,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildPageSchema("/contact", title, description)} />
      <ContactPageContent locale="en" />
    </>
  );
}
