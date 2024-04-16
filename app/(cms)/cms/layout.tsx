"use client";

import { PropsWithChildren } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Navigation } from "#/components/cms/navigation/Navigation";
import { Header } from "#/components/cms/header/Header";

export default withPageAuthRequired(function CMSLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen bg-gray-100 flex">
      <div className="w-64">
        <Navigation />
      </div>
      <div className="w-full flex-col">
        <Header />
        <main className="w-full h-full p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
});
