/* Content mirrors the post-JS state of newpages/Growth Rocket Features.html:
   the source rewrites its own markup at runtime, so the strings below come from
   the revision scripts rather than the static HTML. */

import type { Locale } from "../i18n/config";

export type FoldTone = "white" | "silver" | "purple";

export type FeatureFoldContent = {
  id: string;
  kicker: string;
  heading: string;
  headingAccent: string;
  intro: string;
  items: string[];
  tone: FoldTone;
  reverse: boolean;
  videoTitle: string;
  videoCaption: string;
  /* The play button's label. Falls back to "Play <title> video" when unset,
     which only reads right in English. */
  videoLabel?: string;
  /* Poster still for the card, from public/features/thumbnails. */
  videoThumb: string;
  /* Per-locale videos: EN playlist PLVvja2dSXLtk, NL playlist PLCRbj9Z0dcRg.
     Matched section-to-section by video title. */
  youtubeId: Record<Locale, string>;
};

/* Thumbnails live in public/features/thumbnails, named after the video title.
   Titles contain spaces and "&", so the segment is URI-encoded.

   THUMB_VERSION busts the image caches: next/image's optimizer and the browser
   both key on the URL, so replacing a file under the same name keeps serving
   the old picture. Bump it whenever the thumbnails are swapped, and keep the
   matching `search` in next.config.ts's `images.localPatterns` in step. */
const THUMB_VERSION = "2";

function thumb(title: string) {
  return `/features/thumbnails/${encodeURIComponent(title)}.png?v=${THUMB_VERSION}`;
}

export const WEBSITE_ACCORDION: ReadonlyArray<{
  title: string;
  body: string;
}> = [
  {
    title: "Up to 10 professionally designed pages",
    body: "Present your services, business information and contact details clearly.",
  },
  {
    title: "Mobile-friendly design",
    body: "Your website adapts to phones, tablets and desktop screens.",
  },
  {
    title: "SEO-ready",
    body: "Clear content and page structure provide a foundation for search visibility.",
  },
  {
    title: "Blog and image gallery options",
    body: "Share updates and showcase your work in one place.",
  },
  {
    title: "Connected enquiry and appointment forms",
    body: "Send customer enquiries and bookings straight to your Hub.",
  },
  {
    title: "Hosting, maintenance and ongoing support",
    body: "We handle technical upkeep and help when changes are needed.",
  },
];

export const WEBSITE_FOLD: FeatureFoldContent = {
  id: "website",
  kicker: "YOUR WEBSITE",
  heading: "A professional website built for ",
  headingAccent: "your business.",
  intro:
    "Give customers a clear picture of your business and an easy way to take the next step.",
  items: [],
  tone: "purple",
  reverse: false,
  videoTitle: "Website features",
  videoCaption: "Watch the website features overview",
  videoThumb: thumb("Website features"),
  youtubeId: { en: "g1rPnsdTHkc", nl: "CV0l0U2dMwY" },
};

export const FEATURE_FOLDS: ReadonlyArray<FeatureFoldContent> = [
  {
    id: "appointments",
    kicker: "APPOINTMENTS",
    heading: "Let customers book without the ",
    headingAccent: "back-and-forth.",
    intro:
      "Make booking easier for customers and keep your team in control of the schedule.",
    items: [
      "Customers choose a service and time",
      "Show available appointment slots",
      "Notify your team of new bookings",
      "Email appointment details to customers",
      "Review and manage appointments together",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Appointment system",
    videoCaption: "See how booking works",
    videoThumb: thumb("Appointment system"),
    youtubeId: { en: "vp_esay0ULE", nl: "exvgPGtNZAs" },
  },
  {
    id: "enquiries",
    kicker: "ENQUIRIES",
    heading: "Keep every customer enquiry ",
    headingAccent: "moving.",
    intro:
      "See what needs a response and keep customer conversations moving forward.",
    items: [
      "Collect website enquiries in your Hub",
      "Confirm receipt to the customer",
      "Notify your team about new enquiries",
      "Search, filter and add internal notes",
      "Track each enquiry’s status",
      "Export enquiry data when needed",
    ],
    tone: "silver",
    reverse: false,
    videoTitle: "Enquiry management",
    videoCaption: "See how enquiries are managed",
    videoThumb: thumb("Enquiry management"),
    youtubeId: { en: "_wpnT3UcLk8", nl: "uuD00Ka03P8" },
  },
  {
    id: "quotes",
    kicker: "QUOTES & INVOICES",
    heading: "Move smoothly from enquiry to ",
    headingAccent: "quote and invoice.",
    intro:
      "Prepare customer documents with less repetitive work, from the first quote to the final invoice.",
    items: [
      "Create and send professional quotes",
      "Reuse saved customer and service details",
      "Include prices, notes and terms",
      "Convert accepted quotes into invoices",
      "Review, download and send invoices",
      "Export monthly invoice data for accounts",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Quotes & invoices",
    videoCaption: "See quotes and invoices in action",
    videoThumb: thumb("Quotes & invoices"),
    youtubeId: { en: "YZrpo-sSOIM", nl: "uesLJ1tvj0M" },
  },
  {
    id: "contacts",
    kicker: "CONTACT BOOK",
    heading: "Keep customer information organised in ",
    headingAccent: "one place.",
    intro:
      "Find the right customer details without searching through emails, planners and spreadsheets.",
    items: [
      "Keep customer details in one place",
      "Automatically create contacts from enquiries and appointments",
      "Update customer information when needed",
      "Organise customer contacts with tags",
      "Add internal notes for your team",
      "Create new customer contacts manually",
    ],
    tone: "silver",
    reverse: false,
    videoTitle: "Customer contacts",
    videoCaption: "See how contacts work",
    videoThumb: thumb("Customer contacts"),
    youtubeId: { en: "pWbc4fkOJgQ", nl: "zpSzR2pALJk" },
  },
  {
    id: "support",
    kicker: "SUPPORT",
    heading: "Find help whenever you ",
    headingAccent: "need it.",
    intro: "Get clear guidance and direct help inside your Growth Rocket Hub.",
    items: [
      "Watch step-by-step video tutorials",
      "Find answers to common questions",
      "Create account and website support tickets",
      "Track ticket references and progress",
      "Keep replies and updates together",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Support system",
    videoCaption: "Explore support inside your Hub",
    videoThumb: thumb("Support system"),
    youtubeId: { en: "cC7Y3YO1rjg", nl: "QSnJV05YRoE" },
  },
];

export const JUMP_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#website", label: "Website" },
  { href: "#appointments", label: "Appointments" },
  { href: "#enquiries", label: "Enquiries" },
  { href: "#quotes", label: "Quotes & invoices" },
  { href: "#contacts", label: "Contact Book" },
  { href: "#support", label: "Support" },
];

export const WORKFLOW_STEPS: ReadonlyArray<string> = [
  "Website",
  "Enquiry or appointment",
  "Customer contact",
  "Quote",
  "Invoice",
];

export const MANAGED_POINTS: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
}> = [
  {
    number: "01",
    title: "Hosting and maintenance",
    body: "Your website stays looked after.",
  },
  {
    number: "02",
    title: "Technical upkeep",
    body: "We handle the work behind the scenes.",
  },
  {
    number: "03",
    title: "Ongoing support",
    body: "Help when you need a change.",
  },
];

/* The 13 Features questions of Growth-Rocket-FAQs-English-and-Dutch.docx.
   See content/faqs/home-features-pricing.md. */
export const FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "What is Growth Rocket Hub?",
    answer:
      "Growth Rocket Hub is where you manage the work that follows your website. Enquiries and appointment bookings arrive in the Hub, customer details are saved to your contact book, and you can create quotes and invoices using those records. It also includes help resources and support tickets. The Hub is included in the Growth Rocket package.",
  },
  {
    question: "How does online appointment booking work?",
    answer:
      "Customers book directly through your website. They choose a service, select an available time, enter their details and submit the booking. Your team is automatically notified and the appointment is added to your Growth Rocket Hub for review. The customer receives their appointment details by email. Their information is also saved automatically to your contact book for future follow-up.",
  },
  {
    question: "How does enquiry management work in Growth Rocket?",
    answer:
      "Every enquiry submitted through your website appears in your Growth Rocket Hub with the customer’s details. The customer receives an automatic confirmation and your team is notified. You can search and filter enquiries, add internal notes and update their status as the conversation moves on. You can also export enquiry data to review it outside the Hub or share an overview with your team. This helps you keep track of requests and follow up.",
  },
  {
    question: "How does the Growth Rocket contact book work?",
    answer:
      "The contact book keeps customer details in one place instead of scattered across your phone, email, planner and spreadsheets. When someone sends an enquiry or books an appointment through your website, their information is added to Contacts automatically. You can update details, organise contacts with tags, add internal notes and create new contacts manually, then use those records for quotes and invoices.",
  },
  {
    question: "Can I create and send quotes with Growth Rocket?",
    answer:
      "Yes. In Growth Rocket Hub, you can create professional quotes using saved customer information, your services, prices, notes and terms, then send the completed quote directly to the customer. Because customer details from enquiries and appointments are already in your contact book, you do not have to type them in again. When a quote is accepted, you can convert it into an invoice.",
  },
  {
    question: "Can I turn an accepted quote into an invoice?",
    answer:
      "Yes. When a customer accepts a quote, you can convert it into an invoice in Growth Rocket Hub without entering the same information again. You can then review, download or send the invoice to the customer. This reduces repeated admin and the risk of manual errors between quoting and invoicing. Monthly invoice data can be exported for your accounts.",
  },
  {
    question: "How do the website and Hub work together?",
    answer:
      "Your website brings customers into the Hub. For example, someone sends an enquiry or books an appointment through your site. Their details arrive in Growth Rocket Hub and are saved as a contact. You can use that record to create a quote and, once it is accepted, convert it into an invoice. You use the steps that fit the job, with customer information kept together along the way.",
  },
  {
    question: "Do I still need separate booking, CRM or invoicing software?",
    answer:
      "Growth Rocket Hub brings together tools for online appointment booking, enquiry management, customer contacts, quotes and invoices. Customer details from website enquiries and bookings are saved in your contact book, so you can reuse them without retyping. Whether you need other software depends on your business. The Hub supports everyday customer administration; it does not replace every specialist CRM or accounting system. You can export monthly invoice data for your accountant or bookkeeping.",
  },
  {
    question: "What does SEO-ready mean, and does it guarantee rankings?",
    answer:
      "SEO-ready means your website is built with a mobile-friendly design, clear navigation and a page structure that search engines can crawl and understand. It gives your site a solid technical starting point. It does not guarantee rankings, traffic or leads, because search results also depend on competition, your content, reviews and other factors. Growth Rocket does not promise specific search positions.",
  },
  {
    question: "Can I request changes to my website after launch?",
    answer:
      "Yes. After your website is live, you can ask Growth Rocket for support or changes without having to handle the technical side yourself. Requests are made through the support-ticket system in your Growth Rocket Hub, where you can track progress and see replies in one place. Contact the team to confirm which changes are covered by the package and which would be quoted separately.",
  },
  {
    question: "What support is included with Growth Rocket?",
    answer:
      "Support for your website and Growth Rocket Hub is included in the package. Inside the Hub, you can watch step-by-step video tutorials, browse frequently asked questions or create a support ticket when you need help. Each ticket has a reference so you can track its progress, with replies and updates kept together. If you need changes or additional work, we confirm what is covered and what needs a separate quote.",
  },
  {
    question: "Can I export invoice data for my accountant?",
    answer:
      "Yes. Growth Rocket Hub lets you export monthly invoice data, so you can share it with your accountant or use it in your bookkeeping. Invoices themselves can be reviewed, downloaded or sent to customers from the Hub. The export gives you a monthly overview without copying invoice details by hand from one system to another.",
  },
  {
    question: "Can my website include a blog and image gallery?",
    answer:
      "Yes. Your Growth Rocket website can include a blog and an image gallery. The blog overview page and gallery overview page each count as one of the 8–10 included pages. Individual blog posts and gallery child pages do not count towards that allowance. We build and technically maintain these parts of the site. This page-count rule does not mean ongoing article writing or content creation is included.",
  },
];

/* ---------- NL ----------
   Copy from Growth-Rocket-Features-NL-Standalone.html. That file has no
   revision script, so its static markup is the final copy. Folds reuse their
   EN counterpart's id, tone, layout, thumbnail and video ids — the source NL
   page shows the same thumbnails — and swap only the words. */

type FoldText = Pick<
  FeatureFoldContent,
  | "kicker"
  | "heading"
  | "headingAccent"
  | "intro"
  | "items"
  | "videoTitle"
  | "videoCaption"
  | "videoLabel"
>;

const WEBSITE_ACCORDION_NL: typeof WEBSITE_ACCORDION = [
  {
    title: "Tot 10 professioneel ontworpen pagina’s",
    body: "Presenteer je diensten, bedrijfsinformatie en contactgegevens op een overzichtelijke manier.",
  },
  {
    title: "Mobielvriendelijk ontwerp",
    body: "Je website past zich aan aan telefoons, tablets en grote schermen.",
  },
  {
    title: "Klaar voor zoekmachines",
    body: "Duidelijke inhoud en een heldere paginastructuur vormen de basis voor je vindbaarheid.",
  },
  {
    title: "Ruimte voor een blog en foto’s",
    body: "Deel nieuws en laat je werk zien op je eigen website.",
  },
  {
    title: "Gekoppelde aanvraag- en afspraakformulieren",
    body: "Aanvragen en afspraken komen rechtstreeks in je Hub terecht.",
  },
  {
    title: "Hosting, onderhoud en ondersteuning",
    body: "Wij regelen de techniek en helpen je als er iets aangepast moet worden.",
  },
];

const FOLD_TEXT_NL: Record<string, FoldText> = {
  website: {
    kicker: "JE WEBSITE",
    heading: "Een professionele website voor ",
    headingAccent: "jouw bedrijf.",
    intro: "Laat klanten zien wie je bent en maak de volgende stap makkelijk.",
    items: [],
    videoTitle: "Je website",
    videoCaption: "Bekijk wat je website kan",
    videoLabel: "Video over je website afspelen",
  },
  appointments: {
    kicker: "AFSPRAKEN",
    heading: "Laat klanten boeken ",
    headingAccent: "zonder heen-en-weer mailen.",
    intro:
      "Maak boeken makkelijk voor je klanten en houd zelf overzicht over de planning.",
    items: [
      "Klanten kiezen zelf een dienst en tijdstip",
      "Laat zien welke tijdstippen beschikbaar zijn",
      "Informeer je team over nieuwe afspraken",
      "Stuur afspraakgegevens per e-mail naar klanten",
      "Bekijk en beheer alle afspraken samen",
    ],
    videoTitle: "Afsprakensysteem",
    videoCaption: "Bekijk hoe boeken werkt",
    videoLabel: "Video over afspraken afspelen",
  },
  enquiries: {
    kicker: "AANVRAGEN",
    heading: "Geef elke klantaanvraag ",
    headingAccent: "een vervolg.",
    intro:
      "Zie welke aanvragen aandacht nodig hebben en houd het contact met klanten gaande.",
    items: [
      "Ontvang websiteaanvragen in je Hub",
      "Bevestig de ontvangst aan je klant",
      "Breng je team op de hoogte",
      "Zoek, filter en voeg interne notities toe",
      "Volg de status van elke aanvraag",
      "Exporteer aanvraaggegevens wanneer je ze nodig hebt",
    ],
    videoTitle: "Aanvragen beheren",
    videoCaption: "Bekijk hoe je aanvragen beheert",
    videoLabel: "Video over aanvragen afspelen",
  },
  quotes: {
    kicker: "OFFERTES EN FACTUREN",
    heading: "Van aanvraag naar ",
    headingAccent: "offerte en factuur.",
    intro:
      "Maak je klantdocumenten met minder dubbel werk, van de eerste offerte tot de uiteindelijke factuur.",
    items: [
      "Maak en verstuur professionele offertes",
      "Hergebruik opgeslagen klant- en dienstgegevens",
      "Voeg prijzen, notities en voorwaarden toe",
      "Zet goedgekeurde offertes om in facturen",
      "Bekijk, download en verstuur je facturen",
      "Exporteer maandelijkse factuurgegevens voor je boekhouding",
    ],
    videoTitle: "Offertes en facturen",
    videoCaption: "Bekijk hoe offertes en facturen werken",
    videoLabel: "Video over offertes en facturen afspelen",
  },
  contacts: {
    kicker: "CONTACTENBOEK",
    heading: "Alle klantgegevens overzichtelijk ",
    headingAccent: "op één plek.",
    intro:
      "Vind direct de juiste klantgegevens, zonder te zoeken in e-mails, agenda’s en spreadsheets.",
    items: [
      "Bewaar klantgegevens op één centrale plek",
      "Maak automatisch contacten aan vanuit aanvragen en afspraken",
      "Werk klantgegevens bij wanneer dat nodig is",
      "Orden je contacten met handige labels",
      "Voeg interne notities voor je team toe",
      "Maak nieuwe contacten ook handmatig aan",
    ],
    videoTitle: "Contacten",
    videoCaption: "Bekijk hoe Contacten werkt",
    videoLabel: "Video over het contactenboek afspelen",
  },
  support: {
    kicker: "ONDERSTEUNING",
    heading: "Hulp wanneer je ",
    headingAccent: "die nodig hebt.",
    intro:
      "Vind heldere uitleg en persoonlijke hulp, direct in je Growth Rocket Hub.",
    items: [
      "Bekijk stap-voor-stap uitlegvideo’s",
      "Vind antwoorden op veelgestelde vragen",
      "Dien een supportverzoek in voor je account of website",
      "Volg de voortgang van je supportverzoeken",
      "Houd reacties en updates op één plek",
    ],
    videoTitle: "Hulp en ondersteuning",
    videoCaption: "Ontdek de hulp in je Hub",
    videoLabel: "Video over ondersteuning afspelen",
  },
};

/* The Dutch Features questions of Growth-Rocket-FAQs-English-and-Dutch.docx — same
   content and numbering as FAQ_ITEMS. */
const FAQ_ITEMS_NL: typeof FAQ_ITEMS = [
  {
    question: "Wat is Growth Rocket Hub?",
    answer:
      "In Growth Rocket Hub regel je het werk dat via je website binnenkomt. Aanvragen en afspraken komen in de Hub terecht en klantgegevens worden opgeslagen bij je contacten. Met die gegevens kun je offertes en facturen opmaken. Je vindt er ook uitleg en kunt er supportverzoeken indienen. De Hub is inbegrepen in het Growth Rocket-pakket.",
  },
  {
    question: "Hoe werkt online afspraken boeken?",
    answer:
      "Klanten boeken rechtstreeks via je website. Ze kiezen een dienst en een beschikbaar tijdstip, vullen hun gegevens in en bevestigen hun afspraak. Je team krijgt automatisch een melding en de afspraak verschijnt in je Growth Rocket Hub, waar je deze kunt bekijken. De klant ontvangt de afspraakgegevens per e-mail. De klantgegevens worden ook automatisch opgeslagen bij je contacten, zodat je ze later opnieuw kunt gebruiken.",
  },
  {
    question: "Hoe werkt aanvragenbeheer in Growth Rocket?",
    answer:
      "Elke aanvraag via je website verschijnt met de klantgegevens in je Growth Rocket Hub. De klant ontvangt automatisch een bevestiging en je team krijgt een melding. Je kunt aanvragen zoeken en filteren, interne notities toevoegen en de status aanpassen naarmate het contact vordert. Je kunt aanvraaggegevens ook exporteren om ze buiten de Hub te bekijken of een overzicht met je team te delen. Zo houd je zicht op aanvragen en kun je ze opvolgen.",
  },
  {
    question: "Hoe beheer ik mijn contacten in Growth Rocket?",
    answer:
      "Je bewaart klantgegevens op één plek, in plaats van verspreid over je telefoon, e-mail, agenda en spreadsheets. Wanneer iemand via je website een aanvraag indient of een afspraak boekt, worden de gegevens automatisch toegevoegd aan Contacten. Je kunt gegevens bijwerken, contacten ordenen met tags, interne notities toevoegen en zelf nieuwe contacten aanmaken. Die gegevens gebruik je vervolgens voor offertes en facturen.",
  },
  {
    question: "Kan ik offertes opmaken en versturen met Growth Rocket?",
    answer:
      "Ja. In Growth Rocket Hub maak je professionele offertes op met opgeslagen klantgegevens, je diensten, prijzen, notities en voorwaarden. Daarna stuur je de offerte rechtstreeks naar de klant. Klantgegevens uit aanvragen en afspraken staan al bij je contacten, dus je hoeft ze niet opnieuw in te voeren. Zodra een offerte is geaccepteerd, kun je deze omzetten in een factuur.",
  },
  {
    question: "Kan ik een geaccepteerde offerte omzetten in een factuur?",
    answer:
      "Ja. Zodra een klant een offerte accepteert, kun je deze in Growth Rocket Hub omzetten in een factuur zonder dezelfde gegevens opnieuw in te voeren. Je kunt de factuur daarna bekijken, downloaden of naar de klant sturen. Dat bespaart dubbel administratief werk en verkleint de kans op invoerfouten bij het factureren. Je kunt de factuurgegevens per maand exporteren voor je administratie.",
  },
  {
    question: "Hoe werken de website en de Hub samen?",
    answer:
      "Via je website komen klanten in de Hub terecht. Iemand dient bijvoorbeeld een aanvraag in of boekt een afspraak. De gegevens verschijnen in Growth Rocket Hub en worden opgeslagen als contact. Daarmee kun je een offerte opmaken en die na acceptatie omzetten in een factuur. Je gebruikt de stappen die bij de opdracht passen, terwijl de klantgegevens bij elkaar blijven.",
  },
  {
    question: "Heb ik nog aparte software nodig voor afspraken, CRM of facturatie?",
    answer:
      "Met Growth Rocket Hub regel je online afspraken, aanvragen, klantcontacten, offertes en facturen op één plek. Klantgegevens uit aanvragen en afspraken via je website worden opgeslagen bij je contacten, zodat je ze opnieuw kunt gebruiken zonder overtypen. Of je daarnaast andere software nodig hebt, hangt af van je bedrijf. De Hub helpt bij je dagelijkse klantadministratie, maar vervangt niet elk gespecialiseerd CRM- of boekhoudsysteem. Je kunt de factuurgegevens per maand exporteren voor je accountant of boekhouding.",
  },
  {
    question: "Wat betekent SEO-ready en garandeert dat een hoge positie in Google?",
    answer:
      "SEO-ready betekent dat je website mobielvriendelijk is, een duidelijke navigatie heeft en een paginastructuur die zoekmachines kunnen doorzoeken en begrijpen. Dat geeft je website een goede technische basis. Het is geen garantie voor posities, bezoekers of aanvragen. Zoekresultaten hangen ook af van concurrentie, je inhoud, beoordelingen en andere factoren. Growth Rocket belooft geen specifieke posities in zoekmachines.",
  },
  {
    question: "Kan ik mijn website na de lancering laten aanpassen?",
    answer:
      "Ja. Ook nadat je website live is, kun je Growth Rocket om hulp of aanpassingen vragen zonder zelf de techniek te hoeven regelen. Je dient een supportverzoek in via je Growth Rocket Hub. Daar volg je de voortgang en vind je de reacties op één plek. Neem contact op met het team om te bespreken welke aanpassingen binnen het pakket vallen en waarvoor je een aparte offerte ontvangt.",
  },
  {
    question: "Welke ondersteuning is inbegrepen bij Growth Rocket?",
    answer:
      "Ondersteuning voor je website en Growth Rocket Hub is inbegrepen in het pakket. In de Hub vind je stapsgewijze uitlegvideo’s en veelgestelde vragen. Kom je er niet uit, dan kun je een supportverzoek indienen. Elk verzoek krijgt een ticketnummer waarmee je de voortgang kunt volgen. Reacties en updates blijven bij elkaar. Wil je aanpassingen of extra werkzaamheden laten uitvoeren, dan bespreken we wat inbegrepen is en waarvoor een aparte offerte nodig is.",
  },
  {
    question: "Kan ik factuurgegevens exporteren voor mijn accountant?",
    answer:
      "Ja. Met Growth Rocket Hub kun je de factuurgegevens per maand exporteren en delen met je accountant of gebruiken in je boekhouding. De facturen zelf kun je vanuit de Hub bekijken, downloaden of naar klanten sturen. Met de export heb je een maandoverzicht zonder factuurgegevens handmatig van het ene systeem naar het andere over te nemen.",
  },
  {
    question: "Kan mijn website een blog en fotogalerij bevatten?",
    answer:
      "Ja. Je Growth Rocket-website kan een blog en een fotogalerij bevatten. De overzichtspagina van de blog en die van de galerij tellen elk als één van de 8–10 inbegrepen pagina’s. Afzonderlijke blogartikelen en onderliggende galerijpagina’s tellen niet mee. Wij bouwen deze onderdelen en verzorgen het technisch onderhoud. Deze manier van pagina’s tellen betekent niet dat het doorlopend schrijven van artikelen of maken van nieuwe inhoud inbegrepen is.",
  },
];

export type FeaturesCopy = {
  websiteFold: FeatureFoldContent;
  websiteAccordion: typeof WEBSITE_ACCORDION;
  featureFolds: ReadonlyArray<FeatureFoldContent>;
  jumpLinks: typeof JUMP_LINKS;
  workflowSteps: typeof WORKFLOW_STEPS;
  managedPoints: typeof MANAGED_POINTS;
  faqItems: typeof FAQ_ITEMS;
};

/* Everything the Features page lists, per locale. The EN entries are the
   exports above, which other pages import directly. */
export const FEATURES_COPY: Record<Locale, FeaturesCopy> = {
  en: {
    websiteFold: WEBSITE_FOLD,
    websiteAccordion: WEBSITE_ACCORDION,
    featureFolds: FEATURE_FOLDS,
    jumpLinks: JUMP_LINKS,
    workflowSteps: WORKFLOW_STEPS,
    managedPoints: MANAGED_POINTS,
    faqItems: FAQ_ITEMS,
  },
  nl: {
    websiteFold: { ...WEBSITE_FOLD, ...FOLD_TEXT_NL.website },
    websiteAccordion: WEBSITE_ACCORDION_NL,
    featureFolds: FEATURE_FOLDS.map((fold) => ({
      ...fold,
      ...FOLD_TEXT_NL[fold.id],
    })),
    jumpLinks: [
      { href: "#website", label: "Website" },
      { href: "#appointments", label: "Afspraken" },
      { href: "#enquiries", label: "Aanvragen" },
      { href: "#quotes", label: "Offertes en facturen" },
      { href: "#contacts", label: "Contacten" },
      { href: "#support", label: "Ondersteuning" },
    ],
    /* Step 1 is lowercase "website" in the source; capitalised here, like
       every other step label. */
    workflowSteps: [
      "Website",
      "Aanvraag of afspraak",
      "Klantcontact",
      "Offerte",
      "Factuur",
    ],
    managedPoints: [
      {
        number: "01",
        title: "Hosting en onderhoud",
        body: "Je website blijft in goede handen.",
      },
      {
        number: "02",
        title: "Technisch beheer",
        body: "Wij regelen het werk achter de schermen.",
      },
      {
        number: "03",
        title: "Blijvende ondersteuning",
        body: "Hulp als je iets wilt aanpassen.",
      },
    ],
    faqItems: FAQ_ITEMS_NL,
  },
};
