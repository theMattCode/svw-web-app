import { getArticles } from "#/content/article";
import { NextResponse } from "next/server";
import path from "path";
import Auth0 from "#/lib/auth0";

export async function GET() {
  try {
    const token = await Auth0.getAccessToken();
    // Switch to external API. For now, we load the local files.
    const articleDirectory = path.resolve("./public", "content", "article");
    const payload = getArticles(1, 10000, articleDirectory);
    return NextResponse.json(payload);
  } catch (err) {
    return NextResponse.json({ error: "not authorized" }, { status: 401 });
  }
}
