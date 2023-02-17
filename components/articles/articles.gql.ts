import { gql } from "@apollo/client";
import { FILE_FRAGMENT } from "#/lib/graphql/fragments.gql";

export const ARTICLES_QUERY = gql`
  query Articles($page: Int!, $pageSize: Int!) {
    articles(
      pagination: { page: $page, pageSize: $pageSize }
      sort: ["date:DESC"]
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
