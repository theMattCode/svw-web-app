import { verein } from "#/content/sitemap";
import Link from "next/link";
import React from "react";

import { SubMenu } from "#/components/navigation/SubMenu";

export default function Verein() {
  return (
    <div className="py-4 w-full bg-svw-blue-dark text-white">
      <SubMenu item={verein} />
    </div>
  );
}
