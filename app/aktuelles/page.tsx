import { PageBase } from "#/components/page/PageBase";
import { ArticleList } from "#/components/articles/ArticleList";
import { PageProps } from "#/lib/page";
import { PaginatedArticleMatters } from "#/content/article";
import { getURL } from "#/lib/url";

const PAGE_SIZE = 20;

export default async function Aktuelles({ searchParams }: PageProps) {
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1;
  const articlesResponse = await fetch(`${getURL()}/api/articles?page=${page}&pageSize=${PAGE_SIZE}`);
  const paginatedArticles: PaginatedArticleMatters = await articlesResponse.json();
  return (
    <div className="bg-neutral-200 pt-8">
      <div className="flex flex-col gap-2">
        <ArticleList paginatedArticleMatters={paginatedArticles} />
      </div>
    </div>
  );
}
