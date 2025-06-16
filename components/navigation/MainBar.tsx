import React from "react";
import Image from "next/image";
import { club } from "#/content/club";
import Link from "next/link";
import { SmallScreenNavigation } from "#/components/navigation/SmallScreenNavigation";
import { LargeScreenNavigation } from "#/components/navigation/LargeScreenNavigation";

export function MainBar() {
  return (
    <div data-tid="nav-main-bar" className="transition-all">
      <div className="transition-all md:container flex justify-between md:justify-start items-center pl-2 h-16 md:h-16 text-black">
        <Link href="/" className="z-50">
          <Image
            src={club.emblem}
            width={128}
            height={128}
            alt={club.name}
            className="transition-all hidden md:block bg-white rounded-full shadow-xl"
          />
          <Image
            src={club.emblem}
            width={80}
            height={80}
            alt={club.name}
            className="transition-all md:hidden translate-y-3 bg-white rounded-full shadow-xl"
          />
        </Link>
        <LargeScreenNavigation />
        <span className="transition-all md:hidden p-4 text-center sm:text-lg">{club.name}</span>
        <SmallScreenNavigation />
        <div className="hidden md:block w-32" />
      </div>
    </div>
  );
}
