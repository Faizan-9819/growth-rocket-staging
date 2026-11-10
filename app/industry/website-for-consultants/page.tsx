import IndustryRoute, { industryMetadata } from "../IndustryRoute";
import { CONSULTANTS } from "./data";

export const metadata = industryMetadata(CONSULTANTS, "en");

export default function Page() {
  return <IndustryRoute page={CONSULTANTS} locale="en" />;
}
