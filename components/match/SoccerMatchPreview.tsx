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
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-1 md:gap-0.5">
        <div className="transition-all flex text-sm font-medium self-center">
          {match.competition?.name} <span className="px-1.5">⋅</span>
          {match.competition?.round}
        </div>
        <div className="grid grid-cols-7 gap-2">
          <Opponent team={homeTeam} align="left" />
          <Result {...match.result} />
          <Opponent team={awayTeam} align="right" />
        </div>
      </div>
    </div>
  );
}

function Opponent({ team, align }: { team: Team; align: "left" | "right" }) {
  return (
    <div
      className={`col-span-3 flex flex-col items-center gap-1 bg-neutral-100/30 ${
        align === "left" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {team.logo && <Image src={team.logo} alt={team.name} width={LOGO_SIZE} height={LOGO_SIZE} />}
      <span className="flex text-center" lang="de">
        {team.name}
      </span>
    </div>
  );
}

function Result({ home, away }: { home: SoccerMatchResult; away: SoccerMatchResult }) {
  return (
    <div className="transition-all flex justify-center items-center">
      <div className="w-fit flex flex-col">
        <div className="lg:h-full transition-all flex flex-nowrap whitespace-nowrap bg-svw-blue-default text-white text-lg font-bold justify-center items-center px-2 py-0.5">
          {home.final} : {away.final}
        </div>
      </div>
    </div>
  );
}
