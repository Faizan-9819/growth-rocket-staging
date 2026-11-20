/**
 * Pricing FAQ copy — the Pricing questions of
 * Growth-Rocket-FAQs-English-and-Dutch.docx, word for word. See
 * content/faqs/home-features-pricing.md.
 *
 * This lives apart from `PricingFaq.tsx` because that component is now a client
 * component, and a `"use client"` module's exports reach a server component as
 * client references rather than their values: importing the array from there
 * gave the route a proxy object, and `PRICING_FAQS.map` was not a function. The
 * data has no directive of its own, so both the fold and the route's FAQPage
 * JSON-LD can read the same source.
 *
 * Prices come from /pricing through EUR_EN / EUR_NL (see pricing/README.md), so the
 * euro text here follows pricing/eur.ts and visitors shown another currency
 * see their own prices.
 */
import { CONTACT_INFO } from "@/contact";
import { EUR_EN, EUR_NL } from "@/pricing";

export type PricingFaq = {
  q: string;
  a: string;
  /** Only about monthly billing: left out for a currency without it. */
  monthlyOnly?: boolean;
};

export const PRICING_FAQS: PricingFaq[] = [
  {
    q: "How much does Growth Rocket cost?",
    a: `Growth Rocket costs ${EUR_EN.monthlyOrYearlyAnnualBilling}, plus a one-time ${EUR_EN.onboarding} onboarding fee. Prices exclude VAT.${EUR_EN.annualWorksOutSentence} ${EUR_EN.bothOptionsInclude} your website, Growth Rocket Hub, hosting, SSL, maintenance, updates and support. Bespoke plans are available for additional pages or custom functionality.`,
  },
  {
    q: "What does the onboarding fee cover?",
    a: `The ${EUR_EN.onboarding} one-time onboarding fee covers the initial setup of your Growth Rocket package. It is charged in addition to ${EUR_EN.subscriptionKinds} and is not a recurring fee. The amount excludes VAT.`,
  },
  {
    q: "What is included in the Growth Rocket package?",
    a: "The package brings together a professional website, Growth Rocket Hub, and hosting, maintenance and support. Your website includes 8–10 pages, a mobile-friendly and SEO-ready design, a 30-second business video, and enquiry and contact forms. Initial copywriting in one primary language, with up to two revisions, is included. You can use your existing domain or receive a new domain complimentary for the first year, with renewal charged at actual cost from year two. In the Hub, you manage enquiries, appointments, customer contacts, quotes and invoices.",
  },
  {
    q: "Are hosting, maintenance and business tools billed separately?",
    a: `Your website, Growth Rocket Hub, hosting, SSL, technical maintenance, updates and support come together in one package. You pay ${EUR_EN.monthlyOrYearly}, plus a ${EUR_EN.onboarding} one-time onboarding fee, excluding VAT. There are no separate subscription charges for the included Hub capabilities. If we provide a new domain, its first year is complimentary; renewal is charged at actual cost from year two. Additional pages or custom work are scoped and priced separately.`,
  },
  {
    q: "Who takes care of hosting, SSL and security?",
    a: "We handle hosting, SSL, maintenance and technical updates for your website. We also look after Growth Rocket Hub and provide support for using your website and Hub. These services are included in the package, so you do not need separate arrangements for the technical care we provide.",
  },
  {
    q: "Can I use my own domain name?",
    a: "Yes. You can use your existing domain, or Growth Rocket can provide a new domain for your business. For a new domain provided by Growth Rocket, the first year is complimentary. From the second year onwards, you pay the renewal fee at actual cost. If you already have a website, we discuss what is needed to connect your domain and plan the switch before launch.",
  },
  {
    q: "Do you write the content for my website?",
    a: "Yes. Initial website copywriting is included in one primary language of your choice, such as Dutch, with up to two revisions. You share information about your services, contact details and any photos or branding you already have. We write and build the pages, then you review them before approving the website for launch.",
  },
  {
    q: "How many pages does a Growth Rocket website include?",
    a: "The standard package includes 8–10 pages built around your business. These typically cover your services, company information, contact details and other key content. If you include a blog or gallery, the blog overview page and gallery overview page each count as one page. Individual blog posts and gallery child pages do not count towards the 8–10 allowance. Additional standard pages or custom functionality can be scoped and priced separately.",
  },
  {
    q: "Can I get extra pages or custom features?",
    a: "Yes. If the standard package is not enough, Growth Rocket offers a bespoke plan. It brings the same advantages of the managed setup to a build shaped around your requirements, from additional pages to custom functionality. You can start with the core package and discuss more pages, features or support as your business grows. Email sales@getgrowthrocket.com to discuss your requirements.",
  },
  {
    q: "Is annual or monthly billing better value?",
    a: `${EUR_EN.annualVersusMonthly} Monthly billing costs more over a year but spreads payments out. The one-time ${EUR_EN.onboarding} onboarding fee applies to both options, and both include the same website, Growth Rocket Hub, hosting, maintenance and support. All amounts exclude VAT.`,
    monthlyOnly: true,
  },
  {
    q: "Do Growth Rocket prices include VAT?",
    a: `No. Growth Rocket prices are shown excluding VAT. The package costs ${EUR_EN.monthlyOrYearly}, plus a one-time ${EUR_EN.onboarding} onboarding fee, with VAT added on top where it applies. If you have questions about invoicing for your business, contact the sales team at sales@getgrowthrocket.com before you sign up.`,
  },
  {
    q: "How do I get started?",
    a: `Contact our sales team at sales@getgrowthrocket.com or ${CONTACT_INFO.phone} to get started. We can discuss your business and answer questions about the website, Growth Rocket Hub and the package. If you need additional pages or custom functionality, let us know so we can discuss a bespoke plan.`,
  },
];

/* The Dutch Pricing questions of the same document — same content and
   numbering as PRICING_FAQS. */
export const PRICING_FAQS_NL: PricingFaq[] = [
  {
    q: "Wat kost Growth Rocket?",
    a: `Growth Rocket kost ${EUR_NL.monthlyOrYearly} bij jaarlijkse betaling, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Alle bedragen zijn exclusief btw.${EUR_NL.annualWorksOutSentence} ${EUR_NL.bothOptionsInclude} je website, Growth Rocket Hub, hosting, SSL, onderhoud, updates en ondersteuning. Voor extra pagina’s of maatwerkfunctionaliteit is een pakket op maat mogelijk.`,
  },
  {
    q: "Wat valt onder de eenmalige opstartkosten?",
    a: `De eenmalige opstartkosten van ${EUR_NL.onboarding} dekken de volledige eerste inrichting van je Growth Rocket-pakket. Je betaalt dit bedrag naast ${EUR_NL.subscriptionKinds}. Het is geen terugkerende vergoeding. Het bedrag is exclusief btw.`,
  },
  {
    q: "Wat is inbegrepen in het Growth Rocket-pakket?",
    a: "Het pakket brengt een professionele website, Growth Rocket Hub en hosting, onderhoud en ondersteuning samen. Je website omvat 8–10 pagina’s, een mobielvriendelijk en SEO-ready ontwerp, een bedrijfsvideo van 30 seconden en aanvraag- en contactformulieren. We schrijven de eerste teksten in één hoofdtaal, met maximaal twee correctierondes. Je kunt je bestaande domein gebruiken of een nieuw domein krijgen waarvan het eerste jaar gratis is. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. In de Hub beheer je aanvragen, afspraken, klantcontacten, offertes en facturen.",
  },
  {
    q: "Betaal ik apart voor hosting, onderhoud en het gebruik van de Hub?",
    a: `Je website, Growth Rocket Hub, hosting, SSL, technisch onderhoud, updates en ondersteuning zitten samen in één pakket. Je betaalt ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten, exclusief btw. Voor de inbegrepen mogelijkheden van de Hub betaal je geen aparte abonnementskosten. Leveren wij een nieuw domein, dan is het eerste jaar gratis. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. Voor extra pagina’s of maatwerk spreken we de inhoud en prijs apart af.`,
  },
  {
    q: "Wie regelt hosting, SSL en beveiliging?",
    a: "Wij regelen de hosting, SSL, het onderhoud en de technische updates van je website. Ook verzorgen we het beheer van Growth Rocket Hub en helpen we je bij het gebruik van je website en de Hub. Dit is inbegrepen in het pakket. Voor het technisch beheer dat wij verzorgen, hoef je dus niets apart te regelen.",
  },
  {
    q: "Kan ik mijn eigen domeinnaam gebruiken?",
    a: "Ja. Je kunt je bestaande domein gebruiken of Growth Rocket een nieuw domein voor je bedrijf laten verzorgen. Bij een nieuw domein dat wij leveren, is het eerste jaar gratis. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. Heb je al een website, dan bespreken we wat nodig is om je domein te koppelen en plannen we de overstap voordat de nieuwe website live gaat.",
  },
  {
    q: "Schrijven jullie de teksten voor mijn website?",
    a: "Ja. We schrijven de eerste websiteteksten in één hoofdtaal naar keuze, bijvoorbeeld Nederlands. Daarbij zijn maximaal twee correctierondes inbegrepen. Jij deelt informatie over je diensten, je contactgegevens en eventuele foto’s of huisstijl. Wij schrijven en bouwen de pagina’s. Daarna bekijk jij de website en geef je akkoord voordat deze live gaat.",
  },
  {
    q: "Hoeveel pagina’s zijn inbegrepen bij een Growth Rocket-website?",
    a: "Het standaardpakket omvat 8–10 pagina’s, afgestemd op je bedrijf. Denk aan je diensten, bedrijfsinformatie, contactgegevens en andere belangrijke inhoud. Voeg je een blog of galerij toe, dan tellen de overzichtspagina van de blog en die van de galerij elk als één pagina. Afzonderlijke blogartikelen en onderliggende galerijpagina’s tellen niet mee voor de 8–10 pagina’s. Voor extra gewone pagina’s of maatwerkfunctionaliteit spreken we de inhoud en prijs apart af.",
  },
  {
    q: "Kan ik extra pagina’s of maatwerkfunctionaliteit krijgen?",
    a: "Ja. Heb je meer nodig dan het standaardpakket, dan biedt Growth Rocket een pakket op maat. Je krijgt dezelfde voordelen van een beheerde oplossing, afgestemd op jouw wensen, van extra pagina’s tot maatwerkfunctionaliteit. Je kunt beginnen met het basispakket en later meer pagina’s, mogelijkheden of ondersteuning bespreken als je bedrijf groeit. Mail naar sales@getgrowthrocket.com om je wensen te bespreken.",
  },
  {
    q: "Wat is voordeliger: jaarlijks of maandelijks betalen?",
    a: `${EUR_NL.annualVersusMonthly} Maandelijks betalen kost over een heel jaar meer, maar spreidt je betalingen. Bij beide opties betaal je ${EUR_NL.onboarding} eenmalige opstartkosten en krijg je dezelfde website, Growth Rocket Hub, hosting, onderhoud en ondersteuning. Alle bedragen zijn exclusief btw.`,
    monthlyOnly: true,
  },
  {
    q: "Zijn de prijzen van Growth Rocket inclusief btw?",
    a: `Nee. De prijzen van Growth Rocket zijn exclusief btw. Het pakket kost ${EUR_NL.monthlyOrYearly}, plus ${EUR_NL.onboarding} eenmalige opstartkosten. Waar van toepassing komt daar btw bij. Heb je vragen over de facturatie voor je bedrijf, neem dan vóór je aanmelding contact op met ons salesteam via sales@getgrowthrocket.com.`,
  },
  {
    q: "Hoe kan ik beginnen?",
    a: `Neem contact op met ons salesteam via sales@getgrowthrocket.com of ${CONTACT_INFO.phone}. We bespreken je bedrijf en beantwoorden je vragen over de website, Growth Rocket Hub en het pakket. Heb je extra pagina’s of maatwerkfunctionaliteit nodig, laat het ons weten. Dan bespreken we een pakket op maat.`,
  },
];

export const PRICING_FAQS_BY_LOCALE: Record<"en" | "nl", PricingFaq[]> = {
  en: PRICING_FAQS,
  nl: PRICING_FAQS_NL,
};
