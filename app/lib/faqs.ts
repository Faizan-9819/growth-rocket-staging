// import type { Translation } from "../i18n/config";

// export type FaqAnswer = {
//   paragraphs: Translation[];
//   bullets?: Translation[];
// };

// export type FaqEntry = {
//   question: Translation;
//   answer: FaqAnswer;
// };

// export const FAQS: FaqEntry[] = [
//   {
//     question: {
//       en: "What is Growth Rocket?",
//       nl: "Wat is Growth Rocket?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket is a simple, managed website solution for small businesses.",
//           nl: "Growth Rocket is een eenvoudige, beheerde website-oplossing voor kleine bedrijven.",
//         },
//         {
//           en: "We build your website, host it, and maintain it — and help you capture enquiries and bookings, all managed in one place.",
//           nl: "Wij maken je website, hosten deze en onderhouden alles — en helpen je om aanvragen en boekingen te ontvangen, allemaal beheerd op één plek.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Do I really need a website if I already have a Google Business profile?",
//       nl: "Heb ik een website nodig als ik al een Google Bedrijfsprofiel heb?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "A Google Business profile helps people find you. A website helps them understand your services and contact you with confidence.",
//           nl: "Een Google Bedrijfsprofiel helpt mensen je te vinden. Een website helpt klanten je diensten te begrijpen en contact met je op te nemen met vertrouwen.",
//         },
//         {
//           en: "Both work best together — one drives visibility, the other builds trust and helps convert enquiries.",
//           nl: "Beide werken het beste samen — de één zorgt voor zichtbaarheid, de ander voor vertrouwen en aanvragen.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What do I get with Growth Rocket?",
//       nl: "Wat krijg ik met Growth Rocket?",
//     },
//     answer: {
//       paragraphs: [{ en: "You get:", nl: "Je krijgt:" }],
//       bullets: [
//   { en: "A professional website", nl: "Een professionele website" },
//   { en: "Hosting and security", nl: "Hosting en beveiliging" },
//   { en: "Enquiry and booking setup", nl: "Een systeem voor aanvragen en boekingen" },
//   { en: "Ongoing updates and support", nl: "Doorlopende updates en ondersteuning" },
//   { en: "A simple system (Growth Rocket Hub) to manage everything in one place", nl: "Eén overzichtelijke plek om alles te beheren" },
// ],
//     },
//   },
//   {
//     question: {
//   en: "How long does it take to get my website live?",
//   nl: "Hoe snel staat mijn website online?",
// },
// answer: {
//   paragraphs: [
//     {
//       en: "Most websites are ready within a few days once we receive your details.",
//       nl: "De meeste websites staan binnen enkele dagen online zodra we je gegevens hebben ontvangen.",
//     },
//     {
//       en: "We handle everything, so you don’t need to manage the process yourself.",
//       nl: "Wij regelen alles, dus je hoeft zelf niets technisch te doen.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//   en: "Do I need to manage the website myself?",
//   nl: "Moet ik mijn website zelf beheren?",
// },
// answer: {
//   paragraphs: [
//     { en: "No.", nl: "Nee." },
//     {
//       en: "We handle setup, updates, and maintenance for you. If you need changes, you can simply request them.",
//       nl: "Wij verzorgen de installatie, updates en het onderhoud. Als je iets wilt aanpassen, kun je dat eenvoudig aan ons doorgeven.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//   en: "Will this help me get more customers?",
//   nl: "Helpt dit mij om meer klanten te krijgen?",
// },
// answer: {
//   paragraphs: [
//     {
//       en: "Growth Rocket makes it easier for customers to find your business, understand your services, and contact you.",
//       nl: "Growth Rocket maakt het makkelijker voor klanten om je bedrijf te vinden, je diensten te begrijpen en contact met je op te nemen.",
//     },
//     {
//       en: "The actual results depend on your location, demand, and how your business operates.",
//       nl: "Het resultaat hangt af van je locatie, vraag in de markt en hoe je bedrijf werkt.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//       en: "How do enquiries and bookings work?",
//       nl: "How do enquiries and bookings work?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Your website includes simple ways for customers to contact you — such as forms, calls, or messaging.",
//           nl: "Your website includes simple ways for customers to contact you — such as forms, calls, or messaging.",
//         },
//         {
//           en: "All enquiries are organised in one place so you can track and respond easily.",
//           nl: "All enquiries are organised in one place so you can track and respond easily.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What is the Growth Rocket Hub?",
//       nl: "What is the Growth Rocket Hub?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket Hub is your dashboard where you can view enquiries, manage your business details, and keep everything organised in one place.",
//           nl: "Growth Rocket Hub is your dashboard where you can view enquiries, manage your business details, and keep everything organised in one place.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "How much does it cost?",
//       nl: "How much does it cost?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket is offered at a **fixed yearly price**.",
//           nl: "Growth Rocket is offered at a **fixed yearly price**.",
//         },
//         {
//           en: "This includes your website, hosting, and ongoing support — with no hidden charges.",
//           nl: "This includes your website, hosting, and ongoing support — with no hidden charges.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Will my price change after the first year?",
//       nl: "Will my price change after the first year?",
//     },
//     answer: {
//       paragraphs: [
//         { en: "No.", nl: "No." },
//         {
//           en: "As long as you continue with the same plan, **your renewal price remains the same as what you paid initially**.",
//           nl: "As long as you continue with the same plan, **your renewal price remains the same as what you paid initially**.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Is there a long-term contract?",
//       nl: "Is there a long-term contract?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "We offer yearly plans.",
//           nl: "We offer yearly plans.",
//         },
//         {
//           en: "If you’re looking for longer-term options, our team can guide you through **multi-year plans** as well.",
//           nl: "If you’re looking for longer-term options, our team can guide you through **multi-year plans** as well.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Can I choose a design or template?",
//       nl: "Can I choose a design or template?",
//     },
//     answer: {
//       paragraphs: [
//         { en: "Yes.", nl: "Yes." },
//         {
//           en: "We have a range of professional layouts for different industries. Based on your business, we’ll suggest suitable options for you to choose from.",
//           nl: "We have a range of professional layouts for different industries. Based on your business, we’ll suggest suitable options for you to choose from.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What if I don’t see a template for my industry?",
//       nl: "What if I don’t see a template for my industry?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "That’s not a problem.",
//           nl: "That’s not a problem.",
//         },
//         {
//           en: "We’ve worked across many industries and can adapt existing layouts to fit your business.",
//           nl: "We’ve worked across many industries and can adapt existing layouts to fit your business.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Is there a refund policy?",
//       nl: "Is there a refund policy?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Since the service is set up on a **yearly basis**, there are **no mid-term refunds**.",
//           nl: "Since the service is set up on a **yearly basis**, there are **no mid-term refunds**.",
//         },
//         {
//           en: "You can choose not to continue from the next year.",
//           nl: "You can choose not to continue from the next year.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "How do I get started?",
//       nl: "How do I get started?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "You can fill out a quick form or reach out on WhatsApp.",
//           nl: "You can fill out a quick form or reach out on WhatsApp.",
//         },
//         {
//           en: "We’ll guide you through the next steps and can even show you a preview of your website.",
//           nl: "We’ll guide you through the next steps and can even show you a preview of your website.",
//         },
//       ],
//     },
//   },
// ];

// function stripBold(text: string) {
//   return text.replace(/\*\*(.+?)\*\*/g, "$1");
// }

// export function answerToPlainText({ paragraphs, bullets }: FaqAnswer, locale: "en" | "nl" = "en") {
//   const lines = paragraphs.map(p => p[locale] ?? p.en);
//   if (bullets) lines.push(...bullets.map((b) => `- ${b[locale] ?? b.en}`));
//   return stripBold(lines.join(" "));
// }

// export function buildFaqJsonLd(entries: FaqEntry[] = FAQS, locale: "en" | "nl" = "en") {
//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: entries.map((e) => ({
//       "@type": "Question",
//       name: e.question[locale] ?? e.question.en,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: answerToPlainText(e.answer, locale),
//       },
//     })),
//   };
// }


// ==========================================================
// ==========================================================
import type { Translation } from "../i18n/config";

export type FaqAnswer = {
  paragraphs: Translation[];
  bullets?: Translation[];
};

export type FaqEntry = {
  question: Translation;
  answer: FaqAnswer;
};

export const FAQS: FaqEntry[] = [
  {
    question: {
      en: "What is Growth Rocket for Electricians?",
      nl: "Wat is Growth Rocket voor elektriciens?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is a managed website and enquiry system designed specifically for electricians. It helps you capture job requests, manage bookings, and present your business professionally online — without needing to manage the technical side yourself.",
          nl: "Growth Rocket is een beheerd website- en aanvraagsysteem speciaal ontwikkeld voor elektriciens. Het helpt je om klusaanvragen op te vangen, boekingen te beheren en je bedrijf professioneel online te presenteren — zonder dat je zelf de technische kant hoeft te regelen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What is the Growth Rocket Hub?",
      nl: "Wat is de Growth Rocket Hub?",
    },
    answer: {
      paragraphs: [
        {
          en: "The Growth Rocket Hub is your simple business dashboard. It helps you view enquiries, manage bookings, track customer requests, and keep everything organised in one place — without switching between calls, WhatsApp messages, and emails.",
          nl: "De Growth Rocket Hub is jouw eenvoudige bedrijfsdashboard. Hier kun je aanvragen bekijken, boekingen beheren, klantverzoeken opvolgen en alles overzichtelijk op één plek houden — zonder voortdurend te schakelen tussen telefoontjes, WhatsApp-berichten en e-mails.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I really need a website if customers already call or WhatsApp me?",
      nl: "Heb ik echt een website nodig als klanten mij al bellen of WhatsAppen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. Most customers search online before they contact an electrician. A professional website helps people trust your business, understand your services, and contact you more easily — especially when you’re busy on-site and can’t answer immediately.",
          nl: "Ja. De meeste klanten zoeken eerst online voordat ze contact opnemen met een elektricien. Een professionele website helpt mensen jouw bedrijf te vertrouwen, je diensten beter te begrijpen en makkelijker contact op te nemen — vooral wanneer jij op locatie werkt en niet direct kunt opnemen.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can customers still contact me through WhatsApp?",
      nl: "Kunnen klanten mij nog steeds via WhatsApp bereiken?",
    },
    answer: {
      paragraphs: [
        {
          en: "Absolutely. Your website can include WhatsApp contact options, enquiry forms, and booking requests — all designed to make communication easier and more organised.",
          nl: "Zeker. Je website kan WhatsApp-contact, aanvraagformulieren en boekingsmogelijkheden bevatten — allemaal ontworpen om communicatie makkelijker en overzichtelijker te maken.",
        },
      ],
    },
  },
  {
    question: {
      en: "What kind of electrical businesses is this built for?",
      nl: "Voor wat voor soort elektrotechnische bedrijven is dit bedoeld?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket works for independent electricians, emergency electricians, maintenance companies, installation specialists, and growing electrical service businesses.",
          nl: "Growth Rocket werkt voor zelfstandige elektriciens, storingsdiensten, onderhoudsbedrijven, installatiespecialisten en groeiende elektrotechnische bedrijven.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can I show the areas where I work?",
      nl: "Kan ik laten zien in welke regio’s ik werk?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. We can structure your website around your actual service areas so customers clearly understand where you operate.",
          nl: "Ja. We kunnen je website inrichten op basis van jouw werkgebieden, zodat klanten direct zien waar je actief bent.",
        },
      ],
    },
  },
  {
    question: {
      en: "What happens if I’m busy and miss a call?",
      nl: "Wat gebeurt er als ik bezig ben en een oproep mis?",
    },
    answer: {
      paragraphs: [
        {
          en: "Your website gives customers other ways to contact you — including enquiry forms and booking requests — so potential jobs are less likely to be lost.",
          nl: "Je website geeft klanten andere manieren om contact op te nemen — zoals aanvraagformulieren en boekingen — waardoor potentiële opdrachten minder snel verloren gaan.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do bookings and enquiries work?",
      nl: "Hoe werken boekingen en aanvragen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Customers can send job requests or request appointments through your website. All enquiries are organised in one place inside the Growth Rocket Hub.",
          nl: "Klanten kunnen via je website klusaanvragen sturen of afspraken aanvragen. Alle aanvragen worden overzichtelijk verzameld in de Growth Rocket Hub.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I need technical knowledge to use this?",
      nl: "Heb ik technische kennis nodig om dit te gebruiken?",
    },
    answer: {
      paragraphs: [
        {
          en: "No. We handle the setup, hosting, maintenance, and updates for you. You focus on your electrical work — we handle the system behind it.",
          nl: "Nee. Wij regelen de installatie, hosting, onderhoud en updates voor je. Jij focust op je elektrotechnische werk — wij regelen het systeem erachter.",
        },
      ],
    },
  },
  {
    question: {
      en: "How long does it take to get my electrician website live?",
      nl: "Hoe lang duurt het voordat mijn elektricien-website live staat?",
    },
    answer: {
      paragraphs: [
        {
          en: "Most electrician websites are ready within a few days after we receive your business details and content.",
          nl: "De meeste websites voor elektriciens staan binnen enkele dagen live nadat we je bedrijfsinformatie en content hebben ontvangen.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can I update services or add new information later?",
      nl: "Kan ik later diensten aanpassen of nieuwe informatie toevoegen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. Simply send us the changes you want, and we’ll update the website for you.",
          nl: "Ja. Stuur ons gewoon de wijzigingen door, dan passen wij de website voor je aan.",
        },
      ],
    },
  },
  {
    question: {
      en: "How much does Growth Rocket cost?",
      nl: "Wat kost Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket works with a fixed yearly price that includes your website, hosting, maintenance, and support — with no hidden charges.",
          nl: "Growth Rocket werkt met een vaste jaarlijkse prijs inclusief website, hosting, onderhoud en support — zonder verborgen kosten.",
        },
      ],
    },
  },
  {
    question: {
      en: "Is there a long-term contract?",
      nl: "Zit ik vast aan een langdurig contract?",
    },
    answer: {
      paragraphs: [
        {
          en: "We work with yearly plans. If you prefer longer-term options, our team can also guide you through multi-year plans.",
          nl: "We werken met jaarabonnementen. Als je liever een langere looptijd wilt, kunnen we je ook begeleiden bij meerjarige plannen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What if I don’t have photos or content for my website yet?",
      nl: "Wat als ik nog geen foto’s of content voor mijn website heb?",
    },
    answer: {
      paragraphs: [
        {
          en: "No problem. We’ll guide you on what’s needed and help structure the website professionally with the information available.",
          nl: "Geen probleem. We begeleiden je bij wat nodig is en helpen de website professioneel op te bouwen met de informatie die beschikbaar is.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do I get started?",
      nl: "Hoe kan ik starten?",
    },
    answer: {
      paragraphs: [
        {
          en: "You can contact us through WhatsApp or fill in a simple form. We’ll guide you through the next steps and help you get your system live quickly.",
          nl: "Je kunt contact opnemen via WhatsApp of een eenvoudig formulier invullen. Daarna begeleiden we je stap voor stap om je systeem snel live te krijgen.",
        },
      ],
    },
  },
];

/* The homepage FAQ fold — the 6 Homepage questions of
   Growth-Rocket-FAQs-English-and-Dutch.docx, English and Dutch word for word from that
   document. See content/faqs/home-features-pricing.md. */
export const HOME_FAQS: FaqEntry[] = [
  {
    question: {
      en: "What is Growth Rocket?",
      nl: "Wat is Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is a complete online business system for small businesses and solopreneurs. It brings together a professional website, Growth Rocket Hub and hosting, maintenance and support. In the Hub, you manage enquiries, appointments, customer records, quotes and invoices. We build and look after the website, so you can focus on your business. Growth Rocket is a product of Parashift Technologies B.V., based in The Hague, Netherlands.",
          nl: "Growth Rocket is een compleet online businesssysteem voor het mkb en zzp’ers. Het brengt een professionele website, Growth Rocket Hub en hosting, onderhoud en ondersteuning samen. In de Hub beheer je aanvragen, afspraken, klantgegevens, offertes en facturen. Wij bouwen je website en zorgen voor het technisch beheer, zodat jij je op je bedrijf kunt richten. Growth Rocket is een product van Parashift Technologies B.V., gevestigd in Den Haag.",
        },
      ],
    },
  },
  {
    question: {
      en: "How quickly can my website go live?",
      nl: "Hoe snel kan mijn website online staan?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket aims to get your website online within 7 working days. The timeframe starts once we have received all the information and materials we need, and it depends on timely approvals from you. During that time, we build your website, connect your Growth Rocket Hub and share the site for your review. It goes live on your domain once you approve it.",
          nl: "We streven ernaar je website binnen 7 werkdagen online te zetten. De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring door jou. In die tijd bouwen we je website, koppelen we je Growth Rocket Hub en leggen we de website aan je voor. Na jouw goedkeuring gaat de website live op je domein.",
        },
      ],
    },
  },
  {
    question: {
      en: "Is Growth Rocket a website builder I have to use myself?",
      nl: "Moet ik mijn website zelf bouwen met Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "No. Our team builds your website and connects your enquiry forms and appointment booking to Growth Rocket Hub. Initial website copywriting is included in one primary language of your choice, such as Dutch, with up to two revisions. You share information about your business, review the website and approve it before launch. We then host and maintain it, so you do not need design or technical skills to have a professional website.",
          nl: "Nee. Ons team bouwt je website en koppelt je aanvraagformulieren en online afspraken aan Growth Rocket Hub. We schrijven de eerste websiteteksten in één hoofdtaal naar keuze, bijvoorbeeld Nederlands. Daarbij zijn maximaal twee correctierondes inbegrepen. Jij deelt informatie over je bedrijf, bekijkt de website en geeft akkoord voordat deze live gaat. Daarna verzorgen wij de hosting en het onderhoud. Je hebt dus geen ontwerpkennis of technische kennis nodig voor een professionele website.",
        },
      ],
    },
  },
  {
    question: {
      en: "Who is Growth Rocket for?",
      nl: "Voor wie is Growth Rocket bedoeld?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is built for small businesses and solopreneurs who want to look professional and keep their day-to-day work organised without handling the technical side themselves. It suits service businesses such as electricians, plumbers, cleaning companies, consultants, accountants, and beauty and wellbeing businesses. Your website helps customers find you and get in touch, while the Hub helps you manage what comes next.",
          nl: "Growth Rocket is er voor het mkb en zzp’ers die professioneel voor de dag willen komen en hun dagelijkse werk overzichtelijk willen houden, zonder zelf de techniek te regelen. Het past bij dienstverleners zoals elektriciens, loodgieters, schoonmaakbedrijven, adviseurs, accountants en ondernemers in beauty en welzijn. Via je website kunnen klanten je vinden en contact opnemen. De Hub helpt je om het vervolg te regelen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What are the steps to get started with Growth Rocket?",
      nl: "Hoe ga ik aan de slag met Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "There are four steps. First, tell us your story: share your services, contact details and any photos or branding. Second, we set it all up: we build your website and connect your Growth Rocket Hub. Third, review and approve: you share feedback and approve the final changes. Fourth, you are ready to go: your site goes live and we show you around your Hub.",
          nl: "Dat gaat in vier stappen. Eerst vertel je ons je verhaal: je deelt je diensten, contactgegevens en eventuele foto’s of huisstijl. Daarna regelen wij de inrichting: we bouwen je website en koppelen je Growth Rocket Hub. Vervolgens bekijk je de website, geef je feedback en keur je de laatste aanpassingen goed. Tot slot gaat je website live en laten we je zien hoe je met je Hub werkt.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can I use Growth Rocket if I already have a website?",
      nl: "Kan ik Growth Rocket gebruiken als ik al een website heb?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. Growth Rocket is for both new and established small businesses. If you already have a website, we can review its content and use it, together with the information you share, to build your new pages. You review the result before launch, and you can keep your existing domain. We discuss what is needed to connect it before making the switch.",
          nl: "Ja. Growth Rocket is er voor zowel startende als bestaande kleine bedrijven. Heb je al een website, dan kunnen we de inhoud bekijken en samen met jouw aanvullende informatie gebruiken voor je nieuwe pagina’s. Je bekijkt het resultaat voordat de website live gaat en kunt je bestaande domein behouden. Voor de overstap bespreken we wat nodig is om het te koppelen.",
        },
      ],
    },
  },
];

function stripBold(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

export function answerToPlainText(
  { paragraphs, bullets }: FaqAnswer,
  locale: "en" | "nl" = "en"
) {
  const lines = paragraphs.map((p) => p[locale] ?? p.en);
  if (bullets) lines.push(...bullets.map((b) => `- ${b[locale] ?? b.en}`));
  return stripBold(lines.join(" "));
}

export function buildFaqJsonLd(
  entries: FaqEntry[] = FAQS,
  locale: "en" | "nl" = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question[locale] ?? e.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToPlainText(e.answer, locale),
      },
    })),
  };
}