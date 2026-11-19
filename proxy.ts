import { NextResponse, type NextRequest } from "next/server";
import { translateDesignsPath } from "./app/designs/design-routes";
import { localizedHref } from "./app/i18n/locale-href";
import {
  LEGAL_HOST,
  LEGAL_ORIGIN,
  MAIN_HOSTS,
  MAIN_ORIGIN,
  isLegalPath,
} from "./app/lib/legal";
import {
  COUNTRY_OVERRIDE_COOKIE,
  CURRENCY_COOKIE,
  currencyForCountry,
} from "./app/lib/currency";
import { PHONE_REGION_COOKIE, phoneRegionForCountry } from "./app/lib/contact";

const LOCALE_COOKIE = "NEXT_LOCALE";
const NL_PREFIX = "/nl";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * EN routes that have no page under app/nl yet. Their /nl/… URL is rewritten
 * to the EN page (the URL stays /nl/…), so the language switch never lands on
 * a 404. Drop an entry once its app/nl page exists.
 *
 * Empty for now: the /blog listing used to fall back here, but it now has its
 * own app/nl/blog/page.tsx so /nl/blog gets Dutch metadata.
 */
const NL_FALLBACK_TO_EN: string[] = [];
// The DPA has no Dutch translation yet; this keeps the language switch on it
// from landing on a 404.
const NL_FALLBACK_TO_EN_EXACT: string[] = ["/dpa"];

/* Files served at fixed paths: the language handling below never applies to
   them. On the legal host, /sitemap.xml and /robots.txt are its own. */
const ROOT_FILES = new Set([
  "/sitemap.xml",
  "/ensitemap.xml",
  "/nlsitemap.xml",
  "/robots.txt",
  "/llms.txt",
]);
const LEGAL_FILES: Record<string, string> = {
  "/sitemap.xml": "/legal-sitemap.xml",
  "/robots.txt": "/legal-robots.txt",
};

/**
 * legal.getgrowthrocket.com serves only the legal pages, www everything else
 * (see app/lib/legal.ts). Returns the redirect or rewrite that keeps a
 * request on the right host, or null to carry on. Other hosts (localhost,
 * Vercel previews) are left alone.
 */
function routeByHost(request: NextRequest): NextResponse | null {
  const { pathname, search } = request.nextUrl;
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  if (host === LEGAL_HOST) {
    const legalFile = LEGAL_FILES[pathname];
    if (legalFile) {
      return NextResponse.rewrite(new URL(legalFile, request.url));
    }
    // Assets (images, fonts, files) load from either host.
    const isFile = /\.[a-z0-9]+$/i.test(pathname);
    if (!isFile && !isLegalPath(pathname)) {
      return NextResponse.redirect(`${MAIN_ORIGIN}${pathname}${search}`, 308);
    }
    return null;
  }

  if (MAIN_HOSTS.includes(host) && isLegalPath(pathname)) {
    return NextResponse.redirect(`${LEGAL_ORIGIN}${pathname}${search}`, 308);
  }
  return null;
}

function parseAcceptLanguage(header: string | null): "en" | "nl" | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, qStr] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: qStr ? Number(qStr) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of ranked) {
    if (tag.startsWith("nl")) return "nl";
    if (tag.startsWith("en")) return "en";
  }
  return null;
}

function route(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;

  const hostRoute = routeByHost(request);
  if (hostRoute) return hostRoute;
  if (ROOT_FILES.has(pathname)) return NextResponse.next();

  const startsWithNl =
    pathname === NL_PREFIX || pathname.startsWith(`${NL_PREFIX}/`);

  if (startsWithNl) {
    const enPath = pathname.slice(NL_PREFIX.length) || "/";

    // /nl/designs/… and /nl/design/… were never NL URLs — the NL designs
    // section lives at /nl/ontwerpen/… with translated industry slugs.
    const enDesigns = enPath.match(/^\/designs?(\/|$)/)
      ? translateDesignsPath(enPath, "nl")
      : null;
    if (enDesigns) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = enDesigns;
      // Permanent: these URLs will never be NL pages.
      return NextResponse.redirect(redirectUrl, 308);
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", "nl");
    requestHeaders.set("x-pathname", pathname);

    // Routes with no NL page yet serve the EN page under the /nl URL.
    const response =
      NL_FALLBACK_TO_EN_EXACT.includes(enPath) ||
      NL_FALLBACK_TO_EN.some(
        (base) => enPath === base || enPath.startsWith(`${base}/`),
      )
      ? NextResponse.rewrite(new URL(`${enPath}${search}`, request.url), {
          request: { headers: requestHeaders },
        })
      : NextResponse.next({
          request: { headers: requestHeaders },
        });
    response.cookies.set(LOCALE_COOKIE, "nl", {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const browserLocale = parseAcceptLanguage(
    request.headers.get("accept-language"),
  );

  // Only auto-redirect on first visit (no cookie). If user has a cookie they've
  // made an explicit choice via the toggle — never override it with a redirect.
  if (!cookieLocale && browserLocale === "nl") {
    const redirectUrl = request.nextUrl.clone();
    // The same EN→NL mapping every link uses (NL slugs, designs), so this
    // lands on the current NL URL in one hop instead of an old NL slug that
    // then redirects again.
    redirectUrl.pathname = localizedHref(pathname, "nl");
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", "en");
  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  if (cookieLocale !== "en") {
    response.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
  }
  return response;
}

const ONE_DAY = 60 * 60 * 24;

/**
 * Stores the visitor's pricing currency (lib/currency) from their IP country,
 * or from `?country=XX` when testing (`?country=auto` drops it again).
 */
function setCurrency(request: NextRequest, response: NextResponse) {
  const param = request.nextUrl.searchParams
    .get("country")
    ?.trim()
    .toUpperCase();
  let override = request.cookies.get(COUNTRY_OVERRIDE_COOKIE)?.value;
  if (param === "AUTO") {
    response.cookies.delete(COUNTRY_OVERRIDE_COOKIE);
    override = undefined;
  } else if (param && /^[A-Z]{2}$/.test(param)) {
    // Session cookie: lasts while testing, gone with the browser.
    response.cookies.set(COUNTRY_OVERRIDE_COOKIE, param, {
      path: "/",
      sameSite: "lax",
    });
    override = param;
  }

  const country = override ?? request.headers.get("x-vercel-ip-country");
  const currency = country ? currencyForCountry(country) : "EUR";
  if (request.cookies.get(CURRENCY_COOKIE)?.value !== currency) {
    response.cookies.set(CURRENCY_COOKIE, currency, {
      path: "/",
      maxAge: ONE_DAY,
      sameSite: "lax",
    });
  }

  // The visitor's phone number (REGIONAL_PHONES in lib/contact), from the
  // same country.
  const phoneRegion = country ? phoneRegionForCountry(country) : null;
  const storedRegion = request.cookies.get(PHONE_REGION_COOKIE)?.value;
  if (phoneRegion && storedRegion !== phoneRegion) {
    response.cookies.set(PHONE_REGION_COOKIE, phoneRegion, {
      path: "/",
      maxAge: ONE_DAY,
      sameSite: "lax",
    });
  } else if (!phoneRegion && storedRegion) {
    response.cookies.delete(PHONE_REGION_COOKIE);
  }
}

export function proxy(request: NextRequest) {
  const response = route(request);
  setCurrency(request, response);
  return response;
}

export const config = {
  matcher: [
    // Sitemaps, robots.txt and llms.txt reach the proxy so the legal host can
    // serve its own; on every other host they pass straight through
    // (ROOT_FILES above). /_vercel (Web Analytics) never does: the legal
    // host would redirect its page views away.
    "/((?!api|_next/static|_next/image|_vercel|figma|favicon.ico).*)",
  ],
};
