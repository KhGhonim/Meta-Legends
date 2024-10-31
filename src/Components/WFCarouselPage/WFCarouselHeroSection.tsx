import WaterWave from "react-water-wave";
import image from "../../assets/wf.png";
import WFCarouselSlider from "./WFCarouselSlider/WFCarouselSlider";

export default function WFCarouselHeroSection() {
  return (
    <div>
      <WaterWave
        imageUrl={image as string}
        className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0 z-10"
      >
        {() => (
          <div className="w-full h-full py-0  md:py-48 lg:py-44 px-3 flex flex-col md:flex-row container mx-auto">
            <div className="w-full md:w-1/3 h-full flex flex-col justify-center items-center py-8 px-5 space-y-5">
              <div className="relative ">
                <h1 className="text-4xl z-10 md:text-6xl lg:text-7xl font-bold ">
                  Meta Legends
                </h1>
                <h1 className="absolute  inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
                  Meta Legends
                </h1>
              </div>

              <p className="text-sm md:text-base text-[#eeed] font-bold z-10">
                Meta Legends represent a collection of 17,000 legends
                categorized by level of rarity and generated with hundreds of
                elements. The Legends are stored as ERC-721 tokens on the
                Ethereum blockchain and hosted on IPFS.
              </p>

              <button className="CTSButton little z-10 transition-all duration-300  hover:shadow-custom text-white font-extralight py-3 px-12 rounded">
                Buy Now
              </button>
            </div>
            <div className="w-full md:w-2/3 h-full  flex  justify-center ">
              <WFCarouselSlider />
            </div>

            <div className="absolute inset-0 bg-[#261E2D]/40"></div>
          </div>
        )}
      </WaterWave>
    </div>
  );
}
