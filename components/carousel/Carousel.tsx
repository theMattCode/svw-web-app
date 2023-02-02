import { fetchPromotionArticles } from "#/lib/graphql/articles.gql";
import { CarouselClient } from "#/components/carousel/CarouselClient";

type Props = {
  maxItems: number;
};
export async function Carousel({ maxItems }: Props): Promise<JSX.Element> {
  const articles = await fetchPromotionArticles(maxItems);

  return (
    <div className="h-96 bg-svw-blue-default">
      <div className="container flex flex-col place-items-center">
        <CarouselClient articles={articles} />
      </div>
    </div>
  );
}
