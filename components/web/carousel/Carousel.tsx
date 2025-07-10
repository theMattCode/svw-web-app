"use client";

import { Children, PropsWithChildren, useCallback, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ITEM_WIDTH = 300;
const ITEM_GAP = 16;
const SCROLL_AMOUNT = ITEM_WIDTH + ITEM_GAP;

export function Carousel({ children }: PropsWithChildren) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row text-xl p-2 hover:bg-svw-blue-dark" onClick={() => scrollByAmount("left")}>
        <FiChevronLeft />
      </div>
      <div className="relative w-full p-4">
        <div className="flex gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory" ref={carouselRef}>
          {Children.map(children, (child) => (
            <div className="flex-none w-32 snap-start">{child}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-row text-xl p-2 hover:bg-svw-blue-dark" onClick={() => scrollByAmount("right")}>
        <FiChevronRight />
      </div>
    </div>
  );
}
