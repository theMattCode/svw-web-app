import { TagsFragment } from "#/lib/graphql/generated";

export function asTagsString(
  tags: TagsFragment | undefined | null,
  defaultString: string = ""
) {
  return (
    tags?.data.map((tag) => tag.attributes?.name).join(", ") ?? defaultString
  );
}
