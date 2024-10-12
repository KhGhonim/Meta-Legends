import { FaBackward, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photos, Submenu } from "../../util/DB";
import { RiArrowDropRightLine } from "react-icons/ri";

const submenuVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Animation variants for the main menu
const mainMenuVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

interface SideBarLeft {
  IsSideBarOpened: boolean;
  setIsSideBarOpened: (isSideBarOpened: boolean) => void;
}

export default function SideBarLeft({
  IsSideBarOpened,
  setIsSideBarOpened,
}: SideBarLeft) {
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
      setIsSideBarOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [IsSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState<
    { Name: string; Link: string }[] | undefined
  >(undefined);

  const [activePhoto, setActivePhoto] = useState<number>(0); // Start with the first photo
  const [rotationClass, setRotationClass] = useState<string>(""); // State to toggle rotation

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the rotation animation
      setRotationClass("rotateY");

      // After the animation ends (2s), update to the next photo
      setTimeout(() => {
        setActivePhoto((prev) => (prev + 1) % Photos.length); // Move to the next photo
        setRotationClass(""); // Reset rotation for the new photo
      }, 2000); // Match the animation duration
    }, 3000); // Total interval of 3s

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [Photos.length]);

  return (
    <AnimatePresence mode="wait">
      {IsSideBarOpened && (
        <motion.div
          key="sidebar-overlay"
          initial={{ opacity: 0 }}
          animate={{
            opacity: IsSideBarOpened ? 0.5 : 0,
            x: IsSideBarOpened ? 0 : 9000,
          }}
          exit={{
            opacity: 0,
            x: 900,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          onClick={() => setIsSideBarOpened(false)}
          className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
            IsSideBarOpened ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        />
      )}

      <motion.aside
        key="sidebar-content"
        initial={{ opacity: 0 }}
        animate={{
          opacity: IsSideBarOpened ? 1 : 0,
          x: IsSideBarOpened ? 0 : -9000,
        }}
        exit={{
          opacity: 0,
          x: -900,
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
        className={`w-64 md:w-80 h-screen bg-gray-950 text-gray-300 z-50 p-4 flex flex-col fixed left-0 top-0 transition-all duration-150 ${
          IsSideBarOpened ? "left-0" : "left-[-100%]"
        } `}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-700 bg-transparent shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            {Photos.map((photo, i) => (
              <img
                key={`photo-${i}`}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  activePhoto === i ? "opacity-100" : "opacity-0"
                } ${rotationClass}`}
              />
            ))}
          </div>
          <h1 className="text-base md:text-2xl lg:text-3xl font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Meta Legends
          </h1>
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-4 mb-8">
          <button className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            <span>🚀 Explore Now</span>
          </button>
          <button className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            <span>💎 Get NFTs</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow relative flex flex-col">
          {IsSubMenuOpened ? (
            <motion.ul
              key="submenu"
              className="space-y-1 md:space-y-2 lg:space-y-3 absolute top-0 left-0 w-full"
              variants={submenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <li
                onClick={() => setIsSubMenuOpened(false)}
                className="cursor-pointer"
              >
                <FaBackward className="w-5 h-5 text-white" />
              </li>
              {subMenuItems?.map((item, index) => (
                <li key={`submenu-item-${item.Name}-${index}`}>
                  <Link
                    to={item.Link}
                    className="flex items-center gap-3 p-2 md:p-3  lg:text-base text-xs rounded-xl bg-gray-800 hover:bg-purple-600 transition-all duration-300 text-white hover:shadow-lg"
                  >
                    <span className="font-semibold">{item.Name}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              key="main-menu"
              className="space-y-3 absolute top-0 left-0 w-full"
              variants={mainMenuVariants}
              initial="open"
              animate="open"
              exit="closed"
            >
              {Submenu.map((item, index) => (
                <li key={`menu-item-${item.Name}-${index}`}>
                  <Link
                    to={item.Link}
                    className={item.class}
                    onClick={() => {
                      if (item.subItems) {
                        setIsSubMenuOpened(true);
                        setSubMenuItems(item.subItems);
                      }
                    }}
                  >
                    <item.Icon className={item.iconClass} />
                    <span className="font-semibold">{item.Name}</span>
                    {item.showArrow && (
                      <span>
                        <RiArrowDropRightLine className={item.iconClass} />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </nav>

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
