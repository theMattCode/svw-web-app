import { Pagination } from "#/components/pagination/Pagination";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { getArticles, PaginatedArticleMatters } from "#/content/article";
import { BlockTitle } from "#/components/block-title/BlockTitle";

type ArticleListProps = {
  paginatedArticleMatters: PaginatedArticleMatters;
};

export function ArticleList({ paginatedArticleMatters }: ArticleListProps) {
  return (
    <>
      <BlockTitle title="Aktuelles" />
      <div className="w-full flex flex-col pb-2">
        <div className="flex flex-col">
          <div className="container flex flex-col gap-2">
            {paginatedArticleMatters.articles?.map((article) => (
              <ArticleListItem key={article.slug} articleMatter={article} />
            ))}
          </div>
          <div className="sticky bottom-0 flex justify-center items-center p-0.5 pt-2">
            <Pagination
              slug={undefined}
              currentPage={paginatedArticleMatters.page}
              pageCount={paginatedArticleMatters.totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
}
