import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "#/lib/db/drizzle";

export async function GET(request: NextRequest) {
  /*
  const response = await drizzle
    .select()
    .from(people)
    .leftJoin(peopleToRoles, eq(peopleToRoles.peopleId, people.id))
    .leftJoin(roles, eq(roles.id, peopleToRoles.roleId))
    .execute();
     */

  const people = await drizzle.query.people.findMany({
    with: {
      peopleToRoles: {
        with: {
          roles: true,
        },
      },
    },
  });

  const roles = await drizzle.query.roles.findMany({
    with: {
      peopleToRoles: {
        with: {
          people: true,
        },
      },
    },
  });
  return NextResponse.json({ people, roles });
}
