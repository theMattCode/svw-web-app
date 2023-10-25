import Markdown from "#/components/markdown/Markdown";
import Image from "next/image";
import { formatDate } from "#/lib/format";
import { getArticle } from "#/content/article";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  slug: string;
};
export default function Article({ slug }: Props): JSX.Element {
  const article = getArticle(slug);
  if (!article) {
    return <div>Article nicht gefunden</div>;
  }
  const { width, height } = article?.image ? calcImageDimensionsForWidth(article.image, 768) : { width: 0, height: 0 };
  return (
    <div className="container bg-white p-2 max-w-3xl shadow-xl flex flex-col gap-2">
      {article?.image && (
        <div className="flex flex-col place-items-end pb-4">
          <Image src={article.image} alt={article.image.alt} width={width} height={height} />
        </div>
      )}
      <div className="transition-all flex flex-col gap-2 md:p-2">
        <h1>{article?.title}</h1>
        <div className="text-sm">{formatDate(article.date)}</div>
        <Markdown key={article.slug} content={article.content} />
      </div>
    </div>
  );
}
