import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";
import { getTitle, PageProps } from "#/lib/page";
import { getAllArticleSlugs, getArticleBySlug } from "#/content/article";
import { Metadata } from "next";

const ARTICLE_DIRECTORY = "public/content/article";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug, ARTICLE_DIRECTORY);
  return {
    title: getTitle(article.title),
  };
}

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
