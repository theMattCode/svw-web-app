import React from "react";
import { FastAccessBar } from "#/components/navigation/FastAccessBar";
import { MainBar } from "#/components/navigation/MainBar";

export function Navigation() {
  return (
    <nav className="z-50 top-0 sticky bg-white drop-shadow-xl flex flex-col opacity-[.95]">
      <FastAccessBar />
      <MainBar />
    </nav>
  );
}
