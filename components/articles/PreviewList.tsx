import graphqlClient from "#/lib/graphql/graphqlClient";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Fragment } from "react";
import { RibbonTitle } from "#/components/announcements/AnnouncementsRibbon";
import { PreviewListItem } from "#/components/articles/PreviewListItem";

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
    <div className="bg-svw-blue-darker w-full md:px-4">
      <Link href="/aktuelles">
        <RibbonTitle title="Aktuelles" />
      </Link>
      <div className="container flex flex-col gap-4">
        {data.articles?.data.map((article) => {
          if (article.attributes) {
            return (
              <PreviewListItem key={article.id} article={article.attributes} />
            );
          }
        })}
      </div>
      <span className="container pl-2 pt-4 pb-8 flex flex-row ">
        <Link href="/aktuelles" className="flex flex-row gap-1 items-center">
          <FaChevronRight className="text-svw-blue-default" />
          <h3 className="text-white">Weitere Artikel</h3>
        </Link>
      </span>
    </div>
  );
}
