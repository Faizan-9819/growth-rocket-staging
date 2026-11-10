import IndustryRoute, { industryMetadata } from "@/app/industry/IndustryRoute";
import { ACCOUNTANTS } from "@/app/industry/website-for-accountants/data";

/* The same page as /industry/website-for-accountants, with its Dutch copy. */
export const metadata = industryMetadata(ACCOUNTANTS, "nl");

export default function Page() {
  return <IndustryRoute page={ACCOUNTANTS} locale="nl" />;
}
