import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { workEn } from "../locales/en/en";
import { workFr } from "../locales/fr/fr";

export default function Work() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const { locale } = useRouter();
  const source = locale === "en" ? workEn : workFr;

  const setVisibility = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setSelectedImage(null);
    }
  };

  function createArray(value: number) {
    return Array.from(Array(value).keys());
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-300 dark:bg-gradient-to-b dark:from-slate-800 to-black py-[70px]">
      {selectedImage && (
        <Modal isOpen={open} setVisibility={setVisibility}>
          <div className="bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md  flex flex-col">
            <div
              className={
                "relative h-[80vh] sm:h-[85vh] w-[90vw]  sm:w-[1000px]"
              }
            >
              <Image
                className={""}
                loading="lazy"
                src={selectedImage}
                alt="item"
                layout="fill"
                objectPosition={"center"}
                objectFit={"contain"}
                placeholder="blur"
                blurDataURL={selectedImage}
              />
            </div>
            <p className="w-full text-black dark:text-white px-10 py-4 text-base font-Montserrat">
              LolaDeco&reg; Photos
            </p>
          </div>
        </Modal>
      )}
      <div className=" mx-auto ">
        <div className="container mx-auto px-5  w-full flex flex-col   ">
          <h1 className="text-slate-900 dark:text-white  pb-7 text-6xl font-Oswald ">
            {source.title}
          </h1>
          {source.items.map(
            ({ title, imagesCount, path, description }, categoryIndex) => (
              <div key={categoryIndex} className="">
                <h2 className="text-slate-900 dark:text-white text-4xl font-Oswald leading-relaxed ">
                  {title}
                </h2>
                {description && (
                  <div
                    className={
                      "text-black dark:text-white text-md text-left font-RobotoC text-xl font-light  mb-4"
                    }
                  >
                    {description}
                  </div>
                )}
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto py-10">
                  {createArray(imagesCount).map((item) => (
                    <div
                      key={item}
                      className={
                        "relative transition-all duration-300 flex items-center h-auto mx-auto"
                      }
                    >
                      <div className="relative w-80 h-80 rounded-lg shadow-xl hover:shadow-2xl bg-black overflow-hidden">
                        <Image
                          onClick={() => {
                            setSelectedImage(`${path}image${item + 1}.webp`);
                            setVisibility(true);
                          }}
                          className=" object-cover hover:object-contain scale-100 sm:scale-110   hover:scale-100 lg:grayscale-70 hover:grayscale-0  transition-all duration-500 ease-in-out"
                          loading="lazy"
                          src={`${path}image${item + 1}.webp`}
                          alt="item"
                          layout="fill"
                          objectPosition={"center"}
                          objectFit="fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
