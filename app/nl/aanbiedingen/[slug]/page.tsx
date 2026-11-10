import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import OfferDetail from "../../../components/offers/OfferDetail";
import {
  buildOfferMetadata,
  getOfferBySlug,
  getOffers,
  offerHref,
  offerSlug,
} from "../../../lib/offers";

type NlOfferPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * /nl/aanbiedingen/<nl-slug>. dynamicParams stays on (the default) so an
 * offer reached by its English slug (/nl/aanbiedingen/offer-3, or
 * /nl/offers/offer-3 via next.config.ts) can be sent to its Dutch URL in one
 * permanent redirect, the way /nl/blog/[slug] does. Anything else is a 404.
 */
export function generateStaticParams() {
  return getOffers().map((offer) => ({ slug: offerSlug(offer, "nl") }));
}

export async function generateMetadata({
  params,
}: NlOfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(decodeURIComponent(slug), "nl");
  return offer ? buildOfferMetadata(offer, "nl") : {};
}

export default async function NlOfferPage({ params }: NlOfferPageProps) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const offer = getOfferBySlug(decoded, "nl");
  if (offer) return <OfferDetail offer={offer} locale="nl" />;

  const byEnSlug = getOfferBySlug(decoded, "en");
  if (byEnSlug) permanentRedirect(offerHref(byEnSlug, "nl"));
  notFound();
}
