import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * CircuitPro — electrical contractors. Source: "CircuitPro — Electrical Contractor Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/circuitpro.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Electrical Contractor Website Design | CircuitPro | Growth Rocket",
    description: "Explore CircuitPro, a website design for electrical contractors, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for electrical contractors",
    subline: "A website that shows what your electrical business can deliver.",
    description: "Present your services, show relevant projects and give clients a clear route to discuss their next installation. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
    highlight: "Growth Rocket Hub",
  },
  crumb: {
    ariaLabel: "Breadcrumb",
    allDesigns: "All designs",
  },
  preview: {
    devicesLabel: "Website preview size",
    devices: {
      desktop: "Desktop",
      tablet: "Tablet",
      mobile: "Mobile",
    },
    openInBrowser: "Preview in browser",
    cta: "Start with this design",
    browserLabel: "CircuitPro · Design preview",
    caption: "Explore CircuitPro using Strøm Electric as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Show your capability.",
      accent: "Before the site meeting.",
      breakBefore: true,
    },
    intro: "Contractors and property managers want to know whether your experience fits their project. CircuitPro helps you show the work you take on, how you coordinate it and who will be their point of contact.",
    cards: [
      {
        icon: "document",
        title: "Show the work you take on.",
        body: "Present fit-outs, distribution-board work, lighting or other services you provide. Explain the types of buildings and projects you work on so clients can assess whether you are a suitable partner.",
      },
      {
        icon: "people",
        title: "Give projects useful context.",
        body: "Pair photographs with a short account of the brief, your scope and the completed work. Relevant examples help clients understand your experience beyond a list of services.",
      },
      {
        icon: "star",
        title: "Explain how you work on site.",
        body: "Introduce the people responsible for delivery and explain how you coordinate access, other trades and handover. Make your approach clear without promising every project follows the same schedule.",
      },
      {
        icon: "calendar",
        title: "Make project enquiries straightforward.",
        body: "Give clients an easy way to share the site location, type of work and intended timing. You can review the enquiry, clarify requirements and arrange the next conversation.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your projects. Your team.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "We shape CircuitPro around your company, the projects you deliver and the sectors you serve.",
    items: [
      "Your logo, colours and company background",
      "Your electrical services and project types",
      "Your sectors, regions and client groups",
      "Project photographs with a clear account of your work",
      "Your project leads, electricians and working methods",
      "Genuine client references and verified accreditations",
      "Your enquiry process and project contact details",
    ],
    imageAlt: "CircuitPro website design preview for electrical contractors",
    imageCaption: "CircuitPro, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about CircuitPro? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is CircuitPro a design I need to build myself?",
        answer: "No. We tailor and launch your website as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.",
      },
      {
        question: "Why does CircuitPro suit commercial electrical contractors?",
        answer: "It offers room to explain your capabilities, introduce your team and present relevant project work. We adapt the current mixed residential and commercial example around your actual sectors and services, so clients can understand the projects you are equipped to take on.",
      },
      {
        question: "What should I include in a project example?",
        answer: "Useful details include the type of building, the client’s brief, your scope of work and photographs of the completed installation. Include customer names, logos or testimonials only with permission. Clear project context is more useful than unsupported claims about scale or performance.",
      },
      {
        question: "Can clients send project enquiries and request a quote?",
        answer: "Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage contacts, create quotes and send invoices. We agree which initial project details to collect during setup. A request starts a conversation; it does not automatically produce a technical estimate.",
      },
      {
        question: "Can I arrange site meetings through the website?",
        answer: "Growth Rocket includes appointment management connected to your website. We agree the booking or request process with you during onboarding. You can clarify the purpose and access arrangements before confirming the visit.",
      },
      {
        question: "Will the Hub manage my construction projects or estimating?",
        answer: "The Hub supports enquiries, appointments, customer contacts, quotes and invoices. It is not presented as construction project-management or specialist estimating software. Connections to your existing systems and bespoke workflows need a separate scope discussion.",
      },
      {
        question: "Can I use my existing branding and domain?",
        answer: "Yes. We adapt CircuitPro to your identity, services, team and project content, and you can keep your existing domain. Hosting, SSL, technical maintenance and ongoing support are included, with support requests available through the Hub.",
      },
      {
        question: "What does CircuitPro cost, and how quickly can it go live?",
        answer: `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: [
      "Explore other electrical website designs.",
    ],
    intro: "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: {
      sparkfix: "Domestic repairs and installations",
      voltguard: "Electrical inspections and testing",
    },
  },
  close: {
    heading: {
      lead: "Make CircuitPro",
      accent: "your next website.",
      breakBefore: false,
    },
    description: "A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor elektrotechnische installatiebedrijven | CircuitPro",
    description: "Ontdek CircuitPro: een website voor elektrotechnische installatiebedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor elektrotechnische installatiebedrijven",
    subline: "Een website die laat zien wat jouw installatiebedrijf kan.",
    description: "Presenteer je diensten en projecten en maak het makkelijk om een volgende installatie te bespreken. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    highlight: "Growth Rocket Hub",
  },
  crumb: {
    ariaLabel: "Kruimelpad",
    allDesigns: "Alle ontwerpen",
  },
  preview: {
    devicesLabel: "Schermkeuze",
    devices: {
      desktop: "Computer",
      tablet: "Tablet",
      mobile: "Mobiel",
    },
    openInBrowser: "Bekijk in je browser",
    cta: "Kies dit ontwerp",
    browserLabel: "CircuitPro · Websitevoorbeeld",
    caption: "Bekijk CircuitPro met Strøm Electric als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Laat zien wat je kunt.",
      accent: "Vóór het gesprek op locatie.",
      breakBefore: true,
    },
    intro: "Aannemers en vastgoedbeheerders willen weten of jouw ervaring aansluit op hun project. Met CircuitPro laat je zien welk werk je aanneemt, hoe je het organiseert en wie hun aanspreekpunt is.",
    cards: [
      {
        icon: "document",
        title: "Laat zien welk werk je aanneemt.",
        body: "Presenteer bedrijfsinrichtingen, verdeelinrichtingen, verlichting of andere diensten die je aanbiedt. Benoem de soorten panden en projecten, zodat klanten kunnen beoordelen of je bij hun opdracht past.",
      },
      {
        icon: "people",
        title: "Geef projecten inhoud.",
        body: "Combineer foto’s met een korte uitleg van de opdracht, jouw werkzaamheden en het resultaat. Relevante voorbeelden maken je ervaring concreter dan alleen een dienstenlijst.",
      },
      {
        icon: "star",
        title: "Leg uit hoe je op locatie werkt.",
        body: "Stel de mensen voor die het werk begeleiden en vertel hoe je toegang, andere vakmensen en oplevering afstemt. Maak je aanpak duidelijk zonder voor elk project dezelfde planning te beloven.",
      },
      {
        icon: "calendar",
        title: "Maak een projectaanvraag eenvoudig.",
        body: "Laat klanten de locatie, het soort werk en de gewenste planning delen. Je beoordeelt de aanvraag, bespreekt wat er nodig is en plant het volgende gesprek.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw projecten. Jouw team.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "We stemmen CircuitPro af op jouw bedrijf, de projecten die je uitvoert en de sectoren waarin je werkt.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je elektrotechnische diensten en soorten projecten",
      "Je sectoren, regio’s en klantgroepen",
      "Projectfoto’s met een duidelijke toelichting op je werk",
      "Je projectleiders, monteurs en werkwijze",
      "Echte klantreferenties en aantoonbare erkenningen",
      "Je aanvraagproces en contactgegevens voor projecten",
    ],
    imageAlt: "Voorbeeld van het CircuitPro-websiteontwerp voor elektrotechnische installatiebedrijven",
    imageCaption: "CircuitPro, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over CircuitPro? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is CircuitPro een ontwerp dat ik zelf moet bouwen?",
        answer: "Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.",
      },
      {
        question: "Waarom past CircuitPro bij zakelijke elektrotechnische projecten?",
        answer: "Je krijgt ruimte om je expertise uit te leggen, je team voor te stellen en relevante projecten te laten zien. We stemmen het huidige voorbeeld, met particulier en zakelijk werk, af op jouw sectoren en diensten. Zo begrijpen klanten welke projecten je bedrijf kan uitvoeren.",
      },
      {
        question: "Wat zet ik bij een projectvoorbeeld?",
        answer: "Benoem het soort pand, de vraag van de klant, jouw werkzaamheden en voeg foto’s van de opgeleverde installatie toe. Gebruik klantnamen, logo’s en beoordelingen alleen met toestemming. Duidelijke projectinformatie zegt meer dan onbewezen claims over omvang of prestaties.",
      },
      {
        question: "Kunnen klanten een projectaanvraag sturen of een offerte aanvragen?",
        answer: "Ja. Aanvragen via je website komen in Growth Rocket Hub. Daar volg je ze op, beheer je contacten en maak je offertes en facturen op. Tijdens de inrichting spreken we af welke eerste projectgegevens nodig zijn. Een aanvraag begint het gesprek en maakt niet automatisch een technische calculatie.",
      },
      {
        question: "Kan ik via de website afspraken op locatie plannen?",
        answer: "Growth Rocket biedt afsprakenbeheer dat verbonden is met je website. Tijdens de inrichting spreken we af hoe klanten een afspraak boeken of aanvragen. Je kunt het doel en de toegang tot de locatie bespreken voordat je de afspraak bevestigt.",
      },
      {
        question: "Beheert de Hub mijn bouwprojecten of calculaties?",
        answer: "De Hub ondersteunt aanvragen, afspraken, contacten, offertes en facturen. Het is geen gespecialiseerd systeem voor bouwprojectbeheer of technische calculaties. Koppelingen met bestaande systemen en specifieke werkprocessen bespreken we apart.",
      },
      {
        question: "Kan ik mijn bestaande huisstijl en domeinnaam gebruiken?",
        answer: "Ja. We stemmen CircuitPro af op je huisstijl, diensten, team en projecten. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub kun je een supportverzoek indienen.",
      },
      {
        question: "Wat kost CircuitPro en hoe snel kan mijn website online?",
        answer: `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: [
      "Bekijk andere elektrotechnische ontwerpen.",
    ],
    intro: "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: {
      sparkfix: "Reparaties en installaties in woningen",
      voltguard: "Elektrotechnische inspecties en metingen",
    },
  },
  close: {
    heading: {
      lead: "Maak van CircuitPro",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const circuitpro: Record<Locale, PageOwnCopy> = { en, nl };
