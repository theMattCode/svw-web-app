"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { HeaderData, NavItemData } from "#/app/data.gql";

type Props = {
  headerData: HeaderData | null;
};
export function MainNavigation({ headerData }: Props): JSX.Element {
  const [activeItem, setActiveItem] = useState<NavItemData | null>(null);
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
        {headerData?.logo?.data?.attributes?.url && (
          <Link href="/" onClick={() => setActiveItem(null)}>
            <Image
              src={getFullAssetUrl(headerData.logo.data?.attributes?.url)}
              alt=""
              width={128}
              height={128}
              className="h-32 lg:ml-32"
              style={{ transform: "translateY(-20px)" }}
            />
          </Link>
        )}
      </div>
      <div className="flex flex-row flex-grow justify-center h-14 text-sm">
        {headerData?.navigationLinks?.data.map((link, index, array) => {
          const page = link.attributes;
          const subPages = page?.subPages?.data;
          const hasMegaMenu = subPages && subPages?.length > 0;
          if (page) {
            if (hasMegaMenu) {
              return (
                <NavItemWithMegaMenu
                  key={page?.slug}
                  menuItem={page}
                  isActiveItem={activeItem === page}
                  setActiveItem={setActiveItem}
                  isLast={array.length - 1 === index}
                />
              );
            }
            return (
              <NavItem
                key={page?.slug}
                menuItem={page}
                isActiveItem={activeItem === page}
                setActiveItem={setActiveItem}
                isLast={array.length - 1 === index}
              />
            );
          }
        })}
      </div>
    </nav>
  );
}

type NavItemProps = {
  menuItem: NavItemData;
  isActiveItem: boolean;
  setActiveItem: (menuItem: NavItemData) => void;
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
  const subPages = menuItem.subPages?.data;
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
        <div className="container pl-24 xl:pl-4 pr-4 py-12 flex flex-row gap-x-12 gap-y-4 justify-center">
          {subPages?.map((subPage) => {
            const page = subPage.attributes;
            if (page) {
              return (
                <Link key={page.slug} href={page.slug}>
                  {page.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
