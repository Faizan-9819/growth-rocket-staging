"use client";

import { useSyncExternalStore } from "react";
import {
  CONTACT_INFO,
  PHONE_REGION_COOKIE,
  phoneForRegion,
} from "../lib/contact";

function readPhoneRegion(): string | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${PHONE_REGION_COOKIE}=([^;]+)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

// The cookie only changes on a page request, so there is nothing to watch.
const subscribe = () => () => {};
const getSnapshot = () => phoneForRegion(readPhoneRegion());
const getServerSnapshot = () => CONTACT_INFO.phone;

/**
 * The phone number to show this visitor (see REGIONAL_PHONES in
 * lib/contact): CONTACT_INFO.phone on the server and during hydration, so
 * pages stay static, then the visitor's regional number once mounted.
 */
export function useContactPhone(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
