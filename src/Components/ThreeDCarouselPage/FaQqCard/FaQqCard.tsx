import FAqAccordion from "./FAqAccordion/FAqAccordion";

export default function FaQqCard() {
  return (
    <div className="w-full h-full my-12 md:my:16 lg:my-24 container mx-auto">
      <div className="w-full h-full flex flex-col md:flex-row gap-5 ">
        <div className="w-full md:w-2/5 h-full text-[#dddd] max-md:p-5">
          <div className="relative mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">FAQ</h1>
            <h1 className="absolute inset-0 text-4xl md:text-5xl lg:text-7xl font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
              FAQ
            </h1>
          </div>
          <div>
            <div className="w-44 h-[3px] bg-[#dddd] relative ">
              <span className="w-1/5 bg-[#dddd] absolute h-1/2  left-1/4 rotate-45"></span>
              <span className="w-1/5  bg-[#dddd] absolute h-1/2  left-1/3 rotate-45"></span>
            </div>
          </div>

          <div className="flex flex-col gap-5 my-10 text-[#dddddd81]">
            <p className="text-sm md:text-base">
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </p>
            <p className="text-sm md:text-base">
              The artwork has been hand-drawned by Robert Green in the
              programming of the Meta Legends game.
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/5 h-full flex justify-between items-center ">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <FAqAccordion
                question={"What Is Meta Legends?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"What Is The Art Of Seasons?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"How Do I Stay Updated?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"Why Do I Love Meta Legends?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
            </div>
            <div className="flex flex-col gap-5">
              <FAqAccordion
                question={"How Can I Mint Meta Legends?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"How Many Legends Are There?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"When Is The Mint Date?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
              <FAqAccordion
                question={"What About the Blockchain?"}
                answer={`A handcrafted collection of 10,000 characters developed by artist
            SRBThemes. In its purest form, RENGA is art and the art of
            storytelling.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
