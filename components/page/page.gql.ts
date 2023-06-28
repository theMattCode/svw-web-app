import { gql } from "@apollo/client";
import { PageDataQuery, PageEntity } from "#/lib/graphql/generated";
import graphqlClient from "#/lib/graphql/graphqlClient";
import {
  ANNOUNCEMENTS,
  ARTICLE_CAROUSEL_COMPONENT,
  ARTICLES_COMPONENT,
  ARTICLES_PREVIEW_LIST_COMPONENT,
  ERROR,
  FILE_FRAGMENT,
  FUSSBALL_DE_WIDGET,
  LINK_COMPONENT,
  LINK_LIST_COMPONENT,
  PEOPLE,
  PERSON_COMPONENT,
  RICH_TEXT_COMPONENT,
  RICH_TEXT_TWO_COLUMN_COMPONENT,
  SPACING_COMPONENT,
  TAG_FRAGMENT,
  TAGGED_PERSONS_COMPONENT,
  TAGS_FRAGMENT,
} from "#/lib/graphql/fragments.gql";

export const PAGE_DATA = gql`
  query PageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          description
          headerContents {
            __typename
            ...ArticleCarouselComponent
            ...Error
          }
          mainContents {
            __typename
            ...RichTextComponent
            ...RichTextTwoColumnComponent
            ...SpacingComponent
            ...PersonComponent
            ...TaggedPersonsComponent
            ...ArticlesComponent
            ...ArticlesPreviewListComponent
            ...FussballDeWidget
            ...Announcements
            ...Error
          }
          blocks {
            __typename
            data {
              __typename
              id
              attributes {
                __typename
                title
                bgColor
                contents {
                  __typename
                  ...Announcements
                  ...ArticleCarouselComponent
                  ...ArticlesComponent
                  ...ArticlesPreviewListComponent
                  ...RichTextComponent
                  ...RichTextTwoColumnComponent
                  ...SpacingComponent
                  ...PersonComponent
                  ...TaggedPersonsComponent
                  ...FussballDeWidget
                  ...Error
                }
              }
            }
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
  ${PERSON_COMPONENT}
  ${SPACING_COMPONENT}
  ${ANNOUNCEMENTS}
  ${ARTICLE_CAROUSEL_COMPONENT}
  ${ARTICLES_COMPONENT}
  ${ARTICLES_PREVIEW_LIST_COMPONENT}
  ${RICH_TEXT_COMPONENT}
  ${RICH_TEXT_TWO_COLUMN_COMPONENT}
  ${TAG_FRAGMENT}
  ${TAGS_FRAGMENT}
  ${FILE_FRAGMENT}
  ${PEOPLE}
  ${TAGGED_PERSONS_COMPONENT}
  ${FUSSBALL_DE_WIDGET}
`;

export async function fetchPageData(
  slug: string
): Promise<PageEntity | undefined> {
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
