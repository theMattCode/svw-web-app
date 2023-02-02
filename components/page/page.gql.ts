import { gql } from "@apollo/client";
import { PageDataQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";
import graphqlClient from "#/lib/graphql/graphqlClient";
import {
  ARTICLE_CAROUSEL_COMPONENT,
  ARTICLES_COMPONENT,
  ERROR,
  PEOPLE,
  PERSON_COMPONENT,
  RICH_TEXT_COMPONENT,
  SPACING_COMPONENT,
  SUB_PAGE_NAVIGATION_COMPONENT,
  TAGGED_PERSONS_COMPONENT,
} from "#/lib/graphql/fragments.gql";

export const PAGE_DATA = gql`
  query PageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          headerContents {
            __typename
            ...SubPageNavigationComponent
            ...ArticleCarouselComponent
            ...Error
          }
          mainContents {
            __typename
            ...RichTextComponent
            ...SpacingComponent
            ...PersonComponent
            ...TaggedPersonsComponent
            ...ArticlesComponent
            ...Error
          }
          leftContents {
            __typename
            ...RichTextComponent
            ...SpacingComponent
            ...PersonComponent
            ...TaggedPersonsComponent
            ...Error
          }
          rightContents {
            __typename
            ...RichTextComponent
            ...SpacingComponent
            ...PersonComponent
            ...TaggedPersonsComponent
            ...Error
          }
          subPages {
            data {
              id
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
  ${ERROR}
  ${SUB_PAGE_NAVIGATION_COMPONENT}
  ${PERSON_COMPONENT}
  ${SPACING_COMPONENT}
  ${ARTICLE_CAROUSEL_COMPONENT}
  ${RICH_TEXT_COMPONENT}
  ${PEOPLE}
  ${TAGGED_PERSONS_COMPONENT}
  ${ARTICLES_COMPONENT}
`;

export type PageEntityData = ExtractType<PageDataQuery, ["pages", "data"]>;

export async function fetchPageData(
  slug: string
): Promise<PageEntityData | undefined> {
  const { data } = await graphqlClient.query<PageDataQuery>({
    query: PAGE_DATA,
    fetchPolicy: "no-cache",
    variables: { slug },
  });
  return (
    data.pages?.data?.find((page) => page.attributes?.slug === slug) ??
    undefined
  );
}
