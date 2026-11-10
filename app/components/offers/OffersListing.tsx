import HomeShell from "../sections/home2/HomeShell";
import OfferCard from "./OfferCard";
import { OFFER_UI, getOffers, type OfferLocale } from "../../lib/offers";

/**
 * /offers and /nl/aanbiedingen — the deep masthead /blog opens on, then one
 * white fold with the offer grid. The contact fold and footer come from the
 * layout's `SiteFooter`.
 *
 * No search, filters or pagination for nine offers. Past nine, paginate the
 * way BlogLandingClient does (nine per page).
 */
export default function OffersListing({ locale }: { locale: OfferLocale }) {
  const ui = OFFER_UI[locale];
  const offers = getOffers();

  return (
    <main className="blog-theme relative min-h-screen">
      <HomeShell>
        {/* Masthead */}
        <section
          aria-labelledby="offers-hero-heading"
          className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[48px] text-white md:py-[64px]"
        >
          <div className="fix">
            <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.12em] text-[#e4fa65] uppercase">
              <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
              {ui.eyebrow}
            </p>

            <h1
              id="offers-hero-heading"
              className="m-0 mt-[18px] font-bricolage text-[clamp(38px,4.3vw,64px)] font-semibold leading-[1.04] tracking-[-0.055em] text-white"
            >
              {ui.heroLead} <span className="text-[#e4fa65]">{ui.heroAccent}</span>
            </h1>

            <p className="mt-[18px] max-w-[620px] font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-[#c9c2d4]">
              {ui.lead}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="rounded-[13px] bg-white py-[48px] text-[#0a0516] md:py-[64px]">
          <div className="fix">
            <div className="flex flex-wrap items-end justify-between gap-[14px]">
              <div>
                <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.07em] text-[#5b2dce] uppercase">
                  <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
                  {ui.gridEyebrow}
                </p>
                <h2 className="m-0 mt-[14px] font-bricolage text-[clamp(32px,3.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.04em]">
                  {ui.gridHeading}
                </h2>
              </div>
              <p className="m-0 font-sans text-[13px] text-[#8b8398]">
                {ui.count(offers.length)}
              </p>
            </div>

            <div className="mt-[28px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
              {offers.map((offer) => (
                <OfferCard key={offer.slug} offer={offer} locale={locale} tone="light" />
              ))}
            </div>
          </div>
        </section>
      </HomeShell>
    </main>
  );
}
