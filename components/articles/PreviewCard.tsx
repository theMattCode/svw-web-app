import { Article } from "#/lib/graphql/generated";
import Link from "next/link";
import Image from "next/image";
import { SplitHeading } from "#/components/heading/SplitHeading";

type Props = { article: Article };

export function PreviewCard({ article }: Props): JSX.Element {
  const image = article.image?.data?.attributes;
  return (
    <Link
      href={`/news/${article.slug}`}
      className="shadow-lg bg-white flex flex-col w-full h-full"
    >
      <SplitHeading primaryText="Sparte/Tag" secondaryText={article.date} />
      {image && (
        <Image
          src={image.url}
          alt=""
          width={image.width ?? 0}
          height={image.height ?? 0}
          className="object-fill px-1 pt-1"
        />
      )}
      <div className="p-2 text-lg">{article.title}</div>
    </Link>
  );
}
