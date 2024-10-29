import Photo from "../../../assets/MiniSection/11.jpg";
export default function CrouselCard() {
  return (
    <div className="w-full h-full md:h-dvh mt-12 md:mt:16 lg:mt-24">
      <div className="w-full h-full container mx-auto p-3">
        <div className="w-full h-full md:h-4/6 flex flex-col md:flex-row items-center gap-5 md:gap-1 justify-center">
          <div className="w-full h-full md:w-1/2 py-24 max-md:rounded-md md:rounded-tl-3xl md:rounded-bl-3xl px-8 md:px-14  bg-[#261E2D]/40 text-[#dddd] relative">
            <div className="relative mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                Meta Legends
              </h1>
              <h1 className="absolute inset-0 text-4xl md:text-5xl lg:text-7xl font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
                Meta Legends
              </h1>
            </div>
            <div>
              <div className="w-44 h-[3px] bg-[#dddd] relative ">
                <span className="w-1/5 bg-[#dddd] absolute h-1/2  left-1/4 rotate-45"></span>
                <span className="w-1/5  bg-[#dddd] absolute h-1/2  left-1/3 rotate-45"></span>
              </div>
            </div>

            <div className="flex flex-col gap-5 my-10 text-[#dddddd81]">
              <p className="text-base md:text-xl">
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>

              <p className="text-base md:text-xl">
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
            </div>
          </div>
          <div className="w-full h-full md:w-1/2">
            <div className="w-full h-full max-md:rounded-md md:rounded-r-3xl md:rounded-br-3xl little CTSButton !bg-transparent ">
              <img
                src={Photo}
                alt=""
                className="w-full h-full object-cover  p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
