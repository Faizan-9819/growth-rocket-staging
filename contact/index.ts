/**
 * Growth Rocket's contact details — the one place they are set.
 *
 *   phones.ts  phone / WhatsApp numbers per country
 *   index.ts   company, address, emails, social links and helpers
 *
 * See README.md for how the site uses them.
 *
 * Shared by proxy.ts, server pages and client components, so nothing
 * server-only (and no "use client") belongs here.
 */
import { DEFAULT_PHONE_REGION, PHONES, type PhoneRegion } from "./phones";

export { DEFAULT_PHONE_REGION, PHONES, type PhoneRegion } from "./phones";

/** The main number (Netherlands): the default, and what the legal pages show. */
export const MAIN_PHONE: string = PHONES[DEFAULT_PHONE_REGION];

/** The call link for a phone number. */
export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** The WhatsApp chat link for a phone number (wa.me takes digits only). */
export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
}

export const CONTACT_INFO = {
  brand: "Growth Rocket",
  company: "Parashift Technologies B.V.",
  kvkno: "KVK Number: 42002389",
  addressLines: [
    "World Trade Center",
    "Prinses Margrietplantsoen 33",
    "2595 AM 's-Gravenhage, Netherlands",
  ],
  addressLinesNl: [
    "World Trade Center",
    "Prinses Margrietplantsoen 33",
    "2595 AM 's-Gravenhage, Nederland",
  ],
  emails: ["sales@getgrowthrocket.com", "support@getgrowthrocket.com"],
  /** The main number; visitors' own number comes from useContactPhone. */
  phone: MAIN_PHONE,
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/getgrowthrocket/",
    },
    {
      label: "LinkedIn",
      // The public company page. LinkedIn answers crawlers (Semrush, etc.)
      // with status 999, so audits list it as a broken link; it works for
      // visitors.
      href: "https://www.linkedin.com/company/getgrowthrocket/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@getgrowthrocket",
    },
    {
      label: "X / Twitter",
      href: "https://x.com/getgrowthrocket",
    },
    {
      // The main number; components swap in the visitor's number.
      label: "WhatsApp",
      href: whatsappHref(MAIN_PHONE),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@growthrocketnederland",
    },
  ],
} as const;

/* ---------- The visitor's number ---------- */

/**
 * proxy.ts stores the visitor's country in PHONE_REGION_COOKIE when it has a
 * number of its own in PHONES (from the IP, or `?country=XX` when testing,
 * like pricing); useContactPhone (app/components/useContactPhone.ts) then
 * shows that number. No cookie → the main number.
 */
export const PHONE_REGION_COOKIE = "ggr_phone_region";

function isPhoneRegion(value: string): value is PhoneRegion {
  return Object.prototype.hasOwnProperty.call(PHONES, value);
}

/**
 * The phone region to store for a country, or null when the country gets the
 * main number (it isn't listed in PHONES, or it is the default region).
 */
export function phoneRegionForCountry(country: string): PhoneRegion | null {
  const c = country.trim().toUpperCase();
  return isPhoneRegion(c) && c !== DEFAULT_PHONE_REGION ? c : null;
}

/** The phone number to show for a phone region (none → the main number). */
export function phoneForRegion(region: string | null | undefined): string {
  const c = region?.trim().toUpperCase();
  return c && isPhoneRegion(c) ? PHONES[c] : MAIN_PHONE;
}
