import ContactHome from "../../Components/HomePage/Contact/ContactHome";
import Divider from "../../Components/Divider/Divider";
import Articles from "../../Components/HomePage/Articles/Articles";
import HeroSectionSlider from "../../Components/HomePage/HeroSectionSlider/HeroSectionSlider";
import HowToMint from "../../Components/HomePage/HowToMint/HowToMint";
import InfoBar from "../../Components/HomePage/InfoBar/InfoBar";
import OurCollection from "../../Components/HomePage/OurCollection/OurCollection";
import RoadMap from "../../Components/HomePage/RoadMap/RoadMap";
import SecoundHeroSection from "../../Components/HomePage/SecoundHeroSection/SecoundHeroSection";

export default function Home() {
  return (
    <>
      {/* <HeroSectionVideo /> */}
      <HeroSectionSlider />
      <InfoBar />
      <SecoundHeroSection />
      <Divider />
      <HowToMint />
      <Divider />
      <OurCollection />
      <Divider />
      <RoadMap />
      <Divider />
      <Articles />
      <Divider />
      <ContactHome />
    </>
  );
}
