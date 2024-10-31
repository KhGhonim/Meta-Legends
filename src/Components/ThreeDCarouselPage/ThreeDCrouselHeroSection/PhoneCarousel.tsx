import { Photos } from "../../../Context/DB";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { EffectCreative } from "swiper/modules";
interface Character {
  src: string;
  alt: string;
}

export default function PhoneCarousel() {
  return (
    <div className="w-full flex justify-center items-center h-full lg:hidden">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        {Photos.map((character: Character, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative w-full h-full    flex justify-center items-center"
            >
              <div className="relative  rounded-3xl  p-3 md:p-5  backdrop-blur-[4.2px] bg-transparent bg-opacity-30 border border-white shadow-2xl transform perspective-1000 rotateY-5">
                <img
                  src={character.src}
                  alt={character.alt}
                  className="rounded-3xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
