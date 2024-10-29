import { IoLockClosed } from "react-icons/io5";

export default function Protected() {
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
        <IoLockClosed style={{ fill: "url(#grad1)" }} />
      </svg>

      <h1 className="text-2xl font-bold text-[#ddd]">This page is protected</h1>
      <p className="text-[#ddd] text-xl">
        You must be logged in to view this page
      </p>
      <div className="flex gap-2 px-6 mt-5">
        <input
          type="email"
          placeholder="Email"
          className="w-56 border text-white z-20 bg-transparent border-[#ddd] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="CTSButton little z-20 text-white  px-5 py-2 rounded-md">
          Authenticate
        </button>
      </div>
    </div>
  );
}
