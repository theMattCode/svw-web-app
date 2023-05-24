import { fetchPromotionArticles } from "#/lib/graphql/articles.gql";
import { ArticleCarouselClient } from "#/components/carousel/ArticleCarouselClient";

type Props = {
  maxItems: number;
};
export async function ArticleCarousel({
  maxItems,
}: Props): Promise<JSX.Element> {
  const articles = await fetchPromotionArticles(maxItems);
  return (
    <div className="flex flex-col w-full place-items-end h-[65vh]">
      <ArticleCarouselClient
        articles={articles.filter((value) => value.image?.data !== null)}
      />
    </div>
  );
}
