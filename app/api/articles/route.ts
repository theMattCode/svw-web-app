import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, getArticleMatters } from "#/content/article";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : DEFAULT_PAGE;

  const pageSizeParam = searchParams.get("pageSize");
  const pageSize = pageSizeParam ? parseInt(pageSizeParam) : DEFAULT_PAGE_SIZE;

  const articleDirectory = path.resolve("./public", "content", "article");
  const payload = getArticleMatters(page, pageSize, articleDirectory);
  return NextResponse.json(payload);
}
