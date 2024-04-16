import { Row, RowData } from "@tanstack/table-core";
import { TableBodyCell } from "#/components/cms/table/TableBodyCell";

interface Props<TData extends RowData> {
  row: Row<TData>;
}

export function TableBodyRow<TData extends RowData>({ row }: Props<TData>) {
  return (
    <tr>
      {row.getAllCells().map((cell) => (
        <TableBodyCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
}
