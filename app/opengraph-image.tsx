import { renderShareImage } from "./lib/share-image";

export const alt = "Growth Rocket - Not just a website. A complete business system.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage("en");
}
