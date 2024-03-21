"use client";

import NavItem from "#/components/cms/navigation/NavItem";
import { usePathname } from "next/navigation";
import { JSX, PropsWithChildren } from "react";
import { FaHome } from "react-icons/fa";
import { MdArticle, MdEvent, MdTag } from "react-icons/md";

const navItems = [
  { href: "/cms", icon: <FaHome />, children: "Home" },
  { href: "/cms/articles", icon: <MdArticle />, children: "Artikel" },
  { href: "/cms/events", icon: <MdEvent />, children: "Events" },
  { href: "/cms/tags", icon: <MdTag />, children: "Tags" },
];

export default function CMSLayout({ children }: PropsWithChildren): JSX.Element {
  const pathname = usePathname();
  return (
    <html className="w-full h-full">
      <head />
      <body className="flex w-full h-full overflow-hidden">
        <div className="bg-svw-blue-default text-white py-4 h-full flex flex-col">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} icon={item.icon} active={pathname === item.href}>
              {item.children}
            </NavItem>
          ))}
        </div>
        <div className="p-4 h-full w-full overflow-y-auto flex">{children}</div>
      </body>
    </html>
  );
}
