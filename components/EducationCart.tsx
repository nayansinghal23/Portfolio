import React from "react";

interface EducationCartProps {
  course: string;
  insitute: string;
  startYear: string;
  endYear: string;
  marks: string;
}

const EducationCart: React.FC<EducationCartProps> = ({
  course,
  insitute,
  startYear,
  endYear,
  marks,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 justify-between bg-slate-500 rounded-lg">
      <p className="font-bold text-red-400 text-xl">{course?.toUpperCase()}</p>
      <p>{insitute}</p>
      <p className="bg-green-200 p-2 rounded-xl max-w-fit text-black font-semibold">
        {startYear} - {endYear}
      </p>
      <p>Score: {marks}</p>
    </div>
  );
};

export default EducationCart;
