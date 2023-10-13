import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import matter from "gray-matter";

export async function GET(request: NextRequest) {
  const markdown = fs.readFileSync(
    "content/announcement/2023-08-14_Wiedereröffnung_Sportgaststätte_Weiherwiesen.md",
    "utf-8"
  );
  const { data, content } = matter(markdown);
  return NextResponse.json([
    {
      ...data,
      mdContent: content,
    },
  ]);
}
