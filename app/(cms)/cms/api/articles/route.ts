import { getArticles } from "#/content/article";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request: NextRequest) {
  const articleDirectory = path.resolve("./public", "content", "article");
  const payload = getArticles(1, 10000, articleDirectory);
  return NextResponse.json(payload);
}
