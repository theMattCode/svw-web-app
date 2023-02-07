import { fetchPromotionArticles } from "#/lib/graphql/articles.gql";
import { CarouselClient } from "#/components/carousel/CarouselClient";
import { injectFullAssetUrl } from "#/lib/asset";

type Props = {
  maxItems: number;
};
export async function Carousel({ maxItems }: Props): Promise<JSX.Element> {
  const articles = await fetchPromotionArticles(maxItems);

  return (
    <div className="flex flex-col w-full place-items-end border-t-2 border-svw-blue-default h-96 md:h-[50vh]">
      <CarouselClient articles={articles} />
    </div>
  );
}
