import { useEffect, useEffectEvent } from "react";

type UseAutoplayOptions = {
  target: React.RefObject<HTMLElement | null>;
  interval?: number;
  threshold?: number;
  onTick: () => void;
};

export const useAutoplay = ({
  target,
  interval = 4000,
  threshold = 0.4,
  onTick,
}: UseAutoplayOptions) => {
  const onAutoplay = useEffectEvent(onTick);

  useEffect(() => {
    const el = target.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(onAutoplay, interval);
        } else {
          clearInterval(timer);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [target, interval, threshold]);
};
