import EducationCart from "./EducationCart";

interface IEducation {
  course: string;
  insitute: string;
  startYear: string;
  endYear: string;
  marks: string;
}

const Education = () => {
  const education: IEducation[] = [
    {
      course: "B Tech CSE",
      insitute: "Galgotias University, Greater Noida",
      startYear: "2020",
      endYear: "2024",
      marks: "84.1%",
    },
    {
      course: "XIIth",
      insitute: "K.L. International School, Meerut",
      startYear: "2019",
      endYear: "2020",
      marks: "94.8%",
    },
    {
      course: "B Tech CSE",
      insitute: "K.L. International School, Meerut",
      startYear: "2017",
      endYear: "2018",
      marks: "88.4%",
    },
  ];
  return (
    <div className="m-5 flex flex-col gap-3 md:w-[50%] items-center">
      <p className="text-3xl font-semibold">Education</p>
      <div className="flex flex-col gap-3 w-full">
        {education.map(
          (
            { course, insitute, startYear, endYear, marks }: IEducation,
            index: number
          ) => (
            <EducationCart
              key={index}
              course={course}
              insitute={insitute}
              startYear={startYear}
              endYear={endYear}
              marks={marks}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Education;
