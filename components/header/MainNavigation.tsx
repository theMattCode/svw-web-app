"use client";

import Link from "next/link";
import { Page } from "#/lib/graphql/generated";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  menuItems: Page[];
};
export function MainNavigation({ menuItems }: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState<Page | null>(null);
  const router = useRouter();

  return (
    <nav className="text-svw-blue-default whitespace-nowrap">
      {menuItems?.map((menuItem, index, array) => (
        <Link
          key={menuItem.slug}
          href={menuItem.slug}
          className={`px-3 ${
            array.length - 1 !== index ? "border-r border-svw-blue-default" : ""
          }`}
          onClick={() => setActiveItem(menuItem)}
        >
          {menuItem.title}
        </Link>
      ))}
    </nav>
  );
}
