import { Item } from "#/components/cms/navigation/Item";
import { NavItem } from "#/components/cms/navigation/types";

export function Group({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="pt-2 flex flex-col w-full">
      <div
        className="flex text-gray-400 py-2
          before:border-gray-300 before:top-2.5 before:w-8 before:relative before:border-t
          after:border-gray-300 after:top-2.5 after:w-full after:relative after:border-t"
        role="separator"
      >
        <span className="px-2 text-sm uppercase">{title}</span>
      </div>
      <div className="flex flex-col gap-2">
        {items.map(({ title, href, Icon }) => (
          <Item title={title} href={href} Icon={Icon} key={title} />
        ))}
      </div>
    </div>
  );
}
