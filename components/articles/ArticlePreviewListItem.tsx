import { SoccerMatchPreview } from "#/components/match/SoccerMatchPreview";
import { ArticleMatter } from "#/content/article";
import { calcImageDimensionsForHeight } from "#/lib/image";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import Teaser from "./Teaser";

type Props = {
  articleMatter: ArticleMatter;
};

export function ArticlePreviewListItem({ articleMatter }: Props): JSX.Element {
  const { image } = articleMatter;
  const { width, height } = calcImageDimensionsForHeight(image, 320);
  const articleDate = new Date(articleMatter.date);
  return (
    <Link
      href={`/article/${articleMatter.slug}`}
      className="flex flex-col w-full gap-1 bg-neutral-100 p-1 shadow-2xl justify-between"
    >
      <div>
        {articleMatter.image && (
          <Image
            className="w-full h-80 object-cover"
            src={articleMatter.image.src}
            alt={articleMatter.image.alt ?? articleMatter.title}
            width={width}
            height={height}
          />
        )}
        <div className="w-full flex flex-col justify-between gap-1 text-sm">
          <div className="w-full text-xl font-medium px-1">{articleMatter.title}</div>
          {articleMatter.teaser && <Teaser content={articleMatter.teaser} />}
          {articleMatter.match && articleMatter.match.type === "soccer" && (
            <SoccerMatchPreview match={articleMatter.match} />
          )}
        </div>
      </div>
      <div className="justify-self-end">
        <div className="flex flex-row justify-between text-sm">
          <div className="flex flex-row gap-1">
            <div className="flex gap-1 font-medium text-white uppercase flex-wrap">
              {articleMatter.tags?.map((tag: string) => <Tag key={tag} tag={tag} />)}
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

type TagProps = { tag: string };

export function Tag({ tag }: TagProps): JSX.Element {
  return <div className="flex items-center bg-svw-blue-default text-white py-1 px-2 whitespace-nowrap">{tag}</div>;
}
