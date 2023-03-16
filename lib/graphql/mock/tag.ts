import { Tag, TagEntity } from "#/lib/graphql/generated";

export function createTag(tag: Partial<Tag> = {}): Tag {
  return {
    __typename: "Tag",
    name: tag.name ?? "Ehrenmitglied",
  };
}

export function createTagEntity(id: string, tag: Partial<Tag> = {}): TagEntity {
  return {
    __typename: "TagEntity",
    id,
    attributes: createTag(tag),
  };
}
