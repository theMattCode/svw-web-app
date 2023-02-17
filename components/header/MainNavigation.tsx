"use client";

import Link from "next/link";
import { Page } from "#/lib/graphql/generated";
import { Suspense, useState } from "react";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { DynamicContent } from "#/components/dynamic/DynamicContent";

type Props = {
  logo: string | undefined;
  menuItems: Page[];
};
export function MainNavigation({ logo, menuItems }: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState<Page | null>(null);
  return (
    <nav className="text-white whitespace-nowrap w-full flex flex-row">
      <Suspense>
        <script
          async
          type="text/javascript"
          src="https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js"
        ></script>
      </Suspense>
      <div className="h-14 z-30">
        {logo && (
          <Link href="/" onClick={() => setActiveItem(null)}>
            <Image
              src={getFullAssetUrl(logo)}
              alt=""
              width={128}
              height={128}
              className="h-32 lg:ml-32 "
              style={{ transform: "translateY(-20px)" }}
            />
          </Link>
        )}
      </div>
      <div className="flex flex-row flex-grow justify-center h-14 text-sm">
        {menuItems?.map((menuItem, index, array) => {
          const megaMenuContents = menuItem.megaMenuContents;
          const hasMegaMenu = megaMenuContents && megaMenuContents?.length > 0;
          if (hasMegaMenu) {
            return (
              <NavItemWithMegaMenu
                key={menuItem.slug}
                menuItem={menuItem}
                isActiveItem={activeItem === menuItem}
                setActiveItem={setActiveItem}
                isLast={array.length - 1 === index}
              />
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
      className={`mx-0.5 h-full flex flex-col border-b-4 justify-center ${
        isActiveItem ? "border-b-white" : "border-transparent"
      } hover:border-b-white`}
    >
      <div className={`text-lg px-4`}>{menuItem.title}</div>
    </Link>
  );
}

function NavItemWithMegaMenu({
  menuItem,
  isActiveItem,
  setActiveItem,
  isLast,
}: NavItemProps): JSX.Element {
  const megaMenuContents = menuItem.megaMenuContents;
  return (
    <div key={menuItem.slug} className="group flex flex-row place-items-center">
      <NavItem
        key={menuItem.slug}
        menuItem={menuItem}
        isActiveItem={isActiveItem}
        setActiveItem={setActiveItem}
        isLast={isLast}
      />
      <div className="hidden absolute left-0 top-[6em] group-hover:block z-10 w-full border-t-2 border-white bg-neutral-200/90 text-black">
        <div className="container px-4 py-4 flex flex-row gap-x-12 gap-y-4 justify-center">
          {megaMenuContents?.map((content) => {
            if (content) {
              return (
                <DynamicContent
                  key={"id" in content ? content.id : content.code}
                  component={content}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
