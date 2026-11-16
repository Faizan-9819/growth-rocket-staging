"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  CURRENCY_COOKIE,
  CURRENCY_SYMBOLS,
  isCurrencyCode,
  type CurrencyCode,
  type EurRates,
} from "../lib/currency";
import { createConverter } from "../lib/currency-dom";

export type CurrencyInfo = {
  code: CurrencyCode;
  symbol: string;
  /** Euro → this currency. */
  rate: number;
};

const EUR_INFO: CurrencyInfo = { code: "EUR", symbol: "€", rate: 1 };
const CurrencyContext = createContext<CurrencyInfo>(EUR_INFO);

/** The visitor's currency; EUR on the server and until mounted. */
export function useCurrency() {
  return useContext(CurrencyContext);
}

function readCurrencyCookie(): CurrencyCode | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CURRENCY_COOKIE}=([^;]+)`),
  );
  const value = match ? decodeURIComponent(match[1]) : null;
  return isCurrencyCode(value) ? value : null;
}

/**
 * Shows the site's euro prices in the visitor's currency (see lib/currency).
 *
 * Pages stay static and render in euros; once mounted, this reads the
 * currency proxy.ts picked and rewrites every euro amount on the page
 * (lib/currency-dom), then keeps doing so as content changes (billing
 * toggles, client-side navigation, the page title). For EUR visitors it does
 * nothing at all.
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
    // Mirrors an external value (the cookie) into state once, on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInfo({ code, symbol: CURRENCY_SYMBOLS[code], rate });

    const converter = createConverter(code, rate, () =>
      document.documentElement.lang === "nl" ? "nl-NL" : "en-GB",
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
      observer.observe(document.documentElement, {
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
    };
  }, [rates]);

  return (
    <CurrencyContext.Provider value={info}>{children}</CurrencyContext.Provider>
  );
}
