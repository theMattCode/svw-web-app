import {
  BlockRelationResponseCollection,
  Maybe,
} from "#/lib/graphql/generated";
import { Params, SearchParams } from "#/lib/url";
import { Block } from "#/components/block/Block";

type Props = {
  blocks: Maybe<BlockRelationResponseCollection> | undefined;
  params?: Params;
  searchParams?: SearchParams;
};

export function Blocks({ blocks, params, searchParams }: Props) {
  if (blocks && blocks.data)
    return (
      <>
        {blocks.data.map((blockEntity) => {
          const block = blockEntity.attributes;
          if (block) {
            return (
              <Block
                key={blockEntity.id}
                block={block}
                params={params}
                searchParams={searchParams}
              />
            );
          }
        })}
      </>
    );

  return null;
}
