import RoadMap from "../../Components/HomePage/RoadMap/RoadMap";
import OurCollection from "../../Components/HomePage/OurCollection/OurCollection";
import ThreeDCrouselHeroSection from "../../Components/ThreeDCarouselPage/ThreeDCrouselHeroSection/ThreeDCrouselHeroSection";
import Articles from "../../Components/HomePage/Articles/Articles";
import ContactHome from "../../Components/HomePage/Contact/ContactHome";
import CrouselCard from "../../Components/ThreeDCarouselPage/CrouselCard/CrouselCard";
import CrouselVideo from "../../Components/ThreeDCarouselPage/CrouselVideo/CrouselVideo";
import CrouselNumAndCommunity from "../../Components/ThreeDCarouselPage/CrouselNumAndCommunity/CrouselNumAndCommunity";
import FaQqCard from "../../Components/ThreeDCarouselPage/FaQqCard/FaQqCard";
import Divider from "../../Components/Divider/Divider";
import TotalItemsOfCollection from "../../Components/ThreeDCarouselPage/TotalItemsOfCollection/TotalItemsOfCollection";

export default function ThreeDCarousel() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <ThreeDCrouselHeroSection />
      <CrouselCard />
      <TotalItemsOfCollection />
      <CrouselVideo />
      <Divider />
      <CrouselNumAndCommunity />
      <Divider />
      <OurCollection />
      <Divider />
      <FaQqCard />
      <RoadMap />
      <Articles />
      <Divider />
      <ContactHome />
    </div>
  );
}
