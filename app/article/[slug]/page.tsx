import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";
import { PageProps } from "#/lib/page";
import { getArticle } from "#/content/article";

export default function Page({ params }: PageProps) {
  const article = getArticle(params.slug);
  return (
    <PageBase>
      <Article article={article} />
    </PageBase>
  );
}
