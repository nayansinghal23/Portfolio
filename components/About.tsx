import TechnologyCart from "./TechnologyCart";

interface ITechnology {
  tech: string;
  value: number;
}

const About = () => {
  const technologies: ITechnology[] = [
    {
      tech: "HTML",
      value: 80,
    },
    {
      tech: "CSS",
      value: 80,
    },
    {
      tech: "JavaScript",
      value: 75,
    },
    {
      tech: "ReactJS",
      value: 70,
    },
    {
      tech: "NextJS",
      value: 50,
    },
    {
      tech: "Typescript",
      value: 50,
    },
    {
      tech: "NodeJS",
      value: 60,
    },
    {
      tech: "ExpressJS",
      value: 70,
    },
    {
      tech: "Prisma",
      value: 50,
    },
    {
      tech: "MongoDB",
      value: 60,
    },
    {
      tech: "Mongoose",
      value: 65,
    },
    {
      tech: "MUI",
      value: 80,
    },
    {
      tech: "Bootstrap",
      value: 80,
    },
    {
      tech: "Tailwind",
      value: 80,
    },
  ];
  return (
    <div className="m-5 flex flex-col gap-3 md:w-[50%] items-center">
      <p className="text-3xl font-semibold">About</p>
      <div className="flex flex-wrap gap-3">
        {technologies?.map(({ tech, value }: ITechnology, index: number) => (
          <TechnologyCart key={index} tech={tech} value={value} />
        ))}
      </div>
    </div>
  );
};

export default About;
