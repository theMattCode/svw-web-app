import { ListedArticle } from "#/components/articles/articles.gql";
import Link from "next/link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { asTagsString } from "#/lib/tags";
import { FaChevronRight } from "react-icons/fa";
import Teaser from "./Teaser";

type PreviewArticleProps = {
  article: ListedArticle;
};

export function ArticleListItem({ article }: PreviewArticleProps): JSX.Element {
  const picture = article.image?.data?.attributes;
  const tags = asTagsString(article.tags);
  return (
    <Link
      href={`news/${article.slug}`}
      className="flex flex-col md:flex-row gap-4"
    >
      {picture?.url && (
        <Image
          className="w-full md:w-72 md:min-w-[18rem] h-80 md:h-44 object-cover"
          src={getFullAssetUrl(picture.url)}
          alt=""
          width={picture.width ?? 0}
          height={picture.height ?? 0}
        />
      )}
      <div className="w-full flex flex-col justify-start">
        <div className="flex flex-row text-sm gap-4 py-1">
          <div>
            {new Date(article.date).toLocaleDateString("de-DE", {
              dateStyle: "full",
            })}
          </div>
          <div>{tags}</div>
        </div>
        <div className="text-2xl font-normal text-svw-blue-default py-1">
          {article.title}
        </div>
        <div className="flex flex-col justify-between h-full">
          <Teaser content={article.teaser} />
          <div className="flex flex-row gap-1 items-center py-1">
            <FaChevronRight className="text-svw-blue-default" />
            <span>Weiter lesen</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
