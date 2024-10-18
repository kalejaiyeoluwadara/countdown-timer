"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false); // To check if component is mounted

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
    setIsMounted(true); // Mark component as mounted

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent rendering until component mounts to avoid hydration errors
  if (!isMounted) return null;

  return (
    <div className="flex   sm:w-auto w-full space-x-2 sm:space-x-4 justify-center items-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div
          key={index} // Added key to prevent React warning
          className="flex  sm:w-auto w-[80px]  flex-col gap-2 sm:gap-4 items-center justify-center"
        >
          <section className="sm:h-[200px] h-[100px] w-[80px] flex sm:w-[200px] bg-black rounded-md">
            <div className="sm:h-[190px] h-[90px] overflow-hidden relative w-full bg-[#34364f] flex items-center justify-center rounded-md">
              <span className="sm:text-[100px] text-3xl translate-y-[-9px] font-bold text-[#f95d84] mt-2 uppercase">
                {String(value).padStart(2, "0")}
              </span>
              {/* line */}
              <div className="w-full flex items-center justify-center absolute sm:top-[95px] top-[45px] ">
                <div className="h-[16px] -left-2 absolute z-50 w-[16px] bg-black rounded-full" />
                <div className="w-full absolute bg-black rounded-xl shadow-2xl h-[1.5px]" />
                <div className="h-[16px] -right-2 absolute w-[16px] bg-black rounded-full" />
              </div>
            </div>
          </section>
          <p className="text-white tracking-[0.3em] sm:text-base text-xs uppercase text-opacity-35 font-bold">
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
