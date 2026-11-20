"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import ContactCta, { type ContactCtaVariant } from "./ContactCta";
import FooterLoopStrip from "./FooterLoopStrip";
import ButtonF from "../../ui/ButtonF";
import { openCookiePreferences } from "../../CookieConsent";
import { CONTACT_INFO, phoneHref, whatsappHref } from "@/contact";
import { useContactPhone } from "../../useContactPhone";
import { localizedHref } from "@/app/i18n/locale-href";
import { legalHref } from "@/app/lib/legal";
import type { Locale, Translation } from "@/app/i18n/config";

/**
 * Site footer — ported from `finalfooter/Footer.jsx` + `Footer.module.css`,
 * with every rule of the module converted to Tailwind utilities.
 *
 * Four rows on one shared grid (three 1fr columns and a 1.7fr last one):
 *
 *   1. logo + intro | headline (spans two columns) | CTA
 *   2. Features | Pricing | Company | Built for your trade
 *   3. Visit | Email | Call | Follow us
 *   4. copyright | legal
 *
 * The module's breakpoints are kept: below 1280px the row gap tightens, below
 * 1024px the grid is two columns and the intro, hero and last columns span
 * both, and below 640px the radius and column gap shrink and Visit / Email go
 * full width. Tailwind's `max-lg` is `width < 1024px`, matching the source's
 * `max-width: 1023px`.
 *
 * {@link ContactCta} and {@link FooterLoopStrip} still ride along above the
 * card, as they did before, so every route keeps its closing fold; pages that
 * shouldn't end on the pitch turn it off with `showContactCta={false}` (see
 * SiteFooter, which owns that list).
 */

/* ---------- Content: edit these arrays, not the markup ----------
   Every href is the EN path; on /nl pages each one is passed through
   `localizedHref`, which maps it to its NL page (/about → /nl/over-ons,
   /designs/cleaning → /nl/ontwerpen/schoonmaak, …). The one route with no NL
   page of its own yet — the /blog index — is served the EN page under the /nl
   URL by proxy.ts, so NL visitors still land on it without being switched to
   EN.

   The NL labels are the names those pages already use: the navbar
   (Functies, Prijzen, Over ons, Ontwerpen, Volg ons), the /nl/functies jump
   links, the /nl/ontwerpen industry filter, the contact page's labels and the
   NL legal page titles. */

type FooterLink = { label: Translation; href: string };

/** Every features hash is a `SectionCard` id from app/features/data.ts. */
const COLUMNS: { title: Translation; links: FooterLink[] }[] = [
  {
    title: { en: "Features", nl: "Functies" },
    links: [
      { label: { en: "Website", nl: "Website" }, href: "/features#website" },
      {
        label: { en: "Appointments", nl: "Afspraken" },
        href: "/features#appointments",
      },
      {
        label: { en: "Enquiries", nl: "Aanvragen" },
        href: "/features#enquiries",
      },
      {
        label: { en: "Quotes & invoices", nl: "Offertes en facturen" },
        href: "/features#quotes",
      },
      {
        label: { en: "Contact book", nl: "Contacten" },
        href: "/features#contacts",
      },
      {
        label: { en: "Support", nl: "Ondersteuning" },
        href: "/features#support",
      },
    ],
  },
  {
    title: { en: "Pricing", nl: "Prijzen" },
    links: [
      {
        label: { en: "Plans & pricing", nl: "Abonnementen en prijzen" },
        href: "/pricing",
      },
      {
        label: { en: "What's included", nl: "Wat je krijgt" },
        href: "/pricing#pricing",
      },
      {
        label: { en: "Pricing FAQs", nl: "Veelgestelde vragen" },
        href: "/pricing#pricing-faq",
      },
    ],
  },
  {
    title: { en: "Company", nl: "Bedrijf" },
    links: [
      { label: { en: "About us", nl: "Over ons" }, href: "/about" },
      { label: { en: "Blog", nl: "Blog" }, href: "/blog" },
      { label: { en: "Offers", nl: "Aanbiedingen" }, href: "/offers" },
      { label: { en: "Contact", nl: "Contact" }, href: "/contact" },
      {
        label: { en: "Affiliate program", nl: "Partnernetwerk" },
        href: "/partner-network",
      },
      { label: { en: "Design", nl: "Ontwerpen" }, href: "/design" },
    ],
  },
];

/** Each trade opens its designs listing (INDUSTRY_SLUGS in design-routes). */
const TRADES: FooterLink[] = [
  { label: { en: "Cleaning", nl: "Schoonmaak" }, href: "/design/cleaning" },
  { label: { en: "Dentist", nl: "Tandarts" }, href: "/design/dentist" },
  {
    label: { en: "Electrician", nl: "Elektricien" },
    href: "/design/electrician",
  },
  { label: { en: "Logistics", nl: "Logistiek" }, href: "/design/logistics" },
  {
    label: { en: "Physiotherapy", nl: "Fysiotherapie" },
    href: "/design/physiotherapy",
  },
  { label: { en: "Plumber", nl: "Loodgieter" }, href: "/design/plumber" },
  {
    label: { en: "Real Estate Consultant", nl: "Makelaar" },
    href: "/design/real-estate",
  },
  { label: { en: "Saloon", nl: "Kapsalon" }, href: "/design/salon" },
  {
    label: { en: "Solar Installation", nl: "Zonnepanelen" },
    href: "/design/solar",
  },
];

/** Every other line of footer copy. */
const COPY: Record<
  Locale,
  {
    homeLabel: string;
    intro: string;
    headline: [string, string];
    cta: string;
    navLabel: string;
    trades: string;
    visit: string;
    email: string;
    call: string;
    followUs: string;
    by: string;
    legalLabel: string;
    cookieSettings: string;
  }
> = {
  en: {
    homeLabel: "Growth Rocket home",
    intro:
      "A complete business system for small businesses — website, booking, and a simple Hub to manage it all.",
    headline: ["Your website and everyday", "business tools."],
    cta: "Start with Growth Rocket",
    navLabel: "Footer",
    trades: "Built for your trade",
    visit: "Visit",
    email: "Email",
    call: "Call",
    followUs: "Follow us",
    by: "by",
    legalLabel: "Legal",
    cookieSettings: "Cookie settings",
  },
  nl: {
    homeLabel: "Growth Rocket startpagina",
    intro:
      "Een compleet bedrijfssysteem voor kleine bedrijven — website, afspraken en een eenvoudige Hub om alles te beheren.",
    headline: ["Je website en alles voor", "je dagelijkse werk."],
    cta: "Start met Growth Rocket",
    navLabel: "Voettekst",
    trades: "Voor jouw vak",
    visit: "Adres",
    email: "E-mail",
    call: "Bellen",
    followUs: "Volg ons",
    by: "door",
    legalLabel: "Juridisch",
    cookieSettings: "Cookievoorkeuren",
  },
};

const EMAILS = CONTACT_INFO.emails.map((email) => ({
  label: email,
  href: `mailto:${email}`,
}));

const SOCIALS: { label: string; href: string; Icon: ComponentType }[] = [
  {
    label: "Instagram",
    href: CONTACT_INFO.socialLinks[0].href,
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: CONTACT_INFO.socialLinks[1].href,
    Icon: FaLinkedinIn,
  },
  { label: "YouTube", href: CONTACT_INFO.socialLinks[2].href, Icon: FaYoutube },
  {
    label: "WhatsApp",
    href: CONTACT_INFO.socialLinks[4].href,
    Icon: FaWhatsapp,
  },
  { label: "TikTok", href: CONTACT_INFO.socialLinks[5].href, Icon: FaTiktok },
];

/** EN paths of the legal pages; they link to legal.getgrowthrocket.com in the
    visitor's language (legalHref). */
const LEGAL: FooterLink[] = [
  { label: { en: "Privacy", nl: "Privacy" }, href: "/privacy-policy" },
  { label: { en: "Imprint", nl: "Colofon" }, href: "/imprint" },
  { label: { en: "Cookies", nl: "Cookies" }, href: "/cookie-policy" },
  { label: { en: "Terms", nl: "Voorwaarden" }, href: "/terms-and-conditions" },
];

/* ---------- Shared classes ---------- */

/** `.row` — the one 4-column grid every row sits on. */
const ROW =
  "grid grid-cols-[repeat(3,minmax(0,1.4fr))_minmax(0,1.2fr)] items-start gap-x-[clamp(32px,4vw,72px)] gap-y-[48px] max-lg:grid-cols-2 max-lg:gap-y-[40px] max-[640px]:gap-x-[12px]";

/** Faint separators (white at 7%). Rows 2–4 each draw the rule above them in
    the middle of the row gap; below 1024px the columns reflow, so the vertical
    rules (ColumnLines) are desktop-only. */
const RULE_TOP =
  "relative before:pointer-events-none before:absolute before:inset-x-0 before:top-[calc(var(--row-gap)/-2)] before:h-px before:bg-white/[0.07]";

const COL_GAP = "clamp(32px,4vw,72px)";

/** Vertical rules centred in the column gaps — never over a column. Spans the
    row plus half the row gap each side so it meets the horizontal rules.
    `only` limits the rules to those column indexes (0-based), for rows where
    an item spans a gap that must stay clear. */
function ColumnLines({
  count,
  only,
  top = "calc(var(--row-gap)/-2)",
  hideNarrow,
}: {
  count: number;
  only?: number[];
  top?: string;
  /** Lines to drop below 1260px — row 1's CTA overhangs the col 3/4 line there. */
  hideNarrow?: number[];
}) {
  return (
    <div
      aria-hidden
      style={{ top, bottom: "calc(var(--row-gap)/-2)" }}
      className="pointer-events-none absolute inset-x-0 hidden grid-cols-[repeat(3,minmax(0,1.4fr))_minmax(0,1.2fr)] gap-x-[clamp(32px,4vw,72px)] lg:grid"
    >
      {Array.from({ length: count }, (_, i) =>
        !only || only.includes(i) ? (
          <div
            key={i}
            className={
              "relative after:absolute after:inset-y-0 after:right-[calc(clamp(32px,4vw,72px)/-2)] after:w-px after:bg-white/[0.07]" +
              (hideNarrow?.includes(i) ? " max-[78.75rem]:after:hidden" : "")
            }
          />
        ) : (
          <div key={i} />
        ),
      )}
    </div>
  );
}

/** `.wideCol` — the last, wide column; full width on tablet and below. */
const WIDE_COL = "col-start-4 max-lg:col-span-full";

/* Below 1024px the footer's type and gaps scale with the screen width (vw),
   so a 360px phone gets 11px links / 9px headings / 10px chips and larger
   phones grow towards the caps (13px / 11px / 11px). The tight 12px column
   gap below 640px is what leaves room for those sizes while "Built for your
   trade" stays on one line and the chips still pair up. Desktop keeps its
   fixed sizes. */

/** `.colTitle`. Below 1024px a title sits closer to what it labels than to
    the block above it (the 40px row gap), so it reads as that block's
    heading rather than floating between two. */
const COL_TITLE =
  "mb-[22px] max-lg:mb-[clamp(8px,2.8vw,12px)] text-[12px] max-lg:text-[clamp(9px,2.5vw,11px)] font-bold uppercase tracking-[0.14em] text-[#e2f95c]";

/** COL_TITLE in the contact blocks, whose 6px flex gap adds to the margin. */
const CONTACT_TITLE =
  "mb-[22px] max-lg:mb-[clamp(3px,1.1vw,6px)] text-[12px] max-lg:text-[clamp(9px,2.5vw,11px)] font-bold uppercase tracking-[0.14em] text-[#e2f95c]";

/** `.colList a`. Block below 1024px so each row is as tall as the link's
    own text, not the 16px line box its list item would otherwise keep. */
const COL_LINK =
  "text-[15px] max-lg:block max-lg:text-[clamp(11px,3.05vw,13px)] max-lg:leading-[1.4] font-medium text-[#a9a4c2] transition-[color] duration-150 ease-[ease] hover:text-[#f4f2fb]";

/** `.contactBlock a`. */
const CONTACT_LINK =
  "text-[#f4f2fb] transition-[color] duration-150 ease-[ease] hover:text-[#e2f95c]";

/** `.footer a:focus-visible`, applied once on the footer. */
const FOCUS_RING =
  "[&_a:focus-visible]:rounded-[4px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-[3px] [&_a:focus-visible]:outline-[#e2f95c] [&_a:focus-visible]:outline-solid";

function LinkColumn({
  title,
  links,
  locale,
}: {
  title: Translation;
  links: FooterLink[];
  locale: Locale;
}) {
  return (
    <div>
      <h3 className={`m-0 ${COL_TITLE}`}>{title[locale]}</h3>
      <ul className="m-0 grid list-none gap-[14px] p-0 max-lg:gap-[clamp(4px,1.4vw,8px)]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={localizedHref(l.href, locale)} className={COL_LINK}>
              {l.label[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Same event the navbar's "Start with Growth Rocket" button fires. */
function openLeadForm() {
  window.dispatchEvent(new CustomEvent("open-lead-form"));
}

export default function Footer2({
  /** Drop the closing contact fold on pages that shouldn't end on that pitch. */
  showContactCta = true,
  /** Which copy the contact fold carries — see {@link ContactCta}. */
  contactVariant = "default",
}: {
  showContactCta?: boolean;
  contactVariant?: ContactCtaVariant;
} = {}) {
  const pathname = usePathname() || "/";
  const locale: Locale =
    pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";
  const copy = COPY[locale];
  const phone = useContactPhone();

  return (
    <>
      {showContactCta && <ContactCta variant={contactVariant} />}
      <FooterLoopStrip />
      <footer
        className={`box-border relative flex flex-col gap-(--row-gap) rounded-[28px] [--row-gap:72px] bg-[#0d0a1f] px-[clamp(24px,5vw,96px)] py-[48px] text-[#f4f2fb] max-[1279px]:[--row-gap:56px] max-lg:[--row-gap:48px] max-lg:mb-[52px] max-lg:py-[24px] max-[640px]:rounded-[20px] motion-reduce:[&_*]:transition-none! ${FOCUS_RING}`}
      >
        {/* Row 1 — logo + intro | headline (cols 2–3) | CTA (col 4).
            On desktop the intro spans two grid rows (the second is 1fr), so
            row one is only as tall as the headline and the CTA centres on it.
            The CTA sits in column 4 at every desktop width, so the row reads
            the same from 1024px up. Up to 1439px its side padding is trimmed.
            Below 1366px column 4 is narrower than the button (169px at 1024,
            212px at 1272 against its 226px), so there it is end-aligned and
            overhangs into the column gap on its left, and the headline drops
            to 31px so its lines end clear of the button. Below 1260px that
            overhang reaches the col 3/4 divider, so row 1 drops that line. */}
        <div className={`relative ${ROW} lg:grid-rows-[auto_1fr] lg:gap-y-0`}>
          <ColumnLines count={3} only={[0, 2]} top="-48px" hideNarrow={[2]} />
          <div className="col-start-1 max-lg:col-span-full lg:row-span-2">
            <Link
              href={localizedHref("/", locale)}
              className="inline-flex items-center"
              aria-label={copy.homeLabel}
            >
              <img
                src="/figma/icons/logos/logowhite.svg"
                alt="Growth Rocket"
                width={156}
                height={47}
                loading="lazy"
                className="h-[38px] w-auto"
              />
            </Link>
            <p className="m-0 mt-[20px] max-w-[44ch] text-[14px] leading-[1.65] text-[#a9a4c2]">
              {copy.intro}
            </p>
          </div>
          <p className="m-0 col-[2/4] font-bricolage text-[clamp(28px,3.2vw,40px)] leading-[1.05] font-semibold tracking-[-0.035em] max-lg:col-span-full max-lg:pt-[8px] lg:row-start-1 lg:max-[85.375rem]:text-[31px]">
            {copy.headline[0]}
            <br className="max-lg:hidden" /> {copy.headline[1]}
          </p>
          <ButtonF
            variant="lime"
            arrowSize={18}
            onClick={openLeadForm}
            className="shrink-0 justify-self-start whitespace-nowrap max-lg:col-span-full max-lg:mt-[-21px] lg:col-[4/5] lg:row-start-1 lg:self-center lg:max-[90rem]:px-[15px] lg:max-[85.375rem]:justify-self-end"
          >
            {copy.cta}
          </ButtonF>
        </div>

        {/* Row 2 — Features | Pricing | Company | Built for your trade */}
        <nav className={`${RULE_TOP} ${ROW}`} aria-label={copy.navLabel}>
          <ColumnLines count={3} />
          {COLUMNS.map((c) => (
            <LinkColumn key={c.title.en} {...c} locale={locale} />
          ))}
          {/* Below 1024px this sits beside Company (auto-placed into the
              second column) instead of spanning the row, so its chips shrink
              to 11px there — small enough for most to pair up in the ~145px
              column on a phone — and a long trade wraps inside its pill. */}
          <div className="col-start-4 max-lg:col-start-auto">
            <h3 className={`m-0 ${COL_TITLE}`}>{copy.trades}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-[8px] p-0 max-lg:gap-[clamp(2px,0.6vw,3px)]">
              {TRADES.map((t) => (
                <li key={t.href}>
                  <Link
                    href={localizedHref(t.href, locale)}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-[16px] py-[9px] text-[13px] leading-none font-medium whitespace-nowrap text-white transition-[border-color,color] duration-150 ease-[ease] hover:border-[#e2f95c] hover:text-[#e2f95c] max-lg:px-[clamp(6px,2vw,9px)] max-lg:py-[clamp(4px,1.4vw,6px)] max-lg:text-center max-lg:text-[clamp(10px,2.78vw,11px)] max-lg:leading-[1.25] max-lg:whitespace-normal"
                  >
                    {t.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Row 3 — Visit | Email | Call | Follow us */}
        <div className={`${RULE_TOP} ${ROW}`}>
          <ColumnLines count={3} />
          <address className="flex flex-col gap-[6px] text-[14px] max-lg:text-[clamp(11px,3.05vw,13px)] leading-[1.55] text-[#a9a4c2] not-italic max-[640px]:col-span-full">
            <h3 className={`m-0 ${CONTACT_TITLE}`}>{copy.visit}</h3>
            <strong className="font-bold text-[#f4f2fb]">
              {CONTACT_INFO.company}
            </strong>
            {CONTACT_INFO.addressLines.map((line) => (
              <span key={line}>
                {locale === "nl"
                  ? line.replace(/Netherlands$/, "Nederland")
                  : line}
              </span>
            ))}
          </address>
          <div className="flex flex-col gap-[6px] text-[14px] max-lg:text-[clamp(11px,3.05vw,13px)] leading-[1.55] text-[#a9a4c2] max-lg:[overflow-wrap:anywhere] max-[640px]:col-span-full">
            <h3 className={`m-0 ${CONTACT_TITLE}`}>{copy.email}</h3>
            {EMAILS.map((e) => (
              <a key={e.href} href={e.href} className={CONTACT_LINK}>
                {e.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-[6px] text-[14px] max-lg:text-[clamp(11px,3.05vw,13px)] leading-[1.55] text-[#a9a4c2]">
            <h3 className={`m-0 ${CONTACT_TITLE}`}>{copy.call}</h3>
            <a href={phoneHref(phone)} className={CONTACT_LINK}>
              {phone}
            </a>
          </div>
          <div
            className={`flex flex-col gap-[6px] text-[14px] max-lg:text-[clamp(11px,3.05vw,13px)] leading-[1.55] text-[#a9a4c2] ${WIDE_COL}`}
          >
            <h3 className={`m-0 ${CONTACT_TITLE}`}>{copy.followUs}</h3>
            <div className="flex items-center gap-[8px]">
              {SOCIALS.map(({ label, href: baseHref, Icon }) => {
                // WhatsApp follows the visitor's number (contact/phones.ts).
                const href =
                  label === "WhatsApp" ? whatsappHref(phone) : baseHref;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-[38px] place-items-center rounded-full border border-white/30 text-[15px] text-[#a9a4c2] transition-[color,border-color] duration-200 ease-[ease] hover:border-[#e2f95c] hover:text-[#e2f95c]"
                  >
                    <Icon />
                    {/* Anchor text for crawlers; the icon alone reads as an
                        empty link. */}
                    <span className="sr-only">{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 4 — copyright | legal */}
        <div className={`${RULE_TOP} ${ROW} items-center! max-lg:gap-y-[14px]`}>
          <p className="m-0 col-[1/3] text-[13px] leading-[1.5] text-[#a9a4c2] max-lg:col-span-full max-lg:text-[clamp(10px,2.78vw,12px)]">
            © {new Date().getFullYear()} Growth Rocket {copy.by}{" "}
            <a
              href="https://www.parashifttech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#f4f2fb] hover:underline"
            >
              Parashift Technologies B.V.
            </a>
          </p>
          <nav
            className="col-[3/-1] flex flex-wrap gap-[24px] justify-self-end text-[13px] text-[#a9a4c2] max-lg:col-span-full max-lg:justify-self-start max-lg:gap-x-[18px] max-lg:gap-y-[8px] max-lg:text-[clamp(10px,2.78vw,12px)]"
            aria-label={copy.legalLabel}
          >
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={legalHref(l.href, locale)}
                className="transition-[color] duration-150 ease-[ease] hover:text-[#f4f2fb]"
              >
                {l.label[locale]}
              </Link>
            ))}
            <button
              type="button"
              onClick={openCookiePreferences}
              className="cursor-pointer transition-[color] duration-150 ease-[ease] hover:text-[#f4f2fb]"
            >
              {copy.cookieSettings}
            </button>
          </nav>
        </div>
      </footer>
    </>
  );
}
