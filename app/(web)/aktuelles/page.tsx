import { getTitle, PageProps } from "#/lib/page";
import { PaginatedArticles } from "#/content/article";
import { getURL } from "#/lib/url";
import { Metadata } from "next";
import { aktuelles } from "#/content/sitemap";
import { Section } from "#/components/web/section/Section";
import { PageContent } from "#/components/web/page/PageContent";
import { Pagination } from "#/components/pagination/Pagination";
import { ArticleList } from "#/components/web/articles/ArticleList";

export const metadata: Metadata = {
  title: getTitle(aktuelles.name),
};

const PAGE_SIZE = 20;

export default async function Aktuelles(props: PageProps) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? Number.parseInt(searchParams.page.toString()) : 1;
  const articlesResponse = await fetch(`${getURL()}/api/articles?page=${page}&pageSize=${PAGE_SIZE}`, {
    next: { revalidate: false },
  });
  const paginatedArticles: PaginatedArticles = await articlesResponse.json();
  return (
    <PageContent>
      <Section title={aktuelles.name}>
        <ArticleList articles={paginatedArticles.articles} />
        <div className="sticky bottom-0 flex justify-center items-center p-0.5 pt-2">
          <Pagination slug={undefined} currentPage={paginatedArticles.page} pageCount={paginatedArticles.totalPages} />
        </div>
      </Section>
    </PageContent>
  );
}
