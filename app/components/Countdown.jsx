"use client";
import { useState, useEffect } from "react";
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 justify-center items-center ">
      {/* times */}
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div className="flex flex-col gap-4 items-center justify-center">
          <section className="h-[200px] flex w-[200px] bg-black rounded-xl ">
            <div className="h-[190px] overflow-x-hidden relative w-full bg-[#34364f] flex items-center justify-center rounded-xl ">
              <span className="text-[100px] translate-y-[-9px] font-bold text-[#f95d84] mt-2 uppercase">
                {String(value).padStart(2, "0")}
              </span>
              {/* line */}
              <div className="w-full flex items-center justify-center absolute top-[95px]">
                <div className="h-[16px] -left-2 absolute z-50 w-[16px] bg-black rounded-full " />
                <div className="w-full absolute bg-black rounded-xl shadow-2xl h-[1.5px]  " />
                <div className="h-[16px] -right-2 absolute  w-[16px] bg-black rounded-full " />
              </div>
            </div>
          </section>
          <p className="text-white tracking-[0.3em] uppercase  text-opacity-35 font-bold">
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  // Set your target date (e.g., 8 days from now)
  const targetDate = new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000);

  return <CountdownTimer targetDate={targetDate} />;
}
