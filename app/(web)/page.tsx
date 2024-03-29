import { Hero } from "#/components/hero/hero";
import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { EventCalendar } from "#/components/calendar/Calendar";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { JSX } from "react";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col">
      <Hero />
      <AnnouncementsBlock />
      <div className="p-4 bg-neutral-200 flex flex-col gap-4">
        <div className="container flex flex-col gap-2">
          <BlockTitle title="Veranstaltungen und Termine" />
          <div className="bg-white p-2 shadow-xl">
            <EventCalendar agendaOnly={true} />
          </div>
        </div>
        <ArticlePreviewList pageSize={10} />
      </div>
    </div>
  );
}
