import { Image } from "#/content/image";

export type Announcement = {
  title: string;
  image: Image;
  mdContent: string;
};

export type AnnouncementWithFrontmatter = Announcement & {
  activeDate: string;
  expiryDate: string;
  tags: string[];
};
