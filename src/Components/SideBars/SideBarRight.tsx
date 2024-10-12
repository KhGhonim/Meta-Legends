import { FaEnvelope, FaGamepad, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiOpensuse, SiRarible } from "react-icons/si";
import binance from "../../assets/aside/binance-svgrepo-com.svg";
import coinbase from "../../assets/aside/coinbase-v2-svgrepo-com.svg";
import metamask from "../../assets/aside/metamask-svgrepo-com.svg";

interface SideBarRight {
  IsSideBarRightOpened: boolean;
  setIsSideBarRightOpened: (IsSideBarRightOpened: boolean) => void;
}

export default function SideBarRight({
  IsSideBarRightOpened,
  setIsSideBarRightOpened,
}: SideBarRight) {
  const ref = useRef<HTMLDivElement>(null);
  /**
   * Handles the click event outside the SideBar component.
   * If the click is outside the modal, close it.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      event.target instanceof Node &&
      !ref.current.contains(event.target)
    ) {
      setIsSideBarRightOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={"sideBarRight"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: IsSideBarRightOpened ? 0.5 : 0,
          x: IsSideBarRightOpened ? 0 : -9000,
        }}
        exit={{
          opacity: 0,
          x: 9000,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        onClick={() => setIsSideBarRightOpened(false)}
        className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
          IsSideBarRightOpened ? "translate-x-0" : "translate-x-[100%]"
        }`}
      ></motion.div>
      <motion.aside
        key={"sideBarRightContent"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: IsSideBarRightOpened ? 1 : 0,
          x: IsSideBarRightOpened ? 0 : 9000,
        }}
        exit={{
          opacity: 0,
          x: -9000,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        ref={ref}
        className={`w-64 md:w-80 h-screen bg-gradient-to-b from-[#1a202c] to-[#130F15] text-gray-300 z-50 p-6 flex flex-col fixed top-0 transition-all duration-150 ${
          IsSideBarRightOpened ? "right-0" : "right-[-100%]"
        } `}
      >
        {/* Header */}
        <div className="mb-4 text-center ">
          <h2 className="text-2xl font-bold text-white">🎮 NFT & Gaming Hub</h2>
          <p className="text-sm text-gray-400">Your gateway to the metaverse</p>
        </div>

        {/* Wallet Options */}
        <div className="space-y-3 mb-6">
          <h3 className="font-semibold text-gray-200">Connect Your Wallet</h3>
          <button className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:to-green-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 glow">
            <img src={binance} alt="Binance Logo" className="w-6 h-6" />
            Binance Wallet
          </button>
          <button className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-orange-400 to-red-500 hover:to-orange-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 glow">
            <img src={metamask} alt="MetaMask Logo" className="w-6 h-6" />
            MetaMask
          </button>
          <button className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-purple-400 to-pink-500 hover:to-purple-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 glow">
            <img
              src={coinbase}
              alt="Coinbase Wallet Logo"
              className="w-6 h-6"
            />
            Coinbase Wallet
          </button>
        </div>

        {/* NFT Marketplaces */}
        <div className="space-y-3 mb-6">
          <h3 className="font-semibold text-gray-200">Explore Marketplaces</h3>
          <button className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-teal-400 to-cyan-500 hover:to-teal-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow">
            <SiOpensuse className="w-6 h-6" />
            OpenSea
          </button>
          <button className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-pink-400 to-red-400 hover:to-pink-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow">
            <SiRarible className="w-6 h-6" />
            Rarible
          </button>
        </div>

        {/* Game Recommendations */}
        <div className="space-y-3 mb-6">
          <h3 className="font-semibold text-gray-200">Recommended Games</h3>
          <Link
            to="/game1"
            className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:to-yellow-400 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow"
          >
            <FaGamepad className="w-6 h-6" />
            Axie Infinity
          </Link>
          <Link
            to="/game2"
            className="w-full justify-center flex py-4 px-2 gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:to-purple-600 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow"
          >
            <FaGamepad className="w-6 h-6" />
            Decentraland
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex justify-around mb-4">
            <Link
              to="https://github.com"
              className="p-2 bg-[#333333] hover:bg-[#444444] rounded-full  transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </Link>
            <Link
              to="https://linkedin.com"
              className="p-2 bg-[#0077b5] hover:bg-[#0076b5aa] rounded-full  transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5 text-white" />
            </Link>
            <Link
              to="mailto:someone@example.com"
              className="p-2 bg-[#6400b5] hover:bg-[#6400b597] rounded-full  transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5 text-white" />
            </Link>
          </div>
          <p className="text-xs text-gray-500 text-center">
            © 2024 Khaled Ghonim. All rights reserved.
          </p>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
