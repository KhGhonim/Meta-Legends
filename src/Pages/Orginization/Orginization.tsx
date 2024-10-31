import OrginizationHeroSection from "../../Components/OrginizationPage/OrginizationHeroSection/OrginizationHeroSection";
import bg from "../../assets/bg.avif";

export default function Orginization() {
  return (
    <div
      style={{
        backgroundImage: `
      linear-gradient(0deg, #07041b00, #07041b4d 80%, #07041b), 
      linear-gradient(180deg, #07041b00, #07041b4d 80%, #07041b), 
      url(${bg})
    `,
        backgroundPosition: "top, bottom, 50%",
        backgroundSize: "100% auto, 100% auto, cover",
        height: "auto",
        padding: "40px",
      }}
      className="w-full h-full"
    >
      <OrginizationHeroSection />
    </div>
  );
}
