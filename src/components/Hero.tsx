"use client";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/avatar1.svg"
            height={200}
            width={200}
            alt="avatar1"
            className="pb-6"
          />
          <h2 className="uppercase text-2xl md:text-4xl font-bold">
            pavankumar k r
          </h2>
          <p className="text-md md:text-lg text-slate-500">Frontend Engineer</p>
          <div className="flex items-center gap-4 py-3">
            <Link href="" id="linkedin">
              <AwesomeButton type="primary">
                <Linkedin size={25} />
              </AwesomeButton>
            </Link>
            <Link href="">
              <AwesomeButton type="primary">
                <Github size={25} />
              </AwesomeButton>
            </Link>
            <Link href="">
              <AwesomeButton type="primary">
                <Twitter size={25} />
              </AwesomeButton>
            </Link>
          </div>
          <AwesomeButton type="secondary">Download CV</AwesomeButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
