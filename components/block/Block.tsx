import { Params, SearchParams } from "#/lib/url";
import { BlockTitle } from "#/components/block/BlockTitle";
import { DynamicContent } from "#/components/dynamic/DynamicContent";
import { Block as BlockModel } from "#/lib/graphql/generated";

type Props = {
  block: BlockModel;
  params?: Params;
  searchParams?: SearchParams;
};

export function Block({ block, params, searchParams }: Props) {
  return (
    <div
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
