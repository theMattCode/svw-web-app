"use client";

import { PropsWithChildren } from "react";
import { FaHome } from "react-icons/fa";
import { MdArticle, MdEvent, MdTag } from "react-icons/md";
import NavItem from "#/components/cms/navigation/NavItem";
import { usePathname } from "next/navigation";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const navItems = [
  { href: "/cms", icon: <FaHome />, children: "Home" },
  { href: "/cms/articles", icon: <MdArticle />, children: "Artikel" },
  { href: "/cms/events", icon: <MdEvent />, children: "Events" },
  { href: "/cms/tags", icon: <MdTag />, children: "Tags" },
];

export default withPageAuthRequired(function CMSLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { user } = useUser();
  return (
    <>
      <div className="bg-svw-blue-default text-white py-4 h-full flex flex-col">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} icon={item.icon} active={pathname === item.href}>
            {item.children}
          </NavItem>
        ))}
        <a href="/api/auth/logout" data-testid=" logout">
          Logout
        </a>
      </div>
      <div className="p-4 h-full w-full overflow-y-auto flex">{children}</div>
    </>
  );
});
