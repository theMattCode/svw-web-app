import { TagsResponse } from "#/content/tags";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import Auth0 from "#/lib/auth0";

export const GET = Auth0.withApiAuthRequired(() => {
  const articleDirectory = path.resolve("./public", "tags.txt");
  const fileContents = fs.readFileSync(articleDirectory, "utf8");
  const tags = fileContents
    .split("\n")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
  const body: TagsResponse = { tags, count: tags.length };
  return NextResponse.json(body);
});
