import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { SubMenu } from "#/components/navigation/SubMenu";
import { sparten } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(sparten.name),
};

export default function Sparten() {
  return (
    <div className="py-4 w-full bg-svw-blue-dark text-white">
      <SubMenu item={sparten} />
    </div>
  );
}
