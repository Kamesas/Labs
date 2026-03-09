import { tSlide } from "./slides";

type tProps = { slide: tSlide };

export const QuoteContainer = ({ slide }: tProps) => {
  return (
    <div>
      <div style={{ color: "#d4a574", fontSize: "3rem", lineHeight: 1 }}>
        &ldquo;
      </div>
      <p
        data-quote
        style={{
          fontSize: "1.5rem",
          lineHeight: 1.4,
          fontStyle: "italic",
          margin: "1rem 0 2rem",
        }}
      >
        {slide.quote}
      </p>
      <p data-name style={{ fontWeight: 700, margin: 0 }}>
        {slide.name}
      </p>
      <p data-detail style={{ opacity: 0.6, margin: "0.25rem 0 0" }}>
        {slide.detail}
      </p>
    </div>
  );
};
