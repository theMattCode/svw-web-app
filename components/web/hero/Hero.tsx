import { club } from "#/content/club";
import {
  badminton,
  fitUndGesund,
  fussball,
  gymnastik65plus,
  hobbyHorsing,
  mitgliedWerden,
  powerFitness,
  rehasport,
  steelDarts,
  teenDance,
  yoga,
} from "#/content/sitemap";

import React, { JSX } from "react";
import { ActivityCard } from "#/components/web/activity/ActivityCard";
import { Carousel } from "#/components/web/carousel/Carousel";
import { ActivityIcon } from "#/components/web/activity/ActivityIcon";
import {
  BadmintonIcon,
  DanceIcon,
  DartsIcon,
  FitUndGesundIcon,
  Gymnastik65PlusIcon,
  HobbyHorsingIcon,
  PowerfitnessIcon,
  RehasportIcon,
  SoccerIcon,
  YogaIcon,
} from "#/components/web/activity/paths";
import Link from "next/link";
import { FaFileSignature } from "react-icons/fa";

export function Hero(): JSX.Element {
  return (
    <div className="bg-hero bg-cover text-white transition-all ">
      <div className=" bg-svw-blue-default/90 w-full p-4 flex flex-col gap-4 justify-center items-center">
        <div className="w-full p-4 flex flex-col gap-4 text-center">
          <h1 className="text-6xl italic font-bold tracking-[-0.75px] border-none">{club.name}</h1>
          <p className="font-medium">Erlebe gemeinsam mit uns Breiten- und Leistungssport</p>
        </div>
        <Activities />
        <Link
          href={mitgliedWerden.url}
          className="flex items-center gap-1.5 justify-center py-2 px-3 hover:bg-svw-blue-darker bg-svw-blue-dark text-white uppercase font-bold whitespace-nowrap text-sm"
        >
          <FaFileSignature />
          Mitglied werden
        </Link>
      </div>
    </div>
  );
}

export function Activities() {
  return (
    <div className="flex flex-row flex-wrap gap-4 transition-all justify-center text-white pb-4">
      <ActivityCard activity={{ ...fussball, icon: <ActivityIcon Paths={SoccerIcon} /> }} />
      <ActivityCard activity={{ ...badminton, icon: <ActivityIcon Paths={BadmintonIcon} /> }} />
      <ActivityCard activity={{ ...steelDarts, icon: <ActivityIcon Paths={DartsIcon} /> }} />
      <ActivityCard activity={{ ...hobbyHorsing, icon: <ActivityIcon Paths={HobbyHorsingIcon} /> }} />
      <ActivityCard activity={{ ...yoga, icon: <ActivityIcon Paths={YogaIcon} /> }} />
      <ActivityCard activity={{ ...teenDance, icon: <ActivityIcon Paths={DanceIcon} /> }} />
      <ActivityCard activity={{ ...powerFitness, icon: <ActivityIcon Paths={PowerfitnessIcon} /> }} />
      <ActivityCard activity={{ ...rehasport, icon: <ActivityIcon Paths={RehasportIcon} /> }} />
      <ActivityCard activity={{ ...fitUndGesund, icon: <ActivityIcon Paths={FitUndGesundIcon} /> }} />
      <ActivityCard activity={{ ...gymnastik65plus, icon: <ActivityIcon Paths={Gymnastik65PlusIcon} /> }} />
    </div>
  );
}
