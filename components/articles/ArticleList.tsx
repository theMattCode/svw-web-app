import graphqlClient from "#/lib/graphql/graphqlClient";
import { ArticlesQuery, ArticlesQueryVariables } from "#/lib/graphql/generated";
import { ARTICLES_QUERY } from "#/components/articles/articles.gql";
import Link from "next/link";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

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
    <div className="flex flex-col w-full">
      <Pagination
        slug={slug}
        currentPage={page}
        pageCount={pagination.pageCount}
      />
      {data.articles?.data.map((article) => (
        <div key={article.id}>{article.attributes?.title}</div>
      ))}
    </div>
  );
}

function Pagination({ slug, currentPage, pageCount }): JSX.Element {
  const pages = Array.from(Array(pageCount).keys());
  return (
    <div className="flex flex-row place-content-end">
      {currentPage === 1 && (
        <button
          className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-400 pointer-events-none`}
        >
          <BsChevronBarLeft />
        </button>
      )}
      {currentPage > 1 && (
        <Link
          href={{
            pathname: slug,
            query: { page: 1 },
          }}
        >
          <button
            className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-900 hover:ring-0 hover:bg-svw-blue-lighter hover:text-white`}
          >
            <BsChevronBarLeft />
          </button>
        </Link>
      )}
      {currentPage <= 1 && (
        <button
          className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-400 pointer-events-none`}
        >
          <BsChevronLeft />
        </button>
      )}
      {currentPage > 1 && (
        <Link
          href={{
            pathname: slug,
            query: { page: currentPage - 1 },
          }}
        >
          <button
            className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-900 hover:ring-0 hover:bg-svw-blue-lighter hover:text-white`}
          >
            <BsChevronLeft />
          </button>
        </Link>
      )}
      {pages.map((index) => {
        const page = index + 1;
        return (
          <Link
            key={page}
            href={{
              pathname: slug,
              query: { page },
            }}
            className="text-svw-blue-default"
          >
            <button
              className={`relative inline-flex items-center justify-center w-6 h-6
                  ${
                    page === currentPage
                      ? "text-white bg-svw-blue-default"
                      : "text-gray-900 hover:bg-svw-blue-lighter hover:text-white"
                  }
                `}
            >
              {page}
            </button>
          </Link>
        );
      })}
      {currentPage >= pageCount && (
        <button
          className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-400 pointer-events-none`}
        >
          <BsChevronRight />
        </button>
      )}
      {currentPage < pageCount && (
        <Link
          href={{
            pathname: slug,
            query: { page: currentPage + 1 },
          }}
        >
          <button
            className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-900 hover:ring-0 hover:bg-svw-blue-lighter hover:text-white`}
          >
            <BsChevronRight />
          </button>
        </Link>
      )}
      {currentPage === pageCount && (
        <button
          className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-400 pointer-events-none`}
        >
          <BsChevronBarRight />
        </button>
      )}
      {currentPage < pageCount && (
        <Link
          href={{
            pathname: slug,
            query: { page: pageCount },
          }}
        >
          <button
            className={`inline-flex items-center justify-center w-6 h-6 text-sm text-gray-900 hover:ring-0 hover:bg-svw-blue-lighter hover:text-white`}
          >
            <BsChevronBarRight />
          </button>
        </Link>
      )}
    </div>
  );
}
