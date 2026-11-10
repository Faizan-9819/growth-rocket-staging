import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { HAIR_SALONS } from "@/app/industry/website-for-hair-salons/data";

/* The same page as /industry/website-for-hair-salons, with its Dutch copy. */
export const metadata = industryMetadata(HAIR_SALONS, "nl");

export default function Page() {
  return <IndustryRoute page={HAIR_SALONS} locale="nl" />;
}
