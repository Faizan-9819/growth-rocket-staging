import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  Poppins,
} from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";
import JsonLd from "./components/JsonLd";
import LenisProvider from "./components/LenisProvider";
import StickyActions from "./components/StickyActions";
import WidowGuard from "./components/WidowGuard";
import CurrencyProvider from "./components/CurrencyProvider";
import { getEurRates } from "./lib/fx-rates";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { DEFAULT_LOCALE } from "./i18n/config";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  SITE_URL,
} from "./lib/seo";

const GTM_ID = "GTM-NRP9SSXD";
const GA_ID = "G-12W07KV2LM";
const GADS_ID = "AW-18192680995";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.ico" },
  title: "Small Business Website & Business Tools – From €69/Month",
  description:
    "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.",
  alternates: {
    canonical: "/",
    languages: {
      en: `${SITE_URL}/`,
      nl: `${SITE_URL}/nl`,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Growth Rocket",
    title: "Small Business Website & Business Tools – From €69/Month",
    description:
      "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Website & Business Tools – From €69/Month",
    description:
      "A complete online business system for small businesses: your professional website and Growth Rocket Hub, with hosting, maintenance and support handled for you.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = DEFAULT_LOCALE;
  // For showing prices in the visitor's currency (lib/currency).
  const rates = await getEurRates();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${bricolage.variable} ${poppins.variable} suppressHydrationWarning`}
    >
      <body className="antialiased" suppressHydrationWarning>
        {/* No Google tag loads here: Google Tag Manager, GA4 and the Google
            Ads tag load from <Analytics> only after the visitor consents
            (Cookie Policy §2). */}
        <JsonLd data={buildWebsiteSchema()} />
        <JsonLd data={buildOrganizationSchema()} />
        <LanguageProvider initialLocale={initialLocale}>
          <CurrencyProvider rates={rates}>
            <LenisProvider>
              <Navbar />
              {children}
              <SiteFooter />
              <StickyActions />
              <CookieConsent />
            </LenisProvider>
          </CurrencyProvider>
        </LanguageProvider>
        <Analytics gtmId={GTM_ID} gaId={GA_ID} gadsId={GADS_ID} />
        {/* Vercel Web Analytics: cookieless page views, served from
            /_vercel/insights on our own domain. */}
        <VercelAnalytics />
        <WidowGuard />
      </body>
    </html>
  );
}
