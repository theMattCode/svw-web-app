"use client";

import { JSX, PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function CMSBaseLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html className="w-full h-full">
      <body className="flex w-full h-full overflow-hidden">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
