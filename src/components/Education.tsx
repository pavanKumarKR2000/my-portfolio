import React from "react";
import EducationCard from "./EducationCard";

const education_arr = [
  {
    key: 1,
    time: "2018-2022",
    name: "Ramaiah institute of technology",
    location: "Bangalore,Karnataka,India",
    grade: "First class with distinction",
  },

  {
    key: 2,
    time: "2016-2018",
    name: "Boscoss pu college",
    location: "Mangalore,Karnataka,India",
    grade: "95 percentage",
  },
  {
    key: 3,
    time: "2014-2016",
    name: "Hongirana school of excellence",
    location: "Amatekoppa,Sagara,Karnataka,India",
    grade: "9.0 gpa",
  },
];

const Education = () => {
  return (
    <section id="education" className="md:h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full w-full gap-16 md:gap-36">
        <h2 className="text-5xl font-bold">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-1 md:px-10  rounded-lg w-full">
          {education_arr.map((edu) => (
            <EducationCard {...edu} key={edu.key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
