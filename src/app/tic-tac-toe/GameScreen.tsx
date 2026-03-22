import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { tPlayer } from "./types";

type tProps = {
  player: tPlayer;
  onReset: () => void;
  children: ReactNode;
};

export const GameScreen = ({ onReset, player, children }: tProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const resetBtnRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      sectionRef.current,
      { clipPath: "inset(0 100% 100% 0)" }, // hidden from bottom-right
      { clipPath: "inset(0 0% 0% 0)", duration: 0.6 }, // reveal fully
    );

    tl.to(sectionRef.current, { padding: 32 });

    tl.fromTo(titleRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });

    tl.fromTo(childrenRef.current, { opacity: 0 }, { opacity: 1 });

    tl.fromTo(
      resetBtnRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
    );
  });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center gap-4 max-w-[800px] m-auto border border-white rounded-3xl"
    >
      <h2 ref={titleRef} className="text-orange-400 py-1.5">
        Current player is: <span className="uppercase font-bold">{player}</span>
      </h2>

      <div ref={childrenRef}>{children}</div>

      <button ref={resetBtnRef} onClick={onReset}>
        Reset the game
      </button>
    </div>
  );
};
