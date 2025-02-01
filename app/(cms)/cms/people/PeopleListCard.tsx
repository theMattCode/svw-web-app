import { Card, CardContent, CardHeader, CardTitle } from "#/components/cms/card/Card";
import PeopleList from "#/app/(cms)/cms/people/PeopleList";
import { PersonWithRoles } from "#/lib/types/people";

async function getPeople(): Promise<PersonWithRoles[]> {
  const res = await fetch("/cms/api/people", { next: { tags: ["cms/api/people"] } });
  const data = await res.json();
  return data.roles;
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
