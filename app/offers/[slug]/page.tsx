import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferDetail from "../../components/offers/OfferDetail";
import {
  buildOfferMetadata,
  getOfferBySlug,
  getOffers,
  offerSlug,
} from "../../lib/offers";

type OfferPageProps = {
  params: Promise<{ slug: string }>;
};

/** Every offer is prerendered; any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getOffers().map((offer) => ({ slug: offerSlug(offer, "en") }));
}

export async function generateMetadata({
  params,
}: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug, "en");
  return offer ? buildOfferMetadata(offer, "en") : {};
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug, "en");
  if (!offer) notFound();
  return <OfferDetail offer={offer} locale="en" />;
}
