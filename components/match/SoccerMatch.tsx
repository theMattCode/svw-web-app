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
    <div className="bg-neutral-100 p-2">
      <div className="grid grid-cols-3 md:grid-cols-match gap-2">
        <Opponent team={homeTeam} />
        <Result {...match.result} />
        <Opponent team={awayTeam} />
      </div>
    </div>
  );
}

export function Opponent({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {team.logo && <Image src={team.logo} alt={team.name} width={LOGO_SIZE} height={LOGO_SIZE} />}
      <div className="flex text-xl font-bold text-center">{team.name}</div>
    </div>
  );
}

export function Result({ home, away }: { home: SoccerMatchResult; away: SoccerMatchResult }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-fit w-fit ">
        <div className="flex flex-nowrap bg-svw-blue-default text-white text-4xl font-extrabold justify-center items-center px-6 py-1.5 whitespace-nowrap">
          {home.final} : {away.final}
        </div>
        <div className="flex flex-nowrap bg-svw-blue-darker text-white font-medium justify-center items-center py-0.5">
          {home.halftime} : {away.halftime}
        </div>
      </div>
    </div>
  );
}
