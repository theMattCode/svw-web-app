import { PageBase } from "#/components/page/PageBase";
import { PageProps } from "#/lib/page";
import { getAllEventSlugs, getEventBySlug } from "#/content/events";
import EventArticle from "#/components/articles/EventArticle";

const EVENT_FOLDER = "public/content/event";

export default function Page({ params }: PageProps) {
  const eventArticle = getEventBySlug(params.slug, EVENT_FOLDER);
  return (
    <PageBase>
      <EventArticle eventArticle={eventArticle} />
    </PageBase>
  );
}

export function generateStaticParams() {
  const allSlugs = getAllEventSlugs(EVENT_FOLDER);
  return allSlugs.map((filename) => ({ slug: filename.replace(".md", "") }));
}
