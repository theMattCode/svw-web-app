import { Metadata } from "next";
import { getTitle, PageProps } from "#/lib/page";
import { PageBase } from "#/components/page/PageBase";
import EventArticle from "#/components/articles/EventArticle";
import { getAllEventSlugs, getEventBySlug } from "#/content/events";

const EVENT_FOLDER = "public/content/event";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const article = getEventBySlug(params.slug, EVENT_FOLDER);
  return {
    title: getTitle(article.title),
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
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
