"use client";

import NextImage from "next/image";
import { PersonWithRoles } from "#/lib/types/people";
import { MutateResult, TextField, TextFieldMutationVariables } from "#/components/cms/input/TextField";
import { BsPersonBoundingBox } from "react-icons/bs";
import { SiCloudinary } from "react-icons/si";
import { MutationFunction, useDebouncedMutation } from "#/lib/action";
import { useCallback, useState } from "react";
import { updatePerson } from "#/app/(cms)/cms/people/actions";

function validateImageUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function Picture({ person }: { person: PersonWithRoles }) {
  const [imageUrl, setImageUrl] = useState(person.image);

  const preparedMutatePictureFn: MutationFunction<TextFieldMutationVariables, MutateResult> = useCallback(
    async ({ value }: TextFieldMutationVariables): Promise<MutateResult> =>
      updatePerson(person.id, { image: value ?? "" }),
    [person.id],
  );
  const mutateFirstName = useDebouncedMutation<TextFieldMutationVariables, MutateResult>((variables) => {
    if (variables.value !== null) {
      // synchronously load image and test if it is valid
    }
    return preparedMutatePictureFn(variables);
  });
  return (
    <div className="flex flex-col gap-4 items-center">
      {imageUrl ? (
        <NextImage src={imageUrl} alt={`${person.firstName} ${person.lastName}`} width={600} height={700} />
      ) : (
        <BsPersonBoundingBox className="w-full h-48 text-gray-300" />
      )}
      <TextField
        label="URL"
        defaultValue={imageUrl}
        onChange={(value: string | null) => {
          if (value === null || value.trim() === "") {
            setImageUrl(null);
          } else if (validateImageUrl(value)) {
            setImageUrl(value);
          }
        }}
        mutate={mutateFirstName}
        StartIcon={SiCloudinary}
      />
    </div>
  );
}
