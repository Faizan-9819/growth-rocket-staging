/* Copy from content/seprate-pages/Growth-Rocket-08-Healthcare-Professionals-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */
import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke healthcare website";

/* The doc's own designs (NutriPoint, MindHaven, TalkWell) are proposed and
   don't exist yet; it lists DentalCare and the physiotherapy design as
   existing alternatives, so those fill the grid. */
const TEMPLATE_CATEGORIES = ["dentist", "physiotherapy"];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("healthcare-1.webp", "healthcare-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR HEALTHCARE PROFESSIONALS IN THE NETHERLANDS",
    heading: "A website for healthcare professionals.",
    benefits: [
      "A professional website that helps patients understand your care.",
      "Book appointments and manage inquiries, quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore healthcare designs", href: "/design" },
    photoAlt:
      "Healthcare professional talking with a patient in a bright consultation room",
    breadcrumbCurrent: "Websites for healthcare professionals",
  },

  INTRO: {
    heading: "With a patient?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "Before contacting your practice, people want to know whether you offer the service they need and how a first appointment works. Your website can explain your services, referral requirements where relevant, location and booking options while you focus on the person in front of you.",
      "Whether you work independently or run a small practice, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website that explains your practice, Growth Rocket Hub for appointments and business administration, and a team to look after hosting, maintenance and support. Clinical records stay in your existing systems.",
    website: {
      headingLead: "Your ",
      headingTail: ", built for your practice.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Receive the booking.",
      "Confirm the visit.",
      "Send the invoice.",
    ],
    start: "A new patient wants to book a first consultation.",
    steps: [
      {
        step: "1",
        lines: [
          "They book **an appointment**",
          "through your website,",
          "with their contact details.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review the booking** in your Hub",
          "and **confirm the practical details**",
          "with the patient.",
        ],
      },
      {
        step: "3",
        lines: [
          "After the consultation,",
          "you **send the invoice**",
          "according to your practice’s terms.",
        ],
      },
    ],
    note: "Use this flow for a directly billed consultation. Keep clinical details out of general website forms and in your existing care systems. Insurance claims and clinical records are separate from this workflow.",
  },

  LOCAL: {
    heading: "Your care. Your practice.",
    headingAccent: "Your website.",
    intro:
      "A patient may want to know how to prepare, whether a referral is needed and how to reach your practice. We shape the website around your actual services and practical information, with treatment descriptions reviewed by you before publication.",
    checks: [
      "Your logo, colours and practice story",
      "Your treatments and services, explained in plain language",
      "Your location, opening hours and accessibility details",
      "Photos of your practice and treatment rooms",
      "Your team, experience and verified registrations",
      "Genuine patient reviews, where your professional guidelines allow",
      "Practice introductions and video walkthroughs",
      "Clear contact details, inquiry forms and appointment booking",
    ],
    small:
      "Help people prepare for their first visit with clear, accurate information about your practice.",
    photoAlt:
      "Practitioner at work, showing the people behind a healthcare practice",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your practice, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your practice website.",
    intro:
      "Choose a direction, then adapt it to your practice, services and photographs. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Explore these design directions for your practice. Full previews will follow as they become available.",
    templateCategories: TEMPLATE_CATEGORIES,
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "healthcare professionals.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a healthcare practice website include?",
      answer:
        "Explain your services in plain language, who you see, how a first appointment works and whether a referral is needed. Add your team, verified qualifications, opening hours and accessibility details. Give people a clear route to general inquiries or booking, using information you have reviewed for your practice.",
    },
    {
      question: "How much does a healthcare practice website cost?",
      answer:
        "Growth Rocket costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can people book appointments through my practice website?",
      answer:
        "Yes. Online appointment booking is included. People choose an available service and time, enter their contact details and receive appointment information by email. The booking appears in Growth Rocket Hub. Confirm the appointment types suitable for online booking before setup and keep clinical information in your existing care systems.",
    },
    {
      question: "Does Growth Rocket replace clinical records or care software?",
      answer:
        "No. Growth Rocket Hub supports business administration: inquiries, appointments, contacts, quotes and invoices. Clinical records and treatment notes remain in your existing systems. Do not assume clinical-software connections, insurance claims or patient portals are included; any additional requirements need separate assessment.",
    },
    {
      question: "Can the website explain where my practice is and who I see?",
      answer:
        "Yes. We can present your real location, service area, accessibility and the services you offer. Accurate, useful content helps people decide whether to contact you. The website is mobile-friendly and SEO-ready, but search positions and numbers of new patients are not guaranteed.",
    },
    {
      question: "Can I show my qualifications and patient feedback?",
      answer:
        "Yes. Provide the qualifications and registrations you actually hold. Patient feedback can be included with permission where your professional guidelines allow it. Keep all statements accurate and avoid implying guaranteed treatment outcomes. You review the content before publication.",
    },
    {
      question: "Who approves treatment descriptions on the website?",
      answer:
        "You do. We organise and shape the content around the information you provide. You review service descriptions, fees, referral information and practical details before launch. Treatment information needs your professional review; Growth Rocket does not provide clinical advice.",
    },
    {
      question: "Can I keep my domain and when can the practice website launch?",
      answer:
        "We can review your existing pages and agree the domain transfer before launch. Prepare practice information, photographs and professionally reviewed service descriptions. Your website can be online within 7 working days after we receive all required information and materials, with timely approvals. Any specialist connections need separate agreement.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "practice website?",
    intro:
      "Practical reading for practitioners: explaining services, preparing patients for a first visit and introducing your practice.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "The pages your practice website needs",
        body: "Plan your services, team information and practical patient details.",
      },
      {
        num: "02",
        topic: "The first visit",
        title: "Help patients prepare for their first appointment",
        body: "Explain what to expect, how to reach you and whether a referral is needed.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Introduce the people behind your practice",
        body: "Present your team, experience and verified qualifications.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor zorgverleners in Nederland",
    heading: "Een website voor zorgverleners.",
    benefits: [
      "Een professionele website die jouw praktijk en zorgaanbod duidelijk maakt.",
      "Plan afspraken en beheer aanvragen, offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de praktijkontwerpen", href: "/design" },
    photoAlt: "Zorgverlener in gesprek met een patiënt in de praktijk",
    breadcrumbCurrent: "Websites voor zorgverleners",
  },

  INTRO: {
    heading: "In gesprek met een patiënt?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Voordat iemand contact opneemt, wil die weten of je de juiste zorg biedt en hoe een eerste afspraak verloopt. Je website legt je diensten, eventuele verwijseisen, locatie en afspraakmogelijkheden uit. Zo kun jij je richten op degene die tegenover je zit.",
      "Of je nu zelfstandig werkt of een kleine praktijk runt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website die je praktijk uitlegt, Growth Rocket Hub voor afspraken en bedrijfsadministratie, en een team dat hosting, onderhoud en ondersteuning regelt. Medische dossiers blijven in je bestaande systemen.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", afgestemd op je praktijk.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de boeking.",
      "Bevestig het bezoek.",
      "Verstuur de factuur.",
    ],
    start: "Een nieuwe patiënt wil een eerste consult boeken.",
    steps: [
      {
        step: "1",
        lines: [
          "De patiënt boekt **een afspraak**",
          "via je website,",
          "met de contactgegevens.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de afspraak** in je Hub",
          "en **bevestigt de praktische details**",
          "met de patiënt.",
        ],
      },
      {
        step: "3",
        lines: [
          "Na het consult",
          "**stuur je de factuur**",
          "volgens je praktijkvoorwaarden.",
        ],
      },
    ],
    note: "Dit voorbeeld gaat over een consult dat je rechtstreeks factureert. Houd medische gegevens buiten algemene websiteformulieren en in je bestaande zorgsystemen. Verzekeringsdeclaraties en medische dossiers staan los van deze werkwijze.",
  },

  LOCAL: {
    heading: "Jouw zorg. Jouw praktijk.",
    headingAccent: "Jouw website.",
    intro:
      "Een patiënt wil weten hoe die zich kan voorbereiden, of een verwijzing nodig is en hoe je praktijk bereikbaar is. We stemmen de website af op je daadwerkelijke diensten en praktische informatie. Jij controleert behandelbeschrijvingen vóór publicatie.",
    checks: [
      "Je logo, kleuren en het verhaal van je praktijk",
      "Je behandelingen en diensten in begrijpelijke taal",
      "Je locatie, openingstijden en toegankelijkheid",
      "Foto’s van je praktijk en behandelruimtes",
      "Je team, ervaring en aantoonbare registraties",
      "Echte patiëntervaringen, voor zover je beroepsrichtlijnen dit toestaan",
      "Een praktijkintroductie en videorondleiding",
      "Duidelijke contactgegevens, aanvraagformulieren en afspraken boeken",
    ],
    small:
      "Help mensen zich voor te bereiden op hun eerste bezoek met heldere, juiste informatie over je praktijk.",
    photoAlt: "Zorgverlener verwelkomt een patiënt in de praktijk",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je praktijk. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor je praktijk.",
    intro:
      "Kies een ontwerp en stem het af op je praktijk, diensten en foto’s. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Bekijk deze ontwerprichtingen voor je praktijk. Volledige voorbeelden volgen zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "zorgverleners.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een zorgpraktijk?",
      answer:
        "Leg je diensten in begrijpelijke taal uit: voor wie je er bent, hoe een eerste afspraak verloopt en of een verwijzing nodig is. Voeg je team, aantoonbare kwalificaties, openingstijden en toegankelijkheid toe. Maak algemene vragen stellen of een afspraak boeken eenvoudig, met informatie die jij voor je praktijk hebt gecontroleerd.",
    },
    {
      question: "Wat kost een website voor een zorgpraktijk?",
      answer:
        "Growth Rocket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen mensen via mijn praktijkwebsite een afspraak boeken?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen. Bezoekers kiezen een beschikbare dienst en een tijdstip, vullen hun contactgegevens in en ontvangen de afspraakgegevens per e-mail. De boeking verschijnt in Growth Rocket Hub. Bepaal vooraf welke afspraken online geboekt kunnen worden en houd medische informatie in je bestaande zorgsystemen.",
    },
    {
      question: "Vervangt Growth Rocket medische dossiers of zorgsoftware?",
      answer:
        "Nee. Growth Rocket Hub ondersteunt de bedrijfsadministratie: aanvragen, afspraken, contacten, offertes en facturen. Medische dossiers en behandelnotities blijven in je bestaande systemen. Koppelingen met zorgsoftware, verzekeringsdeclaraties en patiëntenportalen zijn niet standaard inbegrepen. Aanvullende wensen moeten apart worden beoordeeld.",
    },
    {
      question: "Kan de website duidelijk maken waar mijn praktijk zit en wie ik help?",
      answer:
        "Ja. We kunnen je werkelijke locatie, werkgebied, toegankelijkheid en diensten presenteren. Juiste, bruikbare informatie helpt mensen bepalen of ze contact willen opnemen. De website is mobielvriendelijk en klaar voor SEO. Zoekposities en aantallen nieuwe patiënten worden niet gegarandeerd.",
    },
    {
      question: "Kan ik mijn kwalificaties en patiëntervaringen laten zien?",
      answer:
        "Ja. Lever de kwalificaties en registraties aan die je daadwerkelijk hebt. Patiëntfeedback kan met toestemming worden opgenomen, voor zover je beroepsrichtlijnen dat toelaten. Houd uitspraken juist en wek geen verwachting van gegarandeerde behandelresultaten. Je controleert de inhoud vóór publicatie.",
    },
    {
      question: "Wie keurt de behandelbeschrijvingen op mijn website goed?",
      answer:
        "Dat doe jij. We ordenen en formuleren de inhoud op basis van je informatie. Jij controleert diensten, tarieven, verwijseisen en praktische details vóór de lancering. Behandelinformatie vraagt om jouw professionele beoordeling; Growth Rocket geeft geen medisch advies.",
    },
    {
      question: "Kan ik mijn domeinnaam behouden en wanneer kan de website online?",
      answer:
        "We bekijken je bestaande pagina’s en spreken de domeinoverdracht vóór de lancering af. Verzamel praktijkinformatie, foto’s en professioneel gecontroleerde dienstbeschrijvingen. Je website kan binnen 7 werkdagen online nadat we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring. Specialistische koppelingen vragen een aparte afspraak.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "praktijkwebsite?",
    intro:
      "Praktische tips voor zorgverleners: je zorgaanbod uitleggen, een eerste bezoek toelichten en je praktijk voorstellen.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Welke pagina’s heeft je praktijkwebsite nodig?",
        body: "Breng je diensten, team en praktische patiëntinformatie in kaart.",
      },
      {
        num: "02",
        topic: "Het eerste bezoek",
        title: "Help patiënten hun eerste afspraak voorbereiden",
        body: "Leg uit wat ze kunnen verwachten, hoe je bereikbaar bent en of een verwijzing nodig is.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat de mensen achter je praktijk zien",
        body: "Stel je team, ervaring en behaalde kwalificaties voor.",
      },
    ],
  },
}, IMAGES);

export const HEALTHCARE: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-healthcare-professionals",
    nl: "/nl/branche/website-voor-zorgverleners",
  },
  seo: {
    en: {
      title: "Website for Healthcare Professionals | Growth Rocket",
      description:
        "Explain your practice and services clearly, with Growth Rocket Hub for appointments and business administration. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor zorgverleners | Growth Rocket",
      description:
        "Een heldere website voor je praktijk. Met Growth Rocket Hub voor afspraken en bedrijfsadministratie. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: {
    /* The doc's closing CTA reads "Great at what you do." (shared:
       "Great at your trade."). */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
