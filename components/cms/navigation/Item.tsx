import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItem } from "#/components/cms/navigation/types";

export function Item({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === item.href;
  return (
    <Link
      className={`w-full h-10 rounded-r-3xl flex gap-3 pl-4 items-center text-gray-600 text-lg ${
        active ? "text-white bg-linear-to-r from-svw-blue-default/75 to-svw-blue-default" : "hover:bg-gray-200"
      }`}
      href={item.href}
      onClick={onClick}
    >
      {item.Icon && <item.Icon className={`w-6 h-6 flex object-fill ${active && "text-white"}`} />}
      <div className={active ? "text-white" : ""}>{item.title}</div>
    </Link>
  );
}
