import { CellContext, RowData } from "@tanstack/table-core";
import Link from "next/link";

export function MailCell<TData extends RowData>({ cell }: CellContext<TData, string | null>) {
  const value = cell.getValue();
  return value ? <Link href={`mailto:${value}`}>{value}</Link> : null;
}
