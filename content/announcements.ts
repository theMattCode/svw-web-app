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

export type AnnouncementWithFrontmatter = Announcement & {
  activeDate: string;
  expiryDate: string;
  tags: string[];
};
