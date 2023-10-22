import Markdown from "#/components/markdown/Markdown";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { formatDate } from "#/lib/format";

type Props = {
  slug: string;
};
export default function Article({ slug }: Props): JSX.Element {
  return (
    <div className="container bg-white my-16 p-8 max-w-3xl shadow-xl flex flex-col gap-2">
      {image && (
        <div className="flex flex-col place-items-end pb-4">
          <Image src={getFullAssetUrl(image.url)} alt="" width={image.width ?? 0} height={image.height ?? 0} />
        </div>
      )}
      <h1>{article.attributes?.title}</h1>
      <div className="text-sm">{formatDate(article.attributes?.date)}</div>

      <Markdown key={article.attributes?.slug} content={article.attributes?.text} />
    </div>
  );
}
