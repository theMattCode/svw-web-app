import { verein } from "#/content/sitemap";
import React from "react";

import { SubMenu } from "#/components/navigation/SubMenu";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Verein() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200 pb-2">
      <div className="py-4 w-full bg-svw-blue-dark text-white">
        <SubMenu item={verein} />
      </div>
      <ArticlePreviewList tags={["Verein"]} />
    </div>
  );
}
