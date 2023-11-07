import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { getEventMatters } from "#/content/events";

export async function GET(request: NextRequest) {
  const eventDirectory = path.resolve("./public", "content", "event");
  const payload = getEventMatters(eventDirectory);
  return NextResponse.json(payload);
}
