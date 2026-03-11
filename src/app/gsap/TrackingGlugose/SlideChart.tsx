import Image from "next/image";

type SlideChartProps = {
  src: string;
  alt: string;
};

export const SlideChart = ({ src, alt }: SlideChartProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={280}
      height={242}
      className="w-[280px] min-w-[280px] h-[242px]"
    />
  );
};
