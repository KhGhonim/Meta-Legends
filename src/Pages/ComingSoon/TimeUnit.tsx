import CountUp, { useCountUp } from "react-countup";

interface TimeUnitProps {
  value: number;
  label: string;
}

export default function TimeUnit({ value, label }: TimeUnitProps) {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  return (
    <div className="flex flex-col gap-2 text-center text-[#ddd]">
      <div
        className="text-5xl font-bold text-[#160f1a] drop-shadow-custom w-28 h-28 z-10 overflow-hidden text-center rounded-lg py-7 transition-all duration-500 ease-in-out transform backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-[#dddd] shadow-2xl"
        style={{
          background: "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
          WebkitBackgroundClip: "text",
          WebkitTextStroke: "4px transparent",
        }}
      >
        {label === "Seconds" ? (
          value
        ) : (
          <CountUp end={value} enableScrollSpy scrollSpyOnce />
        )}
      </div>
      <h1>{label}</h1>
    </div>
  );
}
