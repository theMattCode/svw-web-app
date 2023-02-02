import { Article } from "#/lib/graphql/generated";
import Link from "next/link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";

type Props = { article: Article };

export function ArticleCard({ article }: Props): JSX.Element {
  const image = article.image?.data?.attributes;
  return (
    <Link
      href={`/news/${article.slug}`}
      className="m-2 shadow-lg border-t-4 border-svw-blue-default bg-white flex flex-col w-full h-full"
    >
      {image && (
        <Image
          src={getFullAssetUrl(image.url ?? "")}
          alt=""
          width={image.width ?? 0}
          height={image.height ?? 0}
          className="object-fill"
        />
      )}
      <h3 className="px-2">
        <span className="py-0.5 bg-white/75 news-title-shadow">{article.title}</span>
      </h3>
    </Link>
  );
}
