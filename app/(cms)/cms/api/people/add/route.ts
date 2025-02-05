import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "#/lib/db/drizzle";
import { people } from "#/lib/db/schema";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const newPerson = await drizzle
    .insert(people)
    .values({ id: crypto.randomUUID(), firstName: "", lastName: "", phone: "", email: "", image: "" })
    .returning();
  revalidatePath("/cms/people");
  return NextResponse.json({ type: "success", person: { ...newPerson[0] } });
}
