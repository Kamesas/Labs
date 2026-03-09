import { tSlide } from "./slides";

type tProps = { slide: tSlide };

export const ImageContainer = ({ slide }: tProps) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-img
        src={slide.image}
        alt={slide.name}
        style={{
          width: "100%",
          borderRadius: "0.5rem",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
      />
    </div>
  );
};
