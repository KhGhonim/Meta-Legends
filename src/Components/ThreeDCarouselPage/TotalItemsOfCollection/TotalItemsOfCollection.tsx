import CountUp, { useCountUp } from "react-countup";

export default function TotalItemsOfCollection() {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div
        className="text-6xl md:text-8xl max-md:pt-10 lg:text-9xl font-bold text-[#160f1a] pb-5 drop-shadow-custom"
        style={{
          background: "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
          WebkitBackgroundClip: "text",
          WebkitTextStroke: "10px transparent",
        }}
      >
        <CountUp end={10000} enableScrollSpy scrollSpyOnce />
      </div>
      <h1 className="text-3xl text-[#ffffff80]">Total Items in Collection</h1>
      <p className="text-xl text-[#ffffff80] max-w-4xl">
        There are many variations of passages of lorem ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
    </div>
  );
}
