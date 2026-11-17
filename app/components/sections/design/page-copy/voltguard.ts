import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * VoltGuard — electrical inspection businesses. Source: "VoltGuard — Electrical Inspection Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/voltguard.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Electrical Inspection Website Design | VoltGuard | Growth Rocket",
    description: "Explore VoltGuard, a website design for electrical inspection businesses, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for electrical inspection businesses",
    subline: "Make your inspection expertise clear from the first visit.",
    description: "Explain what you inspect, who you work for and what clients can expect from a visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "VoltGuard · Design preview",
    caption: "Explore VoltGuard using VakMan Electrical as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Make the scope clear.",
      accent: "Before the inspection.",
      breakBefore: true,
    },
    intro: "Property owners and managers need to understand what an inspection covers, who carries it out and what they receive afterwards. VoltGuard gives you space to answer those questions before an enquiry.",
    cards: [
      {
        icon: "document",
        title: "Explain the inspections you offer.",
        body: "Give each inspection or testing service a clear description, including the types of property or equipment it covers. Help clients choose the right starting point for their enquiry.",
      },
      {
        icon: "people",
        title: "Show the expertise behind the checks.",
        body: "Introduce your inspectors and their relevant, verified qualifications. Explain your working method and any preparation or access arrangements clients need to know about.",
      },
      {
        icon: "star",
        title: "Make the outcome understandable.",
        body: "Explain what clients receive after the inspection and how you discuss findings and next steps. A redacted sample report can show the format where you have permission to share it.",
      },
      {
        icon: "calendar",
        title: "Ask for the details that matter.",
        body: "Guide clients to describe the property, location and inspection requirement. This gives you a useful starting point to clarify the scope, prepare a quote and arrange a visit.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your expertise. Your approach.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "We adapt VoltGuard to the inspections you carry out, the clients you serve and the way you explain your findings.",
    items: [
      "Your logo, colours and company story",
      "Your inspection services and their scope",
      "The property types and clients you work with",
      "Your inspectors and verified qualifications",
      "Your preparation, access and reporting process",
      "Genuine client reviews and permitted sample reports",
      "Your service area and inspection enquiry details",
    ],
    imageAlt: "VoltGuard website design preview for electrical inspection businesses",
    imageCaption: "VoltGuard, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about VoltGuard? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is VoltGuard a design I download and install myself?",
        answer: "No. We tailor and launch it as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.",
      },
      {
        question: "How is VoltGuard adapted for an inspection business?",
        answer: "We shape the services, inspector profiles and enquiry content around your inspection work. The current preview shows a broader electrical business; its content is adapted to your actual inspections and clients before your website goes live.",
      },
      {
        question: "Can I explain different inspection scopes?",
        answer: "Yes. We can describe the inspections and testing you actually offer, the properties or equipment covered and what is included. Any references to standards, certifications or client requirements should use wording verified by your business.",
      },
      {
        question: "Can clients request an inspection online?",
        answer: "Yes. Enquiries and appointment options connect to Growth Rocket Hub. We agree the form information and booking setup during onboarding. You can clarify the scope, manage the appointment and prepare quotes and invoices in the Hub.",
      },
      {
        question: "Can I show an example of an inspection report?",
        answer: "Yes, as website content where you own the material or have permission to publish it. Remove customer, property and other confidential details first. We can explain the report format and how you discuss the findings without suggesting every inspection produces the same result.",
      },
      {
        question: "Does Growth Rocket produce inspection reports or certificates?",
        answer: "Inspection-report generation and certification software are not part of the standard package. Growth Rocket helps with enquiries, appointments, customer contacts, quotes and invoices. If you need a connection to specialist software, we can discuss that separately.",
      },
      {
        question: "Can I keep my branding and who maintains the website?",
        answer: "Yes. We adapt the design to your company identity, team and services, and you can retain your domain. Hosting, SSL, technical maintenance and ongoing support are handled for you. You can raise support requests through the Hub.",
      },
      {
        question: "What does VoltGuard cost, and how quickly can it go live?",
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
      sparkfix: "Domestic repairs and installations",
      circuitpro: "Commercial electrical projects",
    },
  },
  close: {
    heading: {
      lead: "Make VoltGuard",
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
    title: "Website voor elektrotechnische inspectiebedrijven | VoltGuard",
    description: "Ontdek VoltGuard: een website voor elektrotechnische inspectiebedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor elektrotechnische inspectiebedrijven",
    subline: "Laat direct zien wat jouw inspectiebedrijf te bieden heeft.",
    description: "Maak duidelijk wat je inspecteert, voor wie je werkt en wat klanten van een bezoek kunnen verwachten. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "VoltGuard · Websitevoorbeeld",
    caption: "Bekijk VoltGuard met VakMan Electrical als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Maak de opdracht duidelijk.",
      accent: "Vóór de inspectie.",
      breakBefore: true,
    },
    intro: "Pandeigenaren en beheerders willen weten wat een inspectie omvat, wie die uitvoert en wat ze na afloop ontvangen. Met VoltGuard geef je daar al vóór de aanvraag duidelijkheid over.",
    cards: [
      {
        icon: "document",
        title: "Leg uit welke inspecties je uitvoert.",
        body: "Geef elke inspectie of meting een duidelijke omschrijving en benoem voor welke panden of apparatuur die bedoeld is. Zo vinden klanten een passend startpunt voor hun aanvraag.",
      },
      {
        icon: "people",
        title: "Laat zien wie de controles uitvoert.",
        body: "Stel je inspecteurs voor en vermeld hun relevante, aantoonbare kwalificaties. Leg je werkwijze uit en vertel welke voorbereiding of toegang tot het pand nodig is.",
      },
      {
        icon: "star",
        title: "Maak de uitkomst begrijpelijk.",
        body: "Vertel wat klanten na de inspectie ontvangen en hoe je bevindingen en vervolgstappen bespreekt. Een geanonimiseerd voorbeeldrapport kan de opzet verduidelijken als je het mag delen.",
      },
      {
        icon: "calendar",
        title: "Vraag om relevante informatie.",
        body: "Laat klanten het pand, de locatie en de gewenste inspectie beschrijven. Zo heb je een goed startpunt om de opdracht af te stemmen, een offerte te maken en een bezoek te plannen.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw expertise. Jouw aanpak.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "We stemmen VoltGuard af op de inspecties die je uitvoert, je klanten en de manier waarop je bevindingen toelicht.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je inspectiediensten en wat ze omvatten",
      "De soorten panden en klanten waarvoor je werkt",
      "Je inspecteurs en aantoonbare kwalificaties",
      "Je werkwijze voor voorbereiding, toegang en rapportage",
      "Echte klantbeoordelingen en voorbeeldrapporten die je mag delen",
      "Je werkgebied en informatie voor inspectieaanvragen",
    ],
    imageAlt: "Voorbeeld van het VoltGuard-websiteontwerp voor elektrotechnische inspectiebedrijven",
    imageCaption: "VoltGuard, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over VoltGuard? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is VoltGuard een ontwerp dat ik zelf download en installeer?",
        answer: "Nee. Wij passen het aan en zetten het online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.",
      },
      {
        question: "Hoe wordt VoltGuard afgestemd op een inspectiebedrijf?",
        answer: "We richten de diensten, inspecteursprofielen en aanvraaginformatie in rond jouw inspectiewerk. Het huidige voorbeeld toont een breder elektrotechnisch bedrijf. Voordat je website online gaat, stemmen we de inhoud af op jouw inspecties en klanten.",
      },
      {
        question: "Kan ik verschillende soorten inspecties toelichten?",
        answer: "Ja. We kunnen de inspecties en metingen beschrijven die je daadwerkelijk aanbiedt, voor welke panden of apparatuur ze bedoeld zijn en wat erbij hoort. Verwijzingen naar normen, certificeringen of eisen van klanten moeten door je bedrijf zijn gecontroleerd.",
      },
      {
        question: "Kunnen klanten online een inspectie aanvragen?",
        answer: "Ja. Aanvragen en afspraakmogelijkheden zijn verbonden met Growth Rocket Hub. Tijdens de inrichting stemmen we het formulier en de afspraakmogelijkheden af. In de Hub verduidelijk je de opdracht, beheer je de afspraak en maak je offertes en facturen op.",
      },
      {
        question: "Kan ik een voorbeeld van een inspectierapport tonen?",
        answer: "Ja, als inhoud op je website, wanneer je het materiaal zelf bezit of toestemming hebt om het te publiceren. Verwijder eerst klantgegevens, pandgegevens en andere vertrouwelijke informatie. We kunnen de rapportopzet en het bespreken van bevindingen toelichten zonder te suggereren dat elke inspectie dezelfde uitkomst heeft.",
      },
      {
        question: "Maakt Growth Rocket inspectierapporten of certificaten?",
        answer: "Het maken van inspectierapporten en certificaten hoort niet bij het standaardpakket. Growth Rocket helpt je met aanvragen, afspraken, contacten, offertes en facturen. Een koppeling met gespecialiseerde software kunnen we apart bespreken.",
      },
      {
        question: "Kan ik mijn huisstijl behouden en wie onderhoudt de website?",
        answer: "Ja. We stemmen het ontwerp af op je huisstijl, team en diensten. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn voor je geregeld. Via de Hub dien je een supportverzoek in.",
      },
      {
        question: "Wat kost VoltGuard en hoe snel kan mijn website online?",
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
      sparkfix: "Reparaties en installaties in woningen",
      circuitpro: "Zakelijke elektrotechnische projecten",
    },
  },
  close: {
    heading: {
      lead: "Maak van VoltGuard",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const voltguard: Record<Locale, PageOwnCopy> = { en, nl };
