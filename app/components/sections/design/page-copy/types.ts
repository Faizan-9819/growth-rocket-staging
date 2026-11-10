import type { DesignBenefit } from "../copy";

/**
 * The full copy of one design detail page, in one language — what a template's
 * approved page-copy document provides. A template with an entry in
 * `./index.ts` renders this copy; one without keeps the generated copy in
 * `../copy.ts` and the folds' built-in text.
 *
 * Content reference for each template: content/design-pages/<slug>.md
 */

/** A heading with its purple accent; `breakBefore` puts the accent on its own line. */
export type AccentHeading = {
  lead: string;
  accent: string;
  breakBefore: boolean;
};

export type HeroCopy = {
  /** Shown in capitals. */
  label: string;
  /** The line under the template name in the `h1`. */
  subline: string;
  description: string;
  /** The phrase inside `description` that keeps the lime underline. */
  highlight: string;
};

export type CrumbCopy = { ariaLabel: string; allDesigns: string };

export type PreviewCopy = {
  /** Accessible name of the device switch. */
  devicesLabel: string;
  devices: { desktop: string; tablet: string; mobile: string };
  openInBrowser: string;
  cta: string;
  /** Shown in the browser bar; also the preview's accessible name. */
  browserLabel: string;
  caption: string;
};

export type BenefitsCopy = {
  heading: AccentHeading;
  intro: string;
  cards: DesignBenefit[];
};

export type PersonalCopy = {
  heading: AccentHeading;
  intro: string;
  items: string[];
  imageAlt: string;
  /** Approved, but the caption overlay is switched off in the current design. */
  imageCaption: string;
};

export type VideoTabCopy = { tab: string; title: string; note: string };

export type SystemCopy = {
  heading: [string, string];
  intro: string;
  steps: { title: string; body: string }[];
  walkthroughHeading: string;
  walkthroughIntro: string;
  /** Accessible name of the video tab list. */
  tablistLabel: string;
  /** Keyed by the video ids in `app/features/data.ts`. */
  tabs: Record<string, VideoTabCopy>;
  playLabel: string;
};

export type BillingPlanCopy = {
  old: string;
  current: string;
  period: string;
  detail?: string;
  saving?: string;
};

export type BillingCopy = {
  /** Accessible name of the billing switch. */
  groupLabel: string;
  annual: string;
  save: string;
  monthly: string;
  plans: { annual: BillingPlanCopy; monthly: BillingPlanCopy };
  setupFee: string;
  setupLabel: string;
  taxNote?: string;
};

export type PackageCopy = {
  heading: string;
  intro: string;
  pillars: { title: string; body: string }[];
  billing: BillingCopy;
  cta: string;
  ctaHref: string;
};

export type LaunchCopy = {
  heading: AccentHeading;
  intro: [string, string];
  steps: { title: string; body: string }[];
  note: string;
};

export type FaqCopy = {
  heading: AccentHeading;
  /** Omitted when the approved copy has no title for the help card. */
  helpTitle?: string;
  intro: string;
  cta: string;
  items: { question: string; answer: string }[];
};

export type RelatedCopy = {
  /** One entry per line. */
  heading: string[];
  intro: string;
  /** Card labels for this page, by template slug. */
  cardSubtitles: Record<string, string>;
};

export type CloseCopy = {
  heading: AccentHeading;
  description: string;
  primaryCta: string;
  /** Opens the lead enquiry form (see DesignClose). */
  secondaryCta: string;
};

export type DesignPageCopy = {
  seo: { title: string; description: string };
  hero: HeroCopy;
  crumb: CrumbCopy;
  preview: PreviewCopy;
  benefits: BenefitsCopy;
  personal: PersonalCopy;
  system: SystemCopy;
  package: PackageCopy;
  launch: LaunchCopy;
  faq: FaqCopy;
  related: RelatedCopy;
  close: CloseCopy;
};

/** Sections 6–8: the same for every design except the name and CTA destination. */
export type MasterCopy = Pick<DesignPageCopy, "system" | "package" | "launch">;
