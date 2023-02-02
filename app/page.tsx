import { fetchPageData } from "#/components/page/page.gql";
import { Page } from "#/components/page/Page";

export const revalidate = 10;

export default async function IndexPage(): Promise<JSX.Element | null> {
  const pageData = await fetchPageData("index");
  if (pageData?.attributes) {
    return <Page data={pageData.attributes} />;
  }
  return null;
}
