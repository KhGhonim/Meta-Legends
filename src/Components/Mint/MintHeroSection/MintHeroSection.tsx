import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { SiOpensea, SiOpensearch } from "react-icons/si";
import {
  GiHeron,
  GiNinjaHeroicStance,
  GiSupersonicArrow,
} from "react-icons/gi";

import SecoundHeroSectionPhoto from "../../../assets/MiniSection/SecoundHeroSectionPhoto.jpg";
import { Link } from "react-router-dom";

export default function MintHeroSection() {
  return (
    <div className="w-full h-full pt-20 flex flex-col lg:flex-row  lg:justify-around">
      <div className="w-full lg:w-3/5 max-md:p-2 md:py-10 md:px-20 h-full relative z-10">
        <div className="w-full  h-full z-10 overflow-hidden  rounded-3xl p-5 transition-all duration-500 ease-in-out transform  backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-[#dddd] shadow-2xl">
          <img
            src={SecoundHeroSectionPhoto}
            className="w-full h-full object-cover rounded-md"
            alt=""
          />
        </div>
      </div>

      <div className="w-full lg:w-2/4 h-full pt-20 max-md:px-5 md:px-10 space-y-5 flex flex-col z-10">
        <div className="w-full flex flex-row items-center space-x-5">
          <h1 className="text-xs md:text-sm lg:text-lg text-[#dddd] font-bold">
            Share some mint via:
          </h1>
          <FaTwitter className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
          <FaFacebook className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
          <FaInstagram className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
          <FaLinkedin className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
          <FaPinterestP className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
          <FaBehance className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer" />
        </div>

        <div className="w-full flex flex-row text-[#dddd] space-x-3">
          <Link to="/">Home</Link> <span>/</span>{" "}
          <Link to="/collection">Collection</Link> <span>/</span>
          <div className="text-[#dddd] hover:text-[#7000ff] transition-all duration-300 cursor-pointer">
            Meta Legends #5675
          </div>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            Meta Legends
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Meta Legends
          </h1>
        </div>

        <h6 className="text-[#dddd] mb-5 text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          tenetur, totam sunt quae quia ea voluptates corrupti libero quasi hic
          illo nemo explicabo non sit et excepturi, fuga voluptatem vel neque
          cum maiores. Consectetur, doloribus.
        </h6>
        <h6 className="text-[#dddd] mb-5 text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero libero
          alias natus voluptates illum dolore veritatis quia iusto eveniet esse.
        </h6>

        <div className="w-full flex items-center space-x-5 text-[#dddd]">
          <h1>View On:</h1>
          <div className="text-[#dddd] text-4xl CTSButton rounded-full hover:scale-110 transition-all duration-500 cursor-pointer">
            <SiOpensea />
          </div>
          <div className="text-[#dddd] text-4xl CTSButton rounded-full hover:scale-110 transition-all duration-500 cursor-pointer">
            <SiOpensearch />
          </div>
          <div className="text-[#dddd] text-4xl CTSButton rounded-full hover:scale-110 transition-all duration-500 cursor-pointer">
            <GiSupersonicArrow />
          </div>
          <div className="text-[#dddd] text-4xl CTSButton rounded-full hover:scale-110 transition-all duration-500 cursor-pointer">
            <GiHeron />
          </div>
          <div className="text-[#dddd] text-4xl CTSButton rounded-full hover:scale-110 transition-all duration-500 cursor-pointer">
            <GiNinjaHeroicStance />
          </div>
        </div>
      </div>
    </div>
  );
}
