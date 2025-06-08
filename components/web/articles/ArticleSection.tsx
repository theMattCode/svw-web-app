import { SectionTitle } from "#/components/web/section/SectionTitle";
import { Section } from "#/components/web/section/Section";
import { ArticleGrid } from "#/components/web/articles/ArticleGrid";
import { aktuelles } from "#/content/sitemap";
import Link from "next/link";
import { getArticles, getArticlesByTags } from "#/content/article";
import { ArticleList } from "#/components/web/articles/ArticleList";

const DEFAULT_ITEM_COUNT = 8;

type Props = {
  itemCount?: number;
  tags?: string[];
  showTitle?: boolean;
};

export function ArticleSection({ itemCount = DEFAULT_ITEM_COUNT, tags }: Props) {
  const articles =
    tags && tags.length > 0
      ? getArticlesByTags(tags, "public/content/article").slice(0, itemCount)
      : getArticles(1, itemCount, "public/content/article").articles;

  return (
    <Section>
      <SectionTitle title="Aktuelles" />
      <div className="hidden @5xl:flex @5xl:flex-col">
        <ArticleList articles={articles} />
      </div>
      <div className="flex flex-col @5xl:hidden">
        <ArticleGrid articles={articles} />
      </div>
      <Link href={aktuelles.url} className="text-white bg-svw-blue-default p-2 w-fit self-center">
        Weitere Artikel
      </Link>
    </Section>
  );
}
