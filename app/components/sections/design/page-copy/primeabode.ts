import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * PrimeAbode — estate agents and property consultants. Source: "PrimeAbode —
 * Real Estate Consultant Design Page Copy.docx" (16 October 2026); content
 * reference with the previous text and the implementation notes:
 * content/design-pages/primeabode.md
 *
 * Sections 6–8 are the shared master copy (./master.ts), merged in by
 * `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Real Estate Website Design | PrimeAbode | Growth Rocket",
    description:
      "Explore PrimeAbode, a website design for estate agents and property consultants, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for estate agents and property consultants",
    subline: "Show your properties. Introduce the people behind the advice.",
    description:
      "Give buyers, sellers and landlords a clear view of your services, your local knowledge and how to get in touch. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Breadcrumb", allDesigns: "All designs" },
  preview: {
    devicesLabel: "Website preview size",
    devices: { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" },
    openInBrowser: "Preview in browser",
    cta: "Start with this design",
    browserLabel: "PrimeAbode · Design preview",
    caption:
      "Explore PrimeAbode using Aurelio Estates as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Build trust",
      accent: "before the first conversation.",
      breakBefore: false,
    },
    intro:
      "Choosing an estate agent means choosing who will guide an important decision. Make your expertise, approach and property information easy to assess.",
    cards: [
      {
        icon: "document",
        title: "Make your services clear",
        body: "Explain your actual buying, selling or rental services, who they are for and what happens after an enquiry. Keep valuation services separate where they have their own scope.",
      },
      {
        icon: "people",
        title: "Give properties the detail they deserve",
        body: "Present current photographs, location, price, key specifications and availability. Help visitors decide whether a property is worth asking about before they request a viewing.",
      },
      {
        icon: "star",
        title: "Show your knowledge of the area",
        body: "Introduce your team and the neighbourhoods you work in. Use useful local context and genuine client experiences instead of broad claims about being the best.",
      },
      {
        icon: "calendar",
        title: "Guide each visitor to the right conversation",
        body: "Give buyers a clear way to ask about a property, and sellers or landlords a way to discuss their needs. Make contact details easy to use on a phone.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your area. Your expertise.",
      accent: "Your website.",
      breakBefore: false,
    },
    intro:
      "We shape PrimeAbode around the services you provide, the properties you represent and the local market you know.",
    items: [
      "Your logo, colours and agency story.",
      "Your actual buying, selling, rental or advisory services.",
      "Property photographs and verified specifications, prices and availability.",
      "Team introductions and genuine local expertise.",
      "Neighbourhood information, office details and areas served.",
      "Authorised client reviews and verified professional memberships.",
      "Property enquiries and consultation requests matched to your working process.",
    ],
    imageAlt:
      "PrimeAbode website design preview for estate agents and property consultants",
    imageCaption: "PrimeAbode, shaped around your business.",
  },
  faq: {
    heading: { lead: "Your questions", accent: "answered.", breakBefore: false },
    intro:
      "Questions about PrimeAbode? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is PrimeAbode suitable for a small estate agency?",
        answer:
          "Yes. We adapt the design for your agency or independent property consultancy. The premium property preview is an example, not a requirement to specialise in luxury homes or international investment.",
      },
      {
        question: "Can I display properties for sale or rent?",
        answer:
          "The design includes space to showcase properties. We agree how listings, photographs, specifications and availability will be maintained before launch. A live property feed or automated portal synchronisation is not included by assumption.",
      },
      {
        question: "Can visitors request a viewing or valuation appointment?",
        answer:
          "Growth Rocket includes enquiry and appointment capabilities. We agree which requests your website should collect and how you will follow them up. Property-specific booking rules or specialist valuation workflows need separate confirmation.",
      },
      {
        question: "Does it connect to my property software or listing portals?",
        answer:
          "Tell us what you use. We assess the required connection and agree its scope before implementation. The website and Hub do not automatically replace a specialist property database or synchronise with property portals.",
      },
      {
        question: "Can the website explain the areas I cover?",
        answer:
          "Yes. We can include real neighbourhood knowledge, office information and the services you offer locally. Useful, accurate local content supports relevance; it does not guarantee a particular search ranking.",
      },
      {
        question: "Can I use my current domain and branding?",
        answer:
          "Yes. Share your domain details, brand assets, service information and approved property images. We guide you through the setup and agree how to use your existing domain without changing your business identity.",
      },
      {
        question: "What else comes with the design?",
        answer:
          "Your professional website comes with Growth Rocket Hub for enquiries, appointments, quotes, invoices and contacts, plus hosting, maintenance and support. Together they form a complete online business system.",
      },
      {
        question: "What does PrimeAbode cost, and how quickly can it go live?",
        answer:
          "The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.",
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
    heading: { lead: "Make PrimeAbode", accent: "your next website.", breakBefore: false },
    description:
      "A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor makelaars | PrimeAbode",
    description:
      "Ontdek PrimeAbode: een website voor makelaars en vastgoedadviseurs, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor makelaars en vastgoedadviseurs",
    subline: "Laat je aanbod zien. Geef je advies een gezicht.",
    description:
      "Geef kopers, verkopers en verhuurders een helder beeld van je dienstverlening, je lokale kennis en hoe ze contact opnemen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Kruimelpad", allDesigns: "Alle ontwerpen" },
  preview: {
    devicesLabel: "Schermkeuze",
    devices: { desktop: "Computer", tablet: "Tablet", mobile: "Mobiel" },
    openInBrowser: "Bekijk in je browser",
    cta: "Kies dit ontwerp",
    browserLabel: "PrimeAbode · Websitevoorbeeld",
    caption:
      "Bekijk PrimeAbode met Aurelio Estates als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Wek vertrouwen",
      accent: "vóór het eerste gesprek.",
      breakBefore: false,
    },
    intro:
      "Wie een makelaar kiest, zoekt begeleiding bij een belangrijke beslissing. Maak je kennis, aanpak en woninginformatie makkelijk te beoordelen.",
    cards: [
      {
        icon: "document",
        title: "Maak je dienstverlening duidelijk",
        body: "Leg uit welke aankoop-, verkoop- of verhuurdiensten je biedt, voor wie ze bedoeld zijn en wat er na een aanvraag gebeurt. Licht taxaties apart toe als daarvoor een eigen werkwijze geldt.",
      },
      {
        icon: "people",
        title: "Geef woningen de juiste informatie",
        body: "Toon actuele foto’s, locatie, prijs, kenmerken en beschikbaarheid. Zo kunnen bezoekers bepalen of een woning bij hen past voordat ze een bezichtiging aanvragen.",
      },
      {
        icon: "star",
        title: "Laat je lokale kennis zien",
        body: "Stel je team voor en vertel over de buurten waarin je werkt. Gebruik relevante lokale informatie en echte klantervaringen in plaats van algemene claims dat je de beste bent.",
      },
      {
        icon: "calendar",
        title: "Help bezoekers gericht contact opnemen",
        body: "Geef kopers een duidelijke route voor woningvragen en verkopers of verhuurders ruimte om hun wensen te bespreken. Maak contact ook op mobiel eenvoudig.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw regio. Jouw expertise.",
      accent: "Jouw website.",
      breakBefore: false,
    },
    intro:
      "We stemmen PrimeAbode af op je dienstverlening, je woningaanbod en de lokale markt die jij kent.",
    items: [
      "Je logo, kleuren en het verhaal van je kantoor.",
      "Je aankoop-, verkoop-, verhuur- of adviesdiensten.",
      "Woningfoto’s en gecontroleerde kenmerken, prijzen en beschikbaarheid.",
      "Teamintroducties en echte lokale expertise.",
      "Buurtinformatie, kantoorgegevens en werkgebied.",
      "Klantreviews met toestemming en gecontroleerde beroepslidmaatschappen.",
      "Woningvragen en kennismakingsgesprekken die passen bij je werkwijze.",
    ],
    imageAlt:
      "Voorbeeld van het PrimeAbode-websiteontwerp voor makelaars en vastgoedadviseurs",
    imageCaption: "PrimeAbode, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: { lead: "Je vragen", accent: "beantwoord.", breakBefore: false },
    intro:
      "Vragen over PrimeAbode? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Past PrimeAbode bij een klein makelaarskantoor?",
        answer:
          "Ja. We stemmen het ontwerp af op jouw kantoor of zelfstandige vastgoedadviespraktijk. Het luxe vastgoed in het voorbeeld betekent niet dat je je op luxe woningen of internationale beleggingen moet richten.",
      },
      {
        question: "Kan ik koop- en huurwoningen tonen?",
        answer:
          "Het ontwerp biedt ruimte om woningen te presenteren. We spreken vóór oplevering af hoe je aanbod, foto’s, kenmerken en beschikbaarheid worden bijgehouden. Een live woningfeed of automatische portalsynchronisatie is niet vanzelfsprekend inbegrepen.",
      },
      {
        question: "Kunnen bezoekers een bezichtiging of taxatieafspraak aanvragen?",
        answer:
          "Growth Rocket biedt mogelijkheden voor aanvragen en afspraken. We bepalen samen welke verzoeken je website opvangt en hoe je ze opvolgt. Woninggebonden boekingsregels of specifieke taxatieprocessen bevestigen we apart.",
      },
      {
        question: "Is er een koppeling met mijn makelaarssoftware of woningportals?",
        answer:
          "Vertel ons wat je gebruikt. We beoordelen de gewenste koppeling en spreken de omvang af vóór uitvoering. De website en Hub vervangen niet automatisch een woningdatabase en synchroniseren niet standaard met woningportals.",
      },
      {
        question: "Kan ik mijn werkgebied toelichten?",
        answer:
          "Ja. We kunnen echte buurtkennis, kantoorgegevens en lokale dienstverlening opnemen. Nuttige, juiste lokale informatie maakt de pagina relevant, maar garandeert geen bepaalde positie in zoekmachines.",
      },
      {
        question: "Kan ik mijn domeinnaam en huisstijl behouden?",
        answer:
          "Ja. Deel je domeingegevens, huisstijl, dienstinformatie en goedgekeurde woningfoto’s. We begeleiden de inrichting en spreken af hoe we je bestaande domein gebruiken met behoud van je bedrijfsidentiteit.",
      },
      {
        question: "Wat krijg ik naast het ontwerp?",
        answer:
          "Je professionele website komt met Growth Rocket Hub voor aanvragen, afspraken, offertes, facturen en contacten. Hosting, onderhoud en ondersteuning zijn ook geregeld. Samen vormt dit één compleet online businesssysteem.",
      },
      {
        question: "Wat kost PrimeAbode en hoe snel kan mijn website online?",
        answer:
          "Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.",
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
      lead: "Maak van PrimeAbode",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description:
      "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const primeabode: Record<Locale, PageOwnCopy> = { en, nl };
