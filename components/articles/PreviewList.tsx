import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { PreviewCard } from "#/components/articles/PreviewCard";
import { injectFullAssetUrl } from "#/lib/asset";

const DEFAULT_PAGE_SIZE = 10;

type Props = {
  pageSize: number;
};

export async function PreviewList({
  pageSize = DEFAULT_PAGE_SIZE,
}: Props): Promise<JSX.Element> {
  const { data } = await graphqlClient.query<
    ArticlesQuery,
    ArticlesQueryVariables
  >({
    query: ARTICLES_QUERY,
    variables: { page: 1, pageSize: pageSize },
  });
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.articles?.data.map((article) => {
        if (article.attributes) {
          injectFullAssetUrl(article.attributes.image?.data?.attributes);
          return <PreviewCard key={article.id} article={article.attributes} />;
        }
      })}
    </div>
  );
}
