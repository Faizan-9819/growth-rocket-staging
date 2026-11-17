import { EUR_EN, EUR_NL } from "@/pricing";
/* Copy from content/seprate-pages/Growth-Rocket-03-Cleaning-Businesses-Industry-Page.docx (1).pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke cleaning business website";

/* Every template filed under the Cleaning category on /designs
   (ShineSquad, CrystalClean). */
const TEMPLATE_CATEGORIES = ["Cleaning"];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("cleaning-1.webp", "cleaning-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR CLEANING BUSINESSES IN THE NETHERLANDS",
    heading: "A website for cleaning businesses.",
    benefits: [
      "A professional website that shows what you clean and where.",
      "Manage inquiries, book appointments, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore cleaning designs", href: "/design/cleaning" },
    photoAlt: "Cleaner wiping a work surface in an office",
    breadcrumbCurrent: "Websites for cleaning businesses",
  },

  INTRO: {
    heading: "Halfway through a clean?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "When you’re cleaning a home or getting an office ready for the next working day, you can’t always answer the phone. Your website explains what each service includes, where you work and how to request a quote, so potential clients can take the next step while you finish the job.",
      "Whether you clean homes on your own or run a small team across several offices, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your cleaning business, Growth Rocket Hub to manage requests, appointments, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", designed around your cleaning services.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Receive the request.",
      "Agree the clean.",
      "Send the invoice.",
    ],
    start: "An office manager needs a weekly clean after staff have gone home.",
    steps: [
      {
        step: "1",
        lines: [
          "They request **a quote**",
          "through your website,",
          "with details of the office.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review it** in your Hub",
          "and **arrange a visit**",
          "to agree the work.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **invoice** for",
          "the agreed cleaning work.",
        ],
      },
    ],
    note: "Let clients request their preferred cleaning frequency. Agree the schedule and access arrangements directly; an inquiry is not a confirmed booking.",
  },

  LOCAL: {
    heading: "Your services. Your standards.",
    headingAccent: "Your website.",
    intro:
      "Clients want to know what is included before they invite you into their home or workplace. We shape your website around your services, your team and the way you work, with clear differences between regular cleaning, deep cleaning and any specialist services you offer.",
    checks: [
      "Your logo, colours and business story",
      "Your home, office and specialist cleaning services, with clear inclusions",
      "The towns and areas you genuinely cover",
      "Before-and-after photographs of your own cleaning work",
      "Your team, experience and verified qualifications or accreditations",
      "Genuine customer testimonials, ratings and reviews",
      "Business introductions and video testimonials",
      "Quote requests, clear contact details and booking for suitable appointments",
    ],
    small:
      "Show how you work and what clients can expect, using real photographs and genuine feedback.",
    photoAlt: "Cleaning team preparing equipment at a client’s premises",
  },

  PRICING: {
    intro:
      `One Growth Rocket package for your cleaning business, with ${EUR_EN.billingKinds} and a one-time onboarding fee.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your cleaning website.",
    intro:
      "Choose a design that suits your clients, whether you clean homes, offices or both. We adapt it with your branding, services and team photographs. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Choose a starting point. We tailor it to your services, service area and the way clients get in touch.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      shinesquad: "Cleaning",
      crystalclean: "Commercial cleaning",
    },
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "cleaning businesses.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a cleaning company website include?",
      answer:
        "Explain which spaces you clean, what each service includes and the areas you cover. Distinguish regular cleaning from deep cleans and specialist work. Add real photographs, customer reviews and a quote form, so clients can describe their property and preferred frequency before you agree a price.",
    },
    {
      question: "How much does a website for a cleaning business cost?",
      answer:
        `Growth Rocket costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. You get a professional website, Growth Rocket Hub, hosting, SSL, maintenance and support.${EUR_EN.annualSavingSentence} Extra pages or bespoke functionality are discussed separately.`,
    },
    {
      question: "Can clients book cleaning appointments online?",
      answer:
        "Yes. Online appointment booking is included for visits or services you can confidently schedule. If the price or duration depends on the size and condition of the property, collect an inquiry first and agree the scope before confirming the clean. A commercial site visit can be a useful first appointment.",
    },
    {
      question: "Can one website cover home and office cleaning?",
      answer:
        "Yes. Give each service a clear introduction, including the spaces you clean, what is included and how clients request a quote. Homeowners and office managers may need different information. We plan the content within the package’s 8–10 pages; additional pages can be discussed separately.",
    },
    {
      question: "Can I show my cleaning service area?",
      answer:
        "Yes. Describe the towns and neighbourhoods you actually serve and the services available there. Use relevant examples of your own work and consistent contact details. Your website is mobile-friendly and SEO-ready, but search positions and inquiry volumes are not guaranteed.",
    },
    {
      question: "How can I keep track of repeat cleaning clients?",
      answer:
        "Growth Rocket Hub creates contacts from inquiries and appointments. Keep customer details together, add relevant notes and use those details when preparing quotes and invoices. Agree repeat visits with the client; the package does not promise automatic recurring cleaning schedules or staff allocation.",
    },
    {
      question: "Can I keep my existing domain and cleaning website content?",
      answer:
        "We can review your service descriptions, photographs and customer feedback, and discuss using your current domain. Before launch, we agree what to retain and how the transfer will work. This helps keep the information familiar to existing clients while making the site clearer for new ones.",
    },
    {
      question: "How soon can my cleaning website be online?",
      answer:
        "Online within 7 working days. The timeframe starts once we receive all required information and materials and depends on timely approvals. Prepare your services, service area, contact details and photographs. Discuss bespoke requirements before agreeing the schedule.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "cleaning website?",
    intro:
      "Practical reading for cleaning businesses: explaining your services, collecting useful quote requests and building trust before the first visit.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "What to include on your cleaning website",
        body: "Set out your services, what each clean includes and the areas you cover.",
      },
      {
        num: "02",
        topic: "Quote requests",
        title: "Fixed prices or a cleaning quote?",
        body: "Decide when a clear price works and when you need to see the space first.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Help clients feel comfortable inviting you in",
        body: "Show your team, your working standards and genuine customer feedback.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    /* Sentence case, as the source writes it. */
    kicker: "Voor schoonmaakbedrijven in Nederland",
    heading: "Een website voor schoonmaakbedrijven.",
    benefits: [
      "Een professionele website die laat zien wat je schoonmaakt en waar.",
      "Beheer aanvragen, plan afspraken en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de schoonmaakontwerpen", href: "/design/cleaning" },
    photoAlt: "Schoonmaker neemt een werkblad af in een kantoor",
    breadcrumbCurrent: "Websites voor schoonmaakbedrijven",
  },

  INTRO: {
    heading: "Midden in een schoonmaakklus?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Als je een woning schoonmaakt of een kantoor klaarmaakt voor de volgende werkdag, kun je niet altijd de telefoon opnemen. Je website laat zien wat je diensten inhouden, waar je werkt en hoe klanten een offerte aanvragen. Zo kunnen zij de volgende stap zetten terwijl jij je werk afmaakt.",
      "Of je nu zelfstandig woningen schoonmaakt of met een klein team meerdere kantoren verzorgt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je schoonmaakbedrijf, Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", afgestemd op jouw schoonmaakdiensten.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de aanvraag.",
      "Spreek het werk af.",
      "Verstuur de factuur.",
    ],
    start: "Een kantoormanager zoekt wekelijkse schoonmaak na werktijd.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant vraagt **een offerte** aan",
          "via je website,",
          "met gegevens over het kantoor.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **plant een bezoek**",
          "om het werk te bespreken.",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte**",
          "en **factureert** daarna",
          "het afgesproken schoonmaakwerk.",
        ],
      },
    ],
    note: "Laat klanten aangeven hoe vaak ze schoonmaak nodig hebben. Spreek de planning en toegang persoonlijk af; een aanvraag is nog geen bevestigde afspraak.",
  },

  LOCAL: {
    heading: "Jouw diensten. Jouw werkwijze.",
    headingAccent: "Jouw website.",
    intro:
      "Klanten willen weten wat je schoonmaak omvat voordat ze je thuis of op kantoor uitnodigen. We stemmen je website af op je diensten, je team en je werkwijze. Daarbij maken we duidelijk onderscheid tussen reguliere schoonmaak, een grondige schoonmaak en eventuele specialistische diensten.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je schoonmaakdiensten voor woningen en kantoren, met een duidelijke uitleg van wat erbij hoort",
      "De plaatsen en regio’s waar je werkt",
      "Voor-en-nafoto’s van je eigen schoonmaakwerk",
      "Je team, ervaring en behaalde kwalificaties of keurmerken",
      "Echte klantervaringen, beoordelingen en reviews",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Offerteaanvragen, duidelijke contactgegevens en afspraken voor geschikte bezoeken",
    ],
    small:
      "Laat zien hoe je werkt en wat klanten kunnen verwachten, met eigen foto’s en echte klantervaringen.",
    photoAlt: "Schoonmaakteam zet materialen klaar bij een klant",
  },

  PRICING: {
    intro:
      `Eén Growth Rocket-pakket voor je schoonmaakbedrijf. ${EUR_NL.payPerPeriod}, plus eenmalige opstartkosten.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies je schoonmaakwebsite.",
    intro:
      "Kies een ontwerp dat bij je klanten past, of je nu woningen, kantoren of beide schoonmaakt. We passen het aan met je huisstijl, diensten en teamfoto’s. Je website wordt geleverd met Growth Rocket Hub, hosting, onderhoud en ondersteuning.",
    small:
      "Kies een basis. We stemmen die af op je diensten, werkgebied en de manier waarop klanten contact opnemen.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      shinesquad: "Schoonmaak",
      crystalclean: "Zakelijke schoonmaak",
    },
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "schoonmaakbedrijven.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een schoonmaakbedrijf?",
      answer:
        "Leg uit welke ruimtes je schoonmaakt, wat je diensten inhouden en waar je werkt. Maak onderscheid tussen reguliere schoonmaak, grondige schoonmaak en specialistisch werk. Voeg eigen foto’s, echte reviews en een offerteformulier toe. Zo kunnen klanten hun pand en gewenste frequentie beschrijven voordat je een prijs afspreekt.",
    },
    {
      question: "Wat kost een website voor een schoonmaakbedrijf?",
      answer:
        `Growth Rocket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning.${EUR_NL.annualSavingSentence} Extra pagina’s of maatwerkfuncties bespreken we apart.`,
    },
    {
      question: "Kunnen klanten online een schoonmaakafspraak maken?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen voor bezoeken of diensten die je direct kunt inplannen. Hangen de prijs en duur af van de grootte en staat van het pand? Laat de klant dan eerst een aanvraag sturen en spreek het werk af voordat je de schoonmaak bevestigt. Voor een bedrijfspand kan een kennismakingsbezoek een goede eerste afspraak zijn.",
    },
    {
      question:
        "Kan één website zowel particuliere als zakelijke schoonmaak aanbieden?",
      answer:
        "Ja. Geef elke dienst een duidelijke introductie: welke ruimtes je schoonmaakt, wat erbij hoort en hoe klanten een offerte aanvragen. Particulieren en kantoormanagers hebben vaak andere vragen. We plannen de inhoud binnen de 8–10 pagina’s van het pakket. Extra pagina’s kunnen we apart bespreken.",
    },
    {
      question: "Kan ik mijn werkgebied op de website laten zien?",
      answer:
        "Ja. Beschrijf de plaatsen en wijken waar je echt werkt en welke diensten je daar aanbiedt. Gebruik relevante voorbeelden van je eigen werk en consistente contactgegevens. Je website is mobielvriendelijk en klaar voor SEO, maar we garanderen geen posities of aantallen aanvragen.",
    },
    {
      question: "Hoe houd ik overzicht over vaste schoonmaakklanten?",
      answer:
        "Growth Rocket Hub maakt automatisch contacten aan vanuit aanvragen en afspraken. Je houdt klantgegevens bij elkaar, voegt relevante notities toe en gebruikt die gegevens voor offertes en facturen. Vervolgafspraken maak je met de klant; het pakket belooft geen automatische planning van terugkerende schoonmaakbeurten of personeelsinzet.",
    },
    {
      question: "Kan ik mijn domeinnaam en bestaande website-inhoud behouden?",
      answer:
        "We bekijken je diensten, foto’s en klantervaringen en bespreken het gebruik van je huidige domeinnaam. Voor de lancering spreken we af wat we behouden en hoe de overdracht verloopt. Zo blijft de informatie herkenbaar voor bestaande klanten en wordt de website duidelijker voor nieuwe klanten.",
    },
    {
      question: "Hoe snel kan mijn schoonmaakwebsite online staan?",
      answer:
        "Binnen 7 werkdagen online. De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring. Bereid je diensten, werkgebied, contactgegevens en foto’s voor. Bespreek maatwerkwensen voordat we de planning afspreken.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "schoonmaakwebsite?",
    intro:
      "Praktische tips voor schoonmaakbedrijven: je diensten uitleggen, gerichte offerteaanvragen ontvangen en vertrouwen opbouwen vóór het eerste bezoek.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Wat hoort er op je schoonmaakwebsite?",
        body: "Beschrijf je diensten, wat elke schoonmaak omvat en waar je werkt.",
      },
      {
        num: "02",
        topic: "Offerteaanvragen",
        title: "Vaste prijzen of een schoonmaakofferte?",
        body: "Bepaal wanneer je een duidelijke prijs kunt geven en wanneer je eerst het pand wilt bekijken.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Geef klanten vertrouwen voordat je langskomt",
        body: "Laat je team, je werkwijze en echte klantervaringen zien.",
      },
    ],
  },
}, IMAGES);

export const CLEANING: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-cleaning-businesses",
    nl: "/nl/branche/website-voor-schoonmaakbedrijven",
  },
  seo: {
    en: {
      title: "Website for Cleaning Businesses | Growth Rocket",
      description:
        "A website for your cleaning business, with Growth Rocket Hub for requests, appointments, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor schoonmaakbedrijven | Growth Rocket",
      description:
        "Een website voor je schoonmaakbedrijf, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: { en, nl },
};
