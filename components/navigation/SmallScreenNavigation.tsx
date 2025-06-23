"use client";

import { FaBars, FaX } from "react-icons/fa6";
import React, { useState } from "react";
import { sitemap, MenuItem, mitgliedWerden } from "#/content/sitemap";
import Link from "next/link";
import { FaChevronDown, FaFileSignature, FaShoppingCart } from "react-icons/fa";
import { shops } from "#/content/club";

import { NewBadge } from "#/components/badge/NewBadge";

export function SmallScreenNavigation() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpenClose = () => setOpen((open) => !open);
  const close = () => setOpen(false);

  return (
    <div className="h-full md:hidden">
      <button
        aria-label="Menu"
        className="transition-all h-full aspect-square flex justify-center items-center"
        onClick={toggleOpenClose}
      >
        {open ? <FaX /> : <FaBars />}
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } transition-all w-full absolute left-0 top-16 p-4 pt-6 bg-svw-blue-dark text-white overflow-y-auto h-[calc(100vh-4rem)]`}
      >
        <div className="relative flex flex-col text-lg">
          <ul className="transition-all w-full">
            {sitemap.map((item) => (
              <ListItem key={item.name} item={item} onClick={close} />
            ))}
          </ul>
          <div className="p-4 flex flex-wrap gap-4 justify-center">
            <Link
              key={mitgliedWerden.name}
              href={mitgliedWerden.url}
              className="flex items-center px-4 py-2 gap-2 hover:bg-svw-blue-darker whitespace-nowrap"
            >
              <FaFileSignature />
              <span>{mitgliedWerden.name}</span>
            </Link>
          </div>
          <div className="p-4 flex flex-wrap gap-4 justify-center">
            {shops.map((shop) => (
              <Link
                key={shop.name}
                target="_blank"
                href={shop.url}
                className="flex items-center px-4 py-2 gap-2 hover:bg-svw-blue-darker whitespace-nowrap"
              >
                <FaShoppingCart />
                <span>{shop.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpenClose = () => setOpen((open) => !open);
  return (
    <li>
      <div className="w-full py-2 flex flex-row gap-2 items-center border-b border-white/25">
        <Link href={item.url} onClick={onClick} className="grow h-full flex items-center ">
          <div className="grow flex flex-row gap-4 pl-1">{item.name}</div>
        </Link>
        {item.new && <NewBadge />}
        {item.subMenu && (
          <button
            aria-label="Toggle Submenu"
            className="h-full aspect-square flex justify-center items-center"
            onClick={toggleOpenClose}
          >
            <FaChevronDown className={`transition-all ${open ? "rotate-90" : ""}`} />
          </button>
        )}
      </div>
      {item.subMenu && (
        <ul className={`pl-4 transition-all ${open ? "" : "hidden h-0"}`}>
          {item.subMenu?.map((subItem) => <ListItem key={subItem.name} item={subItem} onClick={onClick} />)}
        </ul>
      )}
    </li>
  );
}
