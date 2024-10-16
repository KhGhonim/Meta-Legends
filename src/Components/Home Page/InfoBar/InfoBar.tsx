import CountUp, { useCountUp } from "react-countup";

export default function InfoBar() {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div className="h-dvh lg:h-60 w-full bg-black bg-opacity-15  border-t-[1px] shadow-2xl border-[#ffffff1a] border-b-[1px] my-20">
      <div className="h-full w-full flex flex-col lg:flex-row justify-around lg:justify-between text-center items-center lg:py-20 lg:px-60 ">
        <div className="flex flex-col">
          <div
            className="text-5xl font-bold text-[#160f1a] drop-shadow-custom"
            style={{
              background:
                "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
            }}
          >
            <CountUp end={999} enableScrollSpy scrollSpyOnce />
          </div>
          <div className="text-base text-[#ffffff80]">Total Items</div>
        </div>

        <span className="w-32 h-0.5 bg-[#dddddd6d] relative ">
          <span className="w-1/5 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
          <span className="w-1/5  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
        </span>

        <div className="flex flex-col">
          <div
            className="text-5xl font-bold text-[#160f1a] drop-shadow-custom"
            style={{
              background:
                "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
            }}
          >
            <CountUp end={39} enableScrollSpy scrollSpyOnce />+
          </div>
          <div className="text-base text-[#ffffff80]">Total Owners</div>
        </div>

        <span className="w-32 h-0.5 bg-[#dddddd6d] relative ">
          <span className="w-1/5 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
          <span className="w-1/5  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
        </span>

        <div className="flex flex-col">
          <div
            className="text-5xl font-bold text-[#160f1a] drop-shadow-custom"
            style={{
              background:
                "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
            }}
          >
            <CountUp end={2} enableScrollSpy scrollSpyOnce />
          </div>
          <div className="text-base text-[#ffffff80]">Floor Price (ETH)</div>
        </div>

        <span className="w-32 h-0.5 bg-[#dddddd6d] relative ">
          <span className="w-1/5 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
          <span className="w-1/5  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
        </span>

        <div className="flex flex-col">
          <div
            className="text-5xl font-bold text-[#160f1a] drop-shadow-custom"
            style={{
              background:
                "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
            }}
          >
            <CountUp end={144} enableScrollSpy scrollSpyOnce />+
          </div>

          <div className="text-base text-[#ffffff80]">Volume Traded (ETH)</div>
        </div>
      </div>
    </div>
  );
}
