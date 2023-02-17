"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Page, SocialMediaData } from "#/lib/graphql/homepage.gql";
import Link from "next/link";

type Props = {
  menuItems: Page[];
  socialMedia: SocialMediaData[];
};

export default function SmallScreenNavigation({
  menuItems,
  socialMedia,
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
          {menuItems.map((menuItem) => (
            <li key={menuItem.slug} className="p-2 border-b border-neutral-300">
              <Link href={menuItem.slug}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
