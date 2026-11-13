import Image from "next/image";
import Link from "next/link";
import ButtonF from "../ui/ButtonF";
import {
  OFFER_UI,
  formatOfferDate,
  offerHref,
  type Offer,
  type OfferLocale,
} from "../../lib/offers";

/**
 * An offer card. The whole card is one link, so the "View offer" affordance is
 * a span (`arrow-cta-host` on the link plays its arrow swap from anywhere on
 * the card).
 *
 * - `light`: the listing grid's card on a white fold — `PostCard` in
 *   BlogLandingClient verbatim, with the validity date in place of the date
 *   and reading time.
 * - `dark`: the "more offers" card on the deep fold — the default (full) layout
 *   of `BlogCard`, flipping to lime on hover.
 */
export default function OfferCard({
  offer,
  locale,
  tone = "light",
  tallImage = false,
}: {
  offer: Offer;
  locale: OfferLocale;
  tone?: "light" | "dark";
  /** Light tone only: a taller image box (the dark card's 1.28:1 ratio)
   *  instead of the listing's short fixed-height strip, so less is cropped. */
  tallImage?: boolean;
}) {
  const copy = offer[locale];
  const ui = OFFER_UI[locale];
  const href = offerHref(offer, locale);
  const valid = ui.validUntil(formatOfferDate(offer.validUntil, locale, "short"));

  if (tone === "dark") {
    return (
      <Link
        href={href}
        className="arrow-cta-host group flex h-full flex-col gap-[16px] overflow-hidden rounded-[13px] border border-white/[0.12] bg-[#151021] px-[20px] pt-[20px] pb-[24px] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#e4fa65] hover:shadow-[0_0_0_1px_rgba(228,250,101,0.34),0_0_18px_rgba(228,250,101,0.24),0_0_42px_rgba(228,250,101,0.18)]"
      >
        <div className="relative aspect-[1.28/1] overflow-hidden rounded-[13px] bg-[#0a0516]">
          <Image
            src={offer.image}
            alt={copy.imageAlt}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-[10px] px-[6px]">
          <span className="font-sans text-[12px] font-medium text-[#c9c2d4] transition-colors duration-300 ease-out group-hover:text-[#4b5220]">
            {valid}
          </span>

          <h3 className="m-0 line-clamp-3 font-bricolage text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-white transition-colors duration-300 ease-out group-hover:text-[#151021]">
            {copy.title}
          </h3>

          <p className="m-0 line-clamp-2 font-sans text-[14px] leading-[1.6] text-[#c9c2d4] transition-colors duration-300 ease-out group-hover:text-[#4b5220]">
            {copy.excerpt}
          </p>

          <ButtonF
            as="span"
            variant="link"
            arrow="right"
            arrowSize={14}
            className="mt-auto gap-[8px] self-start pt-[6px] font-sans text-[14px] font-semibold text-[#e4fa65] transition-colors duration-300 ease-out group-hover:text-[#5b2dce] [&_.btn-arrow]:-top-px"
          >
            {ui.viewOffer}
          </ButtonF>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="arrow-cta-host group flex h-full translate-y-0 flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-[#f5f3ff] transition-[background-color,border-color,translate,box-shadow] duration-380 ease-in-out hover:-translate-y-1 hover:border-[#c9bff0] hover:bg-[#ebe6ff] hover:shadow-[0_22px_46px_rgba(10,5,22,0.14)] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-[background-color,border-color] motion-reduce:hover:translate-y-0"
    >
      <div
        className={`relative overflow-hidden bg-[#ece7f6] ${
          tallImage ? "aspect-[1.28/1]" : "h-[180px] lg:h-[218px]"
        }`}
      >
        <Image
          src={offer.image}
          alt={copy.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[12px] p-[22px]">
        <span className="inline-flex w-max items-center gap-[7px] rounded-full bg-[#ede8fb] px-[12px] py-[6px] font-sans text-[11px] font-bold tracking-[0.06em] text-[#5b2dce] uppercase">
          <i className="h-[5px] w-[5px] rounded-full bg-current opacity-70" />
          {copy.badge}
        </span>

        <h3 className="m-0 line-clamp-3 font-bricolage text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#0a0516]">
          {copy.title}
        </h3>

        <p className="m-0 line-clamp-2 font-sans text-[14px] leading-[1.6] text-[#625a70]">
          {copy.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-[10px] border-t border-[#ded8e7] pt-[14px]">
          <span className="font-sans text-[12px] text-[#8b8398]">{valid}</span>
          <ButtonF
            as="span"
            variant="link"
            arrow="right"
            arrowSize={14}
            className="gap-[6px] font-sans text-[13px] font-semibold text-[#5b2dce]"
          >
            {ui.viewOffer}
          </ButtonF>
        </div>
      </div>
    </Link>
  );
}
