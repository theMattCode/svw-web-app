import { club } from "#/content/club";
import { activities } from "#/content/sitemap";
import Link from "next/link";
import Image from "next/image";

import type { JSX } from "react";

export function Hero(): JSX.Element {
  return (
    <div className="md:pt-0 w-full bg-[url('/media/hero/bg.jpg')] bg-cover bg-center">
      <div className="w-full bg-white/75">
        <div className="transition-all container px-4 pb-4 flex flex-col md:flex-row justify-center items-center">
          <div className="transition-all w-full md:w-1/2 flex flex-col items-center">
            <div className="md:hidden pt-4 font-medium">Dein Verein für</div>
            <div className="md:block font-semibold">Breiten- und Leistungssport</div>
            <div className="transition-all font-bold text-5xl text-center">{club.name}</div>
            <div className="py-2">Erlebe gemeinsam mit uns:</div>
            <div className="transition-all flex flex-wrap gap-2 justify-center text-white max-w-md pb-4 ">
              {activities.map((activity) => (
                <Link
                  key={activity.name}
                  href={activity.url}
                  className="transition-all flex items-center px-2 py-1 gap-1 hover:bg-svw-blue-darker whitespace-nowrap bg-svw-blue-default"
                >
                  <span className="uppercase font-medium">{activity.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="transition-all hidden md:flex w-1/2">
            <Image src="/media/hero/sports.png" width={557} height={513} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
