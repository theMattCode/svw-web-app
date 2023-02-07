import { gql } from "@apollo/client";
import graphqlClient from "#/lib/graphql/graphqlClient";
import { PromotionArticlesQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";
import { injectFullAssetUrl } from "#/lib/asset";

export const PROMOTION_ARTICLES_QUERY = gql`
  query PromotionArticles($limit: Int!) {
    articles(
      filters: { promote: { eq: true } }
      pagination: { limit: $limit }
    ) {
      data {
        id
        attributes {
          title
          slug
          image {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          date
          teaser
        }
      }
    }
  }
`;

export type PromotionArticle = ExtractType<
  PromotionArticlesQuery,
  ["articles", "data", "attributes"]
>;

export async function fetchPromotionArticles(
  limit: number
): Promise<PromotionArticle[]> {
  const { data } = await graphqlClient.query<PromotionArticlesQuery>({
    query: PROMOTION_ARTICLES_QUERY,
    variables: { limit },
  });
  data.articles?.data.forEach((article) =>
    injectFullAssetUrl(article.attributes?.image?.data?.attributes)
  );
  return (
    data.articles?.data.map((articleEntity) => ({
      ...articleEntity!.attributes!,
    })) ?? []
  );
}
