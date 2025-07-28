import { PersonWithRoles } from "#/lib/types/people";
import { PersonCard } from "#/components/web/person/PersonCard";
import { Person } from "#/content/people";

export function Preview({ person }: { person: PersonWithRoles }) {
  const mappedPerson: Person = {
    firstname: person.firstName ?? "",
    lastname: person.lastName ?? "",
    email: person.email ?? "",
    image: person.image
      ? {
          src: person.image ?? "",
          alt: `${person.firstName} ${person.lastName}`,
          width: 100,
          height: 100,
        }
      : undefined,
    phone: [person.phone ?? ""],
    tags: person.peopleToRoles.map((p) => p.roles.name ?? ""),
  };
  return <PersonCard person={mappedPerson} />;
}
