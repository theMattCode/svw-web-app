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
      <div className="flex flex-row w-full min-h-[5em] border-t-2 border-white">
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
        <main className="container max-w-4xl xl:max-w-7xl p-4">
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
