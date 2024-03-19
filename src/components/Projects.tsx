"use client";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";

const projects_arr = [
  {
    key: 1,
    img: "/jotion.png",
    name: "Jotion",
    code: "https://github.com/pavanKumarKR2000/notion-clone",
    demo: "https://jotion-psi-red.vercel.app/documents/j57a86bxhzzmmb8kv6crf54c996ky85b",
  },
  {
    key: 2,
    img: "/job-portal.png",
    name: "Job portal",
    code: "https://github.com/pavanKumarKR2000/job-portal",
    demo: "https://job-portal-xi-orpin.vercel.app/",
  },
  {
    key: 3,
    img: "/spotify.png",
    name: "Spotify clone",
    code: "https://github.com/pavanKumarKR2000/spotify-clone",
    demo: "https://spotify-clone-ashy-seven-31.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="md:h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full w-full gap-16 md:gap-36">
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-1 md:px-10  rounded-lg w-full">
          {projects_arr.map((pr) => (
            <ProjectsCard {...pr} key={pr.key} />
          ))}
        </div>
        <Link
          href="https://github.com/pavanKumarKR2000?tab=repositories"
          target="_blank"
        >
          <AwesomeButton type="primary">Show more</AwesomeButton>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
