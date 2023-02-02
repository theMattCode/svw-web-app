import { gql } from "@apollo/client";
import { LINK_COMPONENT } from "./fragments.gql";
import { HomepageQuery } from "./generated";
import { ExtractType } from "./types";
import client from "#/lib/graphql/client";

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
  ${LINK_COMPONENT}
`;

export type HomepageData = ExtractType<HomepageQuery, ["homepage", "data", "attributes"]>;
export type MetaData = Omit<ExtractType<HomepageData, ["meta"]>, "id">;
export type FooterData = Omit<ExtractType<HomepageData, ["footer"]>, "id">;
export type FooterLinkListData = ExtractType<FooterData, ["linkLists"]>;
export type ContactData = Omit<ExtractType<HomepageData, ["contact"]>, "id">;
export type SocialMediaData = Omit<ExtractType<HomepageData, ["socialMedia"]>, "id">;
export type Page = Omit<ExtractType<HomepageData, ["subPages", "data", "attributes"]>, "__typename">;

export async function fetchHomepageData(): Promise<HomepageData | undefined> {
  const { data } = await client.query<HomepageQuery>({
    query: HOMEPAGE,
  });
  return data.homepage?.data?.attributes ?? undefined;
}
