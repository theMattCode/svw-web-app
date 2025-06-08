import { Metadata } from "next";
import { getTitle, PageProps, Slug } from "#/lib/page";
import { PageContent } from "#/components/web/page/PageContent";
import EventArticle from "#/components/web/articles/EventArticle";
import { getAllEventSlugs, getEventBySlug } from "#/content/events";

const EVENT_FOLDER = "public/content/event";

export async function generateMetadata(props: PageProps<Slug>): Promise<Metadata> {
  const params = await props.params;
  const article = getEventBySlug(params.slug, EVENT_FOLDER);
  return {
    title: getTitle(article.title),
  };
}

export default async function Page(props: PageProps<Slug>) {
  const params = await props.params;
  const eventArticle = getEventBySlug(params.slug, EVENT_FOLDER);
  return (
    <PageContent>
      <EventArticle eventArticle={eventArticle} />
    </PageContent>
  );
}

export function generateStaticParams() {
  const allSlugs = getAllEventSlugs(EVENT_FOLDER);
  return allSlugs.map((filename) => ({ slug: filename.replace(".md", "") }));
}
