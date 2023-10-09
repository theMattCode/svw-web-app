import React from "react";
import Image from "next/image";
import { club } from "#/content/club";
import Link from "next/link";
import { SmallScreenNavigation } from "#/components/navigation/SmallScreenNavigation";
import { LargeScreenNavigation } from "#/components/navigation/LargeScreenNavigation";

export function MainBar() {
  return (
    <div data-tid="nav-main-bar" className="transition-all h-10 md:h-12">
      <div className="transition-all md:container flex justify-between md:justify-start items-center pl-2 h-10 md:h-12 text-svw-blue-darkest">
        <Link href="/" className="z-50">
          <Image
            src={club.emblem}
            width={92}
            height={92}
            alt={club.name}
            className="transition-all hidden md:block h-20"
          />
          <Image
            src={club.emblem}
            width={48}
            height={48}
            alt={club.name}
            className="transition-all md:hidden h-14 translate-y-2"
          />
        </Link>
        <LargeScreenNavigation />
        <span className="transition-all md:hidden px-4 text-center text-sm">
          {club.name}
        </span>
        <SmallScreenNavigation />
      </div>
    </div>
  );
}
