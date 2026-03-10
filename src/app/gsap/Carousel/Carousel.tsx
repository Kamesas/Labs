"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import { CircleContainer } from "./CircleContainer";
import { ControlsContainer } from "./ControlsContainer";
import { ImageContainer } from "./ImageContainer";
import { QuoteContainer } from "./QuoteContainer";
import { slides } from "./slides";

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    const container = containerRef.current;
    if (!container) return;

    gsap.to(container, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrent(nextIndex);
        gsap.to(container, { opacity: 1, duration: 0.3 });
      },
    });
  };

  const slide = slides[current];

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center m-auto max-w-[1343px] bg-[#291928] min-h-[800px]"
    >
      <div className="grid grid-cols-2 gap-12 items-center">
        <QuoteContainer slide={slide} />
        <ImageContainer slide={slide} />
      </div>

      <div className="flex justify-between items-center mt-7">
        <CircleContainer
          currentSlide={current}
          slidesLength={slides.length}
          onCompleteCallback={() => goTo("next")}
        />
        <ControlsContainer goTo={goTo} />
      </div>
    </div>
  );
};
