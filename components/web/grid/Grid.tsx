import { PropsWithChildren } from "react";

export function Grid({ children }: PropsWithChildren) {
  return <div className="grid @xs:grid-cols-1 @3xl:grid-cols-2 @5xl:grid-cols-3 gap-4">{children}</div>;
}
