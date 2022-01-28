import { useRouter } from "next/router";
import { heroFr } from "../locales/fr/fr";
import { heroEn } from "../locales/en/en";

export default function Hero() {
  const { locale } = useRouter();
  const source = locale === "en" ? heroEn : heroFr;
  return (
    <div className="  h-screen w-full flex justify-center items-center overflow-hidden">
      <video
        playsInline
        preload="none"
        src={
          "https://vod-progressive.akamaized.net/exp=1643423743~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F620%2F25%2F628100777%2F2895244360.mp4~hmac=adb63bdae3a02a94514dd0bf23b2445c9ba7e7703054dd7abaafd6dd9f95fcce/vimeo-prod-skyfire-std-us/01/620/25/628100777/2895244360.mp4?download=1&filename=pexels-ron-lach-9850291.mp4"
        }
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 right-0 bottom-0 w-full  h-screen object-cover object-center"
      />
      <div className="absolute top-0 left-0 h-screen w-full mix-blend-multiply opacity-70  bg-gradient-to-b from-[#F05454]  to-black"></div>
      <div className="absolute top-0 left-0 h-screen w-full mix-blend-multiply opacity-30  bg-black"></div>
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
    </div>
  );
}
