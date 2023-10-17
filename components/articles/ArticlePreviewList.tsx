import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { BlockTitle } from "#/components/block/BlockTitle";

const DEFAULT_PAGE_SIZE = 8;

type Props = {
  pageSize: number;
};

export async function ArticlePreviewList({
  pageSize = DEFAULT_PAGE_SIZE,
}: Props) {
  const { data } = await graphqlClient.query<
    ArticlesQuery,
    ArticlesQueryVariables
  >({
    query: ARTICLES_QUERY,
    variables: { page: 1, pageSize: pageSize },
  });
  return (
    <div className="bg-neutral-200 w-full p-4">
      <div className="container flex flex-col gap-2 items-center">
        <BlockTitle title="Aktuelles" />
        {data.articles?.data.map((article) => {
          if (article.attributes) {
            return (
              <ArticleListItem key={article.id} article={article.attributes} />
            );
          }
        })}
        <Link href="/aktuelles" className="flex flex-row gap-1 items-center">
          <FaChevronRight className="text-svw-blue-default" />
          <div className="text-white">Weitere Artikel</div>
        </Link>
      </div>
    </div>
  );
}
