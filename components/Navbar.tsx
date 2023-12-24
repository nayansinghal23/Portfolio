import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  openHamburger: boolean;
  setOpenHamburger: any;
  setMiddleComponent: any;
}

const Navbar: React.FC<NavbarProps> = ({
  openHamburger,
  setOpenHamburger,
  setMiddleComponent,
}) => {
  return (
    <div className="bg-white text-black h-10 flex justify-between items-center px-2 relative">
      <p
        className="text-xl font-semibold hover:cursor-pointer"
        onClick={() => setMiddleComponent("")}
      >
        Nayan Singhal
      </p>
      <div className="hidden md:flex flex-row justify-center items-center gap-5">
        <p
          className="hover:cursor-pointer"
          onClick={() => setMiddleComponent("about")}
        >
          About
        </p>
        <p
          className="hover:cursor-pointer"
          onClick={() => setMiddleComponent("education")}
        >
          Education
        </p>
        <p
          className="hover:cursor-pointer"
          onClick={() => setMiddleComponent("projects")}
        >
          Projects
        </p>
        <p
          className="hover:cursor-pointer"
          onClick={() => setMiddleComponent("experience")}
        >
          Experience
        </p>
      </div>
      <div
        className="md:hidden hover:cursor-pointer"
        onClick={() => setOpenHamburger(!openHamburger)}
      >
        <GiHamburgerMenu className="w-10 h-8" />
      </div>
      {openHamburger && (
        <div className="md:hidden absolute top-10 bg-white w-full left-0 flex flex-col p-2 gap-3">
          <p
            className="hover:cursor-pointer"
            onClick={() => setMiddleComponent("about")}
          >
            About
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => setMiddleComponent("education")}
          >
            Education
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => setMiddleComponent("projects")}
          >
            Projects
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => setMiddleComponent("experience")}
          >
            Experience
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
