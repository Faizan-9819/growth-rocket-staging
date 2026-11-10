import type { Translation } from "../i18n/config";

/* Every string carries its EN and NL copy; the folds render it with
   `useLanguage().t`, so /partner-network and /nl/partnernetwerk share one
   source. NL uses the informal "je", like the rest of the NL site. */

export const opportunityBad: Translation[] = [
  {
    en: "Rely only on social media for visibility",
    nl: "Alleen afhankelijk van social media voor zichtbaarheid",
  },
  {
    en: "Miss enquiries while working with customers",
    nl: "Aanvragen missen terwijl ze met klanten bezig zijn",
  },
  {
    en: "No proper website or trust signals",
    nl: "Geen goede website of vertrouwenssignalen",
  },
  {
    en: "Lead follow-up scattered across apps",
    nl: "Opvolging van leads verspreid over verschillende apps",
  },
  {
    en: "Bookings managed in notebooks or DMs",
    nl: "Afspraken bijgehouden in notitieboekjes of DM's",
  },
  {
    en: "Outdated digital presence loses customers",
    nl: "Een verouderde online aanwezigheid kost klanten",
  },
];

export const opportunityGood: Translation[] = [
  {
    en: "A professional website that loads fast",
    nl: "Een professionele website die snel laadt",
  },
  {
    en: "An always-on enquiry form",
    nl: "Een aanvraagformulier dat altijd aan staat",
  },
  {
    en: "Faster, organised replies in one place",
    nl: "Snellere, overzichtelijke reacties op één plek",
  },
  {
    en: "Clean booking and call-back flow",
    nl: "Een soepele afspraak- en terugbelflow",
  },
  {
    en: "Visible trust and credibility online",
    nl: "Zichtbaar vertrouwen en geloofwaardigheid online",
  },
  {
    en: "One simple system the owner can run",
    nl: "Eén eenvoudig systeem dat de eigenaar zelf kan beheren",
  },
];

export const productCards: {
  num: string;
  title: Translation;
  body: Translation;
}[] = [
  {
    num: "01",
    title: {
      en: "Professionally Managed Website",
      nl: "Professioneel beheerde website",
    },
    body: {
      en: "Built, hosted, and maintained for the business. They focus on what they do best.",
      nl: "Gebouwd, gehost en onderhouden voor het bedrijf. Zij focussen op waar ze goed in zijn.",
    },
  },
  {
    num: "02",
    title: {
      en: "Enquiry & Booking System",
      nl: "Aanvraag- & afsprakensysteem",
    },
    body: {
      en: "Capture leads and bookings properly, with notifications and reminders.",
      nl: "Leg leads en afspraken goed vast, met meldingen en herinneringen.",
    },
  },
  {
    num: "03",
    title: { en: "Hosting & Maintenance", nl: "Hosting & onderhoud" },
    body: {
      en: "Fast, secure, and fully managed. SSL, backups and updates handled.",
      nl: "Snel, veilig en volledig beheerd. SSL, back-ups en updates geregeld.",
    },
  },
  {
    num: "04",
    title: { en: "Ongoing Support", nl: "Doorlopende support" },
    body: {
      en: "A real team behind every site — replies in hours, not days.",
      nl: "Een echt team achter elke site — antwoord binnen uren, niet dagen.",
    },
  },
  {
    num: "05",
    title: { en: "Growth Rocket Hub", nl: "Growth Rocket Hub" },
    body: {
      en: "A simple dashboard to organise enquiries, bookings and customer comms.",
      nl: "Een eenvoudig dashboard om aanvragen, afspraken en klantcontact te organiseren.",
    },
  },
  {
    num: "06",
    title: { en: "Always Improving", nl: "Altijd in ontwikkeling" },
    body: {
      en: "Updates ship continuously — clients get new features without lifting a finger.",
      nl: "Er komen continu updates bij — klanten krijgen nieuwe functies zonder er iets voor te doen.",
    },
  },
];

export const hubFeatures: [Translation, Translation][] = [
  [
    { en: "View enquiries", nl: "Aanvragen bekijken" },
    {
      en: "Every form submission lands in one place.",
      nl: "Elke formulierinzending komt op één plek binnen.",
    },
  ],
  [
    { en: "Manage bookings", nl: "Afspraken beheren" },
    {
      en: "Calendar view with status and reminders.",
      nl: "Agendaweergave met status en herinneringen.",
    },
  ],
  [
    { en: "Track customer requests", nl: "Klantverzoeken volgen" },
    { en: "Threaded notes per customer.", nl: "Notities per klant, overzichtelijk bij elkaar." },
  ],
  [
    { en: "Stay on top of opportunities", nl: "Grip op je kansen" },
    {
      en: "Daily digest, never miss a lead.",
      nl: "Dagelijks overzicht, mis nooit meer een lead.",
    },
  ],
];

export const hubMetrics: { label: Translation; value: string; delta: string }[] = [
  {
    label: { en: "Enquiries this week", nl: "Aanvragen deze week" },
    value: "32",
    delta: "+18%",
  },
  {
    label: { en: "Bookings confirmed", nl: "Bevestigde afspraken" },
    value: "21",
    delta: "+12%",
  },
  {
    label: { en: "Avg. reply time", nl: "Gem. reactietijd" },
    value: "11m",
    delta: "↓ 42%",
  },
  {
    label: { en: "Repeat customers", nl: "Terugkerende klanten" },
    value: "64%",
    delta: "+6pp",
  },
];

export const hubEnquiries: {
  name: string;
  time: string;
  topic: Translation;
  isNew: boolean;
}[] = [
  {
    name: "Emma Mitchell",
    time: "10:24",
    topic: { en: "Saturday lunch · 4 ppl", nl: "Lunch zaterdag · 4 pers." },
    isNew: true,
  },
  {
    name: "Tom Jenkins",
    time: "09:11",
    topic: { en: "Corporate catering quote", nl: "Offerte zakelijke catering" },
    isNew: true,
  },
  {
    name: "Sophia Reyes",
    time: "08:42",
    topic: { en: "Birthday booking · 12 ppl", nl: "Verjaardagsreservering · 12 pers." },
    isNew: false,
  },
];

export const whyWorksItems: { title: Translation; body: Translation }[] = [
  {
    title: { en: "Visibility is universal", nl: "Zichtbaarheid is universeel" },
    body: {
      en: "Every local business needs to be found online — the demand is built in.",
      nl: "Elk lokaal bedrijf moet online gevonden worden — de vraag is er al.",
    },
  },
  {
    title: { en: "Enquiries drive revenue", nl: "Aanvragen leveren omzet op" },
    body: {
      en: "Captured leads turn into paying customers, predictably and repeatedly.",
      nl: "Vastgelegde leads worden betalende klanten, voorspelbaar en keer op keer.",
    },
  },
  {
    title: { en: "Value is obvious", nl: "De waarde is direct duidelijk" },
    body: {
      en: "A clear use case anyone can understand in seconds, not minutes.",
      nl: "Een helder voordeel dat iedereen in seconden begrijpt, niet in minuten.",
    },
  },
  {
    title: { en: "Pricing is simple", nl: "Eenvoudige prijzen" },
    body: {
      en: "One annual plan. No complicated setup or seat-based negotiating.",
      nl: "Eén jaarabonnement. Geen ingewikkelde setup of onderhandelen per gebruiker.",
    },
  },
  {
    title: { en: "Fully managed", nl: "Volledig beheerd" },
    body: {
      en: "Businesses don't need technical expertise — we handle everything.",
      nl: "Bedrijven hebben geen technische kennis nodig — wij regelen alles.",
    },
  },
  {
    title: { en: "Low technical risk", nl: "Laag technisch risico" },
    body: {
      en: "Hosting, updates, and support are owned end-to-end by Growth Rocket.",
      nl: "Hosting, updates en support liggen van begin tot eind bij Growth Rocket.",
    },
  },
];

export const partnerTypes: { title: Translation; body: Translation }[] = [
  {
    title: { en: "Consultants & Advisors", nl: "Consultants & adviseurs" },
    body: {
      en: "Business consultants, accountants, local advisors.",
      nl: "Bedrijfsadviseurs, accountants, lokale adviseurs.",
    },
  },
  {
    title: { en: "Freelancers & Creators", nl: "Freelancers & creators" },
    body: {
      en: "Designers, marketers, independent professionals.",
      nl: "Designers, marketeers, zelfstandige professionals.",
    },
  },
  {
    title: { en: "Students", nl: "Studenten" },
    body: {
      en: "Students building early networks and side-income opportunities.",
      nl: "Studenten die een netwerk en een bijverdienste opbouwen.",
    },
  },
  {
    title: { en: "Community Builders", nl: "Communitybouwers" },
    body: {
      en: "Local communities, niche groups, creators.",
      nl: "Lokale gemeenschappen, nichegroepen, creators.",
    },
  },
  {
    title: {
      en: "Agencies & Service Providers",
      nl: "Bureaus & dienstverleners",
    },
    body: {
      en: "Additional recurring revenue alongside core offerings.",
      nl: "Extra terugkerende omzet naast je kerndiensten.",
    },
  },
  {
    title: { en: "Business Owners", nl: "Ondernemers" },
    body: {
      en: "Refer businesses within your own network.",
      nl: "Verwijs bedrijven uit je eigen netwerk door.",
    },
  },
];

export const processSteps: { n: string; title: Translation; body: Translation }[] = [
  {
    n: "01",
    title: { en: "You Refer", nl: "Jij verwijst door" },
    body: {
      en: "Introduce a business to Growth Rocket — one form, one email, one intro call.",
      nl: "Stel een bedrijf voor aan Growth Rocket — één formulier, één e-mail, één kennismakingsgesprek.",
    },
  },
  {
    n: "02",
    title: { en: "We Handle Setup", nl: "Wij regelen de setup" },
    body: {
      en: "Onboarding, communication, build, content, launch. End-to-end.",
      nl: "Onboarding, communicatie, bouw, content, lancering. Van begin tot eind.",
    },
  },
  {
    n: "03",
    title: { en: "Site Goes Live", nl: "De site gaat live" },
    body: {
      en: "The client launches with Growth Rocket and the Hub is activated.",
      nl: "De klant gaat live met Growth Rocket en de Hub wordt geactiveerd.",
    },
  },
  {
    n: "04",
    title: { en: "You Earn", nl: "Jij verdient" },
    body: {
      en: "Recurring commissions as long as the client stays active.",
      nl: "Terugkerende commissie zolang de klant actief blijft.",
    },
  },
];

export const whyPartnerItems: { title: Translation; body: Translation }[] = [
  {
    title: { en: "Recurring income", nl: "Terugkerend inkomen" },
    body: {
      en: "Earn as long as the client stays active.",
      nl: "Verdien zolang de klant actief blijft.",
    },
  },
  {
    title: { en: "Low barrier to entry", nl: "Lage drempel" },
    body: {
      en: "No upfront cost. No aggressive targets.",
      nl: "Geen kosten vooraf. Geen agressieve targets.",
    },
  },
  {
    title: { en: "Real market demand", nl: "Echte vraag in de markt" },
    body: {
      en: "Small businesses increasingly need this.",
      nl: "Kleine bedrijven hebben dit steeds vaker nodig.",
    },
  },
  {
    title: { en: "Fully managed delivery", nl: "Volledig verzorgde levering" },
    body: {
      en: "We handle onboarding and support.",
      nl: "Wij regelen de onboarding en support.",
    },
  },
  {
    title: { en: "Relationship-based", nl: "Gebaseerd op relaties" },
    body: {
      en: "Built around trust and long-term collaboration.",
      nl: "Gebouwd op vertrouwen en langdurige samenwerking.",
    },
  },
];

export const visionSteps: {
  year: Translation;
  title: Translation;
  body: Translation;
  active: boolean;
}[] = [
  {
    year: { en: "TODAY", nl: "VANDAAG" },
    title: { en: "Managed websites", nl: "Beheerde websites" },
    body: {
      en: "Professional, fast websites with hosting and support — a stable base.",
      nl: "Professionele, snelle websites met hosting en support — een stabiele basis.",
    },
    active: false,
  },
  {
    year: { en: "NOW", nl: "NU" },
    title: { en: "Enquiry & booking hub", nl: "Hub voor aanvragen & afspraken" },
    body: {
      en: "Capture, organise and reply from one place — the operational layer.",
      nl: "Vastleggen, organiseren en reageren vanaf één plek — de operationele laag.",
    },
    active: true,
  },
  {
    year: { en: "NEXT", nl: "VOLGENDE" },
    title: { en: "Operational simplicity", nl: "Operationele eenvoud" },
    body: {
      en: "Workflows for replies, reminders, invoicing — the daily runtime.",
      nl: "Workflows voor reacties, herinneringen en facturatie — de dagelijkse gang van zaken.",
    },
    active: false,
  },
  {
    year: { en: "AHEAD", nl: "VOORUIT" },
    title: { en: "Long-term infrastructure", nl: "Infrastructuur voor de lange termijn" },
    body: {
      en: "The digital backbone for how small businesses grow online.",
      nl: "De digitale ruggengraat voor hoe kleine bedrijven online groeien.",
    },
    active: false,
  },
];

export const partnerFaqs: [Translation, Translation][] = [
  [
    {
      en: "What is the Growth Rocket Partner Network?",
      nl: "Wat is het Growth Rocket Partnernetwerk?",
    },
    {
      en: "The Growth Rocket Partner Network is a referral-based partnership program for people connected to small businesses and local business communities.",
      nl: "Het Growth Rocket Partnernetwerk is een partnerprogramma op basis van doorverwijzingen, voor mensen met connecties met kleine bedrijven en lokale ondernemersgemeenschappen.",
    },
  ],
  [
    { en: "Who can become a partner?", nl: "Wie kan partner worden?" },
    {
      en: "Consultants, freelancers, agencies, students, business owners, creators, and community builders can all become partners.",
      nl: "Consultants, freelancers, bureaus, studenten, ondernemers, creators en communitybouwers kunnen allemaal partner worden.",
    },
  ],
  [
    { en: "How do commissions work?", nl: "Hoe werkt de commissie?" },
    {
      en: "Partners earn recurring commissions on Growth Rocket website plans and qualifying additional services referred through their network.",
      nl: "Partners verdienen terugkerende commissie op Growth Rocket-websiteabonnementen en in aanmerking komende extra diensten die via hun netwerk worden doorverwezen.",
    },
  ],
  [
    { en: "Are commissions recurring?", nl: "Is de commissie terugkerend?" },
    {
      en: "Yes. Website plan commissions are recurring as long as the client remains active on a Growth Rocket plan.",
      nl: "Ja. Commissie op websiteabonnementen is terugkerend zolang de klant actief blijft op een Growth Rocket-abonnement.",
    },
  ],
  [
    {
      en: "Do I need technical knowledge?",
      nl: "Heb ik technische kennis nodig?",
    },
    {
      en: "No. Growth Rocket handles onboarding, setup, delivery, hosting, and support — you focus on relationships.",
      nl: "Nee. Growth Rocket regelt de onboarding, setup, oplevering, hosting en support — jij focust op relaties.",
    },
  ],
  [
    {
      en: "Who handles communication and support?",
      nl: "Wie regelt de communicatie en support?",
    },
    {
      en: "The Growth Rocket team handles communication, onboarding, technical delivery, and ongoing support.",
      nl: "Het Growth Rocket-team regelt de communicatie, onboarding, technische oplevering en doorlopende support.",
    },
  ],
  [
    {
      en: "What businesses are a good fit?",
      nl: "Welke bedrijven passen goed?",
    },
    {
      en: "Growth Rocket works especially well for local service businesses, trades, consultants, clinics, salons, gyms, and growing small businesses.",
      nl: "Growth Rocket werkt vooral goed voor lokale dienstverleners, vakmensen, consultants, praktijken, salons, sportscholen en groeiende kleine bedrijven.",
    },
  ],
  [
    {
      en: "Is there a minimum commitment or quota?",
      nl: "Is er een minimale verplichting of quotum?",
    },
    {
      en: "No. There are no quotas or exclusivity requirements — refer at your own pace.",
      nl: "Nee. Er zijn geen quota of exclusiviteitseisen — verwijs door in je eigen tempo.",
    },
  ],
  [
    {
      en: "How are referrals tracked?",
      nl: "Hoe worden doorverwijzingen bijgehouden?",
    },
    {
      en: "Initially through manual onboarding and tracking. A dedicated partner dashboard is planned in future phases.",
      nl: "In eerste instantie via handmatige onboarding en registratie. Een eigen partnerdashboard staat gepland voor latere fases.",
    },
  ],
  [
    {
      en: "Will there be a partner dashboard?",
      nl: "Komt er een partnerdashboard?",
    },
    {
      en: "Yes. Future updates will include referral tracking, commission visibility, payouts, and partner links.",
      nl: "Ja. Toekomstige updates bevatten het volgen van doorverwijzingen, inzicht in commissies, uitbetalingen en partnerlinks.",
    },
  ],
  [
    {
      en: "What happens after I submit the form?",
      nl: "Wat gebeurt er nadat ik het formulier heb verstuurd?",
    },
    {
      en: "Our team reviews your application and reaches out to discuss the next steps.",
      nl: "Ons team bekijkt je aanmelding en neemt contact met je op om de volgende stappen te bespreken.",
    },
  ],
];
