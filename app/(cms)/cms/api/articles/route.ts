import { getArticles } from "#/content/article";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import Auth0 from "#/lib/auth0";

export const GET = Auth0.withApiAuthRequired(() => {
  const articleDirectory = path.resolve("./public", "content", "article");
  const payload = getArticles(1, 10000, articleDirectory);
  return NextResponse.json(payload);
});
