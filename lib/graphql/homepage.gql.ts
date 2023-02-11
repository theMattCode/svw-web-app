import { gql } from "@apollo/client";
import { FILE_FRAGMENT, LINK_COMPONENT } from "./fragments.gql";
import { HomepageQuery } from "./generated";
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
                subPages(pagination: { page: 1, pageSize: 20 }) {
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
  ${LINK_COMPONENT}
  ${FILE_FRAGMENT}
`;

export type HomepageData = ExtractType<
  HomepageQuery,
  ["homepage", "data", "attributes"]
>;
export type MetaData = Omit<ExtractType<HomepageData, ["meta"]>, "id">;
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
export type Sponsor = ExtractType<
  HomepageQuery,
  ["sponsors", "data", "attributes"]
>;

export async function fetchHomepageData(): Promise<HomepageQuery> {
  const { data } = await graphqlClient.query<HomepageQuery>({
    query: HOMEPAGE,
  });
  return data;
}
