"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

type Props = {
  shuffle?: boolean;
};

export function Sponsors({ shuffle, children }: PropsWithChildren<Props>) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shuffle) {
      const grid = gridRef.current;
      if (grid) {
        const children = grid.children;
        const childrenArray = Array.from(children);
        childrenArray.sort(() => 0.5 - Math.random());
        childrenArray.forEach((child) => grid.appendChild(child));
      }
    }
  });

  return (
    <div
      className="transition-all p-3 flex flex-col items-center sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4"
      ref={gridRef}
    >
      {children}
    </div>
  );
}
