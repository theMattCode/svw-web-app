import { ImageDimensions } from "#/lib/image";

export type Announcement = {
  title: string;
  slug: string;
  image: {
    src: string;
    alt: string;
  } & ImageDimensions;
  activeDate: Date;
  expiryDate: Date;
  tags: string[];
  content: string;
};

export function getActiveAnnouncements(): Announcement[] {
  const NOW = new Date();
  return announcements.filter((announcement) => announcement.activeDate <= NOW);
}

export const announcements: Announcement[] = [
  {
    title: "Wiedereröffnung Sportgaststätte Weiherwiesen",
    slug: "2023-08-14-wiedereroeffnung-sportgaststaette-weiherwiesen",
    activeDate: new Date("2023-08-14 00:00"),
    expiryDate: new Date("2023-10-31 00:00"),
    tags: ["Sportgaststätte", "Verein"],
    image: {
      src: "/media/2023/2023-08-14_gruppenbild_paechter.jpg",
      width: 4032,
      height: 3024,
      alt: "Gruppenbild mit Pächter der Sportgaststätte Weiherwiesen",
    },
    content:
      "content/announcements/2023-08-14_Wiedereröffnung_Sportgaststätte_Weiherwiesen.mdx",
  },
  {
    title: "Wiedereröffnung Sportgaststätte Weiherwiesen",
    slug: "2023-08-14-wiedereroeffnung-sportgaststaette-weiherwiesen",
    activeDate: new Date("2023-08-14 00:00"),
    expiryDate: new Date("2023-10-31 00:00"),
    tags: ["Sportgaststätte", "Verein"],
    image: {
      src: "/media/2023/2023-08-14_gruppenbild_paechter.jpg",
      width: 4032,
      height: 3024,
      alt: "Gruppenbild mit Pächter der Sportgaststätte Weiherwiesen",
    },
    content:
      "content/announcements/2023-08-14_Wiedereröffnung_Sportgaststätte_Weiherwiesen.mdx",
  },
];
