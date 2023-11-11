import { Match, SoccerMatchResult, Team } from "#/content/match";
import Image from "next/image";

const LOGO_SIZE = 75;

type Props = {
  match: Match;
};

export function SoccerMatch({ match }: Props) {
  const homeTeam = match.opponents.home;
  const awayTeam = match.opponents.away;
  return (
    <div className="">
      <div className="overflow-hidden relative bg-neutral-200 min-w-[322px]">
        <div className="absolute top-0 left-0 flex w-full h-auto opacity-80">
          <Image src="/media/res/matchbg.jpg" alt="" width={1030} height={687} className="object-cover" />
        </div>
        <div className="relative flex flex-col items-center gap-2 p-2">
          <div className="flex text-sm font-medium">{match.competition?.name} </div>
          <div className="w-full grid grid-cols-match gap-2">
            <Opponent team={homeTeam} />
            <Result {...match.result} />
            <Opponent team={awayTeam} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Opponent({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-neutral-100 bg-opacity-30 p-2">
      {team.logo && <Image src={team.logo} alt={team.name} width={LOGO_SIZE} height={LOGO_SIZE} />}
      <span className="flex sm:text-xl font-medium sm:font-bold text-center" lang="de">
        {team.name}
      </span>
    </div>
  );
}

export function Result({ home, away }: { home: SoccerMatchResult; away: SoccerMatchResult }) {
  return (
    <div className="transition-all flex justify-center items-center sm:items-start">
      <div className="flex flex-col h-fit w-fit ">
        <div className="transition-all flex flex-nowrap bg-svw-blue-default text-white text-xl sm:text-3xl font-extrabold justify-center items-center px-2 sm:px-6 py-0.5 sm:py-1.5 whitespace-nowrap">
          {home.final} : {away.final}
        </div>
        <div className="flex flex-nowrap bg-svw-blue-darker text-white text-sm sm:text-md font-medium justify-center items-center py-0.5">
          {home.halftime} : {away.halftime}
        </div>
      </div>
    </div>
  );
}
