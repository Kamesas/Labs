import { tSlideMetric } from "./slides";

type SlideInfoProps = {
  metric: tSlideMetric;
};

export const SlideInfo = ({ metric }: SlideInfoProps) => {
  return (
    <div className="flex items-center gap-[52px]">
      <div className="flex gap-1.5">
        <span className="font-heading text-[51px] leading-[1.4] tracking-[-0.02em] text-surface-light">
          {metric.value}
        </span>
        <span className="font-heading text-[13px] leading-[1.4] text-surface-light">
          {metric.unit}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-heading text-lg leading-[1.2] tracking-[-0.02em] text-white whitespace-pre-line w-20">
          {metric.label}
        </span>
        <svg
          width="17"
          height="16"
          viewBox="0 0 19 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9.12291 0.878464L17.2392 8.9948L9.1229 17.1111"
            stroke="currentColor"
            strokeWidth="2.458"
          />
          <path
            d="M17.2382 9.08933L0 9.08933"
            stroke="currentColor"
            strokeWidth="2.458"
          />
        </svg>
      </div>
    </div>
  );
};
