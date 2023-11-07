import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";
import { PageProps } from "#/lib/page";
import { getAllArticleFilePaths, getAllArticleSlugs, getArticleBySlug } from "#/content/article";
import fs from "fs";

const ARTICLE_DIRECTORY = "public/content/article";

export default function Page({ params }: PageProps) {
  const article = getArticleBySlug(params.slug, ARTICLE_DIRECTORY);
  return (
    <PageBase>
      <Article article={article} />
    </PageBase>
  );
}

export function generateStaticParams() {
  const allSlugs = getAllArticleSlugs(ARTICLE_DIRECTORY);
  return allSlugs.map((filename) => ({ slug: filename.replace(".md", "") }));
}
