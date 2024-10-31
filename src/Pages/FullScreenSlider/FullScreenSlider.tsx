import Divider from "../../Components/Divider/Divider";
import FullSlider from "../../Components/FullScreenSliderPage/FullSlider";
import ContactHome from "../../Components/HomePage/Contact/ContactHome";
import OurCollection from "../../Components/HomePage/OurCollection/OurCollection";
import RoadMap from "../../Components/HomePage/RoadMap/RoadMap";
import CrouselCard from "../../Components/ThreeDCarouselPage/CrouselCard/CrouselCard";
import CrouselNumAndCommunity from "../../Components/ThreeDCarouselPage/CrouselNumAndCommunity/CrouselNumAndCommunity";
import CrouselVideo from "../../Components/ThreeDCarouselPage/CrouselVideo/CrouselVideo";
import FaQqCard from "../../Components/ThreeDCarouselPage/FaQqCard/FaQqCard";
import TotalItemsOfCollection from "../../Components/ThreeDCarouselPage/TotalItemsOfCollection/TotalItemsOfCollection";

export default function FullScreenSlider() {
  return (
    <div className="w-full h-full">
      <FullSlider />
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
      <Divider />
      <ContactHome />
    </div>
  );
}
