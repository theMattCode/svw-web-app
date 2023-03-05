import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { PreviewCard } from "#/components/articles/PreviewCard";
import { injectFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const DEFAULT_PAGE_SIZE = 8;

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
    <div className="flex flex-col">
      <div className="text-lg flex flex-row gap-1 h-10">
        <div className="h-full bg-svw-blue-default text-white px-4 flex flex-col justify-center">
          Aktuelles
        </div>
        <div className="h-full bg-svw-blue-default w-full"> </div>
      </div>
      <div className="pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {data.articles?.data.map((article) => {
          if (article.attributes) {
            injectFullAssetUrl(article.attributes.image?.data?.attributes);
            return (
              <PreviewCard key={article.id} article={article.attributes} />
            );
          }
        })}
      </div>
      <span className="pt-4 flex flex-row justify-center">
        <Link href="/aktuelles" className="flex flex-row gap-1 items-center">
          <FaChevronRight className="text-svw-blue-default" />
          <span>Weitere Artikel</span>
        </Link>
      </span>
      <hr className="my-4 border-svw-blue-default" />
    </div>
  );
}
