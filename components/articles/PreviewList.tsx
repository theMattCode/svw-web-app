import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { PreviewCard } from "#/components/articles/PreviewCard";
import { injectFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Heading } from "#/components/heading/Heading";
import { PreviewArticle } from "#/components/articles/PreviewArticle";

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
      <Link href="/aktuelles">
        <Heading text="Aktuelles" />
      </Link>
      <div className="flex flex-col pt-2">
        {data.articles?.data.map((article) => {
          if (article.attributes) {
            return (
              <>
                <PreviewArticle key={article.id} article={article.attributes} />
                <hr className="border-svw-blue-default my-2" />
              </>
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
