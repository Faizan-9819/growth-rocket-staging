import { FALLBACK_RATES, type EurRates } from "./currency";

/* ECB reference rates via Frankfurter (free, no key). They change once per
   working day, so a twice-daily refresh is plenty; the pages that render
   them regenerate on the same schedule. */
const RATES_URL =
  "https://api.frankfurter.dev/v1/latest?base=EUR&symbols=GBP,INR,USD";
const REFRESH_SECONDS = 60 * 60 * 12;

/** Today's euro exchange rates, or FALLBACK_RATES if the fetch fails. */
export async function getEurRates(): Promise<EurRates> {
  try {
    const res = await fetch(RATES_URL, {
      next: { revalidate: REFRESH_SECONDS },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return FALLBACK_RATES;
    const data = (await res.json()) as { rates?: Partial<EurRates> };
    const rates = { ...FALLBACK_RATES };
    for (const code of Object.keys(rates) as (keyof EurRates)[]) {
      const value = data.rates?.[code];
      if (typeof value === "number" && Number.isFinite(value) && value > 0) {
        rates[code] = value;
      }
    }
    return rates;
  } catch {
    return FALLBACK_RATES;
  }
}
