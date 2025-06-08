import { SoccerMatch, SoccerMatchResult, Team } from "#/content/match";
import Image from "next/image";

const LOGO_SIZE = 48;

type Props = {
  match: SoccerMatch;
};

export function SoccerMatchPreview({ match }: Props) {
  const homeTeam = match.opponents.home;
  const awayTeam = match.opponents.away;
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full flex flex-col gap-4">
        <div className="transition-all flex text-sm font-medium self-center">
          {match.competition?.name} <span className="px-1.5">⋅</span>
          {match.competition?.round}
        </div>
        <div className="flex flex-row gap-4 place-content-center">
          <HomeTeam team={homeTeam} />
          <Result {...match.result} />
          <AwayTeam team={awayTeam} />
        </div>
      </div>
    </div>
  );
}

function HomeTeam({ team }: { team: Team }) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-center wrap-normal @xl:flex-row-reverse">
      <Opponent team={team} />
    </div>
  );
}

function AwayTeam({ team }: { team: Team }) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-center wrap-normal @xl:flex-row">
      <Opponent team={team} />
    </div>
  );
}

function Opponent({ team }: { team: Team }) {
  return (
    <>
      {team.logo && <Image src={team.logo} alt={team.name} width={LOGO_SIZE} height={LOGO_SIZE} />}
      <span className="flex text-center" lang="de">
        {team.name}
      </span>
    </>
  );
}

function Result({ home, away }: { home: SoccerMatchResult; away: SoccerMatchResult }) {
  return (
    <div className="flex-none flex justify-center items-center ">
      <div className="lg:h-full flex flex-nowrap whitespace-nowrap text-svw-blue-default text-2xl font-bold justify-center items-center px-2 py-0.5">
        {home.final}:{away.final}
      </div>
    </div>
  );
}
