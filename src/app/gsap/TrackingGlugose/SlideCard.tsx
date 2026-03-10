import Image from "next/image";
import { CARD_HEIGHT, tTrackingSlide } from "./slides";

type SlideCardProps = {
  slide: tTrackingSlide;
  active?: boolean;
  onClick: () => void;
};

export const SlideCard = ({ slide, active = false, onClick }: SlideCardProps) => {
  return (
    <div
      onClick={onClick}
        className="
          grid grid-rows-[282px_1fr] justify-items-center gap-8 p-4
          w-[410px]
          rounded-3xl overflow-hidden cursor-pointer
          backdrop-blur-[200px]
          border border-white/20
        "
        style={{
          height: CARD_HEIGHT,
          backgroundColor: active ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)",
        }}
      >
        <div className="relative w-[376px] rounded-lg overflow-hidden">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="376px"
          />
        </div>

        <div className="grid grid-rows-[auto_1fr_auto] gap-6 self-stretch">
          <h3 className="font-heading text-[28px] leading-[1.1] text-white">
            {slide.title}
          </h3>
          <p className="font-heading text-[16px] leading-normal tracking-[-0.01em] text-white/80 line-clamp-3">
            {slide.description}
          </p>
          <span className="justify-self-start inline-flex items-center px-8 py-4 rounded-full bg-black/20 font-heading text-[16px] leading-[1.2] tracking-[-0.01em] text-white">
            Learn more
          </span>
        </div>
      </div>
  );
};
