export type Params = {
  slug?: string;
};

export type SearchParams = {
  /**
   * Page number of articles pagination.
   */
  page?: string;
};

export function getURL(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
