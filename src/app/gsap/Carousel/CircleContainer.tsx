import { RefObject } from "react";

type tProps = {
  progressRef: RefObject<SVGCircleElement | null>;
  circumference: number;
  currentSlide: number;
  slidesLength: number;
};

export const CircleContainer = ({
  progressRef,
  circumference,
  currentSlide,
  slidesLength,
}: tProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />
        <circle
          ref={progressRef}
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <span style={{ fontSize: "0.875rem" }}>
        {currentSlide + 1} / {slidesLength}
      </span>
    </div>
  );
};
