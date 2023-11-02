import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { FussballDeWidget } from "#/components/widget/Fussball.de";
import { SubMenu } from "#/components/navigation/SubMenu";
import { fussball } from "#/content/sitemap";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Fussball() {
  return (
    <div className="px-2 pb-2 flex flex-col bg-neutral-200 gap-2">
      <div className="py-4 w-full bg-svw-blue-default text-white">
        <SubMenu item={fussball} />
      </div>
      <BlockTitle title="Fussball" />
      <div className="container bg-white shadow-2xl p-2 flex flex-col gap-2">
        <FussballDeWidget widgetKey="02KJUU7I0O000000VUM1DNPBVTLF6IIO" height={1000} />
      </div>
      <ArticlePreviewList tags={["Fussball"]} />
    </div>
  );
}
