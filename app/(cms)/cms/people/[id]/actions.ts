"use server";

import { MutateResult } from "#/components/cms/input/TextField";
import { drizzle } from "#/lib/db/drizzle";
import { people, peopleToRoles, roles } from "#/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { Person, Role } from "#/lib/types/people";

export const mutatePerson = async (id: string, person: Partial<Omit<Person, "id">>): Promise<MutateResult> => {
  await drizzle.update(people).set(person).where(eq(people.id, id));
  return { type: "success" };
};

export const createPerson = async (
  person: Omit<Person, "id"> = { firstName: "", lastName: "", image: "", phone: "", email: "" },
): Promise<MutateResult & { person: Person }> => {
  const newPerson = await drizzle
    .insert(people)
    .values({
      id: crypto.randomUUID(),
      firstName: person.firstName,
      lastName: person.lastName,
      phone: person.phone,
      email: person.email,
      image: person.image,
    })
    .returning();
  return { type: "success", person: { ...newPerson[0] } };
};

export const deletePerson = async (id: string): Promise<MutateResult> => {
  await drizzle.delete(people).where(eq(people.id, id));
  return { type: "success" };
};

export const createRole = async (role: Omit<Role, "id"> = { name: "" }): Promise<MutateResult & { role: Role }> => {
  const newRole = await drizzle.insert(roles).values({ id: crypto.randomUUID(), name: role.name }).returning();
  return { type: "success", role: { ...newRole[0] } };
};

export const assignRole = async (peopleId: string, roleId: string): Promise<MutateResult> => {
  await drizzle.insert(peopleToRoles).values({ peopleId, roleId }).onConflictDoNothing().returning();
  return { type: "success" };
};

export const unassignRole = async (peopleId: string, roleId: string): Promise<MutateResult> => {
  await drizzle
    .delete(peopleToRoles)
    .where(and(eq(peopleToRoles.peopleId, peopleId), eq(peopleToRoles.roleId, roleId)));
  return { type: "success" };
};
