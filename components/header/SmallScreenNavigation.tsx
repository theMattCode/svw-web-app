"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { HeaderData } from "#/app/data.gql";
import Link from "next/link";

type Props = {
  headerData: HeaderData | null;
};

export default function SmallScreenNavigation({
  headerData,
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <FaBars className="h-16 mr-6" onClick={() => setOpen((open) => !open)} />
      <div
        className={`fixed right-0 top-16 w-full border-t-2 border-white bg-neutral-200 text-black ${
          open ? "visible z-30" : "hidden"
        }`}
      >
        <ul>
          {headerData?.navigationLinks?.data.map((menuItem) => {
            const page = menuItem.attributes;
            if (page) {
              return (
                <li key={page.slug} className="p-2 border-b border-neutral-300">
                  <Link href={page.slug} onClick={() => setOpen(false)}>
                    {page.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
