import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import {
  B,
  LegalHero,
  LINK_CLASS,
  Mail,
  Section,
  Sub,
  Table,
  Ul,
} from "../components/legal/LegalContent";

import LegalDocument from "../components/legal/LegalDocument";
const TITLE = "Data Processing Agreement — Growth Rocket";
const DESCRIPTION =
  "Read the Growth Rocket Data Processing Agreement: how we process personal data on your behalf, the security measures we apply and our sub-processors.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/dpa",
  },
};

const SUPPORT_EMAIL = "support@getgrowthrocket.com";

export default function DataProcessingAgreementPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/dpa",
          "Data Processing Agreement - Growth Rocket",
          DESCRIPTION,
        )}
      />
      <LegalHero title="Data Processing Agreement" />

      {/* Content */}
      <LegalDocument tocHeading="Contents">
          <Section title="Annexure A — Data Processing Agreement">
            <p>
              This Data Processing Agreement (DPA), including Annexes
              I&ndash;III, is Annexure A to the Customer Contract between{" "}
              <B>Parashift Technologies B.V.</B> (Growth Rocket, we or us) and
              the Customer named in that agreement (you).
            </p>
            <p>
              This DPA sets out how we process personal data on your behalf when
              we provide the Services under the Agreement. It describes the
              roles of each party, the data we process, the security measures we
              apply, and the rules that govern our work for you.
            </p>
            <p>
              Days include weekends and holidays unless we expressly say
              otherwise. Working Days have the meaning given in the Agreement.
              Hours run continuously, including outside business hours. Send
              routine requests to <Mail email={SUPPORT_EMAIL} />. For security
              incidents, use the contacts in clause 9.
            </p>
          </Section>

          <Section title="Definitions">
            <p>
              In this DPA, the following terms have the meanings below. Terms not
              listed here, such as personal data, processing, controller,
              processor and personal-data breach, have their GDPR meanings.
            </p>
            <p>
              <B>Agreement:</B> the Customer Contract between Growth Rocket and
              you, under which we provide the Services.
            </p>
            <p>
              <B>Annex:</B> an annex to this DPA: Annex I (processing details),
              Annex II (security and support) or Annex III (sub-processors).
            </p>
            <p>
              <B>Customer Data:</B> personal data we handle on your behalf to
              provide the Services, as described in clause 1 and Annex I.
            </p>
            <p>
              <B>EEA:</B> the European Economic Area.
            </p>
            <p>
              <B>GDPR:</B> Regulation (EU) 2016/679.
            </p>
            <p>
              <B>Hub:</B> the Growth Rocket web application through which you
              access and manage the features provided under the Agreement.
            </p>
            <p>
              <B>Notice Email Address:</B> the address recorded in your
              Agreement for contractual notices, or a replacement address you
              have notified to us. We also use it for personal-data breach
              notifications under clause 9.
            </p>
            <p>
              <B>Privacy Policy:</B> our privacy policy, as referred to in clause
              12.
            </p>
            <p>
              <B>Services:</B> the services we provide to you under the
              Agreement.
            </p>
            <p>
              <B>Standard Contractual Clauses:</B> the European
              Commission&rsquo;s standard contractual clauses for transfers of
              personal data outside the EEA, as applicable under clause 6.
            </p>
            <p>
              <B>Sub-processor:</B> a provider that handles Customer Data for us
              as part of delivering the Services. Clause 5 sets out how
              Sub-processors are authorised, and Annex III lists them.
            </p>
          </Section>

          <Section title="1. Our roles and what this DPA covers">
            <p>
              You are the controller of the personal data we handle for you to
              provide the agreed services. This means you decide why and how that
              data is used. We act as your processor, handling it on your behalf.
              Customer Data includes personal data about the people described in
              Annex I.
            </p>
            <p>
              This DPA covers Customer Data throughout the service: onboarding,
              preparing and building your website, preparing content, testing,
              publishing, updates and support. It also covers this work before
              your website goes live or your subscription starts.
            </p>
            <p>
              Annex I explains what data we process, what we do with it and why.
            </p>
            <p>
              We act as a separate controller only when we decide our own
              purposes and means of processing, as explained in clause 12 and our
              Privacy Policy. This does not change our responsibilities as your
              processor when we handle data for you.
            </p>
          </Section>

          <Section title="2. Your instructions">
            <p>
              We process Customer Data only on your recorded instructions. These
              include the Agreement, this DPA, authorised settings and actions in
              Growth Rocket, and recorded onboarding submissions, content
              requests, launch approvals and support requests from you or people
              you authorise. Send requests from your registered email address to{" "}
              <Mail email={SUPPORT_EMAIL} /> or through the designated support
              system. Tell us who may give instructions and keep that information
              current. We may check their authority before acting. We may also
              process data where EU or EU Member State law requires it. In that
              case, we tell you beforehand unless that law prohibits notice for
              important public-interest reasons.
            </p>
            <p>
              If we believe an instruction breaks the GDPR or other EU or EU
              Member State data-protection law, we tell you immediately. We pause
              that instruction while asking you to clarify it or give lawful
              revised instructions. We avoid unnecessarily interrupting other
              processing.
            </p>
          </Section>

          <Section title="3. Confidentiality">
            <p>
              Everyone we authorise to process Customer Data must keep it
              confidential under a contract or a legal duty.
            </p>
          </Section>

          <Section title="4. Security">
            <p>
              We use technical and organisational safeguards appropriate to the
              risks, as required by Article 32 GDPR and described in Annex II. We
              may update them without reducing the overall protection of
              Customer Data. Changes to expressly agreed safeguards or to the
              agreed purposes or scope of processing must be made in writing
              under the procedure in clause 15. We keep a dated record of
              significant updates and make the current description available to
              you.
            </p>
          </Section>

          <Section title="5. Sub-processors">
            <Ul
              items={[
                "Sub-processors are providers that handle Customer Data for us as part of delivering your services. You give us general written authorisation to use those listed in Annex III, subject to this clause. Annex III records the list accepted with this DPA. We maintain the current list, version date and change history at getgrowthrocket.com/sub-processors. Adding a provider to that page does not, by itself, authorise its use.",
                "Before adding or replacing a sub-processor, we give you at least 45 calendar days’ written notice at your designated notice email address and update the list. The notice identifies the provider’s legal entity, service, processing activities, relevant countries and safeguards for international transfers, with enough information for you to assess the change. You do not need to subscribe separately to receive these notices. Keep your notice contact current.",
                "You may object within that notice period on reasonable data-protection grounds. We discuss your concerns and seek a reasonable solution before the new provider processes your Customer Data. If no solution is agreed, you may terminate the affected service before the change takes effect. If the affected service cannot reasonably be separated, you may terminate the inseparable service package. We refund prepaid subscription fees for the unused period after termination within 14 calendar days of termination. The refund is calculated proportionately for the terminated service, or for the whole package if the inseparable package is terminated. Future instalments for that period stop and do not become payable early. Fees properly due for services already supplied remain payable. This specific remedy takes priority over ordinary voluntary early-departure and no-refund terms. Data return and deletion follow clause 10.",
                "We require each sub-processor, by written contract, to follow the same data-protection duties that apply to its work under this DPA, including security requirements. We remain fully responsible to you for its compliance. We also keep details of relevant further suppliers and provide the information you need to assess them on request, while protecting confidential information.",
              ]}
            />
          </Section>

          <Section title="6. Transfers outside the EEA">
            <p>
              Annex III lists where Customer Data is stored, processed or
              accessed, including access from outside the EEA, and the safeguards
              used for those transfers. We make transfers outside the EEA only
              under your documented instructions, including arrangements
              authorised under this DPA, or as required by EU or Member State law
              in accordance with clause 2. Each transfer must meet Chapter V
              GDPR. If a transfer arrangement is no longer legally valid, we put a
              lawful alternative in place before continuing or pause the affected
              transfer.
            </p>
          </Section>

          <Section title="7. Requests from individuals">
            <Ul
              items={[
                "We provide the tools described in Annex II to help you handle requests about personal data, including access, export, correction, deletion, restrictions on use and objections. The tools may not cover every relevant record or copy.",
                "Where further help is needed, we acknowledge your request within 2 calendar days and help without unnecessary delay, normally within 7 calendar days or sooner where reasonably needed to meet a legal deadline. You decide how to respond and remain responsible for replying to the individual.",
                "If someone contacts us directly about their Customer Data, we forward the request to you without unnecessary delay. We do not answer the request ourselves.",
              ]}
            />
          </Section>

          <Section title="8. Other help">
            <p>
              We help you meet your duties under Articles 32&ndash;36 GDPR,
              taking account of the processing and the information available to
              us. This includes security, breach notifications, assessments of
              risks to people&rsquo;s data-protection rights (data-protection
              impact assessments), and consultation with the regulator before
              processing where required.
            </p>
          </Section>

          <Section title="9. Personal-data breaches">
            <Ul
              items={[
                <>
                  We notify you of a personal-data breach affecting Customer Data
                  without unnecessary delay and no later than 24 hours after we
                  become aware of it, without waiting for a complete
                  investigation. We notify your designated notice email address
                  and any agreed security contact. For security incidents and
                  urgent follow-up, contact <Mail email={SUPPORT_EMAIL} />.
                </>,
                "In the initial notice and updates, we provide the following as it becomes available, without unnecessary delay: what happened; the types and approximate numbers of people and records affected; the name and contact details of our data protection officer or other contact who can provide more information; the likely consequences; and the steps taken or proposed to deal with the breach and reduce its effects.",
                "We record the incident and work with you to assess and contain it and support legally required notifications. These duties apply outside routine support hours too.",
              ]}
            />
          </Section>

          <Section title="10. When the Agreement ends">
            <Ul
              items={[
                "For 30 calendar days after the Agreement expires or ends, you have export-only access to retrieve Customer Data through the Hub. Sign-in ends after day 30. You may request a secure full export from us until the scheduled deletion date; we provide it within 14 calendar days. Retrieval is free even if fees remain unpaid. We preserve data needed to complete a timely export request until delivery. You are responsible for keeping your issued invoices and other records required by your own tax law.",
                "We notify you of the retrieval deadline and planned deletion date when the Agreement ends, and send a final reminder on day 23, at least seven calendar days before the retrieval window closes. If the reminder is late, the deletion date moves back by the same delay.",
                "We retain the account’s Customer Data until the scheduled deletion date and delete the account and remaining Customer Data from live systems on day 60 after termination, not before, subject to the late-reminder extension, timely-export protection and exceptions in this clause. This includes your quotes, invoices and PDFs. You may request an earlier return or deletion of specified Customer Data in writing. Before early deletion, we verify the instruction by confirming it through your account’s login email address. Mandatory law continues to apply.",
                "Mailbox copies and routine record retention follow Annex I; support tickets follow clause 12. Customer Data within them remains subject to our processor duties and applicable deletion instructions.",
                "Database restore history lasts seven calendar days. File backups, server backups and manual snapshots are deleted or expire within 30 calendar days after deletion from live systems, normally by day 90 after the Agreement ends. These periods move with any lawful extension of the live deletion date. Backups remain protected and are not used for normal operations. If restored, deletion instructions and restrictions are reapplied before normal processing resumes. Google Workspace recovery and residual copies follow the separate provider process described in Annex I.",
                "Where EU or Member State law requires us to preserve particular Customer Data, we identify the records and applicable law unless disclosure is prohibited. We protect those records, use them only for the required purpose and delete them when the requirement ends. Our own accounting and contract records, and necessary evidence for our own legal disputes, are handled under clause 12. This does not give us a general right to retain your customer database.",
                "On request, we confirm completed return or deletion in writing, identify any records we must still keep by law, and state when remaining backups will expire.",
                "Returning data does not transfer ownership of our platform code, design templates or backend systems. Your contractual rights to your content, final copy and domain remain unchanged.",
                "Any wider rights or longer periods for switching providers, exporting or retrieving data required by law take priority, including under the EU Data Act where it applies.",
              ]}
            />
          </Section>

          <Section title="11. Information and audits">
            <Ul
              items={[
                "On request, we give you the information needed to show that we meet this DPA, including its annexes and our sub-processors’ data-protection terms. You may first use relevant independent reports and certifications if they give enough assurance.",
                "You may also carry out an audit, including an inspection, yourself or through an independent auditor who must keep information confidential. Audits must be proportionate to their purpose. Routine audits normally take place once a year, with at least 30 days’ notice, at your cost.",
                "Extra audits or shorter notice are allowed where reasonably justified by a breach, credible signs of noncompliance or a regulator’s request.",
                "We agree reasonable arrangements with you to protect security, confidentiality and other customers’ data and to minimise disruption. Those arrangements must not prevent effective checks or access by the competent authorities.",
                "We use sub-processors’ certifications and reports as audit evidence, share relevant evidence with you, and seek further information or checks where needed.",
              ]}
            />
          </Section>

          <Section title="12. When we use data for our own purposes">
            <p>
              Processing solely to provide or secure your service remains covered
              by this DPA. Where we use personal data for separate purposes that
              we decide, we act as controller and meet the related
              data-protection duties. Our{" "}
              <Link href="/privacy-policy" className={LINK_CLASS}>
                Privacy Policy
              </Link>{" "}
              explains those uses, their legal basis, retention periods and
              individuals&rsquo; rights.
            </p>
            <Ul
              items={[
                <>
                  <B>Bounce records and opt-outs.</B> When an address
                  permanently bounces or generates a complaint, we record the
                  delivery failure and place the address on a platform-wide
                  suppression list so that our customers do not keep sending
                  messages to it. This suppression list is maintained by Growth
                  Rocket as a separate controller for email-delivery protection,
                  ordinarily for three years after the last bounce.
                  Review-request opt-outs apply only to the relevant customer
                  account and stop review requests and reminders; a bounce is
                  different from a review or marketing opt-out.
                </>,
                <>
                  <B>Activity, security and support records.</B> For our
                  separate account administration, security and support
                  purposes, we rely on legitimate interests, subject to the
                  required assessment and individuals&rsquo; rights. Sign-in and
                  password-change logs are kept for 180 days, other account
                  activity logs for 400 days, and server request logs for 14
                  days. We keep our own invoices and payment records for seven
                  years to meet applicable accounting duties. Client names and
                  emails are removed from financial activity entries after 400
                  days; legally required accounting records are kept separately.
                  Evidence of acceptance of our Terms and acknowledgement of our
                  Privacy Policy is kept for the account&rsquo;s life plus five
                  years. Acknowledging the Privacy Policy does not itself
                  constitute consent to processing.
                </>,
              ]}
            />
            <p>
              Support tickets, messages and attachments are deleted three months
              after closure. Customer Data supplied within tickets remains subject
              to this DPA where processed on your behalf. For our own legal
              dispute, we retain only necessary evidence: the relevant ticket
              stays open and its email thread is saved separately, with access
              restricted to that purpose. We delete both when the dispute is
              over. This is not a general exception for unrelated Customer Data.
            </p>
            <Ul
              items={[
                <>
                  <B>Anonymous statistics.</B> Statistics are anonymous only when
                  people cannot reasonably be identified; replacing names with
                  codes is not enough. Creating statistics from Customer Data
                  must follow the authorised purposes and data-protection duties
                  that apply.
                </>,
              ]}
            />
          </Section>

          <Section title="13. Your responsibilities">
            <p>You are responsible for:</p>
            <Ul
              items={[
                "having a lawful basis under Article 6 GDPR and, where necessary, satisfying Article 9 requirements for special-category data or Article 10 requirements for criminal-offence data; supplying only Customer Data within the agreed purposes; and keeping copies of invoices you issue for as long as your own tax law requires",
                "publishing a privacy notice and, where your country requires one, an imprint (legal business information) on your website",
                "making sure review requests and other customer messages have the required lawful basis, privacy notices and, where needed, consent or other permission under electronic-communications law; respecting opt-outs and using tracking only when the required conditions are met",
                "keeping your login details secure",
              ]}
            />
          </Section>

          <Section title="14. Professional secrecy">
            <p>
              The service is intended for enquiries and contact information, not
              medical records, diagnoses or treatment histories. Health-business
              websites display: &ldquo;Please don&rsquo;t include medical details
              here. We&rsquo;ll discuss them with you in person.&rdquo; If health
              details are nevertheless submitted, you can edit or delete them in
              the dashboard or instruct us in writing to delete them. Before
              intentionally sharing information covered by professional secrecy,
              tell us the applicable obligations so permitted use, access and
              safeguards can be agreed in writing. Authorised personnel and
              relevant sub-processors must meet the applicable confidentiality
              duties, including section 203 of the German Criminal Code where
              relevant. On request, we explain authorised access and commitments.
              Intended criminal-offence processing requires separate written
              agreement.
            </p>
          </Section>

          <Section title="15. Duration, liability and amendments">
            <p>
              This DPA must be agreed before we first process Customer Data,
              including during onboarding, and applies for as long as we process
              it, including retained copies and backups after the Agreement ends.
            </p>
            <p>
              This DPA takes priority over conflicting data-protection terms in
              the Agreement or on our website. Applicable Standard Contractual
              Clauses take priority where required by their terms.
            </p>
            <p>
              Subject to the exceptions below, Growth Rocket&rsquo;s total
              liability to you under the Agreement and this DPA combined is
              limited to:
            </p>
            <Ul
              items={[
                "€100 for all events during onboarding before the subscription starts. If the subscription never starts, this limit also covers subsequent processing and deletion of the onboarding data.",
                "The subscription fees paid or due for the relevant subscription year, for all events during that year. Events after the subscription ends, including while Customer Data is retained or deleted, count towards the final subscription year’s limit and do not create a new limit.",
              ]}
            />
            <p>
              These are shared limits, not separate limits for each claim or
              document. Related events with the same underlying cause count
              towards the period in which the first event occurred. A claim made
              later remains subject to that period&rsquo;s limit. Completion of
              deletion does not extinguish claims arising from earlier events.
            </p>
            <p>
              The limits do not reduce agreed refund obligations. They do not
              apply to fraud, deliberate misconduct or liability that applicable
              law does not allow us to limit. They do not restrict
              individuals&rsquo; statutory data-protection rights, either
              party&rsquo;s mandatory data-protection duties, or liability under
              applicable Standard Contractual Clauses where a restriction would
              contradict those clauses. The Agreement&rsquo;s other liability
              terms continue to apply.
            </p>
            <p>
              If Growth Rocket discontinues the service, we refund all prepaid
              subscription fees for unused days after termination. No further
              subscription fees are payable for those unused days.
            </p>
            <p>
              This DPA replaces any earlier DPA between the parties for the
              services covered by the Agreement. Amendments must be in writing and
              follow the procedure below.
            </p>
            <p>
              Growth Rocket may reasonably update this DPA, including Annexes
              I&ndash;III to reflect changes in law, security or how the agreed
              services operate. Updates cannot change the agreed core services,
              contract tenure, price protection or liability caps,
              retrospectively change accrued rights, or override mandatory rights
              or applicable Standard Contractual Clauses.
            </p>
            <p>
              We email the revised wording or a downloadable copy, a summary and
              the effective date to your designated notice email address at least
              one calendar month before an update takes effect. Publishing a new
              website version alone does not amend the agreed version.
            </p>
            <p>
              For a future substantive change, you may email{" "}
              <Mail email={SUPPORT_EMAIL} /> before the effective date to end the
              Agreement immediately before the change takes effect, without an
              early-departure charge. We refund prepaid subscription fees for all
              unused days after termination within 10 Working Days; future fees
              for that period stop. Amounts properly due for services already
              supplied remain payable. Ordinary voluntary early-departure and
              no-refund rules do not restrict this right.
            </p>
            <p>
              If you do not exercise that termination right, a permitted update
              notified under this procedure takes effect on its stated date
              without a fresh signature. This procedure does not permit changes to
              the signed commercial terms identified above.
            </p>
            <p>
              Sub-processor changes follow clause 5, including its
              45-calendar-day notice and objection procedure. Routine security
              updates permitted by clause 4 follow that clause; changes to
              expressly agreed safeguards or processing purposes or scope follow
              this clause. Return and deletion after termination follow clause
              10.
            </p>
            <p>
              Growth Rocket retains unchanged copies of accepted versions,
              acceptance records and subsequent update notices and versions.
              Archived copies are available to you on request.
            </p>
          </Section>

          <Section title="Annex I — Processing details">
            <Table
              head={["Item", "Description"]}
              rows={[
                [
                  "Categories of individuals",
                  "Your clients and prospective clients; people making enquiries, bookings or reviews; recipients of your messages, quotes and invoices; website visitors; and people identified in content supplied or created for you, including staff, contractors and testimonial providers.",
                ],
                [
                  "Categories of personal data",
                  "See “Personal data processed” below.",
                ],
                [
                  "Special categories and criminal-offence data",
                  "The service does not request health or other special-category data. Free-text fields and service names may nevertheless reveal it. Health-business enquiry forms warn users not to include medical details. You may edit or delete such details or instruct us in writing to delete them. You must have the applicable Article 6 lawful basis and Article 9 condition. Annex II safeguards apply; any additional safeguards needed for intended processing must be agreed first. Criminal-offence processing requires separate written agreement and the applicable Article 10 conditions. Clause 14 applies to professional secrecy.",
                ],
                [
                  "Nature of the processing",
                  "Receive, store, organise, use and display Customer Data to provide the Growth Rocket Hub and customer website, including onboarding, website and content production, testing, hosting, updates and support; send emails, generate quotes and invoice PDFs, export data and delete it as described in this DPA.",
                ],
                [
                  "Purpose",
                  "Provide the services agreed with you, including preparation before your website goes live or your subscription starts.",
                ],
                [
                  "Duration",
                  "From the first processing of Customer Data, including onboarding, until return and deletion under clause 10 are complete.",
                ],
                ["Frequency", "Continuous"],
                ["Retention", "See “Retention” below."],
              ]}
            />

            <Sub>Personal data processed</Sub>
            <Table
              head={["Where it comes from", "What is stored"]}
              rows={[
                [
                  "Contact / enquiry form on the customer’s website",
                  "Name (required), email, phone, business name, industry, service area, website status and address, message, service of interest and tags.",
                ],
                [
                  "Booking form, including the free consultation",
                  "Name (required), email, phone, selected service, date, time, notes and booking status, including no-shows.",
                ],
                [
                  "Contacts from enquiries and bookings, editable by you",
                  "Name, email, phone, business name, postal address, industry, time zone, your notes and tags, and the number and dates of bookings and enquiries.",
                ],
                [
                  "Quotes and invoices",
                  "Client and business name, email, phone, VAT ID and address; line items and amounts; recorded payments (date, method, amount, reference and note); PDFs and sending records. When you manually mark a quote as accepted, we store the accepter’s name, email and acceptance date. We do not track quote or invoice opening.",
                ],
                [
                  "Review requests",
                  "Name, email, sending and reminder records, and the date and time the review form is first opened. This opening record is kept with the review request. It uses no email pixel, cookies or other storage on the visitor’s device and records no IP address or device details. Separate server request logs are described below. The customer-website privacy notice explains this processing.",
                ],
                [
                  "Reviews",
                  "Rating, comment, display name, email and your reply. Published reviews show the rating, comment, name (or “Anonymous” if blank), reply and date; never the reviewer’s email.",
                ],
                [
                  "Review opt-outs",
                  "Email address and optional reason for opting out.",
                ],
                [
                  "Emails to clients",
                  "Queued copies of enquiry and booking confirmations, booking updates and calendar files, quotes and invoices with PDF attachments, review requests, reminders and replies.",
                ],
                [
                  "Website and blog content",
                  "Personal data in customer-supplied or created website and blog content and working files, including names, photos, team biographies, testimonials and blog author names or biographies.",
                ],
                [
                  "Website visitors",
                  "IP address, browser/device information, requested page and time in request logs; IP addresses in temporary rate-limit counters lasting 1 minute to 1 hour.",
                ],
              ]}
            />

            <Sub>Retention</Sub>
            <Table
              head={["Data", "How long it is kept"]}
              rows={[
                [
                  "Customer records and linked data",
                  "Customer records (contacts, enquiries, bookings, quotes, invoices, payments, reviews, review requests and review opt-outs) remain until you delete them or the end-of-contract deletion procedure in clause 10. A dashboard deletion hides a record immediately and ordinarily purges it 30 calendar days later; records still linked to retained documents, such as a contact on an issued invoice, stay hidden while that link exists. The per-person privacy erase tool acts immediately, subject to the specific exceptions described in Annex II. Clause 10 sets the post-termination deletion date and exceptions.",
                ],
                [
                  "Copies of emails to clients, in our email queue",
                  "30 calendar days after sending.",
                ],
                [
                  "Copies of emails to clients, in our Google Workspace mailbox",
                  "90 calendar days from arrival in the support mailbox, including copies of outgoing platform emails. Automatic deletion bypasses Trash. Earlier deletion is available by deleting the message and emptying Trash. No Google Vault retention rule applies. Google administrators may recover permanently deleted messages for up to 25 days after removal from Trash; residual provider copies follow Google’s deletion process, rather than a promise of immediate deletion from every system. Necessary legal-dispute evidence is kept separately under clause 12. Valid erasure instructions and clause 10 continue to apply.",
                ],
                [
                  "Request logs (with IP address)",
                  "14 calendar days from creation, subject to any justified exceptions under clause 12.",
                ],
                [
                  "Rate-limit counters (with IP address)",
                  "1 minute to 1 hour",
                ],
                ["Invoice export files", "7 calendar days from generation."],
                [
                  "Backups and other temporary copies",
                  "Neon database restore history: seven calendar days. R2 file backups: nightly, with deleted live files removed within 30 days. Hostinger server backups: the two most recent weekly copies. Manual snapshots also expire within 30 days of live deletion. Export records: 30 days after file expiry. n8n execution data: 14 days. Cached public website content: up to 20 minutes. Other retention periods are stated in this table and clause 12. Clause 10 governs contract-end deletion; Google Workspace residual copies follow the mailbox row above.",
                ],
              ]}
            />
          </Section>

          <Section title="Annex II — Security and support">
            <Table
              head={["Area", "Measure"]}
              rows={[
                [
                  "Location",
                  "Hostinger Server A and Server B and the Neon production database are in Frankfurt, Germany. Cloudflare R2 file storage uses EU-jurisdiction buckets. Annex III covers global provider processing and remote access from India.",
                ],
                [
                  "Encryption in transit",
                  "HTTPS protects the Hub, API, admin dashboard, customer websites and preview addresses, with automatically renewed certificates. Cloudflare provides network protection for getgrowthrocket.com addresses. Database connections use TLS.",
                ],
                [
                  "Encryption at rest",
                  "Neon encrypts the database and its restore history with AES-256, with keys held in AWS Key Management Service. Cloudflare R2 encrypts objects and metadata with AES-256-GCM. Google Workspace encrypts stored email. Logs, Redis caches and queues, and the self-hosted n8n database on Server A have no additional encryption at rest; their access is restricted by server controls.",
                ],
                [
                  "Passwords",
                  "Passwords are stored only as Argon2id hashes (19 MiB memory, two passes, one lane), never as readable text. All legacy bcrypt hashes have been migrated. New passwords must have at least eight characters.",
                ],
                [
                  "Sessions",
                  "Access tokens expire after 15 minutes. Sessions expire after seven days of inactivity. Logging out immediately invalidates that session and its issued access tokens. Changing or resetting a password immediately invalidates every session and its issued access tokens.",
                ],
                [
                  "Tokens",
                  "Session tokens, password-reset tokens, review-link tokens and website-editor codes are stored as SHA-256 hashes. Password-reset links are single-use and expire after one hour; website-editor codes work once and expire after 60 seconds; preview links expire after 30 minutes.",
                ],
                [
                  "Login protection",
                  "Logins are limited to 10 attempts per 15 minutes per email address across the Hub and admin dashboard. Password resets are limited to three requests per 15 minutes and sign-ups to two per hour per email address. Additional per-IP limits apply. The Hub and admin dashboard do not offer two-factor sign-in.",
                ],
                [
                  "Separation between customers",
                  "Customers share one database with account-based separation. Each customer request is checked against that account, and its queries are restricted to that account’s records. The admin dashboard and background jobs (email sending, PDFs and clean-up) work across accounts only for their defined tasks.",
                ],
                [
                  "Separate admin access",
                  "The admin dashboard has a separate staff login and shows no client contact, enquiry, booking, quote, invoice, payment or review records. It may show aggregate counts, activity logs and delivery logs that include client email addresses. Growth Rocket staff cannot sign in as a customer.",
                ],
                [
                  "People",
                  "Production access is limited to named engineers in the EU and India with individual accounts, role-based need and signed confidentiality commitments. Provider accounts use two-factor login; the Hub and admin dashboard use passwords and rate limits. Access is reviewed every three months and removed the same day a person leaves. New team members receive training on approved tools, data handling and incident reporting. Work laptops are encrypted, lock automatically and update automatically; no local Customer Data copies are kept. Lost or stolen devices are reported immediately and their access revoked. Suppliers are checked before use for data-protection terms, processing locations and security, and reviewed annually. Both servers send uptime and error alerts to the incident owner. There is no continuously staffed 24/7 team; the owner acts promptly on alerts. Clause 9’s 24-hour notification commitment runs from awareness, including weekends and holidays. Updates are applied monthly, critical fixes within seven days, and major releases receive a security review. Development and testing use a separate database without production personal data.",
                ],
                [
                  "Activity log",
                  "Logins (including failed attempts), logouts, password changes and resets, and key account actions are recorded with time, IP address and browser. Customers can view their account activity log. Retention periods and removal of client identifiers from financial activity entries follow clause 12, “Activity, security and support records”.",
                ],
                [
                  "Logs",
                  "Request bodies are not logged. Authorisation headers, cookies, secrets and single-use codes in logged URLs are masked. Server request logs can contain IP addresses and page addresses. Retention follows Annex I, “Retention — Request logs (with IP address)”. Only authorised engineers on the production access list can access these logs.",
                ],
                [
                  "Files",
                  "Cloudflare R2 uses EU-jurisdiction storage. The public bucket holds website and blog images, logos and brand assets. Private, access-controlled storage holds support attachments, quote/invoice PDFs and invoice exports. Support references are recorded in Neon; support staff use the authenticated admin dashboard. Self-hosted n8n on Server A processes support email. Customers download private documents through authenticated access; authorised recipients may receive quote/invoice PDFs as email attachments. A separate EU R2 bucket holds file backups under the controls below.",
                ],
                [
                  "Abuse protection",
                  "Enquiry and booking forms: 10 requests per minute and 120 per hour per IP address. Review form: 20 per minute and 200 per hour. Quote and invoice sending: 60 per hour per user. PDF downloads: 60 per 15 minutes per user. Full account export: five per hour per user.",
                ],
                [
                  "Email hygiene",
                  "Addresses that permanently bounce or complain are blocked platform-wide for client emails; the exception is password-reset email. Review-request opt-outs apply only to the customer account concerned. Growth Rocket maintains bounce-suppression data as controller for three years after the last bounce (clause 12).",
                ],
                [
                  "Backups",
                  "Neon provides seven days of point-in-time database recovery in Frankfurt. Hostinger backs up each server weekly and keeps the two most recent copies; manual snapshots may also be taken before updates. R2 files are copied nightly using rclone to a separate EU R2 bucket with dated versions. Growth Rocket manages backup access; live-system credentials cannot access the backup bucket. Deleted live files are removed from backups within 30 days. Server backups and manual snapshots follow the same maximum 30-day period after live deletion. Restore tests take place at setup, at least annually and after configuration changes; dates and results are recorded. No fixed recovery-time or recovery-point target is agreed. Server A runs the API, Hub, admin dashboard, Redis/BullMQ and n8n with its own PostgreSQL database; Server B hosts customer websites. Restored data remains subject to clause 10. Google Workspace recovery follows Annex I.",
                ],
                [
                  "Supporting your obligations",
                  "The Hub provides per-person JSON export and erase tools, Excel exports of enquiries and bookings, invoice-workbook export and full account export. The per-person tool uses an email address. Erasure anonymises contacts, enquiries and bookings; removes quotes not converted to invoices and their PDFs; hides or anonymises reviews; removes review-request associations and unsent requests; deletes covered email copies; and replaces the email address in the activity log with “[erased]”. The automated tool excludes issued invoices and originating quotes, review opt-outs and the platform-wide bounce entry. These exclusions do not override applicable erasure duties: support handles records outside the tool, including issued invoices and linked records on a valid instruction unless lawful retention applies. Support also handles phone-only records, tickets, logs and mailbox copies. Acknowledgement and assistance deadlines follow clause 7. Mailbox recovery follows Annex I. During suspension, privacy tools and exports remain available; clause 10 governs contract-end deletion.",
                ],
                [
                  "Suspension",
                  "An account may be suspended for non-payment, a serious breach of the Terms or to prevent harm. Suspension immediately ends ordinary sessions, takes websites, previews and review links offline, and stops client emails. Export-only access and privacy tools remain available. If the cause is resolved within 30 calendar days, the account is restored; otherwise the Agreement ends automatically on day 30. Clause 10 then provides another 30 days of export-only access, followed by assisted export until the live deletion deadline. Live data is retained, with full export available on request, until deletion on day 90 after suspension began; backups expire within 30 days after live deletion, normally by day 120, subject to clause 10’s exceptions and separate mailbox process. Suspension alone does not authorise deletion.",
                ],
              ]}
            />
          </Section>

          <Section title="Annex III — Sub-processors">
            <Table
              minWidth={900}
              head={[
                "Sub-processor",
                "Service",
                "Personal data involved",
                "Processing locations",
                "Transfer safeguards",
              ]}
              rows={[
                [
                  "Hostinger International Ltd. (Cyprus)",
                  "Server A (Hostinger VPS, KVM4, Frankfurt): API, Hub, admin dashboard, Redis/BullMQ queues and n8n with its PostgreSQL database. Server B (Hostinger VPS, KVM2, Frankfurt): customer websites. Weekly server backups and manual snapshots.",
                  "Platform data and customer-website data processed in service delivery; server logs.",
                  "Both servers: Frankfurt, Germany. Other remote access or support is governed by Hostinger’s applicable DPA.",
                  "Primary hosting is in Frankfurt, Germany. Hostinger’s DPA includes EU Standard Contractual Clauses for applicable processing outside the EEA. EU hosting does not exclude relevant non-EEA remote processing.",
                ],
                [
                  "Neon, LLC (USA)",
                  "Managed Neon PostgreSQL production database, running on AWS eu-central-1 (Frankfurt).",
                  "All stored records",
                  "Primary database: Frankfurt, Germany (AWS eu-central-1). Other support/remote processing under Neon’s DPA.",
                  "Neon’s accepted data-processing terms include EU Standard Contractual Clauses for applicable transfers outside the EEA.",
                ],
                [
                  "Cloudflare, Inc. (USA)",
                  "Cloudflare R2 EU-jurisdiction file storage and a separate EU backup bucket; DNS, domain management and network protection; Pages template demonstrations containing no Customer Data.",
                  "Uploaded files and PDFs, file-access IP addresses and request details; traffic processed for DNS and network protection. Template demos contain no Customer Data.",
                  "Cloudflare R2 buckets: European Union. DNS, network protection and Pages: Cloudflare’s global network.",
                  "Cloudflare, Inc. is certified under the EU–US Data Privacy Framework; its DPA includes the EU Standard Contractual Clauses as applicable.",
                ],
                [
                  "Google Cloud EMEA Limited (Ireland)",
                  "Google Workspace: outbound platform email and central support mailbox.",
                  "Recipient names and email addresses, messages, attached quote/invoice PDFs, and support emails and attachments.",
                  "Google’s global processing network; no region-specific Google Workspace storage location is designated.",
                  "Google’s Cloud Data Processing Addendum includes EU Standard Contractual Clauses; Google LLC is certified under the EU–US Data Privacy Framework.",
                ],
                [
                  "Parashift Technologies Private Limited (India), parent company of Parashift Technologies B.V., 205, Pioneer Industrial Estate, Subash Road, Opp Caves Road, Jogeshwari East, Mumbai, Maharashtra 400060, India",
                  "Development, maintenance and technical support, using remote access where necessary.",
                  "Platform Customer Data accessible remotely only as needed to operate, maintain, support or troubleshoot the service, address incidents or meet a legal requirement.",
                  "Customer Data is stored in the EU; authorised engineers access it remotely from Mumbai, India, with no local copies.",
                  "A signed intra-group data-processing arrangement and EU Standard Contractual Clauses cover remote access: Module 3 for Customer Data processed on your behalf and Module 2 for Growth Rocket’s separate controller data. The transfer impact assessment is completed. Safeguards include need-limited access, individual accounts, encrypted connections, confidentiality commitments and no local Customer Data copies. These safeguards and transfer arrangements remain subject to clause 6.",
                ],
              ]}
            />
            <p>
              List version: 1.1. Date: 17 October 2026. The current
              direct-provider list, change history and links to providers&rsquo;
              downstream supplier lists are maintained at
              getgrowthrocket.com/sub-processors and reflect Annex III. The five
              direct providers are listed above; self-hosted n8n, Redis and
              BullMQ are our software, not separate providers. Neon and
              Cloudflare data-processing terms were accepted at signup,
              Google&rsquo;s addendum through the Admin console, and
              Hostinger&rsquo;s DPA forms part of its terms. Relevant
              downstream-provider information is also available on request. New
              and replacement providers follow clause 5; transfers follow clause
              6.
            </p>
          </Section>
      </LegalDocument>
    </main>
  );
}
