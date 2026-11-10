"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import type { IndustryCopy, IndustryCopyByLocale } from "./types";

export type { IndustryCopy, OfferFeature, ScenarioStep } from "./types";

const IndustryCopyContext = createContext<IndustryCopyByLocale | null>(null);

export function IndustryCopyProvider({
  value,
  children,
}: {
  value: IndustryCopyByLocale;
  children: ReactNode;
}) {
  return (
    <IndustryCopyContext.Provider value={value}>
      {children}
    </IndustryCopyContext.Provider>
  );
}

/** The copy for the page's active locale. */
export function useIndustryCopy(): IndustryCopy {
  const copy = useContext(IndustryCopyContext);
  const { locale } = useLanguage();
  if (!copy) {
    throw new Error("useIndustryCopy must be used inside IndustryCopyProvider");
  }
  return copy[locale];
}
