import { ListedArticle } from "#/components/articles/articles.gql";
import Link from "next/link";
import { SplitHeading } from "#/components/heading/SplitHeading";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { asTagsString } from "#/lib/tags";
import RichText from "#/components/richtext/RichText";
import { FaChevronRight } from "react-icons/fa";

type PreviewArticleProps = {
  article: ListedArticle;
};

export function PreviewArticle({ article }: PreviewArticleProps): JSX.Element {
  const picture = article.image?.data?.attributes;
  const tags = asTagsString(article.tags);
  return (
    <Link
      href={`news/${article.slug}`}
      className="flex flex-col md:flex-row gap-4"
    >
      {picture?.url && (
        <Image
          className="w-full md:w-72 h-40 object-cover"
          src={getFullAssetUrl(picture.url)}
          alt=""
          width={picture.width ?? 0}
          height={picture.height ?? 0}
        />
      )}
      <div className="w-full max-h-40 flex flex-col justify-start">
        <div className="flex flex-row text-sm gap-4">
          <div>
            {new Date(article.date).toLocaleDateString("de-DE", {
              dateStyle: "full",
            })}
          </div>
          <div>{tags}</div>
        </div>
        <div className="text-2xl font-bold text-svw-blue-default">
          {article.title}
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="truncate">{article.teaser}</div>
          <Link href="/aktuelles" className="flex flex-row gap-1 items-center">
            <FaChevronRight className="text-svw-blue-default" />
            <span>Weiter lesen</span>
          </Link>
        </div>
      </div>
    </Link>
  );
}
