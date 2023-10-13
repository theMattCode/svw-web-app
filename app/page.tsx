import { Hero } from "#/components/hero/hero";
import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col">
      <Hero />
      <AnnouncementsBlock />
    </div>
  );
}
