import Link from "next/link";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { getArticles } from "#/content/article";
import { aktuelles } from "#/content/sitemap";

const DEFAULT_PAGE_SIZE = 8;

type Props = {
  pageSize: number;
};

export async function ArticlePreviewList({ pageSize = DEFAULT_PAGE_SIZE }: Props) {
  const { articles } = getArticles(1, pageSize, "public/content/article");
  return (
    <div className="bg-neutral-200 w-full p-4">
      <div className="container flex flex-col gap-2 items-center">
        <BlockTitle title={aktuelles.name} />
        {articles.map((article) => (
          <ArticleListItem key={article.slug} articleMatter={article} />
        ))}
        <Link
          href={aktuelles.url}
          className="flex flex-row gap-1 content-center items-center text-white bg-svw-blue-default p-2"
        >
          Weitere Artikel
        </Link>
      </div>
    </div>
  );
}
