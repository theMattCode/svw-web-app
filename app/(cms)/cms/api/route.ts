import { NextResponse } from "next/server";
import Auth0 from "#/lib/auth0";

export async function GET() {
  try {
    const token = await Auth0.getAccessToken();
    return NextResponse.json("internal API");
  } catch (err) {
    return NextResponse.json({ error: "not authorized" }, { status: 401 });
  }
}
