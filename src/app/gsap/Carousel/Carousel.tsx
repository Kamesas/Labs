"use client";

import { useState } from "react";
import { ControlsContainer } from "./ControlsContainer";
import { ImageContainer } from "./ImageContainer";
import { QuoteContainer } from "./QuoteContainer";
import { slides } from "./slides";

// ============================================================
// STEP 1: Static slide swap — no GSAP yet
//
// What we have:
//   - React state (current) tracks which slide is visible
//   - goTo() updates state, React re-renders with new slide data
//   - Buttons call goTo("prev") / goTo("next")
//
// What's missing:
//   - No animation — content just jumps instantly
//
// Next step: add gsap.to() for a simple fade transition
// ============================================================

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (direction: "next" | "prev" | number) => {
    let nextIndex: number;

    if (typeof direction === "number") {
      nextIndex = direction;
    } else {
      nextIndex =
        direction === "next"
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length;
    }

    setCurrent(nextIndex);
  };

  const slide = slides[current];

  return (
    <div className="flex flex-col justify-center m-auto max-w-[1343px] bg-[#291928] min-h-[800px]">
      <div className="grid grid-cols-2 gap-12 items-center">
        <QuoteContainer slide={slide} />
        <ImageContainer slide={slide} />
      </div>

      <div className="flex justify-between items-center mt-7">
        <span className="text-[#F8F6F2] font-[GT_America_Trial] text-[16px] font-normal leading-[140%] tracking-[-0.16px]">
          {current + 1} / {slides.length}
        </span>

        <ControlsContainer goTo={goTo} />
      </div>
    </div>
  );
};
