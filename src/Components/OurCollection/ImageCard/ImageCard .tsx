import { Photos } from "../../../Context/DB";
import { useState, useEffect } from "react";

interface Size {
  width: string;
  height: string;
}

// Helper to ensure no more than 2 duplicates
export default function ImageCard({
  size,
  active,
}: {
  size: Size;
  active: boolean;
}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(
    Math.floor(Math.random() * Photos.length)
  );
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (active) {
      // Trigger the rotateY animation
      setAnimationClass("rotateY");

      // After 1 second, update the photo
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * Photos.length);
        if (Photos[randomIndex]) {
          setCurrentPhotoIndex(randomIndex); // Safeguard: Ensure the random index is valid
        }
      }, 1000); // Midpoint of the animation (1 second)

      // Remove the animation class after 2 seconds
      setTimeout(() => {
        setAnimationClass("");
      }, 2000);
    }
  }, [active]);

  return (
    <div
      className={`relative w-[${size.width}] h-[${size.height}] rounded-3xl p-5 transition-all duration-500 ease-in-out transform ${animationClass} backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-white shadow-2xl`}
    >
      <img
        src={Photos[currentPhotoIndex]?.src} // Safeguard: Use optional chaining to prevent errors
        alt={Photos[currentPhotoIndex]?.alt}
        loading="lazy"
        className="rounded-3xl w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-20"></div>
    </div>
  );
}
