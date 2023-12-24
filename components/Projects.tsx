import ProjectsCart from "./ProjectsCart";

interface IProjects {
  title: string;
  description: string;
  techUsed: string[];
  github: string;
  hoisted: string;
}

const Projects = () => {
  const projects: IProjects[] = [
    {
      title: "Store",
      description:
        "Composed a responsive online store for purchasing products using ReactJS. Advanced State Management techniques are implemented using Redux Toolkit and Redux Thunk.",
      techUsed: ["ReactJS", "Redux"],
      github: "https://github.com/nayansinghal23/Store",
      hoisted:
        "https://64ba88ebe2ed1a0082db2009--unique-babka-20bb70.netlify.app/",
    },
    {
      title: "NS Tube",
      description:
        "Modernised a YouTube clone web application that replicates core functionalities of the popular video-sharing platform. Displayed 1000+ videos through JSX Card Components by fetching data from RapidAPI Hub.",
      techUsed: ["ReactJS"],
      github: "https://github.com/nayansinghal23/Youtube-Clone",
      hoisted:
        "https://647581ffc2068c1ca281ef7f--courageous-florentine-ca7e8e.netlify.app/",
    },
  ];

  return (
    <div className="m-5 flex flex-col gap-3 md:w-[50%] items-center">
      <p className="text-3xl font-semibold">Projects</p>
      <div className="flex flex-wrap gap-3 flex-col w-full">
        {projects?.map(
          (
            { title, description, github, hoisted, techUsed }: IProjects,
            index: number
          ) => (
            <ProjectsCart
              key={index}
              title={title}
              description={description}
              github={github}
              hoisted={hoisted}
              techUsed={techUsed}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
