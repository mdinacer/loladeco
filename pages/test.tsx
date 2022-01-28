import Image from "next/image";

export default function Test() {
  return (
    <div className="relative h-full w-full min-h-screen">
      <div className="absolute top-0 left-0 h-full w-full bg-cover bg-top   bg-[url('/images/products/towels_napkins/image7.jpg')]"></div>
      <div className="absolute top-0 left-0 h-full w-full mix-blend-multiply opacity-90  bg-gradient-to-br from-[#24A19C]  to-[#325288]"></div>

      <div className=" min-h-[50vh] h-full w-full flex justify-center items-center ">
        <div className=" relative flex items-center justify-center flex-col">
          <h1 className="text-white  flex flex-col ">
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

      <div className="relative  min-h-screen h-full w-full py-32">
        <div className="relative  h-[50vh] w-[80%] bg-[#FFF2F9] mx-auto my-20 rounded-xl drop-shadow-lg bg-opacity-20 backdrop-blur-sm overflow-hidden">
          <div className=" relative grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-rows-2 gap-4 py-10 w-full h-full px-20">
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

        <div className="relative  h-full w-[80%] bg-[#FFF2F9] mx-auto my-20 rounded-xl drop-shadow-lg bg-opacity-20 backdrop-blur-sm overflow-hidden">
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
