import Image from "next/image";
import { useRouter } from "next/router";
import { servicesEn } from "../locales/en/en";
import { servicesFr } from "../locales/fr/fr";

export default function Services() {
  const { locale } = useRouter();
  const source = locale === "en" ? servicesEn : servicesFr;

  const elements = [
    {
      title: source.item1,
      image: "/images/services1.webp",
      description: source.itemDesc1,
    },
    {
      title: source.item2,
      image: "/images/services2.webp",
      description: source.itemDesc2,
    },
    {
      title: source.item3,
      image: "/images/services3.webp",
      description: source.itemDesc3,
    },
    {
      title: source.item4,
      image: "/images/services4.webp",
      description: source.itemDesc4,
    },
    {
      title: source.item5,
      image: "/images/services5.webp",
      description: source.itemDesc5,
    },
    {
      title: source.item6,
      image: "/images/services6.webp",
      description: source.itemDesc6,
    },
    {
      title: source.item7,
      image: "/images/services7.webp",
      description: source.itemDesc7,
    },
    {
      title: source.item8,
      image: "/images/services8.webp",
      description: source.itemDesc8,
    },
    {
      title: source.item9,
      image: "/images/services9.webp",
      description: source.itemDesc9,
    },
  ];

  return (
    <div className=" py-20 relative min-h-screen bg-slate-300 dark:bg-gradient-to-b dark:from-black to-slate-800 ">
      <article className="prose lg:prose-lg  md:container px-5  mx-auto ">
        <h1 className="text-slate-900 dark:text-white font-Montserrat leading-10">
          {source.title}
        </h1>
        <div className=" grid grid-cols-1 grid-flow-row lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-4 ">
          {elements.map((element, index) => (
            <div
              key={index}
              className=" w-full  lg:flex rounded-lg overflow-hidden drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
            >
              <div
                className={
                  "relative h-[60vh] lg:h-100 w-full flex-none bg-cover  rounded-lg overflow-hidden flex items-end justify-center transition-all duration-300   lg:grayscale-80 hover:grayscale-0  "
                }
                title={element.title}
              >
                <div className="relative top-0 left-0 right-0 bottom-0 h-[60vh] lg:h-100 w-full flex-none bg-cover">
                  <Image
                    loading="lazy"
                    src={element.image ?? "/images/services4.jpg"}
                    alt={element.title}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={element.image}
                    className=" object-cover object-bottom"
                  />
                </div>
                <div className=" absolute bottom-0 left-0 h-min w-full pt-8  p-4  flex flex-col justify-center items-start  bg-slate-200 dark:bg-slate-900 bg-opacity-30 dark:bg-opacity-80 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 ">
                  <div className="text-slate-900 dark:text-white font-normal  mb-2 font-BebasNeue text-3xl ">
                    {element.title}
                  </div>
                  {element.description && (
                    <p
                      className={
                        "text-black dark:text-slate-400 text-sm text-left h-auto font-Montserrat  "
                      }
                    >
                      {element.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
