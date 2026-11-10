"use client";

// import Image from "next/image";
import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import IndustrySection from "./IndustrySection";
import TemplateCard from "../designs/TemplateCard";
import { templates } from "../designs/templates-data";
import { useIndustryCopy } from "./copy";
import { useLanguage } from "../i18n/LanguageProvider";
// import { LOCAL_IMAGE } from "./shared";

/** Every template filed under one of these categories on /designs. */
export function templatesFor(categories: string[]) {
  return templates.filter((template) =>
    categories.includes(template.category),
  );
}

/* Unlinked placeholder cards for the designs a page's copy names but that
   don't exist yet. Switched off for now: a page with no real templates hides
   the whole designs section instead (see below). Kept for when we want the
   named designs back as "coming soon" cards.

function PlaceholderCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <article className="overflow-hidden border border-[rgb(10_5_22_/_11%)] bg-[#eeeeee]">
      <Image
        src={LOCAL_IMAGE}
        alt=""
        width={752}
        height={678}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[1.22] w-full object-cover object-center max-sm:aspect-[1.42]"
      />
      <div className="px-[20px] pt-[18px] pb-[20px]">
        <h3 className="font-bricolage text-[21px] leading-[1.05] font-semibold tracking-[-0.035em] text-[#0a0516]">
          {title}
        </h3>
        <p className="mt-[4px] text-[14px] text-[#625a70]">{subtitle}</p>
      </div>
    </article>
  );
}
*/

export default function IndustryDesigns() {
  const { DESIGNS } = useIndustryCopy();
  const { locale } = useLanguage();
  const industryTemplates = templatesFor(DESIGNS.templateCategories);

  /* No relevant template for this industry yet (consultants, accountants,
     coaches, handyman): hide the section rather than show unrelated designs.
     IndustryHero drops its "Website designs" jump link to match. */
  if (industryTemplates.length === 0) return null;

  return (
    <IndustrySection id="industry-designs" className="bg-[#0a0516] text-white">
      <RevealGroup>
        <div className="mb-[36px] flex items-end We do the setup, you have the say. gap-[60px] max-[900px]:flex-col max-[900px]:items-start justify-between! max-[900px]:gap-[20px]">
          <RevealItem className="w-[58%] max-[900px]:w-full">
            <h2 className="font-bricolage text-[clamp(34px,3.7vw,52px)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {DESIGNS.heading}
              <br />
              <span className="text-[#e4fa65]">{DESIGNS.headingAccent}</span>
            </h2>
          </RevealItem>
          <RevealItem
            as="p"
            className="w-[32%]  font-sans text-[15px] leading-[1.6] text-[#bfb8ce] max-[900px]:w-full"
          >
            {DESIGNS.intro}
          </RevealItem>
        </div>
      </RevealGroup>

      <RevealGroup delay={0.08}>
        {/* The industry's real templates, on the /designs listing's own card
            and grid (3 / 2 / 1 columns, 30px gap), each linking to its
            template page. */}
        <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {industryTemplates.map((template) => (
            <RevealItem key={template.slug} className="min-w-0">
              <TemplateCard
                template={template}
                locale={locale}
                subtitle={DESIGNS.templateSubtitles?.[template.slug]}
              />
            </RevealItem>
          ))}
          {/* Placeholder cards, switched off with PlaceholderCard above:
          {DESIGNS.placeholders?.map((design) => (
            <RevealItem key={design.title} className="min-w-0">
              <PlaceholderCard {...design} />
            </RevealItem>
          ))} */}
        </div>

        <RevealItem
          as="p"
          className="mt-[23px] font-sans text-[12px] leading-[1.6] text-[#bfb8ce]"
        >
          {DESIGNS.small}
        </RevealItem>
      </RevealGroup>
    </IndustrySection>
  );
}
