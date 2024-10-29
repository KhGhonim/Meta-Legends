import Stars from "../../../assets/Stars.mp4";
import Carousel from "./Carousel";

export default function ThreeDCrouselHeroSection() {
  return (
    <div className="w-screen h-[80dvh] relative ">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Stars} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 pt-20 flex flex-col justify-center items-center text-white h-full">
        {/* Title */}
        <div className="relative mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Meta Legends
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Meta Legends
          </h1>
        </div>

        {/* Carousel */}
        <Carousel />
      </div>
    </div>
  );
}
