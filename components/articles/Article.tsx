import graphqlClient from "#/lib/graphql/graphqlClient";
import { ArticleQuery, ArticleQueryVariables } from "#/lib/graphql/generated";
import { ARTICLE_QUERY } from "#/components/articles/articles.gql";
import RichText from "#/components/richtext/RichText";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { formatDate } from "#/lib/format";

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

  const image = article.attributes?.image?.data?.attributes;

  return (
    <div className="container bg-white my-16 p-8 max-w-3xl shadow-xl flex flex-col gap-2">
      {image && (
        <div className="flex flex-col place-items-end pb-4">
          <Image
            src={getFullAssetUrl(image.url)}
            alt=""
            width={image.width ?? 0}
            height={image.height ?? 0}
          />
        </div>
      )}
      <h1>{article.attributes?.title}</h1>
      <div className="text-sm">{formatDate(article.attributes?.date)}</div>

      <RichText
        key={article.attributes?.slug}
        content={article.attributes?.text}
      />
    </div>
  );
}
