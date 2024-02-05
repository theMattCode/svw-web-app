import "#/styles/globals.css";
import { PropsWithChildren } from "react";

export default async function CMSLayout({ children }: PropsWithChildren): Promise<JSX.Element> {
  return (
    <div>
      <div>CMS Layout</div>
      <div>{children}</div>
    </div>
  );
}
