/**
 * Growth Rocket's phone numbers — the one place they are set.
 *
 * Each number is used for both calls and WhatsApp. Visitors see the number of
 * their country (from their IP address); a country not listed here gets the
 * Netherlands number, DEFAULT_PHONE_REGION.
 *
 * Keys are ISO 3166-1 alpha-2 country codes. Write each number with its "+"
 * and country code; spaces are only for display (call and WhatsApp links use
 * the digits).
 */
export const PHONES = {
  NL: "+31 85 744 4176", // Netherlands — also everyone not listed below
  AE: "+971 558554594", // United Arab Emirates
  IN: "+91 8108270911", // India
} as const;

export type PhoneRegion = keyof typeof PHONES;

/** The region whose number every other country sees. */
export const DEFAULT_PHONE_REGION: PhoneRegion = "NL";
