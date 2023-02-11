import { getFullAssetUrl } from "#/lib/asset";
import { fetchHomepageData } from "#/lib/graphql/homepage.gql";

export default async function Head() {
  const data = await fetchHomepageData();
  const homepageData = data?.homepage?.data?.attributes;
  const faviconUrl = homepageData?.meta?.favicon?.data?.attributes?.url;
  return (
    <>
      <title>{homepageData?.meta?.title}</title>
      <meta
        name="description"
        content={homepageData?.meta?.description ?? undefined}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {faviconUrl && <link rel="icon" href={getFullAssetUrl(faviconUrl)} />}
    </>
  );
}
