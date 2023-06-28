import { AnnouncementEntity } from "#/lib/graphql/generated";
import { Carousel } from "#/components/carousel/Carousel";
import { Announcement } from "#/components/announcements/Announcement";

type Props = {
  announcements: AnnouncementEntity[];
};

export function AnnouncementsCarousel({ announcements }: Props) {
  return (
    <Carousel>
      {announcements?.map((announcement) => (
        <Announcement key={announcement.id} announcement={announcement} />
      ))}
    </Carousel>
  );
}
