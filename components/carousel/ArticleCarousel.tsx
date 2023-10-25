import { ArticleCarouselClient } from "#/components/carousel/ArticleCarouselClient";
import { getArticles } from "#/content/article";

type Props = {
  maxItems: number;
};
export function ArticleCarousel({ maxItems }: Props) {
  const paginatedArticles = getArticles(1, maxItems);
  return (
    <div className="flex flex-col w-full place-items-end h-[65vh]">
      <ArticleCarouselClient articles={paginatedArticles.articles.filter((value) => value.image !== null)} />
    </div>
  );
}
