import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import {
  B,
  ExternalLink,
  LegalHero,
  LINK_CLASS,
  Mail,
  Phone,
  Section,
  Table,
  Ul,
} from "../components/legal/LegalContent";
import CookieSettingsButton from "../components/legal/CookieSettingsButton";
import LegalDocument from "../components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Growth Rocket",
  description:
    "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/privacy-policy",
    languages: {
      en: "https://legal.getgrowthrocket.com/privacy-policy",
      nl: "https://legal.getgrowthrocket.com/nl/privacy-policy",
    },
  },
};

const SUPPORT_EMAIL = "support@getgrowthrocket.com";

/* Text: ggr-legal-pages-content/final-doc-for-privacy-policy.docx. */
export default function PrivacyPolicyPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/privacy-policy",
          "Privacy Policy - Growth Rocket",
          "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
        )}
      />
      <LegalHero
        title="Privacy Policy"
        meta="Last updated: 28-10-2026 · Version 1.0"
      />

      {/* Content */}
      <LegalDocument tocHeading="Contents">
        <Section title="1. Who we are">
          <p>
            Growth Rocket is operated by Parashift Technologies B.V., World
            Trade Center, Prinses Margrietplantsoen 33, 2595 AM
            &apos;s-Gravenhage, Netherlands, registered with the Netherlands
            Chamber of Commerce (KvK) under number 42002389 (&quot;Growth
            Rocket&quot;, &quot;we&quot;, &quot;us&quot;). We act as controller
            when we decide our own purposes for using personal data, as
            explained below. Where we process data for our customers, we act as
            processor under our Data Processing Agreement (DPA).
          </p>
          <p>
            Privacy contact: <Mail email={SUPPORT_EMAIL} />
          </p>
        </Section>

        <Section title="2. What this policy covers">
          <p>This policy explains how we handle personal data about:</p>
          <Ul
            items={[
              <>
                businesses that use Growth Rocket, and the people who run their
                accounts (&quot;customers&quot;)
              </>,
              "people who contact us, for example through the contact form or WhatsApp on our website, or by emailing us",
              "visitors to our website getgrowthrocket.com and to the Growth Rocket Hub",
              "people who receive email sent through Growth Rocket, as far as we protect email delivery",
              "our customers' clients, where we use limited details for our own email-delivery protection, account administration, security, support or legal-dispute purposes described below",
            ]}
          />
          <p>
            When you send an enquiry, make a booking, receive a quote or
            invoice, or leave a review through a business using Growth Rocket,
            that business is normally the controller. We process its Customer
            Data on its behalf under the DPA, including during onboarding and
            before the website or subscription starts. Processing solely to
            provide or secure that customer&apos;s service remains covered by
            the DPA. Read that business&apos;s privacy notice or contact it
            about your data. Our separate controller uses are described in this
            policy; they do not give us a general right to reuse its customer
            database. The DPA is available at{" "}
            <Link href="/dpa" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/dpa
            </Link>
            .
          </p>
        </Section>

        <Section title="3. What we collect, why, and on what legal basis">
          <Table
            head={["Purpose", "Personal data", "Legal basis (GDPR)"]}
            rows={[
              [
                "Creating and running your account",
                "Name, email, password (stored only as a hash), phone, preferences",
                "Art. 6(1)(f): our legitimate interest in administering business accounts and managing our customer relationships. Art. 6(1)(b) applies instead where the individual is personally party to the contract and the processing is necessary to perform it.",
              ],
              [
                "Coordinating onboarding and service delivery",
                "Business contact details, onboarding communications and project instructions. Personal data in customer-supplied or created website, blog and video content is processed on the customer's behalf under the DPA.",
                "Art. 6(1)(f): our legitimate interest in managing and delivering business services; Art. 6(1)(b) where necessary to perform a contract with the individual. For Customer Data processed only on the customer's behalf, the customer determines the lawful basis and the DPA governs our processing.",
              ],
              [
                "Producing quotes and invoices for your clients on your behalf",
                "Invoice settings, including VAT ID and bank details, and client names, contact details, line items, amounts, recorded payments, PDFs and sending records. Quote acceptance is recorded manually; quote and invoice opening is not tracked.",
                "Processor activity under the DPA, not a separate controller purpose of Growth Rocket. You determine the lawful basis for your clients' data. Our own subscription billing is separate below.",
              ],
              [
                "Billing your subscription",
                "Plan, subscription details, billing email, our invoices to you",
                "Art. 6(1)(f): administering business billing; Art. 6(1)(b) where necessary to perform a contract with the individual; Art. 6(1)(c): applicable Dutch tax and accounting obligations.",
              ],
              [
                "Answering support requests",
                "Tickets, emails, attachments, CC addresses",
                "Art. 6(1)(f): our legitimate interest in answering requests and managing support. Customer Data supplied within tickets remains subject to the DPA where we process it on your behalf.",
              ],
              [
                "Our account, project and security messages",
                "Email address, message content",
                "Art. 6(1)(f): administering and protecting our service and communicating with business contacts; Art. 6(1)(b) where necessary to perform a contract with the individual. Booking alerts and other messages to your clients are sent on your behalf under the DPA.",
              ],
              [
                "Keeping the platform and your account secure, and preventing abuse",
                "IP address, browser details, login events, account activity log, rate-limit counters. The activity log can include a customer's client's name or email address, for example the address an invoice was sent to",
                "Art. 6(1)(f): our legitimate interest in protecting our platform, investigating problems and preventing abuse, subject to individuals' rights. Logs used solely to provide or secure your service on your behalf remain covered by the DPA.",
              ],
              [
                "Recording acceptance of the Contract, Terms and DPA, and acknowledgement of this Privacy Policy",
                "Accepted document versions and dates, acceptance records, and subsequent update notices and versions.",
                "Art. 6(1)(f): our legitimate interest in proving what was agreed and what information was provided. Acknowledging this Privacy Policy is not consent to processing.",
              ],
              [
                "Proving your marketing consent",
                "Your choice, with time, policy version, IP address and browser details",
                "Art. 6(1)(c) with Art. 7(1): duty to prove consent",
              ],
              [
                "Proving your cookie consent",
                "Your cookie choices, the date and time, the policy version and a pseudonymous consent ID",
                "Art. 6(1)(c) with Art. 7(1): duty to prove consent",
              ],
              [
                <>
                  Marketing emails from Growth Rocket, <B>only if you opted in</B>
                </>,
                "Name, email",
                "Art. 6(1)(a): consent, which you can withdraw at any time",
              ],
              [
                "Protecting email delivery for all customers",
                "Email address, delivery-failure or complaint details and the last-bounce date. Permanent bounces and complaints result in platform-wide blocking of client emails, except password-reset emails. Review-request opt-outs apply only to the customer account concerned and stop review requests and reminders; they are different from delivery failures.",
                "Art. 6(1)(f): our legitimate interest in protecting email delivery and avoiding repeated messages to addresses that cannot receive them or have complained.",
              ],
              [
                "Answering the contact form on our website",
                "Full name, phone, email, business name, type of work, service area, whether you have a website, your message",
                "Art. 6(1)(f): our legitimate interest in answering business enquiries; Art. 6(1)(b) where the individual asks us to take steps before entering into a contract with them.",
              ],
              [
                "Arranging an appointment you book with us",
                "Service requested, preferred date and time, your name, phone number, email address and an optional message",
                "Art. 6(1)(f): our legitimate interest in arranging business appointments; Art. 6(1)(b) where the individual requests steps before a contract with them.",
              ],
              [
                "Talking to you on WhatsApp, if you message us there",
                "Your phone number, WhatsApp name and your messages",
                "Art. 6(1)(f): our legitimate interest in answering business enquiries; Art. 6(1)(b) where necessary for a contract with the individual or steps they request before it.",
              ],
              [
                "Running the Hub",
                "Server logs; strictly necessary cookies",
                "Art. 6(1)(f): our legitimate interest in operating and securing the Hub. Strictly necessary storage or access uses the applicable cookie-consent exemption; see our Cookie Policy. The Hub uses strictly necessary authentication cookies to keep you logged in (7 days), protect the login form, and return you to the right page after login (both end of session). It also stores your sidebar setting (7 days) and keeps unsaved blog drafts in local storage until you save or discard them. The Hub does not use analytics or advertising cookies.",
              ],
              [
                "Running our website",
                "Server logs (IP address, browser, page, time); strictly necessary cookies, including the one that remembers your cookie choice",
                <>
                  Art. 6(1)(f): our legitimate interest in operating and securing
                  our website. Strictly necessary cookies use the exemption in
                  Art. 11.7a(3) Dutch Telecommunicatiewet. These include
                  NEXT_LOCALE, which remembers your language preference, and a
                  cookie that stores your cookie choice. Analytics and
                  advertising cookies are only placed after you accept them in
                  the cookie banner, and you can change your choice at any time
                  in &apos;
                  <CookieSettingsButton>Cookie settings</CookieSettingsButton>
                  &apos;.
                </>,
              ],
              [
                <>
                  Understanding how our website is used (Google Analytics,
                  Microsoft Clarity), <B>only if you accept analytics cookies</B>
                </>,
                "Pages viewed, time on site, clicks and scrolling, device and browser details, approximate location and a random ID. Clarity can record interactions with pages. Clarity is set to mask form fields and other sensitive content, so recordings do not capture what you type into forms. Data is shared with Google Ireland Limited and Microsoft Ireland Operations Limited. These tools only load after you accept analytics cookies.",
                <>
                  Art. 6(1)(a): consent (with Art. 11.7a Telecommunicatiewet).
                  You can withdraw it at any time in &quot;
                  <CookieSettingsButton>Cookie settings</CookieSettingsButton>
                  &quot;
                </>,
              ],
              [
                <>
                  Measuring our advertising (Google Ads),{" "}
                  <B>only if you accept marketing cookies</B>
                </>,
                "Whether a visit from an ad led to a contact-form submission or a phone-number click, and the ad-click ID. These events are only sent after you accept marketing cookies. We do not use Google Ads for remarketing, and we do not send the content of our forms to Google (no enhanced conversions).",
                <>
                  Art. 6(1)(a): consent. You can withdraw it at any time in
                  &quot;
                  <CookieSettingsButton>Cookie settings</CookieSettingsButton>
                  &quot;
                </>,
              ],
              [
                <>
                  Showing videos (YouTube), <B>only when you click to play one</B>
                </>,
                "IP address, browser details, viewing data",
                "Art. 6(1)(a): consent. Before a video loads, we show a notice explaining that it is provided by YouTube (Google Ireland Limited), which may set cookies and collect viewing data. The video only loads when you choose to load it. Until then, no data is sent to YouTube.",
              ],
              [
                "Meeting legal duties and handling legal claims",
                "Records needed for an applicable legal duty, or relevant communications, tickets and attachments needed for a specific dispute. We do not retain unrelated Customer Data for this purpose.",
                "Art. 6(1)(c): compliance with applicable legal obligations; Art. 6(1)(f): our legitimate interest in establishing, exercising or defending legal claims. We retain only the records needed for the applicable purpose.",
              ],
            ]}
          />
          <p>
            We need the account, business and payment information necessary to
            enter into and provide the service. Without required information,
            we may be unable to set up or operate your account. Optional fields
            and consent-based uses are identified when data is collected.
            Refusing optional marketing or analytics consent does not prevent
            use of the core service.
          </p>
          <p>
            <B>Where your data comes from.</B> Data comes from you, your
            business or colleagues who set up your access, and your use of our
            websites and services. Bounce and complaint information comes from
            email-delivery systems. Limited details of customers&apos; clients
            appear through their use of Growth Rocket. Website tools may also
            collect data as described above. We also receive enquiries through
            lead forms on Facebook and Instagram (Meta Platforms Ireland
            Limited), where you submit your name, phone number, email address
            and a message directly to us in response to one of our ads. We use
            these details to answer your enquiry, on the same basis as our
            contact form. We do not buy contact lists or obtain personal data
            from other third-party sources.
          </p>
          <p>
            We do not sell or rent personal data. We do not make decisions
            about you based solely on automated processing that have legal or
            similarly significant effects. We do not enter personal data into
            AI services, including for content production or support.
          </p>
        </Section>

        <Section title="4. Who receives your data">
          <Ul
            items={[
              <>
                Our platform providers include Hostinger International Ltd.
                (servers and backups), Neon, LLC (production database),
                Cloudflare, Inc. (file storage, backups, DNS and network
                protection), and Google Cloud EMEA Limited (Google Workspace
                email and the support mailbox). The current platform provider
                list and processing locations are at{" "}
                <Link href="/dpa#5-sub-processors" className={LINK_CLASS}>
                  https://legal.getgrowthrocket.com/dpa#5-sub-processors
                </Link>
                . Self-hosted n8n, Redis and BullMQ are software we operate,
                not separate providers. Website, marketing, booking and payment
                providers used for our own controller purposes are identified
                separately in this policy.
              </>,
              "Parashift Technologies Private Limited, our parent company in India, provides development, maintenance and technical support. Its address is 205, Pioneer Industrial Estate, Subash Road, Opp Caves Road, Jogeshwari East, Mumbai, Maharashtra 400060, India. Authorised engineers access systems remotely only as needed, with no local Customer Data copies.",
              <>
                Google Ireland Limited for Google Analytics, Google Ads and
                YouTube, where enabled and subject to the relevant consent.
                Google may also act as a separate controller for its own
                purposes, as explained in its applicable privacy information.
                <Ul
                  items={[
                    "Google Analytics: Google acts as our processor under Google's data processing terms.",
                    "Google Ads conversion measurement: Google acts as a separate controller under the Google Ads Controller-Controller Data Protection Terms.",
                    "YouTube: Google acts as a separate controller once you choose to load a video.",
                  ]}
                />
              </>,
              "Microsoft Ireland Operations Limited receives data through Microsoft Clarity, subject to your analytics consent, and acts as a separate controller under the Microsoft Privacy Statement.",
              <>
                <B>WhatsApp Ireland Limited / Meta</B>, if you choose to contact
                us on WhatsApp. WhatsApp&apos;s own privacy policy applies to
                your use of WhatsApp. Meta Platforms Ireland Limited also
                receives the details you submit through our Facebook and
                Instagram lead forms.
              </>,
              "Vercel Inc. hosts our marketing website getgrowthrocket.com in its EU region and processes server and request data on our behalf as our processor.",
              "Our own appointment bookings, including free consultations, are made through the Growth Rocket Hub and processed by the platform providers listed above. We do not use a separate booking provider.",
              <>
                <B>Authorities, courts and professional advisers</B>, where the
                law requires it or where we need to establish or defend legal
                claims.
              </>,
              <>
                <B>A buyer or successor</B>, if our business is sold or
                reorganised, with the same protection for your data.
              </>,
            ]}
          />
          <p>
            Contract signing: SignRequest B.V. (Amsterdam, Netherlands)
            processes the names, email addresses, signatures, IP addresses and
            signing timestamps of the people who sign our contracts, together
            with the signed documents, as our processor. Payments: we currently
            collect subscription payments offline by bank transfer. Your bank
            and ours process the payment details as separate controllers. We
            keep our own invoices and payment records for seven years to meet
            accounting duties.
          </p>
        </Section>

        <Section title="5. Transfers outside the EEA">
          <p>
            Our primary Hostinger servers and Neon production database are in
            Frankfurt, Germany. Cloudflare R2 uses EU-jurisdiction buckets for
            live files and backups. EU storage does not mean all processing
            stays in the European Economic Area (EEA): remote access and
            provider operations may take place elsewhere. Google Workspace has
            no designated region-specific storage location and uses
            Google&apos;s global processing network.
          </p>
          <Ul
            items={[
              <>
                <B>India.</B> Authorised staff of Parashift Technologies Private
                Limited access systems remotely from Mumbai. A signed
                intra-group arrangement and EU Standard Contractual Clauses
                cover this access: Module 2 for our separate controller data and
                Module 3 for Customer Data processed on customers&apos; behalf.
                The transfer impact assessment is completed. Safeguards include
                access only as needed, individual accounts, encrypted
                connections, confidentiality commitments and no local Customer
                Data copies.
              </>,
              <>
                <B>Platform providers.</B> Applicable transfers under Hostinger,
                Neon, Cloudflare and Google Workspace processing terms use EU
                Standard Contractual Clauses where required. The DPA also
                records EU–US Data Privacy Framework certification for
                Cloudflare, Inc. and Google LLC. Before relying on that
                framework, we check that the actual recipient and processing are
                covered by current certification and an applicable adequacy
                decision. Where needed, we assess transfer risks and use
                additional safeguards; if a mechanism is no longer valid, we
                arrange a lawful alternative or pause the affected transfer.
              </>,
              <>
                <B>Website tools and other providers.</B> Google, Microsoft,
                Meta and any other providers identified above may process data
                outside the EEA.
                <Ul
                  items={[
                    "Google (Analytics, Ads and YouTube): data may be transferred to Google LLC in the USA, which is certified under the EU–US Data Privacy Framework; Google's terms also include EU Standard Contractual Clauses.",
                    "Microsoft (Clarity): data may be transferred to Microsoft Corporation in the USA, which is certified under the EU–US Data Privacy Framework.",
                    "Meta (WhatsApp and Facebook/Instagram lead forms): data may be transferred to Meta Platforms, Inc. in the USA, which is certified under the EU–US Data Privacy Framework.",
                    "Vercel: our marketing website is hosted in Vercel's EU region; because Vercel Inc. is a US company and serves pages through a global edge network, some processing may take place outside the EEA, covered by Vercel's Data Processing Addendum with EU Standard Contractual Clauses.",
                    "SignRequest: SignRequest B.V. is based in the Netherlands; any onward transfers by its own sub-processors, including its parent company Box, Inc., are covered by SignRequest's data processing terms.",
                    "Bookings: our own appointment bookings run on the Growth Rocket Hub, so the platform safeguards above apply.",
                  ]}
                />
              </>,
            ]}
          />
          <p>
            You can ask for a copy of these safeguards at{" "}
            <Mail email={SUPPORT_EMAIL} />.
          </p>
        </Section>

        <Section title="6. How long we keep your data">
          <Table
            head={["Data", "How long we keep it"]}
            rows={[
              [
                "Your operational account and Customer Data",
                "Ordinarily retained until deletion on day 60 after the Agreement ends, not before. Hub export-only access lasts 30 calendar days; a secure full export remains available on request until scheduled deletion and is supplied within 14 calendar days, free even if fees are unpaid. For unresolved suspension, the Agreement ends on day 30 after suspension begins; live deletion is on day 90 after suspension began. A late reminder delays deletion by the same delay, and data needed for a timely export request is preserved until delivery. Earlier deletion of specified Customer Data requires your written request, verified through your account login email. Applicable legal-retention exceptions and wider statutory rights remain. Our own accounting, acceptance, support and other controller records follow the separate periods below. DPA clause 10 governs the full procedure.",
              ],
              [
                "Our own invoices and payment records",
                "Seven years to meet applicable accounting obligations. These are separate from invoices and other records we process for your clients under the DPA.",
              ],
              [
                "Support tickets, messages and attachments",
                "Three months after closure. For our own legal dispute, only necessary evidence is retained: the relevant ticket stays open and its email thread is saved separately with access restricted to that purpose. Both are deleted when the dispute is over. Customer Data within tickets remains subject to processor duties and applicable deletion instructions; this is not an exception for unrelated data.",
              ],
              ["Login and security events (with IP address)", "180 days"],
              [
                "Account activity log",
                "400 days. Client names and emails are removed from financial activity entries after 400 days; legally required accounting records are kept separately for seven years.",
              ],
              [
                "Contract, Terms and DPA acceptance; Privacy Policy acknowledgement",
                "Evidence of Terms acceptance and Privacy Policy acknowledgement: account lifetime plus five years. Accepted contract versions, acceptance records and update notices are retained as required by the agreed procedures. The same period of account lifetime plus five years applies to evidence of acceptance of the Contract and DPA and to the related update notices.",
              ],
              [
                "Marketing-consent records",
                "Marketing-consent evidence (your choice, time, policy version, IP address and browser details): kept while your consent is active and for five years after you withdraw it, so we can show that consent was given if a question or complaint arises. This is separate from contractual acceptance and Privacy Policy acknowledgement records.",
              ],
              ["Password-reset links", "1 hour, single use"],
              [
                "Login sessions",
                "Sessions expire after seven days of inactivity; access tokens expire after 15 minutes. Logging out immediately invalidates that session and its issued tokens. Changing or resetting a password invalidates all sessions and their issued tokens.",
              ],
              [
                "Copies of sent emails in our email queue",
                "30 calendar days after sending, subject to applicable deletion instructions.",
              ],
              [
                "Support mailbox emails, including incoming mail and outgoing platform email copies",
                "90 calendar days from arrival. Automatic deletion bypasses Trash and no Google Vault retention rule applies. Earlier deletion is available by deleting the message and emptying Trash. Google administrators may recover messages for up to 25 days after removal from Trash; residual provider copies follow Google's deletion process. Necessary legal-dispute evidence is kept separately as described above. Valid erasure instructions and DPA clause 10 continue to apply.",
              ],
              [
                "Server and request logs (with IP address)",
                "14 calendar days from creation, subject to justified legal-duty or dispute exceptions described above. Request logs for our marketing website getgrowthrocket.com are kept by Vercel for no longer than this same 14-day period.",
              ],
              [
                "Rate-limit counters (with IP address, or email address for login, sign-up and password reset)",
                "IP-based counters: 1 minute to 1 hour. Login and password-reset limits use 15-minute windows; sign-up limits use one-hour windows. Email-based counters expire automatically at the end of their window: 15 minutes for login and password-reset limits and one hour for sign-up limits.",
              ],
              [
                "Platform-wide email suppression records",
                "Ordinarily three years after the last bounce. Review-request opt-outs are separate customer-account records governed by the DPA. Where an address is blocked after a complaint without a bounce, the same three-year period runs from the date of the last complaint.",
              ],
              [
                "Contact-form enquiries and appointment requests from our website",
                "Enquiries from people who do not become customers (contact form, booking form and Facebook/Instagram lead forms): kept for as long as needed to answer the enquiry and follow up on it, and deleted when the enquiry is closed, normally no later than 24 months after our last contact. If you become a customer, your details are kept under the account retention rules above. You can ask us to delete them earlier at any time.",
              ],
              [
                "WhatsApp conversations with our sales number",
                "WhatsApp conversations: messages are set to disappear automatically 90 days after they are sent. If we need your details to follow up on your enquiry, we record them with your enquiry, where the enquiry retention period above applies.",
              ],
              [
                "Google Analytics data (only with your consent)",
                "14 months",
              ],
              [
                "Microsoft Clarity recordings and data (only with your consent)",
                "Microsoft Clarity: session recordings are kept for 30 days, unless we mark a recording to keep it for review, in which case it is kept for up to 9 months. Heatmaps and summary statistics are kept for up to 9 months.",
              ],
              ["Your cookie-banner choice", "6 months, then we ask again"],
              [
                "Cookie consent records",
                "Kept while your consent is active and for five years after you withdraw it or it expires, so we can show what you agreed to. This is separate from the cookie in your browser that remembers your choice for 6 months.",
              ],
              [
                "Backups and temporary copies",
                "Neon database restore history: seven calendar days. R2 file backups are taken nightly; deleted live files are removed within 30 days. Hostinger server backups retain the two most recent weekly copies; server backups and manual snapshots expire within 30 days of live deletion. Backups are protected and not used for normal operations; deletion instructions are reapplied on restoration. Invoice export files expire seven days after generation, and export records 30 days after file expiry. n8n execution data: 14 days. Cached public website content: up to 20 minutes. Google Workspace follows its separate mailbox recovery process above.",
              ],
            ]}
          />
        </Section>

        <Section title="7. Your rights">
          <p>
            Subject to the conditions and exceptions under the GDPR, you have
            the right to:
          </p>
          <Ul
            items={[
              "access your data (Art. 15 GDPR)",
              "have it corrected (Art. 16)",
              "have it erased (Art. 17)",
              "restrict how it's used (Art. 18)",
              "receive it in a portable format (Art. 20)",
              <>
                withdraw consent at any time, without affecting processing that
                happened before (Art. 7(3)). For cookies, use &quot;
                <CookieSettingsButton>Cookie settings</CookieSettingsButton>
                &quot; at the bottom of every page of our website.
              </>,
            ]}
          />
          <p>
            <B>
              Your right to object (Art. 21 GDPR). Where we process your data on
              the basis of our legitimate interests (Art. 6(1)(f)), you can
              object at any time, on grounds relating to your particular
              situation. We will then stop, unless we have compelling legitimate
              grounds that override your interests, or we need the data to
              establish, exercise or defend legal claims. You can always object
              to direct marketing, and we will then stop using your data for it.
              To object, email <Mail email={SUPPORT_EMAIL} />.
            </B>
          </p>
          <p>
            To exercise your rights, email <Mail email={SUPPORT_EMAIL} />. We
            respond without undue delay and within one month. Where necessary
            because of complexity or the number of requests, we may extend this
            by up to two further months; we tell you within the first month and
            explain why. We may request proportionate information to verify
            your identity if we have reasonable doubts. For Customer Data
            processed on behalf of a business using Growth Rocket, contact that
            business; we assist it under the DPA.
          </p>
          <p>
            You can complain to a data protection authority, especially in the
            EU country where you live or work, or where you believe a breach
            occurred. In the Netherlands, this is the Autoriteit
            Persoonsgegevens:{" "}
            <ExternalLink href="https://www.autoriteitpersoonsgegevens.nl" />.
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Our website uses analytics and advertising-measurement technologies
            only with the required consent. You can change or withdraw that
            consent through{" "}
            <CookieSettingsButton>Cookie settings</CookieSettingsButton>. The
            Hub&apos;s authentication and functional storage are separate from
            website analytics. The customer review form records its first
            opening without an email pixel, cookies or other device storage for
            that record, and without recording IP or device details in that
            record; separate server request logs may contain IP addresses. Our
            customers&apos; notices explain their review processing. See our
            Cookie Policy at{" "}
            <Link href="/cookie-policy" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/cookie-policy
            </Link>
            . Our cookie banner lets you accept all, reject all or choose per
            category, and rejecting is as easy as accepting. Until you choose,
            and if you reject, no analytics or advertising tools load. The Hub
            uses only strictly necessary cookies, plus a cookie that remembers
            your sidebar setting and local storage that keeps unsaved blog
            drafts. It uses no analytics or advertising technologies and shows
            no cookie banner.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We protect personal data with appropriate technical and
            organisational measures, including:
          </p>
          <Ul
            items={[
              "EU-based primary hosting and file storage, with global processing and remote access as explained in section 5",
              "encrypted connections",
              "hashed passwords",
              "Account-based separation in a shared database, with checks that restrict customer requests to the relevant account's records",
              "Access limited to authorised people according to their role, with confidentiality commitments, access reviews and protected backups. Provider accounts use two-factor authentication; the Hub and admin dashboard do not currently offer two-factor sign-in.",
            ]}
          />
          <p>
            Our DPA Annex II describes the service&apos;s security measures,
            including encryption in transit and the systems with encryption at
            rest. It does not claim that every log, queue or cache has
            additional encryption at rest. See Annex II of our DPA at{" "}
            <Link href="/dpa" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/dpa
            </Link>
            .
          </p>
        </Section>

        <Section title="10. Children">
          <p>
            Growth Rocket is offered to businesses and is not intended as a
            service for children under 16. This does not mean that
            customer-supplied content or enquiries can never contain
            children&apos;s data; the customer is responsible for its lawful
            processing, and we handle it under the DPA.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We publish updates here and change the date and version above. We
            explain material changes affecting you and provide information
            about any new purpose before the further processing begins. For
            material changes, we notify customers by email at their designated
            notice email address at least one calendar month before the change
            takes effect, and we show a notice on our website. This policy is a
            notice, not permission to change agreed processing or commercial
            terms. Changes to the Contract, Terms and DPA follow their
            respective agreed procedures, including advance notice and
            termination rights where applicable. Where consent is required for
            a new use, we obtain it before that use begins.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Parashift Technologies B.V., World Trade Center, Prinses
            Margrietplantsoen 33, 2595 AM &apos;s-Gravenhage, Netherlands ·{" "}
            <Mail email={SUPPORT_EMAIL} /> · <Phone number="+31 85 744 4176" />
          </p>
        </Section>
      </LegalDocument>
    </main>
  );
}
