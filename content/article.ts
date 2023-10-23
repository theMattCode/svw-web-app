import fs from "fs";
import matter from "gray-matter";
import { Image } from "#/content/image";

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
const articlesDir = "content/article";

export type Article = {
  title: string;
  slug: string;
  date: string;
  tags?: [];
  image?: Image;
  promote?: boolean;
  createdAt?: string;
  teaser?: string;
  content: string;
};

export type PaginatedArticles = {
  page: number;
  pageSize: number;
  total: number;
  articles: Article[];
};
export function getArticles(page: number, pageSize: number): PaginatedArticles {
  const allFiles = fs.readdirSync(articlesDir);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageFiles = allFiles.slice(startIndex, endIndex);
  const articles = pageFiles.map((file) => {
    const fileContent = fs.readFileSync(`${articlesDir}/${file}`, "utf-8");
    const { data, content } = matter(fileContent);
    return { ...data, content } as Article;
  });

  return { page, pageSize, total: allFiles.length, articles };
}
