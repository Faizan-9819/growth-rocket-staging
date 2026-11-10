import type { Locale } from "../../../../i18n/config";
import type { DesignPageCopy, MasterCopy } from "./types";

/**
 * ShineSquad — home cleaning. Source: "ShineSquad — Home Cleaning Design Page
 * Copy.docx" (16 October 2026); content reference with the previous text and
 * the implementation notes: content/design-pages/shinesquad.md
 *
 * Sections 6–8 are the shared master copy (./master.ts), merged in by
 * `./index.ts`.
 */
export type PageOwnCopy = Omit<DesignPageCopy, keyof MasterCopy>;

const en: PageOwnCopy = {
  seo: {
    title: "Home Cleaning Website Design | ShineSquad | Growth Rocket",
    description:
      "Explore ShineSquad, a website design for home cleaning businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for home cleaning businesses",
    subline: "Help people feel comfortable inviting you in.",
    description:
      "Show who will clean their home, explain what each service includes and make the first enquiry easy. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Breadcrumb", allDesigns: "All designs" },
  preview: {
    devicesLabel: "Website preview size",
    devices: { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" },
    openInBrowser: "Preview in browser",
    cta: "Start with this design",
    browserLabel: "ShineSquad · Design preview",
    caption:
      "Explore ShineSquad using Sage Cleaning Co. as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: { lead: "Build trust.", accent: "Before the first clean.", breakBefore: true },
    intro:
      "Choosing someone to clean your home means trusting them with your space and routine. ShineSquad helps households understand who you are, what to expect and how to arrange the right clean.",
    cards: [
      {
        icon: "document",
        title: "Make each service clear.",
        body: "Explain the difference between a regular clean, a deep clean and a move-in or move-out clean. Show what is included, what needs a separate request and how customers can discuss their priorities.",
      },
      {
        icon: "people",
        title: "Introduce the people coming into the home.",
        body: "Show your team and explain your approach to access, belongings and working around pets or people at home. Describe your actual arrangements so customers know what to expect.",
      },
      {
        icon: "star",
        title: "Let your work speak for you.",
        body: "Share genuine household reviews and photographs you have permission to publish. Show useful examples of your work without promising identical results for every home.",
      },
      {
        icon: "calendar",
        title: "Make the first request straightforward.",
        body: "Help people share their postcode, property size, preferred frequency and cleaning needs. Keep enquiries and appointment options easy to reach on a phone, then confirm the scope and availability with them.",
      },
    ],
  },
  personal: {
    heading: { lead: "Your team. Your approach.", accent: "Your website.", breakBefore: true },
    intro:
      "We shape ShineSquad around the homes you clean, the people behind your service and the practical questions your customers ask.",
    items: [
      "Your logo, colours and business story",
      "Your cleaning services, inclusions and optional extras",
      "Your team photographs and introductions",
      "Your approach to supplies, access and pets",
      "Your service areas and enquiry details",
      "Genuine reviews and permitted before-and-after photographs",
      "Your pricing approach and cancellation arrangements",
    ],
    imageAlt: "ShineSquad website design preview for home cleaning businesses",
    imageCaption: "ShineSquad, shaped around your business.",
  },
  faq: {
    heading: { lead: "Your questions", accent: "answered.", breakBefore: false },
    intro:
      "Questions about ShineSquad? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is ShineSquad a home cleaning design I install myself?",
        answer:
          "No. We tailor and launch your website as part of Growth Rocket, a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support. You do not need to install a design or maintain it yourself.",
      },
      {
        question: "Why does ShineSquad suit a home cleaning business?",
        answer:
          "It gives you space to introduce your cleaners, explain different cleans and answer the practical questions people ask before inviting someone into their home. We adapt the current mixed home-and-office example to your household services, service areas and working arrangements.",
      },
      {
        question: "Can I explain regular cleaning and one-off deep cleans separately?",
        answer:
          "Yes. We can describe the tasks, frequency and exclusions for each service so customers can choose a suitable starting point. Use your actual scope and pricing approach. Where a price depends on the home and its condition, explain how you assess it before confirming the work.",
      },
      {
        question: "Can customers arrange a clean through the website?",
        answer:
          "Yes. Enquiry and appointment options connect to Growth Rocket Hub. We agree how customers request or book a clean during onboarding. You can follow up, manage contacts and appointments, and prepare quotes and invoices. Availability and the final scope still need to reflect your business’s arrangements.",
      },
      {
        question: "Does the package include a cleaner tracking or staff scheduling app?",
        answer:
          "Growth Rocket provides your website and Hub for enquiries, appointments, contacts, quotes and invoices. It does not promise live cleaner tracking, workforce allocation or a separate customer app as standard. If you need those capabilities or a connection to existing software, we can discuss a bespoke scope.",
      },
      {
        question: "What should customers know before their first clean?",
        answer:
          "Explain what is included, whether you bring supplies, how access is arranged and how you work around pets or residents. Include your own rescheduling and cancellation terms. These details make expectations clearer without promising a service policy your business does not offer.",
      },
      {
        question: "Can I keep my brand and get help after launch?",
        answer:
          "Yes. We use your logo, colours, team and service information, and you can keep your domain. Hosting, SSL, technical maintenance and ongoing support are included. You can raise a support request through the Hub when you need help.",
      },
      {
        question: "What does ShineSquad cost, and how quickly can it go live?",
        answer:
          "The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.",
      },
    ],
  },
  related: {
    heading: ["Explore another cleaning website design."],
    intro:
      "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: { crystalclean: "Commercial and office cleaning" },
  },
  close: {
    heading: { lead: "Make ShineSquad", accent: "your next website.", breakBefore: false },
    description:
      "A website shaped around your business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor schoonmaakbedrijven voor particulieren | ShineSquad",
    description:
      "Ontdek ShineSquad: een website voor schoonmaakbedrijven voor particulieren, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor schoonmaakbedrijven voor particulieren",
    subline: "Geef mensen vertrouwen om je binnen te laten.",
    description:
      "Laat zien wie bij hen thuis komt schoonmaken, wat je diensten inhouden en hoe ze eenvoudig contact opnemen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Kruimelpad", allDesigns: "Alle ontwerpen" },
  preview: {
    devicesLabel: "Schermkeuze",
    devices: { desktop: "Computer", tablet: "Tablet", mobile: "Mobiel" },
    openInBrowser: "Bekijk in je browser",
    cta: "Kies dit ontwerp",
    browserLabel: "ShineSquad · Websitevoorbeeld",
    caption:
      "Bekijk ShineSquad met Sage Cleaning Co. als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: { lead: "Wek vertrouwen.", accent: "Vóór de eerste schoonmaak.", breakBefore: true },
    intro:
      "Wie iemand thuis laat schoonmaken, wil weten wie er komt en wat er wordt gedaan. Met ShineSquad stel je jezelf voor, maak je verwachtingen duidelijk en help je klanten een passende schoonmaak aan te vragen.",
    cards: [
      {
        icon: "document",
        title: "Maak je diensten duidelijk.",
        body: "Leg het verschil uit tussen een vaste schoonmaak, een grote schoonmaak en schoonmaak rond een verhuizing. Benoem wat erbij hoort, wat apart moet worden aangevraagd en hoe klanten hun wensen bespreken.",
      },
      {
        icon: "people",
        title: "Stel de mensen voor die thuis langskomen.",
        body: "Laat je team zien en leg uit hoe je omgaat met toegang, persoonlijke spullen, huisdieren en bewoners die thuis zijn. Beschrijf je echte werkafspraken, zodat klanten weten waar ze aan toe zijn.",
      },
      {
        icon: "star",
        title: "Laat je werk voor je spreken.",
        body: "Deel echte klantbeoordelingen en foto’s die je mag publiceren. Geef herkenbare voorbeelden van je werk zonder voor iedere woning hetzelfde resultaat te beloven.",
      },
      {
        icon: "calendar",
        title: "Maak een eerste aanvraag eenvoudig.",
        body: "Laat mensen hun postcode, woninggrootte, gewenste frequentie en schoonmaakwensen doorgeven. Maak contact en afspraken ook op een telefoon makkelijk bereikbaar. Daarna bevestig je samen de werkzaamheden en beschikbaarheid.",
      },
    ],
  },
  personal: {
    heading: { lead: "Jouw team. Jouw aanpak.", accent: "Jouw website.", breakBefore: true },
    intro:
      "We stemmen ShineSquad af op de woningen die je schoonmaakt, de mensen achter je bedrijf en de praktische vragen van je klanten.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je schoonmaakdiensten, inbegrepen werk en extra mogelijkheden",
      "Foto’s en een kennismaking met je team",
      "Je afspraken over schoonmaakmiddelen, toegang en huisdieren",
      "Je werkgebied en contactgegevens",
      "Echte beoordelingen en voor-en-nafoto’s die je mag delen",
      "Je prijsopbouw en afspraken over afzeggen",
    ],
    imageAlt:
      "Voorbeeld van het ShineSquad-websiteontwerp voor schoonmaakbedrijven voor particulieren",
    imageCaption: "ShineSquad, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: { lead: "Je vragen", accent: "beantwoord.", breakBefore: false },
    intro:
      "Vragen over ShineSquad? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is ShineSquad een websiteontwerp dat ik zelf installeer?",
        answer:
          "Nee. Wij passen je website aan en zetten deze online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren of te onderhouden.",
      },
      {
        question: "Waarom past ShineSquad bij schoonmaak voor particulieren?",
        answer:
          "Je kunt je schoonmakers voorstellen, verschillende diensten toelichten en praktische vragen beantwoorden voordat iemand je thuis uitnodigt. We stemmen het huidige voorbeeld, met woningen en kantoren, af op jouw particuliere diensten, werkgebied en werkafspraken.",
      },
      {
        question: "Kan ik vaste schoonmaak en een eenmalige grote schoonmaak apart uitleggen?",
        answer:
          "Ja. We kunnen per dienst de werkzaamheden, frequentie en uitzonderingen beschrijven, zodat klanten een passende keuze maken. We gebruiken jouw echte aanbod en prijsopbouw. Hangt de prijs af van de woning en de staat ervan? Leg dan uit hoe je dit beoordeelt voordat je het werk bevestigt.",
      },
      {
        question: "Kunnen klanten via de website een schoonmaak regelen?",
        answer:
          "Ja. Aanvragen en afspraakmogelijkheden zijn verbonden met Growth Rocket Hub. Tijdens de inrichting spreken we af hoe klanten een schoonmaak aanvragen of boeken. Je volgt aanvragen op, beheert contacten en afspraken en maakt offertes en facturen. Beschikbaarheid en werkzaamheden moeten aansluiten op je eigen werkafspraken.",
      },
      {
        question: "Zit er een app bij om schoonmakers te volgen of personeel in te plannen?",
        answer:
          "Growth Rocket biedt je website en Hub voor aanvragen, afspraken, contacten, offertes en facturen. Live volgen van schoonmakers, personeelsplanning en een aparte klantenapp worden niet als standaard aangeboden. Heb je dit nodig of wil je bestaande software koppelen? Dan bespreken we een oplossing op maat.",
      },
      {
        question: "Wat moeten klanten weten vóór de eerste schoonmaak?",
        answer:
          "Leg uit wat je schoonmaakt, of je middelen meeneemt, hoe je toegang afspreekt en hoe je omgaat met huisdieren of bewoners die thuis zijn. Vermeld je eigen afspraken over verplaatsen en afzeggen. Zo zijn de verwachtingen duidelijk, zonder iets te beloven wat je niet aanbiedt.",
      },
      {
        question: "Kan ik mijn huisstijl behouden en krijg ik hulp na oplevering?",
        answer:
          "Ja. We gebruiken je logo, kleuren, team en dienstinformatie. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub dien je een supportverzoek in als je hulp nodig hebt.",
      },
      {
        question: "Wat kost ShineSquad en hoe snel kan mijn website online?",
        answer:
          "Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.",
      },
    ],
  },
  related: {
    heading: ["Bekijk een ander schoonmaakontwerp."],
    intro:
      "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: { crystalclean: "Schoonmaak van kantoren en bedrijfspanden" },
  },
  close: {
    heading: {
      lead: "Maak van ShineSquad",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description:
      "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const shinesquad: Record<Locale, PageOwnCopy> = { en, nl };
