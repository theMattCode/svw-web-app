import { ListedArticle } from "#/components/articles/articles.gql";
import Link from "next/link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { asTagsString } from "#/lib/tags";
import { FaChevronRight } from "react-icons/fa";
import Teaser from "./Teaser";

type Props = {
  article: ListedArticle;
};

export function ArticleListItem({ article }: Props): JSX.Element {
  const picture = article.image?.data?.attributes;
  const tags = asTagsString(article.tags);
  return (
    <Link
      href={`news/${article.slug}`}
      className="flex flex-col md:flex-row gap-4 bg-neutral-100 p-2 shadow-2xl hover:scale-[1.02]"
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
        <div className="flex flex-row text-sm gap-1 md:gap-4 py-1">
          <div className="p-1">
            {new Date(article.date).toLocaleDateString("de-DE", {
              dateStyle: "full",
            })}
          </div>
          <div className="flex gap-1">
            {article.tags?.data.map((tag) => (
              <span key={tag.id} className="text-black bg-gray-200 py-1 px-2">
                {tag.attributes?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
