import { useState } from "react";
import YouTube from "react-youtube";
import { VscDebugStart } from "react-icons/vsc";
import YTCover from "../../../assets/MiniSection/YTCover.jpg";
import MintCard from "./MintCard";

export default function HowToMint() {
  const [IsVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);
  const [hovered, setHovered] = useState(false);
  const circleRadius = 90;
  const circumference = 2 * Math.PI * circleRadius;
  const videoId = "ejch3nDMI5k";

  return (
    <div className="w-full h-full relative  flex flex-col lg:flex-row justify-center items-center gap-10  lg:justify-between">
      <div className="w-full lg:w-2/5 h-full">
        <div className="w-full h-full px-5 lg:px-10 space-y-6">
          <div className="relative mb-3 ">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              How to Mint
            </h1>
            <h1 className="absolute inset-0 text-xl md:text-3xl z-40  lg:text-5xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
              How to Mint
            </h1>
          </div>
          <div className="w-32 h-0.5 bg-[#dddddd6d] relative ">
            <span className="w-1/5 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
            <span className="w-1/5  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
          </div>
          <p className="text-base text-[#dddddd]">
            As the first hero of the Meta Legends, collection has over 9,999
            unique skins drawn from the different missions and challenges he
            faced throughout his life.
          </p>
          <p className="text-base text-[#dddddd]">
            The artwork has been hand-drawned by Robert Green in the traditional
            anime style and composited by Layla Efiyo.
          </p>
          <p className="text-base text-[#dddddd]">
            Curabitur pharetra velit eget dignissim varius. In vulputate elit at
            tortor pellentesque, non pulvinar neque consequat. Aenean tristique
            odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut
            blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum
            elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus
            sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat.
            Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed
            porta lorem eget neque bibendum, eget euismod justo mollis.
          </p>
          <p className="text-base text-[#dddddd]">
            Donec tristique porttitor sem, eget fermentum elit varius nec. Donec
            ut orci ipsum. Morbi efficitur felis eget dapibus fermentum.
            Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin
            neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue
            odio commodo at. Cras ante enim, sodales at pretium et, tempus at
            libero.
          </p>
          <div className="w-full flex justify-center mt-5 items-center">
            <button className="CTSButton little hover:shadow-custom text-white font-extralight py-3 px-10 rounded">
              How to Mint
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 h-full flex flex-col">
        <div className="w-full h-full bg-transparent flex gap-5 justify-center items-center  flex-wrap">
          <MintCard
            name="Connect your Wallet"
            number={1}
          />
          <MintCard
            name="Select Your Quantity"
            number={2}
          />
          <MintCard
            name="Confirm The Transaction"
            number={3}
          />
          <MintCard
            name="Receive Your NFT’s"
            number={4}
          />
        </div>

        <div className="relative w-full max-w-2xl aspect-video max-md:mb-32 mt-10 mx-auto">
          {!IsVideoPlayed ? (
            <div className="relative w-full h-full">
              <img
                src={YTCover}
                alt="YouTube Cover"
                className="w-full h-full"
              />
              <div
                onClick={() => setIsVideoPlayed(true)}
                className="absolute inset-0 flex justify-center items-center cursor-pointer"
              >
                {/* SVG Circle for Border */}
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  className="absolute"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r={circleRadius}
                    stroke="gray"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={hovered ? circumference : 0}
                    style={{
                      transition: "stroke-dashoffset 1s ease",
                    }}
                  />
                </svg>

                {/* Icon */}
                <VscDebugStart className="text-[150px] text-gray-500 " />
              </div>
            </div>
          ) : (
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  modestbranding: 1,
                  rel: 1,
                  showinfo: 1,
                },
              }}
              className="absolute top-0 left-0 w-full h-full"
              onPlay={() => setIsVideoPlayed(true)}
              onPause={() => setIsVideoPlayed(false)}
              onEnd={() => setIsVideoPlayed(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
