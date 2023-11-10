import fs from "fs";
import matter from "gray-matter";
import { Image } from "#/content/image";
import { Match } from "#/content/match";

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
  match?: Match;
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

export function getArticleBySlug(slug: string, articleDirectory?: string): Article {
  return readArticle(`${articleDirectory || ARTICLE_DIRECTORY}/${slug.slice(0, 4)}/${slug}.md`);
}

function readArticleMatter(path: string) {
  const fileContent = fs.readFileSync(path, "utf-8");
  const { data } = matter(fileContent);
  return data as ArticleMatter;
}

function readArticle(path: string) {
  const fileContent = fs.readFileSync(path, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as Article;
}

export function getAllArticleFilePaths(articleDirectory?: string): string[] {
  const baseDir = articleDirectory || ARTICLE_DIRECTORY;
  return fs
    .readdirSync(baseDir)
    .flatMap((yearDir) => {
      const yearPath = `${baseDir}/${yearDir}`;
      return fs.readdirSync(yearPath).map((filename) => `${yearPath}/${filename}`);
    })
    .reverse();
}

export function getAllArticleSlugs(articleDirectory?: string): string[] {
  const baseDir = articleDirectory || ARTICLE_DIRECTORY;
  return fs
    .readdirSync(baseDir)
    .flatMap((yearDir) => fs.readdirSync(`${baseDir}/${yearDir}`))
    .reverse();
}

function getPage(articleDirectory: string | undefined, page: number, pageSize: number) {
  const allFiles = getAllArticleFilePaths(articleDirectory);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageFiles = allFiles.slice(startIndex, endIndex);
  return { totalArticles: allFiles.length, totalPages: Math.ceil(allFiles.length / pageSize), pageFiles };
}

export function getArticles(page: number, pageSize: number, articleDirectory?: string): PaginatedArticles {
  const { pageFiles, totalArticles, totalPages } = getPage(articleDirectory, page, pageSize);
  const articles = pageFiles.map((filename) => readArticle(filename));

  return { page, pageSize, totalArticles, totalPages, articles };
}

export function getArticlesByTags(tags: string[], articleDirectory?: string): Article[] {
  return getAllArticleFilePaths(articleDirectory)
    .map((filename) => readArticle(filename))
    .filter((article) => tags.some((tag) => article.tags?.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())));
}

export function getArticleMatters(page: number, pageSize: number, articleDirectory?: string): PaginatedArticleMatters {
  const { pageFiles, totalArticles, totalPages } = getPage(articleDirectory, page, pageSize);
  const articles = pageFiles.map((filename) => readArticleMatter(filename));
  return { page, pageSize, totalArticles, totalPages, articles };
}
