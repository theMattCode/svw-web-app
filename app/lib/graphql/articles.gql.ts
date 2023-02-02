import { gql } from "@apollo/client";
import client from "#/lib/graphql/client";
import { PromotionArticlesQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";

export const PROMOTION_ARTICLES_QUERY = gql`
  query PromotionArticles($limit: Int!) {
    articles(filters: { promote: { eq: true } }, pagination: { limit: $limit }) {
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

export type PromotionArticle = ExtractType<PromotionArticlesQuery, ["articles", "data", "attributes"]>;

export async function fetchPromotionArticles(limit: number): Promise<PromotionArticle[]> {
  const { data } = await client.query<PromotionArticlesQuery>({
    query: PROMOTION_ARTICLES_QUERY,
    variables: { limit },
  });
  return data.articles?.data.map((articleEntity) => ({ ...articleEntity!.attributes! })) ?? [];
}
