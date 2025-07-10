import { PropsWithChildren } from "react";

export function PageContent({ children }: PropsWithChildren) {
  return (
    <div className="bg-neutral-200 py-8 px-4">
      <div className="container flex flex-col gap-4 @container">{children}</div>
    </div>
  );
}
