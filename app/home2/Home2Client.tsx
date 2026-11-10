"use client";

import HomeShell from "../components/sections/home2/HomeShell";
import Hero2 from "../components/sections/home2/Hero2";
import ValueStrip from "../components/sections/home2/ValueStrip";
import Problem from "../components/sections/home2/Problem";
import Solution from "../components/sections/home2/Solution";
import Audience from "../components/sections/home2/Audience";
import WhyUs from "../components/sections/home2/WhyUs";
import PricingTeaser from "../components/sections/home2/PricingTeaser";
import ProcessTimeline from "../components/sections/home2/ProcessTimeline";
import HowItWorks from "../components/sections/home2/HowItWorks";
import Testimonials from "../components/sections/home2/Testimonials";
import Examples from "../components/sections/home2/Examples";
import TestimonialProof from "../components/sections/home2/TestimonialProof";
import FinalCta from "../components/sections/home2/FinalCta";
// import Faq2 from "../components/sections/home2/Faq2";
import FaqAccordion from "../components/sections/home2/FaqAccordion";
import BlogTeaser from "../components/sections/home2/BlogTeaser";
// Footer2 renders the contact fold and the loop strip above itself, so home2
// mounts the footer alone.
import Footer2 from "../components/sections/home2/Footer2";
import {
  AnimationStyleProvider,
  ANIMATION_STYLE_DEFAULT,
  type AnimationStyle,
} from "../features/FeatureReveal";
import JsonLd from "../components/JsonLd";
import { buildFaqJsonLd, HOME_FAQS } from "../lib/faqs";
import { buildPageSchema } from "../lib/seo";
import LocaleMeta from "../components/LocaleMeta";
import type { HomeBlogPosts } from "../lib/blog-posts";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Home2Client({
  animationStyle = ANIMATION_STYLE_DEFAULT,
  blogPosts,
}: {
  animationStyle?: AnimationStyle;
  /* Loaded by the server page (the blog registry reads its modules on the
     server) and handed straight to BlogTeaser. */
  blogPosts?: HomeBlogPosts;
} = {}) {
  const { locale } = useLanguage();
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <AnimationStyleProvider value={animationStyle}>
      <main className="relative min-h-screen lg:pb-0">
        <JsonLd
          data={buildPageSchema(
            "/",
            "Small Business Website & Business Tools – From €69/Month",
            "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.",
          )}
        />
        <JsonLd data={buildFaqJsonLd(HOME_FAQS, locale)} />
        {/* The `nl` pair mirrors app/nl/page.tsx's metadata, so the client-side
            update never swaps the Dutch title for the English one. */}
        <LocaleMeta
          title={{
            en: "Small Business Website & Business Tools – From €69/Month",
            nl: "Website laten maken voor zzp’ers en mkb – vanaf €69 p/m",
          }}
          description={{
            en: "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.",
            nl: "Een compleet online businesssysteem voor het mkb en zzp’ers: je website en Growth Rocket Hub, met hosting, onderhoud en ondersteuning voor je geregeld.",
          }}
        />
        <HomeShell>
          <Hero2 onStartClick={openLeadForm} />
          <ValueStrip />
          <Problem />
          <Solution />
          <Audience />
          <WhyUs />
          <PricingTeaser />
          <ProcessTimeline />
          {/* <HowItWorks /> */}
          {/* <Testimonials /> */}
          <Examples />
          <TestimonialProof />
          {/* <FinalCta onStartClick={openLeadForm} /> */}
          {/* <Faq2 /> */}
          <FaqAccordion />
          <BlogTeaser posts={blogPosts} />
          <Footer2 contactVariant="home" />
        </HomeShell>
      </main>
    </AnimationStyleProvider>
  );
}
