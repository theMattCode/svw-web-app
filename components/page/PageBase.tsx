import { PropsWithChildren } from "react";

export function PageBase({ children }: PropsWithChildren) {
  return (
    <div className="bg-neutral-200 py-8 px-2">
      <div className="container flex flex-col gap-2">{children}</div>
    </div>
  );
}
