import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";
import Services from "../components/Services";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className=" space-y-14 lg:space-y-24">
      <Head>
        <title>LolaDeco - Couture</title>
        <link rel="icon" href={"/favicon.ico"} />
        <link rel="manifest" href={"/manifest.json"} />
      </Head>

      <main>
        <div className="relative h-full w-full min-h-screen">
          <Hero />

          <div className="relative h-full w-full  bg-[#EFDAD7] py-20 drop-shadow-lg z-10">
            <div>
              <h1 className="text-7xl font-GreatVibes m-20 text-center">
                Nos Services
              </h1>
              <div className="grid grid-flow-row sm:grid-rows-1 grid-cols-1 sm:grid-cols-3 gap-5 w-full px-5">
                <div className="relative h-[50vh] w-full max-w-sm mx-auto   bg-[#EDCDBB] drop-shadow-md rounded-t-full  overflow-hidden">
                  <div className="relative w-full h-[60%]">
                    <Image
                      src={"/images/cover1.webp"}
                      alt="service1"
                      objectFit="cover"
                      objectPosition={"left bottom"}
                      layout="fill"
                    />
                  </div>
                  <div className="relative w-full h-auto font-RobotoC flex flex-col justify-center items-center">
                    <h2 className="text-4xl font-Oswald text-center my-5">
                      Broderie A main
                    </h2>
                    <p className="font-RobotoC text-xl font-light mx-auto px-3">
                      Dessins, Noms, Bordure...
                    </p>
                  </div>
                </div>

                <div className="relative h-[50vh] w-full max-w-sm mx-auto  bg-[#EDCDBB] drop-shadow-md rounded-t-full overflow-hidden">
                  <div className="relative w-full h-[60%]">
                    <Image
                      src={"/images/cover2.webp"}
                      alt="service1"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full h-auto font-RobotoC flex flex-col justify-center items-center my-auto">
                    <h2 className="text-4xl font-Oswald text-center my-5">
                      A chacun son goût
                    </h2>
                    <p className="font-RobotoC text-xl font-light mx-auto px-3">
                      Couleurs, Types de tissus, Mesures, Formes
                    </p>
                  </div>
                </div>

                <div className="relative h-[50vh] w-full max-w-sm mx-auto  bg-[#EDCDBB] drop-shadow-md rounded-t-full overflow-hidden">
                  <div className="relative w-full h-[60%]">
                    <Image
                      src={"/images/cover3.webp"}
                      alt="service1"
                      objectFit="cover"
                      objectPosition={"left 10%"}
                      layout="fill"
                    />
                  </div>
                  <div className="w-full h-auto font-RobotoC flex flex-col justify-center items-center relative">
                    <h2 className="text-4xl font-Oswald text-center my-5">
                      Sur mesure
                    </h2>
                    <p className="font-RobotoC text-xl font-light mx-auto px-3">
                      Grand ou petit, Rond ou rectangulaire...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-auto min-h-[30vh] bg-[#FFF8F3] ">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cover.webp')]  grayscale opacity-30 bg-fill "></div>
            <div className="absolute top-0 opacity-40 left-0 w-full h-full bg-[#FFF8F3]    "></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 grid-rows-1 w-full h-full">
              <div className="w-full h-[50vh] font-RobotoC text-xl font-light max-w-sm mx-auto my-auto -translate-y-5 flex flex-col items-center justify-center">
                <h2 className=" font-GreatVibes text-6xl leading-relaxed">
                  A propos de moi
                </h2>
                <p className="text-lg font-RobotoC px-1 lg:px-1 md:px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident illo excepturi repellendus! Ullam, voluptas
                  repellat? Facilis consectetur officiis nemo quas quibusdam
                  iure, beatae maiores ex natus quos repudiandae veniam
                  reiciendis.
                </p>
                <button className="py-1 px-2 bg-[#EDCDBB] w-auto mx-auto rounded-md my-5 ">
                  Contactez moi
                </button>
              </div>
              <div className="relative drop-shadow-lg z-[5]">
                <div className="relative lg:w-[30vw] md:w-[50vw] h-[50vh] sm:rounded-full overflow-hidden mx-auto ">
                  <Image
                    src={
                      "https://images.pexels.com/photos/3650426/pexels-photo-3650426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    }
                    alt="service1"
                    layout="fill"
                    objectFit="cover"
                    className="  object-cover"
                    objectPosition={"right 10%"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EDCDBB]">
            <div
              className="relative w-full h-auto min-h-[30vh] bg-[#EDCDBB] sm:-translate-y-[10vh] pb-20  "
              style={{
                clipPath: "polygon(50% 0%, 100% 6%, 100% 100%, 0 100%, 0 5%)",
              }}
            >
              <div className="w-full h-auto mx-auto pt-20">
                <h2 className=" font-GreatVibes text-7xl leading-relaxed mx-auto w-full text-center">
                  Mon Travail
                </h2>
              </div>
              <div className="relative grid w-full grid-cols-1 grid-rows-1 sm:grid-cols-4 gap-20 px-20 pt-20">
                <div className=" bg-black w-full h-64 overflow-hidden rounded-lg">
                  <div className="relative w-full h-64  ">
                    <Image
                      src={"/images/product1.webp"}
                      alt="service"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className=" bg-black w-full h-64 overflow-hidden rounded-lg">
                  <div className="relative w-full h-64  ">
                    <Image
                      src={"/images/product2.webp"}
                      alt="service"
                      layout="fill"
                      objectFit="cover"
                      objectPosition={"left 30%"}
                    />
                  </div>
                </div>
                <div className=" bg-black w-full h-64 overflow-hidden rounded-lg">
                  <div className="relative w-full h-64  ">
                    <Image
                      src={"/images/product3.webp"}
                      alt="service"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className=" bg-black w-full h-64 overflow-hidden rounded-lg">
                  <div className="relative w-full h-64  ">
                    <Image
                      src={"/images/product4.webp"}
                      alt="service"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[50vh] w-full  bg-[#EFDAD7] flex items-start justify-center drop-shadow-md">
            <div className="absolute top-0 left-0 h-full w-full bg-cover opacity-70 bg-fixed bg-[url('https://images.pexels.com/photos/4614107/pexels-photo-4614107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')]" />
            <div className="relative w-full max-w-lg h-[40vh] bg-[#EDCDBB] rounded-b-full  shadow-[#ceb1a0] flex flex-col items-center justify-center drop-shadow-lg">
              <div className=" w-full h-auto mx-auto pt-0">
                <h2 className=" font-GreatVibes text-6xl leading-relaxed mx-auto w-full text-center">
                  Placer une commande
                </h2>
                <p className="text-center max-w-sm mx-auto px-5 font-RobotoC font-thin text-lg pb-20">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  a, voluptates doloremque nemo inventore dolorum ratione
                  deserunt placeat rem? Praesentium consequatur amet sequi iure
                  obcaecati ex in deserunt id tempora!
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[30vh] w-full  bg-[#EDCDBB] flex  items-center justify-center">
            <div className="flex mx-auto flex-col sm:flex-row">
              <button type="button" className=" mx-5 py-5">
                <p className="flex flex-col items-center justify-center">
                  <span className=" font-GreatVibes text-5xl leading-normal">
                    Email{" "}
                  </span>
                  <span className=" font-RobotoC text-2xl">
                    LolaDeco@gmail.com
                  </span>
                </p>
              </button>

              <button type="button" className=" mx-5 py-5">
                <p className="flex flex-col items-center justify-center">
                  <span className=" font-GreatVibes text-5xl leading-normal">
                    Phone:{" "}
                  </span>
                  <span className=" font-RobotoC text-2xl">
                    {" "}
                    +213 662 991 735
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* <section>
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="work">
          <Work />
        </section> */}
      </main>
    </div>
  );
}
