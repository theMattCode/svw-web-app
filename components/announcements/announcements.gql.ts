import { gql } from "@apollo/client";
import {
  FILE_FRAGMENT,
  TAG_FRAGMENT,
  TAGS_FRAGMENT,
} from "#/lib/graphql/fragments.gql";
import graphqlClient from "#/lib/graphql/graphqlClient";
import {
  AnnouncementsQuery,
  AnnouncementsQueryVariables,
} from "#/lib/graphql/generated";

export const ANNOUNCEMENTS = gql`
  query Announcements($limit: Int, $now: DateTime) {
    announcements(
      pagination: { limit: $limit }
      filters: { activeDate: { lte: $now }, expiryDate: { gte: $now } }
    ) {
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
  const { data } = await graphqlClient.query<
    AnnouncementsQuery,
    AnnouncementsQueryVariables
  >({
    query: ANNOUNCEMENTS,
    variables: { now: new Date() },
  });

  return data;
}
