import Link from "next/link";
import React from "react";

interface ProjectsCartProps {
  title: string;
  description: string;
  techUsed: string[];
  github: string;
  hoisted: string;
}

const ProjectsCart: React.FC<ProjectsCartProps> = ({
  title,
  description,
  techUsed,
  github,
  hoisted,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-between bg-slate-500 rounded-lg">
      <p className="font-bold text-red-400 text-xl">{title?.toUpperCase()}</p>
      <p>{description}</p>
      <div className="flex gap-2">
        <p>Tech Used : </p>
        {techUsed.map((tech: string, index: number) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <div className="flex justify-between underline hover:cursor-pointer">
        <Link href={github} target="_blank">
          View Code
        </Link>
        <Link href={hoisted} target="_blank">
          View Site
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCart;
