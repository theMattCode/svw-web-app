import Markdown from "#/components/markdown/Markdown";
import { formatDate } from "#/lib/format";
import { Article as ArticleDTO } from "#/content/article";
import { SoccerMatchReport } from "#/components/match/SoccerMatchReport";

type Props = {
  article: ArticleDTO;
};

export default function Article({ article }: Props) {
  return (
    <article className="container max-w-5xl flex flex-col gap-4 bg-white p-4">
      <ArticleTitle title={article?.title} />
      <div className="text-sm w-full flex justify-end">{formatDate(article.date)}</div>
      <div className="transition-all flex flex-col gap-4">
        {article.match && article.match.type === "soccer" && <SoccerMatchReport match={article.match} />}
        <Markdown key={article.slug} content={article.content} />
      </div>
    </article>
  );
}

export function ArticleTitle({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
