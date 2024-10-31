import moment from "moment";
import { useEffect, useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

export default function PublicMInt() {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateTimeLeft = () => {
    const now = moment();
    const endDate = moment("2025-11-30 23:59:59", "YYYY-MM-DD HH:mm:ss");
    const duration = moment.duration(endDate.diff(now));

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const [Q, setQ] = useState<number>(1);
  const [Total, setTotal] = useState<number>(2.25);
  const [remaining, setremaining] = useState(344);

  const HandleMinus = () => {
    setQ((prev) => {
      if (prev <= 1) {
        return prev; // Prevent going below 1
      } else {
        const newQ = prev - 1;
        setremaining(remaining + 1);
        setTotal(newQ * 2.25); // Update total after decreasing
        return newQ;
      }
    });
  };

  const HandlePlus = () => {
    setQ((prev) => {
      if (prev >= 5) {
        return prev; // Prevent going above 5
      } else {
        const newQ = prev + 1;
        setremaining(remaining - 1);
        setTotal(newQ * 2.25); // Update total after increasing
        return newQ;
      }
    });
  };

  return (
    <div className="w-full h-full  lg:container lg:mx-auto lg:px-3 relative p-5 md:p-14 lg:p-16">
      {/* The Card */}
      <div className="w-full h-full md:h-[550px] relative flex flex-col md:flex-row rounded-2xl border border-[#dddddd6d]">
        {/* The Badge */}
        <div className="absolute top-10 -left-2 w-56 py-3 px-5 rounded-tr-3xl bg-[#56B201] text-[#ffffff] z-10">
          Public Mint is Live
        </div>

        {/* The Left Part */}
        <div className="w-full h-full md:w-2/3 space-y-10 flex flex-col px-8 pt-32 pb-5 ">
          <div className="w-full flex  gap-10">
            <div className="w-full flex flex-col space-y-2 group">
              <h1 className="text-sm md:text-lg text-[#dddddd70] ">Price</h1>
              <p className="text-[#dddd] text-sm md:text-2xl font-bold">
                2.25 ETH
              </p>
              <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
                <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-2 group">
              <h1 className="text-sm md:text-lg text-[#dddddd70] ">
                Remaining
              </h1>
              <p className="text-[#dddd] text-sm md:text-2xl font-bold">
                {remaining}/999
              </p>
              <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
                <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex  gap-10">
            <div className="w-full flex flex-col space-y-2 group">
              <h1 className="text-sm md:text-lg text-[#dddddd70] ">Quantity</h1>
              <div className="w-full flex items-center space-x-5 text-[#dddd]">
                <span>
                  <FaPlus
                    onClick={HandlePlus}
                    className="cursor-pointer hover:text-purple-500 hover:scale-110 transition-all duration-500 text-sm md:text-2xl"
                  />
                </span>
                <p className=" text-sm md:text-2xl font-bold">{Q}</p>
                <span>
                  <FaMinus
                    onClick={HandleMinus}
                    className="cursor-pointer hover:text-purple-500 hover:scale-110 transition-all duration-500 text-sm md:text-2xl"
                  />
                </span>
              </div>
              <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
                <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-2 group">
              <h1 className="text-sm md:text-lg text-[#dddddd70] ">
                Total Price
              </h1>
              <p className="text-[#dddd] text-sm md:text-2xl font-bold">
                {Total.toFixed(2)} ETH+GAS
              </p>
              <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
                <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center px-16 md:px-20 mt-5 ">
            <button className="CTSButton little text-xs md:text-sm lg:text-lg hover:shadow-custom text-white font-extralight py-3 px-10 rounded">
              MINT NOW
            </button>
          </div>

          <div className="w-full">
            <p className="text-[#dddddd6a] text-sm md:text-base lg:text-lg">
              {" "}
              By clicking “MINT NOW” button, you agree to our
            </p>
            <p className="text-[#dddddd6a] text-sm md:text-base lg:text-lg">
              {" "}
              <span className="relative mr-1 text-sm md:text-base lg:text-lg cursor-pointer text-[#dddd] inline-block bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_100%] bg-clip-text bg-left bg-no-repeat hover:bg-[length:100%_100%] transition-all duration-700 ease-in-out ">
                Terms of Service
              </span>
              and our{" "}
              <span className="relative text-sm md:text-base lg:text-lg text-[#dddd] cursor-pointer inline-block bg-gradient-to-r from-purple-700 to-purple-700 bg-[length:0%_100%] bg-clip-text bg-left bg-no-repeat hover:bg-[length:100%_100%] transition-all duration-700 ease-in-out ">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>

        {/* The Right Part */}
        <div className="w-full md:w-1/3 h-full  bg-[#181226] bg-opacity-50 rounded-br-2xl z-10 rounded-tr-2xl max-md:rounded-bl-2xl border-l-[0.5px] border-[#dddddd6d] py-14 md:pt-32 px-5 md:px-8">
          <div className="w-full flex flex-col  group">
            <div className="text-lg text-[#dddddd70]  font-bold">
              Public Mint Ends In
            </div>

            <div className="text-[#dddd] text-sm md:text-base lg:text-2xl font-bold space-x-1 mb-2">
              <span>{timeLeft?.days}D </span> :<span>{timeLeft?.hours}H </span>{" "}
              :<span>{timeLeft?.minutes}M </span> :
              <span>{timeLeft?.seconds}S</span>
            </div>
            <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
              <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>

            <div className="w-full flex flex-col  space-y-3 pt-10 text-[#dddd]">
              <div className="text-[#dddd] text-sm md:text-base lg:text-2xl  space-x-1 mb-2 flex ">
                <p className="text-[#dddddd70] font-light">Whitelist:</p>
                <p className="text-[#dddd] font-bold">Soldout</p>
                <p className="flex justify-center pl-2  items-center ">
                  <FaCheck className="text-black rounded-full p-1 bg-green-500 cursor-pointer text-lg" />
                </p>
              </div>
              <div className="text-[#dddd] text-sm md:text-base lg:text-2xl  space-x-1 mb-2 flex ">
                <p className="text-[#dddddd70] font-light">Presale:</p>
                <p className="text-[#dddd] font-bold">Soldout</p>
                <p className="flex justify-center pl-2  items-center ">
                  <FaCheck className="text-black rounded-full p-1 bg-green-500 cursor-pointer text-lg" />
                </p>
              </div>
            </div>

            <p className="w-full text-[#dddddd9a] mt-10 text-sm font-light">
              You need to pay a GAS fee during minting. We allow max 5 mints per
              wallet.
            </p>
          </div>
        </div>
      </div>

      {/* The Bottom Colmuns Part */}
      <div className="w-full h-full md:h-96 grid grid-cols-1  pt-16 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* The 1st Col */}
        <div className="w-full flex flex-col  gap-10">
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Clothing
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Black Yukata
            </p>
            <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
              <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Mouth
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Not Bad
            </p>
            <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
              <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
        </div>

        {/* The 2st Col */}
        <div className="w-full flex flex-col  gap-10">
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Eyes
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Daydreaming
            </p>
            <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
              <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Neck
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Zen Headphones
            </p>
            <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
              <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
        </div>

        {/* The 3st Col */}
        <div className="w-full flex flex-col  gap-10">
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Special
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Fireflies, Smoke
            </p>
            <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
              <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Eyes
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Striking
            </p>
            <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
              <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
        </div>

        {/* The 4st Col */}
        <div className="w-full flex flex-col  gap-10">
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Type
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Human, Sand
            </p>
            <div className="w-full h-[0.5px] bg-[#dddddd60] bg-opacity-0 relative">
              <div className="absolute w-full group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2 group">
            <h1 className="text-sm md:text-base lg:text-2xl text-[#dddddd70] ">
              Neck
            </h1>
            <p className="text-[#dddd] text-sm md:text-2xl font-bold">
              Zen Headphones
            </p>
            <div className="w-full h-[0.5px]  bg-[#dddddd60] relative">
              <div className="absolute w-full  group-hover:h-[2px]  scale-x-0 group-hover:bg-purple-500 origin-left transition-all duration-700 group-hover:scale-x-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
