import { PersonWithRoles, Role } from "#/lib/types/people";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import fetch from "node-fetch";
import { assignRole, createRole, unassignRole } from "#/app/(cms)/cms/people/actions";

export function Roles({ person }: { person: PersonWithRoles }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Role[]>();
  const [optionsLoading, setOptionsLoading] = useState(false);

  const onOpen = async () => {
    setOpen(true);
    if (!options) {
      setOptionsLoading(true);
      const response = await fetch("/cms/api/people/roles");
      const data = await response.json();
      setOptions([...data.roles].sort((a: Role, b: Role) => (a.name ?? "").localeCompare(b.name ?? "")));
      setOptionsLoading(false);
    }
  };

  const [roles, setRoles] = useState<Role[]>(() =>
    person.peopleToRoles.map((p) => ({ id: p.roleId, name: p.roles.name })),
  );

  return (
    <Autocomplete
      multiple
      freeSolo
      filterSelectedOptions
      open={open}
      onOpen={onOpen}
      onClose={() => setOpen(false)}
      loading={optionsLoading}
      value={roles}
      onChange={async (_, selectedRoles, reason, details) => {
        if (reason === "createOption" && typeof details?.option === "string") {
          const newRoleName: string = details.option;
          if (!options?.some((r) => r.name?.toLowerCase() === newRoleName.toLowerCase())) {
            const newRole = await createRole({ name: details.option });
            await assignRole(person.id, newRole.role.id);
            setRoles(selectedRoles.map((r) => (typeof r === "string" ? newRole.role : r)));
          }
        } else if (reason === "selectOption" && details?.option.id) {
          await assignRole(person.id, details?.option.id);
          setRoles(selectedRoles as Role[]);
        } else if (reason === "removeOption" && details?.option.id) {
          await unassignRole(person.id, details?.option.id);
          setRoles(selectedRoles as Role[]);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Rollen"
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {optionsLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
      getOptionLabel={(option) => (typeof option === "string" ? option : (option.name ?? ""))}
      options={options ?? []}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      filterOptions={(options, params) =>
        options?.filter?.((option) => option.name?.toLowerCase().includes(params.inputValue.toLowerCase())) ?? []
      }
    />
  );
}
