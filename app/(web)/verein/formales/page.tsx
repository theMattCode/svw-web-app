import { SubMenu } from "#/components/navigation/SubMenu";
import { formales } from "#/content/sitemap";
import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";

export const metadata: Metadata = {
  title: getTitle(formales.name),
};

export default function Sparten() {
  return (
    <div className="py-4 w-full bg-svw-blue-dark text-white">
      <SubMenu item={formales} />
    </div>
  );
}
