import Image from "next/image";

const images = ["product1", "product2", "product3", "product4"];

export default function Work() {
  return (
    <div className="relative w-full h-auto min-h-[30vh] bg-[#EDCDBB] sm:-translate-y-[0vh] pt-10 sm:pt-0 pb-20   ">
      <div className="w-full h-auto mx-auto ">
        <h2 className=" font-GreatVibes text-7xl leading-relaxed mx-auto w-full text-center">
          Mon Travail
        </h2>
      </div>
      <div className="relative grid w-full grid-cols-1 grid-rows-1 sm:grid-cols-4 gap-5 px-5 sm:px-20 pt-20">
        {images.map((img, index) => (
          <div
            key={index}
            className=" bg-black w-full h-64 overflow-hidden transform-gpu rounded-lg lg:scale-90 lg:hover:scale-110 transition-all duration-300"
          >
            <div className="relative w-full h-64  ">
              <Image
                src={`/images/${img}.webp`}
                alt="service"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
