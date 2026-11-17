import { EUR_EN, EUR_NL } from "@/pricing";
/* Copy from content/seprate-pages/Growth-Rocket-10-Professional-Services-Industry-Page.docx.pdf.
   Shared blocks (prices, Hub card, launch steps…) come from
   app/industry/shared.ts. */
import { buildIndustryCopy, industryImages } from "../shared";
import type { IndustryPageDef } from "../types";

const BESPOKE_SUBJECT = "Bespoke professional services website";

/* The doc's design cards (SwiftLine, PrimeAbode, SunHarbor) are examples
   from other sectors that already exist on /designs, so the grid shows those
   templates, linked. The placeholders stay as the fallback. */
const TEMPLATE_CATEGORIES = ["logistics", "real-estate", "solar"];

/* Photos in public/industry-pages-img: the hero, then the
   "Your services. … Your website." section. */
const IMAGES = industryImages("professional-service-1.webp", "professional-services-2.webp");

/* ---------- EN ---------- */

const en = buildIndustryCopy("en", {
  HERO: {
    kicker: "FOR PROFESSIONAL SERVICE BUSINESSES IN THE NETHERLANDS",
    heading: "Websites for professional services.",
    benefits: [
      "A professional website that makes your services clear to business clients.",
      "Manage inquiries, book meetings, send quotes and invoices.",
      "Hosting, maintenance and support, all handled for you.",
    ],
    textLink: { label: "Explore business service designs", href: "/design" },
    photoAlt: "Service provider meeting a business client in a modern office",
    breadcrumbCurrent: "Websites for professional services",
  },

  INTRO: {
    heading: "Busy with client work?",
    headingAccent: ["Your business stays", "open online."],
    paragraphs: [
      "A business buyer may need to compare your service with other suppliers before getting in touch. Your website explains what you deliver, what is included and who you work with. They can share their requirements or book a conversation while your team focuses on existing clients.",
      "Whether you work independently or run a small service team, Growth Rocket connects your website and everyday business operations in one complete online business system.",
    ],
  },

  OFFER: {
    intro:
      "A professional website for your business services, Growth Rocket Hub for inquiries, meetings, quotes and invoices, and a team to look after hosting, maintenance and support.",
    website: {
      headingLead: "Your ",
      headingTail: ", built for business clients.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Understand the request.",
      "Agree the service.",
      "Send the invoice.",
    ],
    start: "A growing company needs IT support for a second office.",
    steps: [
      {
        step: "1",
        lines: [
          "They send **an inquiry**",
          "through your website,",
          "outlining their requirements.",
        ],
      },
      {
        step: "2",
        lines: [
          "You **review it** in your Hub",
          "and **arrange a meeting**",
          "to agree the scope.",
        ],
      },
      {
        step: "3",
        lines: [
          "You **send a quote,**",
          "then **invoice** according to",
          "the agreed service terms.",
        ],
      },
    ],
    note: "Use inquiry statuses and internal notes to keep track of follow-up. Agree delivery responsibilities and service terms with the client; invoicing does not replace a service contract.",
  },

  LOCAL: {
    heading: "Your offer. Your credibility.",
    headingAccent: "Your website.",
    intro:
      "Business buyers need clear information they can share with colleagues: what you provide, where your responsibility starts and ends, and how the work is delivered. We shape your website around your services, process and relevant client examples.",
    checks: [
      "Your logo, colours and business story",
      "Your services, packages and how you deliver them",
      "The regions and sectors you serve",
      "Case studies and examples of client work",
      "Your team, experience and verified certifications",
      "Genuine client testimonials and recommendations",
      "Business introductions and video testimonials",
      "Clear contact details, quote requests and meeting booking",
    ],
    small:
      "Help buyers understand the service and discuss it internally, with clear scope and genuine examples of your work.",
    photoAlt:
      "Team at work, showing the people behind a business services company",
  },

  PRICING: {
    intro:
      `One Growth Rocket package for your service business, with ${EUR_EN.billingKinds} and a one-time onboarding fee.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Pick your professional services website.",
    intro:
      "Explore the available directions and choose a layout to adapt to your services. We tailor the content, branding and examples to your business. Your website comes with Growth Rocket Hub, hosting, maintenance and support.",
    small:
      "Examples from the wider design collection. We adapt the layout and content to your service business.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      swiftline: "Logistics service",
      primeabode: "Real Estate",
      sunharbor: "Solar Installation",
    },
    placeholders: [
      { title: "SwiftLine", subtitle: "Logistics service" },
      { title: "PrimeAbode", subtitle: "Real Estate" },
      { title: "SunHarbor", subtitle: "Solar Installation" },
    ],
  },

  FAQ: {
    heading: "Questions from",
    headingAccent: "business service providers.",
  },

  FAQ_ITEMS: [
    {
      question: "What should a professional services website include?",
      answer:
        "Explain each service, who it suits, what is included and how you deliver it. Add relevant team experience and client examples you can share. Business buyers should be able to understand your scope and pass the information to a colleague before requesting a quote or booking a scoping conversation.",
    },
    {
      question: "How much does a professional services website cost?",
      answer:
        `Growth Rocket costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. This includes your professional website, Growth Rocket Hub, hosting, SSL, maintenance and support.${EUR_EN.annualSavingSentence} Extra pages or bespoke functionality are discussed separately.`,
    },
    {
      question: "How can I manage business inquiries from my website?",
      answer:
        "Inquiries arrive in Growth Rocket Hub, where you can search and filter them, add internal notes and update their status. Use the request to understand the service needed and the client’s context before following up. Inquiry management helps organise the conversation; it does not automatically qualify or close a sale.",
    },
    {
      question: "Can prospective clients book a scoping meeting?",
      answer:
        "Yes. Online appointment booking is included and bookings appear in Growth Rocket Hub. Offer an introductory or scoping appointment with a clear purpose. For more complex requests, use an inquiry form first so you can understand the requirements before agreeing the meeting.",
    },
    {
      question: "Can I send quotes and invoices to business clients?",
      answer:
        "Yes. Create and send quotes in Growth Rocket Hub and convert an accepted quote into an invoice. Use the deliverables and payment terms you have agreed with the client. Any ongoing service agreement, specialist delivery software or automatic recurring billing should be discussed separately rather than assumed to be included.",
    },
    {
      question: "Can I show case studies, client logos and sectors served?",
      answer:
        "Yes. Show genuine examples that explain the client’s requirement, your work and the result. Use logos, names and testimonials only with permission. Explain the sectors you actually serve so a buyer can assess relevance without implying endorsements or experience you do not have.",
    },
    {
      question: "How do I make several services easy to find and understand?",
      answer:
        "Give each distinct service a clear description and explain the business situations it suits. Plan the structure within the package’s 8–10 pages, with additional pages agreed separately. Your website is mobile-friendly and SEO-ready; relevant content supports visibility, but rankings and inquiry volumes are not guaranteed.",
    },
    {
      question: "Can I move my existing site and keep my domain?",
      answer:
        "We can review your existing services, team information and client examples, then agree the domain and content transfer before launch. Your website can be online within 7 working days once we receive all required information and materials, with timely approvals. Confirm bespoke functions or integrations before agreeing the build.",
    },
  ],

  GUIDE: {
    heading: "Planning your",
    headingAccent: "professional services website?",
    intro:
      "Practical reading for business service providers: explaining scope, collecting useful inquiries and showing how your team works.",
    cards: [
      {
        num: "01",
        topic: "Website checklist",
        title: "The pages your professional services website needs",
        body: "Outline each service, its deliverables and your proof before the build starts.",
      },
      {
        num: "02",
        topic: "Useful inquiries",
        title: "Ask the right questions before a scoping call",
        body: "Collect the service required, business context and preferred timing so you can prepare a useful conversation.",
      },
      {
        num: "03",
        topic: "Building trust",
        title: "Show clients the team behind the service",
        body: "Use your About page to introduce your people, experience and way of working.",
      },
    ],
  },
}, IMAGES);

/* ---------- NL ---------- */

const nl = buildIndustryCopy("nl", {
  HERO: {
    kicker: "Voor zakelijke dienstverleners in Nederland",
    heading: "Een website voor zakelijke dienstverleners.",
    benefits: [
      "Een professionele website die jouw diensten duidelijk maakt voor bedrijven.",
      "Beheer aanvragen, plan gesprekken en verstuur offertes en facturen.",
      "Hosting, onderhoud en ondersteuning: wij regelen het voor je.",
    ],
    textLink: { label: "Bekijk de websiteontwerpen", href: "/design" },
    photoAlt:
      "Zakelijke dienstverlener bespreekt een opdracht met een klant op kantoor",
    breadcrumbCurrent: "Websites voor zakelijke dienstverleners",
  },

  INTRO: {
    heading: "Druk met werk voor klanten?",
    headingAccent: ["Je bedrijf blijft", "online bereikbaar."],
    paragraphs: [
      "Een zakelijke klant wil je dienstverlening vaak eerst vergelijken voordat hij contact opneemt. Je website legt uit wat je levert, wat erbij hoort en voor wie je werkt. De klant kan zijn wensen doorgeven of een gesprek plannen terwijl jouw team zich op bestaande opdrachten richt.",
      "Of je nu zelfstandig werkt of een klein team aanstuurt: Growth Rocket verbindt je website en dagelijkse bedrijfsvoering in één compleet online businesssysteem.",
    ],
  },

  OFFER: {
    intro:
      "Een professionele website voor je zakelijke dienstverlening, Growth Rocket Hub voor aanvragen, gesprekken, offertes en facturen, en een team dat hosting, onderhoud en ondersteuning voor je regelt.",
    website: {
      headingLead: "Jouw ",
      headingTail: ", afgestemd op je dienstverlening.",
    },
  },

  WORKFLOW: {
    headingParts: [
      "Bespreek de aanvraag.",
      "Spreek de dienst af.",
      "Verstuur de factuur.",
    ],
    start: "Een groeiend bedrijf zoekt IT-ondersteuning voor een tweede kantoor.",
    steps: [
      {
        step: "1",
        lines: [
          "De klant stuurt **een aanvraag**",
          "via je website,",
          "met de wensen en eisen.",
        ],
      },
      {
        step: "2",
        lines: [
          "Je **bekijkt de aanvraag** in je Hub",
          "en **plant een gesprek**",
          "om de opdracht af te stemmen.",
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
    note: "Houd de opvolging bij met aanvraagstatussen en interne notities. Spreek de uitvoering en voorwaarden af met de klant; een factuur vervangt geen dienstverleningsovereenkomst.",
  },

  LOCAL: {
    heading: "Jouw diensten. Jouw werkwijze.",
    headingAccent: "Jouw website.",
    intro:
      "Zakelijke klanten hebben duidelijke informatie nodig om met collega’s te delen: wat je levert, waar je verantwoordelijkheid begint en eindigt, en hoe je het werk uitvoert. We richten je website in rond je diensten, aanpak en relevante klantvoorbeelden.",
    checks: [
      "Je logo, kleuren en het verhaal van je bedrijf",
      "Je diensten, pakketten en wat je precies oplevert",
      "De regio’s en sectoren waarvoor je werkt",
      "Praktijkvoorbeelden en opdrachten die je mag delen",
      "Je team, ervaring en behaalde certificeringen",
      "Echte klantervaringen en aanbevelingen",
      "Bedrijfsvideo’s en klantervaringen op video",
      "Duidelijke contactgegevens, offerteaanvragen en gesprekken boeken",
    ],
    small:
      "Maak de dienstverlening begrijpelijk, met een duidelijke afbakening en echte voorbeelden die klanten intern kunnen bespreken.",
    photoAlt:
      "Team werkt samen aan een opdracht voor een zakelijke klant",
  },

  PRICING: {
    intro:
      `Eén Growth Rocket-pakket voor je dienstverlenende bedrijf. ${EUR_NL.payPerPeriod}, plus eenmalige opstartkosten.`,
    bespokeSubject: BESPOKE_SUBJECT,
  },

  DESIGNS: {
    heading: "Kies een website voor jouw diensten.",
    intro:
      "Bekijk de beschikbare ontwerpen en kies een indeling die past bij je dienstverlening. We stemmen de inhoud, huisstijl en voorbeelden af op jouw bedrijf. Je krijgt er Growth Rocket Hub, hosting, onderhoud en ondersteuning bij.",
    small:
      "Voorbeelden uit de bredere ontwerpcollectie. We passen de indeling en inhoud aan jouw dienstverlening aan.",
    templateCategories: TEMPLATE_CATEGORIES,
    templateSubtitles: {
      swiftline: "Logistieke dienstverlening",
      primeabode: "Vastgoed",
      sunharbor: "Zonnepaneleninstallatie",
    },
    placeholders: [
      { title: "SwiftLine", subtitle: "Logistieke dienstverlening" },
      { title: "PrimeAbode", subtitle: "Vastgoed" },
      { title: "SunHarbor", subtitle: "Zonnepaneleninstallatie" },
    ],
  },

  FAQ: {
    heading: "Vragen van",
    headingAccent: "zakelijke dienstverleners.",
  },

  FAQ_ITEMS: [
    {
      question: "Wat hoort er op een website voor zakelijke dienstverlening?",
      answer:
        "Leg per dienst uit voor wie deze bedoeld is, wat erbij hoort en hoe je het werk uitvoert. Voeg relevante teamervaring en klantvoorbeelden toe die je mag delen. Een zakelijke klant moet de opdracht kunnen begrijpen en de informatie met een collega kunnen bespreken voordat hij een offerte of gesprek aanvraagt.",
    },
    {
      question: "Wat kost een website voor zakelijke dienstverlening?",
      answer:
        `Growth Rocket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning.${EUR_NL.annualSavingSentence} Extra pagina’s of maatwerkfuncties bespreken we apart.`,
    },
    {
      question: "Hoe beheer ik zakelijke aanvragen via mijn website?",
      answer:
        "Aanvragen komen binnen in Growth Rocket Hub. Je kunt ze zoeken en filteren, interne notities toevoegen en de status bijwerken. Gebruik de aanvraag om te begrijpen welke dienst de klant zoekt en wat de situatie is. Aanvragen beheren helpt je het gesprek te organiseren; het beoordeelt of sluit de verkoop niet automatisch af.",
    },
    {
      question: "Kunnen potentiële klanten een eerste gesprek boeken?",
      answer:
        "Ja. Online afspraken boeken is inbegrepen en de afspraken verschijnen in Growth Rocket Hub. Bied een kennismaking of verkennend gesprek aan met een duidelijk doel. Gebruik bij ingewikkeldere vragen eerst een aanvraagformulier, zodat je de wensen begrijpt voordat je het gesprek afspreekt.",
    },
    {
      question: "Kan ik offertes en facturen aan zakelijke klanten versturen?",
      answer:
        "Ja. Je maakt en verstuurt offertes in Growth Rocket Hub en kunt een geaccepteerde offerte omzetten naar een factuur. Gebruik de werkzaamheden en betaalafspraken die je met de klant hebt gemaakt. Doorlopende dienstverleningsovereenkomsten, vaksoftware en automatische periodieke facturering moeten apart worden besproken en zijn niet vanzelfsprekend inbegrepen.",
    },
    {
      question: "Kan ik praktijkvoorbeelden, klantlogo’s en sectoren laten zien?",
      answer:
        "Ja. Gebruik echte voorbeelden die de klantvraag, jouw werk en het resultaat uitleggen. Publiceer logo’s, namen en klantervaringen alleen met toestemming. Vertel voor welke sectoren je daadwerkelijk werkt. Zo kan een klant beoordelen of je past, zonder ervaring of aanbevelingen te suggereren die er niet zijn.",
    },
    {
      question: "Hoe maak ik meerdere diensten goed vindbaar en begrijpelijk?",
      answer:
        "Geef elke afzonderlijke dienst een duidelijke beschrijving en leg uit bij welke bedrijfssituaties die past. We plannen de opbouw binnen de 8–10 pagina’s van het pakket. Extra pagina’s spreken we apart af. Je website is mobielvriendelijk en klaar voor SEO. Relevante inhoud ondersteunt de vindbaarheid, zonder gegarandeerde posities of aantallen aanvragen.",
    },
    {
      question:
        "Kan ik mijn bestaande website overzetten en mijn domeinnaam behouden?",
      answer:
        "We bekijken je diensten, teaminformatie en klantvoorbeelden en spreken vóór de lancering de overdracht van domein en inhoud af. Je website kan binnen 7 werkdagen online staan zodra we alle benodigde informatie en materialen hebben ontvangen, met tijdige goedkeuring. Bespreek maatwerkfuncties of koppelingen voordat we de bouw afspreken.",
    },
  ],

  GUIDE: {
    heading: "Aan de slag met je",
    headingAccent: "zakelijke website?",
    intro:
      "Praktische tips voor zakelijke dienstverleners: je diensten afbakenen, bruikbare aanvragen ontvangen en je team voorstellen.",
    cards: [
      {
        num: "01",
        topic: "Websitechecklist",
        title: "Welke pagina’s heeft je zakelijke website nodig?",
        body: "Breng je diensten, het op te leveren werk en relevante klantvoorbeelden in kaart.",
      },
      {
        num: "02",
        topic: "Bruikbare aanvragen",
        title: "Stel de juiste vragen vóór het eerste gesprek",
        body: "Vraag naar de gewenste dienst, de bedrijfssituatie en de planning, zodat je het gesprek goed kunt voorbereiden.",
      },
      {
        num: "03",
        topic: "Vertrouwen opbouwen",
        title: "Laat zien wie er achter de dienstverlening zit",
        body: "Stel je mensen, ervaring en werkwijze voor op je Over ons-pagina.",
      },
    ],
  },
}, IMAGES);

export const PROFESSIONAL_SERVICES: IndustryPageDef = {
  paths: {
    en: "/industry/website-for-professional-services",
    nl: "/nl/branche/website-voor-zakelijke-dienstverleners",
  },
  seo: {
    en: {
      title: "Websites for Professional Services | Growth Rocket",
      description:
        "A website for your B2B services, with Growth Rocket Hub for inquiries, meetings, quotes and invoices. Hosting, maintenance and support included.",
    },
    nl: {
      title: "Website voor zakelijke dienstverlening | Growth Rocket",
      description:
        "Een website voor je zakelijke diensten, met Growth Rocket Hub voor aanvragen, afspraken, offertes en facturen. Inclusief hosting, onderhoud en ondersteuning.",
    },
  },
  copy: {
    /* The doc's closing CTA reads "Great at what you do." (shared:
       "Great at your trade."). */
    en: { ...en, CLOSE: { ...en.CLOSE, heading: "Great at what you do." } },
    nl,
  },
};
