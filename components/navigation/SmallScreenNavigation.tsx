"use client";

import { FaBars, FaX } from "react-icons/fa6";
import React, { useState } from "react";
import { menu, MenuItem } from "#/content/menu";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

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
        {open && <FaX />}
        {!open && <FaBars />}
      </button>
      <ul
        className={`${
          open ? "block" : "hidden h-0"
        } transition-all w-full absolute right-0 top-10 p-2 pt-6 bg-svw-blue-dark text-white`}
      >
        {menu.map((item) => (
          <ListItem key={item.name} item={item} onClick={close} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpenClose = () => setOpen((open) => !open);
  return (
    <li>
      <div className="h-8 flex">
        <Link
          href={item.url}
          onClick={onClick}
          className="grow h-full flex items-center border-b border-white border-opacity-25"
        >
          <span className="grow pl-2">{item.name}</span>
        </Link>
        {item.subMenu && (
          <button
            aria-label="Toggle Submenu"
            className="h-full aspect-square flex justify-center items-center border-b border-white border-opacity-25"
            onClick={toggleOpenClose}
          >
            <FaChevronDown
              className={`transition-all ${open ? "rotate-90" : ""}`}
            />
          </button>
        )}
      </div>
      {item.subMenu && (
        <ul className={`pl-4 transition-all ${open ? "" : "hidden h-0"}`}>
          {item.subMenu?.map((subItem) => (
            <ListItem key={subItem.name} item={subItem} onClick={onClick} />
          ))}
        </ul>
      )}
    </li>
  );
}
