"use client";

import { useRef, useState } from "react";
import { SlideCard } from "./SlideCard";
import { slides } from "./slides";

export const TrackingGlukose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col gap-[105px] bg-surface-light px-10 py-20 max-w-[1440px] mx-auto">
      <h2 className="font-heading text-[40px] leading-[1.3] tracking-[-0.01em] text-surface-dark max-w-[929px]">
        Tracking glucose helps you see how daily habits affect your body, making
        it easier to improve energy, sleep, and overall health.
      </h2>

      <div className="relative w-full max-w-[1360px] mx-auto aspect-1360/989 rounded-3xl overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url(${slides[activeIndex].image})`,
          }}
        />

        <div className="absolute left-[2.28%] top-[7.89%] flex items-center px-8 py-4 rounded-full bg-black/20 backdrop-blur-[7px]">
          <span className="font-heading text-sm leading-tight text-white">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div
          ref={cardsRef}
          className="absolute left-1/2 top-[18.71%] -translate-x-1/2 flex flex-col gap-6"
        >
          {slides.map((slide, i) => (
            <SlideCard
              key={slide.number}
              slide={slide}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
