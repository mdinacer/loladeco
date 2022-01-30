import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative h-[40vh] w-full  bg-[#EDCDBB] flex  items-center justify-center ">
      <div className="relative w-full max-w-lg h-full sm:h-[40vh] bg-[#FFF8F3]   sm:bg-[#d8bbaa] rounded-none sm:rounded-b-full  shadow-[#88756a] flex flex-col items-center justify-center shadow-none  sm:shadow-inner">
        <div className=" w-full h-auto mx-auto pt-0 flex flex-col">
          <a className=" mx-5 py-5">
            <p className="flex flex-col items-center justify-center">
              <span className=" font-GreatVibes text-7xl leading-normal">
                {"Email "}
              </span>
              <span className=" font-RobotoC text-2xl">LolaDeco@gmail.com</span>
            </p>
          </a>

          <a type="button" className=" mx-5 py-5">
            <p className="flex flex-col items-center justify-center">
              <span className=" font-GreatVibes text-7xl leading-normal">
                {"Phone "}
              </span>
              <span className=" font-RobotoC text-2xl"> +213 662 991 735</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
