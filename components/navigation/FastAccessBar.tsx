import { shops } from "#/content/club";
import Link from "next/link";
import { FaFileSignature, FaShoppingCart } from "react-icons/fa";
import React from "react";

export function FastAccessBar() {
  return (
    <div
      data-tid="nav-fast-access-bar"
      className="hidden md:flex bg-svw-blue-default text-white text-md h-10 items-center"
    >
      <div className="transition-all container flex justify-end gap-4 h-full">
        {shops.map((shop) => (
          <Link
            key={shop.name}
            target="_blank"
            href={shop.url}
            className="flex items-center px-4 gap-1.5 hover:bg-svw-blue-dark"
          >
            <FaShoppingCart />
            <span>{shop.name}</span>
          </Link>
        ))}
        <Link href="/verein/mitglied-werden" className="flex items-center px-4 gap-1.5 hover:bg-svw-blue-dark">
          <FaFileSignature />
          <span>Mitglied werden</span>
        </Link>
      </div>
    </div>
  );
}
