import React from "react";
import Image from "next/image";

const eeperience_arr = [
  {
    key: 1,
    img: "https://cdn.svgporn.com/logos/html-5.svg",
    name: "HTML",
  },
  {
    key: 2,
    img: "https://cdn.svgporn.com/logos/css-3.svg",
    name: "CSS",
  },
  {
    key: 3,
    img: "https://cdn.svgporn.com/logos/javascript.svg",
    name: "JAVASCRIPT",
  },
  {
    key: 4,
    img: "https://cdn.svgporn.com/logos/typescript-icon.svg",
    name: "TYPESCRIPT",
  },
  {
    key: 5,
    img: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
    name: "TAILWIND CSS",
  },
  {
    key: 6,
    img: "https://cdn.svgporn.com/logos/react.svg",
    name: "REACT JS",
  },
  {
    key: 7,
    img: "https://cdn.svgporn.com/logos/nextjs.svg",
    name: "NEXT JS",
  },
  {
    key: 8,
    img: "https://cdn.svgporn.com/logos/figma.svg",
    name: "FIGMA",
  },
  {
    key: 9,
    img: "https://cdn.svgporn.com/logos/git-icon.svg",
    name: "GIT",
  },
  {
    key: 10,
    img: "https://cdn.svgporn.com/logos/greensock-icon.svg",
    name: "GSAP",
  },
  {
    key: 11,
    img: "https://cdn.svgporn.com/logos/java.svg",
    name: "JAVA",
  },
  {
    key: 12,
    img: "https://cdn.svgporn.com/logos/supabase-icon.svg",
    name: "SUPABASE",
  },
];

const Skills = () => {
  return (
    <section id="education" className="h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full w-full gap-36">
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="grid grid-cols-6 gap-6 px-10  rounded-lg w-full">
          {eeperience_arr.map((exp) => (
            <div
              key={exp.key}
              className="flex flex-col items-center justify-center gap-3 bg-blue-200 p-2"
            >
              <Image src={exp.img} height={50} width={50} alt="skills_logo" />
              <p className="text-slate-500 italic">{exp.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
