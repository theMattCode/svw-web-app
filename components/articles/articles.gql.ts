import { gql } from "@apollo/client";
import {
  FILE_FRAGMENT,
  TAG_FRAGMENT,
  TAGS_FRAGMENT,
} from "#/lib/graphql/fragments.gql";
import { ExtractType } from "#/lib/graphql/types";
import { ArticlesQuery } from "#/lib/graphql/generated";

export const ARTICLES_QUERY = gql`
  query Articles($page: Int!, $pageSize: Int!, $tagFilters: [TagFiltersInput]) {
    articles(
      pagination: { page: $page, pageSize: $pageSize }
      sort: ["date:DESC"]
      filters: { tags: { or: $tagFilters } }
    ) {
      data {
        id
        attributes {
          title
          slug
          date
          text
          promote
          teaser
          tags {
            ...Tags
          }
          image {
            ...FileFragment
          }
        }
      }
      meta {
        pagination {
          pageSize
          page
          pageCount
          total
        }
      }
    }
  }
  ${TAG_FRAGMENT}
  ${TAGS_FRAGMENT}
  ${FILE_FRAGMENT}
`;

export type ListedArticle = ExtractType<
  ArticlesQuery,
  ["articles", "data", "attributes"]
>;

export const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(
      filters: { slug: { eq: $slug } }
      pagination: { page: 1, pageSize: 1 }
    ) {
      data {
        id
        attributes {
          title
          slug
          date
          text
          promote
          image {
            ...FileFragment
          }
        }
      }
      meta {
        pagination {
          pageSize
          page
          pageCount
          total
        }
      }
    }
  }
  ${FILE_FRAGMENT}
`;
