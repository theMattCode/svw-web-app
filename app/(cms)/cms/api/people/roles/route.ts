import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "#/lib/db/drizzle";

export async function GET(request: NextRequest) {
  const roles = await drizzle.query.roles.findMany();
  return NextResponse.json({ roles });
}
