"use client";

import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PersonWithRoles } from "#/lib/types/people";
import { CellContext, createColumnHelper, getCoreRowModel, TableOptions } from "@tanstack/table-core";
import { Table } from "#/components/cms/table/Table";
import { PhoneCell } from "#/components/cms/table/cell/Phone";
import { MailCell } from "#/components/cms/table/cell/Mail";
import { RolesCell } from "#/components/cms/table/cell/Roles";
import { FaRegEdit } from "react-icons/fa";
import { CardToolbar } from "#/components/cms/card/Card";
import { debounce } from "lodash";
import { LuSearch } from "react-icons/lu";
import { MdOutlineDelete, MdOutlinePersonAdd } from "react-icons/md";
import { Button, IconButton } from "@mui/material";
import { TextField } from "#/components/cms/input/TextField";
import { deletePerson } from "#/app/(cms)/cms/people/actions";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

const COLUMN_HELPER = createColumnHelper<PersonWithRoles>();

const COLUMN_FIRSTNAME = COLUMN_HELPER.accessor("firstName", {
  header: "Vorname",
  id: "firstName",
});

const COLUMN_LASTNAME = COLUMN_HELPER.accessor("lastName", {
  header: "Nachname",
  id: "lastName",
});

const COLUMN_EMAIL = COLUMN_HELPER.accessor("email", {
  header: "E-Mail",
  id: "email",
  cell: MailCell,
});

const COLUMN_PHONE = COLUMN_HELPER.accessor("phone", {
  header: "Phone",
  id: "phone",
  cell: PhoneCell,
});

const COLUMN_ROLES = COLUMN_HELPER.accessor((person) => person.peopleToRoles.map((p) => p.roles.name), {
  header: "Rollen",
  id: "roles",
  cell: RolesCell,
});

export default function PeopleList() {
  const [people, setPeople] = useState<PersonWithRoles[] | undefined>(undefined);

  useEffect(() => {
    async function fetchAllPeople() {
      const response = await fetch("/cms/api/people");
      const data = await response.json();
      setPeople(data.people);
    }
    fetchAllPeople();
  }, []);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string | null>();
  const filteredPeople = useMemo(() => {
    if (people === undefined) return [];

    if (!searchTerm || searchTerm.trim() === "") return people;

    return people.filter((person) => {
      const firstName = person.firstName?.toLowerCase();
      const lastName = person.lastName?.toLowerCase();

      if (firstName?.includes(searchTerm)) return true;
      if (lastName?.includes(searchTerm)) return true;
      if (`${firstName} ${lastName}`.includes(searchTerm)) return true;
      if (person.email?.toLowerCase().includes(searchTerm)) return true;
      return person.peopleToRoles.some((p) => p.roles.name?.toLowerCase().includes(searchTerm) ?? false);
    });
  }, [searchTerm, people]);

  const options: TableOptions<PersonWithRoles> = useMemo(
    () => ({
      data: filteredPeople,
      columns: [
        COLUMN_LASTNAME,
        COLUMN_FIRSTNAME,
        COLUMN_EMAIL,
        COLUMN_PHONE,
        COLUMN_ROLES,
        COLUMN_HELPER.display({
          header: "",
          id: "actions",
          cell: (props) => (
            <Actions
              {...props}
              onDelete={(personId) => setPeople((prev) => prev?.filter((person) => person.id !== personId))}
            />
          ),
        }),
      ],
      initialState: {
        sorting: [{ id: "lastName", desc: false }],
      },
      getRowId: (person) => person.id,
      getCoreRowModel: getCoreRowModel(),
    }),
    [filteredPeople],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = useCallback(
    debounce((value: string | null) => setSearchTerm(value?.trim().toLowerCase()), 500),
    [],
  );

  const onNewPerson = useCallback(async () => {
    router.push("/cms/people/add");
  }, [router]);
  useHotkeys("alt+n", onNewPerson);

  const refSearch = useRef<HTMLDivElement>(null);
  const focusSearch = useCallback(() => {
    refSearch.current?.focus();
  }, []);
  useHotkeys("alt+s", focusSearch);

  return (
    <>
      <CardToolbar>
        <TextField inputRef={refSearch} fullWidth={false} onChange={onChange} label="Suche" StartIcon={LuSearch} />
        <Button variant="contained" aria-label="Neue Person" startIcon={<MdOutlinePersonAdd />} href="/cms/people/add">
          Neue Person
        </Button>
      </CardToolbar>
      <Table options={options} loading={people === undefined} />
    </>
  );
}

function Actions<TData extends { id: string }>({
  onDelete,
  ...cellContext
}: CellContext<TData, unknown> & { onDelete: (personId: string) => void }) {
  const router = useRouter();
  return (
    <div className="w-full flex place-content-end gap-2">
      <IconButton
        size="small"
        onClick={() => {
          router.push(`/cms/people/${cellContext.row.original.id}`);
        }}
      >
        <FaRegEdit />
      </IconButton>
      <IconButton
        size="small"
        onClick={async () => {
          await deletePerson(cellContext.row.original.id);
          onDelete(cellContext.row.original.id);
        }}
      >
        <MdOutlineDelete />
      </IconButton>
    </div>
  );
}
