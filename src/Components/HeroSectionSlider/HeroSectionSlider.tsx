import DesktopSlider from "./DesktopSlider/DesktopSlider";
import PhoneSlider from "./PhoneSlider/PhoneSlider";

export default function HeroSectionSlider() {
  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Hero Section For Phone */}
      <PhoneSlider />

      {/* Hero Section For Desktop */}
      <DesktopSlider />

      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-center max-w-3xl mx-auto pb-10 text-lg md:text-xl font-medium text-[#9ba0b8]">
          {" "}
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </h1>

        <button className="CTSButton little transition-all duration-300  hover:shadow-custom text-white font-extralight py-3 px-12 rounded">Buy Now</button>
      </div>
    </div>
  );
}
