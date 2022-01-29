import Image from "next/image";
import { useRouter } from "next/router";
import { servicesEn } from "../locales/en/en";
import { servicesFr } from "../locales/fr/fr";

export default function Services() {
  const { locale } = useRouter();
  const source = locale === "en" ? servicesEn : servicesFr;

  return (
    <div className=" py-20 relative min-h-screen bg-slate-300 dark:bg-gradient-to-b dark:from-slate-900 to-slate-800 ">
      <article className="prose lg:prose-lg  md:container px-5  mx-auto ">
        <h1 className="text-slate-900 dark:text-white font-Montserrat leading-10">
          {source.title}
        </h1>
        <div className="lg:container mx-auto px-4 sm:px-20">
          <div className="  grid grid-cols-1 grid-flow-row lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-4 ">
            {source.items.map(({ title, image, description }, index) => (
              <div
                key={index}
                className=" w-full  lg:flex rounded-lg overflow-hidden drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
              >
                <div
                  className={
                    "relative h-[60vh] lg:h-100 w-full flex-none bg-cover  rounded-lg overflow-hidden flex items-end justify-center transition-all duration-300  lg:grayscale-80 hover:grayscale-0  "
                  }
                  title={title}
                >
                  <div className="relative top-0 left-0 right-0 bottom-0 h-[60vh] lg:h-100 w-full flex-none bg-cover">
                    <Image
                      loading="lazy"
                      src={image ?? "/images/services4.webp"}
                      alt={title}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={image}
                      className=" object-cover object-bottom"
                    />
                  </div>
                  <div className=" absolute bottom-0 left-0 h-auto w-full pt-8  p-4  flex flex-col justify-center items-start  bg-slate-200 dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md  ">
                    <div className="text-slate-900 dark:text-white font-normal  font-BebasNeue text-3xl leading-tight ">
                      {title}
                    </div>
                    {description && (
                      <div
                        className={
                          "text-black dark:text-white text-md text-left   font-Montserrat leading-tight "
                        }
                      >
                        {description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
