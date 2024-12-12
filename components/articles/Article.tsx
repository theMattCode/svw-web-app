import Markdown from "#/components/markdown/Markdown";
import Image from "next/image";
import { formatDate } from "#/lib/format";
import { Article as ArticleDTO } from "#/content/article";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { SoccerMatchReport } from "#/components/match/SoccerMatchReport";

import type { JSX } from "react";

type Props = {
  article: ArticleDTO;
};

export default function Article({ article }: Props): JSX.Element {
  const { width, height } = article?.image ? calcImageDimensionsForWidth(article.image, 768) : { width: 0, height: 0 };
  return (
    <article className="container bg-white p-1 max-w-3xl shadow-xl flex flex-col gap-1">
      {article?.image && (
        <div className="flex flex-col place-items-end pb-4">
          <Image src={article.image} alt={article.image.alt ?? article.title} width={width} height={height} />
        </div>
      )}
      <div className="transition-all flex flex-col gap-1 md:p-1">
        <h1>{article?.title}</h1>
        <div className="text-sm">{formatDate(article.date)}</div>
        {article.match && article.match.type === "soccer" && <SoccerMatchReport match={article.match} />}
        <Markdown key={article.slug} content={article.content} />
      </div>
    </article>
  );
}
