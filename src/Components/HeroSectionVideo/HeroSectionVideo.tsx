import ReactPlayer from "react-player";
import HeroVideo from "../../assets/HeroVideo.mp4";
import { useRef, useState, useEffect } from "react";


const Mathutils = {
  normalize: function (value, min, max) {
    return (value - min) / (max - min);
  },
  interpolate: function (normValue, min, max) {
    return min + (max - min) * normValue;
  },
  map: function (value, min1, max1, min2, max2) {
    if (value < min1) value = min1;
    if (value > max1) value = max1;
    return this.interpolate(this.normalize(value, min1, max1), min2, max2);
  },
};


export default function HeroSectionVideo() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [duration, setDuration] = useState(0); // For video duration
  const [isFixed, setIsFixed] = useState(true); // To switch from fixed to relative
  const [opacity, setOpacity] = useState(1); // For fade effect

  // Handle scroll event and map it to video progress
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxHeight = windowHeight * 3; // 300vh section
    const scrollRatio = Math.min(scrollY / (maxHeight - windowHeight), 1); // Normalize scroll position

    setScrollProgress(scrollRatio);

    if (scrollY >= maxHeight - windowHeight) {
      setIsFixed(false); // Switch to relative after 300vh
      setOpacity(0); // Fade out video
    } else {
      setIsFixed(true);
      setOpacity(1); // Reset opacity
    }
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Map scroll progress to video time
  useEffect(() => {
    if (playerRef.current && duration > 0) {
      const videoTime = Mathutils.map(scrollProgress, 0, 1, 0, duration);
      playerRef.current.seekTo(videoTime, "seconds");
    }
  }, [scrollProgress, duration]);

  return (
    <div className="w-full h-[300vh] relative">
      {/* Video Section */}
      <div
        ref={videoRef}
        className={`w-full h-[100vh] ${isFixed ? "fixed inset-0" : "relative"} transition-opacity duration-500`}
        style={{ opacity }} // Fade out smoothly
      >
        <ReactPlayer
          ref={playerRef}
          url={HeroVideo}
          playing={false} // Controlled by scroll
          width={"100%"}
          height={"100%"}
          muted
          playsInline
          onDuration={setDuration} // Capture video duration
        />
      </div>
      {/* Next Section */}
      {!isFixed && (
        <div className="w-full h-screen bg-gray-100">
          <h2 className="text-center pt-20 text-4xl">Next Section Content</h2>
        </div>
      )}
    </div>

  );
}
