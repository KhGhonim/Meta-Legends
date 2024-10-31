import { TiThMenu } from "react-icons/ti";
import logo from "../../assets/logo.svg";
import { HeaderNav, Submenu } from "../../Context/DB";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";
import SideBarLeft from "../SideBars/SideBarLeft";
import SideBarRight from "../SideBars/SideBarRight";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const mainMenuVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: {
    x: "100%", // Exits to the right
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100%", // Exits to the right
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const submenuVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: {
    x: "-100%", // Entering from the left
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "-100%", // Exits to the left
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Header() {
  const [headerPosition, setHeaderPosition] = useState<boolean>(false);
  const [IsMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [subMenuItems, setSubMenuItems] = useState<
    { Name: string; Link: string }[] | undefined
  >(undefined);
  const [HumbergerMenuContent, setHumbergerMenuContent] =
    useState<boolean>(false);
  const [IsLeftSideBarOpened, setIsLeftSideBarOpened] =
    useState<boolean>(false);
  const [IsSideBarRightOpened, setIsSideBarRightOpened] =
    useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeaderPosition(scrollY >= 100);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Remove HeaderPosition from dependency array

  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    // If the click is outside the modal, close it
    if (
      ref.current &&
      event.target instanceof Node &&
      !ref.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
      setHumbergerMenuContent(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* PC Header Component */}
      <header
        className={`hidden lg:flex fixed top-0 left-0 right-0 transition-all duration-500 
      ${
        headerPosition
          ? "bg-gradient-to-r from-[rgb(27,17,38)] to-[rgb(24,17,36)] border-b-[0.5px] border-[#ffffff1a]  shadow-md"
          : "bg-transparent border-none border-b-0"
      }  
      px-8 py-4 flex items-center justify-between z-50`}
        style={{
          backgroundPosition: headerPosition ? "top" : "bottom",
          backgroundSize: "200% 200%", // Allows the gradient to animate smoothly
          transition: "background-position 2s ease", // Smooth transition for background position
        }}
      >
        <div className="flex items-center">
          <div
            onClick={() => setIsLeftSideBarOpened(!IsLeftSideBarOpened)}
            className="bg-black rounded-full p-3 cursor-pointer hover:shadow-custom little transition-all duration-500"
          >
            <span className="text-white cursor-pointer">
              {IsLeftSideBarOpened ? <MdClose /> : <TiThMenu />}
            </span>
          </div>
          <Link to={"/"} className="text-white ml-5">
            <img
              src={logo}
              alt="logo"
              className="w-36 ml-4 logo transition-all duration-500"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-10">
          {HeaderNav?.map((item: { Name: string; Link: string }, i: number) => (
            <a
              key={i}
              href={item.Link}
              className="text-white hover:text-purple-500 transition-all duration-500 relative group"
            >
              {item.Name}

              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-purple-500 transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsSideBarRightOpened(!IsSideBarRightOpened)}
          className="hidden CTSButton little   hover:shadow-custom lg:flex justify-center text-[#ddd] hover:text-[#fff] transition-all duration-500 capitalize items-center px-4 py-3 rounded-lg"
        >
          Connect To Wallet
        </button>
      </header>
      {/* Mobile and Tablet Header Component */}
      <header>
        {/* 1st Mobile Header Component */}
        <div
          className={` lg:hidden transition-all duration-500 
bg-gradient-to-r from-[rgb(27,17,38)]  to-[rgb(24,17,36)] border-b-[0.5px] border-[#ffffff1a]  shadow-md 
      px-8 py-4 flex items-center justify-between relative z-20`}
        >
          <div className="flex items-center z-50">
            <div
              onClick={() => setIsLeftSideBarOpened(!IsLeftSideBarOpened)}
              className="bg-black rounded-full p-3 cursor-pointer little   hover:shadow-custom transition-all duration-500"
            >
              <span className="text-white cursor-pointer">
                {IsLeftSideBarOpened ? <MdClose /> : <TiThMenu />}
              </span>
            </div>
            <div className="text-white font-bold ml-5">
              <h1>Khaled Ghonim</h1>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-10 z-50">
            {HeaderNav?.map(
              (item: { Name: string; Link: string }, i: number) => (
                <a
                  key={i}
                  href={item.Link}
                  className="text-white hover:text-purple-500 transition-all duration-500 relative"
                >
                  {item.Name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-purple-500 transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              )
            )}
          </nav>
          <button
            onClick={() => setIsSideBarRightOpened(!IsSideBarRightOpened)}
            className="CTSButton little lg:hidden z-50 justify-center text-[#ddd] hover:text-[#fff] hover:shadow-custom transition-all duration-500 capitalize items-center px-6 py-3 rounded-lg"
          >
            Wallet
          </button>
        </div>

        {/* 2nd Mobile Header Component */}
        <div
          className={` lg:hidden transition-all duration-500 
bg-gradient-to-r from-[rgb(27,17,38)] to-[rgb(24,17,36)] border-b-[0.5px] border-[#ffffff1a]  shadow-md 
      px-4 py-4 flex items-center justify-between relative z-20`}
        >
          <div className="flex items-center">
            <Link to={"/"} className="text-white ml-5">
              <img
                src={logo}
                alt="logo"
                className="w-32 ml-3 logo transition-all duration-500"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="bg-black rounded-full p-3 cursor-pointer little   hover:shadow-custom transition-all duration-500">
            <div
              onClick={() => {
                setIsMenuOpen(!IsMenuOpen);
                setHumbergerMenuContent(!HumbergerMenuContent);
              }}
              className="text-white text-xl cursor-pointer"
            >
              {IsMenuOpen ? <MdClose /> : <TiThMenu />}
            </div>

            <div
              className={`absolute top-full right-0 w-full bg-[#1B121D] text-white z-10 
      ${
        IsMenuOpen
          ? "block h-60 opacity-100 transform scale-y-100"
          : "h-0 opacity-0 transform scale-y-0"
      } 
      transition-all duration-700 ease-in-out`}
            >
              <nav ref={ref} className="flex flex-col space-y-6 py-7 px-8">
                <AnimatePresence mode="wait">
                  {HumbergerMenuContent
                    ? Submenu?.map(
                        (
                          item: {
                            Name: string;
                            Link: string;
                            showArrow: boolean;
                            subItems?: { Name: string; Link: string }[];
                          },
                          i: number
                        ) => (
                          <motion.div
                            key={i}
                            onClick={() => {
                              navigate(item.Link);
                              if (item?.subItems) {
                                setSubMenuItems(item?.subItems);
                                setHumbergerMenuContent(false);
                              }
                            }}
                            variants={mainMenuVariants}
                            initial={IsMenuOpen ? "closed" : "open"}
                            animate="open"
                            exit="exit"
                            className="text-[#ddd]/70 group cursor-pointer flex items-center hover:text-purple-500 transition-all duration-500 relative group"
                          >
                            {item.subItems && item.showArrow && (
                              <span className="group-hover:translate-x-3 transition-all duration-500">
                                {" "}
                                <MdKeyboardArrowRight />
                              </span>
                            )}
                            <span className="relative">
                              <span className="relative z-10 px-4">
                                {item.Name}
                              </span>
                            </span>
                          </motion.div>
                        )
                      )
                    : subMenuItems?.map(
                        (item: { Name: string; Link: string }, i: number) => (
                          <motion.div
                            key={i}
                            variants={submenuVariants}
                            initial={"closed"}
                            animate="open"
                            exit="exit"
                            onClick={() => navigate(item.Link)}
                            className="text-[#ddd]/70 group flex cursor-pointer items-center hover:text-purple-500 transition-all duration-500 relative group"
                          >
                            <div className="relative z-10 px-4">
                              {item.Name}
                            </div>
                          </motion.div>
                        )
                      )}
                </AnimatePresence>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <SideBarLeft
        IsLeftSideBarOpened={IsLeftSideBarOpened}
        setIsLeftSideBarOpened={setIsLeftSideBarOpened}
      />

      <SideBarRight
        IsSideBarRightOpened={IsSideBarRightOpened}
        setIsSideBarRightOpened={setIsSideBarRightOpened}
      />
    </>
  );
}
