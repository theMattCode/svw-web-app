import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";
import { People, PeopleEntity, TagEntity } from "#/lib/graphql/generated";

export function createPeopleEntity({
  person,
  tags,
}: {
  person?: Partial<People>;
  tags?: Partial<TagEntity>[];
} = {}): PeopleEntity {
  return {
    __typename: "PeopleEntity",
    id: "1",
    attributes: {
      __typename: "People",
      firstname: person?.firstname ?? "Max Martin",
      lastname: person?.lastname ?? "Mustermann",
      email: person?.email ?? "max.martin.mustermann@svwalddorf.de",
      telephone: person?.telephone ?? "+49 7121 12345678",
      picture: person?.picture ?? createUploadFileEntityResponse(),
      tags: {
        __typename: "TagRelationResponseCollection",
        data: tags ?? [
          {
            __typename: "TagEntity",
            id: "1",
            attributes: {
              __typename: "Tag",
              name: "Vorstand",
            },
          },
          {
            __typename: "TagEntity",
            id: "2",
            attributes: {
              __typename: "Tag",
              name: "Spitzencoach",
            },
          },
        ],
      },
    },
  };
}
