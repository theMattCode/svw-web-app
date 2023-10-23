import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, getArticles } from "#/content/article";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : DEFAULT_PAGE;

  const pageSizeParam = searchParams.get("pageSize");
  const pageSize = pageSizeParam ? parseInt(pageSizeParam) : DEFAULT_PAGE_SIZE;
  const payload = getArticles(page, pageSize);
  return NextResponse.json(payload);
}
