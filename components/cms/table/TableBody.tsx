import { RowData } from "@tanstack/table-core";
import { PropsWithTable } from "#/components/cms/table/types";
import { TableBodyRow } from "#/components/cms/table/TableBodyRow";

export function TableBody<TData extends RowData>({ table, loading }: PropsWithTable<TData> & { loading: boolean }) {
  return (
    <tbody>
      {loading && (
        <tr>
          <td colSpan={table.getFlatHeaders().length}>Lädt...</td>
        </tr>
      )}
      {!loading && table.getRowModel().rows.map((row) => <TableBodyRow key={row.id} row={row} />)}
    </tbody>
  );
}
