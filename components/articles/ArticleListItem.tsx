import Link from "next/link";
import Image from "next/image";
import Teaser from "./Teaser";
import { ArticleMatter } from "#/content/article";
import { calcImageDimensionsForHeight } from "#/lib/image";
import { SoccerMatchPreview } from "#/components/match/SoccerMatchPreview";
import { SoccerMatch } from "#/components/match/SoccerMatch";

type Props = {
  articleMatter: ArticleMatter;
};

export function ArticleListItem({ articleMatter }: Props): JSX.Element {
  const { image } = articleMatter;
  const { width, height } = calcImageDimensionsForHeight(image, 320);
  const articleDate = new Date(articleMatter.date);
  return (
    <Link
      href={`/article/${articleMatter.slug}`}
      className="flex flex-col w-full md:flex-row gap-1 bg-neutral-100 p-1 shadow-2xl"
    >
      {articleMatter.image && (
        <Image
          className="w-full md:max-w-[18rem] h-80 md:max-h-44 object-cover"
          src={articleMatter.image.src}
          alt={articleMatter.image.alt}
          width={width}
          height={height}
        />
      )}
      <div className="w-full flex flex-col justify-between gap-1 text-sm">
        <div className="w-full text-xl font-medium">{articleMatter.title}</div>
        {articleMatter.teaser && <Teaser content={articleMatter.teaser} />}
        {articleMatter.match && articleMatter.match.type === "soccer" && (
          <SoccerMatchPreview match={articleMatter.match} />
        )}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1 md:gap-4">
            <div className="flex gap-1 font-medium text-white uppercase flex-wrap">
              {articleMatter.tags?.map((tag: string) => (
                <div key={tag} className="flex bg-svw-blue-default py-1 px-2 whitespace-nowrap items-center">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row font-light items-end">
            <div className="hidden sm:block">{articleDate.toLocaleDateString("de-DE", { dateStyle: "full" })}</div>
            <div className="block sm:hidden">{articleDate.toLocaleDateString("de-DE", { dateStyle: "medium" })}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
