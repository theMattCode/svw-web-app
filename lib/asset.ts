export function getFullAssetUrl(urlAttribute: string): string {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${urlAttribute}`;
}
