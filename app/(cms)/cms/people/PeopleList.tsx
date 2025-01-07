"use client";

import { PersonWithRoles } from "#/lib/types/people";
import { createColumnHelper, getCoreRowModel, TableOptions } from "@tanstack/table-core";
import { Table } from "#/components/cms/table/Table";
import { PhoneCell } from "#/components/cms/table/cell/Phone";
import { MailCell } from "#/components/cms/table/cell/Mail";
import { RolesCell } from "#/components/cms/table/cell/Roles";
import { useMemo } from "react";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";

const COLUMN_HELPER = createColumnHelper<PersonWithRoles>();

export default function PeopleList({ data }: { data: PersonWithRoles[] }) {
  const options: TableOptions<PersonWithRoles> = useMemo(
    () => ({
      data,
      columns: [
        COLUMN_HELPER.accessor("firstName", {
          header: "Vorname",
          id: "firstName",
        }),
        COLUMN_HELPER.accessor("lastName", {
          header: "Nachname",
          id: "lastName",
        }),
        COLUMN_HELPER.accessor("email", {
          header: "E-Mail",
          id: "email",
          cell: MailCell,
        }),
        COLUMN_HELPER.accessor("phone", {
          header: "Phone",
          id: "phone",
          cell: PhoneCell,
        }),
        COLUMN_HELPER.accessor((person) => person.peopleToRoles.map((p) => p.roles.name), {
          header: "Rollen",
          id: "roles",
          cell: RolesCell,
        }),
        COLUMN_HELPER.display({
          header: "",
          id: "actions",
          cell: (cellContext) => (
            <Link href={`/cms/people/${cellContext.row.original.id}`}>
              <FaRegEdit />
            </Link>
          ),
        }),
      ],
      getRowId: (person) => person.id,
      getCoreRowModel: getCoreRowModel(),
    }),
    [data],
  );

  return <Table options={options} />;
}
