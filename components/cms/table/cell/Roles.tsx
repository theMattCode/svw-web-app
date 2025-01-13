import { CellContext, RowData } from "@tanstack/table-core";

export function RolesCell<TData extends RowData>({ cell }: CellContext<TData, string[]>) {
  const value = cell.getValue();

  if (value) {
    return (
      <div className="flex gap-1 flex-wrap">
        {value.map((role) => (
          <span
            key={role}
            className="bg-svw-blue-lighter/30 text-svw-blue-default text-sm rounded-full px-2.5 py-0.5 whitespace-nowrap"
          >
            {role}
          </span>
        ))}
      </div>
    );
  }

  return null;
}
