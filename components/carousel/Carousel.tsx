"use client";

import { useEffect, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};
export function Carousel({ children }: Props) {
  const length = "length" in children ? children.length : 1;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1),
      6000
    );
    return () => clearTimeout(timeout);
  }, [currentSlide, length, setCurrentSlide]);

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children}
        </div>
      </div>
      {length > 1 && (
        <div className="container flex justify-center gap-2">
          <button
            className="flex items-center justify-center w-6 h-6 bg-svw-blue-default text-white text-2xl"
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? length - 1 : currentSlide - 1
              )
            }
          >
            &lt;
          </button>
          <div className="flex gap-2 items-center">
            {Array.from({ length }, (_, index) => (
              <button
                key={index}
                className={`w-4 h-4 ${
                  index === currentSlide ? "bg-svw-blue-default" : "bg-white"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button
            className="flex items-center justify-center w-6 h-6 bg-svw-blue-default text-white text-2xl"
            onClick={() =>
              setCurrentSlide(
                currentSlide === length - 1 ? 0 : currentSlide + 1
              )
            }
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
