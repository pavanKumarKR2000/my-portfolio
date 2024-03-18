import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const eperience_arr = [
  {
    key: 1,
    time: "2023 Feb - Sept",
    name: "Respct",
    location: "remote",
    role: "Frontend engineer",
  },
  {
    key: 2,
    time: "2021 Oct-Nov",
    name: "Bolt IOT",
    location: "remote",
    role: "Frontend intern",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full w-full gap-36">
        <h2 className="text-5xl font-bold">Experience</h2>
        <div className="grid grid-cols-2 gap-6 px-10  rounded-lg w-full">
          {eperience_arr.map((edu) => (
            <ExperienceCard {...edu} key={edu.key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
