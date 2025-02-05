import { RowData } from "@tanstack/table-core";
import { PropsWithTable } from "#/components/cms/table/types";
import { TableBodyRow } from "#/components/cms/table/TableBodyRow";
import { LinearProgress } from "@mui/material";

export function TableBody<TData extends RowData>({ table, loading }: PropsWithTable<TData> & { loading: boolean }) {
  return (
    <tbody>
      {loading && (
        <tr>
          <td colSpan={table.getFlatHeaders().length} className="h-12">
            <LinearProgress />
          </td>
        </tr>
      )}
      {!loading && table.getRowModel().rows.map((row) => <TableBodyRow key={row.id} row={row} />)}
    </tbody>
  );
}
