import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMobile } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Introduction = () => {
  return (
    <div className="mx-10 md:mr-0 md:w-[35vw] h-[70vh] mt-3 bg-teal-100 md:ml-5 flex flex-col justify-between items-center rounded-xl text-zinc-400 font-semibold">
      <Image
        width={100}
        height={50}
        style={{ height: "150px", width: "120px" }}
        alt="nayan-img"
        src="/images/nayan_image.webp"
      />
      <div className="flex flex-col gap-3 bg-gray-700 rounded-xl py-3 w-full items-center">
        <p className="font-semibold text-2xl">Nayan Singhal</p>
        <p>MERN Stack Developer</p>
      </div>
      <div className="flex justify-between gap-5">
        <Link
          href="https://www.linkedin.com/in/nayan-singhal-3a9824222/"
          target="_blank"
        >
          <div className="bg-gray-700 p-3 rounded-full text-white">
            <FaLinkedin size={20} />
          </div>
        </Link>
        <Link href="https://github.com/nayansinghal23/" target="_blank">
          <div className="bg-gray-700 p-3 rounded-full text-white">
            <FaGithub size={20} />
          </div>
        </Link>
      </div>
      <div className="bg-gray-700 rounded-xl w-full">
        <div className="flex items-center gap-5 justify-center py-2">
          <FaMobile />
          <p>7078067350</p>
        </div>
        <hr />
        <div className="flex items-center gap-5 justify-center py-2">
          <MdOutlineMailOutline />
          <p className="text-[10px]">nayansinghal393@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
