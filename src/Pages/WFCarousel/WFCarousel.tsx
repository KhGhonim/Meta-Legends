import PublicMInt from "../../Components/Mint/PublicMInt/PublicMInt";
import Divider from "../../Components/Divider/Divider";
import WFCarouselHeroSection from "../../Components/WFCarouselPage/WFCarouselHeroSection";
import FilterSection from "../Collection/FilterSection/FilterSection";

export default function WFCarousel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-dvh overflow-hidden relative">
        <WFCarouselHeroSection />
      </div>
      <PublicMInt />
      <Divider />
      <FilterSection />
    </div>
  );
}
