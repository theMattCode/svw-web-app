import { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
