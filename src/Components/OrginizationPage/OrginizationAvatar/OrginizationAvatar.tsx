import { useState } from "react";
import { factions } from "../../../Context/DB";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

export default function OrginizationAvatar() {
  const [selectedFaction, setSelectedFaction] = useState(factions[0]);
  const [selectedImage, setSelectedImage] = useState(factions[0].mainImage);

  return (
    <div className="h-auto bg-black bg-opacity-15 rounded-lg  border-t-[1px]  mt-20 shadow-2xl border-[#ffffff1a] border-b-[1px] text-white lg:py-8 lg:px-16">
      <div className="w-full grid place-items-center grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Image gallery */}
        <div className="space-y-4 w-full md:w-5/6">
          <div className="relative w-full h-96 rounded-lg">
            <img
              style={{
                clipPath: `polygon(0% 0%, 70.5% 0%, 100% 28%, 100% 100%, 0% 100%)`,
              }}
              src={selectedImage}
              alt={selectedFaction.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {selectedFaction.subImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square w-full rounded-lg hover:opacity-75 transition"
              >
                <img
                  style={{
                    clipPath: `polygon(0% 0%, 70.5% 0%, 100% 28%, 100% 100%, 0% 100%)`,
                    backgroundColor: "transparent",
                  }}
                  src={image}
                  alt={`${selectedFaction.name} ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Faction selection and content */}
        <div className="space-y-8 w-full">
          {/* Faction icons */}
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="flex justify-between gap-5 cursor-pointer  items-center overflow-x-auto  pb-4"
          >
            {factions.map((faction) => (
              <SwiperSlide
                key={faction.id}
                onClick={() => {
                  setSelectedFaction(faction);
                  setSelectedImage(faction.mainImage);
                }}
                className={`flex flex-col items-center space-y-2 min-w-[80px] ${
                  selectedFaction.id === faction.id
                    ? "opacity-100"
                    : "opacity-50"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={
                      selectedFaction === faction
                        ? faction.iconColor
                        : faction.iconGray
                    }
                    alt={faction.name}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-center whitespace-nowrap">
                  {faction.name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Faction content */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">{selectedFaction.name}</h2>
              <span className="text-purple-400 text-xs md:text-base lg:text-xl">
                {selectedFaction.units}
              </span>
            </div>
            <p className="text-gray-300 whitespace-pre-line">
              {selectedFaction.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
