import { IconType } from "react-icons";
import { ComponentType } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Item({ Icon, title, href }: { Icon?: IconType | ComponentType; title: string; href: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      className={`w-full h-10 rounded-r-3xl flex gap-3 pl-4 items-center text-gray-600 text-lg ${
        active ? "text-white bg-gradient-to-r from-svw-blue-default/75 to-svw-blue-default" : "hover:bg-gray-200"
      }`}
      href={href}
    >
      {Icon && <Icon className={`w-6 h-6 flex object-fill ${active && "text-white"}`} />}
      <div className={active ? "text-white" : ""}>{title}</div>
    </Link>
  );
}
