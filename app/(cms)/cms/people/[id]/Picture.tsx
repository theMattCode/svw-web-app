"use client";

import Image from "next/image";
import { PersonWithRoles } from "#/lib/types/people";
import { TextField } from "#/components/cms/input/TextField";
import { Dispatch, SetStateAction, useState } from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import { SiCloudinary } from "react-icons/si";

export function Picture({
  person,
  onPersonChange,
}: {
  person: PersonWithRoles;
  onPersonChange?: Dispatch<SetStateAction<PersonWithRoles>>;
}) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {person.image ? (
        <Image src={person.image} alt={`${person.firstName} ${person.lastName}`} width={600} height={700} />
      ) : (
        <BsPersonBoundingBox className="w-full h-48 text-gray-300" />
      )}
      <TextField
        label="URL"
        value={person.image}
        Icon={SiCloudinary}
        save={(value) => {
          onPersonChange?.((prev) => ({ ...prev, image: value }));
        }}
      />
    </div>
  );
}
