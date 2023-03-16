import { PeopleEntity } from "#/lib/graphql/generated";
import { PersonCard } from "#/components/person/PersonCard";

type Props = {
  person: PeopleEntity | null;
};
export function Person({ person }: Props): JSX.Element | null {
  if (!person || !person.attributes) {
    return null;
  }

  return <PersonCard key={person.id} person={person.attributes} />;
}
