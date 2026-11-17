import { EUR_EN, EUR_NL } from "@/pricing";
/* Copy from content/seprate-pages/Growth-Rocket-07-Coaches-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke coaching website";

/* No coaching templates exist yet, so the proposed designs show as
   placeholders. */
const TEMPLATE_CATEGORIES: string[] = [];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("coach-1.webp", "coach-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR COACHES IN THE NETHERLANDS",
    heading: "A coaching website.",
    benefits: [
      "A professional website that shows how you help people move forward.",
      "Book discovery calls, manage inquiries, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore coaching designs", href: "/design" },
    photoAlt: "Coach in conversation with a client in a calm, light room",
    breadcrumbCurrent: "Coaching websites",
  },

  INTRO: {
    heading: "In a coaching session?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "While you’re giving a client your full attention, someone else may be deciding whether your coaching is right for them. Your website explains who you work with, how sessions work and what the first conversation involves. They can ask a question or book a discovery call without waiting for you to reply.",
      "Whether you coach independently or run a small practice, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website that explains your coaching approach, Growth Rocket Hub for inquiries, appointments, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your coaching ",
      headingTail: ", built around how you work.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Book the call.",
      "Agree the programme.",
      "Send the invoice.",
    ],
    start: "A new manager wants help leading their first team.",
    steps: [
      {
        step: "1",
        lines: [
          "They **book a discovery call**",
          "through your website,",
          "with their details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review the booking** in your Hub",
          "and **discuss the client’s goals**",
          "during the call.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a programme quote**",
          "and **invoice** according to",
          "the agreed terms.",
        ],
      },
    ],
    note: "Use an inquiry form for people who want to ask a question first. Agree the session format, programme scope and fees directly with each client.",
  },

  LOCAL: {
    heading: "Your method. Your story.",
    headingAccent: "Your website.",
    intro:
      "People want to understand your approach before sharing a personal or professional challenge. We shape your website around who you help, what sessions involve and your relevant experience. Clear programme descriptions help people decide whether to start a conversation.",
    checks: [
      "Your logo, colours and business story",
      "Your coaching programmes, packages and session formats",
      "Where you coach: in person, online or both",
      "Your story and the experience behind your approach",
      "Your training, accreditations and verified credentials",
      "Genuine client testimonials and reviews",
      "Business introductions and video testimonials",
      "Clear contact details, inquiry forms and discovery-call booking",
    ],
    small:
      "Let your approach, verified experience and genuine client feedback speak for your work, without promising the same outcome for everyone.",
    photoAlt: "Coach at work, showing the person behind a coaching practice",
  },

  PRICING: {
    intro:
      `One Growth Rocket package for your coaching practice, with ${EUR_EN.billingKinds} and a one-time onboarding fee.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your coaching website.",
    intro:
      "Choose a direction that fits your coaching approach. We tailor it with your programmes, background and branding. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Illustrative design directions. Final coaching design previews will be added to the collection.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "PathFinder", subtitle: "Life Coaching" },
      { title: "LeadWell", subtitle: "Business Coaching" },
      { title: "ThriveMind", subtitle: "Wellness Coaching" },
    ],
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "coaches.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a coaching website include?",
      answer:
        "Explain who your coaching is for, which questions you work on and how sessions or programmes are structured. Add your background, relevant training and genuine client feedback. Give people a clear way to ask a question or book a discovery call, without promising a particular outcome.",
    },
    {
      question: "How much does a coaching website cost?",
      answer:
        `Growth Rocket costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support.${EUR_EN.annualSavingSentence} Extra pages or bespoke functionality are discussed separately.`,
    },
    {
      question: "Can prospective clients book a discovery call?",
      answer:
        "Yes. Online appointment booking is included. People choose an available time and enter their details, and the booking appears in Growth Rocket Hub. Explain the purpose, length and any fee for the introductory conversation on your website so visitors know what they are booking.",
    },
    {
      question: "Can I present and invoice coaching programmes?",
      answer:
        "Yes. Your website can explain each programme’s audience, format, scope and price. You can send a quote from Growth Rocket Hub and convert the accepted quote into an invoice. Online checkout, subscriptions and automatic instalment billing should be discussed separately; they are not assumed to be included.",
    },
    {
      question: "Does this work for online and in-person coaching?",
      answer:
        "Yes. Your website can explain where and how you coach, and clients can book appointments. Growth Rocket Hub handles the business administration. Video calls remain in your existing service; a video-call integration is not included in the stated package.",
    },
    {
      question: "How can my website explain my coaching specialism?",
      answer:
        "Use clear descriptions of your audience, the questions clients bring and how you work with them. Explain your genuine location or online availability. This helps visitors judge the fit and gives search engines relevant content. Your website is mobile-friendly and SEO-ready, without a promise of rankings or new clients.",
    },
    {
      question: "Can I include credentials and client testimonials?",
      answer:
        "Yes. Share your actual qualifications, training and accreditations, with permission to use any client feedback. Explain examples in their own context rather than presenting them as a guaranteed result. We shape the content around the information you supply and approve.",
    },
    {
      question: "Can I keep my domain, and how soon can my website go live?",
      answer:
        "We can review your existing content and agree the domain transfer before launch. You provide your programmes, biography, photographs and any approved testimonials. The website can be online within 7 working days after all required information and materials arrive, with timely approvals. Confirm any additional functions before the build.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "coaching website?",
    intro:
      "Practical reading for coaches: defining your niche, packaging your programmes and sounding like yourself online.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "The pages your coaching website needs",
        body: "Plan your programmes, story and booking options before the build starts.",
      },
      {
        num: "02",
        topic: "Explaining your offer",
        title: "How to describe your coaching packages",
        body: "Make it clear who each programme is for and what it includes.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Write an About page that sounds like you",
        body: "Share your story and approach so the right clients feel at ease.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor coaches in Nederland",
    heading: "Een website voor coaches.",
    benefits: [
      "Een professionele website die jouw aanpak helder maakt.",
      "Plan kennismakingsgesprekken, beheer aanvragen en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de ontwerpen voor coaches", href: "/design" },
    photoAlt: "Coach in gesprek met een cliënt",
    breadcrumbCurrent: "Websites voor coaches",
  },

  INTRO: {
    heading: "In gesprek met een cliënt?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Terwijl jij een cliënt je volle aandacht geeft, vraagt iemand anders zich misschien af of jouw coaching past. Je website laat zien voor wie je werkt, hoe sessies verlopen en wat een eerste gesprek inhoudt. Bezoekers kunnen een vraag stellen of een kennismaking plannen zonder op jouw reactie te wachten.",
      "Of je nu zelfstandig coacht of een kleine praktijk runt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website die je coachingsaanpak uitlegt, Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning regelt.",
    website: {
      /* “Jouw coachwebsite, …”: the shared highlight “website” completes
         the compound. */
      headingLead: "Jouw coach",
      headingTail: ", afgestemd op jouw werkwijze.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Plan de kennismaking.",
      "Spreek het traject af.",
      "Verstuur de factuur.",
    ],
    start:
      "Een nieuwe leidinggevende zoekt hulp bij het aansturen van een eerste team.",
    steps: [
      {
        step: "1",
        lines: [
          "De cliënt **plant een kennismaking**",
          "via je website,",
          "met de contactgegevens.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de afspraak** in je Hub",
          "en **bespreekt de doelen**",
          "tijdens het gesprek.",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte** voor het traject",
          "en **factureert** volgens",
          "de gemaakte afspraken.",
        ],
      },
    ],
    note: "Een aanvraagformulier geeft bezoekers ruimte om eerst een vraag te stellen. Spreek de vorm van de sessies, de inhoud van het traject en de kosten persoonlijk af.",
  },

  LOCAL: {
    heading: "Jouw aanpak. Jouw verhaal.",
    headingAccent: "Jouw website.",
    intro:
      "Mensen willen je aanpak begrijpen voordat ze een persoonlijke of professionele vraag delen. We richten je website in rond je doelgroep, het verloop van je sessies en je relevante ervaring. Duidelijke trajectbeschrijvingen helpen bezoekers bepalen of ze willen kennismaken.",
    checks: [
      "Je logo, kleuren en het verhaal achter je praktijk",
      "Je coachingstrajecten, pakketten en sessievormen",
      "Waar je coacht: op locatie, online of beide",
      "Je achtergrond en de ervaring achter je aanpak",
      "Je opleidingen, accreditaties en behaalde kwalificaties",
      "Echte cliëntervaringen en beoordelingen",
      "Een persoonlijke introductievideo en ervaringen die je met toestemming deelt",
      "Duidelijke contactgegevens, aanvragen en een kennismaking boeken",
    ],
    small:
      "Laat je aanpak, aantoonbare ervaring en echte cliëntfeedback spreken, zonder voor iedereen hetzelfde resultaat te beloven.",
    photoAlt: "Coach luistert naar een cliënt tijdens een gesprek",
  },

  PRICING: {
    intro:
      `Eén Growth Rocket-pakket voor je coachpraktijk. ${EUR_NL.payPerPeriod}, plus eenmalige opstartkosten.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor je coachpraktijk.",
    intro:
      "Kies een ontwerp dat bij je aanpak past. We stemmen het af op je trajecten, achtergrond en huisstijl. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Deze ontwerpen geven een indruk van de mogelijkheden. Voorbeelden voor coaches volgen zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "PathFinder", subtitle: "Persoonlijke coaching" },
      { title: "LeadWell", subtitle: "Zakelijke coaching" },
      { title: "ThriveMind", subtitle: "Welzijnscoaching" },
    ],
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "coaches.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een coach?",
      answer:
        "Leg uit voor wie je coaching bedoeld is, welke vragen je behandelt en hoe sessies of trajecten zijn opgebouwd. Voeg je achtergrond, relevante opleidingen en echte cliëntervaringen toe. Geef bezoekers een duidelijke mogelijkheid om een vraag te stellen of kennis te maken, zonder een bepaald resultaat te beloven.",
    },
    {
      question: "Wat kost een website voor een coach?",
      answer:
        `Growth Rocket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning.${EUR_NL.annualSavingSentence} Extra pagina’s of maatwerkfuncties bespreken we apart.`,
    },
    {
      question: "Kunnen nieuwe cliënten een kennismakingsgesprek boeken?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen. Bezoekers kiezen een beschikbaar tijdstip en vullen hun gegevens in. De afspraak verschijnt in Growth Rocket Hub. Leg op je website uit wat het doel van de kennismaking is, hoe lang die duurt en of er kosten aan verbonden zijn.",
    },
    {
      question: "Kan ik coachingstrajecten presenteren en factureren?",
      answer:
        "Ja. Je website kan per traject de doelgroep, vorm, inhoud en prijs uitleggen. In Growth Rocket Hub maak je een offerte en zet je de geaccepteerde offerte om in een factuur. Online afrekenen, abonnementen en automatische termijnfacturen bespreken we apart; ze zijn niet standaard inbegrepen.",
    },
    {
      question: "Werkt dit voor online coaching en coaching op locatie?",
      answer:
        "Ja. Je website kan uitleggen waar en hoe je coacht, en cliënten kunnen afspraken boeken. Growth Rocket Hub ondersteunt je bedrijfsadministratie. Videogesprekken blijven in de dienst die je al gebruikt. Een koppeling voor videobellen hoort niet bij het beschreven pakket.",
    },
    {
      question: "Hoe maak ik mijn coachingspecialisme duidelijk?",
      answer:
        "Beschrijf voor wie je werkt, met welke vragen cliënten komen en hoe je hen begeleidt. Vermeld je werkelijke locatie of online beschikbaarheid. Zo kunnen bezoekers bepalen of je bij hen past en krijgen zoekmachines relevante inhoud. Je website is mobielvriendelijk en klaar voor SEO, zonder belofte van zoekposities of nieuwe cliënten.",
    },
    {
      question: "Kan ik kwalificaties en cliëntervaringen opnemen?",
      answer:
        "Ja. Deel de opleidingen, kwalificaties en accreditaties die je daadwerkelijk hebt, en gebruik cliëntfeedback met toestemming. Beschrijf voorbeelden in hun eigen context, zonder hetzelfde resultaat voor iedereen te beloven. We stemmen de inhoud af op de informatie die jij aanlevert en goedkeurt.",
    },
    {
      question:
        "Kan ik mijn domeinnaam houden en hoe snel kan mijn website online?",
      answer:
        "We bekijken je bestaande inhoud en spreken de domeinoverdracht vóór de lancering af. Jij levert je trajecten, achtergrond, foto’s en eventuele goedgekeurde cliëntervaringen aan. De website kan binnen 7 werkdagen online nadat alle benodigde informatie en materialen binnen zijn, met tijdige goedkeuring. Bespreek extra functies vóór de bouw.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "coachwebsite?",
    intro:
      "Praktische tips voor coaches: je doelgroep kiezen, trajecten beschrijven en je eigen stem laten horen.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Welke pagina’s heeft je coachwebsite nodig?",
        body: "Breng je trajecten, verhaal en kennismakingsmogelijkheden in kaart vóór de bouw.",
      },
      {
        num: "02",
        topic: "Je aanbod uitleggen",
        title: "Beschrijf je coachingstrajecten duidelijk",
        body: "Laat zien voor wie een traject bedoeld is en wat erbij hoort.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Schrijf een Over mij-pagina die bij je past",
        body: "Deel je achtergrond en werkwijze zodat mensen weten met wie ze kennismaken.",
      },
    ],
  },
}, IMAGES);

export const COACHES: IndustryPageDef = {
  paths: {
    en: "/industry/coaching-website",
    nl: "/nl/branche/website-voor-coaches",
  },
  seo: {
    en: {
      title: "Website for Coaches | Growth Rocket",
      description:
        "A website for your coaching practice, with Growth Rocket Hub for discovery calls, inquiries, quotes and invoices. Hosting and maintenance included.",
    },
    nl: {
      title: "Website voor coaches | Growth Rocket",
      description:
        "Een website voor je coachpraktijk, met Growth Rocket Hub voor kennismakingen, aanvragen, offertes en facturen. Inclusief hosting en onderhoud.",
    },
  },
  copy: {
    /* The document’s closing CTA reads “Great at what you do.” where the
       shared copy has “Great at your trade.” */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
