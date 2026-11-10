import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import OffersListing from "../../components/offers/OffersListing";
import { buildCollectionPageSchema } from "../../lib/seo";
import {
  OFFERS_LISTING_SEO,
  buildOffersListingMetadata,
  getOffers,
  offerHref,
} from "../../lib/offers";

/* The same listing as app/offers/page.tsx, in Dutch. */
export const metadata: Metadata = buildOffersListingMetadata("nl");

export default function NlOffersPage() {
  const { title, description } = OFFERS_LISTING_SEO.nl;
  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema(
          "/nl/aanbiedingen",
          title,
          description,
          getOffers().map((offer) => ({
            name: offer.nl.title,
            path: offerHref(offer, "nl"),
          })),
        )}
      />
      <OffersListing locale="nl" />
    </>
  );
}
