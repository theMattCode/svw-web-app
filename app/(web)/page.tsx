import { Hero } from "#/components/web/hero/Hero";
import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";
import { JSX } from "react";
import { EventSection } from "#/components/web/events/EventSection";
import { ArticleSection } from "#/components/web/articles/ArticleSection";
import { PageContent } from "#/components/web/page/PageContent";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col @container">
      <Hero />
      <AnnouncementsBlock />
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ArticleSection />
          </div>
          <EventSection />
        </div>
      </PageContent>
    </div>
  );
}
