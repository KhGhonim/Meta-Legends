import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-15 flex flex-col md:flex-row max-md:text-center max-md:space-y-2 justify-between items-center  py-8 border-t-[1px] shadow-2xl border-[#ffffff1a] border-b-[1px] mt-20 px-10">
      <div className=" text-[#dddd] text-sm ">
        Copyright 2024. Designed & Developed With Fenatic by{" "}
        <Link
          className=" text-sm  tracking-widest  font-bold text-[#160f1a] drop-shadow-custom"
          style={{
            background: "linear-gradient(to right, #944ef9, #944ef9, #d352f3)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "4px transparent",
          }}
          to={"https://khaledghonim.com/developer"}
        >
          Khaled GHONIM
        </Link>
      </div>
      <div className=" text-[#dddd] text-sm flex gap-4">
        <Link
          className="text-sm tracking-widest group relative drop-shadow-custom hover:text-white hover:font-semibold  transition-all duration-500"
          to={""}
        >
          Privacy Policy
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform origin-left bg-purple-500 transition-transform duration-500 group-hover:scale-x-100"></span>
        </Link>

        <Link
          className="text-sm tracking-widest group relative drop-shadow-custom hover:text-white hover:font-semibold  transition-all duration-500"
          to={""}
        >
          Cookies
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform origin-left bg-purple-500 transition-transform duration-500 group-hover:scale-x-100"></span>
        </Link>
        <Link
          className="text-sm tracking-widest group relative drop-shadow-custom hover:text-white hover:font-semibold  transition-all duration-500"
          to={""}
        >
          Terms & Conditions
          <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform origin-left bg-purple-500 transition-transform duration-500 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
}
