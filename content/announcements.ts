export type Announcement = {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  mdContent: string;
};

export const announcementFiles = [
  "2023-08-14_Wiedereröffnung_Sportgaststätte_Weiherwiesen.md",
];
