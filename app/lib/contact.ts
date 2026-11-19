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
  phone: "+31 85 744 4176",
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
      label: "WhatsApp",
      href: "https://wa.me/31857444176",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@growthrocketnederland",
    },
  ],
} as const;

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** The WhatsApp chat link for a phone number (wa.me takes digits only). */
export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
}

/**
 * Geo phone number: visitors from these countries (ISO 3166-1 alpha-2) see
 * their own number in place of CONTACT_INFO.phone; everyone else keeps
 * CONTACT_INFO.phone. The number is used for both calls and WhatsApp. The
 * legal pages (imprint, privacy policy, terms) keep the main number.
 *
 * proxy.ts stores the visitor's country code in PHONE_REGION_COOKIE when it is
 * listed here (from the IP, or `?country=XX` when testing, like pricing), and
 * useContactPhone (app/components/useContactPhone.ts) shows the number.
 *
 * Shared by proxy.ts and the client, so nothing server-only belongs here.
 */
export const REGIONAL_PHONES: Record<string, string> = {
  AE: "+971 1111111111", // United Arab Emirates
};

/** The visitor's phone region (a REGIONAL_PHONES key), set by proxy.ts. */
export const PHONE_REGION_COOKIE = "ggr_phone_region";

/** The REGIONAL_PHONES key for a country, or null for the main number. */
export function phoneRegionForCountry(country: string): string | null {
  const c = country.trim().toUpperCase();
  return Object.prototype.hasOwnProperty.call(REGIONAL_PHONES, c) ? c : null;
}

/** The phone number to show for a phone region (null → the main number). */
export function phoneForRegion(region: string | null | undefined): string {
  const c = region?.trim().toUpperCase();
  return c && Object.prototype.hasOwnProperty.call(REGIONAL_PHONES, c)
    ? REGIONAL_PHONES[c]
    : CONTACT_INFO.phone;
}
