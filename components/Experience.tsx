import ExperienceCart from "./ExperienceCart";

interface IExperience {
  company: string;
  position: string;
  startTime: string;
  endTime: string;
  techUsed: string[];
}

const Experience = () => {
  const experience: IExperience[] = [
    {
      company: "Srijcon Innovations",
      position: "ReactJS Intern",
      startTime: "April 2023",
      endTime: "July 2023",
      techUsed: ["ReactJS", "Redux", "Material UI"],
    },
    {
      company: "Brimo Software Solutions",
      position: "Frontend Intern",
      startTime: "July 2022",
      endTime: "January 2023",
      techUsed: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div className="m-5 flex flex-col gap-3 md:w-[50%] items-center">
      <p className="text-3xl font-semibold">Experience</p>
      <div className="flex flex-wrap gap-3 flex-col w-full">
        {experience?.map(
          (
            { company, position, startTime, endTime, techUsed }: IExperience,
            index: number
          ) => (
            <ExperienceCart
              key={index}
              company={company}
              position={position}
              startTime={startTime}
              endTime={endTime}
              techUsed={techUsed}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
