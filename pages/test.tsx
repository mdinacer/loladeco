import Image from "next/image";

export default function Test() {
  return (
    <div className="relative h-full w-full min-h-screen">
      <div className="absolute top-0 left-0 h-[60vh] w-full bg-cover bg-center   bg-[url('https://images.pexels.com/photos/6850456/pexels-photo-6850456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')]"></div>

      <div className="  h-screen w-full flex justify-center items-center ">
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
            <span className="font-GreatVibes text-9xl translate-y-8 ">
              Lola{" "}
            </span>
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

      <div className="relative  min-h-screen h-full w-full py-5 sm:py-20 bg-slate-300 dark:bg-slate-600">
        <div className="relative  h-full w-[80%] bg-[#F05454] mx-auto my-5 rounded-xl drop-shadow-lg  backdrop-blur-sm overflow-hidden">
          <div className=" relative grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-rows-2 gap-4 py-10 w-full h-full px-3 sm:px-20">
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  Broderie faite à main
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  A chacun son goût
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  Sur Mesure
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  Draps & Couvre-lits
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  Oreillers & Coussins
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <div>
                <h1 className="text-4xl font-Oswald leading-normal">
                  Napes et Serviettes
                </h1>
                <p className="font-RobotoC max-w-sm font-thin text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  vel doloribus accusamus vero, possimus impedit laboriosam
                  porro minima autem commodi?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  h-full w-[80%] bg-[#D6E5FA] text-black mx-auto my-20 rounded-xl drop-shadow-lg  backdrop-blur-sm overflow-hidden">
          <h1 className="text-5xl font-Oswald leading-normal m-10">
            Notre Travail
          </h1>
          <div>
            <div className=" relative grid grid-cols-1 sm:grid-cols-4 grid-flow-row  gap-4 py-10 w-full h-full px-10">
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image1.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image2.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image3.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image4.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image5.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image6.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image7.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image8.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-48 w-80  rounded-lg flex flex-col overflow-hidden">
                <div className=" flex-initial px-3 py-2">
                  <p className="font-RobotoC text-xl">Napes et Serviettes</p>
                </div>
                <div className="relative flex-auto overflow-hidden rounded-lg">
                  <Image
                    src={"/images/products/towels_napkins/image9.jpg"}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
