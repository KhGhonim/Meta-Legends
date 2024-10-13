import { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import YouTube from "react-youtube";

export default function HowToMint() {
  const [IsVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);
  const videoId = "ug0L5S2Qzwg";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  return (
    <div className="w-full h-full relative pt-20 pb-20 lg:py-32 flex flex-col lg:flex-row justify-center items-center gap-10  lg:justify-between">
      <div className="w-full lg:w-2/5 h-full">
        <div className="w-full h-full px-5 space-y-6">
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
          <button className="CTSButton little hover:shadow-custom text-white font-extralight py-3 px-8 rounded">
            How to Mint
          </button>
        </div>
      </div>

      <div className="w-full lg:w-3/5 h-full flex flex-col">
        <div className="w-full h-full bg-transparent flex gap-5 justify-center items-center  flex-wrap">
          <div className="w-96 h-56 p-4 rounded-2xl border-[1px] border-gray-600 shadow-2xl">
            <div className="flex flex-col bg-gray-700 bg-opacity-20 p-10 rounded-2xl w-full h-full">
              <div
                className="text-5xl text-center font-bold text-[#160f1a] drop-shadow-custom"
                style={{
                  background:
                    "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "4px transparent",
                }}
              >
                <CountUp end={1} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-base text-center text-[#ffffff80]">
                Connect your Wallet
              </div>
            </div>
          </div>
          <div className="w-96 h-56 p-4 rounded-2xl border-[1px] border-gray-600 shadow-2xl">
            <div className="flex flex-col bg-gray-700 bg-opacity-20 p-10 rounded-2xl w-full h-full">
              <div
                className="text-5xl text-center font-bold text-[#160f1a] drop-shadow-custom"
                style={{
                  background:
                    "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "4px transparent",
                }}
              >
                <CountUp end={2} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-base text-center text-[#ffffff80]">
                Select Your Quantity
              </div>
            </div>
          </div>

          <div className="w-96 h-56 p-4 rounded-2xl border-[1px] border-gray-600 shadow-2xl">
            <div className="flex flex-col bg-gray-700 bg-opacity-20 p-10 rounded-2xl w-full h-full">
              <div
                className="text-5xl text-center font-bold text-[#160f1a] drop-shadow-custom"
                style={{
                  background:
                    "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "4px transparent",
                }}
              >
                <CountUp end={3} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-base text-center text-[#ffffff80]">
                Confirm The Transaction
              </div>
            </div>
          </div>
          <div className="w-96 h-56 p-4 rounded-2xl border-[1px] border-gray-600 shadow-2xl">
            <div className="flex flex-col bg-gray-700 bg-opacity-20 p-10 rounded-2xl w-full h-full">
              <div
                className="text-5xl text-center font-bold text-[#160f1a] drop-shadow-custom"
                style={{
                  background:
                    "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextStroke: "4px transparent",
                }}
              >
                <CountUp end={4} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-base text-center text-[#ffffff80]">
                Receive Your NFT’s
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[640px]  aspect-video mt-11 mx-auto">
          {!IsVideoPlayed && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute inset-0 bg-purple-500 rounded-full opacity-50 animate-ping"></div>
            </div>
          )}
          <YouTube
            videoId={videoId}
            opts={opts}
            className="absolute top-0 left-0 w-full h-full"
            onPlay={() => setIsVideoPlayed(true)}
            onPause={() => setIsVideoPlayed(false)}
            onEnd={() => setIsVideoPlayed(false)}
          />
        </div>
      </div>
    </div>
  );
}
