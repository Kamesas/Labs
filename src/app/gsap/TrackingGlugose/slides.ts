export type tTrackingSlide = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export const slides: Array<tTrackingSlide> = [
  {
    number: "01",
    title: "Sleep",
    subtitle: "Glucose and sleep influence each other",
    description:
      "Disrupted sleep makes glucose harder to manage. Tracking helps you see how sleep quality affects your feelings and functioning. Read more about sleep here.",
    image: "/images/tracking-glucose/sleep-bg.png",
  },
  {
    number: "02",
    title: "Nutrition",
    subtitle:
      "What you eat\u2014and when you eat\u2014shapes your glucose response.",
    description:
      "Tracking glucose shows how specific food, portion, and meal timing affects your energy, improving glucose stability over time. Read more about nutrition here.",
    image: "/images/tracking-glucose/nutrition-bg.png",
  },
  {
    number: "03",
    title: "Exercise",
    subtitle: "Daily movement helps your body use glucose more efficiently.",
    description:
      "Physical activity is key to how your body processes glucose. Tracking daily movement helps you monitor changes over time. Read more about exercise here.",
    image: "/images/tracking-glucose/exercise-bg.png",
  },
  {
    number: "04",
    title: "Stress",
    subtitle: "Stress can raise glucose\u2014even without food.",
    description:
      "High stress releases hormones that raise glucose levels. Tracking glucose can help you improve overall recovery and balance. Read more about stress here.",
    image: "/images/tracking-glucose/stress-bg.png",
  },
];
