import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Steps from "../../../assets/MiniSection/roadmap.png";
import { Autoplay } from "swiper/modules";
import { FootStepsSlider } from "../../../Context/DB";

export default function Slider() {
  const [footsteps, setFootsteps] = useState(1);
  const ref = useRef(0);

  return (
    <div className="w-full h-full">
      {/* Footsteps Tracker */}
      <div className="mb-8 p-4 rounded-lg border border-dashed border-purple-700 overflow-hidden">
        <div className="flex justify-start py-4 px-6 gap-1 items-center">
          {Array.from({ length: footsteps }).map((_, index) => (
            <img
              src={Steps} // Add your image source here
              key={index}
              className="w-20 object-contain"
            />
          ))}
        </div>
      </div>

      <>
        <Swiper
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={100}
          onSlideChange={(swiper) => {
            const currentIndex = swiper.activeIndex;
            const previousIndex = ref.current;

            if (currentIndex > previousIndex) {
              // Moving forward, increment footsteps
              setFootsteps((prev) => prev + 1);
            } else if (currentIndex < previousIndex) {
              // Moving backward, decrement footsteps (but not below 1)
              setFootsteps((prev) => Math.max(1, prev - 1));
            }
            if (swiper.activeIndex === 0 && swiper.isBeginning) {
              setFootsteps(1); // Reset footsteps to 1 when it loops back to the start
            }
            // Update the previous index reference
            ref.current = currentIndex;
          }}
          className="mySwiper"
        >
          {/* Add your slides here */}
          {FootStepsSlider.map((slider, i) => (
            <SwiperSlide className="w-full relative overflow-visible " key={i}>
              <div className="absolute top-1 left-8 w-4 h-4 bg-purple-600 rounded-full shadow-lg transform -translate-y-1/2 translate-x-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <div className="w-full mb-10 h-1.5 border-b-4 border-[#ffffff1a]"></div>

              <div className="w-full h-full lg:w-80 lg:h-96 rounded-2xl border-[1px] border-gray-600 shadow-2xl ">
                <div className="bg-gray-700 bg-opacity-20 w-32 h-10 rounded-br-2xl rounded-tl-2xl">
                  <h1 className="text-xs font-bold text-center pt-3 text-[#ffffff80]">
                    {slider?.number}
                  </h1>
                </div>
                <div className="flex flex-col w-full px-5 py-6">
                  <h1 className="text-base font-bold text-start text-[#ffffff80]">
                    {slider?.date}
                  </h1>
                  <h3 className="text-xl font-bold text-start pt-2 text-white">
                    {slider?.title}
                  </h3>
                  <h6 className="text-lg font-bold text-start pt-6 text-[#ffffff80]">
                    {slider?.description}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
