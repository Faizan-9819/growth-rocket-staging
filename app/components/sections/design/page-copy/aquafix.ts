import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * AquaFix — emergency plumbers. Source: "AquaFix — Emergency Plumber Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/aquafix.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Emergency Plumber Website Design | AquaFix | Growth Rocket",
    description: "Explore AquaFix, a website design for emergency plumbers. Show your call-out area and services, with Growth Rocket Hub and technical care included.",
  },
  hero: {
    label: "Website design for emergency plumbers",
    subline: "A clear first step when customers need help.",
    description: "Help customers check whether you handle their plumbing problem, cover their address and are available to help. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "AquaFix · Design preview",
    caption: "Explore AquaFix using VakMan Loodgieters as the example business. We adapt the branding, services, availability and contact details to your business.",
  },
  benefits: {
    heading: {
      lead: "Make urgent help easier to find.",
      accent: "Make the next step clear.",
      breakBefore: true,
    },
    intro: "When a pipe bursts or water starts leaking, people need to know who to call and what happens next. Shape AquaFix around the emergencies you handle, your real call-out area and the information customers need before contacting you.",
    cards: [
      {
        icon: "document",
        title: "Show which problems you handle.",
        body: "Explain whether you attend burst pipes, major leaks, overflowing fixtures or loss of water. Separate urgent repairs from work that can wait for a planned visit.",
      },
      {
        icon: "people",
        title: "Put your availability in plain sight.",
        body: "State your actual call-out hours and service area. Help visitors check whether you cover their postcode, without implying every request receives an immediate visit.",
      },
      {
        icon: "star",
        title: "Build confidence before the call-out.",
        body: "Introduce your plumbers, genuine reviews and verified qualifications. Explain how you confirm a visit and communicate call-out charges or repair costs.",
      },
      {
        icon: "calendar",
        title: "Offer the right way to get in touch.",
        body: "Keep your phone number prominent for urgent problems. Use enquiries and appointments for suitable follow-up work, with clear expectations about when your team responds.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your call-outs. Your team.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "AquaFix is the starting point. We shape the website around the urgent plumbing work you carry out and the details customers need to decide whether to call.",
    items: [
      "Your logo, colours and company story",
      "The emergencies and repairs you handle",
      "Your call-out hours and actual service area",
      "Your team photographs and verified qualifications",
      "Genuine customer reviews and repair examples",
      "How you explain call-out charges and confirm visits",
      "Clear phone, enquiry and appointment options",
    ],
    imageAlt: "AquaFix website design preview for an emergency plumbing business",
    imageCaption: "",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about AquaFix? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is AquaFix a website design I install myself?",
        answer: "No. We tailor and launch your website as part of Growth Rocket: a complete online business system. AquaFix comes with Growth Rocket Hub, hosting, SSL, maintenance and support. You get a website built around your emergency plumbing business, rather than files to install yourself.",
      },
      {
        question: "What makes AquaFix suitable for an emergency plumber?",
        answer: "It gives urgent visitors a clear route to your services, call-out area, opening hours and contact details. We adapt the content to the problems you handle, such as burst pipes or major leaks, and explain how your team confirms a visit. Your actual availability determines what the website promises.",
      },
      {
        question: "Does AquaFix answer calls or dispatch a plumber for me?",
        answer: "No. Your team answers calls, checks availability and arranges call-outs. Growth Rocket Hub helps you manage website enquiries, appointments, customer contacts, quotes and invoices. A website enquiry does not automatically dispatch a plumber or guarantee an immediate response.",
      },
      {
        question: "Can I show different contact routes for urgent and planned work?",
        answer: "Yes. We can make your phone number prominent for urgent issues and provide an enquiry or appointment route for planned work. During setup, we agree the contact options and wording with you. Emergency hours, response expectations and call-out charges must reflect how your business actually operates.",
      },
      {
        question: "Can I follow up after a call-out and send an invoice?",
        answer: "Yes. You can manage customer contacts and create quotes and invoices in Growth Rocket Hub. Contacts are created automatically from website enquiries and appointments; you can also add contacts manually for customers who phone. Once a quote is accepted, you can convert it into an invoice.",
      },
      {
        question: "Can AquaFix use my branding, service area and existing domain?",
        answer: "Yes. We use your logo, colours, services, contact details and real service area, and you can keep your existing domain. Share your team photographs, genuine reviews, call-out hours and how you explain charges. We use those details to make the website specific to your business.",
      },
      {
        question: "Who looks after my website after launch?",
        answer: "We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we discuss the scope and any separate costs with you.",
      },
      {
        question: "What does AquaFix cost, and when can it go live?",
        answer: `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: [
      "Find the design that fits your business.",
    ],
    intro: "Compare other designs for plumbing businesses. We adapt your chosen design to your services, identity and customers.",
    cardSubtitles: {},
  },
  close: {
    heading: {
      lead: "Make AquaFix",
      accent: "your next website.",
      breakBefore: false,
    },
    description: "A website shaped around your emergency plumbing business, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor spoedloodgieters | AquaFix | Growth Rocket",
    description: "Ontdek AquaFix: een website voor spoedloodgieters. Toon je diensten, werkgebied en bereikbaarheid, met Growth Rocket Hub en technisch onderhoud.",
  },
  hero: {
    label: "Websiteontwerp voor spoedloodgieters",
    subline: "Duidelijkheid voor klanten die snel hulp nodig hebben.",
    description: "Laat klanten zien bij welke problemen je helpt, waar je komt en wanneer je bereikbaar bent. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "AquaFix · Websitevoorbeeld",
    caption: "Bekijk AquaFix met VakMan Loodgieters als voorbeeldbedrijf. We stemmen de huisstijl, diensten, bereikbaarheid en contactgegevens af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Maak hulp bij spoed vindbaar.",
      accent: "En de volgende stap duidelijk.",
      breakBefore: true,
    },
    intro: "Bij een gesprongen leiding of lekkage willen mensen weten wie ze kunnen bellen en wat er daarna gebeurt. We stemmen AquaFix af op de spoedklussen die je uitvoert, je werkgebied en de informatie die klanten nodig hebben voordat ze contact opnemen.",
    cards: [
      {
        icon: "document",
        title: "Laat zien bij welke problemen je helpt.",
        body: "Beschrijf of je helpt bij gesprongen leidingen, grote lekkages, overlopende afvoeren of het wegvallen van de watertoevoer. Maak onderscheid tussen spoedreparaties en werk dat op afspraak kan.",
      },
      {
        icon: "people",
        title: "Wees duidelijk over je bereikbaarheid.",
        body: "Vermeld je werkelijke bereikbaarheidsuren en werkgebied. Laat bezoekers nagaan of je op hun postcode komt, zonder te suggereren dat op elke aanvraag direct een bezoek volgt.",
      },
      {
        icon: "star",
        title: "Geef vertrouwen voordat je langskomt.",
        body: "Stel je loodgieters voor en toon echte beoordelingen en aantoonbare kwalificaties. Leg uit hoe je een bezoek bevestigt en hoe je voorrijkosten en reparatiekosten bespreekt.",
      },
      {
        icon: "calendar",
        title: "Bied een passende contactmogelijkheid.",
        body: "Zet je telefoonnummer duidelijk in beeld voor spoed. Gebruik aanvragen en afspraken voor passend vervolgwerk en geef aan wanneer klanten een reactie van je team kunnen verwachten.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw spoedklussen. Jouw team.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "AquaFix is het vertrekpunt. We stemmen de website af op jouw spoedwerk en de informatie die klanten nodig hebben om te bepalen of ze je bellen.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "De spoedproblemen en reparaties die je oppakt",
      "Je bereikbaarheidsuren en werkelijke werkgebied",
      "Foto’s van je team en aantoonbare kwalificaties",
      "Echte klantbeoordelingen en voorbeelden van reparaties",
      "Hoe je voorrijkosten uitlegt en bezoeken bevestigt",
      "Duidelijke mogelijkheden om te bellen, een aanvraag te doen of een afspraak te boeken",
    ],
    imageAlt: "Voorbeeld van het AquaFix-websiteontwerp voor spoedloodgieters",
    imageCaption: "",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over AquaFix? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Moet ik AquaFix zelf installeren?",
        answer: "Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt AquaFix samen met Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Je krijgt een website voor jouw loodgietersbedrijf, geen bestanden die je zelf moet installeren.",
      },
      {
        question: "Waarom past AquaFix bij een spoedloodgieter?",
        answer: "Bezoekers vinden snel je diensten, werkgebied, bereikbaarheidsuren en contactgegevens. We stemmen de inhoud af op de problemen die je oplost, zoals gesprongen leidingen of grote lekkages. Ook leggen we uit hoe je team een bezoek bevestigt. Wat je website belooft, moet passen bij je werkelijke beschikbaarheid.",
      },
      {
        question: "Beantwoordt AquaFix telefoontjes of stuurt het een loodgieter op pad?",
        answer: "Nee. Je eigen team beantwoordt telefoontjes, controleert de beschikbaarheid en plant bezoeken. In Growth Rocket Hub beheer je aanvragen via de website, afspraken, contacten, offertes en facturen. Een aanvraag via de website stuurt niet automatisch een loodgieter op pad en garandeert geen directe reactie.",
      },
      {
        question: "Kan ik spoedvragen en gepland werk een eigen contactroute geven?",
        answer: "Ja. We kunnen je telefoonnummer duidelijk tonen voor spoed en een aanvraag- of afspraakmogelijkheid bieden voor gepland werk. Tijdens de inrichting stemmen we de contactmogelijkheden en tekst met je af. Bereikbaarheidsuren bij spoed, reactietijden en voorrijkosten moeten aansluiten op je werkwijze.",
      },
      {
        question: "Kan ik na een spoedklus contact houden en een factuur sturen?",
        answer: "Ja. In Growth Rocket Hub beheer je contacten en maak je offertes en facturen op. Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken via de website. Voor klanten die bellen, kun je ook zelf een contact toevoegen. Zodra een offerte is geaccepteerd, kun je deze omzetten in een factuur.",
      },
      {
        question: "Kan ik mijn eigen huisstijl, werkgebied en domein gebruiken?",
        answer: "Ja. We gebruiken je logo, kleuren, diensten, contactgegevens en echte werkgebied. Je kunt je bestaande domein behouden. Deel ook teamfoto’s, echte beoordelingen, bereikbaarheidsuren en de manier waarop je kosten uitlegt. Daarmee maken we de website passend voor jouw bedrijf.",
      },
      {
        question: "Wie zorgt voor mijn website na de oplevering?",
        answer: "Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig, dan bespreken we de omvang en eventuele aparte kosten met je.",
      },
      {
        question: "Wat kost AquaFix en wanneer kan de website online?",
        answer: `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: [
      "Kies het ontwerp dat bij je bedrijf past.",
    ],
    intro: "Bekijk andere ontwerpen voor loodgietersbedrijven. We stemmen je keuze af op je diensten, huisstijl en klanten.",
    cardSubtitles: {},
  },
  close: {
    heading: {
      lead: "Maak van AquaFix",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website voor jouw loodgietersbedrijf en spoedklussen, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const aquafix: Record<Locale, PageOwnCopy> = { en, nl };
