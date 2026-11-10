"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, type Locale, type Translation } from "./config";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (entry: Translation) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${oneYear}; SameSite=Lax`;
}

/* /nl URLs that proxy.ts serves from an EN page (its NL_FALLBACK_TO_EN lists).
   Their server render ran under the EN path, so they must hydrate on the
   initial locale and only switch once mounted, or the two renders disagree. */
const NL_REWRITES = new Set(["/nl/blog", "/nl/dpa"]);

function pathLocale(pathname: string | null): Locale {
  return pathname === "/nl" || pathname?.startsWith("/nl/") ? "nl" : "en";
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  /* Seeded from the URL, so /nl pages render Dutch copy — and /nl links —
     on the server rather than flipping from EN after hydration. */
  const [locale, setLocaleState] = useState<Locale>(() =>
    pathname && !NL_REWRITES.has(pathname)
      ? pathLocale(pathname)
      : initialLocale,
  );

  useEffect(() => {
    const next = pathLocale(pathname);
    setLocaleState(next);
    if (typeof document !== "undefined") document.documentElement.lang = next;
  }, [pathname]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocaleCookie(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  }, []);

  const t = useCallback(
    (entry: Translation) => entry[locale] ?? entry.en,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
