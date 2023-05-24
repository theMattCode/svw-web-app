import { AnnouncementEntity } from "#/lib/graphql/generated";
import { Carousel } from "#/components/carousel/Carousel";
import { Announcement } from "#/components/announcements/Announcement";

type Props = {
  title: string;
  announcements: AnnouncementEntity[];
};

export function AnnouncementsRibbon({ title, announcements }: Props) {
  return (
    <div className="bg-yellow-200 text-black w-full md:px-4 pb-8">
      <RibbonTitle title={title} />
      <Carousel>
        {announcements?.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))}
      </Carousel>
    </div>
  );
}

export function RibbonTitle({ title }: { title: string }) {
  return (
    <div className="container flex justify-center md:justify-start">
      <div className="text-white bg-svw-blue-dark w-fit ribbon-heading px-4 pt-4 pb-2 mb-12">
        <div className="text-3xl font-bold uppercase">{title}</div>
      </div>
    </div>
  );
}
