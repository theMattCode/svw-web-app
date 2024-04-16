import { PropsWithTable } from "#/components/cms/table/types";
import { RowData } from "@tanstack/table-core";
import { TableHeadCell } from "#/components/cms/table/TableHeadCell";

export function TableHead<TData extends RowData>({ table }: PropsWithTable<TData>) {
  return (
    <thead>
      {table.getFlatHeaders().map((header) => (
        <TableHeadCell key={header.id} header={header} />
      ))}
    </thead>
  );
}
