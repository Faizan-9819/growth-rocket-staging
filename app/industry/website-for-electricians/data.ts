import { EUR_EN, EUR_NL } from "@/pricing";
/* Copy from finalcontent/Growth-Rocket-Electricians(-NL)-Standalone.html.
   Only the billing toggle rewrites content at runtime on those pages, so their
   static markup is the real copy. The blocks every industry page shares
   (prices, Hub card, launch steps…) are in app/industry/shared.ts; this file
   holds the electrician lines. */

import { buildIndustryCopy } from "../shared";
import type { IndustryCopyByLocale } from "../types";

const GUIDE_HREFS = [
  "https://www.getgrowthrocket.com/blog/electrician-website-checklist",
  "https://www.getgrowthrocket.com/blog/electrician-website-build-timeline",
  "https://www.getgrowthrocket.com/blog/10-how-to-write-an-about-us-page-for-an-electrician",
];

const BESPOKE_SUBJECT = "Bespoke electrician website";

/* Every template filed under the electrician category on /designs. */
const TEMPLATE_CATEGORIES = ["electrician"];

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR ELECTRICIANS IN THE NETHERLANDS",
    heading: "A website for electricians.",
    benefits: [
      "A professional website built for electricians.",
      "Book appointments, manage enquiries, send quotes, invoices and more.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: {
      label: "Explore electrician designs",
      href: "/design/electrician",
    },
    photoAlt:
      "Electrician kneeling at a distribution board, working on the circuit breakers with a screwdriver",
    breadcrumbCurrent: "Websites for electricians",
  },

  INTRO: {
    heading: "Out on a job?",
    /* Source breaks this across two lines inside the accent span. */
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "When you’re replacing a consumer unit or working on an installation, you can’t always answer the phone. Your website can explain what you do, show where you work and give customers a way to send a request.",
      "Whether you work independently or lead a small team, Growth Rocket connects your website and day-to-day business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your electrical business, Growth Rocket Hub to manage everyday work, and a team to look after the technical side.",
    website: {
      headingLead: "Your ",
      headingTail: ", made for your electrical business.",
    },
  },

  WORKFLOW: {
    headingParts: ["Get the request.", "Manage the job.", "Send the invoice."],
    start: "A homeowner needs their consumer unit replaced.",
    steps: [
      {
        step: "1",
        lines: [
          "They send you **a job request**",
          "through your website,",
          "with their details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review the request**",
          "in your Hub and",
          "**arrange a visit.**",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **an invoice** once",
          "the job is done.",
        ],
      },
    ],
    note: "For urgent enquiries, keep your phone number easy to find. Online requests can be reviewed when you’re available.",
  },

  LOCAL: {
    heading: "Your business. Your expertise.",
    headingAccent: "Your website.",
    intro:
      "Show customers the work you do, where you do it and why they can trust you. We shape the design and content around your electrical business.",
    checks: [
      "Your logo, colours and business story",
      "Your electrical services and specialist work",
      "The towns and areas you genuinely cover",
      "Project photographs and completed installations",
      "Your team, experience and verified qualifications",
      "Genuine customer testimonials, ratings and reviews",
      "Business introductions and video testimonials",
      "Clear contact details, enquiry forms and booking options",
    ],
    small:
      "Use your real projects, feedback and credentials to help customers choose with confidence.",
    photoAlt:
      "Electrician at work, showing the people behind an electrical business",
  },

  PRICING: {
    intro:
      `One complete Growth Rocket package for your electrical business, with ${EUR_EN.subscriptionKindsA} and a one-time onboarding fee.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your electrician website.",
    intro:
      "Choose a direction, then make it yours with your branding, services and project photographs. Your connected Growth Rocket system comes with it.",
    small:
      "Illustrative design directions. Final electrician design previews will be added to the collection.",
    templateCategories: TEMPLATE_CATEGORIES,
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "electrical businesses.",
  },

  FAQ_ITEMS: [
    {
      question: "Is Growth Rocket just an electrician website?",
      answer:
        "Your professional website is one part of the package. You also get Growth Rocket Hub for enquiries, appointments, customer contacts, quotes and invoices, plus hosting, maintenance and support.",
    },
    {
      question: "Does this suit an independent electrician or a small team?",
      answer:
        "It is designed for freelancers and small businesses. We shape the website around your services and how customers contact you. If you need specialist workflows or integrations, discuss those with us before choosing your setup.",
    },
    {
      question: "Can I keep my existing domain and website content?",
      answer:
        "Yes. We can review your current content and discuss using your existing domain. We agree the transfer steps before the new website goes live.",
    },
    {
      question: "Can customers book electrical jobs directly?",
      answer:
        "Online appointment tools are included. Use them for the services or visits you are comfortable scheduling. For work that needs more information before a time or price can be agreed, direct customers to an enquiry instead.",
    },
    {
      question: "Can I show the towns where I work?",
      answer:
        "Yes. Your website can describe your genuine service area and the work you offer there. We use the coverage information you provide; we do not create fictional offices or claim you serve places you do not cover.",
    },
    {
      question: "Will this guarantee a first-page Google ranking?",
      answer:
        "No. The website is mobile-friendly and SEO-ready, providing a foundation for search visibility. Rankings also depend on competition, useful content and other factors. We do not guarantee positions or a specific number of leads.",
    },
    {
      question: "What will I pay to get started?",
      answer:
        `Annual billing is ${EUR_EN.yearly} per year plus ${EUR_EN.onboarding} one-time onboarding: ${EUR_EN.firstYear} for the first year before any separately agreed extras.${EUR_EN.monthlyBillingSentence}${EUR_EN.annualSavingSentence}`,
    },
    {
      question: "What happens when I need help or a change?",
      answer:
        "Hosting, SSL, maintenance, technical updates and support are included. Raise help and support requests through Growth Rocket Hub. Additional pages or bespoke functionality can be discussed separately.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "electrician website?",
    intro:
      "Practical reading for electrical businesses: what to include, how to prepare and how to tell your story.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "The pages your electrician website needs",
        body: "Plan your services, project examples and contact information before the build starts.",
        href: GUIDE_HREFS[0],
      },
      {
        num: "02",
        topic: "Launch planning",
        title: "How long does an electrician website take?",
        body: "Understand the stages of a website project and what helps keep your launch moving.",
        href: GUIDE_HREFS[1],
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Tell the story behind your electrical business",
        body: "Make your About page a useful introduction to the people and experience behind the work.",
        href: GUIDE_HREFS[2],
      },
    ],
  },
});

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    /* Sentence case, as the source writes (and renders) it. */
    kicker: "Voor elektriciens in Nederland",
    heading: "Een website voor elektriciens.",
    benefits: [
      "Een professionele website voor jouw elektrotechnisch bedrijf.",
      "Plan afspraken, beheer aanvragen, verstuur offertes en facturen, en meer.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de ontwerpen", href: "/design/electrician" },
    photoAlt:
      "Elektricien geknield bij een verdeelkast, aan het werk aan de installatieautomaten met een schroevendraaier",
    breadcrumbCurrent: "Websites voor elektriciens",
  },

  INTRO: {
    heading: "Aan het werk bij een klant?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Als je een groepenkast vervangt of aan een installatie werkt, kun je niet altijd de telefoon opnemen. Je website laat zien wat je doet en waar je werkt, en geeft klanten de mogelijkheid om een aanvraag te sturen.",
      "Of je nu zelfstandig werkt of een klein team aanstuurt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je elektrotechnisch bedrijf, Growth Rocket Hub voor je dagelijkse werk en een team dat de techniek voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", gemaakt voor jouw elektrotechnisch bedrijf.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de aanvraag.",
      "Regel de klus.",
      "Verstuur de factuur.",
    ],
    start: "Een huiseigenaar wil de groepenkast laten vervangen.",
    steps: [
      {
        step: "1",
        lines: [
          "Je ontvangt **een aanvraag**",
          "via je website,",
          "met de klantgegevens.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag**",
          "in je Hub en",
          "**plant een bezoek.**",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte,**",
          "gevolgd door **een factuur**",
          "na de klus.",
        ],
      },
    ],
    note: "Zorg dat je telefoonnummer goed zichtbaar is voor spoedgevallen. Online aanvragen bekijk je wanneer het jou uitkomt.",
  },

  LOCAL: {
    heading: "Jouw bedrijf. Jouw vakmanschap.",
    headingAccent: "Jouw website.",
    intro:
      "Laat klanten zien wat je doet, waar je werkt en waarom ze op je kunnen rekenen. We stemmen het ontwerp en de inhoud af op jouw bedrijf.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je diensten en specialisaties",
      "De plaatsen en regio’s waar je werkt",
      "Foto’s van je projecten en installaties",
      "Je team, ervaring en behaalde kwalificaties",
      "Echte klantervaringen, beoordelingen en reviews",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Duidelijke contactgegevens, aanvraagformulieren en mogelijkheden om een afspraak te maken",
    ],
    small:
      "Laat met je eigen projecten, klantervaringen en kwalificaties zien waarom klanten voor jou kunnen kiezen.",
    photoAlt: "Elektricien aan het werk voor zijn elektrotechnisch bedrijf",
  },

  PRICING: {
    intro:
      `Eén Growth Rocket-pakket voor je elektrotechnisch bedrijf. ${EUR_NL.payPerPeriod}, plus eenmalige opstartkosten.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies je websiteontwerp.",
    intro:
      "Kies een ontwerp en maak het eigen met je huisstijl, diensten en projectfoto’s. Je krijgt er het gekoppelde Growth Rocket-systeem bij.",
    small:
      "Deze ontwerpen geven een indruk van de mogelijkheden. De definitieve voorbeelden voor elektriciens volgen binnenkort.",
    templateCategories: TEMPLATE_CATEGORIES,
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "elektrotechnische bedrijven.",
  },

  /* The source NL page still shows these in English, so the Dutch is our own
     translation, in the same "je" voice as the rest of the page. */
  FAQ_ITEMS: [
    {
      question: "Is Growth Rocket alleen een website voor elektriciens?",
      answer:
        "Je professionele website is één onderdeel van het pakket. Je krijgt ook Growth Rocket Hub voor aanvragen, afspraken, klantcontacten, offertes en facturen, plus hosting, onderhoud en ondersteuning.",
    },
    {
      question: "Past dit bij een zelfstandige elektricien of een klein team?",
      answer:
        "Het is gemaakt voor zzp’ers en kleine bedrijven. We stemmen de website af op je diensten en op de manier waarop klanten contact met je opnemen. Heb je specialistische werkprocessen of koppelingen nodig? Bespreek die dan met ons voordat je een pakket kiest.",
    },
    {
      question: "Kan ik mijn huidige domein en website-inhoud houden?",
      answer:
        "Ja. We kunnen je huidige content bekijken en het gebruik van je bestaande domein met je bespreken. We spreken de stappen voor de overstap af voordat je nieuwe website live gaat.",
    },
    {
      question: "Kunnen klanten elektrische klussen direct boeken?",
      answer:
        "Online afspraken plannen is inbegrepen. Gebruik het voor de diensten of bezoeken die je graag zo inplant. Voor werk waarvoor je eerst meer informatie nodig hebt voordat je een tijd of prijs kunt afspreken, verwijs je klanten naar een aanvraag.",
    },
    {
      question: "Kan ik laten zien in welke plaatsen ik werk?",
      answer:
        "Ja. Je website kan je werkelijke werkgebied beschrijven en de werkzaamheden die je daar uitvoert. We gebruiken de informatie over je werkgebied die jij aanlevert; we verzinnen geen vestigingen en beweren niet dat je plaatsen bedient waar je niet werkt.",
    },
    {
      question: "Garandeert dit een plek op de eerste pagina van Google?",
      answer:
        "Nee. De website is mobielvriendelijk en klaar voor SEO, en vormt zo een basis voor je vindbaarheid. Je positie hangt ook af van concurrentie, nuttige content en andere factoren. We garanderen geen posities of een bepaald aantal aanvragen.",
    },
    {
      question: "Wat betaal ik om te starten?",
      answer:
        `Bij jaarlijkse betaling betaal je ${EUR_NL.yearly} per jaar plus ${EUR_NL.onboarding} eenmalige opstartkosten: ${EUR_NL.firstYear} voor het eerste jaar, exclusief eventuele apart afgesproken extra’s.${EUR_NL.monthlyBillingSentence}${EUR_NL.annualSavingSentence}`,
    },
    {
      question: "Wat gebeurt er als ik hulp of een aanpassing nodig heb?",
      answer:
        "Hosting, SSL, onderhoud, technische updates en ondersteuning zijn inbegrepen. Hulp- en supportverzoeken dien je in via Growth Rocket Hub. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "elektricienswebsite?",
    intro:
      "Praktische tips voor je elektrotechnisch bedrijf: wat er op je website hoort, hoe je je voorbereidt en hoe je jouw verhaal vertelt.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Welke pagina’s heeft je elektricienswebsite nodig?",
        body: "Bedenk vooraf hoe je je diensten, projecten en contactgegevens wilt presenteren.",
        href: GUIDE_HREFS[0],
      },
      {
        num: "02",
        topic: "Je lancering plannen",
        title: "Hoelang duurt het om je website te bouwen?",
        body: "Ontdek de stappen van een websiteproject en wat jij kunt doen om de planning op koers te houden.",
        href: GUIDE_HREFS[1],
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Vertel het verhaal achter je elektrotechnisch bedrijf",
        body: "Laat op je Over ons-pagina zien wie je bent en welke ervaring je meebrengt.",
        href: GUIDE_HREFS[2],
      },
    ],
  },
});

export const ELEC_COPY: IndustryCopyByLocale = { en, nl };
