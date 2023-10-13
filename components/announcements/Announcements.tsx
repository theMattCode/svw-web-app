import { Carousel } from "#/components/carousel/Carousel";
import { AnnouncementItem } from "#/components/announcements/AnnouncementItem";
import { Announcement } from "#/content/announcements";

type Props = {
  announcements: Announcement[];
};

export function Announcements({ announcements }: Props) {
  return (
    <Carousel>
      {announcements.map((announcement) => (
        <AnnouncementItem
          key={announcement.title}
          announcement={announcement}
        />
      ))}
    </Carousel>
  );
}
