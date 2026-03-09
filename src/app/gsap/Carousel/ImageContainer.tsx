import Image from "next/image";
import { tSlide } from "./slides";

type tProps = { slide: tSlide };

export const ImageContainer = ({ slide }: tProps) => {
  return (
    <Image
      data-img
      src={slide.image}
      alt={slide.name}
      width={665}
      height={532}
      className="rounded-lg object-cover"
    />
  );
};
