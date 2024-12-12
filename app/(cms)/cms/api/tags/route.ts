import { TagsResponse } from "#/content/tags";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import Auth0 from "#/lib/auth0";

export async function GET() {
  try {
    const token = await Auth0.getAccessToken();
    // Switch to external API. For now, we load the local files.
    const articleDirectory = path.resolve("./public", "tags.txt");
    const fileContents = fs.readFileSync(articleDirectory, "utf8");
    const tags = fileContents
      .split("\n")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    const body: TagsResponse = { tags, count: tags.length };
    return NextResponse.json(body);
  } catch (err) {
    return NextResponse.json({ error: "not authorized" }, { status: 401 });
  }
}
