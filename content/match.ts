import { Link } from "#/content/link";

export type Competition = {
  name: string;
  link?: Link;
};

export type Team = {
  name: string;
  logo?: string;
};

export type GoalEvent = {
  type: "goal";
  subtype: "regular" | "penalty" | "own";
  team: "home" | "away";
  time: number;
  scorer: string;
  assist?: string;
};

export type SoccerMatchEvent = GoalEvent;

export type SoccerMatchResult = {
  final: number;
  halftime?: number;
};

export type SoccerMatch = {
  type: "soccer";
  competition?: Competition;
  opponents: {
    home: Team;
    away: Team;
  };
  events?: SoccerMatchEvent[];
  result: {
    home: SoccerMatchResult;
    away: SoccerMatchResult;
  };
};

export type Match = SoccerMatch;
