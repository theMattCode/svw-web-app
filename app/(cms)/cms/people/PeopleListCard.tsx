import { Card, CardContent, CardHeader, CardTitle } from "#/components/cms/card/Card";
import PeopleList from "#/app/(cms)/cms/people/PeopleList";
import { PersonWithRoles } from "#/lib/types/people";

export async function PeopleListCard({ people }: { people: PersonWithRoles[] }) {
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
