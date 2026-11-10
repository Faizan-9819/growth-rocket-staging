import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * SunHarbor — solar installers. Source: "SunHarbor — Solar Installer Design
 * Page Copy (1).docx" (16 October 2026); content reference with the previous
 * text and the implementation notes: content/design-pages/sunharbor.md
 *
 * SunHarbor is the only solar design, so its "other designs" fold shows other
 * trades; the document's cards and labels are written for exactly that.
 *
 * Sections 6–8 are the shared master copy (./master.ts), merged in by
 * `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Solar Installer Website Design | SunHarbor | Growth Rocket",
    description:
      "Explore SunHarbor, a website design for solar installers with space for your services and projects, plus Growth Rocket Hub, hosting, maintenance and support.",
  },
  hero: {
    label: "Website design for solar installers",
    subline: "A website designed for solar installers.",
    description:
      "Show what you install, share your projects and make it easy to get in touch. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Breadcrumb", allDesigns: "All designs" },
  preview: {
    devicesLabel: "Website preview size",
    devices: { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" },
    openInBrowser: "Preview in browser",
    cta: "Start with this design",
    browserLabel: "SunHarbor · Design preview",
    caption:
      "Explore SunHarbor using Verde Techniek as the example business. We adapt the branding, services and content to your solar installation company.",
  },
  benefits: {
    heading: {
      lead: "Build confidence.",
      accent: "Before the first survey.",
      breakBefore: true,
    },
    intro:
      "Before asking for a quote, customers want to understand what you install, see your work and know what happens next. SunHarbor gives you space to answer those questions clearly.",
    cards: [
      {
        icon: "document",
        title: "Explain what you install.",
        body: "Present your solar installations and any related services you offer. Help homeowners and business customers understand which services are relevant to their property.",
      },
      {
        icon: "people",
        title: "Show how the work happens.",
        body: "Explain your process, from the initial enquiry and site assessment to the quote, installation and handover. Give customers a clear idea of what to expect.",
      },
      {
        icon: "star",
        title: "Let your projects speak.",
        body: "Show completed installations with real photographs, a short project description and genuine customer feedback. Add verified qualifications to help visitors get to know your business.",
      },
      {
        icon: "calendar",
        title: "Make the first enquiry simple.",
        body: "Keep contact details and enquiry options easy to find, including on a phone. Let customers ask for advice or request a quote without having to search for the next step.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your business. Your identity.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro:
      "SunHarbor is the starting point. We shape the website around your solar installation business, the customers you work with and the areas you cover.",
    items: [
      "Your logo, colours and company story",
      "Your solar installations and related services",
      "Your residential or commercial customer focus",
      "Your team, project photographs and installation examples",
      "Your service areas and contact details",
      "Your genuine reviews and verified qualifications",
      "Your process, from initial assessment to aftercare",
    ],
    imageAlt: "SunHarbor website design preview for a solar installation business",
    imageCaption: "SunHarbor, shaped around your installation business.",
  },
  faq: {
    heading: { lead: "Your questions", accent: "answered.", breakBefore: false },
    intro:
      "Have a question about SunHarbor? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is SunHarbor a design I download and build myself?",
        answer:
          "No. We tailor and launch your website as part of Growth Rocket: a complete online business system. Your website comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You do not need to install the design yourself.",
      },
      {
        question: "Why does SunHarbor suit a solar installation business?",
        answer:
          "It gives you room to explain your services, show completed installations and introduce your team and process. Customers can see what you do and how to get in touch. We adapt the example content to the work your business actually carries out.",
      },
      {
        question: "Can I present both residential and commercial installations?",
        answer:
          "Yes. We can adapt the service and customer sections to explain the work you do for homeowners and businesses. Your project examples can show the type of property, the work completed and the areas you serve.",
      },
      {
        question: "Can customers request a quote or arrange a site assessment?",
        answer:
          "Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage appointments, and create quotes and invoices. We agree how customers request an assessment during onboarding. This does not mean the website automatically calculates an installation price.",
      },
      {
        question: "Can I include batteries, charging points or other services?",
        answer:
          "Yes, if your business offers them. We can adapt the service content to explain your additional installations alongside solar. Specialist calculators, technical assessments and integrations are separate requirements to discuss; they are not included by default.",
      },
      {
        question: "Can I use my branding, projects and existing domain?",
        answer:
          "Yes. We adapt the design to your logo, colours, services, project photographs and service areas. You can keep using your existing domain. Send your business details and any genuine reviews or verified qualifications you want to include; we guide you through the setup.",
      },
      {
        question: "Who looks after the website after launch?",
        answer:
          "We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we can discuss the scope with you.",
      },
      {
        question: "What does SunHarbor cost, and how quickly can it go live?",
        answer:
          "The Growth Rocket package costs €69 per month or €690 per year, plus a €290 one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.",
      },
    ],
  },
  related: {
    heading: ["Explore other website designs."],
    intro:
      "SunHarbor is currently our solar installation design. You can also explore how the same Growth Rocket package works for other businesses.",
    cardSubtitles: {
      dentalcare: "Dentistry",
      shinesquad: "Cleaning",
      physiotherapy: "Health and wellbeing",
    },
  },
  close: {
    heading: { lead: "Make SunHarbor", accent: "your next website.", breakBefore: false },
    description:
      "A website shaped around your solar installation business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor zonnepaneleninstallateurs | SunHarbor",
    description:
      "Ontdek SunHarbor: een websiteontwerp voor zonnepaneleninstallateurs, met ruimte voor je diensten en projecten. Inclusief Growth Rocket Hub en onderhoud.",
  },
  hero: {
    label: "Websiteontwerp voor zonnepaneleninstallateurs",
    subline: "Een website voor zonnepaneleninstallateurs.",
    description:
      "Laat zien wat je installeert, toon je projecten en maak contact opnemen eenvoudig. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    highlight: "Growth Rocket Hub",
  },
  crumb: { ariaLabel: "Kruimelpad", allDesigns: "Alle ontwerpen" },
  preview: {
    devicesLabel: "Schermkeuze",
    devices: { desktop: "Computer", tablet: "Tablet", mobile: "Mobiel" },
    openInBrowser: "Bekijk in je browser",
    cta: "Kies dit ontwerp",
    browserLabel: "SunHarbor · Websitevoorbeeld",
    caption:
      "Bekijk SunHarbor met Verde Techniek als voorbeeldbedrijf. We passen de huisstijl, diensten en inhoud aan jouw zonnepanelenbedrijf aan.",
  },
  benefits: {
    heading: {
      lead: "Wek vertrouwen.",
      accent: "Al vóór het eerste bezoek.",
      breakBefore: true,
    },
    intro:
      "Voordat klanten een offerte aanvragen, willen ze weten wat je installeert, je werk zien en begrijpen hoe je te werk gaat. SunHarbor geeft je de ruimte om die vragen duidelijk te beantwoorden.",
    cards: [
      {
        icon: "document",
        title: "Maak duidelijk wat je installeert.",
        body: "Laat zien welke zonnepaneleninstallaties en aanvullende diensten je aanbiedt. Help particuliere en zakelijke klanten begrijpen wat je voor hun woning of bedrijfspand kunt betekenen.",
      },
      {
        icon: "people",
        title: "Laat zien hoe je werkt.",
        body: "Leg je werkwijze uit, van de eerste aanvraag en beoordeling op locatie tot de offerte, installatie en oplevering. Zo weten klanten wat ze kunnen verwachten.",
      },
      {
        icon: "star",
        title: "Laat je projecten spreken.",
        body: "Toon afgeronde installaties met eigen foto’s, een korte projectbeschrijving en echte klantbeoordelingen. Voeg aantoonbare vakbekwaamheid toe, zodat bezoekers je bedrijf leren kennen.",
      },
      {
        icon: "calendar",
        title: "Maak de eerste aanvraag eenvoudig.",
        body: "Zorg dat contactgegevens en aanvraagmogelijkheden makkelijk te vinden zijn, ook op een mobiel. Zo kunnen klanten advies vragen of een offerte aanvragen zonder te zoeken naar de volgende stap.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw bedrijf. Jouw identiteit.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro:
      "SunHarbor is het vertrekpunt. We stemmen de website af op jouw zonnepanelenbedrijf, de klanten voor wie je werkt en je werkgebied.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je zonnepaneleninstallaties en aanvullende diensten",
      "Je aanbod voor particuliere of zakelijke klanten",
      "Je team, projectfoto’s en voorbeelden van installaties",
      "Je werkgebied en contactgegevens",
      "Echte klantbeoordelingen en aantoonbare vakbekwaamheid",
      "Je werkwijze, van eerste beoordeling tot nazorg",
    ],
    imageAlt: "Voorbeeld van het SunHarbor-websiteontwerp voor een zonnepanelenbedrijf",
    imageCaption: "SunHarbor, afgestemd op jouw installatiebedrijf.",
  },
  faq: {
    heading: { lead: "Je vragen", accent: "beantwoord.", breakBefore: false },
    intro:
      "Heb je nog een vraag over SunHarbor? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is SunHarbor een ontwerp dat ik zelf download en bouw?",
        answer:
          "Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt je website samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je hoeft het ontwerp niet zelf te installeren.",
      },
      {
        question: "Waarom past SunHarbor bij een zonnepanelenbedrijf?",
        answer:
          "Het ontwerp biedt ruimte om je diensten uit te leggen, afgeronde installaties te tonen en je team en werkwijze voor te stellen. Klanten zien wat je doet en hoe ze contact opnemen. We stemmen de voorbeeldinhoud af op het werk dat jouw bedrijf daadwerkelijk uitvoert.",
      },
      {
        question: "Kan ik installaties voor particulieren én bedrijven laten zien?",
        answer:
          "Ja. We kunnen de onderdelen over diensten en klanten afstemmen op je werk voor particulieren en bedrijven. Met projectvoorbeelden laat je zien om welk type pand het gaat, wat je hebt uitgevoerd en in welk gebied je werkt.",
      },
      {
        question: "Kunnen klanten een offerte aanvragen of een bezoek op locatie plannen?",
        answer:
          "Ja. Aanvragen via je website komen in Growth Rocket Hub terecht. Daar kun je ze opvolgen, afspraken beheren en offertes en facturen opmaken. Tijdens de inrichting spreken we af hoe klanten een bezoek aanvragen. De website berekent daarmee niet automatisch de prijs van een installatie.",
      },
      {
        question: "Kan ik ook thuisbatterijen, laadpunten of andere diensten opnemen?",
        answer:
          "Ja, als je bedrijf die aanbiedt. We kunnen je aanvullende installaties naast zonnepanelen toelichten. Specialistische rekenfuncties, technische beoordelingen en koppelingen vallen niet standaard binnen het pakket. Zulke wensen bespreken we apart.",
      },
      {
        question: "Kan ik mijn huisstijl, projecten en bestaande domeinnaam gebruiken?",
        answer:
          "Ja. We stemmen het ontwerp af op je logo, kleuren, diensten, projectfoto’s en werkgebied. Je kunt je bestaande domeinnaam blijven gebruiken. Stuur je bedrijfsgegevens en de echte klantbeoordelingen of aantoonbare kwalificaties die je wilt opnemen; wij begeleiden je bij de inrichting.",
      },
      {
        question: "Wie zorgt voor de website nadat die online staat?",
        answer:
          "Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig? Dan bespreken we de mogelijkheden en de omvang met je.",
      },
      {
        question: "Wat kost SunHarbor en hoe snel kan mijn website online?",
        answer:
          "Het Growth Rocket-pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.",
      },
    ],
  },
  related: {
    heading: ["Bekijk andere websiteontwerpen."],
    intro:
      "SunHarbor is op dit moment ons ontwerp voor zonnepaneleninstallateurs. Je kunt ook bekijken hoe hetzelfde Growth Rocket-pakket eruitziet voor andere bedrijven.",
    cardSubtitles: {
      dentalcare: "Tandartspraktijken",
      shinesquad: "Schoonmaakbedrijven",
      physiotherapy: "Zorg en welzijn",
    },
  },
  close: {
    heading: {
      lead: "Maak van SunHarbor",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description:
      "Een website die past bij jouw zonnepanelenbedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const sunharbor: Record<Locale, PageOwnCopy> = { en, nl };
