"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  readStoredConsent,
  type ConsentPrefs,
} from "./CookieConsent";

/**
 * Every Google and Microsoft tool on the site, loaded only with consent
 * (Cookie Policy §2: "No Google or Microsoft scripts load and no data is sent
 * to them before you consent"):
 *
 * - Google Tag Manager (which carries the GA4 and Microsoft Clarity tags)
 *   loads once analytics or marketing is accepted;
 * - GA4 loads with analytics;
 * - the Google Ads tag loads with marketing.
 *
 * Before any of them, Google Consent Mode gets its defaults (everything
 * denied) and then the visitor's choice, so the tags inside GTM know what
 * they may do. Ad personalisation always stays denied: we don't use Google
 * Ads for remarketing. Withdrawing a category reloads the page
 * (CookieConsent), so a tool never keeps running after its consent is gone.
 */

type ConsentState = Record<
  "analytics_storage" | "ad_storage" | "ad_user_data" | "ad_personalization",
  "granted" | "denied"
>;

const DENIED: ConsentState = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

const GADS_CONVERSION = "AW-18192680995/lhYiCM_hqLQcEKOQ-eJD";

type Gtag = (...args: unknown[]) => void;

/** `gtag()` as Google defines it: a push of its arguments onto dataLayer,
    read by whichever Google tag loads later. */
function gtag(...args: unknown[]) {
  const w = window as typeof window & { dataLayer?: unknown[]; gtag?: Gtag };
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag)
    w.gtag = function () {
      // gtag.js only reads the arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  w.gtag(...args);
}

let consentDefaultsSent = false;

/** Tells Consent Mode what the visitor allows; the defaults go first, once. */
function signalConsent(prefs: ConsentPrefs) {
  if (!consentDefaultsSent) {
    gtag("consent", "default", DENIED);
    consentDefaultsSent = true;
  }
  gtag("consent", "update", {
    ...DENIED,
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
  } satisfies ConsentState);
}

const DEFAULT_PREFS: ConsentPrefs = { analytics: false, marketing: false };

/**
 * True once the page has loaded and the browser is next idle. The tags then
 * load without competing with hydration and the first paint — on a mid-range
 * phone they were ~1.8s of main-thread blocking during load. Anything pushed
 * to dataLayer before then (consent, the Ads config, a conversion) is queued
 * and sent once they arrive.
 */
function usePageReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let idleId: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const markReady = () => setReady(true);
    const onLoad = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(markReady, { timeout: 2000 });
      } else {
        timer = setTimeout(markReady, 1);
      }
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      clearTimeout(timer);
    };
  }, []);
  return ready;
}

let adsConfigured = false;

export default function Analytics({
  gtmId,
  gaId,
  gadsId,
}: {
  gtmId: string;
  gaId: string;
  gadsId: string;
}) {
  const [prefs, setPrefs] = useState<ConsentPrefs>(DEFAULT_PREFS);
  const [resolved, setResolved] = useState(false);
  const pageReady = usePageReady();

  useEffect(() => {
    const { prefs: stored } = readStoredConsent();
    if (stored.analytics || stored.marketing) signalConsent(stored);
    setPrefs(stored);
    setResolved(true); // nothing optional loads until the choice is read

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ prefs?: ConsentPrefs }>).detail;
      if (!detail?.prefs) return;
      if (detail.prefs.analytics || detail.prefs.marketing)
        signalConsent(detail.prefs);
      setPrefs(detail.prefs);
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, handler);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handler);
  }, []);

  // A tap on any phone link is an Ads conversion — with marketing consent
  // only (fireLeadConversion checks it).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) fireLeadConversion();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const ready = pageReady && resolved;

  // The Ads tag's setup, queued for gtag.js (rendered below) to pick up.
  useEffect(() => {
    if (!ready || !prefs.marketing || adsConfigured) return;
    gtag("js", new Date());
    gtag("config", gadsId, { allow_ad_personalization_signals: false });
    adsConfigured = true;
  }, [ready, prefs.marketing, gadsId]);

  return (
    <>
      {ready && (prefs.analytics || prefs.marketing) && (
        <GoogleTagManager gtmId={gtmId} />
      )}
      {ready && prefs.analytics && <GoogleAnalytics gaId={gaId} />}
      {ready && prefs.marketing && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

/** Google Ads conversion for a lead (a sent enquiry or booking, a phone
    tap). Sent only with marketing consent; never any form content. */
export function fireLeadConversion() {
  if (typeof window === "undefined") return;
  if (!readStoredConsent().prefs.marketing) return;
  gtag("event", "conversion", {
    send_to: GADS_CONVERSION,
    value: 1.0,
    currency: "INR",
  });
}
