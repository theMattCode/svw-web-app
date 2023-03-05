import { fetchPageData } from "#/components/page/page.gql";
import { Page } from "#/components/page/Page";
import { SearchParams } from "#/lib/url";

type Props = {
  params: { slug: string };
  searchParams?: SearchParams;
};
export default async function SubPage({
  params,
  searchParams,
}: Props): Promise<JSX.Element | null> {
  const pageData = await fetchPageData(params.slug);
  if (pageData?.attributes) {
    return (
      <Page
        pageData={pageData.attributes}
        params={params}
        searchParams={searchParams}
      />
    );
  }
  return null;
}
