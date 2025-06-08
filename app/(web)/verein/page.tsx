import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { SubMenu } from "#/components/navigation/SubMenu";
import { verein } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(verein.name),
};

export default function Verein() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200 pb-2">
      <div className="py-4 w-full bg-svw-blue-dark text-white">
        <SubMenu item={verein} />
      </div>
      <ArticleSection tags={["Verein"]} />
    </div>
  );
}
