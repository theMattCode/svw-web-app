import { gql } from "@apollo/client";
import {
  FILE_FRAGMENT,
  LINK_COMPONENT,
  LINK_LIST_COMPONENT,
} from "#/lib/graphql/fragments.gql";
import { HomepageQuery, MetaQuery } from "#/lib/graphql/generated";
import { ExtractType } from "#/lib/graphql/types";
import graphqlClient from "#/lib/graphql/graphqlClient";

export const HOMEPAGE = gql`
  query Homepage {
    club {
      data {
        id
        attributes {
          name
          address
          postalCode
          city
          telephone
          telefax
          email
          logo {
            ...FileFragment
          }
        }
      }
    }
    header {
      data {
        id
        attributes {
          logo {
            ...FileFragment
          }
          accessLinks {
            ...LinkListComponent
          }
          showSearch
          navigationLinks {
            data {
              id
              attributes {
                title
                slug
                description
                subPages {
                  data {
                    id
                    attributes {
                      title
                      slug
                      description
                      subPages {
                        data {
                          id
                          attributes {
                            title
                            slug
                            description
                          }
                        }
                      }
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
    footer {
      data {
        id
        attributes {
          copyright
          contents {
            ...LinkComponent
            ...LinkListComponent
          }
          socialMediaLinks {
            data {
              id
              attributes {
                name
                url
                icon {
                  ...FileFragment
                }
              }
            }
          }
        }
      }
    }
  }
  ${FILE_FRAGMENT}
  ${LINK_COMPONENT}
  ${LINK_LIST_COMPONENT}
`;

export type ClubData = ExtractType<
  HomepageQuery,
  ["club", "data", "attributes"]
>;

export type HeaderData = ExtractType<
  HomepageQuery,
  ["header", "data", "attributes"]
>;

export type AccessHeaderData = ExtractType<HeaderData, ["accessLinks"]>;
export type NavItemData = ExtractType<
  HeaderData,
  ["navigationLinks", "data", "attributes"]
>;

export type SponsorData = ExtractType<
  HomepageQuery,
  ["sponsors", "data", "attributes"]
>;

export type FooterData = ExtractType<
  HomepageQuery,
  ["footer", "data", "attributes"]
>;

export async function fetchBasicData(): Promise<HomepageQuery> {
  const { data } = await graphqlClient.query<HomepageQuery>({
    query: HOMEPAGE,
  });
  return data;
}

export const META = gql`
  query Meta {
    meta {
      data {
        id
        attributes {
          title
          description
          favicon {
            ...FileFragment
          }
        }
      }
    }
  }
  ${FILE_FRAGMENT}
`;
export async function fetchMeta(): Promise<MetaQuery> {
  const { data } = await graphqlClient.query<MetaQuery>({
    query: META,
  });
  return data;
}
