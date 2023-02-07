import { UploadFile } from "#/lib/graphql/generated";

export function injectFullAssetUrl(
  file: Pick<UploadFile, "url"> | null | undefined
) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (backendUrl && file && file.url && !file.url.startsWith(backendUrl)) {
    file.url = `${backendUrl}${file.url}`;
  }
}

export function getFullAssetUrl(urlAttribute: string): string {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${urlAttribute}`;
}
