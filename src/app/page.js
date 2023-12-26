import About from "@/components/About";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kush | Front-End Developer</title>
        <meta name="description" content="Create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
