import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * CrystalClean — commercial cleaning. Source: "CrystalClean — Commercial Cleaning Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/crystalclean.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Commercial Cleaning Website Design | CrystalClean | Growth Rocket",
    description: "Explore CrystalClean, a website design for commercial cleaning companies, with Growth Rocket Hub, hosting, maintenance and support. View the design and pricing.",
  },
  hero: {
    label: "Website design for commercial cleaning companies",
    subline: "Show businesses what they can expect from your cleaning team.",
    description: "Present the spaces you clean, explain how you work and make it easy to request a site visit or quote. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "CrystalClean · Design preview",
    caption: "Explore CrystalClean using Cleaning Co. as the example business. We adapt the branding, services and content to your business.",
  },
  benefits: {
    heading: {
      lead: "Build confidence.",
      accent: "Before the site visit.",
      breakBefore: true,
    },
    intro: "Office and facility managers need to know whether you can look after their premises around their working hours. CrystalClean helps you explain your service, your team and the next step towards a cleaning agreement.",
    cards: [
      {
        icon: "document",
        title: "Show the spaces you clean.",
        body: "Describe the premises and services you cover, from offices and shared areas to schools or holiday accommodation where relevant. Help clients see whether their building and cleaning needs fit your service.",
      },
      {
        icon: "people",
        title: "Explain how the work fits around theirs.",
        body: "Set out your available cleaning frequencies, access arrangements and working hours. Explain who checks the work and who the client contacts when something needs attention.",
      },
      {
        icon: "star",
        title: "Show evidence of your standards.",
        body: "Use real workplace photographs, client references and verified qualifications. A short account of the site, agreed scope and your approach tells clients more than a broad promise of spotless results.",
      },
      {
        icon: "calendar",
        title: "Start with a useful enquiry.",
        body: "Invite clients to share the location, type of premises, approximate size and preferred frequency. You can clarify requirements, arrange a visit and prepare a quote based on the work needed.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your company. Your standards.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "We shape CrystalClean around the premises you maintain, the clients you serve and the way your team works.",
    items: [
      "Your logo, colours and company story",
      "Your cleaning services, sectors and contract options",
      "Your available frequencies and access arrangements",
      "Your team, supervision and client contact process",
      "Real workplace photographs and client references",
      "Verified qualifications and relevant memberships",
      "Your service areas and quote request details",
    ],
    imageAlt: "CrystalClean website design preview for commercial cleaning companies",
    imageCaption: "CrystalClean, shaped around your business.",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about CrystalClean? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is CrystalClean a website design I download and build myself?",
        answer: "No. We adapt and launch it for you as part of Growth Rocket, a complete online business system. Your professional website comes with Growth Rocket Hub, hosting, SSL, technical maintenance and support.",
      },
      {
        question: "What makes CrystalClean suitable for commercial cleaning?",
        answer: "The design gives you room to explain your services, the premises you clean and how you organise the work. Office managers and facilities teams can see your coverage, working arrangements and contact route before requesting a visit or quote. We tailor the example sectors to those you actually serve.",
      },
      {
        question: "What should I explain about a cleaning contract?",
        answer: "Describe the tasks included, frequency, working hours, access arrangements and how clients raise a concern. If the scope depends on the premises, explain that you agree it after an enquiry or site visit. We use your own service terms rather than inventing contract conditions.",
      },
      {
        question: "Can customers request quotes and arrange site visits?",
        answer: "Yes. Website enquiries connect to Growth Rocket Hub, where you can follow up, manage customer details, create quotes and send invoices. Appointment options can support site visits. We agree the form and appointment setup during onboarding; an enquiry does not automatically calculate a cleaning quote.",
      },
      {
        question: "Does the Hub manage cleaning rotas and staff allocation?",
        answer: "The Hub supports enquiries, appointments, customer contacts, quotes and invoices. Specialist staff rostering, time tracking and cleaning inspection workflows are not presented as standard capabilities. If you need a connection to an existing workforce system, we can discuss that separately.",
      },
      {
        question: "Can I show my service areas and client references?",
        answer: "Yes. We can show the towns or regions you genuinely cover and explain the kinds of premises you maintain. Provide real references, photographs and permission to use client names or logos. We do not add locations, certifications or customer results that your business cannot substantiate.",
      },
      {
        question: "Can I keep my branding and who maintains the website?",
        answer: "Yes. We adapt CrystalClean to your identity, services and team, and you can keep your domain. Hosting, SSL, technical maintenance and ongoing support are included. You can raise support requests through the Hub.",
      },
      {
        question: "What does CrystalClean cost, and how quickly can it go live?",
        answer: `The Growth Rocket package costs ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee. Prices exclude VAT. Your website can be ready in 7 working days after we receive all required information and materials, provided you give your approvals on time.`,
      },
    ],
  },
  related: {
    heading: [
      "Explore another cleaning website design.",
    ],
    intro: "Compare the other designs in the collection. We adapt your choice to the services your business actually provides.",
    cardSubtitles: {
      shinesquad: "Home cleaning",
    },
  },
  close: {
    heading: {
      lead: "Make CrystalClean",
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
    title: "Website voor zakelijke schoonmaakbedrijven | CrystalClean",
    description: "Ontdek CrystalClean: een website voor zakelijke schoonmaakbedrijven, met Growth Rocket Hub, hosting, onderhoud en ondersteuning. Bekijk het ontwerp en de prijzen.",
  },
  hero: {
    label: "Websiteontwerp voor zakelijke schoonmaakbedrijven",
    subline: "Laat zien wat bedrijven van jouw schoonmaakteam kunnen verwachten.",
    description: "Laat zien welke panden je schoonmaakt, leg je werkwijze uit en maak een aanvraag voor een locatiebezoek of offerte eenvoudig. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "CrystalClean · Websitevoorbeeld",
    caption: "Bekijk CrystalClean met Cleaning Co. als voorbeeldbedrijf. We stemmen de huisstijl, diensten en inhoud af op jouw bedrijf.",
  },
  benefits: {
    heading: {
      lead: "Geef vertrouwen.",
      accent: "Al vóór het locatiebezoek.",
      breakBefore: true,
    },
    intro: "Kantoor- en facilitair managers willen weten of je hun pand kunt schoonhouden op tijden die bij hun organisatie passen. Met CrystalClean maak je jouw dienstverlening, team en de stap naar een schoonmaakafspraak duidelijk.",
    cards: [
      {
        icon: "document",
        title: "Laat zien welke panden je schoonmaakt.",
        body: "Beschrijf je diensten en de panden waarvoor je werkt: van kantoren en algemene ruimten tot scholen of vakantieverblijven, als die bij je aanbod horen. Zo ziet een klant of je dienstverlening past.",
      },
      {
        icon: "people",
        title: "Leg uit hoe je rekening houdt met hun werk.",
        body: "Maak duidelijk hoe vaak en op welke tijden je schoonmaakt en hoe je toegang tot het pand afspreekt. Vertel wie het werk controleert en bij wie de klant terechtkan met een vraag.",
      },
      {
        icon: "star",
        title: "Maak je kwaliteit zichtbaar.",
        body: "Gebruik echte foto’s van je werk, klantreferenties en aantoonbare kwalificaties. Een kort voorbeeld van het pand, de afgesproken werkzaamheden en je aanpak zegt meer dan een algemene kwaliteitsbelofte.",
      },
      {
        icon: "calendar",
        title: "Vraag meteen om bruikbare informatie.",
        body: "Laat klanten de locatie, het type pand, de geschatte oppervlakte en de gewenste frequentie doorgeven. Daarna stem je de werkzaamheden af, plan je een bezoek en maak je een passende offerte.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw bedrijf. Jouw werkwijze.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "We stemmen CrystalClean af op de panden die je schoonhoudt, de klanten voor wie je werkt en de aanpak van je team.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je schoonmaakdiensten, sectoren en contractmogelijkheden",
      "Je beschikbare frequenties en afspraken over toegang",
      "Je team, kwaliteitscontrole en klantcontact",
      "Echte werkfoto’s en klantreferenties",
      "Aantoonbare kwalificaties en relevante lidmaatschappen",
      "Je werkgebied en gegevens voor offerteaanvragen",
    ],
    imageAlt: "Voorbeeld van het CrystalClean-websiteontwerp voor zakelijke schoonmaakbedrijven",
    imageCaption: "CrystalClean, afgestemd op jouw bedrijf.",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over CrystalClean? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is CrystalClean een websiteontwerp dat ik zelf download en bouw?",
        answer: "Nee. Wij passen het ontwerp aan en zetten je website online als onderdeel van Growth Rocket: een compleet online businesssysteem. Je professionele website komt samen met Growth Rocket Hub, hosting, SSL, technisch onderhoud en ondersteuning.",
      },
      {
        question: "Waarom past CrystalClean bij zakelijke schoonmaak?",
        answer: "Het ontwerp biedt ruimte voor je diensten, de panden die je schoonmaakt en je werkwijze. Kantoor- en facilitair managers zien je werkgebied, werkafspraken en contactmogelijkheden voordat ze een bezoek of offerte aanvragen. We gebruiken alleen sectoren waarvoor je daadwerkelijk werkt.",
      },
      {
        question: "Wat leg ik uit over een schoonmaakcontract?",
        answer: "Beschrijf de werkzaamheden, frequentie, werktijden, afspraken over toegang en hoe klanten een vraag of melding doorgeven. Hangt de opdracht af van het pand? Leg dan uit dat je die na een aanvraag of locatiebezoek afstemt. We gebruiken jouw voorwaarden en bedenken geen contractafspraken.",
      },
      {
        question: "Kunnen klanten offertes aanvragen en een locatiebezoek plannen?",
        answer: "Ja. Aanvragen via je website komen in Growth Rocket Hub. Daar volg je ze op, beheer je klantgegevens en maak je offertes en facturen. Afspraakmogelijkheden kunnen worden ingericht voor locatiebezoeken. We stemmen het formulier en de afspraken tijdens de inrichting af; een aanvraag berekent niet automatisch een schoonmaakofferte.",
      },
      {
        question: "Beheert de Hub ook personeelsroosters en de inzet van schoonmakers?",
        answer: "De Hub ondersteunt aanvragen, afspraken, contacten, offertes en facturen. Gespecialiseerde personeelsplanning, urenregistratie en schoonmaakcontroles worden hier niet als standaard aangeboden. Een koppeling met je bestaande personeelssoftware bespreken we apart.",
      },
      {
        question: "Kan ik mijn werkgebied en klantreferenties laten zien?",
        answer: "Ja. We kunnen de plaatsen of regio’s tonen waar je echt werkt en toelichten welke panden je schoonmaakt. Lever echte referenties en foto’s aan en zorg voor toestemming voor klantnamen of logo’s. We voegen geen locaties, certificeringen of klantresultaten toe die je niet kunt onderbouwen.",
      },
      {
        question: "Kan ik mijn huisstijl behouden en wie onderhoudt de website?",
        answer: "Ja. We stemmen CrystalClean af op je huisstijl, diensten en team. Je kunt je domeinnaam behouden. Hosting, SSL, technisch onderhoud en doorlopende ondersteuning zijn inbegrepen. Via de Hub kun je een supportverzoek indienen.",
      },
      {
        question: "Wat kost CrystalClean en hoe snel kan mijn website online?",
        answer: `Het Growth Rocket-pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Prijzen zijn exclusief btw. Je website kan in 7 werkdagen online, nadat we alle benodigde informatie en materialen hebben ontvangen en als je op tijd je akkoord geeft.`,
      },
    ],
  },
  related: {
    heading: [
      "Bekijk een ander schoonmaakontwerp.",
    ],
    intro: "Vergelijk de andere ontwerpen in de collectie. We stemmen je keuze af op de diensten die je daadwerkelijk aanbiedt.",
    cardSubtitles: {
      shinesquad: "Schoonmaak bij particulieren",
    },
  },
  close: {
    heading: {
      lead: "Maak van CrystalClean",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website die past bij jouw bedrijf, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const crystalclean: Record<Locale, PageOwnCopy> = { en, nl };
