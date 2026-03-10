import Image from "next/image";
import { tSlide } from "./slides";

type tProps = { slide: tSlide };

export const ImageContainer = ({ slide }: tProps) => {
  return (
    <div className="relative w-full aspect-[665/532]">
      <Image
        data-img
        src={slide.image}
        alt={slide.name}
        fill
        className="rounded-lg object-cover"
      />
    </div>
  );
};
