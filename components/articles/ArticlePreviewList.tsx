import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { ArticleListItem } from "#/components/articles/ArticleListItem";

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
    <div className="bg-svw-blue-darker w-full p-4">
      <div className="container flex flex-col gap-4 items-center">
        <div className="font-bold text-white text-3xl md:-translate-x-0.5">
          Aktuelles
        </div>
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
