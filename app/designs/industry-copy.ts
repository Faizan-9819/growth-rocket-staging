import type { Locale } from "../i18n/config";

/**
 * Per-industry copy for the filtered designs listings (/designs/<industry>,
 * /nl/ontwerpen/<branche>): the page's meta title and description, and the
 * hero intro that replaces the generic one. Without these all nine industries
 * (in both languages) shared one title, description and opening paragraph,
 * which search engines report as duplicate pages.
 *
 * Keyed by `Template.category`, like INDUSTRY_SLUGS. Kept free of
 * templates-data so the hero (a client bundle) can import it.
 *
 * The EN `intro` and `headings` come from GGR Pages (1).xlsx → Design Filter;
 * see design-filter-copy.md.
 */
export type IndustryCopy = {
  title: string;
  description: string;
  intro: string;
  headings?: IndustryHeadings;
};

/** The industry's headings on the designs listing: the eyebrow over the hero
    H1, the H1's two lines (white, then lime) and the gallery heading that
    replaces "Latest designs". EN only so far; without them the view keeps
    the listing's general headings. */
export type IndustryHeadings = {
  eyebrow: string;
  line1: string;
  line2: string;
  /** The sheet's "↓" is drawn by TemplatesPageClient, so it is left off. */
  latest: string;
};

export const INDUSTRY_COPY: Record<string, Record<Locale, IndustryCopy>> = {
  Cleaning: {
    en: {
      title: "Cleaning Company Website Designs Netherlands | Growth Rocket",
      description:
        "Browse website designs for cleaning companies, built to win home and commercial cleaning jobs. Mobile-first, SEO-ready and live in 7 days with Growth Rocket.",
      intro:
        "Show clients what’s included, where you work and why they can trust you. Every cleaning request lands in your Growth Rocket Hub, ready to quote.",
      headings: {
        eyebrow: "Website design for cleaning companies",
        line1: "Show your standards.",
        line2: "Before you walk in.",
        latest: "See cleaning designs",
      },
    },
    nl: {
      title: "Websiteontwerpen voor schoonmaakbedrijven in Nederland",
      description:
        "Bekijk websiteontwerpen voor schoonmaakbedrijven, gemaakt voor meer aanvragen voor thuis- en bedrijfsschoonmaak. Mobielvriendelijk en binnen 7 dagen live.",
      intro:
        "Ontdek onze websiteontwerpen voor schoonmaakbedrijven. Laat particulieren en bedrijven zien wat je schoonmaakt en waar, en laat ze online een offerte aanvragen of boeken. Elke aanvraag komt binnen in je Hub.",
    },
  },
  dentist: {
    en: {
      title: "Dentist Website Designs in the Netherlands | Growth Rocket",
      description:
        "Explore website designs for dentists and dental practices. Clear treatment pages, easy appointment requests and a mobile-first build, live in just 7 days.",
      intro:
        "Explain treatments in plain language and make booking easy on any phone. Appointment requests arrive in your Growth Rocket Hub, ready for your team to review.",
      headings: {
        eyebrow: "Dentist website design",
        line1: "Put nervous patients.",
        line2: "At ease online.",
        latest: "Explore DentalCare",
      },
    },
    nl: {
      title: "Websiteontwerpen tandartspraktijk Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor tandartsen en tandartspraktijken. Duidelijke behandelpagina’s, eenvoudig een afspraak aanvragen en binnen 7 dagen online.",
      intro:
        "Ontdek onze websiteontwerpen voor tandartspraktijken. Stel je behandelingen en je team voor, stel nieuwe patiënten gerust en laat ze online een afspraak aanvragen, beheerd vanuit je Growth Rocket Hub.",
    },
  },
  electrician: {
    en: {
      title: "Electrician Website Designs Netherlands | Growth Rocket",
      description:
        "See website designs made for electricians and electrical contractors. Built to turn local searches into quote requests, mobile-friendly and live in 7 days.",
      intro:
        "Put your certifications and past work front and centre, with a quick request form for planned jobs. Every request goes straight to your Growth Rocket Hub for quoting.",
      headings: {
        eyebrow: "Electrician website design",
        line1: "Show you’re qualified.",
        line2: "Before they call.",
        latest: "See electrician designs",
      },
    },
    nl: {
      title: "Websiteontwerpen elektriciens Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor elektriciens en installateurs. Gemaakt om lokale zoekopdrachten om te zetten in offerteaanvragen. Snel, mobiel en in 7 dagen live.",
      intro:
        "Ontdek onze websiteontwerpen voor elektriciens. Laat zien welke klussen je doet en in welk gebied je werkt, ontvang aanvragen online en verstuur offertes en facturen vanuit je Growth Rocket Hub.",
    },
  },
  logistics: {
    en: {
      title: "Logistics Website Designs in the Netherlands | Growth Rocket",
      description:
        "Browse website designs for logistics, transport and freight companies. Showcase your services and coverage with a fast, SEO-ready site that is live in 7 days.",
      intro:
        "Show what you move, where and how, with a clear way to request a rate. Quote requests are logged in your Growth Rocket Hub, ready for your team to follow up.",
      headings: {
        eyebrow: "Logistics company website design",
        line1: "Make your capabilities.",
        line2: "Clear to new clients.",
        latest: "See logistics designs",
      },
    },
    nl: {
      title: "Websiteontwerpen voor logistiek in Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor logistiek-, transport- en vrachtbedrijven. Toon je diensten en werkgebied met een snelle, SEO-klare site die in 7 dagen live staat.",
      intro:
        "Ontdek onze websiteontwerpen voor logistieke en transportbedrijven. Leg uit wat je vervoert en waarheen, geef klanten een duidelijke manier om een offerte aan te vragen en bewaar elk contact in je Hub.",
    },
  },
  physiotherapy: {
    en: {
      title: "Physiotherapy Website Designs Netherlands | Growth Rocket",
      description:
        "Explore website designs for physiotherapists and physio clinics. Present your treatments, build patient trust and take more bookings with a site live in 7 days.",
      intro:
        "Explain your treatments and let patients book an available time online. Each new appointment arrives in your Growth Rocket Hub, with the patient’s details saved automatically.",
      headings: {
        eyebrow: "Physiotherapy website design",
        line1: "Make the first appointment.",
        line2: "The easy part.",
        latest: "See physiotherapy designs",
      },
    },
    nl: {
      title: "Websiteontwerpen fysiotherapeuten Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor fysiotherapeuten. Presenteer je behandelingen, wek vertrouwen en ontvang meer afspraken met een site die in 7 dagen live staat.",
      intro:
        "Ontdek onze websiteontwerpen voor fysiotherapiepraktijken. Stel je behandelingen en therapeuten voor, beantwoord de eerste vragen van patiënten en laat ze online een afspraak maken, beheerd vanuit je Hub.",
    },
  },
  plumber: {
    en: {
      title: "Plumber Website Designs in the Netherlands | Growth Rocket",
      description:
        "Browse website designs for plumbers, heating engineers and drainage firms. Built for emergency calls and quote requests, mobile-first and live in just 7 days.",
      intro:
        "Give every service, from repairs to new bathrooms, its own clear section and show the areas you cover. Enquiries arrive in your Growth Rocket Hub, where accepted quotes become invoices.",
      headings: {
        eyebrow: "Plumber website design",
        line1: "From a dripping tap.",
        line2: "To a full bathroom.",
        latest: "See plumber designs",
      },
    },
    nl: {
      title: "Websiteontwerpen loodgieters Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor loodgieters, cv-monteurs en ontstoppers. Gebouwd voor spoedoproepen en offerteaanvragen, mobielvriendelijk en in 7 dagen live.",
      intro:
        "Ontdek onze websiteontwerpen voor loodgieters en cv-monteurs. Laat je diensten en werkgebied zien, maak het makkelijk om een lekkage te melden of een reparatie te boeken en stuur de offerte vanuit je Hub.",
    },
  },
  "real-estate": {
    en: {
      title: "Real Estate Website Designs Netherlands | Growth Rocket",
      description:
        "See website designs for real estate agents and brokers. Showcase listings, build local trust and win more seller leads with a site that goes live in 7 days.",
      intro:
        "Present your services, local expertise and track record, with an easy way to book a consultation. Every enquiry is kept in your Growth Rocket Hub with the client’s details.",
      headings: {
        eyebrow: "Real estate consultant website design",
        line1: "Put your market knowledge.",
        line2: "On display.",
        latest: "See real estate designs",
      },
    },
    nl: {
      title: "Websiteontwerpen voor makelaars in Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor makelaars. Toon je aanbod, bouw lokaal vertrouwen op en trek meer verkopers aan met een site die binnen 7 dagen live staat.",
      intro:
        "Ontdek onze websiteontwerpen voor makelaars. Laat je diensten en kennis van de regio zien, ontvang aanvragen voor bezichtigingen en taxaties en volg elke koper en verkoper op vanuit je Hub.",
    },
  },
  salon: {
    en: {
      title: "Hair Salon Website Designs Netherlands | Growth Rocket",
      description:
        "Explore website designs for hair salons and barbers. Show off your work, list services and prices, and fill your appointment book with a site live in 7 days.",
      intro:
        "Show your services, prices and team, and let clients book an available time without calling. New bookings arrive in your Growth Rocket Hub, keeping your diary in one place.",
      headings: {
        eyebrow: "Salon website design",
        line1: "Let clients book.",
        line2: "While you’re with a client.",
        latest: "See salon designs",
      },
    },
    nl: {
      title: "Websiteontwerpen voor kapsalons in Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor kapsalons en barbiers. Laat je werk zien, toon diensten en prijzen en vul je agenda met een site die in 7 dagen live staat.",
      intro:
        "Ontdek onze websiteontwerpen voor kapsalons en barbiers. Toon je behandelingen, prijzen en stijl, laat klanten online hun volgende afspraak maken en bewaar hun gegevens samen in je Hub.",
    },
  },
  solar: {
    en: {
      title: "Solar Installer Website Designs Netherlands | Growth Rocket",
      description:
        "Browse website designs for solar panel installers. Explain your offer, build trust and turn homeowner interest into quote requests with a site live in 7 days.",
      intro:
        "Explain your process and products step by step, and let homeowners book a site visit or request a quote. Every request waits in your Growth Rocket Hub, ready for your quote.",
      headings: {
        eyebrow: "Solar installer website design",
        line1: "Answer the big questions.",
        line2: "Before the site visit.",
        latest: "See solar designs",
      },
    },
    nl: {
      title: "Websiteontwerpen zonnepanelen Nederland | Growth Rocket",
      description:
        "Bekijk websiteontwerpen voor zonnepaneleninstallateurs. Leg je aanbod helder uit, wek vertrouwen en ontvang meer offerteaanvragen. Binnen 7 dagen live.",
      intro:
        "Ontdek onze websiteontwerpen voor zonnepaneleninstallateurs. Leg uit hoe een installatie werkt en wat die kost, ontvang offerteaanvragen online en beheer elke aanvraag, offerte en factuur vanuit je Hub.",
    },
  },
};

export function getIndustryCopy(
  category: string,
  locale: Locale,
): IndustryCopy | undefined {
  return INDUSTRY_COPY[category]?.[locale];
}

/** The all-designs listing's meta (/designs, /nl/ontwerpen). */
export const LISTING_COPY: Record<
  Locale,
  { title: string; description: string }
> = {
  en: {
    title: "Website Designs for Small Businesses | Growth Rocket",
    description:
      "Explore website designs for small businesses. Choose a style and we’ll adapt it to your brand, services and customers, then build your website for you.",
  },
  nl: {
    title: "Websitevoorbeelden per branche | Growth Rocket",
    description:
      "Bekijk websiteontwerpen voor het mkb en zzp’ers. Kies een stijl en wij stemmen je website af op jouw huisstijl, diensten en klanten en bouwen hem voor je.",
  },
};

/** Meta title and description of a listing view: the whole listing ("all")
    or one industry's. */
export function listingMeta(
  category: string,
  locale: Locale,
): { title: string; description: string } {
  const industry = category === "all" ? undefined : getIndustryCopy(category, locale);
  return industry
    ? { title: industry.title, description: industry.description }
    : LISTING_COPY[locale];
}
