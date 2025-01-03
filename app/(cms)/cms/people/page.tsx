import { Card, CardContent, CardTitle } from "#/components/cms/card/Card";
import { drizzle } from "#/lib/db/drizzle";
import { PersonWithRoles } from "#/lib/types/people";
import PeopleTable from "#/app/(cms)/cms/people/PeopleTable";

async function getData(): Promise<PersonWithRoles[]> {
  return await drizzle.query.people.findMany({
    with: {
      peopleToRoles: {
        with: {
          roles: true,
        },
      },
    },
  });
}

export default async function People() {
  const data = await getData();

  return (
    <Card>
      <CardTitle>Personen</CardTitle>
      <CardContent>
        <PeopleTable data={data} />
      </CardContent>
    </Card>
  );
}
