import { createPerson } from "#/app/(cms)/cms/people/actions";
import { redirect } from "next/navigation";

export default async function CreatePersonPage() {
  const response = await createPerson();
  redirect(`/cms/people/add/${response.person.id}`);
}
