"use client";

import { useEffect } from "react";

export function ParallaxYEffect({ id, speed }: { id: string; speed: number }): null {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById(id);
      if (parallax) {
        const scrollPosition = window.scrollY;
        // speed control the speed of the parallax effect. Smaller numbers mean slower movement.
        const parallaxOffset = scrollPosition * speed;
        parallax.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, speed]);
  return null;
}
