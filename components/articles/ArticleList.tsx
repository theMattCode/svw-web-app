import { Pagination } from "#/components/pagination/Pagination";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { getArticles, PaginatedArticleMatters } from "#/content/article";
import { BlockTitle } from "#/components/block-title/BlockTitle";

const PAGE_SIZE = 20;

type ArticleListProps = {
  paginatedArticleMatters: PaginatedArticleMatters;
};

export function ArticleList({ paginatedArticleMatters }: ArticleListProps) {
  const pagination = (
    <Pagination
      slug={undefined}
      currentPage={paginatedArticleMatters.page}
      pageCount={paginatedArticleMatters.totalPages}
    />
  );
  return (
    <>
      <BlockTitle title="Aktuelles" />
      <div className="w-full">
        <div className="container flex flex-col gap-4">
          {pagination}
          {paginatedArticleMatters.articles?.map((article) => (
            <ArticleListItem key={article.slug} articleMatter={article} />
          ))}
          {pagination}
        </div>
      </div>
    </>
  );
}
