# Homepage, Features and Pricing FAQs — content update reference

| | |
| --- | --- |
| **Source** | `Growth-Rocket-FAQs-English-and-Dutch.docx` ("Growth Rocket FAQ revisions", Batch 2, confirmed factual decisions applied) |
| **Pages** | Homepage (`/`, `/nl`), Features (`/features`, `/nl/features`), Pricing (`/pricing`, `/nl/pricing`) |
| **Scope** | The FAQ section of these three pages only, English and Dutch. Nothing else on the pages changes. |
| **Count** | 31 FAQs per language: 6 Homepage, 13 Features, 12 Pricing. |

All questions and answers below are copied word for word from the document. The Dutch set has the same content and numbering as the English set.

**Where the copy lives in the code**

| Page | FAQ data | Rendered by | FAQPage JSON-LD |
| --- | --- | --- | --- |
| Homepage | `app/lib/faqs.ts` → `HOME_FAQS` (EN and NL in one array, `{ en, nl }` per string) | `app/components/sections/home2/FaqAccordion.tsx` | Yes — `buildFaqJsonLd(HOME_FAQS, locale)` in `app/home2/Home2Client.tsx` |
| Features | `app/features/data.ts` → `FAQ_ITEMS` (EN) and `FAQ_ITEMS_NL` (NL) | `app/features/FeaturesFaq.tsx` | No FAQPage JSON-LD on this page |
| Pricing | `app/components/sections/pricing/faqs.ts` → `PRICING_FAQS` (EN) and `PRICING_FAQS_NL` (NL) | `app/components/sections/pricing/PricingFaq.tsx` | Yes — `buildFaqJsonLdFromItems(...)` in `app/pricing/page.tsx` and `app/nl/pricing/page.tsx` |

To change an FAQ later, edit the data file for that page. The order of the array is the order on the page, and the first item is open when the page loads. Each answer is one plain-text paragraph.

**Section heading**

The document sets the same heading for all three FAQ sections: **Your questions answered.** / **Je vragen beantwoord.** The heading is drawn on two lines ("Your questions" / "answered." in violet).

| Page | Before (EN) | Before (NL) | Now (EN) | Now (NL) |
| --- | --- | --- | --- | --- |
| Homepage | Your questions answered. | Jouw vragen beantwoord. | Your questions answered. | Je vragen beantwoord. |
| Features | A few questions, answered. | Jouw vragen, beantwoord. | Your questions answered. | Je vragen beantwoord. |
| Pricing | Pricing questions, answered. | Vragen over de prijs? Hier vind je de antwoorden. | Your questions answered. | Je vragen beantwoord. |

The help cards next to each FAQ ("Still have questions?" and the button) are not in the document and are unchanged.

---

## Homepage FAQs (6)

English page: `/` · Dutch page: `/nl`

### 1. What is Growth Rocket?

**EN — What is Growth Rocket?**

Growth Rocket is a complete online business system for small businesses and solopreneurs. It brings together a professional website, Growth Rocket Hub and hosting, maintenance and support. In the Hub, you manage enquiries, appointments, customer records, quotes and invoices. We build and look after the website, so you can focus on your business. Growth Rocket is a product of Parashift Technologies B.V., based in The Hague, Netherlands.

**NL — Wat is Growth Rocket?**

Growth Rocket is een compleet online businesssysteem voor het mkb en zzp’ers. Het brengt een professionele website, Growth Rocket Hub en hosting, onderhoud en ondersteuning samen. In de Hub beheer je aanvragen, afspraken, klantgegevens, offertes en facturen. Wij bouwen je website en zorgen voor het technisch beheer, zodat jij je op je bedrijf kunt richten. Growth Rocket is een product van Parashift Technologies B.V., gevestigd in Den Haag.

### 2. How quickly can my website go live?

**EN — How quickly can my website go live?**

Growth Rocket aims to get your website online within 7 working days. The timeframe starts once we have received all the information and materials we need, and it depends on timely approvals from you. During that time, we build your website, connect your Growth Rocket Hub and share the site for your review. It goes live on your domain once you approve it.

**NL — Hoe snel kan mijn website online staan?**

We streven ernaar je website binnen 7 werkdagen online te zetten. De termijn begint zodra we alle benodigde informatie en materialen hebben ontvangen en is afhankelijk van tijdige goedkeuring door jou. In die tijd bouwen we je website, koppelen we je Growth Rocket Hub en leggen we de website aan je voor. Na jouw goedkeuring gaat de website live op je domein.

### 3. Is Growth Rocket a website builder I have to use myself?

**EN — Is Growth Rocket a website builder I have to use myself?**

No. Our team builds your website and connects your enquiry forms and appointment booking to Growth Rocket Hub. Initial website copywriting is included in one primary language of your choice, such as Dutch, with up to two revisions. You share information about your business, review the website and approve it before launch. We then host and maintain it, so you do not need design or technical skills to have a professional website.

**NL — Moet ik mijn website zelf bouwen met Growth Rocket?**

Nee. Ons team bouwt je website en koppelt je aanvraagformulieren en online afspraken aan Growth Rocket Hub. We schrijven de eerste websiteteksten in één hoofdtaal naar keuze, bijvoorbeeld Nederlands. Daarbij zijn maximaal twee correctierondes inbegrepen. Jij deelt informatie over je bedrijf, bekijkt de website en geeft akkoord voordat deze live gaat. Daarna verzorgen wij de hosting en het onderhoud. Je hebt dus geen ontwerpkennis of technische kennis nodig voor een professionele website.

### 4. Who is Growth Rocket for?

**EN — Who is Growth Rocket for?**

Growth Rocket is built for small businesses and solopreneurs who want to look professional and keep their day-to-day work organised without handling the technical side themselves. It suits service businesses such as electricians, plumbers, cleaning companies, consultants, accountants, and beauty and wellbeing businesses. Your website helps customers find you and get in touch, while the Hub helps you manage what comes next.

**NL — Voor wie is Growth Rocket bedoeld?**

Growth Rocket is er voor het mkb en zzp’ers die professioneel voor de dag willen komen en hun dagelijkse werk overzichtelijk willen houden, zonder zelf de techniek te regelen. Het past bij dienstverleners zoals elektriciens, loodgieters, schoonmaakbedrijven, adviseurs, accountants en ondernemers in beauty en welzijn. Via je website kunnen klanten je vinden en contact opnemen. De Hub helpt je om het vervolg te regelen.

### 5. What are the steps to get started with Growth Rocket?

**EN — What are the steps to get started with Growth Rocket?**

There are four steps. First, tell us your story: share your services, contact details and any photos or branding. Second, we set it all up: we build your website and connect your Growth Rocket Hub. Third, review and approve: you share feedback and approve the final changes. Fourth, you are ready to go: your site goes live and we show you around your Hub.

**NL — Hoe ga ik aan de slag met Growth Rocket?**

Dat gaat in vier stappen. Eerst vertel je ons je verhaal: je deelt je diensten, contactgegevens en eventuele foto’s of huisstijl. Daarna regelen wij de inrichting: we bouwen je website en koppelen je Growth Rocket Hub. Vervolgens bekijk je de website, geef je feedback en keur je de laatste aanpassingen goed. Tot slot gaat je website live en laten we je zien hoe je met je Hub werkt.

### 6. Can I use Growth Rocket if I already have a website?

**EN — Can I use Growth Rocket if I already have a website?**

Yes. Growth Rocket is for both new and established small businesses. If you already have a website, we can review its content and use it, together with the information you share, to build your new pages. You review the result before launch, and you can keep your existing domain. We discuss what is needed to connect it before making the switch.

**NL — Kan ik Growth Rocket gebruiken als ik al een website heb?**

Ja. Growth Rocket is er voor zowel startende als bestaande kleine bedrijven. Heb je al een website, dan kunnen we de inhoud bekijken en samen met jouw aanvullende informatie gebruiken voor je nieuwe pagina’s. Je bekijkt het resultaat voordat de website live gaat en kunt je bestaande domein behouden. Voor de overstap bespreken we wat nodig is om het te koppelen.

<details>
<summary>Questions this set replaced (9)</summary>

1. Is this a website builder I have to use myself?
2. What exactly is Growth Rocket Hub?
3. Is it only for new businesses?
4. Can I keep my existing website content and domain?
5. Can customers book appointments on my website?
6. Can I manage customers, quotes and invoices?
7. What’s included in the monthly price?
8. How quickly can my website go live?
9. What happens when I need support?

</details>

> **Placement note (from the document):** The original consultant and accountant question moves to the relevant industry content. Its subject remains represented in the general audience answer. The original existing-business and content-migration questions are combined in question 6.

---

## Features FAQs (13)

English page: `/features` · Dutch page: `/nl/features`

### 1. What is Growth Rocket Hub?

**EN — What is Growth Rocket Hub?**

Growth Rocket Hub is where you manage the work that follows your website. Enquiries and appointment bookings arrive in the Hub, customer details are saved to your contact book, and you can create quotes and invoices using those records. It also includes help resources and support tickets. The Hub is included in the Growth Rocket package.

**NL — Wat is Growth Rocket Hub?**

In Growth Rocket Hub regel je het werk dat via je website binnenkomt. Aanvragen en afspraken komen in de Hub terecht en klantgegevens worden opgeslagen bij je contacten. Met die gegevens kun je offertes en facturen opmaken. Je vindt er ook uitleg en kunt er supportverzoeken indienen. De Hub is inbegrepen in het Growth Rocket-pakket.

### 2. How does online appointment booking work?

**EN — How does online appointment booking work?**

Customers book directly through your website. They choose a service, select an available time, enter their details and submit the booking. Your team is automatically notified and the appointment is added to your Growth Rocket Hub for review. The customer receives their appointment details by email. Their information is also saved automatically to your contact book for future follow-up.

**NL — Hoe werkt online afspraken boeken?**

Klanten boeken rechtstreeks via je website. Ze kiezen een dienst en een beschikbaar tijdstip, vullen hun gegevens in en bevestigen hun afspraak. Je team krijgt automatisch een melding en de afspraak verschijnt in je Growth Rocket Hub, waar je deze kunt bekijken. De klant ontvangt de afspraakgegevens per e-mail. De klantgegevens worden ook automatisch opgeslagen bij je contacten, zodat je ze later opnieuw kunt gebruiken.

### 3. How does enquiry management work in Growth Rocket?

**EN — How does enquiry management work in Growth Rocket?**

Every enquiry submitted through your website appears in your Growth Rocket Hub with the customer’s details. The customer receives an automatic confirmation and your team is notified. You can search and filter enquiries, add internal notes and update their status as the conversation moves on. You can also export enquiry data to review it outside the Hub or share an overview with your team. This helps you keep track of requests and follow up.

**NL — Hoe werkt aanvragenbeheer in Growth Rocket?**

Elke aanvraag via je website verschijnt met de klantgegevens in je Growth Rocket Hub. De klant ontvangt automatisch een bevestiging en je team krijgt een melding. Je kunt aanvragen zoeken en filteren, interne notities toevoegen en de status aanpassen naarmate het contact vordert. Je kunt aanvraaggegevens ook exporteren om ze buiten de Hub te bekijken of een overzicht met je team te delen. Zo houd je zicht op aanvragen en kun je ze opvolgen.

### 4. How does the Growth Rocket contact book work?

**EN — How does the Growth Rocket contact book work?**

The contact book keeps customer details in one place instead of scattered across your phone, email, planner and spreadsheets. When someone sends an enquiry or books an appointment through your website, their information is added to Contacts automatically. You can update details, organise contacts with tags, add internal notes and create new contacts manually, then use those records for quotes and invoices.

**NL — Hoe beheer ik mijn contacten in Growth Rocket?**

Je bewaart klantgegevens op één plek, in plaats van verspreid over je telefoon, e-mail, agenda en spreadsheets. Wanneer iemand via je website een aanvraag indient of een afspraak boekt, worden de gegevens automatisch toegevoegd aan Contacten. Je kunt gegevens bijwerken, contacten ordenen met tags, interne notities toevoegen en zelf nieuwe contacten aanmaken. Die gegevens gebruik je vervolgens voor offertes en facturen.

### 5. Can I create and send quotes with Growth Rocket?

**EN — Can I create and send quotes with Growth Rocket?**

Yes. In Growth Rocket Hub, you can create professional quotes using saved customer information, your services, prices, notes and terms, then send the completed quote directly to the customer. Because customer details from enquiries and appointments are already in your contact book, you do not have to type them in again. When a quote is accepted, you can convert it into an invoice.

**NL — Kan ik offertes opmaken en versturen met Growth Rocket?**

Ja. In Growth Rocket Hub maak je professionele offertes op met opgeslagen klantgegevens, je diensten, prijzen, notities en voorwaarden. Daarna stuur je de offerte rechtstreeks naar de klant. Klantgegevens uit aanvragen en afspraken staan al bij je contacten, dus je hoeft ze niet opnieuw in te voeren. Zodra een offerte is geaccepteerd, kun je deze omzetten in een factuur.

### 6. Can I turn an accepted quote into an invoice?

**EN — Can I turn an accepted quote into an invoice?**

Yes. When a customer accepts a quote, you can convert it into an invoice in Growth Rocket Hub without entering the same information again. You can then review, download or send the invoice to the customer. This reduces repeated admin and the risk of manual errors between quoting and invoicing. Monthly invoice data can be exported for your accounts.

**NL — Kan ik een geaccepteerde offerte omzetten in een factuur?**

Ja. Zodra een klant een offerte accepteert, kun je deze in Growth Rocket Hub omzetten in een factuur zonder dezelfde gegevens opnieuw in te voeren. Je kunt de factuur daarna bekijken, downloaden of naar de klant sturen. Dat bespaart dubbel administratief werk en verkleint de kans op invoerfouten bij het factureren. Je kunt de factuurgegevens per maand exporteren voor je administratie.

### 7. How do the website and Hub work together?

**EN — How do the website and Hub work together?**

Your website brings customers into the Hub. For example, someone sends an enquiry or books an appointment through your site. Their details arrive in Growth Rocket Hub and are saved as a contact. You can use that record to create a quote and, once it is accepted, convert it into an invoice. You use the steps that fit the job, with customer information kept together along the way.

**NL — Hoe werken de website en de Hub samen?**

Via je website komen klanten in de Hub terecht. Iemand dient bijvoorbeeld een aanvraag in of boekt een afspraak. De gegevens verschijnen in Growth Rocket Hub en worden opgeslagen als contact. Daarmee kun je een offerte opmaken en die na acceptatie omzetten in een factuur. Je gebruikt de stappen die bij de opdracht passen, terwijl de klantgegevens bij elkaar blijven.

### 8. Do I still need separate booking, CRM or invoicing software?

**EN — Do I still need separate booking, CRM or invoicing software?**

Growth Rocket Hub brings together tools for online appointment booking, enquiry management, customer contacts, quotes and invoices. Customer details from website enquiries and bookings are saved in your contact book, so you can reuse them without retyping. Whether you need other software depends on your business. The Hub supports everyday customer administration; it does not replace every specialist CRM or accounting system. You can export monthly invoice data for your accountant or bookkeeping.

**NL — Heb ik nog aparte software nodig voor afspraken, CRM of facturatie?**

Met Growth Rocket Hub regel je online afspraken, aanvragen, klantcontacten, offertes en facturen op één plek. Klantgegevens uit aanvragen en afspraken via je website worden opgeslagen bij je contacten, zodat je ze opnieuw kunt gebruiken zonder overtypen. Of je daarnaast andere software nodig hebt, hangt af van je bedrijf. De Hub helpt bij je dagelijkse klantadministratie, maar vervangt niet elk gespecialiseerd CRM- of boekhoudsysteem. Je kunt de factuurgegevens per maand exporteren voor je accountant of boekhouding.

### 9. What does SEO-ready mean, and does it guarantee rankings?

**EN — What does SEO-ready mean, and does it guarantee rankings?**

SEO-ready means your website is built with a mobile-friendly design, clear navigation and a page structure that search engines can crawl and understand. It gives your site a solid technical starting point. It does not guarantee rankings, traffic or leads, because search results also depend on competition, your content, reviews and other factors. Growth Rocket does not promise specific search positions.

**NL — Wat betekent SEO-ready en garandeert dat een hoge positie in Google?**

SEO-ready betekent dat je website mobielvriendelijk is, een duidelijke navigatie heeft en een paginastructuur die zoekmachines kunnen doorzoeken en begrijpen. Dat geeft je website een goede technische basis. Het is geen garantie voor posities, bezoekers of aanvragen. Zoekresultaten hangen ook af van concurrentie, je inhoud, beoordelingen en andere factoren. Growth Rocket belooft geen specifieke posities in zoekmachines.

### 10. Can I request changes to my website after launch?

**EN — Can I request changes to my website after launch?**

Yes. After your website is live, you can ask Growth Rocket for support or changes without having to handle the technical side yourself. Requests are made through the support-ticket system in your Growth Rocket Hub, where you can track progress and see replies in one place. Contact the team to confirm which changes are covered by the package and which would be quoted separately.

**NL — Kan ik mijn website na de lancering laten aanpassen?**

Ja. Ook nadat je website live is, kun je Growth Rocket om hulp of aanpassingen vragen zonder zelf de techniek te hoeven regelen. Je dient een supportverzoek in via je Growth Rocket Hub. Daar volg je de voortgang en vind je de reacties op één plek. Neem contact op met het team om te bespreken welke aanpassingen binnen het pakket vallen en waarvoor je een aparte offerte ontvangt.

### 11. What support is included with Growth Rocket?

**EN — What support is included with Growth Rocket?**

Support for your website and Growth Rocket Hub is included in the package. Inside the Hub, you can watch step-by-step video tutorials, browse frequently asked questions or create a support ticket when you need help. Each ticket has a reference so you can track its progress, with replies and updates kept together. If you need changes or additional work, we confirm what is covered and what needs a separate quote.

**NL — Welke ondersteuning is inbegrepen bij Growth Rocket?**

Ondersteuning voor je website en Growth Rocket Hub is inbegrepen in het pakket. In de Hub vind je stapsgewijze uitlegvideo’s en veelgestelde vragen. Kom je er niet uit, dan kun je een supportverzoek indienen. Elk verzoek krijgt een ticketnummer waarmee je de voortgang kunt volgen. Reacties en updates blijven bij elkaar. Wil je aanpassingen of extra werkzaamheden laten uitvoeren, dan bespreken we wat inbegrepen is en waarvoor een aparte offerte nodig is.

### 12. Can I export invoice data for my accountant?

**EN — Can I export invoice data for my accountant?**

Yes. Growth Rocket Hub lets you export monthly invoice data, so you can share it with your accountant or use it in your bookkeeping. Invoices themselves can be reviewed, downloaded or sent to customers from the Hub. The export gives you a monthly overview without copying invoice details by hand from one system to another.

**NL — Kan ik factuurgegevens exporteren voor mijn accountant?**

Ja. Met Growth Rocket Hub kun je de factuurgegevens per maand exporteren en delen met je accountant of gebruiken in je boekhouding. De facturen zelf kun je vanuit de Hub bekijken, downloaden of naar klanten sturen. Met de export heb je een maandoverzicht zonder factuurgegevens handmatig van het ene systeem naar het andere over te nemen.

### 13. Can my website include a blog and image gallery?

**EN — Can my website include a blog and image gallery?**

Yes. Your Growth Rocket website can include a blog and an image gallery. The blog overview page and gallery overview page each count as one of the 8–10 included pages. Individual blog posts and gallery child pages do not count towards that allowance. We build and technically maintain these parts of the site. This page-count rule does not mean ongoing article writing or content creation is included.

**NL — Kan mijn website een blog en fotogalerij bevatten?**

Ja. Je Growth Rocket-website kan een blog en een fotogalerij bevatten. De overzichtspagina van de blog en die van de galerij tellen elk als één van de 8–10 inbegrepen pagina’s. Afzonderlijke blogartikelen en onderliggende galerijpagina’s tellen niet mee. Wij bouwen deze onderdelen en verzorgen het technisch onderhoud. Deze manier van pagina’s tellen betekent niet dat het doorlopend schrijven van artikelen of maken van nieuwe inhoud inbegrepen is.

<details>
<summary>Questions this set replaced (5)</summary>

1. Is Growth Rocket only a website?
2. Can customers book appointments through my website?
3. Does Growth Rocket manage website hosting and maintenance?
4. Can I manage customer information in Growth Rocket?
5. What support is available?

</details>

---

## Pricing FAQs (12)

English page: `/pricing` · Dutch page: `/nl/pricing`

### 1. How much does Growth Rocket cost?

**EN — How much does Growth Rocket cost?**

Growth Rocket costs €69 per month, or €690 per year with annual billing, plus a one-time €290 onboarding fee. Prices exclude VAT. Annual billing works out at €57.50 per month and saves €138 compared with 12 monthly payments. Both options include your website, Growth Rocket Hub, hosting, SSL, maintenance, updates and support. Bespoke plans are available for additional pages or custom functionality.

**NL — Wat kost Growth Rocket?**

Growth Rocket kost €69 per maand of €690 per jaar bij jaarlijkse betaling, plus €290 eenmalige opstartkosten. Alle bedragen zijn exclusief btw. Bij jaarlijkse betaling komt dat neer op €57,50 per maand en bespaar je €138 ten opzichte van twaalf maandbetalingen. Beide opties omvatten je website, Growth Rocket Hub, hosting, SSL, onderhoud, updates en ondersteuning. Voor extra pagina’s of maatwerkfunctionaliteit is een pakket op maat mogelijk.

### 2. What does the onboarding fee cover?

**EN — What does the onboarding fee cover?**

The €290 one-time onboarding fee covers the initial setup of your Growth Rocket package. It is charged in addition to your monthly or annual subscription and is not a recurring fee. The amount excludes VAT.

**NL — Wat valt onder de eenmalige opstartkosten?**

De eenmalige opstartkosten van €290 dekken de volledige eerste inrichting van je Growth Rocket-pakket. Je betaalt dit bedrag naast je maand- of jaarabonnement. Het is geen terugkerende vergoeding. Het bedrag is exclusief btw.

### 3. What is included in the Growth Rocket package?

**EN — What is included in the Growth Rocket package?**

The package brings together a professional website, Growth Rocket Hub, and hosting, maintenance and support. Your website includes 8–10 pages, a mobile-friendly and SEO-ready design, a 30-second business video, and enquiry and contact forms. Initial copywriting in one primary language, with up to two revisions, is included. You can use your existing domain or receive a new domain complimentary for the first year, with renewal charged at actual cost from year two. In the Hub, you manage enquiries, appointments, customer contacts, quotes and invoices.

**NL — Wat is inbegrepen in het Growth Rocket-pakket?**

Het pakket brengt een professionele website, Growth Rocket Hub en hosting, onderhoud en ondersteuning samen. Je website omvat 8–10 pagina’s, een mobielvriendelijk en SEO-ready ontwerp, een bedrijfsvideo van 30 seconden en aanvraag- en contactformulieren. We schrijven de eerste teksten in één hoofdtaal, met maximaal twee correctierondes. Je kunt je bestaande domein gebruiken of een nieuw domein krijgen waarvan het eerste jaar gratis is. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. In de Hub beheer je aanvragen, afspraken, klantcontacten, offertes en facturen.

### 4. Are hosting, maintenance and business tools billed separately?

**EN — Are hosting, maintenance and business tools billed separately?**

Your website, Growth Rocket Hub, hosting, SSL, technical maintenance, updates and support come together in one package. You pay €69 per month or €690 per year, plus a €290 one-time onboarding fee, excluding VAT. There are no separate subscription charges for the included Hub capabilities. If we provide a new domain, its first year is complimentary; renewal is charged at actual cost from year two. Additional pages or custom work are scoped and priced separately.

**NL — Betaal ik apart voor hosting, onderhoud en het gebruik van de Hub?**

Je website, Growth Rocket Hub, hosting, SSL, technisch onderhoud, updates en ondersteuning zitten samen in één pakket. Je betaalt €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten, exclusief btw. Voor de inbegrepen mogelijkheden van de Hub betaal je geen aparte abonnementskosten. Leveren wij een nieuw domein, dan is het eerste jaar gratis. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. Voor extra pagina’s of maatwerk spreken we de inhoud en prijs apart af.

### 5. Who takes care of hosting, SSL and security?

**EN — Who takes care of hosting, SSL and security?**

We handle hosting, SSL, maintenance and technical updates for your website. We also look after Growth Rocket Hub and provide support for using your website and Hub. These services are included in the package, so you do not need separate arrangements for the technical care we provide.

**NL — Wie regelt hosting, SSL en beveiliging?**

Wij regelen de hosting, SSL, het onderhoud en de technische updates van je website. Ook verzorgen we het beheer van Growth Rocket Hub en helpen we je bij het gebruik van je website en de Hub. Dit is inbegrepen in het pakket. Voor het technisch beheer dat wij verzorgen, hoef je dus niets apart te regelen.

### 6. Can I use my own domain name?

**EN — Can I use my own domain name?**

Yes. You can use your existing domain, or Growth Rocket can provide a new domain for your business. For a new domain provided by Growth Rocket, the first year is complimentary. From the second year onwards, you pay the renewal fee at actual cost. If you already have a website, we discuss what is needed to connect your domain and plan the switch before launch.

**NL — Kan ik mijn eigen domeinnaam gebruiken?**

Ja. Je kunt je bestaande domein gebruiken of Growth Rocket een nieuw domein voor je bedrijf laten verzorgen. Bij een nieuw domein dat wij leveren, is het eerste jaar gratis. Vanaf het tweede jaar betaal je de werkelijke verlengingskosten. Heb je al een website, dan bespreken we wat nodig is om je domein te koppelen en plannen we de overstap voordat de nieuwe website live gaat.

### 7. Do you write the content for my website?

**EN — Do you write the content for my website?**

Yes. Initial website copywriting is included in one primary language of your choice, such as Dutch, with up to two revisions. You share information about your services, contact details and any photos or branding you already have. We write and build the pages, then you review them before approving the website for launch.

**NL — Schrijven jullie de teksten voor mijn website?**

Ja. We schrijven de eerste websiteteksten in één hoofdtaal naar keuze, bijvoorbeeld Nederlands. Daarbij zijn maximaal twee correctierondes inbegrepen. Jij deelt informatie over je diensten, je contactgegevens en eventuele foto’s of huisstijl. Wij schrijven en bouwen de pagina’s. Daarna bekijk jij de website en geef je akkoord voordat deze live gaat.

### 8. How many pages does a Growth Rocket website include?

**EN — How many pages does a Growth Rocket website include?**

The standard package includes 8–10 pages built around your business. These typically cover your services, company information, contact details and other key content. If you include a blog or gallery, the blog overview page and gallery overview page each count as one page. Individual blog posts and gallery child pages do not count towards the 8–10 allowance. Additional standard pages or custom functionality can be scoped and priced separately.

**NL — Hoeveel pagina’s zijn inbegrepen bij een Growth Rocket-website?**

Het standaardpakket omvat 8–10 pagina’s, afgestemd op je bedrijf. Denk aan je diensten, bedrijfsinformatie, contactgegevens en andere belangrijke inhoud. Voeg je een blog of galerij toe, dan tellen de overzichtspagina van de blog en die van de galerij elk als één pagina. Afzonderlijke blogartikelen en onderliggende galerijpagina’s tellen niet mee voor de 8–10 pagina’s. Voor extra gewone pagina’s of maatwerkfunctionaliteit spreken we de inhoud en prijs apart af.

### 9. Can I get extra pages or custom features?

**EN — Can I get extra pages or custom features?**

Yes. If the standard package is not enough, Growth Rocket offers a bespoke plan. It brings the same advantages of the managed setup to a build shaped around your requirements, from additional pages to custom functionality. You can start with the core package and discuss more pages, features or support as your business grows. Email sales@getgrowthrocket.com to discuss your requirements.

**NL — Kan ik extra pagina’s of maatwerkfunctionaliteit krijgen?**

Ja. Heb je meer nodig dan het standaardpakket, dan biedt Growth Rocket een pakket op maat. Je krijgt dezelfde voordelen van een beheerde oplossing, afgestemd op jouw wensen, van extra pagina’s tot maatwerkfunctionaliteit. Je kunt beginnen met het basispakket en later meer pagina’s, mogelijkheden of ondersteuning bespreken als je bedrijf groeit. Mail naar sales@getgrowthrocket.com om je wensen te bespreken.

### 10. Is annual or monthly billing better value?

**EN — Is annual or monthly billing better value?**

Annual billing costs €690 per year, which works out at €57.50 per month and saves €138, about 17%, compared with paying €69 per month for 12 months. Monthly billing costs more over a year but spreads payments out. The one-time €290 onboarding fee applies to both options, and both include the same website, Growth Rocket Hub, hosting, maintenance and support. All amounts exclude VAT.

**NL — Wat is voordeliger: jaarlijks of maandelijks betalen?**

Bij jaarlijkse betaling betaal je €690 per jaar. Dat komt neer op €57,50 per maand en bespaart je €138, ongeveer 17%, ten opzichte van twaalf maandbetalingen van €69. Maandelijks betalen kost over een heel jaar meer, maar spreidt je betalingen. Bij beide opties betaal je €290 eenmalige opstartkosten en krijg je dezelfde website, Growth Rocket Hub, hosting, onderhoud en ondersteuning. Alle bedragen zijn exclusief btw.

### 11. Do Growth Rocket prices include VAT?

**EN — Do Growth Rocket prices include VAT?**

No. Growth Rocket prices are shown excluding VAT. The package costs €69 per month or €690 per year, plus a one-time €290 onboarding fee, with VAT added on top where it applies. If you have questions about invoicing for your business, contact the sales team at sales@getgrowthrocket.com before you sign up.

**NL — Zijn de prijzen van Growth Rocket inclusief btw?**

Nee. De prijzen van Growth Rocket zijn exclusief btw. Het pakket kost €69 per maand of €690 per jaar, plus €290 eenmalige opstartkosten. Waar van toepassing komt daar btw bij. Heb je vragen over de facturatie voor je bedrijf, neem dan vóór je aanmelding contact op met ons salesteam via sales@getgrowthrocket.com.

### 12. How do I get started?

**EN — How do I get started?**

Contact our sales team at sales@getgrowthrocket.com or +31 85 744 4176 to get started. We can discuss your business and answer questions about the website, Growth Rocket Hub and the package. If you need additional pages or custom functionality, let us know so we can discuss a bespoke plan.

**NL — Hoe kan ik beginnen?**

Neem contact op met ons salesteam via sales@getgrowthrocket.com of +31 85 744 4176. We bespreken je bedrijf en beantwoorden je vragen over de website, Growth Rocket Hub en het pakket. Heb je extra pagina’s of maatwerkfunctionaliteit nodig, laat het ons weten. Dan bespreken we een pakket op maat.

<details>
<summary>Questions this set replaced (6)</summary>

1. What is included in the Growth Rocket plan?
2. Is the website built for me?
3. What is Growth Rocket Hub?
4. Can I use my own domain?
5. Are hosting, SSL and maintenance included?
6. Can the package grow with my business?

</details>

> **Developer check (from the document):** Match the page CTA to a verified sales or sign-up destination. Do not label a pricing or contact anchor as a demo booking route.

---

## Team notes from the document (not website copy)

### Confirmed factual rules

- **Copywriting** — Initial website copy in one customer-selected primary language, with up to two revisions. Applied to Home Q3 and Pricing Q3 and Q7.
- **Domains** — A new domain provided by Growth Rocket is complimentary for the first year; renewal is charged at actual cost from year two. Applied to Pricing Q3, Q4 and Q6. Existing-domain use remains available.
- **Page allowance** — The blog overview and gallery overview each count as one of the 8–10 pages. Individual blog posts and gallery child pages do not count. Applied to Features Q13 and Pricing Q8. This does not establish ongoing content-production inclusions.
- **Reference prices** — €99 and €990 are promotional display figures, not calculation inputs. The annual comparison uses €828 versus €690, saving €138, approximately 17%. The FAQs do not describe the display figures as genuine previous prices.
- **Onboarding** — €290 once, covering the initial setup. Added as Pricing Q2 without inventing a more detailed list of deliverables.

### Developer verification (from the document)

- Every answer must be available to visitors. Prefer including answer text in the initial HTML; an expandable presentation is acceptable.
- Verify every internal link and the sales or sign-up CTA destination. Do not publish a demo label pointing only to a pricing or contact section.
- Place a clear excluding-VAT label with the subscription and onboarding amounts. Disclose new-domain renewal charges from year two near domain inclusions. Use €828 versus €690 for annual savings. Before publishing a crossed-out reference price, verify its basis; the FAQ does not substantiate €99 or €990 as former selling prices.
- Align all launch claims with seven working days and a nearby condition about complete materials and timely approvals.

### Structured data

Google stopped displaying FAQ rich results on 7 May 2026. Do not promise FAQ rich-result eligibility. If FAQPage structured data is retained, generate it only after the final questions, answers and destinations are approved, and keep it consistent with the visible page.

In this codebase the Homepage and Pricing JSON-LD is built from the same arrays the page renders, so it always matches the visible FAQs. No separate schema needs updating.

### Status of this update

- [x] FAQ copy for all three pages updated in the code, EN and NL (31 + 31).
- [x] Section heading set to "Your questions answered." / "Je vragen beantwoord." on all three pages.
- [ ] Items the document flags for other parts of the pages (CTA destinations, VAT labels near prices, crossed-out €99 / €990 reference prices, launch claims elsewhere on the site) are outside the FAQ sections and were not changed in this update.
