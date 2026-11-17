import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * PhysioCare — physiotherapy practices. Source: "PhysioCare — Physiotherapy Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/physiotherapy.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Physiotherapy Website Design | PhysioCare | Growth Rocket",
    description: "Explore PhysioCare, a website design for physiotherapy practices, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for physiotherapy practices",
    subline: "Help patients feel informed before their first visit.",
    description: "Introduce your practice, explain the care you offer and make it easy to ask about an appointment. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "PhysioCare · Design preview",
    caption: "Explore PhysioCare using Restore Physiotherapy as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Build confidence",
      accent: "before the first appointment.",
      breakBefore: false,
    },
    intro: "Someone choosing a physiotherapist needs more than a treatment list. Help them understand your approach, meet the team and know what to expect when they contact you.",
    cards: [
      {
        icon: "document",
        title: "Explain your areas of care",
        body: "Describe the treatments your practice actually offers in plain language. Help visitors understand who each service is intended for without promising a particular recovery outcome.",
      },
      {
        icon: "people",
        title: "Introduce your practitioners",
        body: "Present your therapists, their verified qualifications and their areas of focus, with photographs that help patients recognise who they will meet.",
      },
      {
        icon: "star",
        title: "Prepare people for their first visit",
        body: "Explain how an initial appointment works, what to bring and where to find your practice. Include practical access information that reduces uncertainty.",
      },
      {
        icon: "calendar",
        title: "Offer a clear route to contact",
        body: "Let visitors ask about availability or request an appointment. Keep administrative enquiries separate from clinical information and advice.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your practice. Your approach.",
      accent: "Your website.",
      breakBefore: false,
    },
    intro: "We adapt PhysioCare to your practice, your team and the information patients need before they contact you.",
    items: [
      "Your practice name, logo, colours and photographs.",
      "Your actual treatments and specialisms, reviewed by your practice.",
      "Therapist profiles with verified qualifications and registrations.",
      "Clear first-visit information, fees and your own reimbursement guidance.",
      "Accessibility, parking, opening hours and details for each practice location.",
      "Genuine patient feedback, published only with appropriate permission.",
      "A clear appointment or enquiry route, with clinical records kept in your appropriate care system.",
    ],
    imageAlt: "PhysioCare website design preview for physiotherapy practices",
    imageCaption: "PhysioCare, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about PhysioCare? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is PhysioCare suitable for an independent physiotherapy practice?",
        answer: "Yes. We can adapt the design for an independent practitioner or a practice with several therapists. The Restore example branding and sample clinic details are replaced with your own approved information.",
      },
      {
        question: "Can I explain my treatments and specialisms?",
        answer: "Yes. We organise the services you actually provide and use clear language for visitors. Your practice reviews clinical wording, qualifications and any statements about treatment outcomes before publication.",
      },
      {
        question: "Can patients request an appointment online?",
        answer: "Yes. Growth Rocket includes appointment and enquiry capabilities. We agree your administrative booking flow before launch. Do not treat a general website form as a clinical intake or medical-record system.",
      },
      {
        question: "Does Growth Rocket replace my patient-record software?",
        answer: "No. Growth Rocket Hub supports everyday business administration. Clinical records, treatment notes and healthcare-specific workflows should remain in the appropriate system. Any connection to existing practice software needs separate assessment and confirmation.",
      },
      {
        question: "Can I show fees, insurance information and practitioner registrations?",
        answer: "Yes. Supply current, verified information for your practice. State your own fees and arrangements clearly, without implying every patient or treatment is reimbursed. Review these details whenever your arrangements change.",
      },
      {
        question: "Can I include several practice locations?",
        answer: "We can plan clear location information, including address, access, opening hours and which services are available where. Any additional page scope or location-specific booking requirements should be agreed before setup.",
      },
      {
        question: "Can the page help patients find the practice locally?",
        answer: "Clear information about your actual location, practitioners and services helps visitors assess relevance and supports local search context. It does not guarantee rankings, patient numbers or treatment outcomes.",
      },
      {
        question: "What does PhysioCare cost, and how quickly can it go live?",
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
      primeabode: "Real estate",
    },
  },
  close: {
    heading: {
      lead: "Make PhysioCare",
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
    title: "Website voor fysiotherapeuten | PhysioCare",
    description: "Ontdek PhysioCare: een website voor fysiotherapiepraktijken, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor fysiotherapiepraktijken",
    subline: "Geef patiënten duidelijkheid vóór hun eerste bezoek.",
    description: "Stel je praktijk voor, leg uit welke zorg je biedt en maak het makkelijk om contact op te nemen voor een afspraak. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "PhysioCare · Websitevoorbeeld",
    caption: "Bekijk PhysioCare met Restore Physiotherapy als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Geef vertrouwen",
      accent: "vóór de eerste afspraak.",
      breakBefore: false,
    },
    intro: "Wie een fysiotherapeut zoekt, wil meer weten dan welke behandelingen er zijn. Maak je aanpak duidelijk, stel je team voor en leg uit wat iemand kan verwachten bij het eerste contact.",
    cards: [
      {
        icon: "document",
        title: "Leg je zorgaanbod uit",
        body: "Beschrijf in begrijpelijke taal welke behandelingen je praktijk daadwerkelijk biedt. Maak duidelijk voor wie ze bedoeld zijn, zonder een bepaald herstelresultaat te beloven.",
      },
      {
        icon: "people",
        title: "Stel je fysiotherapeuten voor",
        body: "Toon je therapeuten, hun gecontroleerde kwalificaties en aandachtsgebieden. Met herkenbare foto’s weten patiënten wie ze kunnen ontmoeten.",
      },
      {
        icon: "star",
        title: "Bereid het eerste bezoek voor",
        body: "Vertel hoe een eerste afspraak verloopt, wat iemand meeneemt en hoe je praktijk bereikbaar is. Praktische informatie neemt onzekerheid weg.",
      },
      {
        icon: "calendar",
        title: "Maak contact duidelijk",
        body: "Laat bezoekers informeren naar beschikbaarheid of een afspraak aanvragen. Houd praktische aanvragen gescheiden van medische informatie en advies.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw praktijk. Jouw aanpak.",
      accent: "Jouw website.",
      breakBefore: false,
    },
    intro: "We stemmen PhysioCare af op je praktijk, je team en de informatie die patiënten nodig hebben voordat ze contact opnemen.",
    items: [
      "Je praktijknaam, logo, kleuren en foto’s.",
      "Je behandelingen en specialisaties, inhoudelijk gecontroleerd door je praktijk.",
      "Therapeutprofielen met gecontroleerde kwalificaties en registraties.",
      "Duidelijke informatie over het eerste bezoek, tarieven en je eigen uitleg over vergoeding.",
      "Toegankelijkheid, parkeren, openingstijden en gegevens per praktijklocatie.",
      "Echte ervaringen van patiënten, alleen gepubliceerd met passende toestemming.",
      "Een duidelijke afspraak- of contactroute; medische dossiers blijven in je daarvoor bestemde zorgsysteem.",
    ],
    imageAlt: "Voorbeeld van het PhysioCare-websiteontwerp voor fysiotherapiepraktijken",
    imageCaption: "PhysioCare, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over PhysioCare? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Past PhysioCare bij een zelfstandige fysiotherapiepraktijk?",
        answer: "Ja. We kunnen het ontwerp afstemmen op een zelfstandige fysiotherapeut of een praktijk met meerdere behandelaars. We vervangen Restore en de voorbeeldgegevens door jouw goedgekeurde praktijkinformatie.",
      },
      {
        question: "Kan ik behandelingen en specialisaties toelichten?",
        answer: "Ja. We maken je werkelijke zorgaanbod overzichtelijk en gebruiken begrijpelijke taal. Je praktijk controleert medische formuleringen, kwalificaties en uitspraken over behandelresultaten vóór publicatie.",
      },
      {
        question: "Kunnen patiënten online een afspraak aanvragen?",
        answer: "Ja. Growth Rocket biedt mogelijkheden voor afspraken en aanvragen. We spreken vóór oplevering af hoe de praktische afspraakroute werkt. Een algemeen websiteformulier is geen medische intake of patiëntendossier.",
      },
      {
        question: "Vervangt Growth Rocket mijn patiëntendossiersysteem?",
        answer: "Nee. Growth Rocket Hub ondersteunt de dagelijkse bedrijfsvoering. Medische dossiers, behandelnotities en zorgspecifieke processen blijven in het daarvoor bestemde systeem. Een koppeling met bestaande praktijksoftware vraagt een aparte beoordeling en bevestiging.",
      },
      {
        question: "Kan ik tarieven, vergoedingsinformatie en registraties tonen?",
        answer: "Ja. Lever actuele, gecontroleerde informatie over je praktijk aan. Vermeld je tarieven en afspraken duidelijk, zonder te suggereren dat elke patiënt of behandeling voor vergoeding in aanmerking komt. Werk dit bij als je afspraken veranderen.",
      },
      {
        question: "Kan ik meerdere praktijklocaties opnemen?",
        answer: "We kunnen locatie-informatie overzichtelijk presenteren, zoals adres, toegankelijkheid, openingstijden en het aanbod per locatie. Extra pagina’s en locatiespecifieke afspraakmogelijkheden spreken we vooraf af.",
      },
      {
        question: "Helpt de pagina om mijn praktijk lokaal te vinden?",
        answer: "Duidelijke informatie over je echte locatie, therapeuten en behandelingen helpt bezoekers beoordelen of je praktijk past en geeft lokale context voor zoekmachines. Dit garandeert geen zoekposities, patiëntenaantallen of behandelresultaten.",
      },
      {
        question: "Wat kost PhysioCare en hoe snel kan mijn website online?",
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
      primeabode: "Makelaardij",
    },
  },
  close: {
    heading: {
      lead: "Maak van PhysioCare",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const physiotherapy: Record<Locale, PageOwnCopy> = { en, nl };
