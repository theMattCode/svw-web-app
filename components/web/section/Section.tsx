import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PropsWithChildren } from "react";

export function Section({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="2xl:container flex flex-col gap-4 @container">
      {title && <SectionTitle title={title} />}
      {children}
    </div>
  );
}
