import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full h-auto min-h-[30vh] bg-[#FFF8F3] ">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cover.webp')]  grayscale opacity-30 bg-fill "></div>
      <div className="absolute top-0 opacity-40 left-0 w-full h-full bg-[#FFF8F3]    "></div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 grid-rows-1 w-full h-full">
        <div className="w-full h-[50vh] font-RobotoC text-xl font-light max-w-sm mx-auto my-auto -translate-y-5 flex flex-col items-center justify-center">
          <h2 className=" font-GreatVibes text-6xl leading-relaxed">
            A propos de moi
          </h2>
          <p className="text-lg font-RobotoC px-1 lg:px-1 md:px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illo excepturi repellendus! Ullam, voluptas repellat? Facilis
            consectetur officiis nemo quas quibusdam iure, beatae maiores ex
            natus quos repudiandae veniam reiciendis.
          </p>
        </div>
        <div className="relative drop-shadow-lg z-[5] flex items-center justify-center">
          <div className="relative h-96 sm:w-96 w-full   sm:rounded-full overflow-hidden mx-auto my-auto ">
            <Image
              src={"/images/cover4.jpg"}
              alt="service1"
              layout="fill"
              objectFit="cover"
              className="  object-cover"
              objectPosition={"left 80%"}
            />
          </div>
        </div>
      </div>

      <div
        className="relative hidden sm:block bottom-0 left-0 h-[10vh] bg-[#EDCDBB]"
        style={{
          clipPath: "polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%)",
        }}
      ></div>
    </div>
  );
}
