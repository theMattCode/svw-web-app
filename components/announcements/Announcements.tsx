import { AnnouncementsCarousel } from "#/components/announcements/AnnouncementsCarousel";
import { announcements } from "#/content/announcements";

export function Announcements() {
  return (
    <div className="bg-white">
      <div className="container p-4 flex flex-col gap-4">
        <div className="transition-all font-bold text-3xl md:-translate-x-0.5 self-center">
          Ankündigungen
        </div>
        <AnnouncementsCarousel announcements={announcements} />
      </div>
    </div>
  );
}
