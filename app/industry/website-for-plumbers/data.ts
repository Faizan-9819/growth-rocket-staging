/* Copy from content/seprate-pages/Growth-Rocket-02-Plumbers-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke plumber website";

/* Every template filed under the plumber category on /designs. */
const TEMPLATE_CATEGORIES = ["plumber"];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("plumber-1.webp", "plumber-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR PLUMBERS IN THE NETHERLANDS",
    heading: "A website for plumbers.",
    benefits: [
      "A professional website built around your plumbing services.",
      "Manage job inquiries, book visits, send quotes, invoices and more.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore plumber designs", href: "/design/plumber" },
    photoAlt: "Plumber repairing pipework beneath a kitchen sink",
    breadcrumbCurrent: "Websites for plumbers",
  },

  INTRO: {
    heading: "Busy on a repair?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "When you’re fixing a leak or fitting new pipework, you can’t always answer the phone. Your website explains the repairs and installations you take on, shows your service area and gives customers a clear way to call or send a request.",
      "Whether you work from one van or lead a small plumbing team, Growth Rocket connects your website and day-to-day business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your plumbing business, Growth Rocket Hub to manage inquiries, visits, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", built around your plumbing services.",
    },
  },

  WORKFLOW: {
    headingParts: ["Receive the request.", "Plan the work.", "Send the invoice."],
    start: "A homeowner wants their bathroom fittings and pipework replaced.",
    steps: [
      {
        step: "1",
        lines: [
          "They send **an inquiry**",
          "through your website,",
          "with the job details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review it** in your Hub",
          "and **arrange a visit**",
          "to check the work.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **an invoice** once",
          "the work is complete.",
        ],
      },
    ],
    note: "For urgent leaks, make your phone number and actual availability clear. Use online inquiries for work you can review before agreeing a visit.",
  },

  LOCAL: {
    heading: "Your services. Your service area.",
    headingAccent: "Your website.",
    intro:
      "A leaking tap, a blocked drain and a planned bathroom installation each need a different conversation. We shape your website around the work you actually do, so customers can understand your services, check whether you cover their area and choose the right way to get in touch.",
    checks: [
      "Your logo, colours and business story",
      "Your repairs and installations, with clear examples of the jobs you take on",
      "The towns and neighbourhoods you genuinely cover",
      "Before-and-after photographs of your completed work",
      "Your team, experience and verified qualifications",
      "Genuine customer testimonials, ratings and reviews",
      "Video introductions and customer video testimonials",
      "A tap-to-call number, inquiry forms and booking options for suitable visits",
    ],
    small:
      "Show your real work and customer feedback. If you offer urgent repairs, state your availability clearly; do not imply round-the-clock cover unless you provide it.",
    photoAlt: "Plumber checking pipework during a home visit",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your plumbing business, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your plumber website.",
    intro:
      "Choose a design that suits the work you do, from everyday repairs to bathroom installations. We adapt it with your branding, services and real job photographs. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Choose a starting point. We tailor the content to the services, qualifications and availability of your business.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      pipeworks: "General plumbing",
      flowmaster: "Bathroom installations",
      drainpro: "Drainage",
      aquafix: "Emergency plumbing",
      flowguard: "Heating services",
    },
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "plumbing businesses.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a plumber website include?",
      answer:
        "Explain the repairs and installations you offer, the areas you cover and how customers should contact you. Add real job photographs, customer reviews and your relevant experience. Separate urgent repairs from planned work, so customers know whether to call, send an inquiry or book a suitable visit.",
    },
    {
      question: "How much does a website for plumbers cost with Growth Rocket?",
      answer:
        "€69 per month or €690 per year, plus a €290 one-time onboarding fee. The package includes a professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can customers book plumbing work through my website?",
      answer:
        "Online appointment booking is included. Use it for visits you can schedule without first assessing the job, such as an agreed survey or consultation. For a repair with an unclear scope, ask the customer to send an inquiry first. Direct urgent calls to your phone number during the hours you actually offer.",
    },
    {
      question: "Can my website show where I work?",
      answer:
        "Yes. We describe the towns and neighbourhoods you genuinely serve and the plumbing work you offer there. Service descriptions, relevant job examples and consistent business details help customers understand your coverage. The website is mobile-friendly and SEO-ready, but we do not guarantee search positions.",
    },
    {
      question: "Can I advertise emergency plumbing services?",
      answer:
        "Yes, if you provide them. State the urgent work you handle, your service area and your actual availability. A visible phone number gives customers a direct way to contact you. An online form does not promise an immediate response or create a 24-hour service.",
    },
    {
      question: "What happens after a customer sends an inquiry?",
      answer:
        "The inquiry and customer details arrive in Growth Rocket Hub. Contacts are created from inquiries and appointments. You can review the request, arrange a visit and create a quote. An accepted quote can be converted into an invoice, keeping the customer information connected.",
    },
    {
      question: "Can I keep my domain and existing plumbing website content?",
      answer:
        "We can review your existing pages, job photographs and customer feedback with you, and discuss using your current domain. We agree what to retain and the transfer steps before launch. The launch timeframe starts once we receive all required information and materials and depends on timely approvals.",
    },
    {
      question: "How soon can my plumbing website be online?",
      answer:
        "Online within 7 working days. The timeframe starts once we receive all required information and materials and depends on timely approvals. Prepare your service list, service area, contact details and any photographs you want us to use. Discuss bespoke requirements with us before agreeing the schedule.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "plumber website?",
    intro:
      "Practical reading for plumbing businesses: explaining your services, handling different requests and showing the people behind the work.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "What to include on your plumber website",
        body: "Prepare your service list, coverage, job photographs and contact options.",
      },
      {
        num: "02",
        topic: "Handling requests",
        title: "Urgent calls or planned visits?",
        body: "Decide which jobs should come by phone, inquiry form or online appointment.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Show customers who is coming to their home",
        body: "Introduce your team, experience and approach to working in customers’ homes.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    /* Sentence case, as the source writes it. */
    kicker: "Voor loodgieters in Nederland",
    heading: "Een website voor loodgieters.",
    benefits: [
      "Een professionele website voor jouw loodgietersbedrijf.",
      "Beheer aanvragen, plan bezoeken en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de loodgietersontwerpen", href: "/design/plumber" },
    photoAlt: "Loodgieter repareert leidingen onder een gootsteen",
    breadcrumbCurrent: "Websites voor loodgieters",
  },

  INTRO: {
    heading: "Bezig met een reparatie?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Als je een lekkage verhelpt of nieuwe leidingen aanlegt, kun je niet altijd de telefoon opnemen. Je website laat zien welke reparaties en installaties je uitvoert en waar je werkt. Klanten zien meteen hoe ze je kunnen bellen of een aanvraag kunnen sturen.",
      "Of je nu als zzp’er werkt of een klein loodgietersteam aanstuurt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je loodgietersbedrijf, Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", gemaakt voor jouw loodgietersbedrijf.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de aanvraag.",
      "Plan het werk.",
      "Verstuur de factuur.",
    ],
    start:
      "Een huiseigenaar wil het sanitair en de leidingen in de badkamer laten vervangen.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant stuurt **een aanvraag**",
          "via je website,",
          "met de gegevens van de klus.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **plant een bezoek**",
          "om het werk te beoordelen.",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte,**",
          "gevolgd door **een factuur**",
          "zodra het werk klaar is.",
        ],
      },
    ],
    note: "Maak bij spoedlekkages je telefoonnummer en werkelijke bereikbaarheid duidelijk. Gebruik online aanvragen voor werk dat je eerst wilt bekijken voordat je een bezoek afspreekt.",
  },

  LOCAL: {
    heading: "Jouw diensten. Jouw werkgebied.",
    headingAccent: "Jouw website.",
    intro:
      "Een lekkende kraan, een verstopte afvoer en een geplande badkamerinstallatie vragen elk om een ander gesprek. We stemmen je website af op het werk dat je echt doet. Zo zien klanten welke diensten je aanbiedt, of je in hun buurt werkt en hoe ze het beste contact opnemen.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je reparaties en installaties, met duidelijke voorbeelden van de klussen die je aanneemt",
      "De plaatsen en wijken waar je daadwerkelijk werkt",
      "Voor-en-nafoto’s van je afgeronde werk",
      "Je team, ervaring en behaalde kwalificaties",
      "Echte klantervaringen, beoordelingen en reviews",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Een direct aanklikbaar telefoonnummer, aanvraagformulieren en afspraken voor geschikte bezoeken",
    ],
    small:
      "Laat je eigen werk en echte klantervaringen zien. Bied je spoedreparaties aan? Vermeld dan duidelijk wanneer je bereikbaar bent. Beloof geen 24-uursservice als je die niet levert.",
    photoAlt: "Loodgieter controleert leidingwerk tijdens een bezoek aan huis",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je loodgietersbedrijf. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies je loodgieterswebsite.",
    intro:
      "Kies een ontwerp dat past bij je werk, van dagelijkse reparaties tot badkamerinstallaties. We passen het aan met je huisstijl, diensten en eigen projectfoto’s. Je website wordt geleverd met Growth Rocket Hub, hosting, onderhoud en ondersteuning.",
    small:
      "Kies een basis. We stemmen de inhoud af op jouw diensten, kwalificaties en bereikbaarheid.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      pipeworks: "Algemeen loodgieterswerk",
      flowmaster: "Badkamerinstallaties",
      drainpro: "Afvoer en riolering",
      aquafix: "Spoedreparaties",
      flowguard: "Verwarming",
    },
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "loodgietersbedrijven.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor loodgieters?",
      answer:
        "Leg uit welke reparaties en installaties je uitvoert, waar je werkt en hoe klanten contact opnemen. Voeg eigen projectfoto’s, echte reviews en je relevante ervaring toe. Maak onderscheid tussen spoedreparaties en gepland werk. Zo weten klanten of ze moeten bellen, een aanvraag sturen of een geschikt bezoek kunnen boeken.",
    },
    {
      question: "Wat kost een website voor loodgieters bij Growth Rocket?",
      answer:
        "€69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Het pakket bestaat uit een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen klanten via mijn website een afspraak maken?",
      answer:
        "Online afspraken boeken is inbegrepen. Gebruik dit voor bezoeken die je zonder voorafgaande beoordeling kunt inplannen, zoals een afgesproken opname of adviesgesprek. Is de omvang van een reparatie nog onduidelijk? Laat de klant dan eerst een aanvraag sturen. Verwijs spoedgevallen naar je telefoonnummer tijdens de uren waarop je bereikbaar bent.",
    },
    {
      question: "Kan mijn website laten zien waar ik werk?",
      answer:
        "Ja. We beschrijven de plaatsen en wijken waar je daadwerkelijk werkt en de diensten die je daar aanbiedt. Duidelijke diensten, relevante projectvoorbeelden en consistente bedrijfsgegevens helpen klanten je werkgebied te begrijpen. De website is mobielvriendelijk en klaar voor SEO, maar we garanderen geen posities in zoekresultaten.",
    },
    {
      question: "Kan ik mijn spoedservice op de website aanbieden?",
      answer:
        "Ja, als je die levert. Vermeld welke spoedklussen je aanneemt, je werkgebied en wanneer je werkelijk bereikbaar bent. Met een duidelijk telefoonnummer kunnen klanten direct contact opnemen. Een online formulier belooft geen onmiddellijke reactie en maakt van je bedrijf geen 24-uursdienst.",
    },
    {
      question: "Wat gebeurt er nadat een klant een aanvraag stuurt?",
      answer:
        "De aanvraag en klantgegevens komen binnen in Growth Rocket Hub. Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken. Je kunt de aanvraag bekijken, een bezoek afspreken en een offerte maken. Een geaccepteerde offerte kun je omzetten naar een factuur, met de klantgegevens op één plek.",
    },
    {
      question: "Kan ik mijn domeinnaam en bestaande website-inhoud behouden?",
      answer:
        "We bekijken samen je bestaande pagina’s, projectfoto’s en klantervaringen en bespreken het gebruik van je huidige domeinnaam. Voor de lancering spreken we af wat we behouden en hoe de overdracht verloopt. De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring.",
    },
    {
      question: "Hoe snel kan mijn loodgieterswebsite online staan?",
      answer:
        "Binnen 7 werkdagen online. De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring. Bereid je diensten, werkgebied, contactgegevens en eventuele foto’s voor. Bespreek maatwerkwensen met ons voordat we de planning afspreken.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "loodgieterswebsite?",
    intro:
      "Praktische tips voor loodgietersbedrijven: je diensten uitleggen, verschillende aanvragen afhandelen en laten zien wie het werk uitvoert.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Wat hoort er op je loodgieterswebsite?",
        body: "Bereid je diensten, werkgebied, projectfoto’s en contactmogelijkheden voor.",
      },
      {
        num: "02",
        topic: "Aanvragen afhandelen",
        title: "Spoed of een gepland bezoek?",
        body: "Bepaal voor welke klussen klanten bellen, een aanvraag sturen of online een afspraak maken.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat zien wie er bij de klant langskomt",
        body: "Vertel over je team, ervaring en werkwijze bij klanten thuis.",
      },
    ],
  },
}, IMAGES);

export const PLUMBERS: IndustryPageDef = {
  paths: { en: "/industry/website-for-plumbers", nl: "/nl/branche/website-voor-loodgieters" },
  seo: {
    en: {
      title: "Website for Plumbers in the Netherlands | Growth Rocket",
      description:
        "A website for your plumbing business, with Growth Rocket Hub for inquiries, visits, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor loodgieters in Nederland | Growth Rocket",
      description:
        "Een website voor je loodgietersbedrijf, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Hosting, onderhoud en ondersteuning inbegrepen.",
    },
  },
  copy: { en, nl },
};
