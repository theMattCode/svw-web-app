import { CellContext, RowData } from "@tanstack/table-core";
import Link from "next/link";

export function PhoneCell<TData extends RowData>({ cell }: CellContext<TData, string | null>) {
  const value = cell.getValue();
  return value ? (
    <Link href={`tel:${value}`} className="whitespace-nowrap">
      {value}
    </Link>
  ) : null;
}
