"use client";

import { PersonWithRoles } from "#/lib/types/people";
import { MutateResult, TextField, TextFieldMutationVariables } from "#/components/cms/input/TextField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { mutatePerson } from "#/app/(cms)/cms/people/actions";
import { useCallback } from "react";
import { MutationFunction, useDebouncedMutation } from "#/lib/action";
import { Alert, AlertTitle, Autocomplete, TextField as MuiTextField } from "@mui/material";
import { Roles } from "#/app/(cms)/cms/people/add/[id]/section/Roles";

export function Details({ person }: { person: PersonWithRoles }) {
  const preparedMutateFirstNameFn: MutationFunction<TextFieldMutationVariables, MutateResult> = useCallback(
    async ({ value }: TextFieldMutationVariables): Promise<MutateResult> =>
      mutatePerson(person.id, { firstName: value ?? "" }),
    [person.id],
  );
  const mutateFirstName = useDebouncedMutation<TextFieldMutationVariables, MutateResult>(preparedMutateFirstNameFn);

  const preparedMutateLastNameFn: MutationFunction<TextFieldMutationVariables, MutateResult> = useCallback(
    async ({ value }: TextFieldMutationVariables): Promise<MutateResult> =>
      mutatePerson(person.id, { lastName: value ?? "" }),
    [person.id],
  );
  const mutateLastName = useDebouncedMutation<TextFieldMutationVariables, MutateResult>(preparedMutateLastNameFn);

  const preparedMutateEmailFn: MutationFunction<TextFieldMutationVariables, MutateResult> = useCallback(
    async ({ value }: TextFieldMutationVariables): Promise<MutateResult> =>
      mutatePerson(person.id, { email: value ?? "" }),
    [person.id],
  );
  const mutateEmail = useDebouncedMutation<TextFieldMutationVariables, MutateResult>(preparedMutateEmailFn);

  const preparedMutatePhoneFn: MutationFunction<TextFieldMutationVariables, MutateResult> = useCallback(
    async ({ value }: TextFieldMutationVariables): Promise<MutateResult> =>
      mutatePerson(person.id, { phone: value ?? "" }),
    [person.id],
  );
  const mutatePhone = useDebouncedMutation<TextFieldMutationVariables, MutateResult>(preparedMutatePhoneFn);

  return (
    <div className="container flex flex-col gap-4">
      <div className="w-full flex flex-col @md:flex-row gap-4">
        <TextField label="Vorname" defaultValue={person.firstName} mutate={mutateFirstName} />
        <TextField label="Name" defaultValue={person.lastName} mutate={mutateLastName} />
      </div>
      <TextField label="E-Mail" defaultValue={person.email} mutate={mutateEmail} StartIcon={MdOutlineEmail} />
      <TextField label="Telefon" defaultValue={person.phone} mutate={mutatePhone} StartIcon={MdOutlinePhone} />
      <Roles person={person} />
      <Alert severity="info" variant="outlined" sx={{ borderColor: "rgba(0, 0, 0, 0.23)" }}>
        <AlertTitle>ID</AlertTitle>
        <pre>{person.id}</pre>
      </Alert>
    </div>
  );
}
