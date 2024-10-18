"use client";
import Image from "next/image";
import hills from "@/app/images/hills.svg";
import stars from "@/app/images/stars.svg";
import facebook from "@/app/images/facebook.svg";
import pinterest from "@/app/images/pinterest.svg";
import instagram from "@/app/images/instagram.svg";
import App from "./components/Countdown";
export default function Home() {
  const images = [facebook, pinterest, instagram];
  return (
    // #231d2b
    <main className="sm:h-screen relative  w-full flex-col bg-[#231d2b] min-h-screen overflow-hidden flex items-center justify-center">
      <main className="relative sm:w-auto w-full z-40">
        <h2 className="text-xl tracking-[0.2em] mb-10 w-full text-center font-bold text-white ">
          WE'RE LAUNCHING SOON
        </h2>
        <App />
      </main>
      <footer className="flex gap-6 w-full items-center justify-center absolute bottom-10 z-[60] ">
        {images.map((image, id) => {
          return (
            <Image
              className=" fill-black cursor-pointer "
              height={20}
              width={20}
              src={image}
              alt="social icon"
            />
          );
        })}
      </footer>
      <Image
        className="absolute top-0 w-full h-full z-10 "
        src={stars}
        alt="star background"
      />
      <Image
        className="absolute bottom-0 w-full z-20 h-[100px] "
        src={hills}
        alt=""
      />
    </main>
  );
}
