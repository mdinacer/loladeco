import Link from "next/link";
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
      <div className=" relative flex items-center justify-center flex-col text-white">
        <h1 className="  flex flex-col ">
          <span className="font-GreatVibes text-9xl translate-y-8 ">Lola </span>
          <span className="font-Oswald text-right text-6xl translate-x-3 ">
            Deco
          </span>
        </h1>
        <p className="max-w-lg font-RobotoC mt-4 font-light text-2xl text-center">
          Une passerelle permanente entre une tradition d’excellence et un
          savoir-faire moderne.
        </p>
      </div>
    </div>
    // <div className=" flex justify-center items-center relative min-h-screen bg-gradient-to-br from-gray-200 to-gray-900">
    //   <video
    //     playsInline
    //     preload="none"
    //     src={"/videos/hero.mp4"}
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute top-0 left-0 right-0 bottom-0 w-full min-h-screen h-full object-cover"
    //   />
    //   <div className=" absolute top-0 left-0 min-h-screen min-w-full bg-gradient-to-br from-slate-800 to-black opacity-50  bg-blend-color-overlay " />

    //   <div className="lg:container mx-auto w-full h-full flex flex-col items-center justify-end  z-[3]">
    //     <div className="w-auto h-auto flex items-center justify-center flex-col">
    //       <h1 className="uppercase text-center text-white font-BebasNeue tracking-wider text-5xl sm:text-7xl leading-snug">
    //         {source.title}
    //       </h1>
    //       <h2 className="text-white text-center font-normal font-Montserrat leading-tight text-xl sm:text-2xl">
    //         {source.subtitle}
    //       </h2>
    //       <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mx-auto justify-evenly">
    //         <Link href={"#contact"} passHref>
    //           <button
    //             type="button"
    //             className="min-w-[120px] w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
    //           >
    //             {source.contact}
    //           </button>
    //         </Link>
    //         <Link href={"#services"} passHref>
    //           <button
    //             type="button"
    //             className="min-w-[120px] mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    //           >
    //             {source.explore}
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
