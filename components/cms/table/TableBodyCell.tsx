import { Cell, RowData } from "@tanstack/table-core";
import { flexRender } from "@tanstack/react-table";

interface Props<TData extends RowData, TValue> {
  cell: Cell<TData, TValue>;
}

export function TableBodyCell<TData extends RowData, TValue = unknown>({ cell }: Props<TData, TValue>) {
  return <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
}
