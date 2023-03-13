import { ListedArticle } from "#/components/articles/articles.gql";
import Link from "next/link";
import { SplitHeading } from "#/components/heading/SplitHeading";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { asTagsString } from "#/lib/tags";

type PreviewArticleProps = {
  article: ListedArticle;
};

export function PreviewArticle({ article }: PreviewArticleProps): JSX.Element {
  const picture = article.image?.data?.attributes;
  const tags = asTagsString(article.tags);
  return (
    <Link
      href={`news/${article.slug}`}
      className="mb-4 flex flex-col shadow-lg"
    >
      <SplitHeading primaryText={tags} secondaryText={article.date} />
      <div className="flex flex-col md:flex-row bg-white">
        <Image
          className="w-full h-96 md:h-auto object-cover md:w-56 p-1"
          src={getFullAssetUrl(picture?.url ?? "")}
          alt=""
          width={picture?.width ?? 0}
          height={picture?.height ?? 0}
        />
        <div className="w-full p-2 flex flex-col justify-start">
          <h3>{article.title}</h3>
          <div>{article.teaser}</div>
        </div>
      </div>
    </Link>
  );
}
