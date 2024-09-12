import { NextResponse } from "next/server";
import Auth0 from "#/lib/auth0";

export const GET = Auth0.withApiAuthRequired(() => {
  return NextResponse.json("internal API");
});
