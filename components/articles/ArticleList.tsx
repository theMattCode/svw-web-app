import { TagRelationResponseCollection } from "#/lib/graphql/generated";
import { Pagination } from "#/components/pagination/Pagination";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { getArticles } from "#/content/article";
import { BlockTitle } from "#/components/block/BlockTitle";

const PAGE_SIZE = 20;

type ArticleListProps = {
  pageSize: number;
  page: number;
  slug?: string;
  tags?: TagRelationResponseCollection | null;
};

export function ArticleList({ page, pageSize, slug }: ArticleListProps): JSX.Element | null {
  const { articles, totalPages } = getArticles(page, pageSize || PAGE_SIZE);

  const pagination = <Pagination slug={slug} currentPage={page} pageCount={totalPages} />;
  return (
    <>
      <BlockTitle title="Aktuelles" />
      <div className="w-full">
        <div className="container flex flex-col gap-4">
          {pagination}
          {articles?.map((article) => (
            <ArticleListItem key={article.slug} article={article} />
          ))}
          {pagination}
        </div>
      </div>
    </>
  );
}
