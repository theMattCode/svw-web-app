import { BlockTitle } from "#/components/block/BlockTitle";
import { DynamicContent } from "#/components/dynamic/DynamicContent";
import {
  BlockRelationResponseCollection,
  Maybe,
} from "#/lib/graphql/generated";
import { Params, SearchParams } from "#/lib/url";

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
              <div
                key={blockEntity.id}
                className="w-full md:px-4 pb-8 bg-svw-blue-darker"
                style={{ backgroundColor: block.bgColor ?? "" }}
              >
                {block.title && <BlockTitle title={block.title} />}
                {block.contents &&
                  block.contents.length > 0 &&
                  block.contents.map((content) => {
                    if (content) {
                      return (
                        <DynamicContent
                          key={"id" in content ? content.id : content.code}
                          component={content}
                          params={params}
                          searchParams={searchParams}
                        />
                      );
                    }
                  })}
              </div>
            );
          }
        })}
      </>
    );

  return null;
}
