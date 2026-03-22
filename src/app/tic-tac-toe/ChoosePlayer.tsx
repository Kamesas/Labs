import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { tPlayer } from "./types";
import { useRef } from "react";

type tProps = {
  onChangePlayer: (player: tPlayer) => void;
};

export const ChoosePlayer = ({ onChangePlayer }: tProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      sectionRef.current,
      { clipPath: "inset(0 100% 100% 0)" }, // hidden from bottom-right
      { clipPath: "inset(0 0% 0% 0)", duration: 0.6 }, // reveal fully
    );

    tl.to(sectionRef.current, { padding: 32, delay: 0.5 });

    const children = Array.from(sectionRef.current?.children || []);
    const title = children[0];
    const choice = children[1];

    tl.from(title, { opacity: 0, y: -100 });
    tl.from(choice, { opacity: 0, y: 100 });
  });

  return (
    <div
      ref={sectionRef}
      className="shadow-accent-coral flex flex-col gap-3 border max-w-[320px] rounded-2xl m-auto"
    >
      <div className="text-3xl text-orange-400 text-center">
        Choose the player{" "}
      </div>

      <div className="flex gap-3 justify-center">
        <div
          onClick={() => onChangePlayer("x")}
          className="uppercase font-bold cursor-pointer"
        >
          x
        </div>
        or
        <div
          onClick={() => onChangePlayer("o")}
          className="uppercase font-bold cursor-pointer"
        >
          o
        </div>
      </div>
    </div>
  );
};
