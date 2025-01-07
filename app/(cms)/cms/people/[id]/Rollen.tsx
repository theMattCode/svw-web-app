import { PersonWithRoles } from "#/lib/types/people";

export function Rollen({ person }: { person: PersonWithRoles }) {
  return person.peopleToRoles.map((p) => p.roles.name).join(", ");
}
