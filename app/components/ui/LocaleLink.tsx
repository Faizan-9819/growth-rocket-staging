"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * next/link for an internal path, pointed at the active locale's version of
 * the page: on a Dutch page `/pricing` becomes `/nl/prijzen`, `/about` becomes
 * `/nl/over-ons`. Hrefs that are already localized pass through unchanged, so
 * callers can write the EN path and stop thinking about the locale.
 *
 * A client component of its own so server components (ButtonF in the About
 * folds, the pricing page, …) get localized links too.
 */
export default function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const { locale } = useLanguage();
  return <Link href={localizedHref(href, locale)} {...rest} />;
}
