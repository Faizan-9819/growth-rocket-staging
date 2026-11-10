import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { CONSULTANTS } from "@/app/industry/website-for-consultants/data";

/* The same page as /industry/website-for-consultants, with its Dutch copy. */
export const metadata = industryMetadata(CONSULTANTS, "nl");

export default function Page() {
  return <IndustryRoute page={CONSULTANTS} locale="nl" />;
}
