import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { useRouter } from "next/router";
import { headerEn } from "../locales/en/en";
import { headerFr } from "../locales/fr/fr";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale } = useRouter();
  const source = locale === "en" ? headerEn : headerFr;
  return (
    <header>
      <nav className="fixed w-full text-black dark:text-white bg-opacity-60 dark:bg-opacity-60 font-Montserrat  flex flex-wrap items-center justify-between px-2 py-2 mb-3  bg-slate-300 dark:bg-slate-800 z-50 drop-shadow-md backdrop-blur-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href={"/"} locale={"en"} passHref>
              <figure className={"flex flex-row items-center cursor-pointer"}>
                <svg
                  fill="currentColor"
                  className="mr-2 mb-1 -ml-1 w-8 h-8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 446.978 446.978"
                >
                  <g>
                    <path d="m396.212,80.894h-38.218v-44.272c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v44.272h-20.594v-19.178c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v19.178h-209.887v-26.475c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v26.476h-31.747c-27.993-0.001-50.766,22.773-50.766,50.765v67.168c0,27.993 22.773,50.766 50.766,50.766h21.303v29.711c0,2.761 2.239,5 5,5h7.943v19.269c0,2.761 2.239,5 5,5s5-2.239 5-5v-19.269h7.943c2.761,0 5-2.239 5-5v-29.711h42.998c2.701,0 5.193-1.452 6.525-3.802l16.182-28.556h80.35v114.432h-246.51c-4.142,0-7.5,3.358-7.5,7.5v71.188c0,4.142 3.358,7.5 7.5,7.5h431.978c4.142,0 7.5-3.358 7.5-7.5v-278.696c0-27.992-22.773-50.766-50.766-50.766zm-317.379,109.575h22.358v9.415h-22.358v-9.415zm22.358-10h-22.358v-61.188h22.358v61.188zm0-71.188h-22.358v-13.387h22.358v13.387zm-3.235,165.025h-15.887v-24.711h15.886v24.711zm163.555,72.363c4.142,0 7.5-3.358 7.5-7.5v-129.432c0-4.142-3.358-7.5-7.5-7.5h-92.22c-2.701,0-5.193,1.453-6.525,3.802l-16.182,28.556h-95.817c-19.722,0-35.766-16.044-35.766-35.766v-67.169c0-19.722 16.044-35.766 35.766-35.766h18.067v108.989c0,2.761 2.239,5 5,5h32.358c2.761,0 5-2.239 5-5v-108.989h285.021c19.722,0 35.766,16.044 35.766,35.766v223.541h-416.978v-8.533h246.51zm-246.51,56.188v-37.655h416.978v37.655h-416.978z" />
                    <path d="m278.083,208.776v33.859c0,39.928 32.483,72.411 72.411,72.411 39.928,0 72.411-32.483 72.411-72.411v-110.975c0-14.719-11.974-26.693-26.693-26.693h-140.905c-24.316,0-44.098,19.782-44.098,44.098s19.782,44.098 44.098,44.098h7.164c8.608,0.001 15.612,7.004 15.612,15.613zm-22.776-25.612c-18.802,0-34.098-15.296-34.098-34.098s15.296-34.098 34.098-34.098h140.906c9.205,0 16.693,7.488 16.693,16.693v110.975c0,34.414-27.998,62.411-62.412,62.411-34.414,0-62.411-27.998-62.411-62.411v-33.859c0-14.123-11.489-25.612-25.612-25.612h-7.164z" />
                    <path d="m350.494,285.905c10.396,0 20.791-3.957 28.705-11.87 15.828-15.828 15.828-41.581 0-57.409-15.829-15.828-41.581-15.827-57.409,0-15.827,15.828-15.827,41.581 0,57.409 7.914,7.913 18.309,11.87 28.704,11.87zm-21.633-62.208c5.964-5.964 13.799-8.946 21.633-8.946 7.834,0 15.668,2.982 21.633,8.946 11.929,11.928 11.929,31.338 0,43.266-11.929,11.928-31.338,11.928-43.266,0-11.928-11.928-11.928-31.338 5.68434e-14-43.266z" />
                    <path d="m258.274,125.46c-12.57,0-22.797,10.227-22.797,22.796 0,12.57 10.227,22.797 22.797,22.797s22.797-10.227 22.797-22.797c0-12.569-10.227-22.796-22.797-22.796zm0,35.593c-7.056,0-12.797-5.741-12.797-12.797s5.741-12.796 12.797-12.796 12.797,5.74 12.797,12.796-5.741,12.797-12.797,12.797z" />
                    <path d="m172.525,115.753h-37.212c-2.761,0-5,2.239-5,5v51.772c0,2.761 2.239,5 5,5h37.212c2.761,0 5-2.239 5-5v-51.772c2.84217e-14-2.762-2.238-5-5-5zm-5,51.772h-27.212v-41.772h27.212v41.772z" />
                    <path d="m336.262,238.598c1.98,0 3.91-0.8 5.31-2.19 1.39-1.4 2.19-3.33 2.19-5.31 0-1.97-0.8-3.9-2.19-5.3-1.4-1.4-3.33-2.2-5.31-2.2-1.97,0-3.9,0.8-5.3,2.2-1.4,1.4-2.2,3.33-2.2,5.3 0,1.98 0.8,3.91 2.2,5.31 1.4,1.39 3.33,2.19 5.3,2.19z" />
                    <path d="m325.745,143.507h49.498c2.761,0 5-2.239 5-5s-2.239-5-5-5h-49.498c-2.761,0-5,2.239-5,5s2.239,5 5,5z" />
                    <path d="m325.745,163.006h49.498c2.761,0 5-2.239 5-5s-2.239-5-5-5h-49.498c-2.761,0-5,2.239-5,5s2.239,5 5,5z" />
                  </g>
                </svg>
                <a className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap   text-xl  font-Montserrat leading-none">
                  Lola Deco
                </a>
              </figure>
            </Link>

            <div className={"flex flex-row block lg:hidden items-center"}>
              <ThemeSwitch />
              <LanguageSwitch />
              <button
                title="menu"
                className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setOpen(!open)}
              >
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (open ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <Link href="/" passHref>
                  <a
                    href={"/"}
                    className=" px-3 py-2 flex items-center text-xs uppercase font-normal hover:font-bold leading-snug hover:opacity-75"
                  >
                    {source.home}
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href={"#services"} passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-normal hover:font-bold leading-snug hover:opacity-75">
                    {source.services}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"#work"} passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-normal hover:font-bold leading-snug hover:opacity-75">
                    {source.work}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"#contact"} passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-normal hover:font-bold leading-snug hover:opacity-75">
                    {source.contact}
                  </a>
                </Link>
              </li>

              <li className={"hidden lg:block"}>
                <ThemeSwitch />
              </li>
              <li className={"hidden lg:block"}>
                <LanguageSwitch />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
