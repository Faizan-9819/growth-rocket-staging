import { Children, isValidElement, type ReactNode } from "react";
import BlogToc, { type TocEntry } from "@/components/blogs/shared/LegalToc";

/** The id a legal section's <h2> carries, from its title — what the table of
    contents links to, and a stable #anchor to share. */
export function legalSectionId(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * The body of a legal page: its sections, with the blog posts' table of
 * contents (BlogToc) beside them on large screens — sticky, highlighting the
 * section being read, each link gliding to its heading.
 *
 * The contents are read from the sections themselves on the server: every
 * direct child with a string `title` (each page's <Section>) becomes an
 * entry, so adding or renaming a section needs nothing else. Below lg the
 * column stands alone, as on the blog.
 */
export default function LegalDocument({
  children,
  tocHeading,
  className = "fix py-[56px] md:py-[80px]",
}: {
  children: ReactNode;
  /** The label above the contents ("Contents", "Inhoudsopgave"). */
  tocHeading: string;
  /** The outer wrapper's spacing, kept per page. */
  className?: string;
}) {
  const entries: TocEntry[] = Children.toArray(children).flatMap((child) => {
    if (!isValidElement<{ title?: unknown }>(child)) return [];
    const { title } = child.props;
    return typeof title === "string"
      ? [{ id: legalSectionId(title), label: escapeHtml(title) }]
      : [];
  });

  return (
    <div className={className}>
      {/* Legal section titles run long ("4. Signup onboarding and
          delivery"), so the contents column is wider than the blog's and sits
          closer to the text: 264 + 32 + 780 = 1076. */}
      <div className="mx-auto flex max-w-[780px] gap-8 lg:max-w-[1076px]">
        <BlogToc
          entries={entries}
          heading={tocHeading}
          widthClassName="lg:w-[264px]"
        />
        <div className="flex min-w-0 max-w-[780px] flex-1 flex-col gap-10 px-5 py-8 bg-[#F5F2FA] rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}
