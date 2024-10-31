import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { categories } from "../../../Context/DB";

export default function CatagoryAndSocial() {
  return (
    <div className="w-full">
      <div className="text-[#dddd] w-full border border-dashed p-3 text-center  mt-10 rounded-full">
        Catagories
      </div>

      {categories.map((category, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-center space-x-4 p-2 my-2 cursor-pointer transition-transform transform group hover:scale-105"
          >
            {/* Left Border */}
            <div className="w-20 border-t border-dotted border-gray-300 group-hover:border-white transition-all duration-500"></div>

            {/* Category Name and Count */}
            <div className="flex items-center space-x-2 text-slate-50 text-xs font-semibold">
              <p className="transition-colors duration-500 group-hover:text-white">
                {category.name}
              </p>
              <span className="bg-purple-600 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white shadow-sm">
                {category.count}
              </span>
            </div>

            {/* Right Border */}
            <div className="w-20 border-t border-dotted border-gray-300 group-hover:border-white transition-all duration-500"></div>
          </div>
        );
      })}

      <div className="text-[#dddd] w-full border border-dashed p-3 text-center  mt-10 rounded-full">
        SocaiL Links
      </div>
      <div className="flex gap-7  my-5 items-center justify-center text-[#dddd]">
        <FaFacebook
          className="hover:text-[#3b5998] z-50 transition-all duration-300 cursor-pointer"
          size={25}
        />
        <FaTwitter
          className="hover:text-[#1da1f2] z-50 transition-all duration-300 cursor-pointer"
          size={25}
        />
        <FaTwitch
          className="hover:text-[#6441a5] z-50 transition-all duration-300 cursor-pointer"
          size={25}
        />
        <FaInstagram
          className="hover:text-[#e1306c] z-50 transition-all duration-300 cursor-pointer"
          size={25}
        />
        <FaPinterest
          className="hover:text-[#bd081c] z-50 transition-all duration-300 cursor-pointer"
          size={25}
        />
      </div>
    </div>
  );
}
