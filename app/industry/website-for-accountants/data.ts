/* Copy from content/seprate-pages/Growth-Rocket-05-Accountants-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */

import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke accountant website";

/* No accountant templates exist yet, so the proposed designs show as
   placeholders. */
const TEMPLATE_CATEGORIES: string[] = [];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("accountant-1.webp", "accountant-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR ACCOUNTANTS IN THE NETHERLANDS",
    heading: "A website for accountants.",
    benefits: [
      "A professional website that makes your services easy to understand.",
      "Book intake meetings, manage inquiries, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore accountant designs", href: "/design" },
    photoAlt:
      "Accountant reviewing figures with a business owner at a desk",
    breadcrumbCurrent: "Websites for accountants",
  },

  INTRO: {
    heading: "Deep in tax season?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "While you’re preparing accounts or meeting a filing deadline, a prospective client may be trying to understand whether your practice is right for them. Your website explains your services, who you work with and how to get started, so they can send an inquiry or book an intake meeting without interrupting your work.",
      "Whether you work independently or run a small accounting practice, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your accounting practice, Growth Rocket Hub for client inquiries, intake meetings, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", built for your accounting practice.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Receive the inquiry.",
      "Agree the service.",
      "Send the invoice.",
    ],
    start:
      "A self-employed business owner needs help with their records and annual tax return.",
    steps: [
      {
        step: "1",
        lines: [
          "They send **an inquiry**",
          "through your website,",
          "describing their business.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review it** in your Hub",
          "and **arrange an intake**",
          "to discuss the work.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **invoice** for",
          "the agreed services.",
        ],
      },
    ],
    note: "Growth Rocket Hub supports your practice’s inquiries, appointments and billing. Client bookkeeping, accounts and tax work remain in your specialist software.",
  },

  LOCAL: {
    heading: "Your services. Your clients.",
    headingAccent: "Your website.",
    intro:
      "Business owners want to know two things before they call: whether you work with businesses like theirs, and what working with you involves. We shape your website to answer both clearly.",
    checks: [
      "Your logo, colours and business story",
      "Your actual services, such as bookkeeping, annual accounts and tax returns",
      "The towns and regions you serve, in person or online",
      "The types of clients and sectors you work with",
      "Your team, experience and verified qualifications",
      "Genuine client testimonials and reviews",
      "Business introductions and video testimonials",
      "Clear contact details, enquiry forms and intake-meeting booking",
    ],
    small:
      "Explain who each service is for, what it includes and how a new client gets started.",
    photoAlt:
      "Accountant at work, showing the people behind an accounting practice",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your accounting practice, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your accountant website.",
    intro:
      "Choose a direction that suits your practice. We tailor it with your services, team and verified qualifications. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Illustrative design directions. Accountant previews will be added when available.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "LedgerPro", subtitle: "Accounting Firms" },
      { title: "BookWise", subtitle: "Bookkeeping" },
      { title: "TaxPoint", subtitle: "Tax Advice" },
    ],
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "accountants.",
  },

  FAQ_ITEMS: [
    {
      question: "What should an accountant website include?",
      answer:
        "Explain your actual services, the types of clients you work with and how intake works. A self-employed person looking for help with records needs different information from a company seeking annual accounts. Include your team, verified qualifications and a clear way to ask about the right service.",
    },
    {
      question: "How much does a website for an accounting practice cost?",
      answer:
        "Growth Rocket costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can new clients book an intake meeting online?",
      answer:
        "Yes. Online appointment booking is included, so prospective clients can book an available intake meeting. You can review the booking in Growth Rocket Hub and prepare for the conversation. Explain what the first meeting covers and use the inquiry form to collect a short description of the client’s business.",
    },
    {
      question: "Does Growth Rocket replace my accounting software?",
      answer:
        "No. Growth Rocket Hub supports your own practice’s inquiries, appointments, contact records, quotes and invoices. Your clients’ bookkeeping, accounts and tax work stay in your specialist software. Keep that distinction clear when describing your service; accounting integrations or document portals need separate confirmation.",
    },
    {
      question: "Can I present both bookkeeping and accounting services?",
      answer:
        "Yes, if your practice offers them. Explain each service in plain language, who it is for and what is included. Use the qualifications and professional descriptions that accurately represent your team. We plan the website within the package’s 8–10 pages, with any additional pages agreed separately.",
    },
    {
      question: "Can my website explain which clients and areas I serve?",
      answer:
        "Yes. Describe your real client types, sectors and locations, and whether meetings take place at your office or remotely. Add relevant experience and genuine client feedback. The website is mobile-friendly and SEO-ready, but it does not come with guaranteed rankings or numbers of new clients.",
    },
    {
      question: "How does the Hub help me follow up on new inquiries?",
      answer:
        "Website inquiries and appointments create contact records automatically in Growth Rocket Hub. Keep the client’s contact details and relevant notes together, review the request and prepare your quote. This helps you pick up the conversation after a busy filing period without implying that the Hub carries out accounting work.",
    },
    {
      question:
        "Can I keep my existing domain, and when can the site launch?",
      answer:
        "We can review your current service pages and discuss using your existing domain, agreeing the transfer before launch. The website can be online within 7 working days once we receive all required information and materials, with timely approvals. Choose a review window when your team can respond, especially around filing deadlines.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "accountant website?",
    intro:
      "Practical reading for accountants: explaining your services, preparing client intake and introducing the people behind your practice.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "The pages your accountant website needs",
        body: "Map your services to the clients they suit before the build starts.",
      },
      {
        num: "02",
        topic: "Explaining services",
        title: "How to describe accounting services clearly",
        body: "Help business owners see which service fits their situation.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Show clients who looks after their numbers",
        body: "Use your About page to introduce your team, qualifications and approach.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor accountants in Nederland",
    heading: "Een website voor accountants.",
    benefits: [
      "Een professionele website die je diensten begrijpelijk maakt.",
      "Plan intakegesprekken, beheer aanvragen en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de ontwerpen voor accountants", href: "/design" },
    photoAlt: "Accountant bespreekt de cijfers met een ondernemer",
    breadcrumbCurrent: "Websites voor accountants",
  },

  INTRO: {
    heading: "Druk met aangiftes?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Terwijl jij aan een jaarrekening werkt of een aangiftedeadline haalt, zoekt een ondernemer uit of jouw kantoor bij hem past. Je website legt uit welke diensten je aanbiedt, voor wie je werkt en hoe een samenwerking begint. Zo kan hij een aanvraag sturen of een intake plannen zonder jouw werk te onderbreken.",
      "Of je nu zelfstandig werkt of een klein accountantskantoor runt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je accountantskantoor, Growth Rocket Hub voor aanvragen, intakegesprekken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", afgestemd op je accountantskantoor.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de aanvraag.",
      "Spreek de dienstverlening af.",
      "Verstuur de factuur.",
    ],
    start:
      "Een zzp’er zoekt hulp bij de administratie en de jaarlijkse belastingaangifte.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant stuurt **een aanvraag**",
          "via je website,",
          "met informatie over het bedrijf.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **plant een intake**",
          "om het werk te bespreken.",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte**",
          "en **factureert** daarna",
          "de afgesproken diensten.",
        ],
      },
    ],
    note: "Growth Rocket Hub ondersteunt de aanvragen, afspraken en facturering van je kantoor. Boekhouding, jaarrekeningen en belastingaangiftes voor klanten blijven in je vaksoftware.",
  },

  LOCAL: {
    heading: "Jouw diensten. Jouw klanten.",
    headingAccent: "Jouw website.",
    intro:
      "Ondernemers willen weten of je werkt met bedrijven zoals dat van hen en wat een samenwerking inhoudt. We richten je website daarop in, met duidelijke diensten, een uitleg van de intake en een kennismaking met je team.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "De diensten die je aanbiedt, zoals boekhouding, jaarrekeningen en belastingaangiftes",
      "De plaatsen en regio’s waar je klanten helpt, op kantoor of online",
      "De soorten ondernemingen en sectoren waarvoor je werkt",
      "Je team, ervaring en behaalde kwalificaties",
      "Echte klantervaringen en beoordelingen",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Duidelijke contactgegevens, aanvraagformulieren en intakegesprekken boeken",
    ],
    small:
      "Leg uit voor wie een dienst bedoeld is, wat erbij hoort en hoe een nieuwe klant begint.",
    photoAlt: "Medewerkers van een accountantskantoor aan het werk",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je accountantskantoor. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor je kantoor.",
    intro:
      "Kies een ontwerp dat bij je kantoor past. We passen het aan met je diensten, team en behaalde kwalificaties. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Deze ontwerpen geven een indruk van de mogelijkheden. Voorbeelden voor accountants volgen zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "LedgerPro", subtitle: "Accountantskantoren" },
      { title: "BookWise", subtitle: "Administratiekantoren" },
      { title: "TaxPoint", subtitle: "Belastingadvies" },
    ],
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "accountants.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een accountantskantoor?",
      answer:
        "Leg uit welke diensten je aanbiedt, voor welke klanten je werkt en hoe de intake verloopt. Een zzp’er die hulp zoekt bij de administratie heeft andere vragen dan een bedrijf dat een jaarrekening nodig heeft. Laat je team en behaalde kwalificaties zien en maak het eenvoudig om naar de juiste dienst te vragen.",
    },
    {
      question: "Wat kost een website voor een accountantskantoor?",
      answer:
        "Growth Rocket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen nieuwe klanten online een intakegesprek boeken?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen. Potentiële klanten kunnen een beschikbare intake boeken. Jij bekijkt de afspraak in Growth Rocket Hub en bereidt het gesprek voor. Leg uit wat de eerste kennismaking omvat en gebruik het aanvraagformulier voor een korte omschrijving van het bedrijf.",
    },
    {
      question: "Vervangt Growth Rocket mijn boekhoudsoftware?",
      answer:
        "Nee. Growth Rocket Hub ondersteunt de aanvragen, afspraken, klantcontacten, offertes en facturen van je eigen kantoor. De boekhouding, jaarrekeningen en belastingaangiftes voor klanten blijven in je vaksoftware. Houd dat onderscheid duidelijk. Koppelingen met boekhoudsoftware en documentportalen moeten apart worden bevestigd.",
    },
    {
      question:
        "Kan ik zowel boekhoudkundige als accountancydiensten presenteren?",
      answer:
        "Ja, als jouw kantoor die diensten aanbiedt. Leg per dienst in gewone taal uit voor wie die bedoeld is en wat erbij hoort. Gebruik de kwalificaties en beroepsaanduidingen die je team daadwerkelijk heeft. We plannen de website binnen de 8–10 pagina’s van het pakket. Extra pagina’s spreken we apart af.",
    },
    {
      question: "Kan ik laten zien welke klanten en regio’s ik bedien?",
      answer:
        "Ja. Beschrijf je werkelijke klantgroepen, sectoren en locaties en vertel of gesprekken op kantoor of online plaatsvinden. Voeg relevante ervaring en echte klantervaringen toe. De website is mobielvriendelijk en klaar voor SEO, maar we garanderen geen posities of aantallen nieuwe klanten.",
    },
    {
      question: "Hoe helpt de Hub bij het opvolgen van nieuwe aanvragen?",
      answer:
        "Aanvragen en afspraken via je website maken automatisch contactgegevens aan in Growth Rocket Hub. Je houdt de contactgegevens en relevante notities bij elkaar, bekijkt de vraag en bereidt je offerte voor. Zo pak je het gesprek na een drukke aangifteperiode makkelijker op. De Hub voert het boekhoudkundige werk niet uit.",
    },
    {
      question:
        "Kan ik mijn domeinnaam behouden en wanneer kan de website online?",
      answer:
        "We bekijken je huidige dienstenpagina’s en bespreken het gebruik van je domeinnaam. Voor de lancering spreken we de overdracht af. De website kan binnen 7 werkdagen online staan zodra we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring. Plan de beoordeling op een moment waarop je team kan reageren, zeker rond aangiftedeadlines.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "accountantswebsite?",
    intro:
      "Praktische tips voor accountants: je diensten uitleggen, de intake voorbereiden en de mensen achter je kantoor voorstellen.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Welke pagina’s heeft je accountantswebsite nodig?",
        body: "Bepaal vóór de bouw welke diensten bij welke klanten passen.",
      },
      {
        num: "02",
        topic: "Je diensten uitleggen",
        title: "Beschrijf je diensten in begrijpelijke taal",
        body: "Help ondernemers herkennen welke dienstverlening bij hun situatie past.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat zien wie er achter de cijfers zit",
        body: "Stel je team, kwalificaties en werkwijze voor op je Over ons-pagina.",
      },
    ],
  },
}, IMAGES);

export const ACCOUNTANTS: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-accountants",
    nl: "/nl/branche/website-voor-accountants",
  },
  seo: {
    en: {
      title: "Website for Accountants | Growth Rocket",
      description:
        "A website for your accounting practice, with Growth Rocket Hub for inquiries, meetings, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor accountants | Growth Rocket",
      description:
        "Een website voor je accountantskantoor, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Hosting, onderhoud en ondersteuning inbegrepen.",
    },
  },
  copy: {
    /* The document’s closing CTA reads “Great at what you do.” where the
       shared copy has “Great at your trade.” */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
