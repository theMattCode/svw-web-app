import { Header, RowData } from "@tanstack/table-core";
import { flexRender } from "@tanstack/react-table";

interface Props<TData extends RowData, TValue> {
  header: Header<TData, TValue>;
}

export function TableHeadCell<TData extends RowData, TValue = unknown>({ header }: Props<TData, TValue>) {
  return <th>{flexRender(header.column.columnDef.header, header.getContext())}</th>;
}
