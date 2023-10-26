import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";
import { PageProps } from "#/lib/page";
import { getArticle } from "#/content/article";
import fs from "fs";

export default function Page({ params }: PageProps) {
  const article = getArticle(params.slug, "public/content/article");
  return (
    <PageBase>
      <Article article={article} />
    </PageBase>
  );
}

export function generateStaticParams() {
  const allFiles = fs.readdirSync("public/content/article").reverse();
  return allFiles.map((filename) => ({ slug: filename.replace(".md", "") }));
}
