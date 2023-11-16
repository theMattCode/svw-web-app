import { Link } from "#/content/link";

export type Competition = {
  name: string;
  season: string;
  round: string;
  link?: Link;
};

export type Team = {
  name: string;
  logo?: string;
};

export type MatchEventBase = {
  time: number;
};

export type GoalEvent = MatchEventBase & {
  type: "goal";
  subtype: "regular" | "penalty" | "own";
  team: "home" | "away";
  scorer: string;
  assist?: string;
};

export type CardEvent = MatchEventBase & {
  type: "card";
  subtype: "yellow" | "red" | "yellow-red";
  team: "home" | "away";
  player?: string;
};

export type SubstitutionEvent = MatchEventBase & {
  type: "substitution";
  team: "home" | "away";
  playerIn?: string;
  playerOut?: string;
};

export type SoccerMatchEvent = GoalEvent | CardEvent | SubstitutionEvent;

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
