"use client";

import type { ReactNode } from "react";
import { openCookiePreferences } from "../CookieConsent";
import { LINK_CLASS } from "./LegalContent";

/**
 * "Cookie settings" in the legal texts: opens the cookie preferences panel,
 * as the footer link does. A client component so the server-rendered legal
 * pages can use it.
 */
export default function CookieSettingsButton({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={`cursor-pointer ${LINK_CLASS}`}
    >
      {children}
    </button>
  );
}
