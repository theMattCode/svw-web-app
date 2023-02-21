import { DynamicContent } from "#/components/dynamic/DynamicContent";
import { Page as PageData } from "#/lib/graphql/generated";

type Props = {
  data: PageData;
};

export function Page(props: Props): JSX.Element {
  const { mainContents, leftContents, rightContents, headerContents } =
    props.data;
  return (
    <>
      <div className="flex flex-row w-full min-h-[5em] border-t-2 border-white">
        {headerContents?.map((content) => {
          if (content) {
            return (
              <DynamicContent
                key={"id" in content ? content.id : content.code}
                component={content}
              />
            );
          }
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
                />
              );
            }
          })}
        </div>
        <main className="container max-w-4xl p-8 bg-white shadow-xl">
          {mainContents?.map((content) => {
            if (content) {
              return (
                <DynamicContent
                  key={"id" in content ? content.id : content.code}
                  component={content}
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
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
