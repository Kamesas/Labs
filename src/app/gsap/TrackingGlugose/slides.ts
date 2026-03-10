export const CARD_HEIGHT = 570;
export const CARD_GAP = 24;
export const CARD_STEP = CARD_HEIGHT + CARD_GAP;

export type tTrackingSlide = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const slides: Array<tTrackingSlide> = [
  {
    number: "01",
    title: "Sleep more soundly",
    description:
      "Stable glucose supports better sleep, and better sleep helps regulate glucose the next day. When sleep is disrupted, glucose can become harder to manage.",
    image: "/images/tracking-glucose/sleep-bg.png",
  },
  {
    number: "02",
    title: "Personalize your nutrition",
    description:
      "Tracking glucose shows how specific food, portion, and meal timing affects your energy, improving glucose stability over time.",
    image: "/images/tracking-glucose/nutrition-bg.png",
  },
  {
    number: "03",
    title: "Tailor your movement",
    description:
      "Physical activity is key to how your body processes glucose. Tracking daily movement helps you monitor changes over time.",
    image: "/images/tracking-glucose/exercise-bg.png",
  },
  {
    number: "04",
    title: "Manage stress",
    description:
      "High stress releases hormones that raise glucose levels. Tracking glucose can help you improve overall recovery and balance.",
    image: "/images/tracking-glucose/stress-bg.png",
  },
];
