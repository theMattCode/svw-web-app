import { verein } from "#/content/sitemap";
import Link from "next/link";
import React from "react";

export default function Verein() {
  return (
    <div className="flex flex-col bg-svw-blue-dark text-white">
      <div className="container p-4 gap-8 columns-2 lg:columns-3">
        {verein.subMenu.map((subPage) => (
          <div
            key={subPage.name}
            className="w-full flex flex-col break-inside-avoid py-4"
          >
            <Link
              href={subPage.url}
              className="w-full text-lg px-2 font-bold border-b-2 border-opacity-25 border-white hover:border-opacity-50"
            >
              {subPage.name}
            </Link>
            {subPage.subMenu && (
              <ul className="w-full pl-2 flex flex-col">
                {subPage.subMenu.map((subSubPage) => (
                  <li key={subSubPage.name} className="w-full">
                    <Link href={subSubPage.url} className="w-full px-2">
                      {subSubPage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
