"use client";

import { PropsWithChildren, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Navigation } from "#/components/cms/navigation/Navigation";
import { Header } from "#/components/cms/header/Header";

export default withPageAuthRequired(function CMSLayout({ children }: PropsWithChildren) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  return (
    <div className="@container w-screen h-screen flex bg-gray-50">
      <Navigation open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      <div className="w-full h-full flex flex-col" onClick={navigationOpen ? () => setNavigationOpen(false) : () => {}}>
        <Header onOpenMenu={() => setNavigationOpen(true)} />
        <main className="w-full h-full overflow-y-auto p-4 @container">{children}</main>
        <div
          className={`transition-all z-30 @5xl:hidden ${navigationOpen ? "fixed top-0 left-0 w-full h-full bg-neutral-500/50" : ""}`}
        />
      </div>
    </div>
  );
});
