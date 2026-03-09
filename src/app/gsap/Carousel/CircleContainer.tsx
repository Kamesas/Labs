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
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          opacity="0.2"
          cx="12"
          cy="12"
          r="10.5"
          stroke="#F8F6F2"
          strokeWidth="3"
        />
        <circle
          ref={progressRef}
          cx="12"
          cy="12"
          r="10.5"
          fill="none"
          stroke="#F8F6F2"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <span>
        {currentSlide + 1} / {slidesLength}
      </span>
    </div>
  );
};
