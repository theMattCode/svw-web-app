import { RowData, Table } from "@tanstack/table-core";

export interface PropsWithTable<TData extends RowData> {
  table: Table<TData>;
}
