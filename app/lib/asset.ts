export function getFullAssetUrl(urlAttribute: string): string {
  return `${process.env.BACKEND_URL}${urlAttribute}`;
}
