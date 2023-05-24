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
      <div className="md:min-h-[4em] border-t-2 border-white">
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
      <div className="flex flex-col md:flex-row w-full">
        {leftContents && leftContents.length > 0 && (
          <div className="">
            {leftContents.map((content) => {
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
        )}
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
        {rightContents && rightContents.length > 0 && (
          <div className="max-w-lg w-full">
            {rightContents.map((content) => {
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
        )}
      </div>
    </>
  );
}
