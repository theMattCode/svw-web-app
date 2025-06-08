import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { SubMenu } from "#/components/navigation/SubMenu";
import { fussball } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";
import { PageContent } from "#/components/web/page/PageContent";

export const metadata: Metadata = {
  title: getTitle(fussball.name),
};

export default function Fussball() {
  return (
    <div className="px-2 pb-2 flex flex-col bg-neutral-200 gap-2">
      <div className="py-4 w-full bg-svw-blue-default text-white">
        <SubMenu item={fussball} />
      </div>
      <PageContent>
        <ArticleSection tags={["Fussball", "Fußball"]} />
      </PageContent>
    </div>
  );
}
