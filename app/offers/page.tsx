import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import OffersListing from "../components/offers/OffersListing";
import { buildCollectionPageSchema } from "../lib/seo";
import {
  OFFERS_LISTING_SEO,
  buildOffersListingMetadata,
  getOffers,
  offerHref,
} from "../lib/offers";

export const metadata: Metadata = buildOffersListingMetadata("en");

export default function OffersPage() {
  const { title, description } = OFFERS_LISTING_SEO.en;
  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema(
          "/offers",
          title,
          description,
          getOffers().map((offer) => ({
            name: offer.en.title,
            path: offerHref(offer, "en"),
          })),
        )}
      />
      <OffersListing locale="en" />
    </>
  );
}
