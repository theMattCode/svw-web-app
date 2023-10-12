import { AnnouncementsCarousel } from "#/components/announcements/AnnouncementsCarousel";
import { announcements } from "#/content/announcements";

export function Announcements() {
  return (
    <div className="bg-svw-blue-lightest">
      <div className="container p-4">
        <AnnouncementsCarousel announcements={announcements} />
      </div>
    </div>
  );
}
