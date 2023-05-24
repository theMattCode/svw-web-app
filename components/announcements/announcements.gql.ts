import { gql } from "@apollo/client";
import {
  FILE_FRAGMENT,
  TAG_FRAGMENT,
  TAGS_FRAGMENT,
} from "#/lib/graphql/fragments.gql";
import graphqlClient from "#/lib/graphql/graphqlClient";
import { AnnouncementsQuery } from "#/lib/graphql/generated";

export const ANNOUNCEMENTS = gql`
  query Announcements($limit: Int) {
    announcements(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          slug
          title
          tags {
            ...Tags
          }
          image {
            ...FileFragment
          }
          activeDate
          expiryDate
          description
        }
      }
    }
  }
  ${TAGS_FRAGMENT}
  ${TAG_FRAGMENT}
  ${FILE_FRAGMENT}
`;

export async function fetchAnnouncements() {
  const { data } = await graphqlClient.query<AnnouncementsQuery>({
    query: ANNOUNCEMENTS,
    variables: {},
  });

  return data;
}
