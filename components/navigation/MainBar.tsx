import React from "react";
import Image from "next/image";
import { club } from "#/content/club";
import Link from "next/link";
import { SmallScreenNavigation } from "#/components/navigation/SmallScreenNavigation";
import { LargeScreenNavigation } from "#/components/navigation/LargeScreenNavigation";

export function MainBar() {
  return (
    <div data-tid="nav-main-bar" className="transition-all">
      <div className="transition-all md:container flex justify-between md:justify-start items-center pl-2 h-12 md:h-12 text-black">
        <Link href="/" className="z-50">
          <Image
            src={club.emblem}
            width={100}
            height={100}
            alt={club.name}
            className="transition-all hidden md:block"
          />
          <Image
            src={club.emblem}
            width={64}
            height={64}
            alt={club.name}
            className="transition-all md:hidden translate-y-3"
          />
        </Link>
        <LargeScreenNavigation />
        <span className="transition-all md:hidden px-4 text-center">{club.name}</span>
        <SmallScreenNavigation />
      </div>
    </div>
  );
}
