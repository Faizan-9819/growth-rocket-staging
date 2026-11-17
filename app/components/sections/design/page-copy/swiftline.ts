import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * SwiftLine — transport and logistics. Source: "SwiftLine — Logistics Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/swiftline.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Logistics Website Design | SwiftLine | Growth Rocket",
    description: "Explore SwiftLine, a website design for transport and logistics businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for transport and logistics businesses",
    subline: "Show what you move. Make the next enquiry easier.",
    description: "Present your transport services, routes and capabilities clearly, so customers can explain what they need and request a quote. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "SwiftLine · Design preview",
    caption: "Explore SwiftLine using Meridian Logistics as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Give customers the detail",
      accent: "they need to choose you.",
      breakBefore: false,
    },
    intro: "A transport enquiry starts with practical questions: what can you carry, where do you go and what information do you need? Put those answers within reach.",
    cards: [
      {
        icon: "document",
        title: "Make your service scope clear",
        body: "Explain the transport, courier or storage services you actually provide. State the kinds of consignments you handle and any important limits, rather than suggesting every shipment is suitable.",
      },
      {
        icon: "people",
        title: "Show where you operate",
        body: "Set out collection areas, delivery regions and the routes you serve. Distinguish regular coverage from destinations that need an individual quotation.",
      },
      {
        icon: "star",
        title: "Help customers send a useful request",
        body: "Guide customers to share collection and delivery locations, goods, dimensions or weight, and preferred timing. Agree the enquiry fields during setup so your team can assess the request.",
      },
      {
        icon: "calendar",
        title: "Back your capabilities with real evidence",
        body: "Show your own vehicles, facilities and team, plus verified credentials and relevant customer examples. Keep operational claims specific to what your business can deliver.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your services. Your routes.",
      accent: "Your website.",
      breakBefore: false,
    },
    intro: "We adapt SwiftLine to your business, whether you handle local deliveries, regional freight or a defined logistics service.",
    items: [
      "Your logo, colours and company story.",
      "The goods, transport services and storage options you actually handle.",
      "Collection areas, delivery regions and service limitations.",
      "Your vehicles, team and facility photographs.",
      "Useful quote-request guidance and agreed enquiry fields.",
      "Verified certifications, memberships and genuine customer references.",
      "Your contact hours and a clearly explained route for shipment-status questions.",
    ],
    imageAlt: "SwiftLine website design preview for transport and logistics businesses",
    imageCaption: "SwiftLine, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about SwiftLine? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is SwiftLine suitable for a small transport company?",
        answer: "Yes. We adapt it to the services and regions your business actually covers. The large international network in the preview is example content, not a requirement or a promise about your company.",
      },
      {
        question: "Can customers request a transport quote?",
        answer: "Yes. Your website can collect enquiries and you can follow up, prepare quotes and send invoices in Growth Rocket Hub. We agree the information to collect during setup. A quote request is not an automatic freight-rate calculation or confirmed transport booking.",
      },
      {
        question: "Does the website include live shipment tracking?",
        answer: "Live shipment tracking is not a standard Growth Rocket capability. If you already have a tracking service, we can discuss an appropriate link or separately scoped integration. A preview tracking button is not proof of a working connection.",
      },
      {
        question: "Can I show delivery regions and transport limitations?",
        answer: "Yes. We can explain the areas you serve, the goods you handle and any relevant restrictions. Transit times and time-critical options should reflect your actual operating arrangements rather than a generic delivery guarantee.",
      },
      {
        question: "Does the Hub replace transport or warehouse management software?",
        answer: "No. The Hub supports customer enquiries, appointments, quotes, invoices and contacts. Dispatch, vehicle routing, warehouse stock and specialist transport workflows require the appropriate operational systems; any integration is assessed separately.",
      },
      {
        question: "Can I display certifications and customer examples?",
        answer: "Yes, where they are genuine and you have permission to use them. Supply accurate certification details, authorised photographs and customer examples. We do not carry the preview’s sample scale, savings or accreditation claims into your business copy.",
      },
      {
        question: "What do I need to supply before setup?",
        answer: "Your branding, service scope, coverage areas, contact information and approved team, vehicle or facility images. We also agree the enquiry route and any external service links. Existing domains can be used, with setup guidance from our team.",
      },
      {
        question: "What does SwiftLine cost, and how quickly can it go live?",
        answer: `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: [
      "Explore more website designs.",
    ],
    intro: "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: {
      dentalcare: "Dentist",
      shinesquad: "Home cleaning",
      physiotherapy: "Physiotherapy",
    },
  },
  close: {
    heading: {
      lead: "Make SwiftLine",
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
    title: "Website voor transportbedrijven | SwiftLine",
    description: "Ontdek SwiftLine: een website voor transport- en logistieke bedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor transport- en logistieke bedrijven",
    subline: "Laat zien wat je vervoert. Maak een aanvraag makkelijk.",
    description: "Presenteer je vervoersdiensten, routes en mogelijkheden duidelijk, zodat klanten hun transportvraag kunnen toelichten en een offerte aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "SwiftLine · Websitevoorbeeld",
    caption: "Bekijk SwiftLine met Meridian Logistics als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Geef klanten de informatie",
      accent: "om voor jou te kiezen.",
      breakBefore: false,
    },
    intro: "Een transportaanvraag begint met praktische vragen: wat vervoer je, waar rijd je en welke gegevens heb je nodig? Maak die antwoorden makkelijk vindbaar.",
    cards: [
      {
        icon: "document",
        title: "Maak je aanbod concreet",
        body: "Leg uit welke transport-, koeriers- of opslagdiensten je daadwerkelijk biedt. Benoem soorten zendingen en belangrijke beperkingen, zodat klanten weten wat bij jouw dienstverlening past.",
      },
      {
        icon: "people",
        title: "Laat je werkgebied zien",
        body: "Beschrijf ophaalgebieden, bestemmingen en routes. Maak onderscheid tussen vaste routes en bestemmingen waarvoor je eerst een aparte offerte maakt.",
      },
      {
        icon: "star",
        title: "Help klanten een gerichte aanvraag doen",
        body: "Vraag om ophaal- en afleverlocatie, soort goederen, afmetingen of gewicht en gewenste timing. We spreken de formuliervelden af zodat je team de aanvraag goed kan beoordelen.",
      },
      {
        icon: "calendar",
        title: "Onderbouw wat je kunt leveren",
        body: "Toon je eigen voertuigen, locaties en team, met gecontroleerde kwalificaties en relevante klantvoorbeelden. Houd beloften concreet en passend bij je echte dienstverlening.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw diensten. Jouw routes.",
      accent: "Jouw website.",
      breakBefore: false,
    },
    intro: "We stemmen SwiftLine af op jouw bedrijf, van lokale bezorging tot regionaal transport of een specifieke logistieke dienst.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal.",
      "De goederen, vervoersdiensten en opslagmogelijkheden die je werkelijk aanbiedt.",
      "Ophaalgebieden, bestemmingen en grenzen van je dienstverlening.",
      "Foto’s van je voertuigen, team en locaties.",
      "Duidelijke uitleg voor offerteaanvragen en afgesproken formuliervelden.",
      "Gecontroleerde certificeringen, lidmaatschappen en echte klantreferenties.",
      "Je bereikbaarheid en een duidelijke contactroute voor vragen over zendingen.",
    ],
    imageAlt: "Voorbeeld van het SwiftLine-websiteontwerp voor transport- en logistieke bedrijven",
    imageCaption: "SwiftLine, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over SwiftLine? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Past SwiftLine bij een klein transportbedrijf?",
        answer: "Ja. We stemmen het ontwerp af op jouw diensten en werkgebied. Het grote internationale netwerk in het voorbeeld is voorbeeldinhoud, geen vereiste of belofte over jouw bedrijf.",
      },
      {
        question: "Kunnen klanten een transportofferte aanvragen?",
        answer: "Ja. Je website kan aanvragen verzamelen. In Growth Rocket Hub kun je ze opvolgen, offertes maken en facturen versturen. We spreken af welke gegevens je nodig hebt. Een offerteaanvraag is geen automatische vrachtprijsberekening of bevestigde transportboeking.",
      },
      {
        question: "Zit live zendingen volgen bij de website inbegrepen?",
        answer: "Live zendingen volgen is geen standaardfunctie van Growth Rocket. Gebruik je al een volgsysteem? Dan kunnen we een passende link of apart af te spreken koppeling bespreken. Een knop in het voorbeeld bewijst geen werkende verbinding.",
      },
      {
        question: "Kan ik bestemmingen en vervoersbeperkingen tonen?",
        answer: "Ja. We kunnen je werkgebied, soorten goederen en relevante beperkingen uitleggen. Levertijden en spoedmogelijkheden moeten aansluiten op je echte werkafspraken, niet op een algemene bezorggarantie.",
      },
      {
        question: "Vervangt de Hub mijn transport- of magazijnsoftware?",
        answer: "Nee. De Hub ondersteunt aanvragen, afspraken, offertes, facturen en contacten. Planning, routes, voorraad en specifieke transportprocessen vragen passende operationele systemen. Een eventuele koppeling beoordelen we apart.",
      },
      {
        question: "Kan ik certificeringen en klantvoorbeelden tonen?",
        answer: "Ja, als ze echt zijn en je toestemming voor gebruik hebt. Lever juiste certificeringsgegevens, toegestane foto’s en klantvoorbeelden aan. Cijfers, besparingen en keurmerken uit het voorbeeld nemen we niet over in jouw bedrijfstekst.",
      },
      {
        question: "Wat lever ik aan voor de inrichting?",
        answer: "Je huisstijl, diensten, werkgebied, contactgegevens en goedgekeurde foto’s van team, voertuigen of locaties. We spreken ook de aanvraagroute en externe links af. Je kunt je bestaande domein gebruiken; ons team helpt bij de inrichting.",
      },
      {
        question: "Wat kost SwiftLine en hoe snel kan mijn website online?",
        answer: `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: [
      "Ontdek meer ontwerpen.",
    ],
    intro: "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: {
      dentalcare: "Tandarts",
      shinesquad: "Particuliere schoonmaak",
      physiotherapy: "Fysiotherapie",
    },
  },
  close: {
    heading: {
      lead: "Maak van SwiftLine",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const swiftline: Record<Locale, PageOwnCopy> = { en, nl };
