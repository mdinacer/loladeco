import { useRouter } from "next/router";
import { heroFr } from "../locales/fr/fr";
import { heroEn } from "../locales/en/en";

export default function Hero() {
  const { locale } = useRouter();
  const source = locale === "en" ? heroEn : heroFr;
  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-">
      <video
        playsInline
        preload="none"
        src={"/videos/hero1.mp4"}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 right-0 bottom-0 w-full  h-screen object-cover object-center"
      />
      <div className="absolute top-0 left-0 h-screen w-full mix-blend-multiply opacity-70  bg-gradient-to-b from-[#EDCDBB]  to-black"></div>
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
      <div className="z-[3] absolute left-0 bottom-0 flex flex-row h-auto mx-5 mb-5 ">
        <a
          rel="noreferrer"
          target={"_blank"}
          href={"https://www.facebook.com/profile.php?id=100070601695671"}
          className=" fill-white bg-clip-text opacity-20 hover:opacity-100 transition-all duration-300 mx-3"
        >
          {""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            {" "}
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
          </svg>
        </a>
        <a
          href={"https://www.instagram.com/"}
          rel="noreferrer"
          target={"_blank"}
          className="  fill-white bg-clip-text opacity-20 hover:opacity-100 transition-all duration-300 mx-3"
        >
          {""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            {" "}
            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
