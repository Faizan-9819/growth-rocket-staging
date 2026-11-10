import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { COACHES } from "./data";

export const metadata = industryMetadata(COACHES, "en");

export default function Page() {
  return <IndustryRoute page={COACHES} locale="en" />;
}
