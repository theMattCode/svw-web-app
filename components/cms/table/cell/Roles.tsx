import { CellContext, RowData } from "@tanstack/table-core";

export function RolesCell<TData extends RowData>({ cell }: CellContext<TData, string[] | null>) {
  const value = cell.getValue();

  if (value) {
    return (
      <>
        {value.map((role) => (
          <span key={role} className="bg-svw-blue-lighter/30 text-svw-blue-default text-sm rounded-full px-2.5 py-0.5">
            {role}
          </span>
        ))}
      </>
    );
  }

  return null;
}
