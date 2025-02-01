import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "#/lib/db/drizzle";
import { PersonWithRoles } from "#/lib/types/people";

export async function GET(request: NextRequest) {
  const roles = await drizzle.query.people.findMany({
    with: {
      peopleToRoles: {
        with: {
          roles: true,
        },
      },
    },
  });
  return NextResponse.json<{ roles: PersonWithRoles[] }>({ roles });
}
