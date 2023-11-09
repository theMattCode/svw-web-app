import { club } from "#/content/club";

export type PageProps<TSearchParams> = {
  params: { slug: string };
  searchParams: TSearchParams;
};

export function getTitle(prefix?: string) {
  return `${prefix ? `${prefix} - ` : ""}${club.short}`;
}
