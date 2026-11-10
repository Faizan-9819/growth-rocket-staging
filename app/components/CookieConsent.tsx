"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { lenisStop, lenisStart } from "./LenisProvider";
import ButtonF from "./ui/ButtonF";
import { useLanguage } from "../i18n/LanguageProvider";
import { legalHref } from "../lib/legal";

export const COOKIE_CONSENT_NAME = "gr_cookie_consent";
export const COOKIE_CONSENT_EVENT = "gr-cookie-consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "gr-open-cookie-preferences";
export type ConsentValue = "granted" | "denied" | "pending";
/** The two optional categories the Cookie Policy names; "strictly
    necessary" is always on and needs no choice. */
export type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
};

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT));
}

/** The Cookie Policy version a choice is made under. A choice made under an
    older version counts as no choice, so the banner asks again. */
export const CONSENT_POLICY_VERSION = "1.0";
/** A choice is remembered for 6 months, then the banner asks again
    (Cookie Policy §2). */
const CONSENT_MAX_AGE_S = 60 * 60 * 24 * 183;
/** Where each choice is recorded for 5 years (Cookie Policy §7). The store
    doesn't exist yet: until NEXT_PUBLIC_CONSENT_LOG_URL is set, nothing is
    sent. */
const CONSENT_LOG_URL = process.env.NEXT_PUBLIC_CONSENT_LOG_URL;

type Prefs = ConsentPrefs;

const DEFAULT_PREFS: Prefs = { analytics: false, marketing: false };
const ALL_ON: Prefs = { analytics: true, marketing: true };

type StoredConsent = {
  consent: ConsentValue;
  prefs: Prefs;
  /** Pseudonymous ID that links a visitor's choices in the consent records. */
  consentId?: string;
};

/**
 * The visitor's current choice. Anything older than 6 months, made under an
 * older policy version, or stored in an earlier format counts as no choice
 * ("pending"), so the banner shows again and nothing optional loads.
 */
export function readStoredConsent(): StoredConsent {
  if (typeof document === "undefined")
    return { consent: "pending", prefs: DEFAULT_PREFS };
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_NAME);
    if (!raw) return { consent: "pending", prefs: DEFAULT_PREFS };
    const parsed = JSON.parse(raw);
    const current =
      (parsed.consent === "granted" || parsed.consent === "denied") &&
      parsed.policyVersion === CONSENT_POLICY_VERSION &&
      typeof parsed.timestamp === "number" &&
      Date.now() - parsed.timestamp < CONSENT_MAX_AGE_S * 1000;
    if (!current)
      return {
        consent: "pending",
        prefs: DEFAULT_PREFS,
        consentId: parsed.consentId,
      };
    return {
      consent: parsed.consent,
      prefs: {
        analytics: parsed.prefs?.analytics === true,
        marketing: parsed.prefs?.marketing === true,
      },
      consentId: parsed.consentId,
    };
  } catch {
    // An earlier plain-string format: ask again.
    return { consent: "pending", prefs: DEFAULT_PREFS };
  }
}

function writeStored(
  consent: "granted" | "denied",
  prefs: Prefs,
  consentId: string,
): number {
  const timestamp = Date.now();
  localStorage.setItem(
    COOKIE_CONSENT_NAME,
    JSON.stringify({
      consent,
      prefs,
      timestamp,
      policyVersion: CONSENT_POLICY_VERSION,
      consentId,
    }),
  );
  document.cookie = `${COOKIE_CONSENT_NAME}=${consent}; path=/; max-age=${CONSENT_MAX_AGE_S}; SameSite=Lax`;
  return timestamp;
}

/** Sends the choice to the consent record store, once one is configured. */
function recordConsent(record: {
  consentId: string;
  choice: Prefs;
  timestamp: string;
  policyVersion: string;
}) {
  if (!CONSENT_LOG_URL) return;
  const body = JSON.stringify(record);
  try {
    const queued = navigator.sendBeacon?.(
      CONSENT_LOG_URL,
      new Blob([body], { type: "application/json" }),
    );
    if (!queued)
      fetch(CONSENT_LOG_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
  } catch {}
}

/* First-party cookies each category's tools set on our domain: Google
   Analytics and Microsoft Clarity for analytics, Google Ads for marketing.
   Cookies on the providers' own domains (Microsoft's MUID…) can't be removed
   from here; the Cookie Policy says so. */
const ANALYTICS_COOKIES = /^(_ga|_gid|_gat|_clck|_clsk)/;
const MARKETING_COOKIES = /^(_gcl|_dc_gtm)/;

function clearTrackingCookies(off: { analytics: boolean; marketing: boolean }) {
  if (typeof document === "undefined") return;
  const all = document.cookie.split(";").map((c) => c.trim().split("=")[0]);
  const host = window.location.hostname;
  const domains = [
    host,
    ...host
      .split(".")
      .slice(1)
      .map((_, i, a) => a.slice(i).join(".")),
  ];
  for (const name of all) {
    const clear =
      (off.analytics && ANALYTICS_COOKIES.test(name)) ||
      (off.marketing && MARKETING_COOKIES.test(name));
    if (!clear) continue;
    for (const d of domains) {
      document.cookie = `${name}=; path=/; domain=${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${name}=; path=/; domain=.${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  if (off.marketing) {
    try {
      localStorage.removeItem("_gcl_ls");
    } catch {}
  }
}

function broadcast(consent: ConsentValue, prefs: Prefs) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: { consent, prefs } }),
  );
}

// ── Toggle ────────────────────────────────────────────────────────────────────
function Toggle({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={id}
      id={id}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className="relative flex-shrink-0 w-[44px] h-[24px] rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b2dce] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      style={{ background: checked ? "#5b2dce" : "#ded8e7" }}
    >
      <span
        className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
      />
    </button>
  );
}

// ── Category row ─────────────────────────────────────────────────────────────
function CategoryRow({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  alwaysOnLabel = "Always on",
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  id: string;
  alwaysOnLabel?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#ded8e7] last:border-b-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <label
            htmlFor={id}
            className="font-sans text-[14px] font-semibold text-[#0a0516] cursor-pointer"
          >
            {label}
          </label>
          {disabled && (
            <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-[#0a0516] bg-[#e4fa65] px-2 py-0.5 rounded-full">
              {alwaysOnLabel}
            </span>
          )}
        </div>
        {/* <p className="text-[13px] text-[var(--color-dolphin)] leading-[1.5]">
          {description}
        </p> */}
      </div>
      <Toggle
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

// ── Preferences Panel ─────────────────────────────────────────────────────────
function PreferencesPanel({
  prefs,
  onPrefsChange,
  onSave,
  onAcceptAll,
  onClose,
}: {
  prefs: Prefs;
  onPrefsChange: (p: Prefs) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const set = (key: keyof Prefs) => (v: boolean) =>
    onPrefsChange({ ...prefs, [key]: v });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t({ en: "Cookie preferences", nl: "Cookievoorkeuren" })}
      className="fixed inset-0 z-[1600] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
        className="relative w-full sm:max-w-[520px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-4 border-b border-[#ded8e7]">
          <div>
            <h2 className="font-bricolage text-[20px] font-semibold tracking-[-0.03em] text-[#0a0516] leading-tight">
              {t({ en: "Cookie preferences", nl: "Cookievoorkeuren" })}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t({
              en: "Close preferences",
              nl: "Voorkeuren sluiten",
            })}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#eeeeee] text-[#625a70] hover:text-[#0a0516] transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto px-6 overscroll-contain">
          <CategoryRow
            id="essential"
            label={t({ en: "Essential", nl: "Essentieel" })}
            description=""
            checked={true}
            disabled={true}
            alwaysOnLabel={t({ en: "Always on", nl: "Altijd aan" })}
          />
          <CategoryRow
            id="analytics"
            label={t({ en: "Analytics", nl: "Analytics" })}
            description=""
            checked={prefs.analytics}
            onChange={set("analytics")}
          />
          <CategoryRow
            id="marketing"
            label={t({ en: "Marketing", nl: "Marketing" })}
            description=""
            checked={prefs.marketing}
            onChange={set("marketing")}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#ded8e7] flex flex-col sm:flex-row gap-2">
          <ButtonF
            variant="pill"
            size="custom"
            arrow={false}
            onClick={onAcceptAll}
            className="min-h-[42px] flex-1 justify-center border border-[#ded8e7] bg-white px-[18px] text-[13px] text-[#0a0516] hover:border-[#0a0516]"
          >
            {t({ en: "Accept all", nl: "Alles accepteren" })}
          </ButtonF>
          <ButtonF
            variant="violet"
            size="custom"
            arrow={false}
            onClick={onSave}
            className="min-h-[42px] flex-1 justify-center px-[18px] text-[13px]"
          >
            {t({ en: "Save preferences", nl: "Voorkeuren opslaan" })}
          </ButtonF>
        </div>
      </motion.div>
    </div>
  );
}

// ── Cookie icon ───────────────────────────────────────────────────────────────
function CookieIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4.5 w-4.5"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9" cy="9.2" r="1.15" fill="currentColor" />
      <circle cx="15" cy="11" r="1.05" fill="currentColor" />
      <circle cx="10.4" cy="15" r="1.15" fill="currentColor" />
      <circle cx="14.6" cy="15.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function CookieConsent() {
  const { t } = useLanguage();
  const [bannerOpen, setBannerOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const { consent, prefs: stored } = readStoredConsent();
    if (consent === "pending") {
      setBannerOpen(true);
    } else {
      setPrefs(stored);
    }
  }, []);

  // Lock scroll whenever the panel is open (same pattern as form modals)
  useEffect(() => {
    if (panelOpen) {
      lenisStop();
      return () => lenisStart();
    }
  }, [panelOpen]);

  // Keep the WhatsApp FAB clear of the full-width consent bar
  useEffect(() => {
    if (!bannerOpen) {
      setBarHeight(0);
      return;
    }
    const el = barRef.current;
    if (!el) return;
    const measure = () => setBarHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bannerOpen]);

  // Allow other parts of the app (e.g. the footer "Cookie settings" link) to open the panel
  useEffect(() => {
    const handler = () => {
      setBannerOpen(false);
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
    return () =>
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
  }, []);

  function commit(consent: "granted" | "denied", p: Prefs) {
    const before = readStoredConsent();
    const consentId = before.consentId ?? crypto.randomUUID();
    const timestamp = writeStored(consent, p, consentId);
    recordConsent({
      consentId,
      choice: p,
      timestamp: new Date(timestamp).toISOString(),
      policyVersion: CONSENT_POLICY_VERSION,
    });
    // Every category that is off loses its cookies on our domain.
    clearTrackingCookies({ analytics: !p.analytics, marketing: !p.marketing });
    broadcast(consent, p);
    setBannerOpen(false);
    setPanelOpen(false);
    setPrefs(p);
    // Scripts that already run can't be unloaded, so a withdrawal reloads
    // the page: the tools stop loading straight away (Cookie Policy §2).
    const withdrawn =
      (before.prefs.analytics && !p.analytics) ||
      (before.prefs.marketing && !p.marketing);
    if (withdrawn) window.location.reload();
  }

  const acceptAll = () => commit("granted", ALL_ON);
  const rejectAll = () => commit("denied", DEFAULT_PREFS);
  const savePrefs = () =>
    commit(prefs.analytics || prefs.marketing ? "granted" : "denied", prefs);

  const openPanel = () => {
    setBannerOpen(false);
    setPanelOpen(true);
  };

  return (
    <>
      {/* Banner — full-width bottom strip: icon · title · description · actions */}
      <AnimatePresence>
        {bannerOpen && (
          <motion.div
            ref={barRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.18 }}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            // Flush to the bottom at every width and above everything else —
            // on phones it covers the sticky Book / Start bar until the
            // visitor answers. (The preferences panel only opens once the
            // banner has closed.) While a form modal is open it steps aside
            // (html[data-form-open], set by StickyActions) so it doesn't cover
            // the form's submit button, and returns when the form closes.
            className="fixed inset-x-0 bottom-0 z-[2000] [html[data-form-open]_&]:hidden"
          >
            <div className="rounded-t-[13px] border-t border-[#ded8e7] bg-white shadow-[0_-10px_34px_rgba(10,5,22,0.10)] lg:rounded-none">
              <div className="flex w-full flex-col gap-2.5 px-3.5 py-3 lg:flex-row lg:items-center lg:gap-6 lg:px-8 lg:py-4">
                {/* Icon + title + description */}
                <div className="flex min-w-0 items-start gap-2.5 lg:items-center lg:gap-3">
                  <span className="mt-px grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-[#e4fa65] text-[#0a0516] lg:mt-0 lg:h-8 lg:w-8">
                    <CookieIcon />
                  </span>
                  <p className="min-w-0 font-sans text-[12px] leading-[1.5] text-[#625a70] lg:text-[13px] lg:leading-[1.6]">
                    <span className="font-bricolage text-[13px] font-semibold tracking-[-0.01em] text-[#0a0516] lg:text-[14px]">
                      {t({
                        en: "We use cookies",
                        nl: "Wij gebruiken cookies",
                      })}
                    </span>
                    <span className="mx-1.5 text-[#c9c2d4]" aria-hidden>
                      —
                    </span>
                    {t({
                      en: "We use cookies to make this website work properly and to understand how it's used. You can accept all, reject non-essential, or choose which ones to allow.",
                      nl: "We gebruiken cookies om deze website goed te laten werken en om te begrijpen hoe deze wordt gebruikt. Je kunt alle cookies accepteren, niet-essentiële cookies weigeren of zelf kiezen welke cookies je toestaat.",
                    })}{" "}
                    <Link
                      href={t({
                        en: legalHref("/cookie-policy", "en"),
                        nl: legalHref("/cookie-policy", "nl"),
                      })}
                      className="font-medium text-[#5b2dce] underline underline-offset-2 hover:text-[#0a0516]"
                    >
                      {t({ en: "Cookie Policy", nl: "Cookiebeleid" })}
                    </Link>
                    {" · "}
                    <Link
                      href={t({
                        en: legalHref("/privacy-policy", "en"),
                        nl: legalHref("/privacy-policy", "nl"),
                      })}
                      className="font-medium text-[#5b2dce] underline underline-offset-2 hover:text-[#0a0516]"
                    >
                      {t({ en: "Privacy Policy", nl: "Privacybeleid" })}
                    </Link>
                    {/* On phones "Manage preferences" is a link here rather
                        than a third button, so the actions fit one row. */}
                    <span className="lg:hidden">
                      {" · "}
                      <button
                        type="button"
                        onClick={openPanel}
                        className="cursor-pointer font-semibold text-[#0a0516] underline underline-offset-2 hover:text-[#5b2dce]"
                      >
                        {t({
                          en: "Manage preferences",
                          nl: "Voorkeuren beheren",
                        })}
                      </button>
                    </span>
                  </p>
                </div>

                {/* Actions — home2 pills: outlined secondary, violet primary. */}
                <div className="flex flex-shrink-0 items-center gap-2 lg:ml-auto">
                  <ButtonF
                    variant="pill"
                    size="custom"
                    arrow={false}
                    onClick={rejectAll}
                    className="min-h-[34px] flex-1 justify-center border border-[#ded8e7] bg-white px-[14px] py-[6px] text-center text-[12px] leading-[1.2] whitespace-normal text-[#0a0516] hover:border-[#0a0516] lg:min-h-[40px] lg:flex-none lg:px-[18px] lg:text-[13px] lg:whitespace-nowrap"
                  >
                    {t({
                      en: "Reject non-essential",
                      nl: "Niet-essentiële cookies weigeren",
                    })}
                  </ButtonF>
                  <ButtonF
                    variant="pill"
                    size="custom"
                    arrow={false}
                    onClick={openPanel}
                    className="hidden min-h-[40px] justify-center border border-[#ded8e7] bg-white px-[18px] text-[13px] whitespace-nowrap text-[#0a0516] hover:border-[#0a0516] lg:inline-flex"
                  >
                    {t({ en: "Manage preferences", nl: "Voorkeuren beheren" })}
                  </ButtonF>
                  <ButtonF
                    variant="violet"
                    size="custom"
                    arrow={false}
                    onClick={acceptAll}
                    className="min-h-[34px] flex-1 justify-center px-[14px] py-[6px] text-[12px] whitespace-nowrap lg:min-h-[40px] lg:flex-none lg:px-[20px] lg:text-[13px]"
                  >
                    {t({ en: "Accept all", nl: "Alles accepteren" })}
                  </ButtonF>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Panel */}
      <AnimatePresence>
        {panelOpen && (
          <PreferencesPanel
            prefs={prefs}
            onPrefsChange={setPrefs}
            onSave={savePrefs}
            onAcceptAll={acceptAll}
            onClose={() => setPanelOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* WhatsApp FAB — always visible. Below lg it is a tab on the right
          edge, 12px above the mobile action bar (or above the cookie banner
          while that covers the bar), rounded and bordered on its left; from
          lg it stands on the bottom edge, rounded on top. */}
      <a
        href="https://wa.me/31857444176"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ "--cc-bar-h": `${barHeight}px` } as CSSProperties}
        className="[html[data-form-open]_&]:hidden fixed z-[1400] bottom-[max(64px,calc(var(--cc-bar-h,0px)_+_12px))] right-0 lg:bottom-[var(--cc-bar-h,0px)] top-auto lg:right-4 group w-12 h-12 rounded-l-full lg:rounded-bl-none lg:rounded-tr-full flex items-center justify-center shadow-lg border border-r-0 lg:border-r lg:border-b-0 border-[var(--color-mist)] bg-white origin-right lg:origin-bottom transition-[bottom,transform] duration-300 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-violet-42)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 text-[var(--color-violet-42)] fill-[var(--color-violet-42)]"
          aria-hidden
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.664 4.882 1.822 6.928L2 30l7.302-1.79A13.9 13.9 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.4a11.47 11.47 0 0 1-5.852-1.606l-.42-.25-4.332 1.064 1.094-4.21-.273-.432A11.384 11.384 0 0 1 4.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4Zm6.26-8.48c-.342-.172-2.024-1-2.338-1.112-.314-.114-.542-.172-.77.172-.228.342-.884 1.112-1.082 1.342-.2.228-.4.258-.742.086-.342-.172-1.444-.532-2.75-1.696-1.016-.906-1.702-2.026-1.902-2.368-.2-.342-.022-.526.15-.698.156-.154.342-.4.514-.6.17-.2.228-.342.342-.57.114-.228.056-.428-.028-.6-.086-.172-.77-1.856-1.056-2.542-.278-.668-.56-.578-.77-.588l-.656-.012c-.228 0-.6.086-.914.428s-1.2 1.172-1.2 2.856 1.228 3.312 1.4 3.542c.17.228 2.416 3.688 5.854 5.172.818.354 1.456.566 1.954.724.82.262 1.568.226 2.158.138.658-.1 2.024-.828 2.31-1.626.284-.8.284-1.484.2-1.626-.086-.142-.314-.228-.656-.4Z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg bg-[var(--color-haiti)] px-3 py-1.5 text-[12px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-md">
          WhatsApp
        </span>
      </a>
    </>
  );
}
