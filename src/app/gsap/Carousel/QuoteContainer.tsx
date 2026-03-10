import { tSlide } from "./slides";

type tProps = { slide: tSlide };

export const QuoteContainer = ({ slide }: tProps) => {
  return (
    <div className="text-accent-gold">
      <svg
        width="53"
        height="41"
        viewBox="0 0 53 41"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24.0413 -0.000235908V0.890198C12.2876 5.34238 6.05453 12.4659 6.41071 21.9045C6.94497 21.5483 8.90392 21.3702 10.5067 21.3702C16.0274 21.3702 19.0549 25.4662 19.0549 30.6307C19.0549 36.1514 14.7808 40.4255 9.79436 40.4255C4.27366 40.4255 -0.000425558 36.1514 -0.000425558 28.3156C-0.000425558 11.2192 10.1505 0.355944 24.0413 -0.000235908ZM52.3571 -0.000235908V0.890198C40.6034 5.34238 34.3704 12.4659 34.7265 21.9045C35.2608 21.5483 37.2197 21.3702 38.8225 21.3702C44.3432 21.3702 47.3707 25.4662 47.3707 30.6307C47.3707 36.1514 43.0966 40.4255 38.1102 40.4255C32.5895 40.4255 28.3154 36.1514 28.3154 28.3156C28.3154 11.2192 38.4664 0.355944 52.3571 -0.000235908Z"
          fill="currentColor"
        />
      </svg>

      <div className="flex flex-col gap-8 mt-8">
        <p
          data-quote
          className="text-surface-light font-heading text-[40px] font-normal leading-[1.3em] tracking-[-1%]"
        >
          {slide.quote}
        </p>

        <div className="flex flex-col gap-1">
          <p
            data-name
            className="text-surface-light font-heading text-[20px] font-medium leading-[1.2em] tracking-[-1%]"
          >
            {slide.name}
          </p>
          <p
            data-detail
            className="text-surface-light font-heading text-[20px] font-normal leading-[1.2em] tracking-[-1%] opacity-80"
          >
            {slide.detail}
          </p>
        </div>
      </div>
    </div>
  );
};
