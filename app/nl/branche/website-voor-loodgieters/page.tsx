import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { PLUMBERS } from "@/app/industry/website-for-plumbers/data";

/* The same page as /industry/website-for-plumbers, with its Dutch copy. */
export const metadata = industryMetadata(PLUMBERS, "nl");

export default function Page() {
  return <IndustryRoute page={PLUMBERS} locale="nl" />;
}
