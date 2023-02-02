import { fetchPageData } from "#/components/page/page.gql";
import { Page } from "#/components/page/Page";

export default async function SubPage(props: any): Promise<JSX.Element | null> {
  const pageData = await fetchPageData(props.params.slug);
  if (pageData?.attributes) {
    return <Page data={pageData.attributes} />;
  }
  return null;
}
