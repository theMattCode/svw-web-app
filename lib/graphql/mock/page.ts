import { Page, PageEntity } from "#/lib/graphql/generated";

export function createPageEntity(
  { id }: Partial<PageEntity>,
  subPages?: Partial<PageEntity>[]
): PageEntity {
  return {
    __typename: "PageEntity",
    id,
    attributes: {
      __typename: "Page",
      title: `Page ${id}`,
      slug: `page-${id}`,
      subPages: !subPages
        ? null
        : {
            __typename: "PageRelationResponseCollection",
            data: [...subPages],
          },
    },
  };
}
