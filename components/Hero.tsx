import { useRouter } from "next/router";
import { heroFr } from "../locales/fr/fr";
import { heroEn } from "../locales/en/en";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const { locale } = useRouter();
  const source = locale === "en" ? heroEn : heroFr;
  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <video
        playsInline
        preload="lazy"
        src={"/videos/hero1.mp4"}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 right-0 bottom-0 w-full  h-screen object-cover object-center"
      />
      <div className="absolute top-0 left-0 h-screen w-full mix-blend-multiply opacity-100  bg-gradient-to-b from-[#FFAFAF]  to-[#655D8A]"></div>
      <div className="absolute top-0 left-0 h-screen w-full mix-blend-multiply opacity-20  bg-black"></div>
      <div className=" relative flex items-center justify-center flex-col text-white">
        <h1 className="  flex flex-col ">
          <span className="font-GreatVibes text-9xl translate-y-8 ">Lola </span>
          <span className="font-Oswald text-right text-6xl translate-x-3 ">
            Deco
          </span>
        </h1>
        <p className="max-w-lg font-RobotoC mt-4 font-light text-2xl text-center">
          {source.title}
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <SocialLinks />
      </div>
    </div>
  );
}
