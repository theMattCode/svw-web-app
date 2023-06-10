import { TagEntity } from "#/lib/graphql/generated";
import { fetchAnnouncements } from "#/components/announcements/announcements.gql";
import { AnnouncementsCarousel } from "#/components/announcements/AnnouncementsCarousel";

type Props = {
  title: string;
  tags: TagEntity[] | undefined | null;
};

export async function Announcements({
  title,
  tags,
}: Props): Promise<JSX.Element | null> {
  const announcementsData = await fetchAnnouncements();
  return (
    <AnnouncementsCarousel
      announcements={announcementsData.announcements?.data ?? []}
    />
  );
}
