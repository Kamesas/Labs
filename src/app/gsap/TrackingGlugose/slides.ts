export const CARD_HEIGHT = 570;
export const CARD_GAP = 24;
export const CARD_STEP = CARD_HEIGHT + CARD_GAP;

export type tSlideMetric = {
  value: string;
  unit: string;
  label: string;
};

export type tTrackingSlide = {
  number: string;
  title: string;
  description: string;
  image: string;
  metric: tSlideMetric;
  chart: string;
};

export const slides: Array<tTrackingSlide> = [
  {
    number: "01",
    title: "Sleep more soundly",
    description:
      "Stable glucose supports better sleep, and better sleep helps regulate glucose the next day. When sleep is disrupted, glucose can become harder to manage.",
    image: "/images/tracking-glucose/sleep-bg.png",
    metric: { value: "120", unit: "mg/dl", label: "Waking\nGlucose" },
    chart: "/images/tracking-glucose/chart-sleep.svg",
  },
  {
    number: "02",
    title: "Personalize your nutrition",
    description:
      "Tracking glucose shows how specific food, portion, and meal timing affects your energy, improving glucose stability over time.",
    image: "/images/tracking-glucose/nutrition-bg.png",
    metric: { value: "95", unit: "mg/dl", label: "Post-meal\nGlucose" },
    chart: "/images/tracking-glucose/chart-sleep.svg",
  },
  {
    number: "03",
    title: "Tailor your movement",
    description:
      "Physical activity is key to how your body processes glucose. Tracking daily movement helps you monitor changes over time.",
    image: "/images/tracking-glucose/exercise-bg.png",
    metric: { value: "88", unit: "mg/dl", label: "Active\nGlucose" },
    chart: "/images/tracking-glucose/chart-sleep.svg",
  },
  {
    number: "04",
    title: "Manage stress",
    description:
      "High stress releases hormones that raise glucose levels. Tracking glucose can help you improve overall recovery and balance.",
    image: "/images/tracking-glucose/stress-bg.png",
    metric: { value: "110", unit: "mg/dl", label: "Resting\nGlucose" },
    chart: "/images/tracking-glucose/chart-sleep.svg",
  },
];
