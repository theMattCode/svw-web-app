"use client";

import Link from "next/link";
import { Page } from "#/lib/graphql/generated";
import { useState } from "react";

type Props = {
  menuItems: Page[];
};
export function MainNavigation({ menuItems }: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState<Page | null>(null);
  return (
    <nav className="text-white whitespace-nowrap">
      {menuItems?.map((menuItem, index, array) => (
        <Link
          key={menuItem.slug}
          href={menuItem.slug}
          className={`py-2 px-3 ${array.length - 1 !== index ? "border-r border-neutral-300" : ""}`}
          onClick={() => setActiveItem(menuItem)}
        >
          {menuItem.title}
        </Link>
      ))}
    </nav>
  );
}
