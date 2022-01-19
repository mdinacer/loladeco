import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="scroll-smooth">
      <ThemeProvider attribute="class" enableSystem={false}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
