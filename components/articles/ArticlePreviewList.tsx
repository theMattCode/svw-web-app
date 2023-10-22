import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { ArticleListItem } from "#/components/articles/ArticleListItem";
import { BlockTitle } from "#/components/block/BlockTitle";
import { getArticles } from "#/content/article";

const DEFAULT_PAGE_SIZE = 8;

type Props = {
  pageSize: number;
};

export async function ArticlePreviewList({ pageSize = DEFAULT_PAGE_SIZE }: Props) {
  const { articles } = getArticles(1, pageSize);
  return (
    <div className="bg-neutral-200 w-full p-4">
      <div className="container flex flex-col gap-2 items-center">
        <BlockTitle title="Aktuelles" />
        {articles.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
        <Link href="/aktuelles" className="flex flex-row gap-1 items-center">
          <FaChevronRight className="text-svw-blue-default" />
          <div className="text-white">Weitere Artikel</div>
        </Link>
      </div>
    </div>
  );
}
