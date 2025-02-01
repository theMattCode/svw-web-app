import { Card, CardContent, CardHeader, CardTitle } from "#/components/cms/card/Card";
import PeopleList from "#/app/(cms)/cms/people/PeopleList";

export async function PeopleListCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personen</CardTitle>
      </CardHeader>
      <CardContent>
        <PeopleList />
      </CardContent>
    </Card>
  );
}
