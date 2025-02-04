import { redirect } from "next/navigation";

export default async function CreatePersonPage() {
  const response = await fetch(`${process.env.SITE_URL}/cms/api/people/add`, { method: "POST", cache: "no-store" });

  if (!response.ok) {
    throw new Error("Person konnte nicht angelegt werden.");
  }

  const result = await response.json();
  redirect(`/cms/people/add/${result.person.id}`);
}
