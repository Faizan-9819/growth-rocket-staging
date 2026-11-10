import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { COACHES } from "@/app/industry/coaching-website/data";

/* The same page as /industry/coaching-website, with its Dutch copy. */
export const metadata = industryMetadata(COACHES, "nl");

export default function Page() {
  return <IndustryRoute page={COACHES} locale="nl" />;
}
