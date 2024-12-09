import { Hero } from "#/components/hero/hero";
import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { JSX } from "react";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col">
      <Hero />
      <AnnouncementsBlock />
      <div className="p-4 bg-neutral-200 flex flex-col gap-4">
        <ArticlePreviewList pageSize={10} />
      </div>
    </div>
  );
}
