import { useState, useEffect } from "react";
import ImageCard from "./ImageCard/ImageCard ";

export default function OurCollection() {
  const totalCards = 8; // Ensure this matches the number of ImageCards rendered
  const cardsPerCycle = 2; // Number of cards to update per cycle
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Active cards for rotation

  useEffect(() => {
    const updateCycle = () => {
      // Generate two unique random indices for active ImageCards
      const newActiveIndexes: number[] = [];
      while (newActiveIndexes.length < cardsPerCycle) {
        const randomIndex = Math.floor(Math.random() * totalCards);
        if (!newActiveIndexes.includes(randomIndex)) {
          newActiveIndexes.push(randomIndex);
        }
      }
      setActiveIndexes(newActiveIndexes); // Update state with the new active indexes
    };

    updateCycle(); // Initial activation of two cards

    // Set up interval to change the active cards every 3 seconds
    const interval = setInterval(updateCycle, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div id="collection" className="w-full h-full py-10">
      <div className="container mx-auto  pb-20 text-center">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
            OUR COLLECTION
          </h1>
          <h1 className="absolute inset-0 text-2xl md:text-3xl z-40  lg:text-5xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            OUR COLLECTION
          </h1>
        </div>
      </div>

      <div className="w-full h-full py-10 px-24 flex gap-8 flex-col lg:flex-row max-lg:justify-center max-lg:items-center">
        <ImageCard
          size={{ width: "1/2", height: "1/2" }}
          active={activeIndexes.includes(0)}
        />
        <div className="flex justify-end items-end">
          <ImageCard
            size={{ width: "250px", height: "250px" }}
            active={activeIndexes.includes(1)}
          />
        </div>
        <ImageCard
          size={{ width: "1/2", height: "1/2" }}
          active={activeIndexes.includes(2)}
        />
        <div className="flex justify-end items-end">
          <ImageCard
            size={{ width: "250px", height: "250px" }}
            active={activeIndexes.includes(3)}
          />
        </div>
      </div>

      <div className="hidden w-full h-full px-24 lg:flex gap-8">
        <div className="flex justify-start items-start">
          <ImageCard
            size={{ width: "250px", height: "250px" }}
            active={activeIndexes.includes(4)}
          />
        </div>
        <ImageCard
          size={{ width: "1/2", height: "1/2" }}
          active={activeIndexes.includes(5)}
        />
        <div className="flex justify-start items-start">
          <ImageCard
            size={{ width: "250px", height: "250px" }}
            active={activeIndexes.includes(6)}
          />
        </div>
        <ImageCard
          size={{ width: "1/2", height: "1/2" }}
          active={activeIndexes.includes(7)}
        />
      </div>

      <div className="flex flex-col items-center justify-center pt-32 pb-10">
        <h1 className="text-center max-w-3xl mx-auto pb-10 text-lg md:text-xl font-medium text-[#9ba0b8]">
          {" "}
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </h1>

        <button className="CTSButton little transition-all duration-300  hover:shadow-custom text-white font-extralight py-3 px-12 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}
