export default function Divider() {
  return (
    <div className="w-full  flex flex-row justify-center items-center my-16">
      <div className="w-full h-full border-[#dddddd6d] border-dotted border-[1px]"></div>
      <div className="mx-5 flex justify-center items-center">
        <p className="rounded-full p-1 border-2 border-[#dddddd6d]"></p>
        <p className="rounded-xl w-10 md:w-32 lg:w-40 mx-3 p-1 border-2 border-[#dddddd6d]"></p>
        <p className="rounded-full p-1 border-2 border-[#dddddd6d]"></p>
      </div>

      <div className="w-full h-full border-[#dddddd6d] border-dotted border-[1px]"></div>
    </div>
  );
}
