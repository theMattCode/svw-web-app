import Markdown from "#/components/markdown/Markdown";
import { formatDate } from "#/lib/format";
import { Article as ArticleDTO } from "#/content/article";
import { SoccerMatchReport } from "#/components/match/SoccerMatchReport";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  article: ArticleDTO;
};

export default function Article({ article }: Props) {
  const { width, height } = article?.image ? calcImageDimensionsForWidth(article.image, 1528) : { width: 0, height: 0 };
  return (
    <article>
      {article?.image && (
        <Image
          className="aspect-16/9 object-cover"
          src={article.image}
          alt={article.image.alt ?? article.title}
          width={width}
          height={height}
        />
      )}
      <div className="container max-w-5xl flex flex-col gap-4 p-4">
        <div className="text-sm font-bold uppercase w-full flex justify-end">
          {formatDate(article.date)} / {article.tags?.join(", ")}
        </div>
        <ArticleTitle title={article?.title} />
        {article.teaser && <div className="font-bold text-lg">{article.teaser}</div>}
        <div className="transition-all flex flex-col gap-4">
          {article.match && article.match.type === "soccer" && <SoccerMatchReport match={article.match} />}
          <Markdown key={article.slug} content={article.content} />
        </div>
      </div>
    </article>
  );
}

export function ArticleTitle({ title }: { title: string }) {
  return <div className="text-5xl font-bold italic pb-4">{title}</div>;
}
