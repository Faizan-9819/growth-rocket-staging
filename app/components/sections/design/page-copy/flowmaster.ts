import { EUR_EN, EUR_NL } from "@/pricing";
import type { Locale } from "../../../../i18n/config";
import type { PageOwnCopy } from "./shinesquad";

/**
 * FlowMaster — bathroom installers. Source: "FlowMaster — Bathroom Installer Design Page Copy.docx" (16 October 2026);
 * content reference with the previous text and the implementation notes:
 * content/design-pages/flowmaster.md
 *
 * Generated from the document so every string is verbatim; edit it like the
 * other page-copy files. Sections 6–8 are the shared master copy
 * (./master.ts), merged in by `./index.ts`.
 */
const en: PageOwnCopy = {
  seo: {
    title: "Bathroom Installer Website | FlowMaster | Growth Rocket",
    description: "Explore FlowMaster, a website design for bathroom installers. Show your projects and process, with Growth Rocket Hub, hosting and technical care included.",
  },
  hero: {
    label: "Website design for bathroom installers",
    subline: "Show the work behind their next bathroom.",
    description: "Help homeowners explore your installations, understand your process and request a site visit. Your website comes with Growth Rocket Hub, hosting, maintenance and support: one complete online business system.",
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
    browserLabel: "FlowMaster · Design preview",
    caption: "Explore FlowMaster using Cascade as the example business. We adapt the branding, project content, location and services to your installation business.",
  },
  benefits: {
    heading: {
      lead: "Show your finished work.",
      accent: "Explain how you get there.",
      breakBefore: true,
    },
    intro: "Choosing a bathroom installer is about more than a photograph of a finished room. Homeowners want to understand the work you undertake, who handles each part and how their project moves from an initial conversation to handover.",
    cards: [
      {
        icon: "document",
        title: "Make your installation scope clear.",
        body: "Explain whether you handle bathroom fitting, pipework, fixtures or kitchen plumbing. Distinguish the work you do from tasks arranged with other trades, so customers know what to ask for.",
      },
      {
        icon: "people",
        title: "Give projects useful context.",
        body: "Pair your own photographs with a short description of the brief, work completed and practical constraints. Before-and-after views help visitors understand the change without invented project outcomes.",
      },
      {
        icon: "star",
        title: "Explain the route from visit to handover.",
        body: "Describe how you assess the room, prepare a quote, agree the work and organise installation. Keep any timing, guarantees or included services specific to what your business offers.",
      },
      {
        icon: "calendar",
        title: "Start a useful project conversation.",
        body: "Invite homeowners to describe their room, location and plans. Make it easy to request a visit, with your team confirming the scope and availability before work is agreed.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Your projects. Your approach.",
      accent: "Your website.",
      breakBefore: true,
    },
    intro: "FlowMaster is the starting point. We shape the website around your installation work, finished projects and the way you guide customers through a renovation.",
    items: [
      "Your logo, colours and company story",
      "Your bathroom fitting and kitchen plumbing services",
      "Project galleries and your own before-and-after photographs",
      "Your team, qualifications and work with other trades",
      "Genuine reviews and project walkthrough videos",
      "Your service area and how site visits are arranged",
      "Your process for quotations, agreed work and handover",
    ],
    imageAlt: "FlowMaster website design preview for a bathroom installation business",
    imageCaption: "",
  },
  faq: {
    heading: {
      lead: "Your questions",
      accent: "answered.",
      breakBefore: false,
    },
    intro: "Questions about FlowMaster? We’re happy to help with the design, setup and what’s included.",
    cta: "Talk to our team",
    items: [
      {
        question: "Is FlowMaster a bathroom design tool or a downloadable website?",
        answer: "Neither. FlowMaster is a website design we tailor and launch for your installation business as part of Growth Rocket: a complete online business system. It includes your website, Growth Rocket Hub, hosting, SSL, maintenance and support. It does not include a room-planning or 3D bathroom-design tool.",
      },
      {
        question: "What makes FlowMaster suitable for bathroom installers?",
        answer: "We shape the page around completed installations, the work you undertake and your process from site visit to handover. Customers can see your own photographs, understand what is included in your service and request a conversation about their project.",
      },
      {
        question: "Can I show bathroom projects and kitchen plumbing separately?",
        answer: "Yes. We can organise your service content and project examples so visitors understand the difference. Make clear which tasks your team handles and which require another trade. Use photographs you have permission to publish and accurate descriptions of the work completed.",
      },
      {
        question: "Can homeowners request a site visit through the website?",
        answer: "Yes. Your website can collect project enquiries and offer online appointments connected to Growth Rocket Hub. During setup, we agree the information you need, such as location and a description of the proposed work. Your team confirms the visit and assesses the project; the website does not automatically schedule the entire installation.",
      },
      {
        question: "Can I prepare a renovation quote and then an invoice?",
        answer: "Yes. In Growth Rocket Hub, you can prepare quotes using customer details and your own service descriptions and prices. Once a quote is accepted, you can convert it into an invoice. The Hub does not automatically calculate material quantities or renovation costs from a room description.",
      },
      {
        question: "What should I provide to personalise FlowMaster?",
        answer: "Share your logo, colours, installation services, service area, contact details and genuine project photographs. Useful project information includes what you installed, your scope and how you work with customers. You can use your existing domain. We adapt the example content to your business before you approve the website.",
      },
      {
        question: "Who looks after FlowMaster once it is live?",
        answer: "We handle hosting, SSL, technical maintenance and ongoing support. You can raise support requests through the Hub. If you need additional pages or custom functionality, we discuss the scope and any separate costs before proceeding.",
      },
      {
        question: "What does FlowMaster cost, and when can it go live?",
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
      lead: "Make FlowMaster",
      accent: "your next website.",
      breakBefore: false,
    },
    description: "A website shaped around your installation work and projects, connected to Growth Rocket Hub. Hosting, maintenance and support are handled for you.",
    primaryCta: "Start with this design",
    secondaryCta: "Talk to our team",
  },
};

const nl: PageOwnCopy = {
  seo: {
    title: "Website voor badkamerinstallateurs | FlowMaster | Growth Rocket",
    description: "Ontdek FlowMaster: een website voor badkamerinstallateurs. Toon je projecten en werkwijze, met Growth Rocket Hub, hosting, onderhoud en ondersteuning.",
  },
  hero: {
    label: "Websiteontwerp voor badkamerinstallateurs",
    subline: "Laat het vakwerk achter een nieuwe badkamer zien.",
    description: "Laat huiseigenaren je installaties bekijken, je werkwijze begrijpen en een bezoek aanvragen. Je website vormt samen met Growth Rocket Hub één compleet online businesssysteem. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
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
    browserLabel: "FlowMaster · Websitevoorbeeld",
    caption: "Bekijk FlowMaster met Cascade als voorbeeldbedrijf. We stemmen de huisstijl, projecten, locatie en diensten af op jouw installatiebedrijf.",
  },
  benefits: {
    heading: {
      lead: "Laat het resultaat zien.",
      accent: "En de weg ernaartoe.",
      breakBefore: true,
    },
    intro: "Een badkamerinstallateur kiezen vraagt om meer dan een foto van een mooie ruimte. Huiseigenaren willen weten welk werk je uitvoert, wie wat regelt en hoe hun project verloopt, van het eerste gesprek tot de oplevering.",
    cards: [
      {
        icon: "document",
        title: "Maak duidelijk welk werk je uitvoert.",
        body: "Beschrijf of je badkamers installeert, leidingwerk aanlegt, sanitair aansluit of keukeninstallaties verzorgt. Maak onderscheid tussen je eigen werk en taken voor andere vakmensen.",
      },
      {
        icon: "people",
        title: "Geef je projecten context.",
        body: "Voeg bij eigen foto’s een korte beschrijving toe van de opdracht, het uitgevoerde werk en praktische aandachtspunten. Voor-en-nafoto’s laten de verandering zien zonder verzonnen projectresultaten.",
      },
      {
        icon: "star",
        title: "Leg de stappen tot oplevering uit.",
        body: "Beschrijf hoe je de ruimte bekijkt, een offerte opmaakt, het werk afspreekt en de installatie organiseert. Vermeld alleen planningen, garanties en inbegrepen werkzaamheden die je bedrijf echt biedt.",
      },
      {
        icon: "calendar",
        title: "Begin met een gerichte projectaanvraag.",
        body: "Nodig huiseigenaren uit om hun ruimte, locatie en plannen te beschrijven. Maak een bezoek aanvragen eenvoudig. Je team bevestigt de omvang en beschikbaarheid voordat het werk wordt afgesproken.",
      },
    ],
  },
  personal: {
    heading: {
      lead: "Jouw projecten. Jouw aanpak.",
      accent: "Jouw website.",
      breakBefore: true,
    },
    intro: "FlowMaster is het vertrekpunt. We stemmen de website af op je installatiewerk, afgeronde projecten en de manier waarop je klanten door een verbouwing begeleidt.",
    items: [
      "Je logo, kleuren en bedrijfsverhaal",
      "Je badkamerinstallaties en leidingwerk voor keukens",
      "Projectgalerijen en eigen voor-en-nafoto’s",
      "Je team, kwalificaties en samenwerking met andere vakmensen",
      "Echte beoordelingen en video’s van je projecten",
      "Je werkgebied en hoe je bezoeken afspreekt",
      "Je werkwijze voor offertes, werkafspraken en oplevering",
    ],
    imageAlt: "Voorbeeld van het FlowMaster-websiteontwerp voor badkamerinstallateurs",
    imageCaption: "",
  },
  faq: {
    heading: {
      lead: "Je vragen",
      accent: "beantwoord.",
      breakBefore: false,
    },
    intro: "Vragen over FlowMaster? We helpen je graag met het ontwerp, de inrichting en wat je krijgt.",
    cta: "Neem contact met ons op",
    items: [
      {
        question: "Is FlowMaster bedoeld om badkamers te ontwerpen of een website te downloaden?",
        answer: "Nee. FlowMaster is een websiteontwerp dat wij aanpassen en online zetten voor je installatiebedrijf. Het is onderdeel van Growth Rocket: een compleet online businesssysteem, met je website, Growth Rocket Hub, hosting, SSL, onderhoud en ondersteuning. Een ruimteplanner of 3D-badkamerontwerp is niet inbegrepen.",
      },
      {
        question: "Waarom past FlowMaster bij een badkamerinstallateur?",
        answer: "We richten de pagina in rond je afgeronde installaties, diensten en werkwijze van eerste bezoek tot oplevering. Klanten bekijken je eigen foto’s, zien welk werk je uitvoert en kunnen contact opnemen over hun project.",
      },
      {
        question: "Kan ik badkamerprojecten en keukeninstallaties apart laten zien?",
        answer: "Ja. We kunnen je diensten en projectvoorbeelden zo indelen dat bezoekers het verschil begrijpen. Maak duidelijk welk werk je team uitvoert en waarvoor een andere vakman nodig is. Gebruik foto’s die je mag publiceren en beschrijf het uitgevoerde werk nauwkeurig.",
      },
      {
        question: "Kunnen huiseigenaren via de website een bezoek aanvragen?",
        answer: "Ja. Je website kan projectaanvragen verzamelen en online afspraken aanbieden die verbonden zijn met Growth Rocket Hub. Tijdens de inrichting bespreken we welke informatie je nodig hebt, zoals de locatie en een omschrijving van het werk. Je team bevestigt het bezoek en beoordeelt het project. De website plant niet automatisch de hele installatie.",
      },
      {
        question: "Kan ik een offerte voor een verbouwing opmaken en daarna factureren?",
        answer: "Ja. In Growth Rocket Hub maak je offertes op met klantgegevens en je eigen omschrijvingen en prijzen. Na acceptatie kun je de offerte omzetten in een factuur. De Hub berekent niet automatisch materiaalhoeveelheden of verbouwingskosten op basis van een beschrijving van de ruimte.",
      },
      {
        question: "Wat lever ik aan om FlowMaster persoonlijk te maken?",
        answer: "Deel je logo, kleuren, installatiediensten, werkgebied, contactgegevens en eigen projectfoto’s. Vertel bij projecten wat je hebt geïnstalleerd, welk werk je uitvoerde en hoe je met klanten samenwerkt. Je kunt je bestaande domein gebruiken. Wij vervangen de voorbeeldinhoud door jouw bedrijfsinformatie voordat je de website goedkeurt.",
      },
      {
        question: "Wie zorgt voor FlowMaster nadat de website live is?",
        answer: "Wij regelen hosting, SSL, technisch onderhoud en doorlopende ondersteuning. Via de Hub kun je een supportverzoek indienen. Heb je extra pagina’s of specifieke functionaliteit nodig, dan bespreken we de omvang en eventuele aparte kosten voordat we beginnen.",
      },
      {
        question: "Wat kost FlowMaster en wanneer kan de website online?",
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
      lead: "Maak van FlowMaster",
      accent: "jouw volgende website.",
      breakBefore: false,
    },
    description: "Een website voor jouw installatiewerk en projecten, verbonden met Growth Rocket Hub. Hosting, onderhoud en ondersteuning zijn voor je geregeld.",
    primaryCta: "Kies dit ontwerp",
    secondaryCta: "Neem contact met ons op",
  },
};

export const flowmaster: Record<Locale, PageOwnCopy> = { en, nl };
