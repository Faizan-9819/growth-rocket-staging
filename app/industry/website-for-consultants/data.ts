/* Copy from content/seprate-pages/Growth-Rocket-04-Consultants-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke consultant website";

/* No consultant templates exist yet; the grid shows the proposed design
   names (NorthStar, BrandLift, PeopleFirst) as unlinked placeholders. */
const TEMPLATE_CATEGORIES: string[] = [];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("consultant-1.webp", "consultant-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR CONSULTANTS IN THE NETHERLANDS",
    heading: "A website for consultants.",
    benefits: [
      "A professional website that explains your expertise clearly.",
      "Book introductory calls, manage inquiries, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore consultant designs", href: "/design" },
    photoAlt: "Consultant talking with a client across a meeting table",
    breadcrumbCurrent: "Websites for consultants",
  },

  INTRO: {
    heading: "In a client meeting?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "When you’re leading a workshop or working through a client’s challenge, you can’t pause for every new inquiry. Your website explains the problems you help solve, who you work with and how an engagement starts. Prospective clients can describe their situation or book a first conversation while you focus on the project.",
      "Whether you work independently or run a small advisory firm, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website that presents your consulting expertise, Growth Rocket Hub for inquiries, appointments, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", built to present your expertise.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Book the conversation.",
      "Agree the project.",
      "Send the invoice.",
    ],
    start:
      "A business owner needs help clarifying responsibilities as their team grows.",
    steps: [
      {
        step: "1",
        lines: [
          "They book **an introductory call**",
          "through your website,",
          "with their details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review the booking** in your Hub",
          "and **discuss their priorities**",
          "during the call.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **invoice** according to",
          "the agreed project terms.",
        ],
      },
    ],
    note: "Use an inquiry form when you need more context before a call. Agree the project scope, deliverables and billing terms directly with the client.",
  },

  LOCAL: {
    heading: "Your expertise. Your approach.",
    headingAccent: "Your website.",
    intro:
      "Clients rarely hire a consultant on price alone; they hire someone they believe understands their problem. We shape your website around your specialism, your method and proof from past projects.",
    checks: [
      "Your logo, colours and business story",
      "Your services, specialisms and the sectors you work in",
      "Where you work: on site, remote or both",
      "Case studies and examples of client work",
      "Your background, experience and verified qualifications",
      "Genuine client testimonials and recommendations",
      "Business introductions and video testimonials",
      "Clear contact details, enquiry forms and intro-call booking",
    ],
    small:
      "Show the challenge, your contribution and the outcome of real projects, using only examples you have permission to share.",
    photoAlt: "Consultant at work, showing the person behind a consultancy",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your consultancy, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your consultant website.",
    intro:
      "Choose a direction that gives your expertise room to speak. We tailor it with your services, approach and approved case studies. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Illustrative design directions. Consultant previews will be added when available.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "NorthStar", subtitle: "Business Consulting" },
      { title: "BrandLift", subtitle: "Marketing Consulting" },
      { title: "PeopleFirst", subtitle: "HR Consulting" },
    ],
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "consultants.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a consultant website include?",
      answer:
        "Explain the problems you help solve, who you work with and what an engagement involves. Add your approach, relevant experience and genuine client examples. Give visitors a clear way to describe their situation or book an introductory call, so you can assess whether the work fits your expertise.",
    },
    {
      question: "How much does a website for consultants cost?",
      answer:
        "Growth Rocket costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can clients book an introductory call through my website?",
      answer:
        "Yes. Online appointment booking is included. Prospective clients can book an available appointment and you can review it in Growth Rocket Hub. If you need to understand the request first, use an inquiry form before arranging the call. Agree the call format and any preparation with the client.",
    },
    {
      question: "Can I show case studies without naming every client?",
      answer:
        "Yes. A case study can describe the challenge, your contribution and the outcome without publishing the client’s name. Agree what you may share and remove identifying details where needed. Only use results you can substantiate; a project example should show your experience without promising the same outcome to every client.",
    },
    {
      question:
        "How do I explain several consulting services without making the site vague?",
      answer:
        "Organise services around the situations clients recognise, such as clarifying team responsibilities or reviewing a marketing approach. Explain who each service suits, what you do and what the client receives. We plan the content within the package’s 8–10 pages; additional pages can be discussed separately.",
    },
    {
      question: "Can I send quotes and invoices for consulting projects?",
      answer:
        "Yes. Create and send a quote in Growth Rocket Hub, then convert an accepted quote into an invoice. Use the scope and billing terms you agreed with the client. The Hub supports your commercial administration; it does not promise project delivery, automatic milestone billing or contract management.",
    },
    {
      question: "Can the website explain where and how I work?",
      answer:
        "Yes. State whether you work on site, remotely or both, and which regions and sectors you serve. Relevant service descriptions and real project examples help visitors judge fit. Your website is mobile-friendly and SEO-ready, providing a foundation for search visibility without guaranteed rankings or inquiry volumes.",
    },
    {
      question: "Can I keep my domain and existing consulting content?",
      answer:
        "We can review your existing services, articles and case studies and discuss using your current domain. Agree the transfer before launch. Your website can be online within 7 working days once we receive all required information and materials, with timely approvals. Prepare any permissions needed for client examples before the build.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "consultant website?",
    intro:
      "Practical reading for consultants: positioning your offer, writing case studies and turning visitors into first calls.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "Make your consulting offer easy to understand",
        body: "Explain the problems you solve, who you help and what an engagement involves.",
      },
      {
        num: "02",
        topic: "Showing expertise",
        title: "How to write a consulting case study",
        body: "Describe the challenge, your contribution and the outcome without overstating results.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Make your About page start the conversation",
        body: "Introduce your background, your approach and the clients you work best with.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    /* Sentence case, as the source writes it. */
    kicker: "Voor consultants in Nederland",
    heading: "Een website voor consultants.",
    benefits: [
      "Een professionele website die jouw expertise duidelijk maakt.",
      "Plan kennismakingsgesprekken, beheer aanvragen en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de ontwerpen voor consultants", href: "/design" },
    photoAlt: "Consultant bespreekt een vraagstuk met een ondernemer",
    breadcrumbCurrent: "Websites voor consultants",
  },

  INTRO: {
    heading: "In gesprek met een klant?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Als je een workshop begeleidt of aan een klantvraag werkt, kun je niet voor elke nieuwe aanvraag stoppen. Je website legt uit bij welke vraagstukken je helpt, voor wie je werkt en hoe een samenwerking begint. Potentiële klanten kunnen hun situatie beschrijven of een kennismaking plannen terwijl jij je op je opdracht richt.",
      "Of je nu zelfstandig adviseert of een klein adviesbureau runt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website die jouw expertise laat zien, Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", gemaakt om je expertise te laten zien.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Plan de kennismaking.",
      "Spreek de opdracht af.",
      "Verstuur de factuur.",
    ],
    start:
      "Een ondernemer wil de verantwoordelijkheden binnen een groeiend team verduidelijken.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant plant **een kennismaking**",
          "via je website,",
          "met de contactgegevens.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de afspraak** in je Hub",
          "en **bespreekt de prioriteiten**",
          "tijdens het gesprek.",
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
    note: "Gebruik een aanvraagformulier als je vóór een gesprek meer context nodig hebt. Spreek de opdracht, het op te leveren werk en de facturering persoonlijk af.",
  },

  LOCAL: {
    heading: "Jouw expertise. Jouw aanpak.",
    headingAccent: "Jouw website.",
    intro:
      "Een klant wil weten of je zijn vraagstuk begrijpt voordat hij je inschakelt. We stemmen je website af op je specialisme, je werkwijze en voorbeelden van eerdere opdrachten. Zo wordt duidelijk voor wie je werkt en wat een samenwerking inhoudt.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je diensten, specialismen en de sectoren waarin je werkt",
      "Waar en hoe je werkt: op locatie, op afstand of beide",
      "Praktijkvoorbeelden en opdrachten die je mag delen",
      "Je achtergrond, ervaring en behaalde kwalificaties",
      "Echte klantervaringen en aanbevelingen",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Duidelijke contactgegevens, aanvraagformulieren en een kennismaking plannen",
    ],
    small:
      "Laat het vraagstuk, jouw bijdrage en het resultaat van echte opdrachten zien, met toestemming van je klant.",
    photoAlt: "Adviseur werkt met een klant aan een projectplan",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je adviesbureau. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor je adviesbureau.",
    intro:
      "Kies een ontwerp dat ruimte geeft aan je expertise. We passen het aan met jouw diensten, werkwijze en goedgekeurde praktijkvoorbeelden. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Deze ontwerpen geven een indruk van de mogelijkheden. Voorbeelden voor consultants volgen zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "NorthStar", subtitle: "Bedrijfsadvies" },
      { title: "BrandLift", subtitle: "Marketingadvies" },
      { title: "PeopleFirst", subtitle: "HR-advies" },
    ],
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "consultants.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een consultant?",
      answer:
        "Leg uit bij welke vraagstukken je helpt, voor wie je werkt en wat een opdracht inhoudt. Voeg je aanpak, relevante ervaring en echte klantvoorbeelden toe. Maak het eenvoudig om een situatie te beschrijven of een kennismaking te plannen. Zo kun jij beoordelen of de opdracht bij je expertise past.",
    },
    {
      question: "Wat kost een website voor een consultant?",
      answer:
        "Growth Rocket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen klanten via mijn website een kennismaking plannen?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen. Potentiële klanten kunnen een beschikbare afspraak boeken en jij bekijkt deze in Growth Rocket Hub. Wil je eerst de vraag begrijpen? Gebruik dan een aanvraagformulier voordat je een gesprek plant. Spreek de gespreksvorm en eventuele voorbereiding af met de klant.",
    },
    {
      question: "Kan ik praktijkvoorbeelden tonen zonder elke klant te noemen?",
      answer:
        "Ja. Je kunt het vraagstuk, jouw bijdrage en het resultaat beschrijven zonder de klantnaam te publiceren. Spreek af wat je mag delen en haal herkenbare details weg als dat nodig is. Gebruik alleen resultaten die je kunt onderbouwen. Een voorbeeld laat je ervaring zien, zonder elke klant dezelfde uitkomst te beloven.",
    },
    {
      question: "Hoe presenteer ik meerdere adviesdiensten zonder vaag te worden?",
      answer:
        "Groepeer je diensten rond situaties die klanten herkennen, zoals onduidelijke teamverantwoordelijkheden of een marketingaanpak die herzien moet worden. Leg uit voor wie een dienst bedoeld is, wat je doet en wat de klant ontvangt. We plannen de inhoud binnen de 8–10 pagina’s van het pakket. Extra pagina’s bespreken we apart.",
    },
    {
      question: "Kan ik offertes en facturen voor adviesopdrachten versturen?",
      answer:
        "Ja. Je maakt en verstuurt een offerte in Growth Rocket Hub en kunt een geaccepteerde offerte omzetten naar een factuur. Gebruik de opdrachtomschrijving en betaalafspraken die je met de klant hebt gemaakt. De Hub ondersteunt je commerciële administratie; projectuitvoering, automatische deelfacturering en contractbeheer worden niet als inbegrepen functies aangeboden.",
    },
    {
      question: "Kan ik uitleggen waar en hoe ik werk?",
      answer:
        "Ja. Vertel of je op locatie, op afstand of op beide manieren werkt, en welke regio’s en sectoren je bedient. Relevante dienstbeschrijvingen en echte praktijkvoorbeelden helpen bezoekers beoordelen of je bij hun vraag past. Je website is mobielvriendelijk en klaar voor SEO. Dat biedt een basis voor vindbaarheid, zonder gegarandeerde posities of aantallen aanvragen.",
    },
    {
      question: "Kan ik mijn domeinnaam en bestaande inhoud behouden?",
      answer:
        "We bekijken je huidige diensten, artikelen en praktijkvoorbeelden en bespreken het gebruik van je domeinnaam. Voor de lancering spreken we de overdracht af. Je website kan binnen 7 werkdagen online staan zodra we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring. Regel vóór de bouw ook toestemming voor klantvoorbeelden.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "website voor je adviesbureau?",
    intro:
      "Praktische tips voor consultants: je aanbod uitleggen, praktijkvoorbeelden schrijven en een eerste gesprek mogelijk maken.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Maak je adviesaanbod duidelijk",
        body: "Leg uit welke vraagstukken je oplost, wie je helpt en wat een opdracht inhoudt.",
      },
      {
        num: "02",
        topic: "Je expertise laten zien",
        title: "Zo schrijf je een praktijkvoorbeeld",
        body: "Beschrijf het vraagstuk, jouw bijdrage en het resultaat zonder de uitkomst groter te maken.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat je Over ons-pagina het gesprek openen",
        body: "Vertel over je achtergrond, je aanpak en de klanten bij wie je goed past.",
      },
    ],
  },
}, IMAGES);

export const CONSULTANTS: IndustryPageDef = {
  paths: { en: "/industry/website-for-consultants", nl: "/nl/branche/website-voor-consultants" },
  seo: {
    en: {
      title: "Website for Consultants | Growth Rocket",
      description:
        "A website that explains your consulting expertise, with Growth Rocket Hub for inquiries, calls, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor consultants | Growth Rocket",
      description:
        "Een website voor je adviesbureau, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: {
    /* The consultant document changes the closing headline from "Great at
       your trade." to "Great at what you do." (EN only; NL is unchanged). */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
