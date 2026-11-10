import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { CLEANING } from "@/app/industry/website-for-cleaning-businesses/data";

/* The same page as /industry/website-for-cleaning-businesses, with its Dutch copy. */
export const metadata = industryMetadata(CLEANING, "nl");

export default function Page() {
  return <IndustryRoute page={CLEANING} locale="nl" />;
}
