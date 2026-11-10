import type { Locale } from "../../../../i18n/config";
import type { Template } from "../../../../designs/templates-data";
import { aquafix } from "./aquafix";
import { circuitpro } from "./circuitpro";
import { crystalclean } from "./crystalclean";
import { drainpro } from "./drainpro";
import { flowguard } from "./flowguard";
import { flowmaster } from "./flowmaster";
import { masterCopy } from "./master";
import { physiotherapy } from "./physiotherapy";
import { pipeworks } from "./pipeworks";
import { primeabode } from "./primeabode";
import { shinesquad, type PageOwnCopy } from "./shinesquad";
import { sparkfix } from "./sparkfix";
import { sunharbor } from "./sunharbor";
import { swiftline } from "./swiftline";
import { trimAndTrend } from "./trim-and-trend";
import { voltguard } from "./voltguard";
import type { DesignPageCopy } from "./types";

export type * from "./types";

/**
 * Templates whose approved page-copy document has been applied, by slug.
 * Add the next one here once its document is in; every template not listed
 * keeps the generated copy from `../copy.ts`.
 */
const PAGE_COPY: Record<string, Record<Locale, PageOwnCopy>> = {
  shinesquad,
  sunharbor,
  "trim-and-trend": trimAndTrend,
  primeabode,
  circuitpro,
  crystalclean,
  flowguard,
  physiotherapy,
  pipeworks,
  sparkfix,
  swiftline,
  voltguard,
  aquafix,
  drainpro,
  flowmaster,
};

/** The approved copy for a template's page in one language, if it has one. */
export function getPageCopy(
  template: Template,
  locale: Locale,
): DesignPageCopy | undefined {
  const own = PAGE_COPY[template.slug]?.[locale];
  return own && { ...own, ...masterCopy(template.title, locale) };
}
