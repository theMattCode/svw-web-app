import graphqlClient from "#/lib/graphql/graphqlClient";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { Pagination } from "#/components/pagination/Pagination";
import { PreviewArticle } from "#/components/articles/PreviewArticle";

type ArticleListProps = {
  pageSize: number;
  page: number;
  slug?: string;
};
export async function ArticleList({
  pageSize,
  page,
  slug,
}: ArticleListProps): Promise<JSX.Element | null> {
  const { data } = await graphqlClient.query<
    ArticlesQuery,
    ArticlesQueryVariables
  >({
    query: ARTICLES_QUERY,
    variables: { page, pageSize },
  });
  const pagination = data.articles?.meta.pagination;
  if (!pagination) {
    return null;
  }
  return (
    <div className="flex flex-col w-full gap-1">
      <Pagination
        slug={slug}
        currentPage={page}
        pageCount={pagination.pageCount}
      />
      {data.articles?.data.map((article, index, array) =>
        article.attributes ? (
          <>
            <PreviewArticle key={article.id} article={article.attributes} />
            <hr className="border-svw-blue-default my-2" />
          </>
        ) : null
      )}
    </div>
  );
}
