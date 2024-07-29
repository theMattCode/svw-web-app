import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { SubMenu } from "#/components/navigation/SubMenu";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { fussball } from "#/content/sitemap";
import { NextFussballDeIframeWidget } from "#/components/widget/NextFussballDeWidget";

export const metadata: Metadata = {
  title: getTitle(fussball.name),
};

export default function Fussball() {
  return (
    <div className="px-2 pb-2 flex flex-col bg-neutral-200 gap-2">
      <div className="py-4 w-full bg-svw-blue-default text-white">
        <SubMenu item={fussball} />
      </div>
      <BlockTitle title={fussball.name} />
      <div className="container">
        <NextFussballDeIframeWidget widgetId="b9475af8-d95b-4b12-8bc7-35fffef51ecd" type="club-matches" />
      </div>
      <ArticlePreviewList tags={["Fussball"]} />
    </div>
  );
}
