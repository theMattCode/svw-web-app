import Article from "#/components/articles/Article";
import { PageBase } from "#/components/page/PageBase";

export default function Page({ params }: any): JSX.Element {
  return (
    <PageBase>
      <Article slug={params.slug} />
    </PageBase>
  );
}
