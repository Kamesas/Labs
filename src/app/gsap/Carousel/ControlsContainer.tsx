type tProps = { goTo: (direction: "next" | "prev" | number) => void };

const ArrowIcon = ({ direction }: { direction: "prev" | "next" }) => {
  const isNext = direction === "next";

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={`w-10 h-10 lg:w-12 lg:h-12 ${isNext ? "" : "rotate-180"}`}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="24" className="fill-surface-light" />
      <path
        d="M33.125 24C30.6029 22.5 28.5743 21.0426 26.5 18H29C30 20 31.5 21.5 34 23L33.125 24Z"
        className="fill-surface-dark"
      />
      <path
        d="M33.125 24C30.6029 25.5 28.5743 26.9574 26.5 30H29C30 28 31.5 26.5 34 25L33.125 24Z"
        className="fill-surface-dark"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 23L14 23L14 25L34 24.9999L34 23Z"
        className="fill-surface-dark"
      />
    </svg>
  );
};

export const ControlsContainer = ({ goTo }: tProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => goTo("prev")}
        className="flex items-center justify-center cursor-pointer opacity-20 hover:opacity-100 transition-opacity"
      >
        <ArrowIcon direction="prev" />
      </button>

      <button
        onClick={() => goTo("next")}
        className="flex items-center justify-center cursor-pointer opacity-20 hover:opacity-100 transition-opacity"
      >
        <ArrowIcon direction="next" />
      </button>
    </div>
  );
};
