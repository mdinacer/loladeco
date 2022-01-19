import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { workEn } from "../locales/en/en";
import { workFr } from "../locales/fr/fr";

export default function Work() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(-1);
  const [zoomed, setZoomed] = useState(true);
  const { locale } = useRouter();
  const source = locale === "en" ? workEn : workFr;

  const setVisibility = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setSelectedImage(-1);
      setZoomed(true);
    }
  };

  function createArray(value: number) {
    return Array.from(Array(value).keys());
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-300 dark:bg-gradient-to-b dark:from-slate-800 to-black py-[70px]">
      {selectedImage > -1 && (
        <Modal isOpen={open} setVisibility={setVisibility}>
          <div className="bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md  flex flex-col">
            <div
              className={
                "relative h-[80vh] sm:h-[85vh] w-[90vw]  sm:w-[1000px]"
              }
            >
              <Image
                onClick={() => setZoomed(!zoomed)}
                className={""}
                loading="lazy"
                src={`/images/products/product${selectedImage}.webp`}
                alt="item"
                layout="fill"
                objectPosition={"center"}
                objectFit={zoomed ? "cover" : "contain"}
                placeholder="blur"
                blurDataURL={`/images/products/product${selectedImage}.webp`}
              />
              <button
                onClick={() => setZoomed(!zoomed)}
                type="button"
                title="zoom"
                className="absolute bottom-0 left-0  m-4 bg-white dark:bg-black rounded-full p-1 bg-opacity-30 dark:bg-opacity-30 "
              >
                {!zoomed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="w-full text-black dark:text-white px-10 py-4 text-base font-Montserrat">
              LolaDeco&reg; Photos
            </p>
          </div>
        </Modal>
      )}
      <div className="lg:container mx-auto px-5 prose lg:prose-xl">
        <h1 className="text-slate-900 dark:text-white font-Montserrat leading-10 mx-4">
          {source.title}
        </h1>
        <div className="lg:container h-full  w-full flex items-center overflow-auto ">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-4  mx-auto ">
            {createArray(51).map((item) => (
              <div
                key={item}
                className={
                  "relative transition-all duration-300 flex items-center h-auto "
                }
              >
                <div className="relative w-80   h-40 rounded-lg shadow-xl hover:shadow-2xl bg-black overflow-hidden">
                  <Image
                    onClick={() => {
                      setSelectedImage(item + 1);
                      setVisibility(true);
                    }}
                    className=" object-cover hover:object-contain scale-125  hover:scale-100 lg:grayscale hover:grayscale-0  transition-all duration-500 ease-in-out"
                    loading="lazy"
                    src={`/images/products/product${item + 1}.webp`}
                    alt="item"
                    layout="fill"
                    objectPosition={"center"}
                    objectFit="cover"
                    placeholder="empty"
                    blurDataURL={`/images/products/item${item + 1}.webp`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
