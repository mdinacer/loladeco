import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";
import Services from "../components/Services";
import About from "../components/About";
import Work from "../components/Work";
import Order from "../components/Order";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" space-y-14 lg:space-y-24 text-black">
      <Head>
        <title>LolaDeco - Couture</title>
        <link rel="icon" href={"/favicon.ico"} />
        <link rel="manifest" href={"/manifest.json"} />
      </Head>

      <main>
        <div className="relative h-full w-full min-h-screen">
          <Hero />
          <Services />

          <About />

          <Work />

          <Order />
        </div>
      </main>
    </div>
  );
}
