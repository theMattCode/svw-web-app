import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Teaser from "./Teaser";
import { Article } from "#/content/article";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  article: Article;
};

export function ArticleListItem({ article }: Props): JSX.Element {
  const { image } = article;
  const imageDimensions = image ? calcImageDimensionsForWidth(image, 640) : null;
  return (
    <Link
      href={`/article/${article.slug}`}
      className="flex flex-col w-full md:flex-row gap-4 bg-neutral-100 p-2 shadow-2xl"
    >
      {article.image && (
        <Image
          className="w-full md:w-72 md:min-w-[18rem] h-80 md:h-44 object-cover"
          src={article.image.src}
          alt={article.image.alt}
          width={280}
          height={280}
        />
      )}
      <div className="w-full flex flex-col justify-start">
        <div className="text-2xl font-normal text-svw-blue-default py-1">{article.title}</div>
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
            {article.tags?.map((tag) => (
              <span key={tag} className="text-black bg-gray-200 py-1 px-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
