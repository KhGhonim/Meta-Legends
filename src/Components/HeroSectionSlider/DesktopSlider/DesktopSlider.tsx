import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Photos } from "../../../Context/DB";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Character {
  src: string;
  alt: string;
}

export default function DesktopSlider() {
  return (
    <section className="hidden lg:block relative min-h-screen z-10  overflow-hidden">
      <div className="container mx-auto px-4 pt-32 pb-16 text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            Meta Legends
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            Meta Legends
          </h1>
        </div>
      </div>

      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          slidesPerView={3}
          spaceBetween={100}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper relative flex justify-center items-center h-full "
        >
          {Photos?.map((character: Character, index) => (
            <SwiperSlide
              key={index}
              className={`relative w-[500px] h-[600px]  rounded-3xl p-5 transition-all duration-500 ease-in-out transform  backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-white shadow-2xl `}
            >
              <img
                src={character?.src}
                alt={character?.alt}
                loading="lazy"
                className="rounded-3xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
            <button className="mx-3 p-3 rounded-full border-2 border-purple-500 bg-transparent swiper-button-prev  hover:bg-purple-900 text-purple-300">
              <FaChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
          </div>
          <div className="w-12 h-0.5 bg-purple-700"></div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
            <button className="mx-3 p-3 rounded-full border-2 border-purple-500 bg-transparent swiper-button-next hover:bg-purple-900 text-purple-300">
              <FaChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
