"use client";

import {
  AnimationStyleProvider,
  ANIMATION_STYLE_DEFAULT,
  type AnimationStyle,
} from "../features/FeatureReveal";
import IndustryHero from "./IndustryHero";
import IndustryIntro from "./IndustryIntro";
import IndustryOffer from "./IndustryOffer";
import IndustryWorkflow from "./IndustryWorkflow";
import IndustryLocal from "./IndustryLocal";
import IndustryPricing from "./IndustryPricing";
import IndustryDesigns from "./IndustryDesigns";
import IndustryLaunch from "./IndustryLaunch";
import IndustryCall from "./IndustryCall";
import IndustryFaq from "./IndustryFaq";
import IndustryGuide from "./IndustryGuide";
import IndustryClose from "./IndustryClose";
import { IndustryCopyProvider } from "./copy";
import type { IndustryCopyByLocale } from "./types";

/* The shared industry landing page. Every /website-for-<industry> route
   renders this with its own EN + NL copy; the layout is the same for all. */
export default function IndustryClient({
  copy,
  animationStyle = ANIMATION_STYLE_DEFAULT,
}: {
  copy: IndustryCopyByLocale;
  animationStyle?: AnimationStyle;
}) {
  return (
    <IndustryCopyProvider value={copy}>
      <AnimationStyleProvider value={animationStyle}>
        <main
          id="main"
          // pt-22 clears the fixed Navbar (top-3 + h-[64px] + 12px), the same
          // offset HomeShell gives every other page, so at scroll 0 the bar sits
          // above the hero instead of over it.
          className="relative flex min-h-screen flex-col bg-white pt-22"
        >
          <IndustryHero />
          <IndustryIntro />
          <IndustryOffer />
          <IndustryWorkflow />
          <IndustryLocal />
          <IndustryPricing />
          <IndustryDesigns />
          <IndustryLaunch />
          <IndustryCall />
          <IndustryFaq />
          <IndustryGuide />
          <IndustryClose />
        </main>
      </AnimationStyleProvider>
    </IndustryCopyProvider>
  );
}
