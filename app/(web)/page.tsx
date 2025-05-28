import { Hero } from "#/components/hero/hero";
import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { JSX } from "react";
import { EventList } from "#/components/events/EventList";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col">
      <Hero />
      <AnnouncementsBlock />
      <div className="p-4 bg-neutral-200 flex flex-col gap-4">
        <div className="container flex flex-col gap-2">
          <BlockTitle title="Veranstaltungen und Termine" />
          <EventList />
        </div>
        <ArticlePreviewList pageSize={10} />
      </div>
    </div>
  );
}
