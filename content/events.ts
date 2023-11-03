import fs from "fs";
import matter from "gray-matter";

type Place = {
  name: string;
  address?: string;
  url?: {
    href: string;
    text: string;
  };
};

export type Event = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  place?: Place;
  url?: string;
};

export type EventArticle = {
  title: string;
  slug: string;
  date: string;
  tags?: string[];
  content: string;
};

const gemeindehalle = { name: "Gemeindehalle" };

const ballsporthalle = { name: "Ballsporthalle" };

export const events: Event[] = [
  {
    title: "9m Turnier",
    start: new Date(2024, 0, 13),
    end: new Date(2024, 0, 13),
    allDay: true,
    place: gemeindehalle,
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 1: E2-Junioren (Jahrgang 2014)",
    start: new Date(2024, 0, 27, 8, 0),
    end: new Date(2024, 0, 27, 12, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 1: E1-Junioren (Jahrgang 2013)",
    start: new Date(2024, 0, 27, 12, 0),
    end: new Date(2024, 0, 27, 17, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 2: F2-Junioren (Jahrgang 2016)",
    start: new Date(2024, 0, 28, 8, 0),
    end: new Date(2024, 0, 28, 12, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 2: F1-Junioren (Jahrgang 2015)",
    start: new Date(2024, 0, 28, 12, 0),
    end: new Date(2024, 0, 28, 17, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 3: D2-Junioren (Jahrgang 2012)",
    start: new Date(2024, 1, 3, 8, 0),
    end: new Date(2024, 1, 3, 12, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 3: D1-Junioren (Jahrgang 2011)",
    start: new Date(2024, 1, 3, 12, 0),
    end: new Date(2024, 1, 3, 18, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 4: Bambini (Jahrgang 2017)",
    start: new Date(2024, 1, 4, 8, 0),
    end: new Date(2024, 1, 4, 12, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "2. SV Walddorf Winter-Cup Tag 4: Bambini (Jahrgang 2018 und jünger)",
    start: new Date(2024, 1, 4, 12, 0),
    end: new Date(2024, 1, 4, 17, 0),
    place: ballsporthalle,
    url: "/event/2023-06-26-einladung-2.-sv-walddorf-winter-cup",
  },
  {
    title: "Mitgliederversammlung",
    start: new Date(2024, 2, 15, 18, 30),
    end: new Date(2024, 2, 15, 21, 0),
    allDay: false,
    place: gemeindehalle,
  },
  {
    title: "3. FTB-Cup (Jugendfußballturniere) Tag 1",
    start: new Date(2024, 5, 29),
    end: new Date(2024, 5, 29),
    allDay: true,
    place: { name: "Sportplätze" },
  },
  {
    title: "3. FTB-Cup (Jugendfußballturniere) Tag 2",
    start: new Date(2024, 5, 30),
    end: new Date(2024, 5, 30),
    allDay: true,
    place: { name: "Sportplätze" },
  },
];

export const EVENT_DIRECTORY = "/content/article";

export function getEvent(slug: string, eventDirectory?: string): EventArticle {
  return readEvent(`${slug}.md`, eventDirectory || EVENT_DIRECTORY);
}

function readEvent(filename: string, eventDirectory: string) {
  const fileContent = fs.readFileSync(`${eventDirectory}/${filename}`, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as EventArticle;
}
