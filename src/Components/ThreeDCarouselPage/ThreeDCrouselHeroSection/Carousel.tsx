import { Photos } from "../../../Context/DB";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
interface Character {
  src: string;
  alt: string;
}

interface SwiperInstance {
  activeIndex: number;
}
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [SecoundNextIndex, setSecoundNextIndex] = useState(2);
  const [previousIndex, setPreviousIndex] = useState(Photos.length - 1);
  const [secoundPerviousIndex, setsecoundPerviousIndex] = useState(
    Photos.length - 2
  );

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);
    setNextIndex((swiper.activeIndex + 1) % Photos.length);
    setPreviousIndex((swiper.activeIndex - 1) % Photos.length);
    setSecoundNextIndex((swiper.activeIndex + 2) % Photos.length);
    setsecoundPerviousIndex((swiper.activeIndex - 2) % Photos.length);
  };
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={handleSlideChange}
      modules={[Autoplay]}
      onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="mySwiper w-full h-full hidden lg:block  "
    >
      {Photos.map((character: Character, index) => {
        return (
          <SwiperSlide
            key={index}
            className="relative w-96 h-96  flex justify-center items-center"
          >
            <div
              className={`absolute left-full hidden lg:block transform translate-x-3/4 transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? "z-40 scale-100"
                  : index === nextIndex
                  ? "z-30 scale-75 rotate-[24deg]"
                  : index === previousIndex
                  ? "z-30 scale-75 rotate-[-24deg]"
                  : index === SecoundNextIndex
                  ? "z-20 scale-75  translate-y-40 rotate-[30deg]"
                  : index === secoundPerviousIndex
                  ? "z-20 scale-75 translate-y-40 rotate-[-30deg]"
                  : "z-0 scale-0"
              }`}
            >
              <div className="relative w-[200px] md:w-[400px] h-[300px] md:h-[500px] rounded-3xl  p-3 md:p-5  backdrop-blur-[4.2px] bg-transparent bg-opacity-30 border border-white shadow-2xl transform perspective-1000 rotateY-5">
                <img
                  src={character.src}
                  alt={character.alt}
                  className="rounded-3xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20"></div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
