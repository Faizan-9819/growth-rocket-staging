import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./Footer.module.css";

/* ---------- Content: edit these arrays, not the markup ---------- */
const FEATURES = {
    title: "Features",
    links: [
      { label: "Website", href: "/features/website" },
      { label: "Appointments", href: "/features/appointments" },
      { label: "Enquiries", href: "/features/enquiries" },
      { label: "Quotes & invoices", href: "/features/quotes-invoices" },
      { label: "Contact book", href: "/features/contact-book" },
      { label: "Support", href: "/features#support" },
    ],
};

const COLUMNS = [
  {
    title: "Pricing",
    links: [
      { label: "Plans & pricing", href: "/pricing" },
      { label: "What's included", href: "/pricing#included" },
      { label: "Pricing FAQs", href: "/pricing#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Affiliate program", href: "/affiliate" },
      { label: "Design", href: "/design" },
    ],
  },
];

const TRADES = [
  { label: "Cleaning", href: "/for/cleaning" },
  { label: "Dentist", href: "/for/dentist" },
  { label: "Electrician", href: "/for/electrician" },
  { label: "Logistics", href: "/for/logistics" },
  { label: "Physiotherapy", href: "/for/physiotherapy" },
  { label: "Plumber", href: "/for/plumber" },
  { label: "Real Estate Consultant", href: "/for/real-estate-consultant" },
  { label: "Saloon", href: "/for/saloon" },
  { label: "Solar Installation", href: "/for/solar-installation" },
];

const CONTACT = {
  company: "Parashift Technologies B.V.",
  address: ["World Trade Center", "Prinses Margrietplantsoen 33", "2595 AM 's-Gravenhage, Netherlands"],
  emails: [
    { label: "sales@getgrowthrocket.com", href: "mailto:sales@getgrowthrocket.com" },
    { label: "support@getgrowthrocket.com", href: "mailto:support@getgrowthrocket.com" },
  ],
  phone: { label: "+31 85 744 4176", href: "tel:+31857444176" },
};

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "WhatsApp", href: "#", Icon: FaWhatsapp },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Imprint", href: "/imprint" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
];

function Logo({ large = false }) {
  return (
    <Link href="/" className={`${styles.logo} ${large ? styles.logoLarge : ""}`} aria-label="Growth Rocket home">
      <span className={styles.logoMark}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#5a31f4" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
        </svg>
      </span>
      <span className={styles.logoText}>GROWTH<br />ROCKET</span>
    </Link>
  );
}

function LinkList({ title, links }) {
  return (
    <div>
      <h3 className={styles.colTitle}>{title}</h3>
      <ul className={styles.colList}>
        {links.map((l) => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Row 1 — logo + intro | headline + CTA */}
      <div className={styles.row}>
        <div className={styles.introCol}>
          <Logo />
          <p className={styles.intro}>
            A complete business system for small businesses — website, booking, and a simple Hub to manage it all.
          </p>
        </div>
        <div className={styles.hero}>
          <p className={styles.headline}>Your website and everyday business tools.</p>
          <Link href="/start" className={styles.cta}>
            Start with Growth Rocket <FiArrowUpRight aria-hidden />
          </Link>
        </div>
      </div>

      {/* Row 2 — Features | Pricing | Company | Built for your trade */}
      <nav className={styles.row} aria-label="Footer">
        <LinkList {...FEATURES} />
        {COLUMNS.map((c) => (
          <LinkList key={c.title} {...c} />
        ))}
        <div className={styles.wideCol}>
          <h3 className={styles.colTitle}>Built for your trade</h3>
          <ul className={styles.tags}>
            {TRADES.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className={styles.tag}>{t.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Row 3 — Visit | Email | Call | Follow us */}
      <div className={styles.row}>
        <address className={`${styles.contactBlock} ${styles.visitCol}`}>
          <h3 className={styles.colTitle}>Visit</h3>
          <strong>{CONTACT.company}</strong>
          {CONTACT.address.map((line) => <span key={line}>{line}</span>)}
        </address>
        <div className={`${styles.contactBlock} ${styles.emailCol}`}>
          <h3 className={styles.colTitle}>Email</h3>
          {CONTACT.emails.map((e) => <a key={e.href} href={e.href}>{e.label}</a>)}
        </div>
        <div className={styles.contactBlock}>
          <h3 className={styles.colTitle}>Call</h3>
          <a href={CONTACT.phone.href}>{CONTACT.phone.label}</a>
        </div>
        <div className={`${styles.contactBlock} ${styles.wideCol}`}>
          <h3 className={styles.colTitle}>Follow us</h3>
          <div className={styles.social}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4 — copyright | legal */}
      <div className={`${styles.row} ${styles.rowBottom}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Growth Rocket by{" "}<strong>Parashift Technologies</strong>
        </p>
        <nav className={styles.legal} aria-label="Legal">
          {LEGAL.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
