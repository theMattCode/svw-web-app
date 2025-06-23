import { club } from "#/content/club";
import {
  activities,
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
import { ActivityCard } from "#/components/web/activity/ActivityCard";
import { Carousel } from "#/components/web/carousel/Carousel";
import { ActivityIcon } from "#/components/web/activity/ActivityIcon";
import {
  BadmintonIcon,
  DanceIcon,
  DartsIcon,
  HobbyHorsingIcon,
  PowerfitnessIcon,
  SoccerIcon,
  YogaIcon,
} from "#/components/web/activity/paths";

export function Hero(): JSX.Element {
  return (
    <div className="w-full p-4 bg-svw-blue-default text-white transition-all flex flex-col justify-center items-center">
      <div className="w-full p-4 flex flex-col gap-4 text-center">
        <h1 className="text-6xl italic font-bold tracking-[-0.75px]">{club.name}</h1>
        <p className="font-medium">Erlebe gemeinsam mit uns Breiten- und Leistungssport</p>
      </div>
      <div className="sm:hidden transition-all flex flex-wrap gap-4 justify-center text-white max-w-md pb-4">
        <ActivityCard activity={{ ...fussball, icon: <ActivityIcon Paths={SoccerIcon} /> }} />
        <ActivityCard activity={{ ...badminton, icon: <ActivityIcon Paths={BadmintonIcon} /> }} />
        <ActivityCard activity={{ ...steelDarts, icon: <ActivityIcon Paths={DartsIcon} /> }} />
        <ActivityCard activity={{ ...hobbyHorsing, icon: <ActivityIcon Paths={HobbyHorsingIcon} /> }} />
        <ActivityCard activity={{ ...yoga, icon: <ActivityIcon Paths={YogaIcon} /> }} />
        <ActivityCard activity={{ ...teenDance, icon: <ActivityIcon Paths={DanceIcon} /> }} />
        <ActivityCard activity={{ ...powerFitness, icon: <ActivityIcon Paths={PowerfitnessIcon} /> }} />
        <ActivityCard activity={{ ...rehasport, icon: <ActivityIcon Paths={DartsIcon} /> }} />
        <ActivityCard activity={{ ...fitUndGesund, icon: <ActivityIcon Paths={DartsIcon} /> }} />
        <ActivityCard activity={{ ...gymnastik65plus, icon: <ActivityIcon Paths={DartsIcon} /> }} />
      </div>
      <div className="container hidden sm:block">
        <Carousel>
          <ActivityCard activity={{ ...fussball, icon: <ActivityIcon Paths={SoccerIcon} /> }} />
          <ActivityCard activity={{ ...badminton, icon: <ActivityIcon Paths={BadmintonIcon} /> }} />
          <ActivityCard activity={{ ...steelDarts, icon: <ActivityIcon Paths={DartsIcon} /> }} />
          <ActivityCard activity={{ ...hobbyHorsing, icon: <ActivityIcon Paths={HobbyHorsingIcon} /> }} />
          <ActivityCard activity={{ ...yoga, icon: <ActivityIcon Paths={YogaIcon} /> }} />
          <ActivityCard activity={{ ...teenDance, icon: <ActivityIcon Paths={DanceIcon} /> }} />
          <ActivityCard activity={{ ...powerFitness, icon: <ActivityIcon Paths={PowerfitnessIcon} /> }} />
          <ActivityCard activity={{ ...rehasport, icon: <ActivityIcon Paths={DartsIcon} /> }} />
          <ActivityCard activity={{ ...fitUndGesund, icon: <ActivityIcon Paths={DartsIcon} /> }} />
          <ActivityCard activity={{ ...gymnastik65plus, icon: <ActivityIcon Paths={DartsIcon} /> }} />
        </Carousel>
      </div>
      <div className="pt-4">CTA: Mitglied werden</div>
    </div>
  );
}
