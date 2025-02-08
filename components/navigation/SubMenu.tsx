import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PiFilePdf } from "react-icons/pi";
import React from "react";
import { MenuItem } from "#/content/sitemap";
import { NewBadge } from "#/components/badge/NewBadge";

type Props = {
  item: MenuItem;
};

export function SubMenu({ item }: Props) {
  if (item.subMenu === undefined) return null;

  return (
    <div className="container px-4 gap-8 columns-2 lg:columns-3">
      {item.subMenu.map((subPage) => (
        <div key={subPage.name} className="w-full flex flex-col break-inside-avoid py-4">
          <Link
            href={subPage.url}
            target={subPage.external || subPage.download ? "_blank" : "_self"}
            prefetch={subPage.download === undefined}
            className="w-full flex gap-2 items-center text-lg px-2 font-bold border-b-2 border-white/25 hover:border-white/50"
          >
            <div>{subPage.name}</div>
            {subPage.new && <NewBadge />}
            {subPage.external && <HiOutlineExternalLink />}
            {subPage.download && subPage.download.type === "pdf" && <PiFilePdf />}
          </Link>
          {subPage.subMenu && (
            <ul className="w-full pl-2 flex flex-col">
              {subPage.subMenu.map((subSubPage) => (
                <li key={subSubPage.name} className="w-full">
                  <Link
                    href={subSubPage.url}
                    target={subSubPage.external || subSubPage.download ? "_blank" : "_self"}
                    prefetch={subPage.download === undefined}
                    className="w-full px-2 flex gap-2 items-center"
                  >
                    <div>{subSubPage.name}</div>
                    {subSubPage.new && <NewBadge />}
                    {subSubPage.external && <HiOutlineExternalLink />}
                    {subSubPage.download && subSubPage.download.type === "pdf" && <PiFilePdf />}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
