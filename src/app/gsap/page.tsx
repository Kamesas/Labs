"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { CircleContainer } from "./Carousel/CircleContainer";
import { ControlsContainer } from "./Carousel/ControlsContainer";
import { ImageContainer } from "./Carousel/ImageContainer";
import { QuoteContainer } from "./Carousel/QuoteContainer";
import { slides } from "./Carousel/slides";

const DURATION = 0.6;
const PROGRESS_DURATION = 6;

export default function GSAPCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<gsap.core.Tween | null>(null);
  const isAnimating = useRef(false);
  const currentRef = useRef(current);

  const progressRef = useRef<SVGCircleElement>(null);
  const circumference = 2 * Math.PI * 18;

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const goTo = useCallback((direction: "next" | "prev" | number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const container = containerRef.current;
    if (!container) return;

    const quoteEl = container.querySelector("[data-quote]");
    const nameEl = container.querySelector("[data-name]");
    const detailEl = container.querySelector("[data-detail]");
    const imgEl = container.querySelector("[data-img]");

    const cur = currentRef.current;
    let nextIndex: number;
    if (typeof direction === "number") {
      nextIndex = direction;
    } else {
      nextIndex =
        direction === "next"
          ? (cur + 1) % slides.length
          : (cur - 1 + slides.length) % slides.length;
    }

    const slideDir = direction === "prev" ? -1 : 1;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to([quoteEl, nameEl, detailEl], {
      y: slideDir * -30,
      opacity: 0,
      duration: DURATION * 0.5,
      stagger: 0.05,
      ease: "power2.in",
    }).to(
      imgEl,
      {
        opacity: 0,
        scale: 0.95,
        duration: DURATION * 0.5,
        ease: "power2.in",
      },
      0,
    );

    tl.call(() => setCurrent(nextIndex))
      .set([quoteEl, nameEl, detailEl], { y: slideDir * 30, opacity: 0 })
      .set(imgEl, { scale: 1.05, opacity: 0 })
      .to([quoteEl, nameEl, detailEl], {
        y: 0,
        opacity: 1,
        duration: DURATION * 0.5,
        stagger: 0.05,
        ease: "power2.out",
      })
      .to(
        imgEl,
        {
          opacity: 1,
          scale: 1,
          duration: DURATION * 0.5,
          ease: "power2.out",
        },
        `>-${DURATION * 0.4}`,
      );
  }, []);

  const animateProgress = useCallback(() => {
    if (!progressRef.current) return;
    autoplayRef.current?.kill();

    gsap.set(progressRef.current, { strokeDashoffset: circumference });
    autoplayRef.current = gsap.to(progressRef.current, {
      strokeDashoffset: 0,
      duration: PROGRESS_DURATION,
      ease: "none",
      onComplete: () => goTo("next"),
    });
  }, [circumference, goTo]);

  useEffect(() => {
    animateProgress();
    return () => {
      autoplayRef.current?.kill();
    };
  }, [current, animateProgress]);

  const slide = slides[current];

  return (
    <div
      ref={containerRef}
      style={{
        background: "#1a1a2e",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <QuoteContainer slide={slide} />
        <ImageContainer slide={slide} />
      </div>

      <div className="flex justify-between items-center mt-12">
        <CircleContainer
          currentSlide={current}
          slidesLength={slides?.length}
          circumference={circumference}
          progressRef={progressRef}
        />

        <ControlsContainer goTo={goTo} />
      </div>
    </div>
  );
}
