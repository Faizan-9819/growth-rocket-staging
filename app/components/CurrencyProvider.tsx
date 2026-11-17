"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CURRENCY_COOKIE,
  isCurrencyCode,
  type CurrencyCode,
  type EurRates,
} from "../lib/currency";
import { createConverter } from "../lib/currency-dom";
import { PRICING, priceView, type PriceLocale, type PriceView, type Pricing } from "@/pricing";

export type CurrencyInfo = {
  code: CurrencyCode;
  symbol: string;
  /** Euro → this currency, for figures that aren't our prices. */
  rate: number;
  /** This currency's prices (pricing/). */
  pricing: Pricing;
};

const EUR_INFO: CurrencyInfo = {
  code: "EUR",
  symbol: PRICING.EUR.symbol,
  rate: 1,
  pricing: PRICING.EUR,
};
const CurrencyContext = createContext<CurrencyInfo>(EUR_INFO);

/** The visitor's currency; EUR on the server and until mounted. */
export function useCurrency() {
  return useContext(CurrencyContext);
}

/**
 * The visitor's prices, formatted for `locale` — for components that build
 * their price lines themselves (billing cards, price blocks). EUR on the
 * server and until mounted, so the first render matches the static page.
 */
export function usePriceView(locale: PriceLocale): PriceView {
  const { pricing } = useCurrency();
  return useMemo(() => priceView(pricing, locale), [pricing, locale]);
}

function readCurrencyCookie(): CurrencyCode | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CURRENCY_COOKIE}=([^;]+)`),
  );
  const value = match ? decodeURIComponent(match[1]) : null;
  return isCurrencyCode(value) ? value : null;
}

/**
 * Shows the site's prices in the visitor's currency (see lib/currency and
 * /pricing).
 *
 * Pages stay static and render in euros. Once mounted, this reads the
 * currency proxy.ts picked and:
 *
 * - re-renders the components that draw prices themselves (usePriceView),
 * - rewrites the euro prices in the rest of the page's text (lib/currency-dom)
 *   and keeps doing so as content changes (client-side navigation, the page
 *   title, toggles),
 * - marks <html> with `data-currency`, and with `data-no-monthly` when the
 *   currency has no monthly billing, which hides `[data-monthly-only]`
 *   blocks (globals.css).
 *
 * For EUR visitors it does nothing at all.
 */
export default function CurrencyProvider({
  rates,
  children,
}: {
  rates: EurRates;
  children: ReactNode;
}) {
  const [info, setInfo] = useState<CurrencyInfo>(EUR_INFO);

  useEffect(() => {
    const code = readCurrencyCookie();
    if (!code || code === "EUR") return;
    const rate = rates[code];
    const pricing = PRICING[code];
    // Mirrors an external value (the cookie) into state once, on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInfo({ code, symbol: pricing.symbol, rate, pricing });

    const html = document.documentElement;
    html.dataset.currency = code;
    if (!pricing.monthly) html.dataset.noMonthly = "";

    const converter = createConverter(code, rate, () =>
      html.lang === "nl" ? "nl" : "en",
    );
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") {
          converter.convertTree(record.target);
        } else if (record.type === "attributes") {
          converter.convertTree(record.target);
        } else {
          record.addedNodes.forEach((n) => converter.convertTree(n));
        }
      }
      observer.takeRecords(); // our own edits are not news
    });

    // After hydration, like WidowGuard, so React's first render matches.
    const start = window.setTimeout(() => {
      converter.convertTree(document.body);
      const title = document.querySelector("title");
      if (title) converter.convertTree(title);
      observer.observe(html, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["aria-label", "title", "alt", "placeholder"],
      });
    }, 0);

    return () => {
      window.clearTimeout(start);
      observer.disconnect();
      delete html.dataset.currency;
      delete html.dataset.noMonthly;
    };
  }, [rates]);

  return (
    <CurrencyContext.Provider value={info}>{children}</CurrencyContext.Provider>
  );
}
