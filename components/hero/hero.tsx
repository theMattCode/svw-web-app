import { club } from "#/content/club";
import {
  badminton,
  fitUndGesund,
  fussball,
  gymnastik65plus,
  hobbyHorsing,
  powerFitness,
  rehasport,
  steelDarts,
  teenDance,
  yoga,
} from "#/content/sitemap";

import type { JSX } from "react";
import DartsIcon from "#/components/web/icon/DartsIcon/DartsIcon";
import DanceIcon from "#/components/web/icon/DanceIcon/DanceIcon";
import { ActivityCard } from "#/components/web/activity/ActivityCard";
import { Carousel } from "#/components/web/carousel/Carousel";

export function Hero(): JSX.Element {
  return (
    <div className="w-full p-4 bg-svw-blue-default text-white transition-all flex flex-col gap-4 justify-center items-center">
      <div className="w-full p-4 flex flex-col gap-4 text-center">
        <h1 className="text-6xl font-bold upper">{club.name}</h1>
        <p className="font-medium">Erlebe gemeinsam mit uns Breiten- und Leistungssport</p>
      </div>
      <div className="container">
        <Carousel>
          <ActivityCard activity={{ ...fussball, icon: <DartsIcon /> }} />
          <ActivityCard activity={{ ...badminton, icon: <DanceIcon /> }} />
          <ActivityCard activity={{ ...steelDarts, icon: <DartsIcon /> }} />
          <ActivityCard activity={{ ...hobbyHorsing, icon: <DartsIcon /> }} />
          <ActivityCard activity={{ ...yoga, icon: <DartsIcon /> }} />
          <ActivityCard activity={{ ...teenDance, icon: <DanceIcon /> }} />
          <ActivityCard activity={{ ...rehasport, icon: <DanceIcon /> }} />
          <ActivityCard activity={{ ...fitUndGesund, icon: <DanceIcon /> }} />
          <ActivityCard activity={{ ...powerFitness, icon: <DanceIcon /> }} />
          <ActivityCard activity={{ ...gymnastik65plus, icon: <DanceIcon /> }} />
        </Carousel>
      </div>
      <div className="pt-4">CTA: Mitglied werden</div>
    </div>
  );
}
