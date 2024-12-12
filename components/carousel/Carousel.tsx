"use client";

import Link from "next/link";
import { useEffect, useState, type JSX } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

type Props = {
  children: JSX.Element | JSX.Element[];
};
export function Carousel({ children }: Props) {
  const length = "length" in children ? children.length : 1;
  const base = "h-full inline-flex items-center justify-center p-2";
  const button = `${base} text-lg hover:ring-0 hover:bg-svw-blue-dark hover:text-white`;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1), 6000);
    return () => clearTimeout(timeout);
  }, [currentSlide, length, setCurrentSlide]);

  return (
    <div className="flex flex-col pb-2">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children}
        </div>
      </div>
      {length > 1 && (
        <ul className="rounded-md bg-svw-blue-default inline-flex text-sm text-white items-center justify-center self-center divide-x">
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)}
            className={`${button} rounded-l-md`}
          >
            <FiChevronLeft />
          </button>
          <div className={base}>
            {currentSlide + 1} von {length}
          </div>
          <button
            onClick={() => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)}
            className={`${button} rounded-r-md`}
          >
            <FiChevronRight />
          </button>
        </ul>
      )}
    </div>
  );
}
