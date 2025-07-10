import { sitemap } from "#/content/sitemap";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SubMenu } from "#/components/navigation/SubMenu";

export function LargeScreenNavigation() {
  return (
    <div className="transition-all z-30 hidden md:flex h-full w-full justify-center">
      {sitemap.map((item) => (
        <div key={item.name} className="group">
          <Link
            href={item.url}
            target={item.external ? "_blank" : "_self"}
            className="flex gap-2 items-center h-full px-8 hover:bg-gray-100 text-xl"
          >
            <div>{item.name}</div>
            {item.external && <HiOutlineExternalLink />}
          </Link>
          {item.subMenu && (
            <div className="absolute left-0 py-4 hidden group-hover:block w-full bg-svw-blue-dark text-white">
              <SubMenu item={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
