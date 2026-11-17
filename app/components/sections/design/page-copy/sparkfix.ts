import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * SparkFix — domestic electricians. Source: "SparkFix — Domestic Electrician Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/sparkfix.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Electrician Website Design | SparkFix | Growth Rocket",
    description: "Explore SparkFix, a website design for domestic electricians, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for domestic electricians",
    subline: "A professional website for the work you do in people’s homes.",
    description: "Show homeowners what you repair and install, where you work and how to request a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "SparkFix · Design preview",
    caption: "Explore SparkFix using Tij as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Build trust.",
      accent: "Before you arrive.",
      breakBefore: true,
    },
    intro: "A faulty socket, a tripping circuit and a planned lighting installation all start with a different question. SparkFix helps homeowners recognise the service they need and get to know the electrician behind it.",
    cards: [
      {
        icon: "document",
        title: "Make everyday electrical work clear.",
        body: "Explain repairs, lighting, rewiring and consumer-unit upgrades in language homeowners understand. Give each service a clear place so visitors can find the work they need.",
      },
      {
        icon: "people",
        title: "Show who will come to their home.",
        body: "Introduce your team and explain how a visit works, from discussing the problem to agreeing the work. Your own photographs and company story make the first contact more familiar.",
      },
      {
        icon: "star",
        title: "Let finished jobs build confidence.",
        body: "Show real examples of work in homes, with a short explanation of the job. Add genuine reviews and verified qualifications so visitors can judge your experience.",
      },
      {
        icon: "calendar",
        title: "Make the next step easy to find.",
        body: "Keep your phone number and enquiry options visible on mobile. Separate urgent contact from planned visits, with clear information about your availability and the areas you cover.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your work. Your name.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "We shape SparkFix around your electrical business, the homes you work in and the services you actually provide.",
    items: [
      "Your logo, colours and business story",
      "Your repair and installation services",
      "Your team and photographs of work in customers’ homes",
      "Your service area, availability and contact details",
      "Genuine customer reviews and video testimonials",
      "Verified qualifications and registrations",
      "Your process for enquiries, visits and quotes",
    ],
    imageAlt: "SparkFix website design preview for domestic electricians",
    imageCaption: "SparkFix, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about SparkFix? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is SparkFix a design I download and build myself?",
        answer: "No. We adapt and launch your website as part of Growth Rocket, a complete online business system. You get your professional website, Growth Rocket Hub, hosting, SSL, technical maintenance and support.",
      },
      {
        question: "Why does SparkFix suit a domestic electrician?",
        answer: "It gives homeowners a clear introduction to your repairs and installations, your team and the areas you cover. Services such as lighting, rewiring and consumer-unit work can be explained separately, with real job photographs and an easy way to get in touch.",
      },
      {
        question: "Can I distinguish urgent faults from planned work?",
        answer: "Yes. We can make your telephone contact and enquiry routes clear, and explain which services you offer urgently. The wording will reflect your actual hours and availability. Receiving an online enquiry does not automatically dispatch an electrician.",
      },
      {
        question: "Can customers book a visit and describe the job?",
        answer: "Growth Rocket includes website enquiries and appointment management through Growth Rocket Hub. During setup, we agree how customers request or book a visit and what information the form collects. You can follow up, create a quote and send an invoice from the Hub.",
      },
      {
        question: "Can I add EV charging or smart-home services?",
        answer: "Yes, if you provide them. We adapt your service content to the work you do and the qualifications you can verify. A website enquiry does not automatically assess the property or calculate an installation price; you agree the scope with the customer.",
      },
      {
        question: "What should I provide for my website?",
        answer: "Send your logo, services, service area, contact details and any team or job photographs you want to use. Include genuine reviews and verified qualifications where available. You can retain your existing domain, and we guide you through the setup.",
      },
      {
        question: "Who maintains my website after launch?",
        answer: "We handle hosting, SSL, technical maintenance and ongoing support. You can raise a support request through the Hub. Additional pages, specialist functions or connections to other software can be discussed separately.",
      },
      {
        question: "What does SparkFix cost, and how quickly can it go live?",
        answer: `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: [
      "Explore other electrical website designs.",
    ],
    intro: "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: {
      voltguard: "Electrical inspections and testing",
      circuitpro: "Commercial electrical projects",
    },
  },
  close: {
    heading: {
      lead: "Make SparkFix",
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
    title: "Website voor elektriciens | SparkFix",
    description: "Ontdek SparkFix: een website voor elektriciens voor particulieren, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor elektriciens voor particulieren",
    subline: "Een professionele website voor jouw werk in huis.",
    description: "Laat zien wat je repareert en installeert, waar je werkt en hoe klanten een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "SparkFix · Websitevoorbeeld",
    caption: "Bekijk SparkFix met Tij als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Wek vertrouwen.",
      accent: "Voordat je voor de deur staat.",
      breakBefore: true,
    },
    intro: "Een kapot stopcontact, een groep die uitvalt of nieuwe verlichting: elke klus begint met een andere vraag. SparkFix helpt bewoners de juiste dienst te vinden en kennis te maken met de elektricien achter het bedrijf.",
    cards: [
      {
        icon: "document",
        title: "Maak duidelijk waarmee je helpt.",
        body: "Leg reparaties, verlichting, bedrading en het vervangen van groepenkasten uit in begrijpelijke taal. Geef elke dienst een duidelijke plek, zodat bezoekers vinden wat ze nodig hebben.",
      },
      {
        icon: "people",
        title: "Laat zien wie er langskomt.",
        body: "Stel je team voor en leg uit hoe een bezoek verloopt, van het bespreken van het probleem tot het afspreken van het werk. Eigen foto’s en je bedrijfsverhaal maken het eerste contact vertrouwd.",
      },
      {
        icon: "star",
        title: "Laat afgeronde klussen spreken.",
        body: "Toon echte voorbeelden van werk in woningen en vertel kort wat je hebt gedaan. Voeg echte klantbeoordelingen en aantoonbare kwalificaties toe, zodat bezoekers je ervaring kunnen beoordelen.",
      },
      {
        icon: "calendar",
        title: "Maak contact opnemen eenvoudig.",
        body: "Houd je telefoonnummer en aanvraagmogelijkheden zichtbaar op mobiel. Maak onderscheid tussen spoedvragen en geplande bezoeken en vermeld je bereikbaarheid en werkgebied.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw werk. Jouw naam.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "We stemmen SparkFix af op jouw elektrotechnische bedrijf, de woningen waarin je werkt en de diensten die je daadwerkelijk aanbiedt.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je reparatie- en installatiediensten",
      "Je team en foto’s van werk bij klanten thuis",
      "Je werkgebied, bereikbaarheid en contactgegevens",
      "Echte klantbeoordelingen en videoreviews",
      "Aantoonbare kwalificaties en registraties",
      "Je werkwijze voor aanvragen, bezoeken en offertes",
    ],
    imageAlt: "Voorbeeld van het SparkFix-websiteontwerp voor elektriciens voor particulieren",
    imageCaption: "SparkFix, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over SparkFix? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is SparkFix een ontwerp dat ik zelf download en bouw?",
        answer: "Nee. Wij passen je website aan en zetten die online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je krijgt een professionele website, Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.",
      },
      {
        question: "Waarom past SparkFix bij een elektricien voor particulieren?",
        answer: "Bewoners krijgen een duidelijk beeld van je reparaties en installaties, je team en je werkgebied. Je kunt verlichting, bedrading en groepenkasten apart toelichten, met eigen klusfoto’s en een eenvoudige manier om contact op te nemen.",
      },
      {
        question: "Kan ik spoedstoringen en gepland werk apart presenteren?",
        answer: "Ja. We maken je telefonische bereikbaarheid en aanvraagmogelijkheden duidelijk en leggen uit voor welk werk je spoedhulp biedt. De tekst sluit aan op je echte openingstijden en beschikbaarheid. Een online aanvraag stuurt niet automatisch een elektricien op pad.",
      },
      {
        question: "Kunnen klanten een bezoek boeken en de klus beschrijven?",
        answer: "Growth Rocket biedt aanvragen via je website en afsprakenbeheer in Growth Rocket Hub. Tijdens de inrichting spreken we af hoe klanten een bezoek aanvragen of boeken en welke informatie het formulier verzamelt. In de Hub volg je de aanvraag op en maak je een offerte en factuur op.",
      },
      {
        question: "Kan ik laadpalen of slimme huisinstallaties toevoegen?",
        answer: "Ja, als je die diensten aanbiedt. We stemmen de inhoud af op je werkzaamheden en aantoonbare kwalificaties. Een aanvraag beoordeelt niet automatisch de woning en berekent geen installatieprijs. De omvang van het werk spreek je met de klant af.",
      },
      {
        question: "Wat moet ik aanleveren voor mijn website?",
        answer: "Stuur je logo, diensten, werkgebied, contactgegevens en eventuele team- of klusfoto’s. Voeg echte klantbeoordelingen en aantoonbare kwalificaties toe als je die hebt. Je kunt je bestaande domeinnaam behouden. Wij begeleiden je bij de inrichting.",
      },
      {
        question: "Wie onderhoudt mijn website na de oplevering?",
        answer: "Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Extra pagina’s, specifieke functies of koppelingen met andere software bespreken we apart.",
      },
      {
        question: "Wat kost SparkFix en hoe snel kan mijn website online?",
        answer: `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: [
      "Bekijk andere elektrotechnische ontwerpen.",
    ],
    intro: "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: {
      voltguard: "Elektrotechnische inspecties en metingen",
      circuitpro: "Zakelijke elektrotechnische projecten",
    },
  },
  close: {
    heading: {
      lead: "Maak van SparkFix",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const sparkfix: Record<Locale, PageOwnCopy> = { en, nl };
