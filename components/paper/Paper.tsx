import { PropsWithChildren } from "react";

export function Paper({ children }: PropsWithChildren) {
  return <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">{children}</div>;
}
