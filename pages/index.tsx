import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React, { useState } from "react";

const Home = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Frontend Developer - Nayan Singhal</title>
      </Head>
      <Navbar
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
      />
      <div className={`relative ${openHamburger && "top-40"} md:top-0`}>
        <Introduction />
      </div>
    </div>
  );
};

export default Home;
