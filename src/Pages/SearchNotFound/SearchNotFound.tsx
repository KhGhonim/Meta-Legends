import { FaSearch } from "react-icons/fa";
import { LuServerCrash } from "react-icons/lu";

export default function SearchNotFound() {
  return (
    <div className="w-full z-50 h-screen flex flex-col items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#944ef9", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#d352f3", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <LuServerCrash style={{ fill: "url(#grad1)" }} />
      </svg>
      <div className="relative mb-3 ">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold ">
          Nothing Found
        </h1>
        <h1 className="absolute inset-0 text-xl md:text-2xl z-40  lg:text-5xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
          Nothing Found
        </h1>
      </div>{" "}
      <p className="text-[#ddd] text-xl px-6">
        Sorry, no content matched your criteria. Try searching something else.
      </p>
      <div className="w-full flex  gap-2 px-5 mt-5">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-60 border text-white z-50 bg-transparent border-[#ddd] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="CTSButton little z-50 text-white flex items-center justify-center  px-10 py-2 rounded-md">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
