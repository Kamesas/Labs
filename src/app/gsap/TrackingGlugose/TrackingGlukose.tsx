"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import { SlideCard } from "./SlideCard";
import { CARD_GAP, CARD_STEP, slides } from "./slides";

export const TrackingGlukose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const goTo = (index: number) => {
    if (index === activeIndex || isAnimating.current) return;
    isAnimating.current = true;

    const bgs = bgRef.current?.children;
    const cards = cardsRef.current?.children;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    if (bgs) {
      tl.to(
        bgs[activeIndex],
        { opacity: 0.01, duration: 0.6, ease: "power2.inOut" },
        0,
      );
      tl.to(bgs[index], { opacity: 1, duration: 0.6, ease: "power2.inOut" }, 0);
    }

    tl.to(
      cardsRef.current,
      { y: -(index * CARD_STEP), duration: 0.6, ease: "power2.inOut" },
      0,
    );

    if (cards) {
      tl.to(
        cards[activeIndex],
        {
          backgroundColor: "rgba(0,0,0,0.2)",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0,
      );
      tl.to(
        cards[index],
        {
          backgroundColor: "rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0,
      );
    }

    if (counterRef.current) {
      tl.to(
        counterRef.current,
        {
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => setActiveIndex(index),
        },
        0,
      );
      tl.to(counterRef.current, { duration: 0.2, ease: "power2.out" }, 0.3);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="flex flex-col gap-[105px] bg-surface-light px-10 py-20 max-w-[1440px] mx-auto">
      <h2 className="font-heading text-[40px] leading-[1.3] tracking-[-0.01em] text-surface-dark max-w-[929px]">
        Tracking glucose helps you see how daily habits affect your body, making
        it easier to improve energy, sleep, and overall health.
      </h2>

      <div className="relative w-full max-w-[1360px] mx-auto aspect-1360/989 rounded-3xl overflow-hidden">
        <div ref={bgRef} className="absolute inset-0">
          {slides.map((slide, i) => (
            <div
              key={slide.number}
              className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url(${slide.image})`,
                opacity: i === 0 ? 1 : 0.01,
              }}
            />
          ))}
        </div>

        <div className="absolute left-[2.28%] top-[4.04%] flex items-center px-8 py-4 rounded-full bg-black/20 backdrop-blur-[7px]">
          <span
            ref={counterRef}
            className="font-heading text-sm leading-tight text-white"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div
          ref={cardsRef}
          className="absolute left-1/2 top-[18.71%] -translate-x-1/2 flex flex-col"
          style={{ gap: CARD_GAP }}
        >
          {slides.map((slide, i) => (
            <SlideCard
              key={slide.number}
              slide={slide}
              active={i === 0}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
