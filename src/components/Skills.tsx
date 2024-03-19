import React from "react";
import Image from "next/image";
import { Swords } from "lucide-react";

const experience_arr = [
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
    height: 80,
    width: 80,
    className: "invert",
  },
  {
    key: 8,
    img: "https://cdn.svgporn.com/logos/figma.svg",
    name: "FIGMA",
    height: 30,
    width: 30,
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
    <section id="skills" className="md:h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full w-full gap-16 md:gap-36">
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-6 px-10  rounded-lg w-full">
          {experience_arr.map((exp) => (
            <div
              key={exp.key}
              className="space-y-4 gap-3 gradient p-4 rounded-md "
            >
              <div className="flex items-center gap-3">
                <div className="h-[1px] bg-white flex-grow" />
                <div className="p-1 bg-white rounded-md">
                  <Swords size={25} className="text-black" />
                </div>
                <div className="h-[1px] bg-white flex-grow" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 py-2 h-[60%]">
                <Image
                  src={exp.img}
                  height={exp.height ? exp.height : 50}
                  width={exp.width ? exp.height : 50}
                  alt="skills_logo"
                  className={exp.className ? exp.className : ""}
                />
                <p className="italic text-white">{exp.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
