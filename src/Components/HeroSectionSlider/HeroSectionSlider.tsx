import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Photos } from "../../util/DB";

interface Character {
  src: string;
  alt: string;
}

export default function HeroSectionSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 17);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 17);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + Photos.length) % Photos.length
    );
  };

  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Hero Section For Phone */}
      <section className=" lg:hidden relative min-h-screen z-10 pb-10 overflow-hidden">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative mb-3 md:mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">Meta Legends</h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl  lg:text-7xl font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
              Meta Legends
            </h1>
          </div>

          <div className="relative flex justify-center items-center h-[400px] md:h-[700px]">
            {Photos?.map((character: Character, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out ${index === activeIndex
                  ? "z-20 scale-110"
                  : index === (activeIndex + 1) % 17
                    ? "z-10 -translate-x-1/2 scale-90  "
                    : "z-0 translate-x-1/2 scale-90 "
                  }`}
              >
                <div className="relative w-[200px] md:w-[420px] h-[300px] md:h-[600px] rounded-3xl  p-3 md:p-5  backdrop-blur-[4.2px] bg-transparent bg-opacity-30 border border-white shadow-2xl transform perspective-1000 rotateY-5">
                  <img
                    src={character.src}
                    alt={character.alt}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
            <button
              onClick={handlePrev}
              className="mx-3 p-3 rounded-full border-2 border-purple-500 bg-transparent hover:bg-purple-900 text-purple-300"
            >
              <FaChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
          </div>
          <div className="w-12 h-0.5 bg-purple-700"></div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
            <button
              onClick={handleNext}
              className="mx-3 p-3 rounded-full border-2 border-purple-500 bg-transparent hover:bg-purple-900 text-purple-300"
            >
              <FaChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
          </div>
        </div>
      </section>


      {/* Hero Section For Desktop */}
      <section className="hidden lg:block relative min-h-screen z-10 pb-10 overflow-hidden">
        <div className="container mx-auto px-4 py-44 text-center">
          <div className="relative mb-3 md:mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">Meta Legends</h1>
            <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
              Meta Legends
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
