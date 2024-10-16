import CountUp, { useCountUp } from "react-countup";

export default function MintCard({
  name,
  number,
}: {
  name: string;
  number: number;
}) {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div className="w-96 h-56 p-4 rounded-2xl border-[1px] border-gray-600 shadow-2xl">
      <div className="flex flex-col bg-gray-700 bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer hover:drop-shadow-2xl items-center justify-center text-center transition-all duration-300 p-10 rounded-2xl w-full h-full">
        <div
          className="text-5xl text-center font-bold text-[#160f1a] drop-shadow-custom"
          style={{
            background: "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "4px transparent",
          }}
        >
          0<CountUp end={number} enableScrollSpy scrollSpyOnce />
        </div>
        <div className="text-base text-center text-[#ffffff80]">{name}</div>
      </div>
    </div>
  );
}
