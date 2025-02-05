import { redirect } from "next/navigation";
import { getURL } from "#/lib/url";

export default async function CreatePersonPage() {
  const response = await fetch(`${getURL()}/cms/api/people/add`, { method: "POST", cache: "no-store" });

  if (!response.ok) {
    throw new Error("Person konnte nicht angelegt werden.");
  }

  const result = await response.json();
  redirect(`/cms/people/${result.person.id}`);
}
