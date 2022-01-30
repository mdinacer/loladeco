export default function Order() {
  return (
    <div className="relative h-[50vh] w-full  bg-[#EFDAD7] flex items-start justify-center drop-shadow-md">
      <div className="hidden sm:block absolute top-0 left-0 h-full w-full bg-cover opacity-70 bg-fixed bg-[url('https://images.pexels.com/photos/4614107/pexels-photo-4614107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')]" />
      <div className="relative w-full max-w-lg h-full sm:h-[40vh]  sm:bg-[#EDCDBB] sm:bg-opacity-50 backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500 transform-gpu  rounded-none sm:rounded-b-full  shadow-[#ceb1a0] flex flex-col items-center justify-center drop-shadow-lg">
        <div className=" w-full h-auto mx-auto pt-0">
          <h2 className=" font-GreatVibes text-5xl sm:text-6xl leading-relaxed mx-auto w-full text-center">
            Placer une commande
          </h2>
          <p className="text-center max-w-sm mx-auto px-5 font-RobotoC font-thin text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a,
            voluptates doloremque nemo inventore dolorum ratione deserunt
            placeat rem? Praesentium consequatur amet sequi iure obcaecati ex in
            deserunt id tempora!
          </p>
          <div className=" w-full flex flex-col">
            <a className=" mx-5 py-2">
              <p className="flex flex-col items-center justify-center">
                <span className=" font-RobotoC text-2xl">
                  LolaDeco@gmail.com
                </span>
              </p>
            </a>

            <a type="button" className=" mx-5 py-2">
              <p className="flex flex-col items-center justify-center">
                <span className=" font-RobotoC text-2xl">
                  {" "}
                  +213 662 991 735
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
