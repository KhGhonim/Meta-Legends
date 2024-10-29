import { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import YouTube from "react-youtube";
import YTCover from "../../../assets/MiniSection/YTCover.jpg";

export default function CrouselVideo() {
  const [IsVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);
  const [hovered, setHovered] = useState(false);
  const circleRadius = 90;
  const circumference = 2 * Math.PI * circleRadius;
  const videoId = "ejch3nDMI5k";


  
  return (
    <div className="relative w-full max-w-7xl aspect-video max-md:mb-32 mt-14 ">
    {!IsVideoPlayed ? (
      <div className="relative w-screen h-full">
        <img
          src={YTCover}
          alt="YouTube Cover"
          className="w-full h-full"
        />
        <div
          onClick={() => setIsVideoPlayed(true)}
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
        >
          {/* SVG Circle for Border */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="absolute"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <circle
              cx="100"
              cy="100"
              r={circleRadius}
              stroke="gray"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={hovered ? circumference : 0}
              style={{
                transition: "stroke-dashoffset 1s ease",
              }}
            />
          </svg>

          {/* Icon */}
          <VscDebugStart className="text-[150px] text-gray-500 " />
        </div>
      </div>
    ) : (
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 1,
            showinfo: 1,
          },
        }}
        className="absolute top-0 left-0 w-screen h-full"
        onPlay={() => setIsVideoPlayed(true)}
        onPause={() => setIsVideoPlayed(false)}
        onEnd={() => setIsVideoPlayed(false)}
      />
    )}
  </div>
  )
}
