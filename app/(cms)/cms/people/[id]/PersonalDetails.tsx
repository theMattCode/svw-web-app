"use client";

import { PersonWithRoles } from "#/lib/types/people";
import { TextField } from "#/components/cms/input/TextField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export function PersonalDetails({ person }: { person: PersonWithRoles }) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex gap-4">
        <TextField label="Vorname" value={person.firstName} />
        <TextField label="Name" value={person.lastName} />
      </div>
      <TextField label="E-Mail" value={person.email} Icon={MdOutlineEmail} />
      <TextField label="Telefon" value={person.phone} Icon={MdOutlinePhone} />
    </div>
  );
}
