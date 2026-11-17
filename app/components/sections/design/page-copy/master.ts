import type { Locale } from "../../../../i18n/config";
import type { MasterCopy } from "./types";

/**
 * Sections 6–8 of every design page — Growth Rocket Hub, package and pricing,
 * launch — as the page-copy documents give them: "fixed master copy. Only the
 * design name and CTA destination vary."
 *
 * Only templates with an approved page copy in `./index.ts` use this so far;
 * the rest keep the folds' built-in text until their documents are applied.
 */
export function masterCopy(title: string, locale: Locale): MasterCopy {
  return locale === "nl" ? nl(title) : en(title);
}

function en(title: string): MasterCopy {
  return {
    system: {
      heading: ["A great website.", "A connected system."],
      intro:
        "Your professional website and Growth Rocket Hub work together as one complete online business system, with hosting, technical maintenance and support handled for you.",
      steps: [
        {
          title: "A customer gets in touch",
          body: "Through your website’s enquiry or appointment options.",
        },
        {
          title: "You manage it in the Hub",
          body: "Keep enquiries, appointments and customer contact details in one place.",
        },
        {
          title: "You take the next step",
          body: "Follow up on the enquiry, arrange an appointment, or prepare a quote and invoice.",
        },
      ],
      walkthroughHeading: "Explore your website and Growth Rocket Hub.",
      walkthroughIntro: "Six short walkthroughs. Choose what you’d like to see.",
      tablistLabel: "Feature videos",
      tabs: {
        website: {
          tab: "See what’s inside your website",
          title: "Website overview",
          note: "Your website, built around your business.",
        },
        appointments: {
          tab: "Book and manage appointments online",
          title: "Appointments",
          note: "Make booking easier and manage your appointments.",
        },
        enquiries: {
          tab: "Capture and manage enquiries",
          title: "Inquiry Management",
          note: "Keep track of customer enquiries in one place.",
        },
        quotes: {
          tab: "Create quotes and invoices",
          title: "Quotes and invoices",
          note: "Prepare quotes and invoices for your customers.",
        },
        contacts: {
          tab: "Keep your customer contacts together",
          title: "Contact Book",
          note: "Contacts are created automatically from enquiries and appointments.",
        },
        support: {
          tab: "Get help and ongoing support",
          title: "Help and support",
          note: "Find guidance and raise support requests when needed.",
        },
      },
      playLabel: "Play video",
    },
    package: {
      heading: "Your design is just the beginning.",
      intro:
        "A professional website, Growth Rocket Hub and ongoing technical care. Together, one complete online business system.",
      pillars: [
        {
          title: "A professional website",
          body: "Tailored to your business and your customers.",
        },
        {
          title: "Growth Rocket Hub",
          body: "Your everyday business tools, connected to your website.",
        },
        {
          title: "All maintained for you",
          body: "Hosting, SSL, technical maintenance and ongoing support.",
        },
      ],
      billing: {
        groupLabel: "Choose billing period",
        annual: "Annually",
        save: "Save {savingPercent}",
        monthly: "Monthly",
        plans: {
          annual: {
            old: "{yearlyWas}",
            current: "{yearly}",
            period: "/ year",
            detail: "That’s {yearlyPerMonth} a month, billed annually.",
            saving: "Save {annualSaving} compared with 12 monthly payments.",
          },
          monthly: {
            old: "{monthlyWas}",
            current: "{monthly}",
            period: "/ month",
          },
        },
        billedAnnually: "Billed annually.",
        setupFee: "+ {onboarding}",
        setupLabel: "one-time onboarding fee",
        taxNote: "Prices exclude VAT.",
      },
      cta: `Start with ${title}`,
      // EN path; ButtonF's LocaleLink maps it to /nl/prijzen on Dutch pages.
      ctaHref: "/pricing",
    },
    launch: {
      heading: {
        lead: "Ready in",
        accent: "7 working days.*",
        breakBefore: false,
      },
      intro: ["You focus on your business.", "We take care of bringing it online."],
      steps: [
        { title: "Choose", body: "Choose your website design and billing option." },
        { title: "Share", body: "Send your branding, business details and content." },
        { title: "We build", body: "We set up your website and connected business tools." },
        { title: "Go live", body: "Review your website, approve it and launch." },
      ],
      note: "*The 7 working days start once we have all the required information and materials. Launch timing depends on receiving your approvals on time.",
    },
  };
}

function nl(title: string): MasterCopy {
  return {
    system: {
      heading: ["Een sterke website.", "Een verbonden systeem."],
      intro:
        "Je professionele website en Growth Rocket Hub vormen samen één compleet online businesssysteem. Hosting, technisch onderhoud en ondersteuning zijn voor je geregeld.",
      steps: [
        {
          title: "Een klant neemt contact op",
          body: "Via een aanvraag of een online afspraak op je website.",
        },
        {
          title: "Je regelt het in de Hub",
          body: "Houd aanvragen, afspraken en klantgegevens op één plek.",
        },
        {
          title: "Je zet de volgende stap",
          body: "Volg de aanvraag op, plan een afspraak of maak een offerte en factuur op.",
        },
      ],
      walkthroughHeading: "Ontdek je website en Growth Rocket Hub.",
      walkthroughIntro: "Zes korte uitlegvideo’s. Kies wat je wilt bekijken.",
      tablistLabel: "Uitlegvideo’s",
      tabs: {
        website: {
          tab: "Bekijk wat je website biedt",
          title: "Je website",
          note: "Je website, afgestemd op jouw bedrijf.",
        },
        appointments: {
          tab: "Online afspraken boeken en beheren",
          title: "Afspraken",
          note: "Maak online afspraken boeken eenvoudig en houd overzicht over je afspraken.",
        },
        enquiries: {
          tab: "Aanvragen ontvangen en beheren",
          title: "Aanvragen beheren",
          note: "Houd overzicht over klantaanvragen op één plek.",
        },
        quotes: {
          tab: "Offertes en facturen opmaken",
          title: "Offertes en facturen",
          note: "Maak offertes en facturen op voor je klanten.",
        },
        contacts: {
          tab: "Houd je klantcontacten op één plek",
          title: "Contacten",
          note: "Contacten worden automatisch aangemaakt vanuit aanvragen en afspraken.",
        },
        support: {
          tab: "Hulp en ondersteuning krijgen",
          title: "Hulp en ondersteuning",
          note: "Bekijk uitleg en dien een supportverzoek in als je hulp nodig hebt.",
        },
      },
      playLabel: "Video afspelen",
    },
    package: {
      heading: "Je ontwerp is pas het begin.",
      intro:
        "Een professionele website, Growth Rocket Hub en doorlopend technisch onderhoud. Samen één compleet online businesssysteem.",
      pillars: [
        {
          title: "Een professionele website",
          body: "Afgestemd op je bedrijf en je klanten.",
        },
        {
          title: "Growth Rocket Hub",
          body: "Alles om je dagelijkse werk te regelen, verbonden met je website.",
        },
        {
          title: "Alles voor je geregeld",
          body: "Hosting, SSL, technisch onderhoud en doorlopende ondersteuning.",
        },
      ],
      billing: {
        groupLabel: "Betaalkeuze",
        annual: "Jaarlijks",
        save: "Bespaar {savingPercent}",
        monthly: "Maandelijks",
        plans: {
          annual: {
            old: "{yearlyWas}",
            current: "{yearly}",
            period: "/ jaar",
            detail: "Dat is {yearlyPerMonth} per maand, jaarlijks betaald.",
            saving:
              "Je bespaart {annualSaving} ten opzichte van 12 maandbetalingen.",
          },
          monthly: {
            old: "{monthlyWas}",
            current: "{monthly}",
            period: "/ maand",
          },
        },
        billedAnnually: "Jaarlijks betaald.",
        setupFee: "+ {onboarding}",
        setupLabel: "eenmalige opstartkosten",
        taxNote: "Prijzen zijn exclusief btw.",
      },
      cta: `Start met ${title}`,
      // EN path; ButtonF's LocaleLink maps it to /nl/prijzen on Dutch pages.
      ctaHref: "/pricing",
    },
    launch: {
      heading: { lead: "Online in", accent: "7 werkdagen.*", breakBefore: false },
      intro: ["Jij richt je op je bedrijf.", "Wij zorgen dat je online komt."],
      steps: [
        { title: "Kies", body: "Kies je websiteontwerp en betaalwijze." },
        { title: "Deel", body: "Stuur je huisstijl, bedrijfsgegevens en inhoud." },
        { title: "Wij bouwen", body: "We richten je website en Growth Rocket Hub in." },
        { title: "Online", body: "Bekijk je website, geef je akkoord en ga online." },
      ],
      note: "*De 7 werkdagen gaan in zodra we alle benodigde informatie en materialen hebben ontvangen. De oplevering hangt af van je tijdige goedkeuring.",
    },
  };
}
