import { ArticlePreviewListItem } from "#/components/articles/ArticlePreviewListItem";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { getArticles, getArticlesByTags } from "#/content/article";
import { aktuelles } from "#/content/sitemap";
import Link from "next/link";

const DEFAULT_PAGE_SIZE = 8;

type Props = {
  pageSize?: number;
  tags?: string[];
  showTitle?: boolean;
};

export function ArticlePreviewList({ pageSize = DEFAULT_PAGE_SIZE, tags, showTitle = true }: Props) {
  const articles =
    tags && tags.length > 0
      ? getArticlesByTags(tags, "public/content/article").slice(0, pageSize)
      : getArticles(1, pageSize, "public/content/article").articles;

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="bg-neutral-200 w-full">
      <div className="container flex flex-col gap-2 items-center">
        {showTitle && <BlockTitle title={aktuelles.name} />}
        <div className="transition-all grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2">
          {articles.map((article) => (
            <ArticlePreviewListItem key={article.slug} articleMatter={article} />
          ))}
        </div>
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
