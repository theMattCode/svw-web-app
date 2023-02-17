import { gql } from "@apollo/client";
import {
  ARTICLES_COMPONENT,
  ERROR,
  FILE_FRAGMENT,
  FUSSBALL_DE_WIDGET,
  LINK_COMPONENT,
  LINK_LIST_COMPONENT,
  PEOPLE,
  PERSON_COMPONENT,
  RICH_TEXT_COMPONENT,
  SPACING_COMPONENT,
  TAGGED_PERSONS_COMPONENT,
} from "./fragments.gql";
import { HomepageQuery, MetaQuery } from "./generated";
import { ExtractType } from "./types";
import graphqlClient from "#/lib/graphql/graphqlClient";

export const HOMEPAGE = gql`
  query Homepage {
    homepage {
      data {
        id
        attributes {
          meta {
            id
            title
            description
            favicon {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
          }
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
          footer {
            id
            labelLeft
            labelRight
            linkLists {
              id
              title
              titleUrl
              pageLinks {
                data {
                  id
                  attributes {
                    title
                    slug
                  }
                }
              }
              links {
                ...LinkComponent
              }
            }
          }
          socialMedia {
            id
            name
            url
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          contact {
            id
            name
            street
            postalCode
            city
            telephone
            telefax
            email
          }
          subPages(pagination: { page: 1, pageSize: 20 }) {
            data {
              id
              attributes {
                title
                slug
                megaMenuContents {
                  __typename
                  ...RichTextComponent
                  ...SpacingComponent
                  ...PersonComponent
                  ...TaggedPersonsComponent
                  ...ArticlesComponent
                  ...LinkListComponent
                  ...FussballDeWidget
                  ...Error
                }
              }
            }
          }
        }
      }
    }
    sponsors(
      pagination: { page: 1, pageSize: 1000 }
      filters: { active: { eq: true } }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          name
          active
          image {
            ...FileFragment
          }
        }
      }
    }
  }
  ${FILE_FRAGMENT}
  ${LINK_COMPONENT}
  ${LINK_LIST_COMPONENT}
  ${ERROR}
  ${SPACING_COMPONENT}
  ${RICH_TEXT_COMPONENT}
  ${PEOPLE}
  ${PERSON_COMPONENT}
  ${TAGGED_PERSONS_COMPONENT}
  ${ARTICLES_COMPONENT}
  ${FUSSBALL_DE_WIDGET}
`;

export type HomepageData = ExtractType<
  HomepageQuery,
  ["homepage", "data", "attributes"]
>;
export type FooterData = Omit<ExtractType<HomepageData, ["footer"]>, "id">;
export type FooterLinkListData = ExtractType<FooterData, ["linkLists"]>;
export type ContactData = Omit<ExtractType<HomepageData, ["contact"]>, "id">;
export type SocialMediaData = Omit<
  ExtractType<HomepageData, ["socialMedia"]>,
  "id"
>;
export type Page = Omit<
  ExtractType<HomepageData, ["subPages", "data", "attributes"]>,
  "__typename"
>;

export async function fetchHomepageData(): Promise<HomepageQuery> {
  const { data } = await graphqlClient.query<HomepageQuery>({
    query: HOMEPAGE,
  });
  return data;
}

export const META = gql`
  query Meta {
    homepage {
      data {
        id
        attributes {
          meta {
            id
            title
            description
            favicon {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
          }
          logo {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export async function fetchMeta(): Promise<MetaQuery> {
  const { data } = await graphqlClient.query<MetaQuery>({
    query: META,
  });
  return data;
}
