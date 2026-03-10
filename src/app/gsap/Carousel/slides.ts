export type tSlide = {
  quote: string;
  name: string;
  detail: string;
  image: string;
};

export const slides: Array<tSlide> = [
  {
    quote:
      "These sensors are excellent because it allows me to make instant decisions about what I'm going to do when it comes to healthy choices.",
    name: "Felix M.",
    detail: "42, Type 2 Diabetes Patient",
    image: "/images/testimonial-1.png",
  },
  {
    quote:
      "I finally feel in control of my glucose levels. The data is so clear and actionable every single day.",
    name: "Sarah K.",
    detail: "35, Pre-diabetic",
    image: "https://picsum.photos/seed/slide2/665/532",
  },
  {
    quote:
      "Wearing the sensor is effortless. I forget it's there, but the insights have completely changed how I eat.",
    name: "James R.",
    detail: "51, Type 2 Diabetes Patient",
    image: "https://picsum.photos/seed/slide3/665/532",
  },
  {
    quote:
      "My doctor was amazed at how much my A1C improved since I started tracking with Stelo.",
    name: "Maria L.",
    detail: "29, Wellness Enthusiast",
    image: "https://picsum.photos/seed/slide4/665/532",
  },
];
