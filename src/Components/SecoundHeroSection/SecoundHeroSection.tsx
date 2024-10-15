import SecoundHeroSectionBGPhoto from "../../assets/MiniSection/SecoundHeroSectionBGPhoto.jpg";
import SecoundHeroSectionPhoto from "../../assets/MiniSection/SecoundHeroSectionPhoto.jpg";
export default function SecoundHeroSection() {
  return (
    <div  id="about" className="w-full h-full lg:h-dvh flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-3/5 h-full relative">
        <div className="w-full lg:w-10/12 max-md:h-dvh md:h-full z-10">
          <img
            src={SecoundHeroSectionBGPhoto}
            className="w-full h-full object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="absolute inset-0 w-full lg:w-10/12 h-full bg-gradient-to-r from-[rgb(27,17,38)] to-[rgb(0,0,0)] opacity-70"></div>
      </div>

      <div className=" md:max-lg:w-3/5 md:max-lg:h-2/5  absolute  md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-100%] max-md:top-0 max-md:left-0 max-md:-translate-y-[-50%] max-md:translate-x-[0%] lg:top-1/2  lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]">
        <img
          src={SecoundHeroSectionPhoto}
          className="w-full lg:w-3/5 h-full object-cover rounded-3xl p-5 transition-all duration-500 ease-in-out transform   bg-transparent bg-opacity-30 border border-white shadow-2xl"
          alt=""
        />
      </div>

      <div className="w-full lg:w-2/5 h-full py-16 md:mt-48 lg:mt-0 max-md:px-5 z-20">
        <div className="w-full lg:w-10/12 max-lg:h-full h-dvh lg:h-full space-y-6">
          <div className="relative mb-3 ">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold ">
              The Rise of Legends
            </h1>
            <h1 className="absolute inset-0 text-xl md:text-3xl z-40  lg:text-5xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
              The Rise of Legends
            </h1>
          </div>
          <div className="w-32 h-0.5 bg-[#dddddd6d] relative ">
            <span className="w-1/5 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
            <span className="w-1/5  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
          </div>
          <p className="text-base text-[#dddddd]">
            As the first hero of the Meta Legends, collection has over 9,999
            unique skins drawn from the different missions and challenges he
            faced throughout his life.
          </p>
          <p className="text-base text-[#dddddd]">
            The artwork has been hand-drawned by Robert Green in the traditional
            anime style and composited by Layla Efiyo.
          </p>
          <p className="text-base text-[#dddddd]">
            Curabitur pharetra velit eget dignissim varius. In vulputate elit at
            tortor pellentesque, non pulvinar neque consequat. Aenean tristique
            odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut
            blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum
            elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus
            sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat.
            Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed
            porta lorem eget neque bibendum, eget euismod justo mollis.
          </p>
          <p className="text-base text-[#dddddd]">
            Donec tristique porttitor sem, eget fermentum elit varius nec. Donec
            ut orci ipsum. Morbi efficitur felis eget dapibus fermentum.
            Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin
            neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue
            odio commodo at. Cras ante enim, sodales at pretium et, tempus at
            libero.
          </p>
          <button className="CTSButton little hover:shadow-custom text-white font-extralight py-3 px-8 rounded">
            FIND US ON DISCORD
          </button>
        </div>
      </div>
    </div>
  );
}
