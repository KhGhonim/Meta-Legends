import moment from "moment";
import { useState, useEffect } from "react";
import TimeUnit from "./TimeUnit";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
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

  return (
    <div className="w-full flex flex-col   h-screen">
      <div className="w-full h-full gap-3 md:gap-7 max-md:pt-8 flex flex-wrap justify-center items-end mb-10">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="hidden md:block w-5 h-5 border border-[#ddd] rounded-full"></div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="w-5 h-5 hidden md:block border border-[#ddd] rounded-full"></div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="w-5 h-5 hidden md:block border border-[#ddd] rounded-full"></div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="w-full max-lg:px-10  h-full flex flex-col justify-start items-center">
        <h1 className="text-4xl text-[#dddd] md:text-6xl lg:text-7xl font-bold">
          Public Minting is Coming Soon
        </h1>
        <h6 className="text-2xl text-[#ddddddab]">
          Our website is coming soon. We are currently working on our website.
          Please check again within couple days.
        </h6>
      </div>
    </div>
  );
}
