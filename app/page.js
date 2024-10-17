import Image from "next/image";
import hills from "@/app/images/hills.svg";
import stars from "@/app/images/stars.svg";
import App from "./components/Countdown";
export default function Home() {
  return (
    // #231d2b
    <main className="sm:h-screen relative  w-full flex-col bg-[#231d2b] h-screen flex items-center justify-center">
      <main className="relative z-40">
        <h2 className="text-xl tracking-[0.2em] mb-10 w-full text-center font-bold text-white ">
          WE'RE LAUNCHING SOON
        </h2>
        <App />
      </main>
      <footer></footer>
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
