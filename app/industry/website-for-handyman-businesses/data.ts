/* Copy from content/seprate-pages/Growth-Rocket-09-Handyman-Businesses-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */
import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke handyman website";

/* No handyman templates exist yet: the doc's proposed designs show as
   unlinked placeholders. */
const TEMPLATE_CATEGORIES: string[] = [];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("handyman-1.webp", "handyman-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR HANDYMAN BUSINESSES IN THE NETHERLANDS",
    heading: "A website for handyman businesses.",
    benefits: [
      "A professional website built around the jobs you take on.",
      "Manage job requests, book appointments, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore handyman designs", href: "/design" },
    photoAlt: "Handyman fitting a shelf in a customer’s living room",
    breadcrumbCurrent: "Websites for handyman businesses",
  },

  INTRO: {
    heading: "In the middle of a job?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "A customer has a sticking door, shelves to put up and a list of small repairs. They need to know whether you handle those jobs and work in their area. Your website makes that clear and lets them send the details while you finish the work in front of you.",
      "Whether you work on your own or with a small team, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your handyman business, Growth Rocket Hub to manage job requests, appointments, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", built around the jobs you do.",
    },
  },

  WORKFLOW: {
    headingParts: ["Get the job list.", "Agree the work.", "Send the invoice."],
    start: "A homeowner needs shelves fitted and a sticking door repaired.",
    steps: [
      {
        step: "1",
        lines: [
          "They send **a job request**",
          "through your website,",
          "with their to-do list.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review it** in your Hub",
          "and **agree the scope**",
          "before **arranging a visit.**",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **an invoice** once",
          "the agreed work is done.",
        ],
      },
    ],
    note: "Use online booking for visits you can confidently schedule. If you need to check the job, materials or time required, collect an inquiry before confirming the visit.",
  },

  LOCAL: {
    heading: "Your skills. Your service area.",
    headingAccent: "Your website.",
    intro:
      "A shelf installation, a door repair and a rental property handover need different information. We shape your website around the work you actually take on, with clear service descriptions and real examples, so customers can see whether you are the right person for their job.",
    checks: [
      "Your logo, colours and business story",
      "Your repairs, assembly and maintenance services, with clear examples",
      "The towns and areas you genuinely cover",
      "Photographs of finished jobs, from small repairs to larger projects",
      "Your experience, relevant skills and verified qualifications",
      "Genuine customer testimonials, ratings and reviews",
      "Business introductions and video testimonials",
      "Job request forms, clear contact details and booking for suitable visits",
    ],
    small:
      "Make your scope clear, including work you do not take on. Real job photographs help customers understand the standard and range of your work.",
    photoAlt: "Handyman checking a door during a home visit",
  },

  PRICING: {
    intro:
      "One Growth Rocket package for your handyman business, with annual or monthly billing and a one-time onboarding fee.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your handyman website.",
    intro:
      "Explore a direction for your repair, assembly or maintenance business. We tailor your website with your branding, job list and photographs of completed work. It comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Illustrative design directions. Handyman design previews will be added when available.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "FixRight", subtitle: "Handyman services" },
      { title: "WoodCraft", subtitle: "Carpentry and assembly" },
      { title: "HomeKeep", subtitle: "Property maintenance" },
    ],
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "handyman businesses.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a handyman website include?",
      answer:
        "List the jobs you take on in everyday language, from assembling furniture to repairing doors. Explain where you work, show photographs of completed jobs and add genuine customer reviews. A request form lets customers describe several tasks together so you can assess the work before agreeing a visit.",
    },
    {
      question: "How much does a website for a handyman business cost?",
      answer:
        "Growth Rocket costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. You get a professional website, Growth Rocket Hub, hosting, SSL, maintenance and support. Annual billing saves €138 compared with 12 monthly payments. Extra pages or bespoke functionality are discussed separately.",
    },
    {
      question: "Can customers send a list of jobs through my website?",
      answer:
        "Yes. Customers can describe the jobs they need in an inquiry form. You review the request in Growth Rocket Hub, clarify the scope and prepare a quote. Once the agreed work is finished, you can convert an accepted quote into an invoice. You stay in control of what you take on and how you price it.",
    },
    {
      question: "Can customers book a handyman visit online?",
      answer:
        "Online appointment booking is included. Use it for visits with a clear purpose and duration, or for an initial assessment. If materials, access or the amount of work are unclear, ask for an inquiry first. A booking option should reflect the visits you can genuinely offer.",
    },
    {
      question: "Should I show handyman prices on my website?",
      answer:
        "Show prices where the scope is clear, and explain what is included. State any minimum charge or material costs that apply to your own service. For a mixed job list or work that needs inspection, invite a quote request instead of suggesting a fixed price that may not fit.",
    },
    {
      question: "Can my website explain the areas and jobs I cover?",
      answer:
        "Yes. Describe your genuine service area and the work you do there, such as assembly, repairs or property maintenance. Real job examples help customers judge whether you are a good fit. Your website is mobile-friendly and SEO-ready; it does not come with guaranteed search rankings or job volumes.",
    },
    {
      question: "How do I keep track of returning customers?",
      answer:
        "Contacts are created automatically from inquiries and appointments in Growth Rocket Hub. Keep customer details and relevant notes together, then use those details for quotes and invoices. This helps you pick up the conversation when a homeowner or landlord contacts you about another job.",
    },
    {
      question:
        "Can I keep my domain, and how soon can the new website launch?",
      answer:
        "We can review your existing content and discuss using your current domain, agreeing the transfer before launch. Your website can be online within 7 working days once we receive all required information and materials, with timely approvals. Prepare your job list, service area, contact details and photographs; discuss bespoke requirements before agreeing the schedule.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "handyman website?",
    intro:
      "Practical reading for handyman businesses: describing your range, handling job lists and helping customers know who they are inviting in.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "Turn your job list into clear website services",
        body: "Group repairs, assembly and maintenance so customers can find the work they need.",
      },
      {
        num: "02",
        topic: "Quote requests",
        title: "What to ask before quoting for a list of jobs",
        body: "Clarify the work, access and materials before you agree a price or visit.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Show customers who will be doing the work",
        body: "Introduce yourself, your experience and real examples of finished jobs.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor klusbedrijven in Nederland",
    heading: "Een website voor klusbedrijven.",
    benefits: [
      "Een professionele website voor het werk dat jij doet.",
      "Beheer aanvragen, plan afspraken en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de ontwerpen voor klusbedrijven", href: "/design" },
    photoAlt: "Vakman hangt een plank op in de woonkamer van een klant",
    breadcrumbCurrent: "Websites voor klusbedrijven",
  },

  INTRO: {
    heading: "Druk met een klus?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Een klant heeft een klemmende deur, planken die opgehangen moeten worden en een lijstje kleine reparaties. Die wil weten of jij dat werk doet en in de buurt werkt. Je website maakt dat duidelijk en laat klanten hun aanvraag sturen terwijl jij je klus afmaakt.",
      "Of je nu zelfstandig werkt of met een klein team: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je klusbedrijf, Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", afgestemd op de klussen die jij doet.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Ontvang de klussenlijst.",
      "Spreek het werk af.",
      "Verstuur de factuur.",
    ],
    start:
      "Een huiseigenaar wil planken laten ophangen en een klemmende deur laten repareren.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant stuurt **een aanvraag**",
          "via je website,",
          "met een lijstje klussen.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **bespreekt het werk**",
          "voordat je **een bezoek plant.**",
        ],
      },
      {
        step: "3",
        lines: [
          "Je **stuurt een offerte**",
          "en daarna **een factuur**",
          "zodra het werk klaar is.",
        ],
      },
    ],
    note: "Gebruik online afspraken voor bezoeken die je direct kunt inplannen. Moet je eerst de klus, materialen of benodigde tijd beoordelen? Laat de klant dan een aanvraag sturen voordat je de afspraak bevestigt.",
  },

  LOCAL: {
    heading: "Jouw vakmanschap. Jouw werkgebied.",
    headingAccent: "Jouw website.",
    intro:
      "Een plank ophangen, een deur repareren of een huurwoning klaarmaken vraagt telkens om andere informatie. We stemmen je website af op het werk dat je echt aanneemt. Met duidelijke diensten en eigen voorbeelden zien klanten of jij de juiste persoon bent voor hun klus.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je reparaties, montagewerk en onderhoud, met duidelijke voorbeelden",
      "De plaatsen en regio’s waar je werkt",
      "Foto’s van afgeronde klussen, van kleine reparaties tot grotere projecten",
      "Je ervaring, vakkennis en behaalde kwalificaties",
      "Echte klantervaringen, beoordelingen en reviews",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Aanvraagformulieren, duidelijke contactgegevens en afspraken voor geschikte bezoeken",
    ],
    small:
      "Maak duidelijk welk werk je wel en niet aanneemt. Met eigen projectfoto’s laat je zien wat je kunt en hoe je werkt.",
    photoAlt: "Vakman bekijkt een deur tijdens een bezoek aan huis",
  },

  PRICING: {
    intro:
      "Eén Growth Rocket-pakket voor je klusbedrijf. Je betaalt per jaar of per maand, plus eenmalige opstartkosten.",
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies je website voor je klusbedrijf.",
    intro:
      "Bekijk een richting voor je reparaties, montagewerk of onderhoud. We stemmen je website af op je huisstijl, diensten en foto’s van afgeronde klussen. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Deze ontwerpen geven een indruk van de mogelijkheden. Voorbeelden voor klusbedrijven volgen zodra ze beschikbaar zijn.",
    templateCategories: TEMPLATE_CATEGORIES,
    placeholders: [
      { title: "FixRight", subtitle: "Klusbedrijf" },
      { title: "WoodCraft", subtitle: "Timmerwerk en montage" },
      { title: "HomeKeep", subtitle: "Woningonderhoud" },
    ],
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "klusbedrijven.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor een klusbedrijf?",
      answer:
        "Beschrijf in gewone taal welke klussen je aanneemt, van meubels monteren tot deuren repareren. Vertel waar je werkt, laat afgeronde klussen zien en voeg echte reviews toe. Via een aanvraagformulier kunnen klanten meerdere klussen tegelijk beschrijven. Zo kun je het werk beoordelen voordat je een bezoek afspreekt.",
    },
    {
      question: "Wat kost een website voor een klusbedrijf?",
      answer:
        "Growth Rocket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Met jaarlijkse betaling bespaar je €138 ten opzichte van 12 maandbetalingen. Extra pagina’s of maatwerkfuncties bespreken we apart.",
    },
    {
      question: "Kunnen klanten een lijst met klussen via mijn website sturen?",
      answer:
        "Ja. Klanten kunnen hun klussen beschrijven in een aanvraagformulier. Je bekijkt de aanvraag in Growth Rocket Hub, bespreekt de omvang van het werk en maakt een offerte. Zodra het afgesproken werk klaar is, kun je een geaccepteerde offerte omzetten naar een factuur. Jij bepaalt welke klussen je aanneemt en wat je rekent.",
    },
    {
      question: "Kunnen klanten online een afspraak voor een klus maken?",
      answer:
        "Online afspraken boeken is inbegrepen. Gebruik dit voor bezoeken met een duidelijk doel en een voorspelbare duur, of voor een eerste opname. Zijn de materialen, toegang of omvang van het werk nog onduidelijk? Laat de klant dan eerst een aanvraag sturen. De afspraakmogelijkheden moeten passen bij wat je echt kunt aanbieden.",
    },
    {
      question: "Moet ik mijn klusprijzen op de website zetten?",
      answer:
        "Vermeld prijzen als duidelijk is welk werk erbij hoort en leg uit wat is inbegrepen. Noem eventuele minimumtarieven of materiaalkosten die voor jouw dienstverlening gelden. Gaat het om meerdere verschillende klussen of werk dat je eerst moet bekijken? Vraag dan om een offerteaanvraag in plaats van een vaste prijs te beloven die mogelijk niet past.",
    },
    {
      question: "Kan mijn website laten zien welke klussen en plaatsen ik bedien?",
      answer:
        "Ja. Beschrijf je werkelijke werkgebied en het werk dat je daar doet, zoals montage, reparaties of woningonderhoud. Eigen voorbeelden helpen klanten te bepalen of jij bij hun klus past. Je website is mobielvriendelijk en klaar voor SEO; we garanderen geen posities in zoekresultaten of aantallen klussen.",
    },
    {
      question: "Hoe houd ik overzicht over terugkerende klanten?",
      answer:
        "Growth Rocket Hub maakt automatisch contacten aan vanuit aanvragen en afspraken. Je houdt klantgegevens en relevante notities bij elkaar en gebruikt die gegevens voor offertes en facturen. Zo pak je het gesprek makkelijker op als een huiseigenaar of verhuurder je voor een volgende klus benadert.",
    },
    {
      question:
        "Kan ik mijn domeinnaam behouden en hoe snel kan mijn website online?",
      answer:
        "We bekijken je bestaande inhoud en bespreken het gebruik van je huidige domeinnaam. Voor de lancering spreken we de overdracht af. Je website kan binnen 7 werkdagen online staan zodra we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring. Bereid je diensten, werkgebied, contactgegevens en foto’s voor. Bespreek maatwerkwensen voordat we de planning afspreken.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "website voor je klusbedrijf?",
    intro:
      "Praktische tips voor klusbedrijven: je diensten duidelijk maken, klussenlijsten beoordelen en laten zien wie er bij de klant langskomt.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Maak van je klussenlijst duidelijke diensten",
        body: "Groepeer reparaties, montage en onderhoud, zodat klanten hun klus makkelijk terugvinden.",
      },
      {
        num: "02",
        topic: "Offerteaanvragen",
        title: "Wat vraag je voordat je een offerte maakt?",
        body: "Bespreek het werk, de toegang en materialen voordat je een prijs of bezoek afspreekt.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat zien wie het werk uitvoert",
        body: "Stel jezelf voor en laat je ervaring en afgeronde klussen zien.",
      },
    ],
  },
}, IMAGES);

export const HANDYMAN: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-handyman-businesses",
    nl: "/nl/branche/website-voor-klusbedrijven",
  },
  seo: {
    en: {
      title: "Website for Handyman Businesses | Growth Rocket",
      description:
        "A website for your handyman business, with Growth Rocket Hub for job requests, appointments, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor klusbedrijven | Growth Rocket",
      description:
        "Een website voor je klusbedrijf, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: { en, nl },
};
