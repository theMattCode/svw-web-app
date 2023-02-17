import graphqlClient from "#/lib/graphql/graphqlClient";
import { ArticleQuery, ArticleQueryVariables } from "#/lib/graphql/generated";
import { ARTICLE_QUERY } from "#/components/articles/articles.gql";

type Props = {
  slug: string;
};
export default function Article({ slug }: Props): JSX.Element {
  /* @ts-expect-error Server Component */
  return <LoadingArticle slug={slug} />;
}

async function LoadingArticle({ slug }: Props): Promise<JSX.Element | null> {
  const { data } = await graphqlClient.query<
    ArticleQuery,
    ArticleQueryVariables
  >({
    query: ARTICLE_QUERY,
    variables: { slug },
  });

  const article = data.articles?.data[0];
  if (!article) {
    // TODO route to 404 (or back to home?)
    return null;
  }

  return (
    <div>
      <div className="container">
        <div></div>
        <div>
          {data.articles?.data.map((article) => article.attributes?.text)}
        </div>
      </div>
    </div>
  );
}
