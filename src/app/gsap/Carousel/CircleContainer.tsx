import gsap from "gsap";
import { useEffect, useEffectEvent, useRef } from "react";

type tProps = {
  currentSlide: number;
  slidesLength: number;
  onCompleteCallback: () => void;
};

export const CircleContainer = ({
  currentSlide,
  slidesLength,
  onCompleteCallback,
}: tProps) => {
  const autoplayRef = useRef<gsap.core.Tween | null>(null);
  const progressRef = useRef<SVGCircleElement | null>(null);
  const circumference = 2 * Math.PI * 10.5;

  const animateProgress = useEffectEvent(() => {
    if (!progressRef.current) return;
    autoplayRef.current?.kill();

    gsap.set(progressRef.current, { strokeDashoffset: circumference });
    autoplayRef.current = gsap.to(progressRef.current, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "none",
      onComplete: () => onCompleteCallback(),
    });
  });

  useEffect(() => {
    animateProgress();
    return () => {
      autoplayRef.current?.kill();
    };
  }, [currentSlide]);

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

      <span className="text-[#F8F6F2] font-[GT_America_Trial] text-[16px] font-normal leading-[140%] tracking-[-0.16px]">
        {currentSlide + 1} / {slidesLength}
      </span>
    </div>
  );
};
