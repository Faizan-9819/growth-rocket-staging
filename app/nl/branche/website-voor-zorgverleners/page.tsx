import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { HEALTHCARE } from "@/app/industry/website-for-healthcare-professionals/data";

/* The same page as /industry/website-for-healthcare-professionals, with its Dutch copy. */
export const metadata = industryMetadata(HEALTHCARE, "nl");

export default function Page() {
  return <IndustryRoute page={HEALTHCARE} locale="nl" />;
}
