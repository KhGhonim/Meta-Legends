import mask from "../../../assets/Meta/mask.png";
export default function OrginizationHeroSection() {
  return (
    <div className="w-full h-full flex flex-col mb-10 lg:flex-row lg:py-20">
      <div className="w-full lg:w-1/2  lg:my-60">
        <div className="relative text-center ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            Meta Legends
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Meta Legends
          </h1>
        </div>
        <p className="text-xs md:text-sm text-[#eeed] font-bold text-center mt-9">
          Discover the latest blog posts and tutorials on the Metaverse
        </p>
        <p className="text-xs md:text-sm text-[#eeed] font-extrabold text-center">
          Your journey begins now.
        </p>
      </div>
      <div className="w-full lg:w-1/2 z-30  lg:h-3/4  ">
        <img
          src={mask}
          className="w-full h-full object-cover"
          alt="Meta Mask"
          loading="lazy"
        />
      </div>
    </div>
  );
}
