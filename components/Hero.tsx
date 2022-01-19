import Link from "next/link";
import {useRouter} from "next/router";
import {heroFr} from "../locales/fr/fr";
import {heroEn} from "../locales/en/en";

export default function Hero() {
    const {locale} = useRouter()
    const source = locale === "en" ? heroEn : heroFr;
    return (
        <div
            className=" flex justify-center items-center relative min-h-screen bg-gradient-to-br from-gray-700 to-gray-900">
            <video
                playsInline
                preload="none"
                src={"/videos/hero.mp4"}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 right-0 bottom-0 w-full min-h-screen h-full object-cover"
            />
            <div className=" absolute top-0 left-0 min-h-screen min-w-full bg-[#191919] opacity-30 mix-blend-multiply"/>

            <div className="lg:container mx-auto w-full h-full flex flex-col items-center justify-end  z-[3]">
                <div className="prose lg:prose-lg w-auto h-auto flex items-center justify-center flex-col">
                    <h1 className="uppercase text-center text-white font-BebasNeue tracking-wider text-5xl">
                        {source.title}
                    </h1>
                    <h3 className="text-white text-center flex flex-col items-center justify-evenly">
                        <span className="text-3xl font-BebasNeue">{source.subtitle1}</span>
                        <span className="font-Cinzel text-4xl sm:text-6xl">
               {source.subtitle2}
            </span>
                        <span className="text-3xl font-BebasNeue">{" & "}</span>
                        <span className="font-Montserrat text-4xl sm:text-6xl">
              {source.subtitle3}
            </span>
                    </h3>
                    <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mx-auto justify-evenly">
                        <Link href={"#contact"} passHref>
                            <button
                                type="button"
                                className="min-w-[120px] w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                {source.contact}
                            </button>
                        </Link>
                        <Link href={"#services"} passHref>
                            <button
                                type="button"
                                className="min-w-[120px] mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                {source.explore}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
