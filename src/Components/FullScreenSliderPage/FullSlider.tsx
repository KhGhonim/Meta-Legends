import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { Photos } from "../../Context/DB";
import { Keyboard } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Character {
  src: string;
  alt: string;
}
export default function FullSlider() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Swiper
        grabCursor={true}
        speed={1000}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCreative, Keyboard, Navigation, Autoplay]}
        className="mySwiper w-full h-dvh"
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {Photos?.map((character: Character, index) => (
          <SwiperSlide key={index}>
            <img
              src={character?.src}
              alt={character?.alt}
              loading="lazy"
              className=" w-full h-full object-cover "
            />
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)`,
              }}
              className="absolute inset-0 "
            ></div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-12 left-1/2 right-0 transform -translate-x-1/2 z-20">
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full border border-gray-50 bg-purple-500 opacity-50"></div>
              <button className="mx-3 p-3 rounded-full border-2  border-gray-50 bg-transparent swiper-button-prev  bg-purple-900 text-purple-300">
                <FaChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </button>
              <div className="w-1.5 h-1.5 rounded-full border border-gray-50 bg-purple-500 opacity-50"></div>
            </div>
            <div className="w-12 h-0.5 border border-gray-50 bg-purple-700"></div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full border border-gray-50 bg-purple-500 opacity-50"></div>
              <button className="mx-3 p-3 rounded-full border-2  border-gray-50 bg-transparent swiper-button-next bg-purple-900 text-purple-300">
                <FaChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </button>
              <div className="w-1.5 h-1.5 rounded-full border border-gray-50 bg-purple-500 opacity-50"></div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
