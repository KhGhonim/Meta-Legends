import MintCard from "../../../Components/HomePage/HowToMint/MintCard";

export default function CrouselNumAndCommunity() {
  return (
    <div className="w-full h-full flex flex-col gap-8 container mx-auto ">
      <div className="w-full h-full flex flex-col md:flex-row items-center  mb-6 gap-5">
        <MintCard name="Connect your Wallet" number={1} />
        <MintCard name="Select Your Quantity" number={2} />
        <MintCard name="Confirm The Transaction" number={3} />
        <MintCard name="Receive Your NFT’s" number={4} />
      </div>
      <div className="w-full h-[28rem] rounded-3xl py-24 px-2 mb-5 bg-[#261E2D]/35 text-center flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
            Join Our Community
          </h1>
          <h1 className="absolute inset-0 text-2xl md:text-3xl z-40  lg:text-5xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Join Our Community
          </h1>
        </div>

        <p className="text-[#dddd] text-xl mt-5 max-w-4xl mx-auto">
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <div className="max-md:flex max-md:flex-col  space-y-5 lg:space-x-5 mt-10 w-full">
          <button className="CTSButton little transition-all duration-300  hover:shadow-custom text-white font-extralight py-3 px-12 rounded">
            Buy Now
          </button>
          <button className="CTSButton little transition-all duration-300  hover:shadow-custom text-white font-extralight py-3 px-12 rounded">
            WhitList Now
          </button>
        </div>
      </div>
    </div>
  );
}
