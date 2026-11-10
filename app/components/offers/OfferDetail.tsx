import Image from "next/image";
import Link from "next/link";
import HomeShell from "../sections/home2/HomeShell";
import ButtonF from "../ui/ButtonF";
import JsonLd from "../JsonLd";
import BlogToc from "../../../components/blogs/shared/BlogToc";
import BlogProse from "../../../components/blogs/shared/BlogProse";
import OfferCard from "./OfferCard";
import OfferEnquiryCard from "./OfferEnquiryCard";
import { buildPageSchema } from "../../lib/seo";
import { OFFERS_BASE } from "../../i18n/offer-locale-slugs";
import {
  OFFER_UI,
  formatOfferDate,
  getOtherOffers,
  offerHref,
  type Offer,
  type OfferLocale,
} from "../../lib/offers";

/** BlogToc and BlogProse render their labels as HTML, so plain text is escaped. */
const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * One offer — the same three-fold skeleton as BlogPostView:
 *
 *   1. deep hero: breadcrumb, badge, title, lead, CTA + validity, big image;
 *   2. white body: TOC (xl+) · article · sticky enquiry card (lg+);
 *   3. deep "more offers" with three dark cards.
 *
 * SiteFooter leaves out the contact fold under these pages: the enquiry card
 * already is the call to action.
 */
export default function OfferDetail({
  offer,
  locale,
}: {
  offer: Offer;
  locale: OfferLocale;
}) {
  const copy = offer[locale];
  const ui = OFFER_UI[locale];
  const listingHref = OFFERS_BASE[locale];
  const others = getOtherOffers(offer.slug, 3);
  const tocEntries = copy.sections.map(({ id, heading }) => ({
    id,
    label: escapeHtml(heading),
  }));

  return (
    <main className="blog-theme relative min-h-screen overflow-x-clip text-[#0a0516]">
      <JsonLd
        data={buildPageSchema(offerHref(offer, locale), copy.seoTitle, copy.seoDescription)}
      />

      <HomeShell>
        {/* 1 — Hero */}
        <section className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[48px] text-white md:py-[64px]">
          <div className="fix">
            <nav aria-label={ui.breadcrumbLabel}>
              <ol className="m-0 flex list-none items-center gap-[8px] p-0 font-sans text-[13px] text-[#c9c2d4]">
                <li className="flex-none">
                  <Link href={listingHref} className="transition-colors hover:text-white">
                    {ui.breadcrumbRoot}
                  </Link>
                </li>
                <li aria-hidden className="flex-none">
                  /
                </li>
                <li aria-current="page" className="line-clamp-1 min-w-0 text-white/90">
                  {copy.title}
                </li>
              </ol>
            </nav>

            <p className="m-0 mt-[22px] flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.12em] text-[#e4fa65] uppercase">
              <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
              {copy.badge}
            </p>

            <h1 className="m-0 mt-[18px] max-w-[900px] font-bricolage text-[clamp(38px,4.3vw,64px)] font-semibold leading-[1.04] tracking-[-0.055em] text-white">
              {copy.title}
            </h1>

            <p className="m-0 mt-[18px] max-w-[680px] font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-[#c9c2d4]">
              {copy.excerpt}
            </p>

            <div className="mt-[26px] flex flex-wrap items-center gap-[14px]">
              <ButtonF
                href="#offer-enquiry"
                native
                variant="lime"
                size="sm"
                arrow="down-right"
              >
                {ui.heroCta}
              </ButtonF>
              <span className="rounded-full border border-white/[0.18] px-[14px] py-[8px] font-sans text-[13px] text-[#c9c2d4]">
                {ui.validUntil(formatOfferDate(offer.validUntil, locale, "long"))}
              </span>
            </div>

            <div className="relative mt-[36px] aspect-[4/3] overflow-hidden rounded-[13px] bg-[#151021] sm:aspect-[16/9] md:mt-[44px] lg:aspect-[21/9]">
              <Image
                src={offer.image}
                alt={copy.imageAlt}
                fill
                sizes="(min-width: 1440px) 1320px, 90vw"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* 2 — Body. No items-start: the side columns stretch to the row's
            height so their sticky content has room to stick. */}
        <section className="rounded-[13px] bg-white py-[48px] md:py-[64px]">
          <div className="fix">
            <div className="flex flex-col gap-[40px] lg:flex-row xl:gap-[48px]">
              <BlogToc
                entries={tocEntries}
                heading={ui.tocHeading}
                widthClassName="xl:w-[196px]"
                visibilityClassName="hidden xl:block xl:flex-none"
              />

              <article className="min-w-0 flex-1">
                {copy.sections.map((section) => (
                  <div key={section.id}>
                    <BlogProse
                      id={section.id}
                      heading={escapeHtml(section.heading)}
                      paragraphs={section.paragraphs.map(escapeHtml)}
                    />
                    {section.bullets && section.bullets.length > 0 && (
                      <div className="max-w-[720px]">
                        <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
                          {section.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex gap-3 font-sans text-[19px] leading-[31px] text-[#0a0516]"
                            >
                              <i
                                aria-hidden
                                className="mt-[12px] h-[8px] w-[8px] flex-none rounded-full bg-[#5b2dce]"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-12">
                  <ButtonF
                    href={listingHref}
                    variant="link"
                    arrow="right"
                    className="gap-[8px] font-sans text-[14px] font-semibold text-[#5b2dce]"
                  >
                    {ui.backLink}
                  </ButtonF>
                </div>
              </article>

              <OfferEnquiryCard offer={offer} locale={locale} />
            </div>
          </div>
        </section>

        {/* 3 — More offers, on the deep fold (BlogPostView's "More articles"). */}
        <section className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] text-white md:py-[80px]">
          <div className="fix">
            <div className="mb-[36px] flex flex-col gap-[22px] sm:flex-row sm:items-end sm:justify-between sm:gap-[30px]">
              <div>
                <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.12em] text-[#e4fa65] uppercase">
                  <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
                  {ui.moreEyebrow}
                </p>
                <h2 className="m-0 mt-[16px] font-bricolage text-[clamp(30px,3.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                  {ui.moreHeading}
                  <br />
                  <span className="text-[#e4fa65]">{ui.moreAccent}</span>
                </h2>
              </div>

              <ButtonF
                href={listingHref}
                variant="violet"
                size="sm"
                className="w-max self-start sm:self-end"
              >
                {ui.moreButton}
              </ButtonF>
            </div>

            <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <OfferCard key={other.slug} offer={other} locale={locale} tone="dark" />
              ))}
            </div>
          </div>
        </section>
      </HomeShell>
    </main>
  );
}
