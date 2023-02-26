import { getFullAssetUrl } from "#/lib/asset";
import { fetchMeta } from "#/app/data.gql";

export default async function Head() {
  const data = await fetchMeta();
  const meta = data?.meta?.data?.attributes;
  const faviconUrl = meta?.favicon?.data?.attributes?.url;
  return (
    <>
      <title>{meta?.title}</title>
      <meta name="description" content={meta?.description ?? undefined} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {faviconUrl && <link rel="icon" href={getFullAssetUrl(faviconUrl)} />}
    </>
  );
}
