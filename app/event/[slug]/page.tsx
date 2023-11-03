import { PageBase } from "#/components/page/PageBase";
import { PageProps } from "#/lib/page";
import { getEvent } from "#/content/events";
import EventArticle from "#/components/articles/EventArticle";
import fs from "fs";

const EVENT_FOLDER = "public/content/event";

export default function Page({ params }: PageProps) {
  const eventArticle = getEvent(params.slug, EVENT_FOLDER);
  return (
    <PageBase>
      <EventArticle eventArticle={eventArticle} />
    </PageBase>
  );
}

export function generateStaticParams() {
  const allFiles = fs.readdirSync(EVENT_FOLDER).reverse();
  return allFiles.map((filename) => ({ slug: filename.replace(".md", "") }));
}
