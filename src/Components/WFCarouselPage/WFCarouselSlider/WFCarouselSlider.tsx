import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Photos } from "../../../Context/DB";

interface Character {
  src: string;
  alt: string;
}

export default function WFCarouselSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="mySwiper "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
      >
        {Photos?.map((character: Character, index) => (
          <SwiperSlide
            key={index}
            className={`relative w-full h-full little CTSButton  z-10  rounded-3xl p-5 transition-all duration-500 ease-in-out transform  bg-transparent  border border-[#dddd] shadow-2xl `}
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
    </>
  );
}
