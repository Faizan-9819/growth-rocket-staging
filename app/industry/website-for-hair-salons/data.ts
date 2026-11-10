/* Copy from content/seprate-pages/Growth-Rocket-06-Hairdressers-and-Salons-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke salon website";

/* Every template filed under the salon category on /designs. */
const TEMPLATE_CATEGORIES = ["salon"];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("hair-1.webp", "hair-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR HAIRDRESSERS AND SALONS IN THE NETHERLANDS",
    heading: "A website for hairdressers and salons.",
    benefits: [
      "A professional website that shows your style and services.",
      "Book appointments, manage inquiries, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore salon designs", href: "/design/salon" },
    photoAlt: "Hairdresser styling a client’s hair in a bright salon",
    breadcrumbCurrent: "Websites for hairdressers and salons",
  },

  INTRO: {
    heading: "Scissors in hand?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "When you’re cutting or colouring a client’s hair, you cannot always stop to answer the phone. Your website lets people check your services and prices, see your work and book an available appointment, even after the salon has closed.",
      "Whether you work on your own or run a salon team, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website that shows your salon’s work, Growth Rocket Hub for bookings, inquiries, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", styled around your salon.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Receive the inquiry.",
      "Arrange the trial.",
      "Send the quote.",
    ],
    start: "A bride wants hair styling for her wedding party.",
    steps: [
      {
        step: "1",
        lines: [
          "They send you **an inquiry**",
          "through your website,",
          "with the wedding details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review the inquiry** in your Hub",
          "and **arrange a trial**",
          "with the client.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **invoice** according to",
          "the agreed booking terms.",
        ],
      },
    ],
    note: "For everyday cuts and colours, clients can book an available appointment online. Discuss any staff-specific scheduling or existing salon software before the setup.",
  },

  LOCAL: {
    heading: "Your style. Your salon.",
    headingAccent: "Your website.",
    intro:
      "A new client wants to see the styles you create, understand the price and know who will welcome them. We shape your website around your services, team and real salon photographs, with a clear route to booking.",
    checks: [
      "Your logo, colours and business story",
      "Your services and price list, from cuts to colour and treatments",
      "Your salon location, opening hours and how to find you",
      "Photos of your salon and a gallery of your work",
      "Your stylists, their specialisms and experience",
      "Genuine customer testimonials, ratings and reviews",
      "A salon introduction video and client stories shared with permission",
      "Clear contact details and online booking",
    ],
    small:
      "Use real examples of your work and clear service information to help clients choose their next appointment.",
    photoAlt: "Stylist at work, showing the people behind a hair salon",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your salon, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your salon website.",
    intro:
      "Choose a design, then make it yours with your branding, service list and salon photographs. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Explore a design for your salon. More previews will be added as they become available.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      "trim-and-trend": "Hair Salon",
    },
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "hairdressers and salons.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a hair salon website include?",
      answer:
        "Show your services and prices, real examples of your work, your team and their specialisms. Add opening hours, directions and a clear booking option. Explain which services need a consultation first, so clients know whether to choose an appointment or ask a question.",
    },
    {
      question: "How much does a salon website cost?",
      answer:
        "Growth Rocket costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can clients book appointments through my salon website?",
      answer:
        "Yes. Clients choose a service and an available time, enter their details and receive appointment information by email. The booking appears in Growth Rocket Hub. If you need specific staff, chair or treatment-room scheduling, discuss those requirements before setup rather than assuming they are included.",
    },
    {
      question: "Can I show my prices and introduce my stylists?",
      answer:
        "Yes. We can present your services, prices and stylist introductions within the agreed website pages. Make variable prices and consultation requirements clear. You can request later changes through Growth Rocket Hub; the scope of an update is agreed with you.",
    },
    {
      question: "Can my website help local clients find the salon?",
      answer:
        "Your address, opening hours, services and directions help people understand where you are and whether you offer what they need. We build a mobile-friendly, SEO-ready website. Keep those details consistent with your other business listings; rankings and appointment numbers are not guaranteed.",
    },
    {
      question: "Can I handle bridal and event inquiries?",
      answer:
        "Yes. A client can send an inquiry with the date, group size and styling needs. You review it in Growth Rocket Hub and arrange a trial or consultation. Send a quote, then convert the accepted quote into an invoice and bill according to the terms you agree.",
    },
    {
      question: "Does Growth Rocket replace my salon till or payment system?",
      answer:
        "The included Hub supports inquiries, appointments, contacts, quotes and invoices. Salon till functions, stock management, online deposits and automatic reminders are not part of this stated offer. Tell us which existing systems you use so we can agree the setup and assess any additional requirements.",
    },
    {
      question: "Can I keep my domain and existing salon content?",
      answer:
        "We can review your photos, service list and current domain and agree the transfer before launch. Discuss any existing booking system and how appointments will be handled during the change. Your website can be online within 7 working days after we receive all required information and materials, with timely approvals.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "salon website?",
    intro:
      "Practical reading for salon owners: presenting services, choosing portfolio photos and preparing online booking.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "Plan your salon’s services and price list",
        body: "Make it clear what each service includes and when a consultation is needed.",
      },
      {
        num: "02",
        topic: "Showing your work",
        title: "Choose photos that show your salon’s style",
        body: "Build a useful gallery with genuine work, clear captions and client permission.",
      },
      {
        num: "03",
        topic: "Booking preparation",
        title: "Make the next appointment easy to book",
        body: "Plan service choices and contact details before setting up your booking flow.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor kappers en salons in Nederland",
    heading: "Een website voor kappers en salons.",
    benefits: [
      "Een professionele website die jouw stijl en diensten laat zien.",
      "Plan afspraken, beheer aanvragen en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de salonontwerpen", href: "/design/salon" },
    photoAlt: "Kapper helpt een klant in de salon",
    breadcrumbCurrent: "Websites voor kappers en salons",
  },

  INTRO: {
    heading: "Bezig met knippen of kleuren?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Als je met een klant bezig bent, kun je niet steeds de telefoon opnemen. Op je website bekijken mensen je diensten, prijzen en werk en boeken ze een beschikbare afspraak. Ook als je salon al gesloten is.",
      "Of je nu alleen werkt of een salonteam aanstuurt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website die het werk van je salon laat zien, Growth Rocket Hub voor afspraken, aanvragen, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", in de stijl van je salon.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de aanvraag.",
      "Plan de proefsessie.",
      "Verstuur de offerte.",
    ],
    start: "Een bruid zoekt een kapper voor zichzelf en haar gezelschap.",
    steps: [
      {
        step: "1",
        lines: [
          "Ze stuurt **een aanvraag**",
          "via je website,",
          "met de trouwdatum en haar wensen.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **plant een proefsessie**",
          "met de klant.",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte**",
          "en **factureert** volgens",
          "de gemaakte afspraken.",
        ],
      },
    ],
    note: "Voor knippen en kleuren kunnen klanten online een beschikbare afspraak boeken. Bespreek vooraf eventuele planning per medewerker of bestaande salonsoftware.",
  },

  LOCAL: {
    heading: "Jouw stijl. Jouw salon.",
    headingAccent: "Jouw website.",
    intro:
      "Een nieuwe klant wil zien welke kapsels je maakt, wat een behandeling kost en wie er klaarstaat. We stemmen je website af op je diensten, team en echte salonfoto’s, met een duidelijke mogelijkheid om te boeken.",
    checks: [
      "Je logo, kleuren en het verhaal van je salon",
      "Je diensten en prijslijst, van knippen tot kleuren en verzorging",
      "Je adres, openingstijden en bereikbaarheid",
      "Foto’s van je salon en voorbeelden van je werk",
      "Je team, specialismen en ervaring",
      "Echte klantervaringen, beoordelingen en reviews",
      "Een salonvideo en klantverhalen die je met toestemming deelt",
      "Duidelijke contactgegevens en online afspraken boeken",
    ],
    small:
      "Help klanten kiezen met echte voorbeelden van je werk en heldere informatie over je diensten.",
    photoAlt: "Kapper aan het werk bij een klant",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je salon. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor je salon.",
    intro:
      "Kies een ontwerp en maak het eigen met je huisstijl, diensten en salonfoto’s. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Ontdek een ontwerp voor je salon. Er volgen meer voorbeelden zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      "trim-and-trend": "Kapsalon",
    },
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "kappers en saloneigenaren.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een kapsalon?",
      answer:
        "Laat je diensten, prijzen, echte voorbeelden van je werk en de specialismen van je team zien. Voeg openingstijden, een routebeschrijving en een duidelijke boekingsmogelijkheid toe. Leg uit voor welke behandelingen eerst overleg nodig is, zodat klanten weten of ze direct kunnen boeken of beter een vraag stellen.",
    },
    {
      question: "Wat kost een website voor een salon?",
      answer:
        "Growth Rocket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen klanten via mijn salonwebsite een afspraak boeken?",
      answer:
        "Ja. Klanten kiezen een dienst en een beschikbaar tijdstip, vullen hun gegevens in en ontvangen de afspraakgegevens per e-mail. De boeking verschijnt in Growth Rocket Hub. Heb je planning per medewerker, stoel of behandelruimte nodig? Bespreek dat vóór de inrichting; die mogelijkheden zijn niet automatisch inbegrepen.",
    },
    {
      question: "Kan ik mijn prijzen en team op de website laten zien?",
      answer:
        "Ja. We kunnen je diensten, prijzen en team voorstellen binnen het afgesproken aantal pagina’s. Maak variabele prijzen en eventuele overlegmomenten duidelijk. Latere wijzigingen kun je aanvragen via Growth Rocket Hub. We stemmen de omvang van de wijziging met je af.",
    },
    {
      question:
        "Helpt mijn website klanten uit de buurt om mijn salon te vinden?",
      answer:
        "Je adres, openingstijden, diensten en routebeschrijving laten zien waar je zit en wat je aanbiedt. We bouwen een mobielvriendelijke website die klaar is voor SEO. Houd de gegevens gelijk aan je andere bedrijfsvermeldingen. Posities in zoekresultaten en aantallen afspraken worden niet gegarandeerd.",
    },
    {
      question: "Kan ik aanvragen voor bruidskapsels en evenementen beheren?",
      answer:
        "Ja. Een klant kan een aanvraag sturen met de datum, groepsgrootte en wensen. Je bekijkt die in Growth Rocket Hub en plant een proefsessie of overleg. Daarna stuur je een offerte. De geaccepteerde offerte zet je om in een factuur, volgens de afspraken met je klant.",
    },
    {
      question: "Vervangt Growth Rocket mijn salonkassa of betaalsysteem?",
      answer:
        "De inbegrepen Hub ondersteunt aanvragen, afspraken, contacten, offertes en facturen. Kassafuncties, voorraadbeheer, online aanbetalingen en automatische herinneringen horen niet bij dit beschreven aanbod. Vertel welke systemen je gebruikt, zodat we de inrichting en eventuele aanvullende wensen kunnen bespreken.",
    },
    {
      question: "Kan ik mijn domeinnaam en bestaande saloninhoud behouden?",
      answer:
        "We bekijken je foto’s, diensten en domeinnaam en spreken de overdracht vóór de lancering af. Bespreek ook je bestaande boekingssysteem en hoe je afspraken tijdens de overstap bijhoudt. Je website kan binnen 7 werkdagen online nadat we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "salonwebsite?",
    intro:
      "Praktische tips voor saloneigenaren: diensten presenteren, foto’s kiezen en online boeken voorbereiden.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Breng je diensten en prijzen helder in beeld",
        body: "Leg uit wat bij elke behandeling hoort en wanneer overleg nodig is.",
      },
      {
        num: "02",
        topic: "Je werk laten zien",
        title: "Kies foto’s die de stijl van je salon laten zien",
        body: "Maak een galerij met echt werk, duidelijke toelichting en toestemming van klanten.",
      },
      {
        num: "03",
        topic: "Afspraken voorbereiden",
        title: "Maak de volgende afspraak makkelijk te boeken",
        body: "Bepaal je behandelingen en contactgegevens voordat je de boekingsstappen inricht.",
      },
    ],
  },
}, IMAGES);

export const HAIR_SALONS: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-hair-salons",
    nl: "/nl/branche/website-voor-kapsalons",
  },
  seo: {
    en: {
      title: "Website for Hairdressers and Salons | Growth Rocket",
      description:
        "Show your salon’s services and style, with Growth Rocket Hub for bookings, inquiries, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor kappers en salons | Growth Rocket",
      description:
        "Laat je salon en diensten zien. Met Growth Rocket Hub voor afspraken, aanvragen, offertes en facturen. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: {
    /* The document’s closing CTA reads “Great at what you do.” where the
       shared copy has “Great at your trade.” */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
