import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";
import { getTitle, PageProps } from "#/lib/page";
import { getAllArticleSlugs, getArticleBySlug } from "#/content/article";
import { Metadata } from "next";
import { club } from "#/content/club";

const ARTICLE_DIRECTORY = "public/content/article";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const article = getArticleBySlug(params.slug, ARTICLE_DIRECTORY);
  if (!article) return { title: "Artikel nicht gefunden" };
  const title = getTitle(article.title);
  const baseURL = `https://${process.env.VERCEL_URL ?? process.env.SITE_URL ?? "svwalddorf.de"}`;
  return {
    title,
    metadataBase: new URL(baseURL),
    openGraph: {
      title,
      siteName: club.name,
      locale: "de_DE",
      type: "article",
      url: `/article/${params.slug}`,
      images: article.image
        ? [
            {
              url: article.image.src,
              alt: article.image.alt ?? article.title,
              width: article.image.width,
              height: article.image.height,
            },
          ]
        : [],
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug, ARTICLE_DIRECTORY);
  return (
    <PageBase>
      {article && <Article article={article} />}
      {!article && <div className="container p-4 text-center">Artikel nicht gefunden</div>}
    </PageBase>
  );
}

export function generateStaticParams() {
  const allSlugs = getAllArticleSlugs(ARTICLE_DIRECTORY);
  return allSlugs.map((filename) => ({ slug: filename.replace(".md", "") }));
}
