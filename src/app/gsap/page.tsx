import { TrackingGlukose } from "@/app/gsap/TrackingGlugose/TrackingGlukose";
import { Carousel } from "./Carousel/Carousel";

export default function GSAPpage() {
  return (
    <div>
      <div className="bg-white">
        <TrackingGlukose />
      </div>

      <div className="bg-[#291928]">
        <Carousel />
      </div>
    </div>
  );
}
