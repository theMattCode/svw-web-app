import { SubMenu } from "#/components/navigation/SubMenu";
import { formales } from "#/content/sitemap";
import React from "react";

export default function Sparten() {
  return (
    <div className="py-4 w-full bg-svw-blue-dark text-white">
      <SubMenu item={formales} />
    </div>
  );
}
