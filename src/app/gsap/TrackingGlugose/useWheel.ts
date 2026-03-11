import { useEffect, useEffectEvent } from "react";

type UseWheelOptions = {
  target: React.RefObject<HTMLElement | null>;
  onUp: () => void;
  onDown: () => void;
};

export const useWheel = ({ target, onUp, onDown }: UseWheelOptions) => {
  const onWheel = useEffectEvent((deltaY: number) => {
    if (deltaY > 0) onDown();
    else if (deltaY < 0) onUp();
  });

  useEffect(() => {
    const el = target.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      onWheel(e.deltaY);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [target]);
};
