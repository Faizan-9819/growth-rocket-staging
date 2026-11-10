import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

import LegalDocument, { legalSectionId } from "../components/legal/LegalDocument";
export const metadata: Metadata = {
  title: "Terms and Conditions — Growth Rocket",
  description:
    "Read the Growth Rocket Terms and Conditions for our website and business Hub subscription services.",
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/terms-and-conditions",
    languages: {
      en: "https://legal.getgrowthrocket.com/terms-and-conditions",
      nl: "https://legal.getgrowthrocket.com/nl/terms-and-conditions",
    },
  },
};

const VERSION = "1.3";
const VERSION_DATE = "20 October 2026";
const SUPPORT_EMAIL = "support@getgrowthrocket.com";
const SALES_EMAIL = "sales@getgrowthrocket.com";

const LINK_CLASS =
  "font-medium text-[#5b2dce] underline underline-offset-[4px] transition-colors hover:text-[#0a0516]";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 id={legalSectionId(title)} className="pt-2 font-bricolage text-[26px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#0a0516]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-sans text-[16px] leading-[1.7] text-[#625a70]">
        {children}
      </div>
    </section>
  );
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#5b2dce]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-[#0a0516]">{children}</p>;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-[#0a0516]">{children}</strong>;
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-[10px] border border-[#e6e1ee]">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px] leading-[1.6]">
        <thead className="bg-[#f5f2fa] text-[#0a0516]">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[#e6e1ee] align-top">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${i === 0 ? "font-medium text-[#0a0516]" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Mail({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={LINK_CLASS}>
      {email}
    </a>
  );
}

export default function TermsAndConditionsPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/terms-and-conditions",
          "Terms and Conditions - Growth Rocket",
          "Read the Growth Rocket Terms and Conditions for our website and business Hub subscription services.",
        )}
      />
      {/* Hero */}
      <section className="relative mx-3.5 overflow-hidden rounded-[13px] bg-[#0a0516] pt-[72px] pb-[56px] md:pt-[96px] md:pb-[80px]">
        <div className="fix relative flex flex-col items-center gap-3 text-center">
          <h1 className="font-bricolage text-[clamp(40px,5vw,64px)] leading-[1.05] font-semibold tracking-[-0.045em] text-white">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <LegalDocument tocHeading="Contents">
          <Section title="1. About these Terms">
            <p>
              These Terms cover the Growth Rocket website and business Hub
              subscription services. <B>Parashift Technologies B.V.</B> supplies
              them under the <B>Growth Rocket</B> brand (&ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) to business customers
              (&ldquo;you&rdquo; or &ldquo;your&rdquo;). Our company details are
              in section 17.
            </p>
            <p>
              Our services are for business use only. Give us accurate business
              details and make sure you have authority to enter into the
              agreement for your business.
            </p>
            <p>
              These Terms apply when you accept them with your Customer
              Contract. That Contract identifies the accepted versions and links
              to these Terms and the DPA, including Annexes I&ndash;III,
              available before signing. The documents form part of your
              agreement without being physically attached. Your Contract and
              expressly agreed customer-specific terms take priority over
              conflicting standard Terms. The DPA takes priority on data
              protection, and its clause 15 governs liability as explained in
              section 14. Applicable Standard Contractual Clauses retain any
              required priority.
            </p>
            <p>
              The versions identified in your Contract apply until changed under
              the relevant agreed procedure. Updates to these Terms follow
              section 15; DPA updates follow its clause 15.
            </p>
          </Section>

          <Section title="2. Our services">
            <p>
              Growth Rocket provides a managed website connected to the Growth
              Rocket Hub. The standard package includes:
            </p>
            <Ul
              items={[
                "A professionally built, mobile-friendly website with 8–10 pages in one language. Your signed agreement records the language, and we agree the pages during onboarding.",
                "Website copywriting based on your business information and one 30-second business introduction video.",
                "Enquiry forms, contact forms and appointment booking, as selected during onboarding.",
                "Connection to your agreed domain, hosting, SSL for encrypted connections, maintenance and technical updates.",
                "Hub access for managing enquiries, appointments, customer contacts, quotes and invoices.",
                "Support and content updates as described in section 6.",
              ]}
            />
            <p>
              Your signed agreement records your selected package and any
              separately agreed services.
            </p>
            <p>
              The Hub includes review requests, reminders, published reviews and
              replies. It records when a review form is first opened and allows
              you to record quote acceptance manually. It does not track email
              opens or quote and invoice views. The DPA describes the personal
              data recorded.
            </p>
            <p>
              All Growth Rocket websites include basic setup for search engines.
              Ongoing search engine optimisation (SEO) is not included. We do
              not guarantee search rankings, traffic, enquiries or sales.
            </p>
            <p>
              Extra pages, redesigns, new features, custom connections to other
              systems and other work outside the agreed scope need written
              agreement on the work, price and timing before work starts.
            </p>
            <p>
              We provide the services with reasonable care and skill and meet
              the agreed support commitments.
            </p>
          </Section>

          <Section title="3. Subscription pricing and payment">
            <Sub>Payment options</Sub>
            <p>The standard package offers:</p>
            <Table
              head={["Option", "Subscription fee", "Commitment"]}
              rows={[
                ["Monthly payments", "€69 per month", "12 months"],
                [
                  "Annual payment",
                  "€690 per year, paid in advance",
                  "12 months",
                ],
              ]}
            />
            <p>
              There is a <B>one-time onboarding fee</B> of €290. Prices exclude
              VAT, which is applied as required by law. Your signed agreement
              records any custom work or different agreed price.
            </p>
            <p>
              <B>
                Monthly payments spread the cost of an annual commitment. They
                do not create a month-to-month subscription.
              </B>
            </p>
            <p>
              You pay the onboarding fee and first monthly or annual
              subscription payment at signup. The subscription payment covers
              the first subscription period from your confirmed Subscription
              Start Date. It is not an extra charge for the build period.
            </p>
            <p>
              Later monthly payments are due in advance on the same day of each
              month as the Subscription Start Date, or on the last day of a
              shorter month. Annual renewal payments are due at the start of
              each renewed annual term.
            </p>
            <p>
              We email an invoice showing the applicable VAT when each payment
              is received, or earlier if the law requires. You agree to receive
              invoices electronically.
            </p>
            <p>
              Keep billing details up to date. If you dispute an invoice,
              promptly explain the amount and reason. Amounts you do not dispute
              remain due.
            </p>
            <Sub>Three-year price protection</Sub>
            <p>
              Your selected subscription price stays fixed for the first{" "}
              <B>three consecutive subscription</B> years if you keep the same
              package. This does not require you to renew after any annual term.
            </p>
            <p>
              This protection does not cover domain renewals, separately
              approved extra work or applicable taxes.
            </p>
            <p>
              After the protected period, the subscription price may change only
              at annual renewal. We give at least 30 calendar days&rsquo;
              written notice so you can choose not to renew. Without that
              notice, the existing price applies to that renewal.
            </p>
          </Section>

          <Section title="4. Signup onboarding and delivery">
            <p>
              A <B>Working Day</B> is Monday&ndash;Friday, excluding{" "}
              <B>public holidays</B>.{" "}
              <B>Day 1 is the next Working Day after onboarding is complete.</B>
            </p>
            <Table
              head={["Stage", "Timing", "What happens"]}
              rows={[
                [
                  "Signup",
                  "Signature and cleared payment",
                  "You sign your agreement and pay the onboarding fee and first subscription payment. We promptly provide the onboarding link.",
                ],
                [
                  "Onboarding",
                  "Up to three Working Days, starting the next Working Day after signup is complete and the link is provided",
                  "Submit the completed form and required information, materials and access. If anything is incomplete, we email a reminder on the second Working Day. We promptly identify missing items and do not unreasonably delay confirming that onboarding is complete.",
                ],
                [
                  "Build and launch",
                  "Working Days 1–7 after completed onboarding",
                  "We aim to deliver the website for review and launch within seven Working Days, provided you give feedback and approvals on time.",
                ],
                [
                  "Buffer days",
                  "Working Days 8–10, if needed",
                  "Extra time for outstanding revisions and launch approval.",
                ],
              ]}
            />
            <p>
              Two rounds of revisions within the agreed scope are included
              across the build and buffer periods. Provide your feedback
              together for each round. Corrections needed to meet the agreed
              scope do not count towards this limit. You must give timely
              feedback and approve launch digitally. No response does not count
              as approval.
            </p>
            <p>
              You must complete onboarding within three Working Days. That
              deadline does not automatically start the build or subscription.
              If onboarding finishes late, Day 1 and the subscription start move
              accordingly.
            </p>
            <Sub>When the subscription starts</Sub>
            <Ul
              items={[
                <>
                  <B>Start date:</B> The subscription normally starts on the
                  11th Working Day after completed onboarding. The next Working
                  Day after onboarding is Day 1. Section 5 applies if we are
                  delayed. Otherwise, the actual launch date does not change the
                  subscription start date.
                </>,
                <>
                  Your <B>delays after onboarding:</B> Late feedback, domain
                  setup or approval does not delay the subscription start if we
                  have completed the work we can reasonably do.
                </>,
                <>
                  Confirming dates: After onboarding is complete, we email a
                  copy of your signed agreement with the confirmed Subscription
                  Start Date and Renewal Date, 12 months apart. We keep the
                  original signed version. Recording dates using the agreed
                  calculation does not need a new signature or change the agreed
                  terms.
                </>,
              ]}
            />
          </Section>

          <Section title="5. If Growth Rocket is delayed">
            <Ul
              items={[
                <>
                  Delayed <B>start:</B> If we cause the delay, the subscription
                  starts only when our work is complete and ready for launch
                  approval. Waiting only for your approval does not delay the
                  start further.
                </>,
                "Time to finish: We tell you about the delay and have up to seven extra Working Days to complete our work.",
                <>
                  <B>If</B> work is <B>still incomplete:</B> You may agree
                  another deadline or end the agreement for non-delivery. If our
                  delay leaves the website incomplete after the extra period,
                  you can end the agreement under this section and receive a
                  full refund of the €290 onboarding fee and all prepaid
                  subscription fees, including VAT paid on those amounts. We pay
                  the refund within 14 calendar days of termination. No
                  remaining subscription instalments are due for that signup.
                </>,
              ]}
            />
            <p>
              We confirm revised dates by email and adjust payment timing
              accordingly.
            </p>
          </Section>

          <Section title="6. Support maintenance and content updates">
            <p>
              Support is available Monday&ndash;Friday, 09:00&ndash;17:00,{" "}
              <B>Europe/Amsterdam local time</B>, excluding{" "}
              <B>public holidays</B>.
            </p>
            <p>
              Send support emails from your registered email address to{" "}
              <Mail email={SUPPORT_EMAIL} />, or use the designated support
              system.
            </p>
            <p>
              Data-protection notification and assistance duties under the DPA
              apply outside routine support hours. For security incidents and
              urgent follow-up, use <Mail email={SUPPORT_EMAIL} />; DPA clause 9
              governs breach notification.
            </p>
            <Ul
              items={[
                <>
                  You may submit{" "}
                  <B>
                    two batches of content updates per subscription month,
                    grouping your requests together in each batch.
                  </B>
                </>,
                "These cover text edits and image replacements within the existing design. There is no limit on the number of individual text edits in those batches.",
                "Redesigns, extra pages and new features are not included. For a request outside the package, we explain why it is extra work and obtain approval before charging.",
                "We normally complete routine text and image requests within 24–48 hours once we have all required details. We tell you if more time is needed.",
              ]}
            />
            <p>
              We maintain the website and work to fix service faults. We do not
              guarantee uninterrupted availability. We schedule planned
              maintenance to minimise disruption and give advance notice where
              reasonably possible.
            </p>
            <p>
              Backup and recovery arrangements follow Annex II of the DPA.
              Security updates follow its clause 4.
            </p>
          </Section>

          <Section title="7. Your responsibilities and acceptable use">
            <p>You must:</p>
            <Ul
              items={[
                "Provide accurate business information and materials you are authorised to use.",
                "Check website text, images, business claims and contact information before approving launch.",
                "Provide timely feedback, approvals and required domain access or configuration.",
                "Keep login details secure and manage who is authorised to use your account.",
                "Use the services lawfully, without infringing others’ rights, fraud, malware, spam or other harmful activity.",
                "Check your own quotes, invoices, tax settings, booking terms and customer communications.",
                "Supply, approve and keep current your website legal notices, including applicable privacy notices, cookie notices and customer-facing terms, for us to publish.",
              ]}
            />
            <p>
              Suspension and termination for misuse follow sections 11 and 12.
            </p>
          </Section>

          <Section title="8. Domains">
            <p>
              If you need a new domain, we provide one free non-premium domain
              for the first year, subject to availability.
            </p>
            <p>
              You are the registered domain holder. From year two, renewal is
              charged at the actual third-party cost, which we communicate
              before renewal.
            </p>
            <p>
              You keep your existing domain and remain responsible for renewal
              unless otherwise agreed. We supply the A records needed to connect
              it.
            </p>
            <p>
              Domain renewal is separate from subscription renewal. We will
              reasonably help with a requested domain transfer, following the
              registrar&rsquo;s procedures. Moving a domain alone is not a
              request to close your subscription.
            </p>
          </Section>

          <Section title="9. Content and platform rights">
            <p>
              You keep ownership of the content you supply and allow us to use
              it as needed to deliver the services.
            </p>
            <p>
              You may keep, copy, reuse and adapt the final website text and
              video created for you, including with another supplier. Any
              restrictions on third-party material must be explained before that
              material is used.
            </p>
            <p>
              Growth Rocket is a subscription platform that connects the website
              and Hub. We and our licensors keep ownership of the platform,
              website code, design templates and backend systems.
            </p>
            <p>
              You may use the website and Hub during your subscription under
              your agreement. You do not receive ownership or a transfer of the
              website code, design templates or backend systems, including when
              your agreement expires or ends. You may still reuse your branding
              and content and the text and video described above. These
              ownership rules do not exclude any legal rights to export data or
              digital assets, make systems work together or receive help
              switching providers.
            </p>
          </Section>

          <Section title="10. Renewal cancellation and early departure">
            <Ul
              items={[
                <>
                  <B>Annual term:</B> The subscription runs for 12 months from
                  the confirmed Subscription Start Date.
                </>,
                <>
                  <B>Automatic renewal:</B> The subscription renews for further
                  12-month terms unless either party gives written notice at
                  least <B>15 Working Days before the current term</B> ends that
                  it does not want to renew.
                </>,
                <>
                  <B>Renewal reminder:</B> We email a reminder 30 Working Days
                  before renewal. It states the renewal date, fee and deadline
                  to cancel renewal. Not paying does not count as notice to
                  cancel renewal.
                </>,
                <>
                  <B>How to cancel renewal:</B> Email{" "}
                  <Mail email={SUPPORT_EMAIL} />. We acknowledge receipt. A late
                  acknowledgement does not invalidate a notice sent on time.
                </>,
                "When cancellation takes effect: Your agreement ends at the end of the current annual term. Services and scheduled payments continue until then.",
                "Leaving permanently before the term ends: If you ask to close the service permanently and move to another platform before the term ends, all remaining subscription instalments for that annual term become due immediately. We confirm the closure date and give an itemised balance. This is subject to the specific right to leave after a sub-processor objection under section 12, termination for our breach and any legal limits on switching or other charges. It must not create an unlawful switching charge.",
                <>
                  <B>Payment</B> timing: Cancelling renewal alone does not make
                  remaining instalments due immediately. Transferring a domain
                  alone is not a request to close the service permanently.
                </>,
                <>
                  <B>Refunds:</B> Prepaid subscription fees are not refunded for
                  ordinary voluntary early departure. Onboarding fees for
                  completed work are not refunded, except for the full refund
                  for our non-delivery under section 5.
                </>,
                "The early-departure and no-refund rules do not override your rights under sections 5, 12 or 15, DPA clauses 5 or 15, or mandatory law, including applicable provider-switching rights.",
              ]}
            />
          </Section>

          <Section title="11. Nonpayment and suspension">
            <p>
              For overdue payments, we send written notice of the amount due and
              allow seven full calendar days to pay. We send a reminder at least
              three calendar days before suspension. Suspension begins only
              after both notice periods have passed.
            </p>
            <p>
              We restore access within 24 hours after receiving all overdue
              payments, provided the Agreement has not ended and no other
              suspension ground remains. Suspension does not pause the
              subscription commitment or authorise data deletion.
            </p>
            <p>
              We may suspend affected services where reasonably necessary to
              address unlawful use or an urgent security threat. Where
              practicable, we give notice and an opportunity to remedy, limit
              suspension to what is necessary and restore service when the issue
              is resolved.
            </p>
            <p>
              If suspension remains unresolved, the Agreement ends automatically
              on day 30 after suspension began. We notify you of the suspension,
              termination and retrieval dates. Export-only access and
              data-rights tools remain available under Annex II of the DPA;
              retrieval is free even if fees remain unpaid.
            </p>
            <p>
              Amounts already due remain payable. If the Agreement ends for
              nonpayment, all remaining subscription instalments for the current
              annual term become payable immediately. Growth Rocket provides an
              itemised final statement and does not charge the same amount
              twice. This is subject to applicable law.
            </p>
          </Section>

          <Section title="12. Breach termination and exit">
            <p>
              Either party may terminate for a material breach not remedied
              within 15 Working Days after written notice describing the breach
              and required remedy. Specific delivery, payment and suspension
              procedures apply where relevant.
            </p>
            <p>
              If you validly terminate for our material breach or we discontinue
              the service, we refund prepaid subscription fees for all unused
              days after termination within 10 Working Days. Future subscription
              fees for those days stop, and no early-departure charge applies.
            </p>
            <p>
              DPA clause 5 governs termination, refunds and payment release
              after an unresolved sub-processor objection. Section 15 below and
              DPA clause 15 govern termination for future substantive changes to
              the respective documents.
            </p>
            <p>
              On expiry or termination, the website and normal Hub access end,
              subject to mandatory provider-switching rights. You retain your
              domain and the materials described in sections 8 and 9. Free
              retrieval, assisted export, notices, retention and deletion follow
              DPA clause 10 and Annexes I&ndash;II, including unresolved
              suspension.
            </p>
            <p>
              Mandatory provider-switching, export and transition-assistance
              rights take priority over conflicting ownership, closure, notice
              and charging terms.
            </p>
          </Section>

          <Section title="13. Confidentiality and personal data">
            <p>
              Each party protects the other&rsquo;s confidential information and
              uses it only for your agreement. It shares that information only
              with people who need it and must keep it confidential. This does
              not cover information that is lawfully public, developed
              independently or already lawfully known, or information that the
              law requires to be disclosed.
            </p>
            <p>
              The{" "}
              <Link href="/dpa" className={LINK_CLASS}>
                DPA
              </Link>
              , including Annexes I&ndash;III, forms part of your
              agreement as Annexure A. Your signed Contract identifies the
              accepted version. It must be accepted before processing starts,
              including onboarding, and takes priority on data-protection
              matters, subject to applicable Standard Contractual Clauses.
            </p>
            <p>
              Our{" "}
              <Link href="/privacy-policy" className={LINK_CLASS}>
                Privacy Policy
              </Link>{" "}
              explains our own uses of personal data. It is a notice, not a
              replacement for the DPA or permission to change agreed processing.
              Changes to processing must follow applicable law and the relevant
              contractual procedure.
            </p>
          </Section>

          <Section title="14. Liability">
            <p>
              DPA clause 15 governs Growth Rocket&rsquo;s liability under your
              agreement and the DPA, including claims unrelated to personal
              data. Its limits are shared, not additional limits, and take
              priority over conflicting liability limits or exceptions in these
              Terms.
            </p>
            <p>
              Subject to the exceptions and protections in DPA clause 15,
              neither party is liable for indirect or consequential loss,
              including indirect loss of profit or business opportunity. Fees
              properly due remain payable.
            </p>
            <p>
              Each party must take reasonable steps to limit losses. A loss can
              be recovered only if the breach concerned caused it.
            </p>
          </Section>

          <Section title="15. Changes and notices">
            <p>
              Growth Rocket may reasonably update these Terms to reflect changes
              in law, security or how the agreed services operate. Updates
              cannot change the agreed core services, contract tenure, price
              protection or liability caps, retrospectively change accrued
              rights, or override mandatory rights or applicable Standard
              Contractual Clauses.
            </p>
            <p>
              We email the revised wording or a downloadable copy, a summary and
              the effective date to your designated notice email address at
              least one calendar month before an update takes effect. Publishing
              a new website version alone does not amend the agreed version.
            </p>
            <p>
              For a future substantive change, you may email{" "}
              <Mail email={SUPPORT_EMAIL} /> before the effective date to end
              the Agreement immediately before the change takes effect, without
              an early-departure charge. We refund prepaid subscription fees for
              all unused days after termination within 10 Working Days; future
              fees for that period stop. Amounts properly due for services
              already supplied remain payable. Ordinary voluntary
              early-departure and no-refund rules do not restrict this right.
            </p>
            <p>
              If you do not exercise that termination right, a permitted update
              notified under this procedure takes effect on its stated date
              without a fresh signature. This procedure does not permit changes
              to the signed commercial terms identified above.
            </p>
            <p>
              DPA changes follow clause 15 of the DPA, including its separate
              procedures for sub-processors and routine security updates.
              Renewal price changes follow section 3 and the Contract; date
              confirmations and separately ordered work follow their existing
              agreed procedures. Data return and deletion follow DPA clause 10.
            </p>
            <p>
              Contract notices go to the parties&rsquo; designated notice email
              addresses. Both parties must keep them current.
            </p>
            <p>
              Growth Rocket retains unchanged copies of accepted versions,
              acceptance records and subsequent update notices and versions.
              Archived copies are available to you on request.
            </p>
          </Section>

          <Section title="16. Governing law and jurisdiction">
            <p>
              Dutch law governs these Terms and your agreement. Disputes go to
              the courts of The Hague, Netherlands, that have authority to hear
              them, subject to any mandatory rules on which courts must hear a
              dispute.
            </p>
          </Section>

          <Section title="17. Contact">
            <p>
              <B>{CONTACT_INFO.company}</B>
              <br />
              Operating under the brand <B>{CONTACT_INFO.brand}</B>
              {CONTACT_INFO.addressLines.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li>
                <B>KVK number:</B> 42002389
              </li>
              <li>
                <B>Sales:</B> <Mail email={SALES_EMAIL} />
              </li>
              <li>
                <B>Support and non-renewal notices:</B>{" "}
                <Mail email={SUPPORT_EMAIL} />
              </li>
              <li>
                <B>Telephone:</B>{" "}
                <a href={phoneHref(CONTACT_INFO.phone)} className={LINK_CLASS}>
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </Section>
      </LegalDocument>
    </main>
  );
}
