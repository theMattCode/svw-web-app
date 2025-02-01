"use client";

import * as React from "react";
import { PersonWithRoles } from "#/lib/types/people";
import { CellContext, createColumnHelper, getCoreRowModel, Row, TableOptions } from "@tanstack/table-core";
import { Table } from "#/components/cms/table/Table";
import { PhoneCell } from "#/components/cms/table/cell/Phone";
import { MailCell } from "#/components/cms/table/cell/Mail";
import { RolesCell } from "#/components/cms/table/cell/Roles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { CardToolbar } from "#/components/cms/card/Card";
import { debounce } from "lodash";
import { LuSearch } from "react-icons/lu";
import { MdOutlineDelete, MdOutlinePersonAdd } from "react-icons/md";
import { Button, IconButton } from "@mui/material";
import { TextField } from "#/components/cms/input/TextField";
import { createPerson, deletePerson } from "#/app/(cms)/cms/people/[id]/actions";
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

const COLUMN_ACTIONS = COLUMN_HELPER.display({
  header: "",
  id: "actions",
  cell: Actions,
});

export default function PeopleList() {
  const [data, setData] = useState<PersonWithRoles[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      const res = await fetch("/cms/api/people", { next: { tags: ["cms/api/people"] } });
      const data = await res.json();
      setData(data.roles);
    }
    fetchPeople().finally(() => setLoading(false));
  }, []);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string | null>();
  const filteredData = useMemo(
    () =>
      data.filter((person) => {
        if (!searchTerm) return true;

        const firstName = person.firstName?.toLowerCase();
        const lastName = person.lastName?.toLowerCase();

        if (firstName?.includes(searchTerm)) return true;
        if (lastName?.includes(searchTerm)) return true;
        if (`${firstName} ${lastName}`.includes(searchTerm)) return true;
        if (person.email?.toLowerCase().includes(searchTerm)) return true;
        return person.peopleToRoles.some((p) => p.roles.name?.toLowerCase().includes(searchTerm) ?? false);
      }),
    [searchTerm, data],
  );

  const options: TableOptions<PersonWithRoles> = useMemo(
    () => ({
      data: filteredData,
      columns: [COLUMN_FIRSTNAME, COLUMN_LASTNAME, COLUMN_EMAIL, COLUMN_PHONE, COLUMN_ROLES, COLUMN_ACTIONS],
      getRowId: (person) => person.id,
      getCoreRowModel: getCoreRowModel(),
    }),
    [filteredData],
  );

  const onChange = useCallback(
    debounce((value: string | null) => setSearchTerm(value?.trim().toLowerCase()), 500),
    [],
  );

  const onNewPerson = useCallback(async () => {
    const person = await createPerson();
    router.push(`/cms/people/${person.person.id}`);
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
        <Button variant="contained" aria-label="Neue Person" startIcon={<MdOutlinePersonAdd />} onClick={onNewPerson}>
          Neue Person
        </Button>
      </CardToolbar>
      <Table options={options} loading={loading} />
    </>
  );
}

function Actions<TData extends { id: string }>(cellContext: CellContext<TData, unknown>) {
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
          router.push(`/cms/people`);
        }}
      >
        <MdOutlineDelete />
      </IconButton>
    </div>
  );
}
