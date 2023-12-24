import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  openHamburger: boolean;
  setOpenHamburger: any;
}

const Navbar: React.FC<NavbarProps> = ({ openHamburger, setOpenHamburger }) => {
  return (
    <div className="bg-white text-black h-10 flex justify-between items-center px-2 relative">
      <Link href="/" className="text-xl font-semibold">
        Nayan Singhal
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5">
        <Link href="/about">About</Link>
        <Link href="/education">Education</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
      </div>
      <div
        className="md:hidden hover:cursor-pointer"
        onClick={() => setOpenHamburger(!openHamburger)}
      >
        <GiHamburgerMenu className="w-10 h-8" />
      </div>
      {openHamburger && (
        <div className="md:hidden absolute top-10 bg-white w-full left-0 flex flex-col p-2 gap-3">
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
