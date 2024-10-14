import Slider from "./Slider";

export default function RoadMap() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 ">
      <div className="container mx-auto  pb-20 text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            ROADMAP
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            ROADMAP
          </h1>
        </div>
      </div>

      <Slider />
    </div>
  );
}
