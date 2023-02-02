import { gql } from "@apollo/client";
import { FILE_FRAGMENT } from "#/lib/graphql/fragments.gql";

export const ARTICLES_QUERY = gql`
  query Articles($page: Int!, $pageSize: Int!) {
    articles(pagination: { page: $page, pageSize: $pageSize }, sort: ["date"]) {
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
