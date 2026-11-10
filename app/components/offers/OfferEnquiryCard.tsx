// A server component on purpose: it needs no hooks, and rendering it here
// keeps the offer data (app/lib/offers.ts) out of the client bundle. Only
// LeadEnquiryForm, a client component, ships to the browser.
import LeadEnquiryForm from "../LeadEnquiryForm";
import { SITE_URL } from "../../lib/seo";
import {
  OFFER_UI,
  offerHref,
  type Offer,
  type OfferLocale,
} from "../../lib/offers";

/**
 * The enquiry card beside an offer — the "Let's connect" modal's shape
 * (LeadForm): a violet header bar over a form that scrolls on its own, its
 * submit button pinned to the bottom. Sticky from lg; on smaller screens it
 * follows the article and the hero's CTA jumps to it (#offer-enquiry).
 *
 * The message sent is prefixed with the offer's title and URL so the team can
 * see where the enquiry came from.
 */
export default function OfferEnquiryCard({
  offer,
  locale,
}: {
  offer: Offer;
  locale: OfferLocale;
}) {
  const copy = offer[locale];
  const ui = OFFER_UI[locale];
  const absoluteOfferUrl = `${SITE_URL}${offerHref(offer, locale)}`;

  return (
    <aside
      id="offer-enquiry"
      className="w-full scroll-mt-[104px] lg:w-[320px] lg:flex-none xl:w-[340px]"
    >
      <div className="flex flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-white shadow-[0_22px_46px_rgba(10,5,22,0.10)] lg:sticky lg:top-[104px] lg:max-h-[calc(100vh-128px)]">
        <div className="shrink-0 bg-[#5b2dce] px-[22px] py-[18px]">
          <h2 className="m-0 font-bricolage text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            {ui.enquiryHeading}
          </h2>
          <p className="m-0 mt-[6px] font-sans text-[13px] leading-[1.5] text-white/80">
            {ui.enquirySubline}
          </p>
        </div>
        {/* Fields scroll on their own from lg up; the submit button stays
            pinned. data-lenis-prevent hands the wheel to this box. */}
        <div
          className="toc-scroll min-h-0 flex-1 px-[22px] pt-[18px] lg:overflow-y-auto"
          data-lenis-prevent
        >
          <LeadEnquiryForm
            idPrefix={`offer-${offer.slug}`}
            columns={1}
            stickySubmit
            submitLabel={{ en: "Send enquiry", nl: "Aanvraag versturen" }}
            messagePrefix={`Offer: ${copy.title} (${absoluteOfferUrl})`}
            extraTags={["Offer"]}
          />
        </div>
      </div>
    </aside>
  );
}
