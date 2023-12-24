import React from "react";

interface ExperienceCartProps {
  company: string;
  position: string;
  startTime: string;
  endTime: string;
  techUsed: string[];
}

const ExperienceCart: React.FC<ExperienceCartProps> = ({
  company,
  position,
  startTime,
  endTime,
  techUsed,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-between bg-slate-500 rounded-lg">
      <p className="font-bold text-red-400 text-xl">{company?.toUpperCase()}</p>
      <p>{position}</p>
      <p className="bg-green-200 p-2 rounded-xl max-w-fit text-black font-semibold">
        {startTime} - {endTime}
      </p>
      <div className="flex gap-2">
        <p>Tech Used : </p>
        {techUsed.map((tech: string, index: number) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCart;
