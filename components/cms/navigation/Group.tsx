import { NavGroup } from "#/components/cms/navigation/types";

export function Group({ group }: { group: NavGroup }) {
  return (
    <div
      className="flex text-gray-400 py-2
          before:border-gray-300 before:top-2.5 before:w-8 before:relative before:border-t
          after:border-gray-300 after:top-2.5 after:w-full after:relative after:border-t"
      role="separator"
    >
      <span className="px-2 text-sm uppercase">{group.title}</span>
    </div>
  );
}
