"use client";

import Link from "next/link";
import { JSX } from "react";

export interface NavItemProps {
  href: string;
  children: string;
  icon?: JSX.Element;
  active?: boolean;
}

export default function NavItem({ href, children, icon, active }: NavItemProps): JSX.Element {
  return (
    <Link
      href={href}
      className={`font-medium py-2 px-6 uppercase hover:bg-svw-blue-lighter hover:bg-opacity-25 bg-opacity-40 flex items-center ${
        active ? "bg-svw-blue-lighter" : ""
      }`}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <div>{children}</div>
    </Link>
  );
}
