import { club } from "#/content/club";
import { steelDarts, teenDance } from "#/content/sitemap";
import Link from "next/link";

import type { JSX } from "react";
import DartsIcon from "#/components/web/icon/DartsIcon/DartsIcon";
import DanceIcon from "#/components/web/icon/DanceIcon/DanceIcon";

export function Hero(): JSX.Element {
  return (
    <div className="w-full p-4 bg-svw-blue-default text-white transition-all flex flex-col gap-4 justify-center items-center">
      <div className="w-full p-4 flex flex-col gap-4 font-bold text-center">
        <div className="text-5xl">{club.name}</div>
        <div className="text-2xl">Erlebe Sport gemeinsam mit uns Breiten- und Leistungssport</div>
      </div>
      {/*<div className="transition-all flex flex-wrap gap-2 justify-center text-white max-w-md pb-4 ">
              {activities.map((activity) => (
                <Link
                  key={activity.name}
                  href={activity.url}
                  className="transition-all flex items-center px-2 py-1 gap-1 hover:bg-svw-blue-darker whitespace-nowrap bg-svw-blue-default"
                >
                  <span className="uppercase font-medium">{activity.name}</span>
                </Link>
              ))}
            </div>*/}
      <div className="flex flex-row gap-4">
        <Link
          href={steelDarts.url}
          className="w-48 transition-all flex flex-col items-center justify-center hover:scale-105 bg-white"
        >
          <div className="w-full p-4">
            <DartsIcon />
          </div>
          <div className="w-full flex justify-center p-2 hover:bg-svw-blue-darker bg-svw-blue-dark text-white uppercase font-bold whitespace-nowrap">
            {steelDarts.name}
          </div>
        </Link>
        <Link
          href={teenDance.url}
          className="w-48 transition-all flex flex-col items-center justify-center hover:scale-105 bg-white"
        >
          <div className="w-full p-4">
            <DanceIcon />
          </div>
          <div className="w-full flex justify-center p-2 hover:bg-svw-blue-darker bg-svw-blue-dark text-white uppercase font-bold whitespace-nowrap">
            {teenDance.name}
          </div>
        </Link>
      </div>
    </div>
  );
}
