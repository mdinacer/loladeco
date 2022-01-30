import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Broderie A main",
    description: "Dessins, Noms, Bordure...",
    image: "cover1.webp",
  },
  {
    id: 2,
    title: "A chacun son goût",
    description: "Couleurs, Types de tissus, Mesures, Formes",
    image: "cover2.webp",
  },
  {
    id: 3,
    title: "Sur mesure",
    description: "Grand ou petit, Rond ou rectangulaire...",
    image: "cover3.webp",
  },
];

export default function Services() {
  return (
    <div className="relative h-auto w-full bg-[#EFDAD7] drop-shadow-lg z-10 pb-10">
      <div>
        <h1 className="relative text-7xl font-GreatVibes text-center py-16">
          Nos Services
        </h1>
        <div className="relative grid grid-flow-row sm:grid-rows-1 grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-[50vh] w-full max-w-sm mx-auto bg-[#EDCDBB] shadow-inner shadow-[#c5aa9b] rounded-t-full  overflow-hidden"
            >
              <div className="relative w-full h-[75%]">
                <Image
                  src={`/images/${item.image}`}
                  alt="service1"
                  objectFit="cover"
                  objectPosition={"left bottom"}
                  layout="fill"
                />
              </div>
              <div className="relative w-full h-auto font-RobotoC flex flex-col justify-center items-center">
                <h2 className="text-4xl font-Oswald text-center my-3">
                  {item.title}
                </h2>
                <p className="font-RobotoC text-xl font-light mx-auto px-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
