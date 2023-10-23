import { PageBase } from "#/components/page/PageBase";
import { ArticleList } from "#/components/articles/ArticleList";
import { PageProps } from "#/lib/page";

export default function Aktuelles({ searchParams }: PageProps) {
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1;
  return (
    <PageBase>
      <ArticleList pageSize={20} page={page} />
    </PageBase>
  );
}
