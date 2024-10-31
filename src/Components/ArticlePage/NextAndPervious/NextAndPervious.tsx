import { MdOutlineDialpad } from "react-icons/md";
import photo2 from "../../../assets/MiniSection/10.jpg";
import photo1 from "../../../assets/MiniSection/9.jpg";
import { Link } from "react-router-dom";
export default function NextAndPervious() {
  return (
    <div className="h-full lg:h-60 w-full container mx-auto bg-black bg-opacity-15 border-t-[1px] border-b-[1px] shadow-2xl border-[#ffffff1a] my-20">
      <div className="h-full w-full flex flex-col md:flex-row justify-between items-center text-center px-4 md:px-10 lg:px-20 py-10 md:py-14 space-y-6 md:space-y-0">
        {/* Left Side Content */}
        <Link
          to="/articles"
          className="flex items-center group space-x-4 w-full md:w-1/3 justify-start pl-4 transition-all duration-300 hover:pl-6"
        >
          <img
            src={photo1}
            alt="Next article"
            className="w-16 h-16 rounded-full transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="text-start flex-1">
            <p className="text-xs font-semibold text-[#dddd] group-hover:text-blue-500 transition-colors duration-300">
              Next Article
            </p>
            <h5 className="text-sm text-[#ffffff80] group-hover:text-blue-500 transition-colors duration-300 truncate overflow-hidden whitespace-nowrap max-w-[160px]">
              MetaPortal’s NFT Goes Public In Nod To Crypto Adoption.
            </h5>
          </div>
        </Link>

        {/* Dot Pattern Center Box */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#dddd] mx-6 bg-[radial-gradient(circle,_#ddd_1px,_transparent_1px)] bg-size[8px_8px]">
          <MdOutlineDialpad className="text-[#dddd] text-3xl" />
        </div>

        {/* Right Side Content */}
        <Link
          to="/articles"
          className="flex items-center group space-x-4 w-full md:w-1/3 justify-end pr-4 transition-all duration-300 hover:pr-6"
        >
          <img
            src={photo2}
            alt="Previous article"
            className="w-16 h-16 rounded-full transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="text-start flex-1">
            <p className="text-xs font-semibold text-[#dddd] group-hover:text-blue-500 transition-colors duration-300">
              Previous Article
            </p>
            <h5 className="text-sm text-[#ffffff80] group-hover:text-blue-500 transition-colors duration-300 truncate overflow-hidden whitespace-nowrap max-w-[160px]">
              MetaPortal’s NFT Goes Public In Nod To Crypto Adoption.
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
