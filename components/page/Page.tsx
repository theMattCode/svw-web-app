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
      <div className="container flex flex-col md:flex-row">
        <div className="max-w-lg p-4">
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
        <main className="container flex flex-col p-4 gap-4 min-w-[50%]">
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
        <div className="max-w-lg p-4">
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
