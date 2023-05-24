import { TagEntity } from "#/lib/graphql/generated";
import { fetchAnnouncements } from "#/components/announcements/announcements.gql";
import { AnnouncementsRibbon } from "#/components/announcements/AnnouncementsRibbon";

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
    <AnnouncementsRibbon
      title={title}
      announcements={announcementsData.announcements?.data ?? []}
    />
  );
}
