import { DynamicContent } from "#/components/dynamic/DynamicContent";
import { Page as PageData } from "#/lib/graphql/generated";
import { Params, SearchParams } from "#/lib/url";
import { Blocks } from "#/components/block/Blocks";

type Props = {
  pageData: PageData;
  params?: Params;
  searchParams?: SearchParams;
};

export function Page({ pageData, params, searchParams }: Props): JSX.Element {
  const { mainContents, headerContents, blocks } = pageData;
  return (
    <>
      <div className="flex flex-col w-full">
        <Blocks blocks={blocks} params={params} searchParams={searchParams} />
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {mainContents && mainContents.length > 0 && (
          <main className="flex flex-col w-full">
            {mainContents.map((content) => {
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
          </main>
        )}
      </div>
    </>
  );
}
