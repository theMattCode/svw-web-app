"use client";

import Link from "next/link";
import { Page } from "#/lib/graphql/generated";
import { useState } from "react";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";

type Props = {
  logo: string | undefined;
  menuItems: Page[];
};
export function MainNavigation({ logo, menuItems }: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState<Page | null>(null);

  return (
    <nav className="text-svw-blue-default whitespace-nowrap w-full flex flex-row justify-between">
      <div className="overflow-visible h-14 z-50">
        {logo && (
          <Link href="/" onClick={() => setActiveItem(null)}>
            <Image
              src={getFullAssetUrl(logo)}
              alt=""
              width={128}
              height={128}
              className="pt-2 h-32 lg:ml-32 "
              /*style={{ transform: "translateY(-32px)" }}*/
            />
          </Link>
        )}
      </div>
      <div className="flex flex-row text-sm">
        {menuItems?.map((menuItem, index, array) => (
          <div
            key={menuItem.slug}
            className={`h-14 py-4 ${
              activeItem === menuItem
                ? "border-b-4 border-svw-blue-default"
                : ""
            }`}
          >
            <div>
              <Link
                href={menuItem.slug}
                className={`px-3 ${
                  array.length - 1 !== index
                    ? "border-r border-svw-blue-default"
                    : ""
                }`}
                onClick={() => setActiveItem(menuItem)}
              >
                {menuItem.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
