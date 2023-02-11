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
      <div className="h-14 z-30">
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
      <div className="flex flex-row h-14 text-sm place-items-center">
        {menuItems?.map((menuItem, index, array) => {
          const subPages = menuItem.subPages?.data;
          const hasSubPages = subPages && subPages?.length > 0;
          if (hasSubPages) {
            return (
              <div
                key={menuItem.slug}
                className="group h-14 flex flex-row place-items-center"
              >
                <NavItem
                  key={menuItem.slug}
                  menuItem={menuItem}
                  isActiveItem={activeItem === menuItem}
                  setActiveItem={setActiveItem}
                  isLast={array.length - 1 === index}
                />
                <div className="hidden absolute left-0 top-[6em] group-hover:block z-40 w-full border-t-2 border-svw-blue-default bg-neutral-200/90 text-black">
                  <div className="container px-4 py-4 flex flex-row gap-x-12 gap-y-4 justify-center">
                    <div>
                      <span className="font-bold text-lg">
                        <Link href={menuItem.slug}>{menuItem.title}</Link>
                      </span>
                      <ul className="list-none">
                        {subPages.map((subPage) => {
                          if (subPage.attributes?.slug) {
                            return (
                              <li key={subPage.id}>
                                <Link
                                  key={subPage.attributes?.slug}
                                  href={subPage.attributes?.slug}
                                >
                                  {subPage.attributes?.title}
                                </Link>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <NavItem
              key={menuItem.slug}
              menuItem={menuItem}
              isActiveItem={activeItem === menuItem}
              setActiveItem={setActiveItem}
              isLast={array.length - 1 === index}
            />
          );
        })}
      </div>
    </nav>
  );
}

type NavItemProps = {
  menuItem: Page;
  isActiveItem: boolean;
  setActiveItem: (menuItem: Page) => void;
  isLast: boolean;
};

function NavItem({
  menuItem,
  isActiveItem,
  setActiveItem,
  isLast,
}: NavItemProps) {
  return (
    <Link
      href={menuItem.slug}
      onClick={() => setActiveItem(menuItem)}
      className="border-x border-transparent"
    >
      <div
        className={`py-4 border-b-4 ${
          isActiveItem ? "border-svw-blue-default" : "border-transparent"
        } hover:border-svw-blue-default`}
      >
        <div
          className={isLast ? "px-3" : "px-3 border-r border-svw-blue-default"}
        >
          {menuItem.title}
        </div>
      </div>
    </Link>
  );
}
