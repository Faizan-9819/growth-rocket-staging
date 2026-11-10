import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";

import {
  ExternalLink,
  LegalHero,
  LINK_CLASS,
  Mail,
  Phone,
  Section,
  Sub,
  Ul,
} from "../components/legal/LegalContent";
import LegalDocument from "../components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Imprint — Growth Rocket",
  description:
    "Company information and legal imprint for Growth Rocket by Parashift Technologies B.V.",
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/imprint",
    languages: {
      en: "https://legal.getgrowthrocket.com/imprint",
      nl: "https://legal.getgrowthrocket.com/nl/imprint",
    },
  },
};

/* Text: ggr-legal-pages-content/final-doc-for-imprint.docx, word for word. */
export default function ImprintPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/imprint",
          "Imprint - Growth Rocket",
          "Company information and legal imprint for Growth Rocket by Parashift Technologies B.V.",
        )}
      />
      <LegalHero title="Imprint" />

      {/* Content */}
      <LegalDocument tocHeading="Contents">
        <Sub>Growth Rocket Imprint and Company Information</Sub>

        <Section title="1. Company Details">
          <p>
            Parashift Technologies B.V. provides the services under the Growth
            Rocket brand.
          </p>
          <Ul
            items={[
              "Company: Parashift Technologies B.V.",
              "Address: World Trade Center, Prinses Margrietplantsoen 33, 2595 AM ’s-Gravenhage, Netherlands.",
              "Represented by: Shahnawaz Dhamankar, managing director",
            ]}
          />
        </Section>

        <Section title="2. Legal Registration">
          <Ul
            items={[
              "Chamber of Commerce (KVK) number: 42002389.",
              "VAT identification number (btw-id): NL869232186B01.",
            ]}
          />
        </Section>

        <Section title="3. Contact Information">
          <Ul
            items={[
              <>
                Sales and general enquiries:{" "}
                <Mail email="sales@getgrowthrocket.com" />
              </>,
              <>
                Customer support: <Mail email="support@getgrowthrocket.com" />
              </>,
              <>
                Phone: <Phone number="+31 85 744 4176" />
              </>,
              <>
                Website:{" "}
                <ExternalLink href="https://www.getgrowthrocket.com/" />
              </>,
            ]}
          />
        </Section>

        <Section title="4. Business Activity">
          <p>
            Growth Rocket provides subscription services for business customers,
            including:
          </p>
          <Ul
            items={[
              "Managed website development, website copywriting and business introduction video production",
              "Website hosting, maintenance and technical updates",
              "Enquiry forms, contact forms and appointment booking",
              "The Growth Rocket Hub for managing enquiries, appointments, customer contacts, quotes, invoices and reviews. The selected package, fees, service commitments and usage rights are set out in the Customer Contract and the applicable Terms and Conditions.",
            ]}
          />
        </Section>

        <Section title="5. Responsibility for This Website">
          <Ul
            items={[
              "Parashift Technologies B.V. is responsible for this website's own content. Its managing director is identified in section 1.",
            ]}
          />
        </Section>

        <Section title="6. Liability for Content">
          <p>
            We aim to keep the general information on this website accurate and
            up to date. It may contain errors or become outdated. This statement
            does not reduce our agreed service commitments or override the
            Customer Contract, Terms and Conditions, DPA or any mandatory legal
            rights. Liability for our services is governed by the agreed
            documents, including clause 15 of the DPA as incorporated into the
            Contract and Terms.
          </p>
        </Section>

        <Section title="7. Liability for Links">
          <p>
            External websites linked from this site are operated by their
            respective providers and have their own content and privacy
            policies. We do not control those websites. This does not exclude
            any responsibility that applicable law places on us for links we
            provide. Please tell us if you believe a link points to unlawful
            content.
          </p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>
            The content, design and structure of this Growth Rocket website are
            owned by or licensed to Parashift Technologies B.V., unless stated
            otherwise. Use requires permission unless permitted by law or an
            applicable licence. This statement does not change customers&apos;
            rights to their own content, branding, domain, or the final website
            copy and video provided under their Customer Contract. Rights in the
            Growth Rocket platform, website code, design templates and backend
            systems follow the agreed Contract and Terms, subject to mandatory
            law.
          </p>
        </Section>
        {/*  */}
        <Section title="9. Governing Law">
          <p>
            Dutch law applies, subject to mandatory legal rules. The Customer
            Contract and Terms and Conditions govern the services and dispute
            arrangements. This page does not amend those agreements or create a
            separate liability limit.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            For legal or general enquiries, use the contact details below.
            Privacy requests use the contact identified in our Privacy Policy at{" "}
            <Link href="/privacy-policy" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/privacy-policy
            </Link>
            . Complaints about our services can be sent to{" "}
            <Mail email="support@getgrowthrocket.com" /> during our support
            hours (Monday–Friday, 09:00–17:00 Europe/Amsterdam time, excluding
            public holidays). We confirm receipt within 2 Working Days and aim
            to respond within 5 Working Days. If we cannot resolve a complaint,
            section 16 of our Terms and Conditions (
            <Link href="/terms-and-conditions" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/terms-and-conditions
            </Link>
            ) explains how disputes are handled.
          </p>
          <Ul
            items={[
              "Parashift Technologies B.V.",
              <>
                Sales and general enquiries:{" "}
                <Mail email="sales@getgrowthrocket.com" />
              </>,
              <>
                Customer support: <Mail email="support@getgrowthrocket.com" />
              </>,
              <>
                Phone: <Phone number="+31 85 744 4176" />
              </>,
            ]}
          />
        </Section>
      </LegalDocument>
    </main>
  );
}
