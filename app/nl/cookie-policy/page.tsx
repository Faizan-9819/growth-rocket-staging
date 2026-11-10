import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, socialMeta } from "../../lib/seo";
import {
  ExternalLink,
  LegalHero,
  LINK_CLASS,
  Mail,
  Section,
  Sub,
  Table,
  Ul,
} from "../../components/legal/LegalContent";
import LegalDocument from "../../components/legal/LegalDocument";
import CookieSettingsButton from "../../components/legal/CookieSettingsButton";

const TITLE = "Cookiebeleid — Growth Rocket";
const DESCRIPTION =
  "Ontdek hoe Growth Rocket cookies en vergelijkbare trackingtechnologieën gebruikt op onze website.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...socialMeta(TITLE, DESCRIPTION, "/nl/cookie-policy"),
  alternates: {
    canonical: "https://legal.getgrowthrocket.com/nl/cookie-policy",
    languages: {
      en: "https://legal.getgrowthrocket.com/cookie-policy",
      nl: "https://legal.getgrowthrocket.com/nl/cookie-policy",
    },
  },
};

const SUPPORT_EMAIL = "support@getgrowthrocket.com";

/* Tekst: ggr-legal-pages-content/final-doc-for-cookie-policy-nl.docx, woord
   voor woord (zie ggr-legal-pages-content/legal-pages-plan.md). */
export default function NlCookiePolicyPage() {
  return (
    // pt-22 clears the fixed Navbar, as HomeShell does, so the dark hero
    // card sits below the bar rather than under it.
    <main className="min-h-screen bg-white pt-22">
      <JsonLd
        data={buildPageSchema(
          "/nl/cookie-policy",
          "Cookiebeleid - Growth Rocket",
          DESCRIPTION,
        )}
      />
      <LegalHero
        title="Cookiebeleid"
        meta="Laatst bijgewerkt: 28-10-2026 · Versie 1.0"
      />

      <LegalDocument tocHeading="Inhoudsopgave">
        <p className="font-sans text-[16px] leading-[1.7] text-[#625a70]">
          {`Dit beleid legt uit welke cookies en vergelijkbare technologieën Parashift Technologies B.V., handelend onder het merk Growth Rocket ("Growth Rocket", "wij"), gebruikt op getgrowthrocket.com en in de Growth Rocket Hub (hub.getgrowthrocket.com), en hoe u deze beheert. Onze Privacyverklaring legt het bijbehorende gebruik van persoonsgegevens uit. Websites van klanten worden afzonderlijk behandeld in onderdeel 5.`}
        </p>

        <Section title="1. Wat zijn cookies">
          <p>
            {`Cookies zijn kleine bestanden die een website in uw browser opslaat. Vergelijkbare technologieën, zoals lokale opslag en trackingscripts, werken op vergelijkbare wijze. In dit beleid omvat het woord "cookies" al deze technologieën.`}
          </p>
        </Section>

        <Section title="2. Uw keuze">
          <Ul
            items={[
              `Bij uw eerste bezoek aan getgrowthrocket.com kunt u via onze banner alle optionele cookies accepteren, ze allemaal weigeren of per categorie kiezen. Optionele categorieën staan uit totdat u ze kiest. Weigeren is even eenvoudig als accepteren, en u kunt de website gebruiken zonder akkoord te gaan met analyse of advertenties.`,
              `Voordat u toestemming geeft, en als u weigert, gebruiken wij alleen technologieën die nodig zijn om de gevraagde dienst te leveren of communicatie over te brengen. Onze analyse- en advertentietools blijven geblokkeerd. Er worden geen scripts van Google of Microsoft geladen en er worden geen gegevens naar hen verstuurd voordat u toestemming geeft.`,
              <>
                {`U kunt uw toestemming op elk moment wijzigen of intrekken via "`}
                <CookieSettingsButton>Cookie-instellingen</CookieSettingsButton>
                {`", even eenvoudig als u die heeft gegeven. Intrekking stopt verder gebruik op basis van toestemming, maar heeft geen gevolgen voor verwerkingen die vóór de intrekking rechtmatig waren. Waar relevant geven wij de intrekking ook door aan de betrokken aanbieders. Uw keuze wordt 6 maanden onthouden; daarna vragen wij opnieuw om uw keuze. De link ‘`}
                <CookieSettingsButton>Cookie-instellingen</CookieSettingsButton>
                {`’ staat onderaan elke pagina. Als u uw toestemming intrekt, worden de betrokken analyse- of advertentietools onmiddellijk niet meer geladen en verwijderen wij hun cookies die op ons domein zijn geplaatst (zoals _ga, _clck en _gcl_au). Cookies op de eigen domeinen van aanbieders (zoals MUID van Microsoft) kunt u alleen via uw browserinstellingen verwijderen.`}
              </>,
              `Toestemming is niet vereist voor opslag of toegang die strikt noodzakelijk is om een door u gevraagde dienst te leveren, of uitsluitend om communicatie over te brengen, op grond van artikel 11.7a van de Nederlandse Telecommunicatiewet en eventuele toepasselijke vergelijkbare regels. Een cookie ‘functioneel’ noemen maakt deze niet automatisch vrijgesteld. Wij vragen toestemming voor de hieronder beschreven analyse- en marketingtools. Het ondertekenen van het Klantcontract, het accepteren van de Algemene Voorwaarden of Verwerkersovereenkomst (DPA), of het bevestigen van kennisneming van de Privacyverklaring geeft geen toestemming voor cookies.`,
            ]}
          />
        </Section>

        <Section title="3. Cookies op getgrowthrocket.com">
          <Sub>Strikt noodzakelijk (altijd aan)</Sub>
          <Table
            head={["Naam", "Aanbieder", "Doel", "Verloopt na"]}
            rows={[
              [
                "Toestemmingscookie van onze cookiebanner",
                "Growth Rocket (cookiebanner)",
                "Onthoudt uw cookiekeuze",
                "6 maanden",
              ],
              [
                "NEXT_LOCALE",
                "Growth Rocket",
                "Onthoudt uw taalvoorkeur, zodat de website in de door u gekozen taal wordt getoond",
                "1 jaar",
              ],
            ]}
          />

          <Sub>Analyse (alleen als u accepteert)</Sub>
          <Table
            head={["Naam", "Aanbieder", "Doel", "Verloopt na"]}
            rows={[
              [
                "_ga",
                "Google Analytics (Google Ireland Ltd.)",
                "Onderscheidt bezoekers, zodat wij bezoeken kunnen tellen en kunnen zien welke pagina’s worden gebruikt",
                "Maximaal 2 jaar",
              ],
              [
                "_ga_12W07KV2LM",
                "Google Analytics (Google Ireland Ltd.)",
                "Houdt het huidige bezoek bij",
                "Maximaal 2 jaar",
              ],
              [
                "_clck",
                "Microsoft Clarity (Microsoft Ireland Operations Ltd.)",
                "Herkent een terugkerende bezoeker in Clarity",
                "1 jaar",
              ],
              [
                "_clsk",
                "Microsoft Clarity",
                "Koppelt de pagina’s van één bezoek aan één opname",
                "1 dag",
              ],
              [
                "CLID, MUID (geplaatst op domeinen van Microsoft)",
                "Microsoft Clarity",
                "Herkennen een bezoeker op verschillende websites die Clarity gebruiken",
                "Ongeveer 1 jaar",
              ],
            ]}
          />
          <p>
            {`Microsoft Clarity kan klikken, scrollen en interacties met pagina’s vastleggen om ons inzicht te geven in het gebruik van de website. Clarity is ingesteld om formuliervelden en andere gevoelige inhoud te maskeren, zodat opnamen niet vastleggen wat u in formulieren typt. Microsoft kan Clarity-gegevens ook voor eigen doeleinden gebruiken, zoals beschreven in onze Privacyverklaring. Google Analytics-gegevens worden 14 maanden bewaard; Clarity-opnamen en andere gegevens 30 dagen (maximaal 9 maanden voor opnamen die wij markeren om te bewaren voor beoordeling, en voor heatmaps en samenvattende statistieken). Deze bewaartermijnen bij de aanbieders staan los van de vervaldatum van cookies op uw apparaat. Google Analytics en Microsoft Clarity zijn de enige analysetools op onze website.`}
          </p>

          <Sub>Marketing (alleen als u accepteert)</Sub>
          <Table
            head={["Naam", "Aanbieder", "Doel", "Verloopt na"]}
            rows={[
              [
                "_gcl_au",
                "Google Ads (Google Ireland Ltd.)",
                "Meet of onze advertenties tot aanvragen leiden",
                "90 dagen",
              ],
              [
                "_gcl_aw",
                "Google Ads (Google Ireland Ltd.)",
                "Slaat de advertentieklik-ID op wanneer u via een van onze advertenties op de website komt",
                "90 dagen",
              ],
            ]}
          />
          <p>
            {`Met uw toestemming meet Google Ads gebeurtenissen, zoals het versturen van een contactformulier of klikken op een telefoonnummer, om ons inzicht te geven in welke advertenties tot aanvragen leiden. Wij gebruiken Google Ads niet voor remarketing en sturen geen formulierinhoud of gehashte identificatoren naar Google (geen verbeterde conversies). Google bewaart conversiegegevens als afzonderlijke verwerkingsverantwoordelijke volgens zijn eigen bewaarbeleid. Google vermeldt dat het advertentieloggegevens anonimiseert door na 9 maanden een deel van het IP-adres en na 18 maanden cookie-informatie te verwijderen. In ons Google Ads-account zien wij alleen geaggregeerde conversierapporten, geen informatie die individuele bezoekers identificeert.`}
          </p>

          <Sub>Externe media</Sub>
          <p>
            {`Onze video’s over functies gebruiken YouTube. Wanneer het afspelen niet-noodzakelijke opslag, toegang of tracking met zich meebrengt, verkrijgen wij geïnformeerde toestemming voordat die verwerking begint. Een afspeelknop geldt alleen als toestemming als deze de betreffende verwerking duidelijk uitlegt en een echte keuze biedt. Het privacyvriendelijke domein van YouTube betekent op zichzelf niet dat er geen persoonsgegevens worden verwerkt of dat toestemming overbodig is. Voordat een video wordt geladen, tonen wij een melding dat deze wordt aangeboden door YouTube (Google Ireland Limited), dat cookies kan plaatsen en kijkgegevens kan verzamelen. De video wordt pas vanaf youtube-nocookie.com geladen wanneer u daarvoor kiest. Tot dat moment worden geen gegevens naar YouTube verstuurd. Na het laden geldt het eigen privacybeleid van YouTube voor de cookies en gegevens die het gebruikt.`}
          </p>

          <Sub>Links naar andere diensten</Sub>
          <p>
            {`Onze knoppen voor WhatsApp, Instagram, LinkedIn, YouTube en X zijn gewone links. Ze laden op onze website niets van die diensten en plaatsen geen cookies. Zodra u die diensten opent, gelden hun eigen privacy- en cookiebeleidsregels.`}
          </p>
        </Section>

        <Section title="4. Cookies in de Growth Rocket Hub">
          <p>
            {`De DPA bevestigt dat toegangstokens voor de Hub na 15 minuten verlopen en sessies na zeven dagen inactiviteit. Uitloggen maakt die sessie en de daarvoor uitgegeven tokens onmiddellijk ongeldig; het wijzigen of resetten van een wachtwoord maakt alle sessies en de daarvoor uitgegeven tokens ongeldig. Dit zijn authenticatieregels, geen bevestiging van de levensduur of naam van een browsercookie. De Hub gebruikt geen analyse-, advertentie- of trackingtechnologieën en toont daarom geen cookiebanner. Onze lettertypen worden vanaf onze eigen server geladen, zodat uw browser geen verbinding maakt met Google Fonts.`}
          </p>
          <Table
            head={["Naam", "Type", "Doel", "Verloopt na"]}
            rows={[
              [
                "__Secure-next-auth.session-token",
                "Authenticatiecookie, strikt noodzakelijk",
                "Houdt u ingelogd",
                "7 dagen",
              ],
              [
                "__Host-next-auth.csrf-token",
                "Beveiligingscookie voor inloggen, strikt noodzakelijk",
                "Beschermt het inlogformulier tegen cross-site request forgery",
                "Einde van de browsersessie",
              ],
              [
                "__Secure-next-auth.callback-url",
                "Cookie voor terugkeer na inloggen, strikt noodzakelijk",
                "Brengt u na het inloggen terug naar de juiste pagina",
                "Einde van de browsersessie",
              ],
              [
                "sidebar_state",
                "Cookie die alleen wordt geplaatst wanneer u de zijbalk opent of sluit, om de door u gekozen indeling te bieden",
                "Onthoudt de door u gekozen zijbalkinstelling",
                "7 dagen",
              ],
              [
                "blog_draft_<id>",
                "Lokale opslag op uw apparaat, alleen gebruikt tijdens het schrijven van een blogbericht om uw niet-opgeslagen werk te bewaren",
                "Bewaart een niet-opgeslagen blogconcept als de pagina wordt gesloten",
                "Totdat u het concept opslaat of verwijdert",
              ],
            ]}
          />
          <p>
            {`De Growth Rocket API (api.getgrowthrocket.com) plaatst geen cookies.`}
          </p>
        </Section>

        <Section title="5. Websites van bedrijven die Growth Rocket gebruiken">
          <p>
            {`Elk bedrijf bepaalt het gebruik van zijn website en verstrekt de relevante privacy- en cookie-informatie, waaronder informatie over eventuele optionele tools die het kiest. Growth Rocket verwerkt Klantgegevens namens dat bedrijf onder de DPA en blijft verantwoordelijk voor de eigen overeengekomen uitvoering en verplichtingen als verwerker. De verantwoordelijkheid van de klant voor de informatieverstrekking doet niets af aan die verplichtingen. De overeengekomen registratie van de eerste opening van een reviewformulier gebruikt geen e-mailpixel, cookies of andere opslag op het apparaat van de bezoeker en legt in die registratie geen IP-adres of apparaatgegevens vast. Afzonderlijke serververzoeklogs kunnen IP-adressen bevatten. Wij volgen niet of e-mails worden geopend of offertes en facturen worden bekeken. Dit betekent niet dat elke klantwebsite cookievrij is; de daadwerkelijke functies en tools van derden moeten afzonderlijk worden beoordeeld.`}
          </p>
        </Section>

        <Section title="6. Cookies verwijderen en blokkeren">
          <p>
            {`U kunt cookies en lokale opslag verwijderen of cookies blokkeren via uw browserinstellingen. Het blokkeren van noodzakelijke authenticatiecookies kan inloggen in de Hub of de normale werking verhinderen. Het wissen van lokale opslag kan een niet-opgeslagen concept verwijderen. Het verwijderen van browsercookies verwijdert op zichzelf geen persoonsgegevens die Growth Rocket of een aanbieder al bewaart, en geeft uw intrekking niet noodzakelijk aan ons door. Gebruik `}
            <CookieSettingsButton>Cookie-instellingen</CookieSettingsButton>
            {` om optionele toestemming in te trekken; de Privacyverklaring legt uit hoe u om verwijdering van persoonsgegevens kunt vragen.`}
          </p>
        </Section>

        <Section title="7. Meer informatie">
          <p>
            {`Onze Privacyverklaring op `}
            <Link href="/nl/privacy-policy" className={LINK_CLASS}>
              https://legal.getgrowthrocket.com/nl/privacy-policy
            </Link>
            {` legt de bijbehorende verwerking van persoonsgegevens, ontvangers, internationale doorgiften, bewaartermijnen, uw rechten en de mogelijkheid om een klacht in te dienen uit. Vragen: `}
            <Mail email={SUPPORT_EMAIL} />
            {`. Informatie van aanbieders: Google (Analytics, Ads en YouTube): `}
            <ExternalLink href="https://policies.google.com/privacy" />
            {` en `}
            <ExternalLink href="https://policies.google.com/technologies/partner-sites" />
            {`. Microsoft (Clarity): `}
            <ExternalLink href="https://privacy.microsoft.com/privacystatement" />
            {`. Onze Privacyverklaring beschrijft deze ontvangers en de waarborgen voor internationale doorgiften. Wij werken dit beleid bij als ons cookiegebruik verandert. Een nieuw doel waarvoor toestemming nodig is, begint pas nadat die toestemming is verkregen; het publiceren van een update of het wijzigen van het Contract, de Algemene Voorwaarden of de DPA geeft op zichzelf geen toestemming. Wij bewaren een registratie van uw cookiekeuzes (uw keuze, datum en tijd, de beleidsversie en een pseudonieme toestemmings-ID) zolang uw toestemming actief is en tot vijf jaar nadat u deze intrekt of deze verloopt, zodat wij kunnen aantonen waarmee u akkoord bent gegaan. Dit staat los van de cookie die uw keuze in uw browser onthoudt.`}
          </p>
        </Section>
      </LegalDocument>
    </main>
  );
}
