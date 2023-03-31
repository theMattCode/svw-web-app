import { DynamicContent } from "#/components/dynamic/DynamicContent";
import { Page as PageData } from "#/lib/graphql/generated";
import { Params, SearchParams } from "#/lib/url";

type Props = {
  pageData: PageData;
  params?: Params;
  searchParams?: SearchParams;
};

export function Page({ pageData, params, searchParams }: Props): JSX.Element {
  const { mainContents, leftContents, rightContents, headerContents } =
    pageData;
  return (
    <>
      <div className="min-h-[4em] border-t-2 border-white">
        {headerContents && (
          <div className="flex flex-row w-full">
            {headerContents?.map((content) => {
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
              return <></>;
            })}
          </div>
        )}
      </div>
      <div className="container flex flex-row">
        <div className="">
          {leftContents?.map((content) => {
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
        <main className="container flex flex-col p-4 gap-4">
          {mainContents?.map((content) => {
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
        <div className="">
          {rightContents?.map((content) => {
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
      </div>
    </>
  );
}
