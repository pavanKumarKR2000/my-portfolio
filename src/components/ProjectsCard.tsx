"use client";
import { FileBox, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AwesomeButton } from "react-awesome-button";

interface ProjectsCardProp {
  img: string;
  name: string;
  code: string;
  demo: string;
}

const ProjectsCard = ({ img, name, code, demo }: ProjectsCardProp) => {
  return (
    <div className="space-y-4 gap-3 gradient p-4 rounded-md ">
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-white flex-grow" />
        <div className="p-1 bg-white rounded-md">
          <FileBox size={25} className="text-black" />
        </div>
        <div className="h-[1px] bg-white flex-grow" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-2">
        <h2 className="text-lg  font-bold text-white">{name}</h2>
        <Image
          src={img}
          alt="projects"
          height={200}
          width={300}
          className="w-full object-cover"
        />
        <div className="flex items-center gap-4 justify-start w-full">
          <Link href={code} target="_blank">
            <AwesomeButton type="primary">
              <Github size={25} />
            </AwesomeButton>
          </Link>
          <Link href={demo} target="_blank">
            <AwesomeButton type="primary">Demo</AwesomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
