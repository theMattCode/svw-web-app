import React from "react";
import { shops } from "#/content/club";
import { FaFileSignature, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="top-0 sticky bg-white drop-shadow-xl flex flex-col">
      <FastAccessBar />
      <MainBar />
    </nav>
  );
}

export function FastAccessBar() {
  return (
    <div
      data-tid="nav-fast-access-bar"
      className="hidden md:flex bg-svw-blue-dark text-white text-sm h-6 items-center"
    >
      <div className="container flex justify-end gap-2 h-full">
        {shops.map((shop) => (
          <Link
            key={shop.name}
            target="_blank"
            href={shop.url}
            className="flex items-center px-2 gap-1.5 hover:bg-svw-blue-darker"
          >
            <FaShoppingCart />
            <span>{shop.name}</span>
          </Link>
        ))}
        <Link
          href="/mitglied-werden"
          className="flex items-center px-2 gap-1.5 hover:bg-svw-blue-darker"
        >
          <FaFileSignature />
          <span>Mitglied werden</span>
        </Link>
      </div>
    </div>
  );
}

export function MainBar() {
  return <div data-tid="nav-main-bar">Main Bar</div>;
}
