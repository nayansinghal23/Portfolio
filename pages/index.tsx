import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  const [middleComponent, setMiddleComponent] = useState<string>("about");

  return (
    <div className="min-h-screen">
      <Head>
        <title>Frontend Developer - Nayan Singhal</title>
      </Head>
      <Navbar
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
        setMiddleComponent={setMiddleComponent}
      />
      <div
        className={`relative ${
          openHamburger && "top-40"
        } md:top-0 flex flex-col md:flex-row justify-between`}
      >
        <Introduction />
        {middleComponent === "about" && <About />}
        {middleComponent === "education" && <Education />}
        {middleComponent === "experience" && <Experience />}
        {middleComponent === "projects" && <Projects />}
      </div>
    </div>
  );
};

export default Home;
