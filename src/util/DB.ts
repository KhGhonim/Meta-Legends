import Photo1 from "../assets/MiniSection/1.jpg";
import Photo2 from "../assets/MiniSection/2.jpg";
import Photo3 from "../assets/MiniSection/3.jpg";
import Photo4 from "../assets/MiniSection/4.jpg";
import Photo5 from "../assets/MiniSection/5.jpg";
import Photo6 from "../assets/MiniSection/6.jpg";
import Photo7 from "../assets/MiniSection/7.jpg";
import Photo8 from "../assets/MiniSection/8.jpg";
import Photo9 from "../assets/MiniSection/9.jpg";
import Photo10 from "../assets/MiniSection/10.jpg";
import Photo11 from "../assets/MiniSection/11.jpg";
import Photo12 from "../assets/MiniSection/12.jpg";
import Photo13 from "../assets/MiniSection/13.jpg";
import Photo14 from "../assets/MiniSection/14.jpg";
import Photo15 from "../assets/MiniSection/15.jpg";
import Photo16 from "../assets/MiniSection/16.jpg";
import Photo17 from "../assets/MiniSection/17.jpg";
import {
  FaBookOpen,
  FaDollarSign,
  FaHome,
  FaImages,
} from "react-icons/fa";
export const HeaderNav = [
  { Name: "Home", Link: "/" },
  { Name: "About", Link: "/about" },
  { Name: "Collection", Link: "/collection" },
  { Name: "Blog", Link: "/blog" },
  { Name: "Contact", Link: "/contact" },
];

export const Photos = [
  { src: Photo1, alt: "Photo1" },
  { src: Photo2, alt: "Photo2" },
  { src: Photo3, alt: "Photo3" },
  { src: Photo4, alt: "Photo4" },
  { src: Photo5, alt: "Photo5" },
  { src: Photo6, alt: "Photo6" },
  { src: Photo7, alt: "Photo7" },
  { src: Photo8, alt: "Photo8" },
  { src: Photo9, alt: "Photo9" },
  { src: Photo10, alt: "Photo10" },
  { src: Photo11, alt: "Photo11" },
  { src: Photo12, alt: "Photo12" },
  { src: Photo13, alt: "Photo13" },
  { src: Photo14, alt: "Photo14" },
  { src: Photo15, alt: "Photo15" },
  { src: Photo16, alt: "Photo16" },
  { src: Photo17, alt: "Photo17" },
];


export const Submenu = [
  {
    Name: "Home",
    Link: "/",
    class: "flex items-center group gap-3 p-3 rounded-xl bg-gray-800 hover:bg-purple-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-indigo-400 group-hover:text-indigo-100 group-hover:translate-x-1 transition-all duration-300",
    Icon: FaHome,
    showArrow: true, // Added property for arrow visibility
    subItems: [ // Added submenu items
      { Name: "3D Carousel", Link: "/3d-carousel" },
      { Name: "Bended Carousel", Link: "/bended-carousel" },
      { Name: "Video Background", Link: "/video-background" },
      { Name: "Water Effect", Link: "/water-effect" },
      { Name: "Simple Carousel", Link: "/simple-carousel" },
      { Name: "Fullscreen Slider", Link: "/fullscreen-slider" },
    ]
  },
  {
    Name: "Mint Page",
    Link: "/mint",
    class: "flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-blue-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-green-400",
    Icon: FaDollarSign,
    showArrow: false, // No arrow for this item
  },
  {
    Name: "Collections",
    Link: "/collectiona",
    class: "flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-pink-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-pink-400",
    Icon: FaImages,
    showArrow: false, // Added property for arrow visibility
  },
  {
    Name: "Blog",
    Link: "/",
    class: "flex items-center gap-3 p-3 rounded-xl group bg-gray-800 hover:bg-yellow-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-yellow-400 group-hover:text-yellow-100 group-hover:translate-x-1 transition-all duration-300",
    Icon: FaBookOpen,
    showArrow: true, // Added property for arrow visibility
    subItems: [
      { Name: "Coming Soon", Link: "/coming-soon" },
      { Name: "404 Page", Link: "/404" },
      { Name: "Protected Page", Link: "/protected" },
      { Name: "Search No Results", Link: "/search-no-results" },
    ],
  },
];