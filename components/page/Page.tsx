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
      <div className="flex flex-row">
        {headerContents?.map((content) => {
          if (content) {
            return (
              <DynamicContent
                key={"id" in content ? content.id : content.code}
                component={content}
                page={props.data}
              />
            );
          }
        })}
      </div>
      <div className="container flex flex-row place-content-between">
        <div className="">
          {leftContents?.map((content) => {
            if (content) {
              return (
                <DynamicContent
                  key={"id" in content ? content.id : content.code}
                  component={content}
                  page={props.data}
                />
              );
            }
          })}
        </div>
        <main className="">
          {mainContents?.map((content) => {
            if (content) {
              return (
                <DynamicContent
                  key={"id" in content ? content.id : content.code}
                  component={content}
                  page={props.data}
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
                  page={props.data}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
