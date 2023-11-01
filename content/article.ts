import fs from "fs";
import matter from "gray-matter";
import { Image } from "#/content/image";

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const ARTICLE_DIRECTORY = "/content/article";

export type ArticleMatter = {
  title: string;
  slug: string;
  date: string;
  tags?: string[];
  image?: Image;
  promote?: boolean;
  createdAt?: string;
  teaser?: string;
};

export type Article = ArticleMatter & {
  content: string;
};

export type PaginatedArticles = {
  page: number;
  pageSize: number;
  totalArticles: number;
  totalPages: number;
  articles: Article[];
};

export type PaginatedArticleMatters = {
  page: number;
  pageSize: number;
  totalArticles: number;
  totalPages: number;
  articles: ArticleMatter[];
};

export function getArticle(slug: string, articleDirectory?: string): Article {
  return readArticle(`${slug}.md`, articleDirectory || ARTICLE_DIRECTORY);
}

function readArticleMatter(filename: string, articleDirectory?: string) {
  const fileContent = fs.readFileSync(`${articleDirectory || ARTICLE_DIRECTORY}/${filename}`, "utf-8");
  const { data, content } = matter(fileContent);
  return data as ArticleMatter;
}

function readArticle(filename: string, articleDirectory: string) {
  const fileContent = fs.readFileSync(`${articleDirectory}/${filename}`, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as Article;
}

export function getArticles(page: number, pageSize: number, articleDirectory?: string): PaginatedArticles {
  const allFiles = fs.readdirSync(articleDirectory || ARTICLE_DIRECTORY).reverse();

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageFiles = allFiles.slice(startIndex, endIndex);
  const articles = pageFiles.map((filename) => readArticle(filename, articleDirectory || ARTICLE_DIRECTORY));

  return {
    page,
    pageSize,
    totalArticles: allFiles.length,
    totalPages: Math.ceil(allFiles.length / pageSize),
    articles,
  };
}

export function getArticlesByTags(tags: string[], articleDirectory?: string): Article[] {
  const allFiles = fs.readdirSync(articleDirectory || ARTICLE_DIRECTORY).reverse();
  const allArticles = allFiles.map((filename) => readArticle(filename, articleDirectory || ARTICLE_DIRECTORY));

  return allArticles.filter((article) =>
    tags.some((tag) => article.tags?.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase()))
  );
}

export function getArticleMatters(page: number, pageSize: number, articleDirectory?: string): PaginatedArticleMatters {
  const allFiles = fs.readdirSync(articleDirectory || ARTICLE_DIRECTORY).reverse();

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageFiles = allFiles.slice(startIndex, endIndex);
  const articles = pageFiles.map((filename) => readArticleMatter(filename, articleDirectory));

  return {
    page,
    pageSize,
    totalArticles: allFiles.length,
    totalPages: Math.ceil(allFiles.length / pageSize),
    articles,
  };
}
