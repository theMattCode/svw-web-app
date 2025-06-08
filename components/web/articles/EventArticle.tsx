import Markdown from "#/components/markdown/Markdown";
import { EventArticle as EventArticleDTO } from "#/content/events";

import type { JSX } from "react";

type Props = {
  eventArticle: EventArticleDTO;
};

export default function EventArticle({ eventArticle }: Props): JSX.Element {
  return (
    <article className="container bg-white p-2 max-w-3xl shadow-xl flex flex-col gap-2">
      <div className="transition-all flex flex-col gap-2 md:p-2">
        <h1>{eventArticle?.title}</h1>
        <div className="w-full flex justify-end gap-2 text-white">
          {eventArticle.tags?.map((tag: string) => (
            <div key={tag} className="flex bg-svw-blue-default py-1 px-2 whitespace-nowrap items-center">
              {tag}
            </div>
          ))}
        </div>
        <Markdown key={eventArticle.slug} content={eventArticle.content} />
      </div>
    </article>
  );
}
