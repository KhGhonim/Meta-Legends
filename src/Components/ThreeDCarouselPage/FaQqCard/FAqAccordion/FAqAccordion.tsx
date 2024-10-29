import { motion } from "framer-motion";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}
export default function FAqAccordion({ question, answer }: FAQ) {
  const [IsClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div className="w-96 border-[#dddddd75] border-dotted rounded-3xl shadow-2xl border-[1px] py-5 px-7">
      <div
        onClick={() => setIsClicked(!IsClicked)}
        className="w-full flex justify-between items-center cursor-pointer  "
      >
        <div className="relative text-[#dddd]  text-center">
          <h1 className="text-lg font-bold">{question}</h1>
          <h1 className="absolute inset-0 text-lg font-bold [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            {question}
          </h1>
        </div>
        <div className="w-12 rounded-full h-9 little CTSButton flex justify-center items-center ">
          {IsClicked ? (
            <FaMinus className=" text-sm text-white" />
          ) : (
            <FaPlus className=" text-sm text-white" />
          )}
        </div>
      </div>
      {/* Line animation */}
      {IsClicked && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="h-[0.5px] mt-5 bg-[#dddddd75]"
        />
      )}

      {/* Answer animation */}
      {IsClicked && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: IsClicked ? 1 : 0, y: IsClicked ? 0 : -10 }}
          transition={{ duration: 0.5, easing: "easeInOut" }}
          className="w-full mt-5 text-[#dddddd75] text-center"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}
