import { RowData, TableOptions } from "@tanstack/table-core";
import { TableHead } from "#/components/cms/table/TableHead";
import { useReactTable } from "@tanstack/react-table";
import { TableBody } from "#/components/cms/table/TableBody";

interface Props<TData extends RowData> {
  options: TableOptions<TData>;
  loading?: boolean;
}

export function Table<TData extends RowData>({ options, loading = false }: Props<TData>) {
  const table = useReactTable<TData>(options);
  return (
    <table>
      <TableHead table={table} />
      <TableBody table={table} loading={loading} />
    </table>
  );
}
