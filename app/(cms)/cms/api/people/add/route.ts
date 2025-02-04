import { NextRequest, NextResponse } from "next/server";
import { Person } from "#/lib/types/people";
import { MutateResult } from "#/components/cms/input/TextField";
import { drizzle } from "#/lib/db/drizzle";
import { people } from "#/lib/db/schema";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const result = await createPerson();
  return NextResponse.json(result);
}

const createPerson = async (
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
  revalidatePath("/cms/people");
  return { type: "success", person: { ...newPerson[0] } };
};
