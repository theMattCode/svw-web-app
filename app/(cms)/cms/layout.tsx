"use client";

import { PropsWithChildren } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Navigation } from "#/components/cms/navigation/Navigation";
import { Header } from "#/components/cms/header/Header";

export default withPageAuthRequired(function CMSLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="w-full h-full flex py-4">
        <div className="w-64">
          <Navigation />
        </div>
        <main className="w-full h-full overflow-y-auto px-4">{children}</main>
      </div>
    </div>
  );
});
