import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from "#/components/cms/card/Card";
import PeopleList from "#/app/(cms)/cms/people/PeopleList";
import { PersonWithRoles } from "#/lib/types/people";
import { drizzle } from "#/lib/db/drizzle";
import { TextField } from "#/components/cms/input/TextField";

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

export async function PeopleListCard() {
  const data = await getData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personen</CardTitle>
      </CardHeader>
      <CardContent>
        <PeopleList data={data} />
      </CardContent>
    </Card>
  );
}
