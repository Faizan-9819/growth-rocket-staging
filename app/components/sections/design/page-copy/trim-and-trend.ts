import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * Trim & Trend — hair salons and barbers. Source: "Trim & Trend — Hair Salon
 * Design Page Copy.docx" (16 October 2026); content reference with the
 * previous text and the implementation notes:
 * content/design-pages/trim-and-trend.md
 *
 * Sections 6–8 are the shared master copy (./master.ts), merged in by
 * `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Hair Salon Website Design | Trim & Trend | Growth Rocket",
    description:
      "Explore Trim & Trend, a website design for hair salons and barbers, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for hair salons and barbers",
    subline: "Let your next client get a feel for your salon.",
    description:
      "Show your style, explain your services and help clients take the next step towards an appointment. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Breadcrumb", allDesigns: "All designs" },
  preview: {
    devicesLabel: "Website preview size",
    devices: { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" },
    openInBrowser: "Preview in browser",
    cta: "Start with this design",
    browserLabel: "Trim & Trend · Design preview",
    caption:
      "Explore Trim & Trend using Maison Noir as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Make choosing your salon",
      accent: "feel easier.",
      breakBefore: false,
    },
    intro:
      "Before booking, clients want to see your work, understand the price and know who will welcome them. Give those questions a clear place on your website.",
    cards: [
      {
        icon: "document",
        title: "Show the work they come for",
        body: "Use a gallery of your own cuts, colour work or beard styling to show the services and styles your salon offers.",
      },
      {
        icon: "people",
        title: "Make your menu easy to compare",
        body: "Explain each service, its starting price and what is included. Where a consultation is needed, make that clear before clients request an appointment.",
      },
      {
        icon: "star",
        title: "Introduce the people behind the chair",
        body: "Let clients meet your stylists or barbers through photographs, specialisms and a short personal introduction.",
      },
      {
        icon: "calendar",
        title: "Make the next step obvious",
        body: "Keep opening hours, your address and appointment options easy to find, especially when someone is browsing on their phone.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your salon. Your style.",
      accent: "Your website.",
      breakBefore: false,
    },
    intro:
      "We shape Trim & Trend around the way your salon works, from a single-chair studio to a salon with several stylists.",
    items: [
      "Your logo, colours and salon photographs.",
      "Your actual treatments, prices, durations and consultation requirements.",
      "Stylist or barber introductions, with the specialisms clients can ask about.",
      "A gallery of your own work, used with permission.",
      "Genuine reviews and client stories, with permission to publish them.",
      "Opening hours, directions, parking information and location details.",
      "Appointment and enquiry options matched to your agreed booking process.",
    ],
    imageAlt: "Trim & Trend website design preview for hair salons and barbers",
    imageCaption: "Trim & Trend, shaped around your business.",
  },
  faq: {
    heading: { lead: "Your questions", accent: "answered.", breakBefore: false },
    intro:
      "Questions about Trim & Trend? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is Trim & Trend suitable for my hair salon or barbershop?",
        answer:
          "Yes. We adapt the design to your services, team and style. The preview uses a barber studio as its example; its name, prices, people and locations are not part of your business.",
      },
      {
        question: "Can I show services, prices and treatment times?",
        answer:
          "Yes. We can organise your menu around the services you offer, with prices, durations and what is included. Services that require a consultation can be explained separately.",
      },
      {
        question: "Can clients book an appointment through the website?",
        answer:
          "Growth Rocket includes an appointment system. We agree the booking setup with you before launch. Staff-specific availability, deposits, resource scheduling or connections to existing salon software need separate confirmation.",
      },
      {
        question: "Can I keep my existing salon booking system?",
        answer:
          "Tell us which system you use. We can review the appropriate link or embedding options before setup. A direct integration or synchronised calendar should not be assumed.",
      },
      {
        question: "Can I add stylist profiles, reviews and a photo gallery?",
        answer:
          "Yes. Supply approved team details, photographs and genuine client feedback. We arrange them so visitors can understand your style and choose their next step without searching across the page.",
      },
      {
        question: "Can the website help people find my salon locally?",
        answer:
          "We can include your real location, opening hours, services and practical visiting details in clear page content. This supports local relevance, but does not guarantee search rankings or a particular number of bookings.",
      },
      {
        question: "Is this only a salon website design?",
        answer:
          "No. Your professional website comes with Growth Rocket Hub for appointments, enquiries, quotes, invoices and contacts, plus hosting, maintenance and support. Together they form a complete online business system.",
      },
      {
        question: "What does Trim & Trend cost, and how quickly can it go live?",
        answer:
          `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: ["Explore more website designs."],
    intro:
      "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: {
      dentalcare: "Dentist",
      shinesquad: "Home cleaning",
      physiotherapy: "Physiotherapy",
    },
  },
  close: {
    heading: { lead: "Make Trim & Trend", accent: "your next website.", breakBefore: false },
    description:
      "A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor kappers | Trim & Trend",
    description:
      "Ontdek Trim & Trend: een website voor kappers en barbershops, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor kappers en barbershops",
    subline: "Laat nieuwe klanten kennismaken met jouw salon.",
    description:
      "Laat je stijl zien, maak je behandelingen duidelijk en help klanten de stap naar een afspraak te zetten. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Kruimelpad", allDesigns: "Alle ontwerpen" },
  preview: {
    devicesLabel: "Schermkeuze",
    devices: { desktop: "Computer", tablet: "Tablet", mobile: "Mobiel" },
    openInBrowser: "Bekijk in je browser",
    cta: "Kies dit ontwerp",
    browserLabel: "Trim & Trend · Websitevoorbeeld",
    caption:
      "Bekijk Trim & Trend met Maison Noir als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Maak de keuze voor jouw salon",
      accent: "makkelijker.",
      breakBefore: false,
    },
    intro:
      "Voordat klanten boeken, willen ze je werk zien, weten wat een behandeling kost en kennismaken met het team. Geef die vragen een duidelijke plek op je website.",
    cards: [
      {
        icon: "document",
        title: "Laat je werk zien",
        body: "Toon eigen foto’s van kapsels, kleurbehandelingen of baardverzorging. Zo krijgen klanten een goed beeld van jouw stijl en aanbod.",
      },
      {
        icon: "people",
        title: "Maak je prijslijst overzichtelijk",
        body: "Leg per behandeling uit wat erbij hoort en wat de vanafprijs is. Is eerst een adviesgesprek nodig? Vertel dat voordat iemand een afspraak aanvraagt.",
      },
      {
        icon: "star",
        title: "Stel je team voor",
        body: "Laat klanten kennismaken met je kappers of barbiers via foto’s, specialisaties en een korte persoonlijke introductie.",
      },
      {
        icon: "calendar",
        title: "Maak een afspraak makkelijk",
        body: "Zorg dat openingstijden, adres en afspraakmogelijkheden snel te vinden zijn, ook op een telefoon.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw salon. Jouw stijl.",
      accent: "Jouw website.",
      breakBefore: false,
    },
    intro:
      "We stemmen Trim & Trend af op jouw salon: van een zelfstandige kapper tot een zaak met meerdere medewerkers.",
    items: [
      "Je logo, kleuren en foto’s van de salon.",
      "Je behandelingen, prijzen, tijdsduur en eventuele adviesgesprekken.",
      "Voorstelteksten van je team, met hun specialisaties.",
      "Een fotogalerij van eigen werk, met toestemming voor gebruik.",
      "Echte reviews en klantverhalen, met toestemming om ze te publiceren.",
      "Openingstijden, route, parkeermogelijkheden en adresgegevens.",
      "Afspraak- en contactmogelijkheden die passen bij de afgesproken werkwijze.",
    ],
    imageAlt:
      "Voorbeeld van het Trim & Trend-websiteontwerp voor kappers en barbershops",
    imageCaption: "Trim & Trend, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: { lead: "Je vragen", accent: "beantwoord.", breakBefore: false },
    intro:
      "Vragen over Trim & Trend? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Past Trim & Trend bij mijn kapsalon of barbershop?",
        answer:
          "Ja. We stemmen het ontwerp af op je diensten, team en stijl. Het voorbeeld gebruikt een barbershop. De naam, prijzen, medewerkers en locaties uit dat voorbeeld nemen we niet over voor jouw bedrijf.",
      },
      {
        question: "Kan ik behandelingen, prijzen en tijdsduur tonen?",
        answer:
          "Ja. We maken je aanbod overzichtelijk, met prijzen, tijdsduur en wat bij een behandeling hoort. Behandelingen waarvoor eerst advies nodig is, kunnen we apart toelichten.",
      },
      {
        question: "Kunnen klanten via de website een afspraak maken?",
        answer:
          "Growth Rocket bevat een afsprakensysteem. We spreken vóór oplevering af hoe we dit voor je inrichten. Beschikbaarheid per medewerker, aanbetalingen, stoelplanning of koppelingen met salonsoftware bevestigen we apart.",
      },
      {
        question: "Kan ik mijn huidige boekingssysteem blijven gebruiken?",
        answer:
          "Vertel ons welk systeem je gebruikt. We bekijken vooraf welke link of ingesloten weergave mogelijk is. Ga niet automatisch uit van een rechtstreekse koppeling of gesynchroniseerde agenda.",
      },
      {
        question: "Kan ik mijn team, reviews en werkfoto’s toevoegen?",
        answer:
          "Ja. Lever goedgekeurde teaminformatie, foto’s en echte klantreacties aan. We geven ze een logische plek, zodat bezoekers je stijl leren kennen en makkelijk de volgende stap zetten.",
      },
      {
        question: "Helpt de website om lokaal gevonden te worden?",
        answer:
          "We kunnen je echte locatie, openingstijden, diensten en bezoekinformatie duidelijk op de pagina opnemen. Dat maakt de inhoud lokaal relevant, maar garandeert geen zoekpositie of aantal afspraken.",
      },
      {
        question: "Krijg ik alleen een websiteontwerp voor mijn salon?",
        answer:
          "Nee. Je professionele website komt met Growth Rocket Hub voor afspraken, aanvragen, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn ook geregeld. Samen vormt dit één compleet online businesssysteem.",
      },
      {
        question: "Wat kost Trim & Trend en hoe snel kan mijn website online?",
        answer:
          `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: ["Ontdek meer ontwerpen."],
    intro:
      "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: {
      dentalcare: "Tandarts",
      shinesquad: "Particuliere schoonmaak",
      physiotherapy: "Fysiotherapie",
    },
  },
  close: {
    heading: {
      lead: "Maak van Trim & Trend",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description:
      "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const trimAndTrend: Record<Locale, PageOwnCopy> = { en, nl };
