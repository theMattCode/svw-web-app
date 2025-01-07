import { club } from "#/content/club";

export interface Slug {
  slug: string;
}

export interface PageProps<Params = {}> {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export function getTitle(prefix?: string) {
  return `${prefix ? `${prefix} - ` : ""}${club.short}`;
}

export function getId(text: string) {
  return text.toLowerCase().replace(/\s/g, "-");
}
