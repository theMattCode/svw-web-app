import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Teaser from "./Teaser";
import { Article } from "#/content/article";
import { calcImageDimensionsForHeight, calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  article: Article;
};

export function ArticleListItem({ article }: Props): JSX.Element {
  const { image } = article;
  const { width, height } = calcImageDimensionsForHeight(image, 320);
  return (
    <Link
      href={`/article/${article.slug}`}
      className="flex flex-col w-full md:flex-row gap-2 bg-neutral-100 p-2 shadow-2xl"
    >
      {article.image && (
        <Image
          className="w-full md:w-72 md:min-w-[18rem] h-80 md:h-44 object-cover"
          src={article.image.src}
          alt={article.image.alt}
          width={width}
          height={height}
        />
      )}
      <div className="w-full flex flex-col justify-start text-sm ">
        <div className="text-xl font-medium">{article.title}</div>
        <div className="flex flex-row font-light items-center">
          {new Date(article.date).toLocaleDateString("de-DE", {
            dateStyle: "full",
          })}
        </div>
        <Teaser content={article.teaser} />
        <div className="flex flex-row gap-1 md:gap-4">
          <div className="flex gap-2 font-medium text-white uppercase">
            {article.tags?.map((tag: string) => (
              <div key={tag} className="flex bg-svw-blue-default py-1 px-2 whitespace-nowrap items-center">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
