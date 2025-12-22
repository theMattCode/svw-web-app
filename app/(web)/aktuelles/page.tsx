import { getTitle, PageProps } from "#/lib/page";
import { getArticles, PaginatedArticles } from "#/content/article";
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
  const paginatedArticles: PaginatedArticles = getArticles(page, PAGE_SIZE, "public/content/article");
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
