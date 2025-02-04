import { PeopleListCard } from "#/app/(cms)/cms/people/PeopleListCard";
import { PersonWithRoles } from "#/lib/types/people";
import { drizzle } from "#/lib/db/drizzle";

const getPeople = async (): Promise<PersonWithRoles[]> => {
  return await drizzle.query.people.findMany({
    with: {
      peopleToRoles: {
        with: { roles: true },
      },
    },
  });
};

export default async function PeoplePage() {
  const people = await getPeople();
  return <PeopleListCard people={people} />;
}
