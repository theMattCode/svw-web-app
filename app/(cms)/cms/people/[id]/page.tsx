import "server-only";
import { PageProps } from "#/lib/page";
import { drizzle } from "#/lib/db/drizzle";
import { sql } from "drizzle-orm";
import { PersonWithRoles } from "#/lib/types/people";
import { cache } from "react";
import { notFound } from "next/navigation";
import { Edit } from "#/app/(cms)/cms/people/[id]/Edit";
import placeholder = sql.placeholder;

const preparedPersonStatement = drizzle.query.people
  .findFirst({
    with: {
      peopleToRoles: {
        with: { roles: true },
        where: (peopleToRoles, { eq }) => eq(peopleToRoles.peopleId, placeholder("id")),
      },
    },
    where: (person, { eq }) => eq(person.id, placeholder("id")),
  })
  .prepare("get_person");

const getPerson = cache(async (id: string) => {
  const person = await preparedPersonStatement.execute({ id });

  if (!person) {
    notFound();
  }
  return person;
});

export default async function Page({ params }: PageProps<{ id: string }>) {
  const { id } = await params;
  const person: PersonWithRoles = await getPerson(id);

  return (
    <div className="container">
      <Edit person={person} />
    </div>
  );
}
