import { SoccerMatch, SoccerMatchResult, Team } from "#/content/match";
import Image from "next/image";

const LOGO_SIZE = 75;

type Props = {
  match: SoccerMatch;
};

export function SoccerMatchReport({ match }: Props) {
  const homeTeam = match.opponents.home;
  const awayTeam = match.opponents.away;
  return (
    <div className="">
      <div className="overflow-hidden relative bg-neutral-200 min-w-[322px] bg-soccer-match-bg">
        <div className="relative flex flex-col items-center gap-1 p-1">
          <div className="w-full flex justify-center text-sm font-medium bg-neutral-100 bg-opacity-30 p-1">
            {match.competition?.name}
            <span className="px-1.5">⋅</span>
            {match.competition?.round}
          </div>
          <div className="w-full grid grid-cols-match gap-1">
            <Opponent team={homeTeam} align="left" />
            <Result {...match.result} />
            <Opponent team={awayTeam} align="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Opponent({ team, align }: { team: Team; align: "left" | "right" }) {
  return (
    <div
      className={`flex flex-col ${
        align === "left" ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-1 bg-neutral-100 bg-opacity-30 p-1`}
    >
      {team.logo && <Image src={team.logo} alt={team.name} width={LOGO_SIZE} height={LOGO_SIZE} />}
      <div className="flex font-medium text-center flex-wrap" lang="de">
        {team.name}
      </div>
    </div>
  );
}

export function Result({ home, away }: { home: SoccerMatchResult; away: SoccerMatchResult }) {
  return (
    <div className="transition-all flex justify-center items-center sm:items-start">
      <div className="h-full w-fit flex flex-col">
        <div className="md:h-full transition-all flex flex-nowrap bg-svw-blue-default text-white text-xl sm:text-3xl font-extrabold justify-center items-center px-2 sm:px-6 py-0.5 sm:py-1.5 whitespace-nowrap">
          {home.final} : {away.final}
        </div>
        <div className="flex flex-nowrap bg-svw-blue-darker text-white text-sm sm:text-md font-medium justify-center items-center py-0.5">
          {home.halftime} : {away.halftime}
        </div>
      </div>
    </div>
  );
}
