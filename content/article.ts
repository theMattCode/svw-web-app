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
  totalArticles: number;
  totalPages: number;
  articles: Article[];
};

export function getArticle(slug: string): Article | null {
  return readArticle(`${slug}.md`);
}

function readArticle(filename: string) {
  const fileContent = fs.readFileSync(`${articlesDir}/${filename}`, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as Article;
}

export function getArticles(page: number, pageSize: number): PaginatedArticles {
  const allFiles = fs.readdirSync(articlesDir).reverse();

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageFiles = allFiles.slice(startIndex, endIndex);
  const articles = pageFiles.map((filename) => readArticle(filename));

  return {
    page,
    pageSize,
    totalArticles: allFiles.length,
    totalPages: Math.ceil(allFiles.length / pageSize),
    articles,
  };
}
