import ContactHome from "../../Components/Home Page/Contact/ContactHome";
import Divider from "../../Components/Divider/Divider";
import Articles from "../../Components/Home Page/Articles/Articles";
import HeroSectionSlider from "../../Components/Home Page/HeroSectionSlider/HeroSectionSlider";
import HowToMint from "../../Components/Home Page/HowToMint/HowToMint";
import InfoBar from "../../Components/Home Page/InfoBar/InfoBar";
import OurCollection from "../../Components/Home Page/OurCollection/OurCollection";
import RoadMap from "../../Components/Home Page/RoadMap/RoadMap";
import SecoundHeroSection from "../../Components/Home Page/SecoundHeroSection/SecoundHeroSection";

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
