import { Card, CardContent, CardHeader, CardTitle } from "#/components/cms/card/Card";
import PeopleList from "#/app/(cms)/cms/people/PeopleList";
import { PersonWithRoles } from "#/lib/types/people";
import { drizzle } from "#/lib/db/drizzle";

async function getPeople(): Promise<PersonWithRoles[]> {
  return await drizzle.query.people.findMany({
    with: {
      peopleToRoles: {
        with: { roles: true },
      },
    },
  });
}

export async function PeopleListCard() {
  const people = await getPeople();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personen</CardTitle>
      </CardHeader>
      <CardContent>
        <PeopleList people={people} />
      </CardContent>
    </Card>
  );
}
