import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { HANDYMAN } from "@/app/industry/website-for-handyman-businesses/data";

/* The same page as /industry/website-for-handyman-businesses, with its Dutch copy. */
export const metadata = industryMetadata(HANDYMAN, "nl");

export default function Page() {
  return <IndustryRoute page={HANDYMAN} locale="nl" />;
}
