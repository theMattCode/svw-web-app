import { PeopleListCard } from "#/app/(cms)/cms/people/PeopleListCard";
import { readAllPeople } from "#/app/(cms)/cms/people/actions";

export default async function PeoplePage() {
  const people = await readAllPeople();
  return <PeopleListCard people={people} />;
}
