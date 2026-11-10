import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { ACCOUNTANTS } from "./data";

export const metadata = industryMetadata(ACCOUNTANTS, "en");

export default function Page() {
  return <IndustryRoute page={ACCOUNTANTS} locale="en" />;
}
