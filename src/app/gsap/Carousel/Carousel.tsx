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
      className="bg-surface-dark px-4 py-12 lg:px-12 lg:py-0 lg:min-h-[800px] flex flex-col justify-center max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <QuoteContainer slide={slide} />
        <ImageContainer slide={slide} />
      </div>

      <div className="flex justify-between items-center mt-6 lg:mt-10">
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
