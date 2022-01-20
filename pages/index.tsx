import Head from "next/head";
import Hero from "../components/Hero";
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

      <main className="antialiased ">
        <section>
          <Hero />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Work />
        </section>
      </main>
    </div>
  );
}
